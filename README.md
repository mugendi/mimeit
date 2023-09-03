<!--
 Copyright (c) 2023 Anthony Mugendi

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<style>
table {
    border-collapse: collapse;
}
table, th, td {
   border: none;
   padding:0px;
}
blockquote {
    border-left: none;
}
</style>

# Mime It!

This is a module that helps you access mime information about any _file-name_, _file_ or even _url_ as well as providing you with the best svg icon for the mime type.

This module was written as part of a file browser so you can imagine getting the complete mime info as well as icons is very useful.

This module combines the power of the following great modules:

-   [**mime-type**](https://www.npmjs.com/package/mime-type) ~ the custom more powerful mime-type utility can work with [mime-db](https://www.npmjs.com/package/mime-db) which is itself forked from [mime-types](https://www.npmjs.com/package/mime-types).
-   [**axios**](https://www.npmjs.com/package/axios) ~ promise based HTTP client that allows us to access remote files via URL.
-   [**file-type**](https://www.npmjs.com/package/file-type) ~ that allows us to detect file types from URL & File buffers.
-   [**media-typer**](https://www.npmjs.com/package/media-typer) ~ helps to parse the mime string into it's component parts, like type, subtype.

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

    console.log(mime);
    // you can also inspect the meta object
    // which shows what has been done behind the scenes
    console.log(mime.meta);
    // get an svg icon for this meta type
    console.log(mime.icon);
})();
```

This 👆 will _log_ the following:

`console.log(mime);`

```json
{
    "type": "image",
    "subType": "jpeg",
    "charset": null,
    "compressible": null,
    "mime": {
        "type": "image/jpeg",
        "content": "image/jpeg"
    },
    "extensions": {
        "current": "jpeg",
        "all": ["jpeg", "jpg", "jpe"]
    }
}
```

`console.log(mime.meta);`

```json
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

`console.log(mime.icon);`

```text
"<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.976 9.072h5.368l-5.368-5.367v5.367M6.144 2.241h7.808l5.856 5.855v11.711a1.952 1.952 0 0 1-1.952 1.952H6.145a1.951 1.951 0 0 1-1.952-1.952V4.192c0-1.083.868-1.951 1.952-1.951m0 17.567h11.71V12l-3.903 3.904L12 13.952l-5.856 5.856M8.096 9.073a1.952 1.952 0 0 0-1.952 1.952 1.952 1.952 0 0 0 1.952 1.951 1.952 1.952 0 0 0 1.952-1.951 1.952 1.952 0 0 0-1.952-1.952z" fill="#26a69a"/></svg>"
```
|||
|--- |----|
|<img src="test/icon.svg" width="64"/>|The Icon generated for the unsplash file.|


 

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

### All Mime-Type Methods

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