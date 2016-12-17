// PRELOADER
$(window).load(function () {
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '50%',
        autoClose: true,
    });
});

$(document).ready(function () {
    "use strict";

    // PAGE SCROLL
    $('body').on('click', '.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // STICKY HEADER
    $("header").sticky({
        topSpacing: 0
    });

    // SCROLL SPY
    $('body').scrollspy({
        target: '.navbar-default',
        offset: 100
    })

    // QUOTE CAROUSEL
    $('.quote-carousel').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // CLIENT CAROUSEL
    $('.client-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    // TESTIMONIAL CAROUSEL
    $('.testi-carousel').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // GRAYSCALE IMG
    $('.img-grayscale').gray();

    // SKILLS CHART
    $('#skills2').appear(function () {
        $('.chart').easyPieChart({
            barColor: '#ff7200'
        });

    }, {
        accX: 0,
        accY: -200
    });

    $('#skills-dark').appear(function () {
        $('.chart-dark').easyPieChart({
            trackColor: '#32343A',
            scaleColor: '#32343A',
            barColor: '#ff7200'
        });

    }, {
        accX: 0,
        accY: -200
    });


    $('.chart2').easyPieChart({
        barColor: '#000000'
    });

    // TABS
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })


    $('ul.stabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.stabs li').removeClass('current');
        $('.stab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })


    $('ul.stabs2 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.stabs2 li').removeClass('current');
        $('.stab2-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    // ACCORDION
    $('#accordion-e1 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        $(this).parent().find(".panel-heading").addClass("active");
        $(".panel-default").addClass("active");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        $(this).parent().find(".panel-heading").removeClass("active");
        $(".panel-default").removeClass("active");
    });

    $('#accordion-e2 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".arrow_carrot-down_alt2").removeClass("arrow_carrot-down_alt2").addClass("arrow_carrot-up_alt2");
        $(this).parent().find(".panel-heading").addClass("active");

    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".arrow_carrot-up_alt2").removeClass("arrow_carrot-up_alt2").addClass("arrow_carrot-down_alt2");
        $(this).parent().find(".panel-heading").removeClass("active");
    });

    $('#accordion-e3 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".arrow_carrot-down_alt2").removeClass("arrow_carrot-down_alt2").addClass("arrow_carrot-up_alt2");
        $(this).parent().find(".panel-heading").addClass("active");

    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".arrow_carrot-up_alt2").removeClass("arrow_carrot-up_alt2").addClass("arrow_carrot-down_alt2");
        $(this).parent().find(".panel-heading").removeClass("active");
    });

    $('#accordion-e4 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".arrow_carrot-down_alt2").removeClass("arrow_carrot-down_alt2").addClass("arrow_carrot-up_alt2");
        $(this).parent().find(".panel-heading").addClass("active");

    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".arrow_carrot-up_alt2").removeClass("arrow_carrot-up_alt2").addClass("arrow_carrot-down_alt2");
        $(this).parent().find(".panel-heading").removeClass("active");
    });

    // STATS COUNTER
    $('#stats').appear(function () {

        $('.count1').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }, {
        accX: 0,
        accY: -50
    });

    $('.data').slick();

    // BOOTSTRAP MOBILE NAV
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
        $('.body').removeClass("menu-active");
    });

    $('.navbar-toggle').click(function () {
        $('.body').toggleClass("menu-active");
    });

    // TWITTER FEED
    $('#tweecool').tweecool({
        //Change envato to your username
        username: 'D_Eleventh',
        profile_image: false,
        limit: 4
    });

    $('#tweet_feed').tweecool({
        //Change envato to your username
        username: 'D_Eleventh',
        profile_image: false,
        limit: 2
    });

    // FLICKR

    $('#flickr').jflickrfeed({
        //Change 51035555243@N01 with your flickr id
        limit: 9,
        qstrings: {
            id: '51035555243@N01'
        },
        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });
});

// ISOTOPE
$(window).load(function () {
    "use strict";
    var $container = $('#blog-mason');
    $container.isotope({
        itemSelector: '.bm-item'
    });
    var $optionSets = $('#portfolio-section .filter'),
            $optionLinks = $optionSets.find('a');
    $optionLinks.click(function () {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});

$(window).load(function () {
    var $container = $('#folio-wrap');
    $container.isotope({
        itemSelector: '.folio-item'
    });
    var $optionSets = $('.folio-filter'),
            $optionLinks = $optionSets.find('a');
    $optionLinks.click(function () {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});

// HEADER ONSCROLL EFFECT
$(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value > 350)
        $("header").css("background", "#fff").css("padding", "0px 0px 13px");
    else
        $("header").css("background", "transparent").css("padding", "20px 0px 20px");

});

$(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value > 350)
        $(".header-dark").css("background", "#1F292E").css("padding", "0px 0px 13px");
    else
        $(".header-dark").css("background", "transparet").css("padding", "20px 0px 20px");

});

// SETTINGS PANEL
$(document).ready(function () {

    $('.btn-settings').on('click', function () {
        $(this).parent().toggleClass('active');
    });
    $('.switch-handle').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('boxed');
    });
    $(".switch-handle").click(function () {
        $(".portfolio-gal").isotope("layout");
    });
    $('.color-list div').on('click', function () {
        if ($(this).hasClass('active'))
            return false;
        $('link.color-scheme-link').remove();
        $(this).addClass('active').siblings().removeClass('active');
        var src = $(this).attr('data-src'),
                colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
        colorScheme
                .attr('href', src)
                .appendTo('head');
    });
    $('.reset').on('click', function () {
        $(".bg-list div").removeClass('active');
        $(".switch-handle").removeClass('active');
        $('body').removeClass('boxed');
        $(".color-list div").removeClass('active');
        $(".body").removeClass('boxed');
        if ($(this).hasClass('active'))
            return false;
        $('link.color-scheme-link').remove();
        var src = $(this).attr('data-src'),
                colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
        colorScheme
                .attr('href', src)
                .appendTo('head');
    });

});

//MiniFox JS

(function ($) {
    "use strict";

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 85)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $("body").scrollspy({target: ".navbar-collapse", offset: 200});

    // Gallery Slider
    $('#gal-slider').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: false,
        controlsContainer: ".gal-wrap",
        controlNav: true,
        manualControls: ".gal-nav li"
    });

    // Twitterfeed
    $('#tweetcool').tweecool({
        profile_image: false,
        username: 'D_Eleventh',
        limit: 1
    });



    // Floating Sidebar Script
    var $sidebar = jQuery("#floating-sidebar"),
            offset = $sidebar.offset(),
            $scrollHeight = jQuery("#fs-content").height(),
            $scrollOffset = jQuery("#fs-content").offset(),
            $window = jQuery(window),
            $headerHeight = 0;
    $window = $(window);
    var sidebarOffset = $sidebar.offset();



    // Progressbar
    $('.b-progress-bar').each(function () {
        var cap = parseInt($(this).attr('data-capacity'), 10),
                val = parseInt($(this).attr('data-value'), 10),
                len = 100 * (val / cap) + '%';

        $(this).find('.progress-line').css('width', len);

    });

    // Skills 
    $('#skills').appear(function () {
        $(".progress-scale div").removeClass("no-width-skills");
    }, {
        accX: 0,
        accY: -200
    });


    $('#skills2').appear(function () {
        $('.chart').easyPieChart({
            barColor: '#000000'
        });

        $('.chart-color2').easyPieChart({
            barColor: '#7cc623'
        });

        $('.chart-color3').easyPieChart({
            barColor: '#0FA2D5'
        });

        $('.chart-color4').easyPieChart({
            barColor: '#FF4862'
        });

    }, {
        accX: 0,
        accY: -200
    });





    // ACCORDION

    $('#accordion .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        $(this).parent().addClass("active");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        $(this).parent().removeClass("active");
    });



    $('#accordion-e1 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
    });


    $('#accordion-e2 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".icon-plus2").removeClass("icon-plus2").addClass("icon-minus2");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".icon-minus2").removeClass("icon-minus2").addClass("icon-plus2");
    });


    $('#accordion-e3 .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".icon-cross2").removeClass("icon-cross2").addClass("icon-check2");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".icon-check2").removeClass("icon-check2").addClass("icon-cross2");
    });

    $('#stats1').appear(function () {

        $('.count1').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }, {
        accX: 0,
        accY: -50
    });

    $('#stats2').appear(function () {

        $('.count2').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }, {
        accX: 0,
        accY: -50
    });


    $('#stats3').appear(function () {

        $('.count3').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }, {
        accX: 0,
        accY: -50
    });

    // FULLWIDTH SEARCH
    $(".ss-trigger").click(function () {
        $(".ss-content").addClass("ss-content-act");
    });
    $(".ss-close").click(function () {
        $(".ss-content").removeClass("ss-content-act");
    });

    // STICKY HEADER
    $("header").sticky({topSpacing: 0});







})(jQuery); // End of use strict




$('#price1')
        .bind('keyup', function () {
            var from = $(this)
                    .val();
            var to = $('#price2')
                    .val();
            $('#sliderRange')
                    .slider('option', 'values', [from, to]);
        });
$('#price2')
        .bind('keyup', function () {
            var from = $('#price1')
                    .val();
            var to = $(this)
                    .val();
            $('#sliderRange')
                    .slider('option', 'values', [from, to]);
        });

$(window).load(function () {
    "use strict";
    // Isotope
    var $container = $('#blog-mason');
    $container.isotope({
        itemSelector: '.bm-item'
    });
    var $optionSets = $('#portfolio .folio-filter'),
            $optionLinks = $optionSets.find('a');
    $optionLinks.click(function () {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});


$(window).load(function () {
    "use strict";
    // Isotope
    var $container = $('#portfolio-home');
    $container.isotope({
        itemSelector: '.project-item'
    });
    var $optionSets = $('#portfolio-section .filter'),
            $optionLinks = $optionSets.find('a');
    $optionLinks.click(function () {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});

var tabLinK = $('.about-post a'),
        tabContenT = $('.tab-cont');

tabLinK.on('click', function (event) {
    event.preventDefault();
    var dataLink = $(this).attr('data-link'),
            dataTab = $('.tab-cont.active').attr('data-tab');

    if (!$(this).hasClass('active')) {
        $('.about-post a').removeClass('active');
        $(this).addClass('active');
    }

    if (dataLink == dataTab) {
    } else {
        tabContenT.removeClass('active');
        $('.tab-cont[data-tab=' + dataLink + ']').addClass('active');
    }
});



