"use strict";var n=a;function r(){var n=["56yNmsyY","642594UtRJZG","includes","isSony","TiVo","PlatformName","VITIS","__esModule","vendor","apple","1026100ygMTaB","Apple","2746779sIQrHw","3309260tcQwGl","352890gDJxte","platformName","_init","isApple","isEdge","ios","userAgent","Tizen ","sony","6ymBEZY","panasonic","PlatformInstance","prototype","Toshiba","Chrome","TSBNetTV","isChrome","CrKey","Edg/","172UjXWgx","9798MnYmqK","navigator","tizen","webOS","browser","getPlatformName","toshiba","tivo","android","DeviceUtil","isWebOS","22767173xVnomA","isTizen","Web0S","24AUaFua"];return(r=function(){return n})()}!function(n,t){for(var e=a,i=r();;)try{if(712146===parseInt(e(414))/1*(parseInt(e(415))/2)+-parseInt(e(431))/3*(-parseInt(e(429))/4)+parseInt(e(440))/5+-parseInt(e(453))/6*(-parseInt(e(442))/7)+-parseInt(e(430))/8*(parseInt(e(444))/9)+parseInt(e(443))/10+-parseInt(e(426))/11)break;i.push(i.shift())}catch(n){i.push(i.shift())}}(),Object.defineProperty(exports,n(437),{value:!0});var t=function(r){var t=n;return(window[t(416)][t(450)]||"").includes(r)},e={isToshiba:function(){var r=n;return t(r(457))||t(r(459))},isSony:function(){return t("Sony")},isWebOS:function(){return t(n(428))},isEdge:function(){return t(n(462))},isIE:function(){return t("Trident/")},isTizen:function(){return t("Tizen")},isTizenVersion:function(r){return void 0===r&&(r=0),!(r<2)&&t(n(451)+parseInt(""+r,10))},isVideoFutur:function(){return t(n(436))},isTiVo:function(){return t(n(434))},isChromecast:function(){return t(n(461))},isChrome:function(){var r=n;return t(r(458))&&!e[r(448)]()},isApple:function(){var r=n;return!!navigator[r(438)]&&navigator.vendor[r(432)](r(441))&&!e[r(427)]()}},i={tizen:n(417),webOS:n(418),sony:n(452),panasonic:n(454),apple:n(439),tivo:n(422),toshiba:n(421),browser:"browser",ios:n(449),android:n(423)},o=function(){var r=n;function t(){var n=a;this[n(435)]=i,this.platformName="",this[n(446)]()}return t.prototype._init=function(){var n=a;this[n(445)]=e[n(427)]()?i[n(417)]:e[n(425)]()?i[n(418)]:e[n(433)]()?i.sony:i[n(419)]},t[r(456)][r(420)]=function(){return this.platformName},t[r(456)][r(427)]=function(){return e[r(427)]()},t[r(456)][r(425)]=function(){return e[r(425)]()},t[r(456)].isSmartTV=function(){return e[r(427)]()||e.isWebOS()},t[r(456)][r(447)]=function(){return e[r(447)]()},t[r(456)][r(460)]=function(){return e[r(460)]()},t}(),s=new o;function a(n,t){var e=r();return(a=function(n,r){return e[n-=414]})(n,t)}exports[n(424)]=e,exports.Platform=o,exports[n(455)]=s,exports[n(435)]=i;