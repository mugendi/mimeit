/**
* Copyright (c) 2023 Anthony Mugendi
*
* This software is released under the MIT License.
* https://opensource.org/licenses/MIT
*/

const mime = require('./lib/mime');
const fileType = require('./lib/get-type');
const icons = require('./lib/icons');
const {
    type_synonyms,
    type_matches
} = require('./lib/type-matches');


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
            this.meta = {
                file
            };

            if (!mimeType) {
                let type = await fileType(file);
                if (!type || !type.mime) return null;

                this.meta.took = type.took;

                this.meta.source = {
                    type: type.isUrl ? 'URL': type.isFile ? 'FILE': null,
                    size: type.size,
                    bytesRead: type.bytesRead || 0,
                };

                this.meta.headers = type.headers || null;

                mimeType = type.mime;
            }

            let [type,
                subType] = mimeType.split('/');

            const ext = /\.[a-z0-9]+$/i.test(file)
            ? file.split('.').pop(): mime.extension(mimeType);

            // console.log(typeMatches(ext));

            let {
                extensions: all,
                charset,
                compressible,
            } = mime[mimeType] || {
                extensions: [ext]
            };

            // filter unique
            all = Array.from(new Set(all))

            let associatedWith = all.map(t=>type_matches(t)).filter(v=>v.length)
            .concat([subType.split('.').slice(1)])
            .concat(/^[a-z]+$/.test(subType) ? [[subType]]: [[]])
            .reduce((a, b)=> {
                for (let c of b) {
                    if (a.indexOf(c) == -1) {
                        a.push(c)
                    }
                }

                return a
            },
                [])

            associatedWith = type_synonyms(associatedWith,ext);


            const extensions = {
                current: ext,
                all,
            };

            const contentType = mime.contentType(mimeType);

            const mimeObj = {
                type,
                subType,
                associatedWith,

                //compressible: compressible || null,

                mime: {
                    type: mimeType,
                    content: contentType,
                    charset: charset || (contentType.match(/charset=(.+)/) || [])[1] || null,
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

    //
    if (!icon) {
        icon = icons[mimeObj.subType] ;
    }

    // if failed, try use the subtype array
    if (!icon) {
        for (let s of mimeObj.associatedWith) {
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