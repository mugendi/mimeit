<!--
 Copyright (c) 2023 Anthony Mugendi

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
# Mime It!

[![github-lang-cout](https://img.shields.io/github/languages/top/mugendi/mimeit?style=social&logo=github)](https://github.com/mugendi/mimeit)
[![github-package.json-version](https://img.shields.io/github/package-json/v/mugendi/mimeit?style=social&logo=github)](https://github.com/mugendi/mimeit)
[![github-stars](https://img.shields.io/github/stars/mugendi/mimeit?style=social&logo=github)](https://github.com/mugendi/mimeit)
[![github-forks](https://img.shields.io/github/forks/mugendi/mimeit?label=Fork&style=social&logo=github)](https://github.com/mugendi/mimeit)

This is a module that helps you access mime information about any _file-name_, _file_ or even _url_ as well as providing you with the best svg icon for the mime type.

This module was written as part of a file browser so you can imagine getting the complete mime info as well as icons is very useful.

This module combines the power of the following great modules:

-   [**mime-type**](https://www.npmjs.com/package/mime-type) ~ the custom more powerful mime-type utility can work with [mime-db](https://www.npmjs.com/package/mime-db) which is itself forked from [mime-types](https://www.npmjs.com/package/mime-types).
-   [**axios**](https://www.npmjs.com/package/axios) ~ promise based HTTP client that allows us to access remote files via URL.
-   [**file-type**](https://www.npmjs.com/package/file-type) ~ that allows us to detect file types from URL & File buffers.

## Fast even for remote files

For remote files, this module will:

-   First try and establish type using the **content-type** headers. Otherwise;
-   We download only as much data as is required to establish file type using **file-type**.

Therefore, even big files are identified in milliseconds.

## How To Use

```javascript
// require
const MimeIt = require('mimeit');
// init
const mimeit = new MimeIt();

// let us get the mime type of an unsplash image
const file =
    'https://plus.unsplash.com/premium_photo-1670390321006-08f58f418429';

(async () => {
    // get mime data
    let mime = await mimeit.get(file);

    console.log('Unsplash URL\n', mime);
    // you can also inspect the meta object
    // which shows what has been done behind the scenes
    console.log(mime.meta);
    // get an svg icon for this meta type
    console.log('Unsplash Icon\n', mime.icon);

    // You can also check file paths & names
    mime = await mimeit.get('/path/to/my-doc.ppt');
    console.log('PPT\n', mime);
    console.log('PPT Icon\n', mime.icon);

    mime = await mimeit.get('/path/to/my-doc.sass')
    console.log('SASS\n', mime);
    console.log('SASS Icon\n', mime.icon);
})();
```

---

This 👆 will _log_ the following:

`console.log("Unsplash URL\n", mime);`

```text
unsplash URL
{
  type: 'image',
  subType: 'jpeg',
  associatedWith: [ 'picture', 'photo', 'image' ],
  mime: { type: 'image/jpeg', content: 'image/jpeg', charset: null },
  extensions: { current: 'jpeg', all: [ 'jpeg', 'jpg', 'jpe', 'jfif' ] }
}
```

---

`console.log(mime.meta);`

```text
{
    "file": "https://plus.unsplash.com/premium_photo-1670390321006-08f58f418429",
    "took": "1.104 s",
    "source": {
        "type": "URL",
        "size": 1318947,
        "bytesRead": 0
    },
    "headers": {
        "connection": "close",
        "content-length": "1318947",
        "last-modified": "Sun, 03 Sep 2023 12:38:13 GMT",
        "cache-control": "public, max-age=31536000",
        "server": "imgix",
        "x-imgix-id": "a32825182802e9b9c91b895c61b561598bb66f08",
        "x-imgix-render-farm": "01.139848",
        "date": "Sun, 03 Sep 2023 16:35:58 GMT",
        "age": "14265",
        "accept-ranges": "bytes",
        "content-type": "image/jpeg",
        "access-control-allow-origin": "*",
        "timing-allow-origin": "*",
        "cross-origin-resource-policy": "cross-origin",
        "x-content-type-options": "nosniff",
        "x-served-by": "cache-sjc1000126-SJC, cache-jnb7023-JNB",
        "x-cache": "MISS, HIT"
    }
}
```

---

`console.log("Unsplash Icon\n", mime.icon);`

```text
Unsplash Icon
"<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.976 9.072h5.368l-5.368-5.367v5.367M6.144 2.241h7.808l5.856 5.855v11.711a1.952 1.952 0 0 1-1.952 1.952H6.145a1.951 1.951 0 0 1-1.952-1.952V4.192c0-1.083.868-1.951 1.952-1.951m0 17.567h11.71V12l-3.903 3.904L12 13.952l-5.856 5.856M8.096 9.073a1.952 1.952 0 0 0-1.952 1.952 1.952 1.952 0 0 0 1.952 1.951 1.952 1.952 0 0 0 1.952-1.951 1.952 1.952 0 0 0-1.952-1.952z" fill="#26a69a"/></svg>"
```

| <img src="./tests/image-icon.svg" width="64"/> | The Icon generated for the unsplash file. |
| ---------------------------------------------- | ----------------------------------------- |

___
`console.log("PPT\n", mime);`

```text
PPT
{
  type: 'application',
  subType: 'vnd.ms-powerpoint',
  associatedWith: [
    'windows',
    'ms',
    'slide',
    'microsoft',
    'visio',
    'powerpoint',
    'ms-powerpoint'
  ],
  mime: {
    type: 'application/vnd.ms-powerpoint',
    content: 'application/vnd.ms-powerpoint',
    charset: null
  },
  extensions: { current: 'ppt', all: [ 'ppt', 'pps', 'pot', 'ppa', 'pwz' ] }
}
```

---

`console.log("PPT Icon\n", mime.icon);`

```text
PPT Icon
 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5L13 3.5M8 11v2h1v6H8v1h4v-1h-1v-2h2a3 3 0 0 0 3-3 3 3 0 0 0-3-3H8m5 2a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2v-2h2z" fill="#d14524"/></svg>
```

| <img src="./tests/ppt-icon.svg" width="64"/> | The Icon generated for the PPT file. |
| -------------------------------------------- | ------------------------------------ |

___


`console.log("SASS\n", mime);`

```text
SASS
{
  type: 'text',
  subType: 'x-sass',
  associatedWith: [ 'web', 'style', 'stylesheet' ],
  mime: {
    type: 'text/x-sass',
    content: 'text/x-sass; charset=utf-8',
    charset: 'utf-8'
  },
  extensions: { current: 'sass', all: [ 'sass' ] }
}
```

---

`console.log("SASS Icon\n", mime.icon);`

```text
PPT Icon
  <svg viewBox="0 0 500 500" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M419.047 96.227C406.855 48.39 327.54 32.67 252.472 59.336c-44.68 15.876-93.029 40.785-127.81 73.31-41.349 38.675-47.943 72.329-45.216 86.396 9.583 49.621 77.585 82.068 105.535 106.125v.144c-8.246 4.051-68.565 34.585-82.684 65.8-14.893 32.932 2.372 56.556 13.804 59.742 35.424 9.858 71.765-7.866 91.312-37.01 18.852-28.12 17.279-64.422 9.085-82.488 11.3-2.976 24.476-4.313 41.218-2.36 47.248 5.52 56.517 35.017 54.747 47.367s-11.681 19.14-14.998 21.185-4.326 2.767-4.05 4.287c.406 2.216 1.94 2.137 4.758 1.652 3.894-.655 24.804-10.042 25.709-32.827 1.14-28.934-26.587-61.302-75.684-60.45-20.216.354-32.933 2.268-42.123 5.69a82.505 82.505 0 0 0-2.084-2.308c-30.35-32.382-86.46-55.285-84.088-98.823.866-15.824 6.372-57.5 107.817-108.053 83.104-41.414 149.638-30.009 161.135-4.759 16.427 36.079-35.554 103.137-121.857 112.812-32.88 3.684-50.199-9.06-54.499-13.805-4.536-4.995-5.204-5.218-6.909-4.287-2.753 1.534-1.01 5.939 0 8.574 2.583 6.712 13.15 18.603 31.176 24.516 15.863 5.204 54.459 8.062 101.157-9.99 52.282-20.255 93.12-76.523 81.124-123.549zM196.584 339.995c3.92 14.5 3.487 28.016-.564 40.247a65.289 65.289 0 0 1-3.225 7.97c-3.12 6.477-7.315 12.534-12.441 18.132-15.654 17.07-37.508 23.533-46.882 18.092-10.12-5.873-5.047-29.943 13.084-49.11 19.52-20.635 47.602-33.902 47.602-33.902l-.039-.08 2.465-1.35z" fill="#ec407a" stroke="#ec407a" stroke-width="16.287"/></svg>
```

| <img src="./tests/sass-icon.svg" width="64"/> | The Icon generated for the SASS file. |
| -------------------------------------------- | ------------------------------------ |




## Exposed Mime-Type API

For your convenience, MimeIt and exposes the **mime-it** api so you essentially don't need another mime-type utility library.

Read the [mime-type docs](https://github.com/snowyu/mime-type.js).

Below is what is exposed:

### 1. The [Mime Object](https://github.com/snowyu/mime-type.js#var-type--mimetypesextension)

You can access this via:

-   `mimeit.mime`
-   `mimeit.mime.types`
-   `mimeit.mime.extensions`

Example:

```javascript
mimeit.mime['text/css'];
mimeit.mime.extensions['text/css'];
mimeit.mime.types['text/css'];
```

### 2. All Mime-Type Methods

Access the methods via:

-   `mimeit.lookup`
-   `mimeit.glob`
-   `mimeit.clear`
-   `mimeit.load`
-   `mimeit.delete`
-   `mimeit.define`
-   `mimeit.contentType`
-   `mimeit.extension`
-   `mimeit.charset`

Enjoy ♥
