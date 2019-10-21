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
        'add' // [ [name].js || [name] ]
    ],
}