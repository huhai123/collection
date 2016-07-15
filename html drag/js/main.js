$(function () {
    /*拖拽*/
    function drag(obox, n, doc)
    {
        $(obox).find(".pop_hd").mousedown(function(ev)
        {   var ev = ev || event;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var disX = ev.clientX - $(obox).offset().left;
            var disY = ev.clientY + n * scrollTop - $(obox).offset().top;
            var SelfL = -parseInt($(obox).css("margin-left"));
            var SelfT = -parseInt($(obox).css("margin-top"));
            var maxY = $(window).height() - $(obox).height()/2;
            $(document).mousemove(function(ev)
            {
                var ev = ev || event;
                var L = ev.clientX - disX + SelfL;
                var T = ev.clientY - disY + SelfT;
                if (L < SelfL)
                {
                    L = SelfL;
                }
                else if (L > $(window).width() - $(obox).width() + SelfL)
                {
                    L = $(window).width() - $(obox).width() + SelfL;
                }
                if (T < SelfT)
                {
                    T = SelfT;
                }
                else if (T > $(doc).height() - $(obox).height() + SelfT)
                {
                    T = $(doc).height() - $(obox).height() + SelfT;
                }
                T = T > maxY ? maxY : T;
                $(obox).css(
                    {
                        "left"	: L,
                        "top"	: T
                    })
            });
            $(document).mouseup(function()
            {
                $(this).unbind("mousemove");
            });
            return false;
        })
    }
    drag(".share_box", 1, window);
});