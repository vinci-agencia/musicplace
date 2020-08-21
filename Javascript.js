$(function() {
    $('#price-range').slider({
        range: true,
        min: 0,
        max: 30000,
        values: [0, 30000],
        slide: function(event, ui) {
            $('#price-min').val(ui.values[0]);
            $('#price-max').val(ui.values[1]);
        }
    });
});

$('#price-min').change(function(event) {
    var minValue = $('#price-min').val();
    var maxValue = $('#price-max').val();
    if (minValue <= maxValue) {
        $('#price-range').slider("values", 0, minValue);
    } else {
        $('#price-range').slider("values", 0, maxValue);
        $('#price-min').val(maxValue);
    }
});
// This isn't very DRY but it's just for demo purpose... oh well.
$('#price-max').change(function(event) {
    var minValue = $('#price-min').val();
    var maxValue = $('#price-max').val();
    if (maxValue >= minValue) {
        $('#price-range').slider("values", 1, maxValue);
    } else {
        $('#price-range').slider("values", 1, minValue);
        $('#price-max').val(minValue);
    }
});
$(document).ready(function() {
    $('#list').click(function(event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
    });
    $('#grid').click(function(event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });
});

$(function() {
    var $image = $('.product-image .image');
    var currImage;
    $('.product-thumbnails img').on('click', function() {
        $image.css('background-image', 'url(' + $(this).attr("src") + ')');
        currImage = "";
    });
    $('.product-thumbnails img').hover(function() {
        currImage = $image.css('background-image');
        $image.css('background-image', 'url(' + $(this).attr("src") + ')');
    }, function() {
        if (currImage !== "") {
            $image.css('background-image', currImage);
        }
    });

    // Zoom in on mouseover and zoom out on mouseout
    $('.product-image .image')
        .on('mouseover', function() {
            $(this).css('transform', 'scale(2)');
        })
        .on('mouseout', function() {
            $(this).css('transform', 'scale(1.0)');
        })
        .on('mousemove', function(e) {
            $(this).css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
        });
});