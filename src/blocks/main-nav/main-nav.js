const $ = require('jquery')

$(document).ready(function() {
    let $expandedLists = $('.main-nav__link_expanded')

    $expandedLists.mouseover((e) => {
        let $target = $(e.currentTarget);
        $target.children('ul').addClass('isActive')
    })
    $expandedLists.mouseout((e) => {
        let $target = $(e.currentTarget);
        $target.children('ul').removeClass('isActive')
    })
})