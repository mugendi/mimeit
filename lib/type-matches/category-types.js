// extracted from https://github.com/vk5tu/mime-types/blob/master/mime-types.conf

const associations = [{
    category: {
        name: 'ebook',
        matches: ['epub',
            'ibooks',
            'azw',
            'kf8',
            'fb2',
            'lit'],
    },
    subcategories: [],
},
    {
        category: {
            name: 'ogg',
            matches: [
                'ogg',
                'oga',
                'spx',
                'opus',
                'ogv',
                'ogx',
                'flac',
                'axa',
                'axv',
                'anx',
                'xspf',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'subtitle',
            matches: ['vtt',
                'ttml',
                'dfxp'],
        },
        subcategories: [],
    },
    {
        category: {
            name: '3g',
            matches: ['sms',
                'plb',
                'psb',
                'pvb',
                '3gpv',
                '3gp',
                'amr',
                'awb'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'apple',
            matches: ['qtl',
                'qt',
                'mov',
                'pntg'],
        },
        subcategories: [


        ],
    },
    {
        category: {
            name: 'audio',
            matches: [
                'au',
                'snd',
                'mp3',
                'mpga',
                'mp2',
                'aif',
                'aiff',
                'aifc',
                'mid',
                'midi',
                'kar',
                'm3u',
                'gsm',
                'wav',
                'mod',
                'psid',
                'sid',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'adobe',
            matches: [
                'psd',
                'pdd',
                'air',
                'ps',
                'ai',
                'eps',
                'oda',
                'pdf',
                'xfdf',
                'mif',
                'swf',
                'spl',
                'dcr',
                'dir',
                'dxr',
                'flv',
            ],
        },
        subcategories: [{
            name: 'frame',
            matches: ['mif'],
        },
            {
                name: 'macromedia',
                matches: ['swf',
                    'spl',
                    'dcr',
                    'dir',
                    'dxr',
                    'flv'],
            },
            {
                name: 'flash',
                matches: ["swf",
                    "flv"]}],
    },
    {
        category: {
            name: 'autocad',
            matches: ['dwf',
                'dwg',
                'dxf'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'binary',
            matches: ['bin'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'bittorrent',
            matches: ['torrent'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'calendar',
            matches: ['ics'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'cd|dvd',
            matches: ['iso',
                'vcd',
                'vob'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'compression|archive',
            matches: ['rar',
                'zip',
                'lha',
                'lzh',
                'sit',
                'zoo',
                'gz',
                "7z",
                "a",
                "ace",
                "apk",
                "ar",
                "arc",
                "bz2",
                "cab",
                "chm",
                "cpio",
                "deb",
                "dmg",
                "ear",
                "egg",
                "epub",
                "gz",
                "iso",
                "jar",
                "lz",
                "lzma",
                "lzo",
                "mar",
                "pea",
                "pet",
                "pkg",
                "rar",
                "rpm",
                "s7z",
                "sit",
                "sitx",
                "shar",
                "tar",
                "tbz2",
                "tgz",
                "tlz",
                "txz",
                "war",
                "whl",
                "xpi",
                "xz",
                "zip",
                "zipx",
                "zst"],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'curl',
            matches: ['curl'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'dns|epp',
            matches: ['epp'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'e-mail',
            matches: ['eml'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'font',
            matches: [
                'pfr',
                'afm',
                'bdf',
                'psf',
                'pcf',
                'spd',
                'ttf',
                'pfa',
                'pfb',
                'woff',
                'eot',
                'otf',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'gnome',
            matches: ['dia',
                'xcf',
                'glabels',
                'gdt',
                'gretl',
                'inp'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'gps',
            matches: ['gpx'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'hp',
            matches: ['hpgl',
                'pclxl',
                'pcl',
                'hpglxl'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'html',
            matches: ['html',
                'htm',
                'css',
                'xhtml',
                'xht'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'image',
            matches: [
                'gif',
                'jpeg',
                'jpg',
                'jpe',
                'png',
                'tiff',
                'tif',
                'off',
                'ilbm',
                'raw',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'java',
            matches: ['class',
                'jnlp',
                'jar'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'kde',
            matches: [
                'kapp',
                'kap',
                'karbon',
                'chrt',
                'kfo',
                'flw',
                'kon',
                'kpr',
                'kpt',
                'ksp',
                'kwd',
                'kwt',
                'kil',
                'skp',
                'skd',
                'skt',
                'skm',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'kodak',
            matches: ['pcd'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'ldif',
            matches: ['ldif'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'linux|package',
            matches: ['deb',
                'rpm',
                'srpm',
                'spec',
                'src.rpm'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'lotus',
            matches: [
                'wks',
                'wk1',
                'wk3',
                'wk4',
                '123',
                'apr',
                'apx',
                'vew',
                'nsf',
                'ndl',
                'ns1',
                'ns2',
                'ns3',
                'ns4',
                'nsg',
                'nsh',
                'ntf',
                'prz',
                'pre',
                'or3',
                'org',
                'scm',
                'lwp',
                'sam',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'openoffice',
            matches: [
                'odb',
                'odc',
                'odf',
                'odg',
                'odi',
                'odm',
                'odp',
                'ods',
                'odt',
                'otc',
                'otf',
                'otg',
                'oth',
                'oti',
                'otp',
                'ots',
                'ott',
                'oxt',
                'stc',
                'std',
                'sti',
                'stw',
                'sxc',
                'sxd',
                'sxg',
                'sxi',
                'sxm',
                'sxw',
                'sda',
                'sdc',
                'sdd',
                'sdm',
                'sdp',
                'sds',
                'sdw',
                'vor',
                'sgl',
                'smf',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'magicpoint',
            matches: ['mgp'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'microsoft',
            matches: [
                'axs',
                'avi',
                'fli',
                'flc',
                'bmp',
                'mpp',
                'rtf',
                'tnef',
                'wcm',
                'wdb',
                'wps',
                'asf',
                'asr',
                'asx',
                'nsc',
                'wma',
                'wax',
                'wmv',
                'wvx',
                'wm',
                'wmx',
                'wmz',
                'wmd',
                'clp',
                'crd',
                'dll',
                'hlp',
                'ico',
                'm13',
                'm14',
                'mdb',
                'ade',
                'mny',
                'pub',
                'scd',
                'sst',
                'stl',
                'cat',
                'pko',
                'trm',
                'wmf',
                'wri',
                'vsd',
                'vss',
                'vst',
                'vsw',
                'vdx',
                'vsx',
                'vtx',
                'msi',
                'vsdx',
                'docx',
                'docm',
                'dotx',
                'dotm',
                'xlsx',
                'xlsm',
                'xltx',
                'xltm',
                'xlsb',
                'xlam',
                'pptx',
                'pptm',
                'potx',
                'potm',
                'ppam',
                'ppsx',
                'ppsm',
                'doc',
                'dot',
                'xls',
                'xlc',
                'xll',
                'xlm',
                'xlw',
                'xla',
                'xlt',
                'ppt',
                'ppz',
                'pot',
                'pps',
                'ms-project',
                'ms-pkicertstore',
                'ms-pkistl',
                'ms-pkiseccat',
                'ms-pkipko',
            ],
        },
        subcategories: [{
            name: 'knowledge-base',
            matches: ['vsd',
                'vss',
                'vst',
                'vsw',
                'vdx',
                'vsx',
                'vtx'],
        },
            {
                name: 'installer',
                matches: ['msi',
                    'axs',
                    'avi',
                    'fli',
                    'flc',
                    'bmp',
                    "exe"],
            },
            {
                name: 'visio',
                matches: [
                    'vsdx',
                    'docx',
                    'docm',
                    'dotx',
                    'dotm',
                    'xlsx',
                    'xlsm',
                    'xltx',
                    'xltm',
                    'xlsb',
                    'xlam',
                    'pptx',
                    'pptm',
                    'potx',
                    'potm',
                    'ppam',
                    'ppsx',
                    'ppsm',
                    'doc',
                    'dot',
                    'xls',
                    'xlc',
                    'xll',
                    'xlm',
                    'xlw',
                    'xla',
                    'xlt',
                    'ppt',
                    'ppz',
                    'pot',
                    'pps',
                    'ms-project',
                    'mpp',
                    'rtf',
                    'tnef',
                ],
            },
            {
                name: 'spreadsheet',
                matches: [
                    'wcm',
                    'wdb',
                    'wps',
                    'asf',
                    'asr',
                    'asx',
                    'nsc',
                    'wma',
                    'wax',
                    'wmv',
                    'wvx',
                    'wm',
                    'wmx',
                    'wmz',
                    'wmd',
                    'clp',
                    'crd',
                    'dll',
                    'hlp',
                    'ico',
                    'm13',
                    'm14',
                    'mdb',
                    'ade',
                    'mny',
                ],
            },
            {
                name: 'pub',
                matches: [
                    'scd',
                    'ms-pkicertstore',
                    'sst',
                    'ms-pkistl',
                    'stl',
                    'ms-pkiseccat',
                    'cat',
                    'ms-pkipko',
                    'pko',
                    'trm',
                    'wmf',
                    'wri',
                ],
            },
            {
                name: 'word',
                matches: ['docm',
                    'docx',
                    'dotm',
                    'dotx',
                    'doc',
                    'dot'],
            },
            {
                name: 'excel',
                matches: [
                    'xlam',
                    'xlsb',
                    'xlsm',
                    'xlsx',
                    'xltm',
                    'xltx',
                    'xls',
                    'xla',
                    'xlc',
                    'xll',
                    'xlm',
                    'xlt',
                    'xlw',
                ],
            },
            {
                name: 'powerpoint',
                matches: [
                    'potm',
                    'potx',
                    'ppam',
                    'ppsm',
                    'ppsx',
                    'pptm',
                    'pptx',
                    'ppt',
                    'pot',
                    'pps',
                    'ppz',
                ],
            },
        ],
    },
    {
        category: {
            name: 'multimedia',
            matches: ['smil',
                'smi'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'netpbm',
            matches: ['pnm',
                'pbm',
                'pgm',
                'ppm'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'netscape',
            matches: ['vcf',
                'vcs',
                'gcrd'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'openpgp',
            matches: [
                'pgp',
                'gpg',
                'asc',
                'sig',
                'pub',
                'pri',
                'key',
                'skr',
                'pkr',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'packet-capture',
            matches: ['pcap'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'php',
            matches: ['php3',
                'phps'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'pics',
            matches: ['prf'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'real',
            matches: ['ram',
                'rm',
                'ra',
                'rf',
                'rn-realmedia',
                'rn-realflash'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'routing',
            matches: ['rpsl'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'rss',
            matches: ['rss'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'telephony',
            matches: ['323',
                'iii',
                'mobileconfig'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'tex',
            matches: ['dvi',
                'tex',
                'latex',
                'ltx'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'text',
            matches: ['csv',
                'txt',
                'rtx',
                'sgml',
                'sgm',
                'tsv'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'unix',
            matches: [
                'csh',
                'ms',
                'cpio',
                'bcpio',
                'shar',
                'sh',
                'tar',
                'bz2',
                'tgz',
                'gz',
                'tcl',
                'texi',
                'texinfo',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'video',
            matches: ['mpeg',
                'mpg',
                'mpa',
                'mpe',
                'mxu',
                'm4u'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'vrml',
            matches: [
                'flr',
                'wrz',
                'xaf',
                'xof',
                'wrl',
                'vrml',
                'igs',
                'iges',
                'msh',
                'mesh',
                'silo',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'wap',
            matches: ['sl',
                'si',
                'wml',
                'wmlc',
                'wmls',
                'wmlsc',
                'wbmp'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'wordperfect',
            matches: ['wpd'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'xml|sgml',
            matches: ['xml',
                'xsf',
                'xsl',
                'xslt',
                'dcl',
                'dsl',
                'dtd',
                'svg'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'x11',
            matches: ['rgb',
                'xbm',
                'xpm',
                'xwd',
                'rs'],
        },
        subcategories: [],
    },
    {
        category: {},
        subcategories: [],
    },
    {
        category: {
            name: 'applix|vistasource',
            matches: ['ab',
                'ag',
                'ap',
                'aq',
                'as',
                'aw'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'programming',
            matches: [
                'src',
                'asm',
                'a86',
                'bas',
                'cfg',
                'cpp',
                'java',
                'pas',
                'patch',
                'mk',
                'mf',
                'makefile',
                'cc',
                'hh',
                'hpp',
                'el',
                'elc',
                'js',
            ],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'mathematica',
            matches: ['nb',
                'ma',
                'mb'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'python',
            matches: ['py'],
        },
        subcategories: [],
    },
    {
        category: {
            name: 'google',
            matches: ['kml',
                'kmz',
                'webm'],
        },
        subcategories: [],
    },
];


let extTypes = {
    "1.ada": [
        "code"
    ],
    "2.ada": [
        "code"
    ],
    "3dm": [
        "image"
    ],
    "3ds": [
        "image"
    ],
    "3g2": [
        "video"
    ],
    "3gp": [
        "video"
    ],
    "7z": [
        "archive"
    ],
    "a": [
        "archive"
    ],
    "aac": [
        "audio"
    ],
    "aaf": [
        "video"
    ],
    "ada": [
        "code"
    ],
    "adb": [
        "code"
    ],
    "ads": [
        "code"
    ],
    "ai": [
        "image"
    ],
    "aiff": [
        "audio"
    ],
    "ape": [
        "audio"
    ],
    "apk": [
        "archive"
    ],
    "ar": [
        "archive"
    ],
    "asf": [
        "video"
    ],
    "asm": [
        "code"
    ],
    "au": [
        "audio"
    ],
    "avchd": [
        "video"
    ],
    "avi": [
        "video"
    ],
    "azw": [
        "book"
    ],
    "azw1": [
        "book"
    ],
    "azw3": [
        "book"
    ],
    "azw4": [
        "book"
    ],
    "azw6": [
        "book"
    ],
    "bas": [
        "code"
    ],
    "bash": [
        "code",
        "exec"
    ],
    "bat": [
        "code",
        "exec"
    ],
    "bin": [
        "exec"
    ],
    "bmp": [
        "image"
    ],
    "bz2": [
        "archive"
    ],
    "c": [
        "code"
    ],
    "c++": [
        "code"
    ],
    "cab": [
        "archive"
    ],
    "cbl": [
        "code"
    ],
    "cbr": [
        "book"
    ],
    "cbz": [
        "book"
    ],
    "cc": [
        "code"
    ],
    "class": [
        "code"
    ],
    "clj": [
        "code"
    ],
    "cob": [
        "code"
    ],
    "command": [
        "exec"
    ],
    "cpio": [
        "archive"
    ],
    "cpp": [
        "code"
    ],
    "crx": [
        "exec"
    ],
    "cs": [
        "code"
    ],
    "csh": [
        "code",
        "exec"
    ],
    "css": [
        "web"
    ],
    "csv": [
        "sheet"
    ],
    tsv :['sheet'],
    "cxx": [
        "code"
    ],
    "d": [
        "code"
    ],
    "dds": [
        "image"
    ],
    "deb": [
        "archive"
    ],
    "diff": [
        "code"
    ],
    "dmg": [
        "archive"
    ],
    "doc": [
        "text|document"
    ],
    "docx": [
        "text|document"
    ],
    "drc": [
        "video"
    ],
    "dwg": [
        "image"
    ],
    "dxf": [
        "image"
    ],
    "e": [
        "code"
    ],
    "ebook": [
        "text|document"
    ],
    "egg": [
        "archive"
    ],
    "el": [
        "code"
    ],
    "eot": [
        "font"
    ],
    "eps": [
        "image"
    ],
    "epub": [
        "book"
    ],
    "exe": [
        "exec"
    ],
    "f": [
        "code"
    ],
    "f77": [
        "code"
    ],
    "f90": [
        "code"
    ],
    "fish": [
        "code",
        "exec"
    ],
    "flac": [
        "audio"
    ],
    "flv": [
        "video"
    ],
    "for": [
        "code"
    ],
    "fth": [
        "code"
    ],
    "ftn": [
        "code"
    ],
    "gif": [
        "image"
    ],
    "go": [
        "code"
    ],
    "gpx": [
        "image"
    ],
    "groovy": [
        "code"
    ],
    "gsm": [
        "audio"
    ],
    "gz": [
        "archive"
    ],
    "h": [
        "code"
    ],
    "hh": [
        "code"
    ],
    "hpp": [
        "code"
    ],
    "hs": [
        "code"
    ],
    "htm": [
        "code",
        "web"
    ],
    "html": [
        "code",
        "web"
    ],
    "hxx": [
        "code"
    ],
    "ics": [
        "sheet"
    ],
    "iso": [
        "archive"
    ],
    "it": [
        "audio"
    ],
    "jar": [
        "archive"
    ],
    "java": [
        "code"
    ],
    "jpeg": [
        "image"
    ],
    "jpg": [
        "image"
    ],
    "js": [
        "code",
        "web"
    ],
    "jsp": [
        "code"
    ],
    "jsx": [
        "code",
        "web"
    ],
    "kml": [
        "image"
    ],
    "kmz": [
        "image"
    ],
    "ksh": [
        "code",
        "exec"
    ],
    "kt": [
        "code"
    ],
    "less": [
        "web"
    ],
    "lha": [
        "archive"
    ],
    "lhs": [
        "code"
    ],
    "lisp": [
        "code"
    ],
    "log": [
        "text|document"
    ],
    "lua": [
        "code"
    ],
    "m": [
        "code"
    ],
    "m2v": [
        "video"
    ],
    "m3u": [
        "audio"
    ],
    "m4": [
        "code"
    ],
    "m4a": [
        "audio"
    ],
    "m4p": [
        "video"
    ],
    "m4v": [
        "video"
    ],
    "mar": [
        "archive"
    ],
    "max": [
        "image"
    ],
    "md": [
        "text|document"
    ],
    "mid": [
        "audio"
    ],
    "mkv": [
        "video"
    ],
    "mng": [
        "video"
    ],
    "mobi": [
        "book"
    ],
    "mod": [
        "audio"
    ],
    "mov": [
        "video"
    ],
    "mp2": [
        "video"
    ],
    "mp3": [
        "audio"
    ],
    "mp4": [
        "video"
    ],
    "mpa": [
        "audio"
    ],
    "mpe": [
        "video"
    ],
    "mpeg": [
        "video"
    ],
    "mpg": [
        "video"
    ],
    "mpv": [
        "video"
    ],
    "msg": [
        "text|document"
    ],
    "msi": [
        "exec"
    ],
    "mxf": [
        "video"
    ],
    "nim": [
        "code"
    ],
    "nsv": [
        "video"
    ],
    "odp": [
        "slide"
    ],
    "ods": [
        "sheet"
    ],
    "odt": [
        "text|document"
    ],
    "ogg": [
        "video"
    ],
    "ogm": [
        "video"
    ],
    "ogv": [
        "video"
    ],
    "org": [
        "text|document"
    ],
    "otf": [
        "font"
    ],
    "pages": [
        "text|document"
    ],
    "pak": [
        "archive"
    ],
    "patch": [
        "code"
    ],
    "pdf": [
        "text|document"
    ],
    "pea": [
        "archive"
    ],
    "php": [
        "code",
        "web"
    ],
    "php4":["code","web"],
    "net":["code","net"],
    "pl": [
        "code"
    ],
    "pls": [
        "audio"
    ],
    "png": [
        "image"
    ],
    "po": [
        "code"
    ],
    "pp": [
        "code"
    ],
    "ppt": [
        "slide"
    ],
    "ps": [
        "image"
    ],
    "psd": [
        "image"
    ],
    "py": [
        "code"
    ],
    "qt": [
        "video"
    ],
    "r": [
        "code"
    ],
    "ra": [
        "audio"
    ],
    "rar": [
        "archive"
    ],
    "rb": [
        "code"
    ],
    "rm": [
        "video"
    ],
    "rmvb": [
        "video"
    ],
    "roq": [
        "video"
    ],
    "rpm": [
        "archive"
    ],
    "rs": [
        "code"
    ],
    "rst": [
        "text|document"
    ],
    "rtf": [
        "text|document"
    ],
    "s": [
        "code"
    ],
    "s3m": [
        "audio"
    ],
    "s7z": [
        "archive"
    ],
    "scala": [
        "code"
    ],
    "scss": [
        "web"
    ],
    "sh": [
        "code",
        "exec"
    ],
    "shar": [
        "archive"
    ],
    "sid": [
        "audio"
    ],
    "srt": [
        "video"
    ],
    "svg": [
        "image"
    ],
    "svi": [
        "video"
    ],
    "swg": [
        "code"
    ],
    "swift": [
        "code"
    ],
    "tar": [
        "archive"
    ],
    "tbz2": [
        "archive"
    ],
    "tex": [
        "text|document"
    ],
    "tga": [
        "image"
    ],
    "tgz": [
        "archive"
    ],
    "thm": [
        "image"
    ],
    "tif": [
        "image"
    ],
    "tiff": [
        "image"
    ],
    "tlz": [
        "archive"
    ],
    "ttf": [
        "font"
    ],
    "txt": [
        "text|document"
    ],
    "v": [
        "code"
    ],
    "vb": [
        "code"
    ],
    "vcf": [
        "sheet"
    ],
    "vcxproj": [
        "code"
    ],
    "vob": [
        "video"
    ],
    "war": [
        "archive"
    ],
    "wasm": [
        "web"
    ],
    "wav": [
        "audio"
    ],
    "webm": [
        "video"
    ],
    "webp": [
        "image"
    ],
    "whl": [
        "archive"
    ],
    "wma": [
        "audio"
    ],
    "wmv": [
        "video"
    ],
    "woff": [
        "font"
    ],
    "woff2": [
        "font"
    ],
    "wpd": [
        "text|document"
    ],
    "wps": [
        "text|document"
    ],
    "xcf": [
        "image"
    ],
    "xcodeproj": [
        "code"
    ],
    "xls": [
        "sheet"
    ],
    "xlsx": [
        "sheet"
    ],
    "xm": [
        "audio"
    ],
    "xml": [
        "code"
    ],
    "xpi": [
        "archive"
    ],
    "xz": [
        "archive"
    ],
    "yuv": [
        "image",
        "video"
    ],
    "zip": [
        "archive"
    ],
    "zipx": [
        "archive"
    ],
    "zsh": [
        "code",
        "exec"
    ]
}

module.exports ={extTypes, associations}