/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const MimeIt = require('.');

let file =
    'https://s01.drop.download:182/d/ghcqce6l4xcdvbi4tkqzpgajyu6bnrzmcfw2bekguhlggwleavo2nbao77kzat4f332rzfu3/UFC_FightNight_September_2nd_2023_Maincard_LQ.mp4';

file = 'https://plus.unsplash.com/premium_photo-1670390321006-08f58f418429';

// file =    '/home/mugz/Downloads/Video/UFC_FightNight_September_2nd_2023_Maincard_LQ';
// file = 'https://download.tuxfamily.org/familletruc/FilmsAVI/frac294terreaux03_XVidLQ2.avi'

// \{\n\s+"svg":([^\}]+)

const mimeit = new MimeIt();

(async () => {
    let mime = await mimeit.get(file);
    console.log(JSON.stringify(mime, 0, 4));
    console.log(JSON.stringify(mime.meta, 0, 4));
    console.log(JSON.stringify(mime.icon, 0, 4));
    console.log(mimeit.lookup);
})();
