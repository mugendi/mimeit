/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const MimeIt = require('..');
const mimeit = new MimeIt();


let file = 'https://plus.unsplash.com/premium_photo-1670390321006-08f58f418429';


(async () => {
    let mime = await mimeit.get(file);
    console.log("Unsplash URL\n", mime);
    console.log(mime.meta);
    console.log("Unsplash Icon\n", mime.icon);


    mime = await mimeit.get('/path/to/my-doc.ppt')

    console.log("PPT\n", mime);
    console.log("PPT Icon\n", mime.icon);
})();
