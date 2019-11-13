;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.arachne = factory();
  }
}(this, function() {

var arachne;
(function (arachne) {
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.addXMLRequestCallback = function (callback) {
            if (typeof XMLHttpRequest !== 'undefined') {
                var oldXHR_1 = window['XMLHttpRequest'];
                var xmlHttpRequestWithAjaxEvent = function () {
                    var xhr = new oldXHR_1();
                    xhr.addEventListener("readystatechange", function () {
                        if (xhr.readyState === 4) {
                            var serverUrl = xhr['responseURL']; // some older browser does not support responseURL in XMLHttpRequest
                            if (serverUrl) {
                                var ajaxEvent = new CustomEvent('ajax', {
                                    'detail': {
                                        'url': serverUrl
                                    }
                                });
                                if (callback)
                                    callback();
                                document.dispatchEvent(ajaxEvent);
                            }
                        }
                    }, false);
                    return xhr;
                };
                window['XMLHttpRequest'] = xmlHttpRequestWithAjaxEvent;
            }
            else {
                //ie
            }
        };
        return Utils;
    }());
    arachne.Utils = Utils;
})(arachne || (arachne = {}));

return arachne;
}));

//# sourceMappingURL=maps/arachneHeartbeat.js.map
