$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').each(function () {
        new bootstrap.Tooltip(this);
    });

    $('[data-bs-toggle="popover"]').each(function () {
        new bootstrap.Popover(this);
    });

    function revealOnScroll() {
        $('.reveal-on-scroll').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll + windowHeight - 120 > position) {
                $(this).addClass('is-visible');
            }
        });
    }

    $(window).on('scroll', revealOnScroll);
    revealOnScroll();

    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        var form = this;

        if (!form.checkValidity()) {
            event.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        $('#formSpinner').removeClass('d-none');

        setTimeout(function () {
            $('#formSpinner').addClass('d-none');
            var toast = new bootstrap.Toast(document.getElementById('successToast'));
            toast.show();
            $(form).removeClass('was-validated')[0].reset();
        }, 1200);
    });

    $('.faq-toggle').on('click', function () {
        $('#faqExtra').slideToggle(300);
    });
    

    // --- LÓGICA PARA MODAL DINÁMICO DE HABITACIONES ---
    $('#modalReserva').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Botón que activó el modal
        
        // Extraer la información de los atributos data-*
        var title = button.data('room-title');
        var desc = button.data('room-desc');
        var price = button.data('room-price');
        
        // Actualizar el contenido del modal
        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#modalRoomDesc').text(desc);
        modal.find('#modalRoomPrice').text(price);
    });
});