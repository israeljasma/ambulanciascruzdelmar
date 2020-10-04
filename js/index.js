
AOS.init();

$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});


function generateMessage() {
    $('#modal').modal('hide');
}