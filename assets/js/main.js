/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 14.06.2017
 * Created: 15:16
 **/
(function(window){

    Controller.prototype.constructor = Controller;
    Controller.prototype = {

    };

    var ref, $, $header, $body, $mainNav, $navToggle, $accordions, $subMenuToggle, $submenuToggles,
        quotesController, openAccordionIndex, closed_index, jump_height, clicked_index, $content_old;
    function Controller(jQuery){

        $ = jQuery;
        ref = this;

        Logger.useDefaults();
        //Logger.setLevel(Logger.OFF);

        var browser = ref.getBrowser();
        $('body').addClass(browser.name.toLowerCase()).addClass('version-' + browser.version.toLowerCase());

    };

    Controller.prototype.init = function(){

        Logger.log("init");

        $body = $('body');
        $header = $('.header');
        $mainNav = $('.main-nav');
        $submenuToggles = $body.find('.has-submenu');

        $navToggle = $('.nav-toggle');
        $navToggle.click(function(e){
            ref.toggleMenu();
            e.preventDefault();
        });
        $subMenuToggle = $('.has-submenu');
        $subMenuToggle.click(function(e){
            ref.toggleSubMenu($(this));
            e.preventDefault();
        });

        //handle the quotes
        quotesController = new HeroQuotes(this);
        quotesController.init();

        $body.fitVids();

        $('.fade-in').viewportChecker({
            classToAdd: 'animated fadeInUp',
            offset: 100
        });

        ref.initAccordions();
        ref.addEventHandlers();
        ref.resize();

    };

    /*********************
     init accordions
     *********************/
    Controller.prototype.initAccordions = function(){
        //accordions
        $accordions = $('.accordion');
        if($accordions.length > 0){
            $accordions.each(function(i){

                $(this).attr('data-index',i);

                var $accHeader = $(this).find('.accordion-header');
                $accHeader.click(function(){

                    closed_index = null;

                    var $acc = $(this).closest('.accordion');
                    var $content = $acc.find('.accordion-content');
                    clicked_index = $acc.attr('data-index');

                    if(!$acc.hasClass('open')){


                        //close open ones first
                        /*
                        $accordions.each(function(){
                            if($(this).hasClass('open')){
                                //hard close this
                                $content_old = $(this).find('.accordion-content');
                                closed_index = $(this).attr('data-index');
                                TweenLite.set($content_old, {height:0, ease: Expo.easeIn});
                                $(this).removeClass("open");
                            }
                        });

                        if(closed_index){
                            if(parseInt(closed_index) < parseInt(clicked_index)){
                                TweenLite.to(window, 0.5, {scrollTo:{y:'#'+$acc.attr('id'), offsetY:$header.height()*2} });
                            }
                        }
                        */

                        //now open it
                        TweenLite.set($content, {height:"auto"});
                        TweenLite.from($content, 0.5, {height:0, ease: Expo.easeIn});

                    } else {
                        //close
                        TweenLite.to($content, 0.5, {height:0, ease: Expo.easeOut});
                    }
                    $acc.toggleClass('open');
                });
            });
        }
        $('.opendata-list').find('li').each(function(i){
            $(this).attr('data-index',i);
        }).click(function(e){
            openAccordionIndex = $(this).attr('data-index');
            e.preventDefault();
        });
    };

    /*********************
     open accordion with data-index
     *********************/
    Controller.prototype.openAccordion = function(index){
        $(".accordion[data-index='" + index +"']").addClass('open');
    };

    /*********************
    close all accordion (except the with data-index)
    *********************/
    Controller.prototype.closeAccordions = function(index){
        $accordions.each(function(i){
            var i = $(this).attr('data-index')
            if(i != index) $(this).removeClass('open')
        });
    };

    /*********************
     mobile menu toggle
     *********************/
    Controller.prototype.toggleMenu = function(){

        Logger.log("toggleMenu");

        if($body.hasClass('nav-open')){

            //close
            $navToggle.removeClass('active');
            $body.removeClass('nav-open');
            $mainNav.removeClass('open');

        } else {

            //open
            $navToggle.addClass('active');
            $body.addClass('nav-open');
            $mainNav.addClass('open');
        }
    };

    /*********************
     submenu toggle
     *********************/
    Controller.prototype.toggleSubMenu = function($elem){
        var $submenu = $elem.find('.submenu');
        $submenu.toggleClass('open')
        $elem.toggleClass('open')
    };

    /*********************
     submenu close
     *********************/
    Controller.prototype.closeSubMenus = function(){
        if($submenuToggles.hasClass('open')){
            $submenuToggles.removeClass('open');
            $submenuToggles.find('.submenu').removeClass('open')
        }
    };

    Controller.prototype.addEventHandlers = function(){


        /*********************
        scroll event
        *********************/
        lastScrollTop = 0;
        $(window).scroll(function(event){

            if(ref.viewport().width <= 1150) return;

            var st = $(this).scrollTop();
            var hh = $header.height();

            if (st > lastScrollTop){
                // down
                if(st > 0){
                    //remove header
                    $header.addClass('fixed gone');
                    ref.closeSubMenus();
                }
            } else {
                // up
                if($header.hasClass('gone')){
                    //show header
                    $header.removeClass('gone');
                }
                if(st == hh) $header.removeClass('fixed');
            }
            lastScrollTop = st;
        });

        /*********************
        scroll to #id
        *********************/
            // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 100
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!

                            if(openAccordionIndex){
                                ref.openAccordion(openAccordionIndex);
                                openAccordionIndex = null;
                            }

                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

        /*********************
        resize event
        *********************/
        var delay = (function(){
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(window).resize(function () {
            delay(function () {
                ref.resize();
            }, 50);
        });
        ref.resize();
    };

    /*********************
    resize event handler
    *********************/
    Controller.prototype.resize = function(){

    };

    /*********************
    viewport().width, viewport().height
    *********************/
    Controller.prototype.viewport = function()
    {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };

    /*********************
    get browser type + version
    *********************/
    Controller.prototype.getBrowser = function()
    {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name:'IE',version:(tem[1]||'')};
        }
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
            name: M[0],
            version: M[1]
        };
    };

    window.Controller = Controller;

}(window));
