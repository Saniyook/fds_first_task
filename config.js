module.exports = {
    paths: {
        src: 'src/',
        dist: 'dist/',
        blocks: 'src/blocks/'
    },
    alwaysImportStyles: [ // [ [name].scss || [name] ]
        'normalize',
        'vars.scss',
        'material_icons',
        'fonts.scss',
        'datepicker',
        'dropdown',
        'main',
    ],
    alwaysImportjs: [
        'main.js'
    ],
}