function showProjectsbyCat(cat) {
    if (cat == 'all') {
        $('#projects-hidden .project').each(function() {
            var owl = $(".owl-carousel").data('owlCarousel');
            elem = $(this).parent().html();

            owl.addItem(elem);
            $(this).parent().remove();
        });
    } else {
        $('#projects-hidden .project.' + cat).each(function() {
            var owl = $(".owl-carousel").data('owlCarousel');
            elem = $(this).parent().html();

            owl.addItem(elem);
            $(this).parent().remove();
        });

        $('#projects-carousel .project:not(.project.' + cat + ')').each(function() {
            var owl = $(".owl-carousel").data('owlCarousel');
            targetPos = $(this).parent().index();
            elem = $(this).parent();

            $(elem).clone().appendTo($('#projects-hidden'));
            owl.removeItem(targetPos);
        });
    }
}

$(window).ready(function() {
    //Click event for filters
    $('#project-terms a').click(function(e) {
        e.preventDefault();
        $('#project-terms a').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat(cat);
        //alert('filtering'+ cat);
    });

    //Initialize owl carousel
    $("#projects-carousel").owlCarousel({

        // Most important owl features
        items: 4
    });
});

function showProjectsbyCat2(cat) {
    if (cat == 'all2') {
        $('#projects-hidden2 .project2').each(function() {
            var owl = $(".owl-carousel2").data('owlCarousel');
            elem = $(this).parent().html();

            owl.addItem(elem);
            $(this).parent().remove();
        });
    } else {
        $('#projects-hidden2 .project2.' + cat).each(function() {
            var owl = $(".owl-carousel2").data('owlCarousel');
            elem = $(this).parent().html();

            owl.addItem(elem);
            $(this).parent().remove();
        });

        $('#projects-carousel2 .project2:not(.project2.' + cat + ')').each(function() {
            var owl = $(".owl-carousel2").data('owlCarousel');

            targetPos = $(this).parent().index();
            elem = $(this).parent();

            $(elem).clone().appendTo($('#projects-hidden2'));
            owl.removeItem(targetPos);
        });
    }
}

$(window).ready(function() {
    //Click event for filters
    $('#project-terms2 a').click(function(e) {
        e.preventDefault();
        $('#project-terms2 a').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat2(cat);
        //alert('filtering'+ cat);
    });

    //Initialize owl carousel
    $("#projects-carousel2").owlCarousel({

        // Most important owl features
        items: 4
    });
});