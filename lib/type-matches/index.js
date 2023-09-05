/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const { associations, extTypes } = require('./category-types');

let typeSynonyms = {
    code: ['programming', 'application', 'development'],
    audio: ['music'],
    video: ['film', 'movie', 'motion picture'],
    book: ['ebook'],
    image: ['picture', 'photo'],
    microsoft: ['windows', 'ms'],
    sheet: ['spreadsheet'],

    css: ['style', 'stylesheet'],
    js: ['code'],
};

let extSynonyms = {
    css: ['sass', 'scss'],
    csv: ['tsv'],
    js: ['mjs', 'cjs', 'mjs', 'ts', 'coffee'],
    php: ['php2', 'php4'],
    html: ['xhtml', 'htm'],
};

let techTypes = {
    web: [
        /*"html",
        "rss",
        "css",
        "php",
        "js",
        "flash",*/

        'key',
        'scss',
        'mjs',
        'js',
        'ssp',
        'btapp',
        'aro',
        'asax',
        'net',
        'xd',
        'xhtm',
        'p7b',
        'a5w',
        'bml',
        'jspa',
        'vrt',
        'dll',
        'php',
        'whtt',
        'cshtml',
        'net',
        'dhtml',
        'crt',
        'website',
        'download',
        'xul',
        'js',
        'h5p',
        'p7c',
        'p7',
        'webbookmark',
        'fwtemplate',
        'mml',
        'rjs',
        'ascx',
        'net',
        'vsdisco',
        'obml15',
        'dcr',
        'zul',
        'css',
        'dochtml',
        'spc',
        'pac',
        'htaccess',
        'tpl',
        'site',
        'a4p',
        'aspx',
        'seam',
        'pem',
        'json',
        'kit',
        'appcache',
        'svr',
        'shtml',
        'dap',
        'dwt',
        'url',
        'oam',
        'wbs',
        'htc',
        'htm',
        'pro',
        'asr',
        'gsp',
        'obml16',
        'wsdl',
        'master',
        'net',
        'gne',
        'p12',
        'gsp',
        'rw3',
        'public',
        'disco',
        'fwp',
        'xpd',
        'epibrw',
        'strm',
        'chm',
        'ap',
        'chat',
        'asp',
        'axd',
        'net',
        'php2',
        'php4',
        'sites2',
        'bok',
        'rss',
        'xss',
        'br',
        'obml',
        'vdw',
        'der',
        'mhtml',
        'phtml',
        'nzb',
        'rhtml',
        'con',
        'ashx',
        'net',
        'web',
        'opml',
        'html',
        'asa',
        'browser',
        'net',
        'aex',
        'cms',
        'edge',
        'razor',
        'sht',
        'hyperesources',
        'sparkle',
        'duckload',
        'alx',
        'cha',
        'qf',
        'har',
        'olp',
        'do',
        'srf',
        'sdb',
        'jnlp',
        'crl',
        'pptmhtml',
        'csr',
        'fmp',
        'stc',
        'uhtml',
        'xbel',
        'wdgt',
        'jsp',
        'ewp',
        'fwtemplateb',
        'xfdl',
        'zhtml',
        'stml',
        'webloc',
        'dbm',
        'shtm',
        'cfm',
        'wml',
        'cer',
        'mht',
        'compressed',
        'dothtml',
        'awm',
        'xht',
        'jspx',
        'psp',
        'sitemap',
        'net',
        'dml',
        'itms',
        'webmanifest',
        'jss',
        'node',
        'js',
        'tpl',
        'ucf',
        'wpp',
        'vrml',
        'freeway',
        'page',
        'vbd',
        'ndjson',
        'discomap',
        'sass',
        'hxs',
        'jsonl',
        'maff',
        'hype',
        'csp',
        'xhtml',
        'hdml',
        'jhtml',
        'xws',
        'rt',
        'svc',
        'pub',
        'stl',
        'zhtml',
        'adr',
        'hypetemplate',
        'prf',
        'sites',
        'htx',
        'phtm',
        'esproj',
        'muse',
        'codasite',
        'vbhtml',
        'net',
        'hypesymbol',
        'wbxml',
        'gmi',
        'ognc',
        'srl',
        'wkdownload',
        'fwtb',
        'wbn',
        'zvz',
        'iqy',
        'webarchive',
        'qbo',
        'ece',
        'mspx',
        'net',
        'docmhtml',
        'wgp',
        'mvc',
        'nod',
        'woa',
        'zfo',
        'xbl',
        'lasso',
        'oth',
        'lbc',
        'idc',
        'att',
        'tvvi',
        'webarchivexml',
        'asmx',
        'net',
        'widget',
        'webhistory',
        'map',
        'swz',
        'jws',
        'bwp',
        'itpc',
        'mapx',
        'atom',
        'tvpi',
        'cdf',
        'php3',
        'php5',
        'wgt',
        'html.mem',
        'hdm',
        'rwsw',
        'rflw',
        'faces',
        'mvr',
        'rwp',
        'vlp',
        'stp',
        'ptw',
        'nxg',
        'saveddeck',
        'ccbjs',
        'qrm',
        'an',
        'wn',
        'ppthtml',
        'stm',
        'less',
        'iwdgt',
        'suck',
        'qbx',
        'private',
        'jvs',
        'cphd',
        'rwtheme',
        'wpx',
        'cpg',
        'jcz',
        'jst',
        'cfml',
        'kcmsf',
        'moz',
        'fcgi',
    ],
};

function type_synonyms(types, ext) {
    //extend typeSynonyms
    let synTypes = [];

    for (let t in extSynonyms) {
        for (let i of extSynonyms[t]) {
            // extSynonyms[i] = extSynonyms[i] || [];
            // extSynonyms[i].push(t)
            if (ext == i && typeSynonyms[t]) {
                // console.log(ext,t, typeSynonyms[t]);
                types.push(...typeSynonyms[t]);
            }
        }
    }

    for (let t in techTypes) {
        for (let i of techTypes[t]) {
            typeSynonyms[i] = typeSynonyms[i] || [];

            if (typeSynonyms[i].indexOf(t) > -1) {
                continue;
            }

            typeSynonyms[i].push(t);
        }
    }

    //console.log(extSynonyms);
    types.push(...(extSynonyms[ext] || []))
    //console.log(ext,types);
    //console.log(typeSynonyms);

    for (let t of types) {
        synTypes.push(...(typeSynonyms[t] || []));
    }

    return Array.from(new Set(synTypes.concat(types))).filter((v) => v !== ext);
}

//console.log(typeSynonyms);

function type_matches(ext) {
    let matches;
    let types = (extTypes[ext] || [])
        .map((f) => f.split('|'))
        .reduce((a, b) => [...a, ...b], []);

    for (let c of associations) {
        matches = c.category.matches || [];
        if (matches.indexOf(ext) > -1) {
            types = populate_types(types, c.category.name);

            // console.log(c);
            for (let s of c.subcategories || []) {
                matches = s.matches || [];
                if (matches.indexOf(ext) > -1) {
                    types = populate_types(types, s.name);
                }
            }
        }
    }

    return types;
}

function populate_types(types, name) {
    for (let n of name.split('|')) {
        if (types.indexOf(n) > -1) continue;
        //console.log({n});
        types.push(n);
    }

    return types;
}

module.exports = {
    type_matches,
    type_synonyms,
};
