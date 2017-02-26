(function (doc, win) {
     var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //是否有有设备方向改变这个API。
          recalc    = function () {
                 var clientWidth = docEl.clientWidth;
                 if (clientWidth>=640) {
                    clientWidth = 640;
                 };
                 if (!clientWidth) return;
               docEl.style.fontSize = 100 * (clientWidth / 640) + 'px'; //现在1rem 为58.59px
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false); //事件冒泡时处理
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);