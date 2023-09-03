/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const mime = require('mime-type/with-db');
const typer = require('media-typer');
const fileType = require('./lib/file-type');
const path = require('path');
const fs = require('fs');

// const iconDir = path.resolve('./lib/icons');
const icons = require('./lib/icons.json');

class MimeIt {
    constructor() {
        this.mime = mime;
        this.methods = [
            'lookup',
            'glob',
            'clear',
            'load',
            'delete',
            'define',
            'contentType',
            'extension',
            'charset',
        ];

        for (let m of this.methods) {
            this[m] = mime[m].bind(mime);
        }
    }

    async get(file) {
        try {
            if (typeof file !== 'string') {
                throw new Error('input must be a file path/url (STRING)');
            }

            let mimeType = mime.lookup(file) || mime.glob(file)[0] || null;
            this.meta = { file };

            if (!mimeType || 1 == 1) {
                let type = await fileType(file);
                if (!type || !type.mime) return null;

                this.meta.took = type.took;

                this.meta.source = {
                    type: type.isUrl ? 'URL' : type.isFile ? 'FILE' : null,
                    size: type.size,
                    bytesRead: type.bytesRead || 0,
                };

                this.meta.headers = type.headers || null;

                mimeType = type.mime;
            }

            const { type, subtype: subType } = typer.parse(mimeType);

            const ext = /\.[a-z0-9]+$/i.test(file)
                ? file.split('.').pop()
                : mime.extension(mimeType);

            const {
                extensions: all,
                charset,
                compressible,
            } = mime[mimeType] || { extensions: [ext] };

            const extensions = {
                current: ext,
                all,
            };

            const mimeObj = {
                type,
                subType,

                charset: charset || null,
                compressible: compressible || null,

                mime: {
                    type: mimeType,
                    content: mime.contentType(mimeType),
                },

                //ext,
                extensions,
            };

            mimeObj.__proto__ = {
                icon: get_icon(mimeObj),
                meta: this.meta
            };

            return mimeObj;
        } catch (error) {
            throw error;
        }
    }
}

function get_icon(mimeObj) {
    const icon =
        icons[mimeObj.extensions.current] ||
        icons[mimeObj.subType] ||
        icons[mimeObj.type] ||
        icons['default_file'];

    return icon;
}

module.exports = MimeIt;
