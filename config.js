module.exports = {
    paths: {
        src: 'src/',
        dist: 'dist/',
        blocks: 'src/blocks/'
    },
    alwaysImportStyles: [ // [ [name].scss || [name] ]
        'normalize',
        'vars.scss',
        'fa',
        'fonts.scss',
        'main',
    ],
    alwaysImportjs: [
        './add.js',
        '../../node_modules/@fortawesome/fontawesome-free/js/all.min.js'
    ],
}