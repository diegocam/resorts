// jQuery Effects


// [00] iFrame for Low Price Guarantee text links
$(".lowPriceGtyLink").fancybox({
    width: 640,
    height: 248,
    fitToView: false,
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});


// [01] iFrame for vendor pages' additional terms and conditions
$(".vendorPopTerms").fancybox({
    width: 800,
    height: 238,
    fitToView: false,
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});


// [02] iFrame for cruise ship calendar popups
$(".newShipCalendar").fancybox({
    autoSize: true,
    maxHeight: 245,
    fitToView: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});


// [03] qTips for images of cruise ships via links
$(function() {
    $('.newShipLink,.adcAdvantageImg').each(function() {
        $(this).qtip({
            content: {
                text: $(this).next('img:hidden'),
            },
            position: {
                viewport: $(window),
            },
            style: {
                classes: "ui-tooltip-blue-step3"
            }
        });
    });
});


// [04] iFrame for cruise port directions form
$("#portDirectionBtn,#portDirectionBtn2,.portDirectionBtn").fancybox({
    autoSize: true,
    maxHeight: 460,
    fitToView: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});


// [05] iFrame for Reservation Waitlists
$(".waitlistPop").fancybox({
    maxWidth: 470,
    maxHeight: 473,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});

// [05] iFrame for Singles Cruises
$(".singlesCruisesPop").fancybox({
    maxWidth: 800,
    maxHeight: 480,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});

// [06] iFrame for Singles Resorts
$(".singlesResortsPop").fancybox({
    maxWidth: 800,
    maxHeight: 10,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});

// [07] fancyBox for resort videos
$(document).ready(function() {
    $(".sandalsVideo").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
});

// [08] fancyBox for resort pricing
$(document).ready(function() {
    $("a.resortListPricing").fancybox({
        fitToView: true,
        autoSize: false,
        width: 1010,
        height: '90%',
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic',
        scrolling: 'no',
        onUpdate: function() {
            var id = this.href;
            var fancy_main_height = $(id).outerHeight();
            var fancy_mainheader_height = $(id).children(':first-child').outerHeight();

            if ($(id).children(':first-child').next().css('display') !== "none") {
                var fancy_subheader_height = $(id).children(':first-child').next().outerHeight();
            } else {
                var fancy_subheader_height = -10;
            }

            var header_height = fancy_mainheader_height + fancy_subheader_height;
            var new_height = fancy_main_height - header_height;

            $(id).children(':first-child').next().next().height(new_height - 20);
        }
    });
});

// [09] iFrame for vendor hosted search pages
$("a.vendorFrame").fancybox({
    maxWidth: '90%',
    height: '90%',
    fitToView: true,
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic'
});