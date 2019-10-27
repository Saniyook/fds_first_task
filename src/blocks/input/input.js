import 'air-datepicker'

$(document).ready( e => {

    const $datepicker = $('#arrival-date')

    $datepicker.datepicker({
        inline: true,
        range: true,
        clearButton: true,
        multipleDates: true,
        dateFormat: 'dd.mm.yyyy'
    }).data('datepicker')

    $datepicker.focusout( e => {
        $datepicker.data('datepicker').hide()
    })

    $('#departure-date').focus( e => {
        $datepicker.data('datepicker').show()
    })
    $('#departure-date').click( e => {
        $datepicker.data('datepicker').show()
    })
    $('#departure-date').focusout( e => {
        $datepicker.data('datepicker').hide()
    })

})