/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 05.12.2017
 * Created: 14:08
 **/
(function(window){

    HeroQuotes.prototype.constructor = HeroQuotes;
    HeroQuotes.prototype = {
        wordTimer : 100,
        quoteDelay: 3000
    };

    var ref, controller, $quotes, $dots, $dot, delay, currentquote, currentWord, timer, $currentQuote, $currentSpans;
    function HeroQuotes(pController){
        ref = this;
        controller = pController;
    };

    HeroQuotes.prototype.init = function(){

        currentquote = 0;

        $quotes = $('.quote');
        $dots = $('.dots');

        if($quotes.length > 0){
            $quotes.each(function(i){
                //put words in separate spans
                var text = $(this).text();
                var textArray = text.split(" ");
                $(this).empty().attr('data-index',i);
                for(var a=0;a<textArray.length; ++a){
                    $(this).html($(this).html()+'<span>'+textArray[a]+'</span>');
                    if(a<textArray.length-1)$(this).html($(this).html()+" ");
                }

                if($quotes.length > 1){
                    //create a dot
                    var $dot = $('<div></div>');
                    $dot.addClass('dot').attr('data-index',i);
                    $dots.append($dot);
                }

            });
            $dot = $('.dot');
            $dot.click(function(e){

                if(timer) clearInterval(timer);
                if(delay) clearTimeout(delay);

                currentquote = $(this).attr('data-index');
                currentWord = 0;

                ref.showQuote();

                e.preventDefault();
            });
        }

        ref.showQuote();

    };

    HeroQuotes.prototype.showQuote = function(){

        if($currentQuote) $currentQuote.removeClass('visible');

        $dot.removeClass('current');
        var $d = $(".dot[data-index='" + currentquote + "']");
        $d.addClass('current');

        $currentQuote = $(".quote[data-index='" + currentquote + "']");
        $currentSpans = $currentQuote.find('span');

        TweenLite.set($currentSpans,{opacity:0,y:'50%', ease:Sine.easeOut});

        $currentQuote.addClass('visible');

        currentWord = 0;

        ref.showWord();

    };

    HeroQuotes.prototype.showWord = function(){

        if(timer) clearInterval(timer);

        if(currentWord < $currentSpans.length){
            var $span = $currentSpans.eq(currentWord);

            TweenLite.to($span,0.2, {opacity:1, ease:Sine.easeOut});
            TweenLite.to($span,0.5, {y:'0%', ease:Sine.easeOut});

            currentWord++;

            timer = setInterval(ref.showWord, ref.wordTimer);

        } else {

            if($quotes.length > 1){
                delay = setTimeout(function(){

                    currentWord = 0;

                    if(currentquote <= $currentQuote.length){
                        currentquote++
                    } else currentquote = 0;

                    ref.showQuote();

                }, ref.quoteDelay);
            }

        }

    };

    window.HeroQuotes = HeroQuotes;

}(window));
