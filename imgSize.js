const fs = require('fs')
const sizeOf = require('image-size')
const sharp = require('sharp')

let images = fs.readdirSync('./src/blocks/page/img')

images.forEach(image => console.log(sizeOf(`./src/blocks/page/img/${image}`)))
sharp(`./src/blocks/page/img/${images[2]}`)
    .resize({height: 900, width: 1440})
    .toFile('bg-landing-2.png')
    .then(info => { console.log(info)})
    .catch(err => { console.log(err) });

