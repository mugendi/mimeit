/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const mime = require('mime-type/with-db');
const fileType = require('./lib/get-type');
const icons = require('./lib/icons');
const typeMatches = require('./lib/type-matches');

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

            if (!mimeType) {
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

            let [type, subType] = mimeType.split('/');

            const ext = /\.[a-z0-9]+$/i.test(file)
                ? file.split('.').pop()
                : mime.extension(mimeType);

            let subTypes = typeMatches(ext)
                .filter((s) => s !== type && s !== subType)
                .reverse();

            subType = [subType, ...subTypes];

            // console.log(typeMatches(ext));

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
                meta: this.meta,
            };

            return mimeObj;
        } catch (error) {
            throw error;
        }
    }
}

function get_icon(mimeObj) {
    // try to get icon given extension
    let icon = icons[mimeObj.extensions.current];

    // if failed, try use the subtype array
    if (!icon) {
        for (let s of mimeObj.subType) {
            icon = icons[s];
            if (icon) break;
        }
    }

    // if failed, try the broader type or return default file
    if (!icon) {
        icon = icons[mimeObj.type] || icons['default_file'];
    }

    return icon;
}

module.exports = MimeIt;
