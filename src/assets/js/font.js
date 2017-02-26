(function (doc, win) {
     var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //�Ƿ������豸����ı����API��
          recalc    = function () {
                 var clientWidth = docEl.clientWidth;
                 if (clientWidth>=640) {
                    clientWidth = 640;
                 };
                 if (!clientWidth) return;
               docEl.style.fontSize = 100 * (clientWidth / 640) + 'px'; //����1rem Ϊ58.59px
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false); //�¼�ð��ʱ����
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);