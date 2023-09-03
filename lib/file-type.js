/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const isUrl = require('is-url');
const fs = require('fs');
const FileType = require('file-type');
const axios = require('axios');
const mime = require('mime-type/with-db');

let startTime;

function close_stream(stream) {
    if (!stream) return;
    if (stream.close) stream.close();
    else if (stream.destroy) stream.destroy();
}

function stream_type(stream) {
    return new Promise((resolve, reject) => {
        let buffer = Buffer.from('');

        stream.on('data', function (buf) {
            buffer = Buffer.concat([buffer, buf]);
            // console.log(buffer.byteLength);

            // attempt to get type
            FileType.fromBuffer(buffer)
                .then((type) => {
                    if (type) {
                        //destroy stream
                        close_stream(stream);

                        // add some meta
                        type.bytesRead = buffer.byteLength;

                        resolve(type);
                    }
                })
                .catch((err) => reject(err));
        });
    });
}

async function get_file_type(file) {
    let stream = fs.createReadStream(file);
    let type = await stream_type(stream);
    return type;
}

async function get_url_type(url) {
    try {
        const controller = new AbortController();

        const { data: stream } = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            signal: controller.signal,
        });

        // on stream closed
        stream.on('close', function () {
            // abort axios request
            controller.abort();
        });

        stream.on('data', function (buf) {
            console.log({ buf });
        });

        // try and glob content-type
        const mimeArr = mime.glob(stream.headers['content-type']);
        let type;

        if (mimeArr.length) {
            type = { mime: mimeArr[0] };
            close_stream(stream);
        } else {
            // if not successful, read stream
            type = await stream_type(stream);
        }

        type.headers = stream.headers || null;
        type.size = stream.headers['content-length']
            ? Number(stream.headers['content-length'])
            : '?';

        return type;
    } catch (error) {
        throw error;
    }
}

async function get_type(file) {
    try {
        if (typeof file !== 'string') {
            throw new Error('input must be a file path/url (STRING)');
        }

        let type = null;
        startTime = Date.now();

        if (isUrl(file)) {
            type = await get_url_type(file);
            type.isUrl = true;
        } else if (fs.existsSync(file)) {
            type = await get_file_type(file);
            type.isFile = true;
        } else {
            throw new Error(`${file} is not a system file nor url`);
        }

        type.took = (Date.now() - startTime) / 1000 + ' s';

        return type;
    } catch (error) {
        throw error;
    }
}

module.exports = get_type;
