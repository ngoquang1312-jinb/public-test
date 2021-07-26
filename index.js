/*!
 *
 *   @voice4all/active-intent v1.0.0
 *   https://github.com/hodgef/js-library-boilerplate
 *
 *   Copyright (c) Benjamin Fisher (https://magiccollc.com/)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!(function (e, t) {
  "object" === typeof exports && "object" === typeof module
    ? (module.exports = t())
    : "function" === typeof define && define.amd
    ? define("ActiveIntent", [], t)
    : "object" === typeof exports
    ? (exports.ActiveIntent = t())
    : (e.ActiveIntent = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function __webpack_require__(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return (
        e[n].call(i.exports, i, i.exports, __webpack_require__),
        (i.l = !0),
        i.exports
      );
    }
    return (
      (__webpack_require__.m = e),
      (__webpack_require__.c = t),
      (__webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) ||
          Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (__webpack_require__.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (__webpack_require__.t = function (e, t) {
        if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (__webpack_require__.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            __webpack_require__.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (__webpack_require__.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return __webpack_require__.d(t, "a", t), t;
      }),
      (__webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (__webpack_require__.p = "/"),
      __webpack_require__((__webpack_require__.s = 1))
    );
  })([
    function (e, t) {
      function compareTwoStrings(e, t) {
        if ((e = e.replace(/\s+/g, "")) === (t = t.replace(/\s+/g, "")))
          return 1;
        if (e.length < 2 || t.length < 2) return 0;
        for (var n = new Map(), i = 0; i < e.length - 1; i++) {
          var r = e.substring(i, i + 2),
            o = n.has(r) ? n.get(r) + 1 : 1;
          n.set(r, o);
        }
        for (var a = 0, c = 0; c < t.length - 1; c++) {
          var s = t.substring(c, c + 2),
            A = n.has(s) ? n.get(s) : 0;
          A > 0 && (n.set(s, A - 1), a++);
        }
        return (2 * a) / (e.length + t.length - 2);
      }
      e.exports = {
        compareTwoStrings: compareTwoStrings,
        findBestMatch: function (e, t) {
          if (
            !(function (e, t) {
              return (
                "string" === typeof e &&
                !!Array.isArray(t) &&
                !!t.length &&
                !t.find(function (e) {
                  return "string" !== typeof e;
                })
              );
            })(e, t)
          )
            throw new Error(
              "Bad arguments: First argument should be a string, second should be an array of strings"
            );
          for (var n = [], i = 0, r = 0; r < t.length; r++) {
            var o = t[r],
              a = compareTwoStrings(e, o);
            n.push({ target: o, rating: a }), a > n[i].rating && (i = r);
          }
          var c = n[i];
          return { ratings: n, bestMatch: c, bestMatchIndex: i };
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      function _createForOfIteratorHelper(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return _arrayLikeToArray(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              F = function () {};
            return {
              s: F,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          o = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (a = !0), (r = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (a) throw r;
            }
          },
        };
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function _defineProperty(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = n(0),
        r = "style='padding: 0;border: none;background: none;cursor: pointer;'",
        o = 0,
        a = function App(e) {
          var t = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, App),
            _defineProperty(this, "activationKey", void 0),
            _defineProperty(this, "usingSDKRequest", function () {
              window.location.hostname, new XMLHttpRequest();
              t.recognition &&
                (t.configureRecognition(), t.addMicrophoneElement()),
                t.addSpeakerElements(),
                t.addListener();
            }),
            _defineProperty(this, "findTheIntent", function (e) {
              var n,
                i = _createForOfIteratorHelper(t.intents);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = n.value;
                  if (r.phrases.includes(e)) return r;
                  var o,
                    a = _createForOfIteratorHelper(r.phrases);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var c = o.value;
                      if (e.startsWith(c)) return r;
                    }
                  } catch (s) {
                    a.e(s);
                  } finally {
                    a.f();
                  }
                }
              } catch (s) {
                i.e(s);
              } finally {
                i.f();
              }
            }),
            _defineProperty(this, "configureRecognition", function () {
              var e,
                n = t.findTheIntent;
              (t.recognition.onresult = function (t) {
                o = 0;
                var r = t.results.length - 1,
                  a = t.results[r][0].transcript.trim(),
                  c = n(a);
                console.log({ lastResult: r, content: a }, "content");
                var s = "";
                if (void 0 !== c)
                  if (((e = c), "ArticleIntent" === c.name)) {
                    var A = document.querySelectorAll("article h1");
                    0 === A.length
                      ? (s = "There are no articles")
                      : ((s = "There are ".concat(
                          A.length,
                          " articles. Choose any one.\r\n"
                        )),
                        A.forEach(function (e, t) {
                          s += ""
                            .concat(t + 1, " ")
                            .concat(e.textContent.trim(), "\r\n");
                        }));
                  } else {
                    var g = document.querySelector(
                      "[og-intent='" + c.name + "']"
                    );
                    null !== g && void 0 !== g && (s = g.textContent.trim());
                  }
                else if (
                  void 0 === c &&
                  void 0 !== e &&
                  "ArticleIntent" === e.name
                ) {
                  var l = document.querySelectorAll("article h1"),
                    v = [];
                  l.forEach(function (e) {
                    v.push(e.textContent.trim());
                  });
                  var u = i.findBestMatch(a, v);
                  s =
                    0 !== u.bestMatchIndex
                      ? document
                          .querySelectorAll("article p")
                          [u.bestMatchIndex].textContent.trim()
                      : "No Articles found with ".concat(a);
                } else s = "We haven't set it up";
                if (void 0 !== c && void 0 !== c.type && "action" === c.type) {
                  var h,
                    w = _createForOfIteratorHelper(c.phrases);
                  try {
                    for (w.s(); !(h = w.n()).done; ) {
                      var d = h.value;
                      a = a.replace(d, "");
                    }
                  } catch (f) {
                    w.e(f);
                  } finally {
                    w.f();
                  }
                  var m,
                    p = _createForOfIteratorHelper(
                      document.querySelectorAll("[og-intent='" + c.name + "']")
                    );
                  try {
                    for (p.s(); !(m = p.n()).done; ) {
                      var B = m.value;
                      a.trim().toLowerCase() ===
                        B.textContent.trim().toLowerCase() && B.click();
                    }
                  } catch (f) {
                    p.e(f);
                  } finally {
                    p.f();
                  }
                } else
                  speechSynthesis.cancel(),
                    speechSynthesis.speak(new SpeechSynthesisUtterance(s));
              }),
                (t.recognition.onspeechend = function () {
                  document.getElementsByClassName(
                    "the_activeintent_voice_flex"
                  )[0].className += " the_activeintent_display_none";
                  var e = document.querySelectorAll(
                    ".the_activeintent_voice_flex.the_activeintent_top_60.the_activeintent_voice_flex_top_0"
                  );
                  e.length > 0 &&
                    e[0].classList.remove("the_activeintent_voice_flex_top_0");
                  var t = document.querySelectorAll(
                    ".the_activeintent_right_svg.the_activeintent_right_svg_none"
                  );
                  t.length > 0 &&
                    t[0].classList.remove("the_activeintent_right_svg_none");
                  var n = document.querySelectorAll(
                    ".the_activeintent_avatar.the_activeintent_avatar_voice"
                  );
                  n.length > 0 &&
                    n[0].classList.remove("the_activeintent_avatar_voice"),
                    (o = 0);
                }),
                (t.recognition.onerror = function (e) {
                  "not-allowed" === e.error &&
                    (document.getElementsByClassName(
                      "the_activeintent_voice_flex"
                    )[0].className += " the_activeintent_display_none");
                  if ("no-speech" === e.error) {
                    document.getElementsByClassName(
                      "the_activeintent_voice_flex"
                    )[0].className += " the_activeintent_display_none";
                    var t = document.querySelectorAll(
                      ".the_activeintent_voice_flex.the_activeintent_top_60.the_activeintent_voice_flex_top_0"
                    );
                    t.length > 0 &&
                      t[0].classList.remove(
                        "the_activeintent_voice_flex_top_0"
                      );
                    var n = document.querySelectorAll(
                      ".the_activeintent_right_svg.the_activeintent_right_svg_none"
                    );
                    n.length > 0 &&
                      n[0].classList.remove("the_activeintent_right_svg_none");
                    var i = document.querySelectorAll(
                      ".the_activeintent_avatar.the_activeintent_avatar_voice"
                    );
                    i.length > 0 &&
                      i[0].classList.remove("the_activeintent_avatar_voice");
                  }
                  o = 0;
                });
            }),
            _defineProperty(this, "addMicrophoneElement", function () {
              var e = document.createElement("div");
              (e.innerHTML =
                '<div class="the_activeintent" style="position: fixed; top: 85%; right: 5%">    <button style=\'padding: 0;border: none;background: none;cursor: pointer;\'>      <div style="display: flex">        <div class="the_activeintent_voice_flex the_activeintent_display_none the_activeintent_top_60"><span id="the_activeintent_text_voice"></span>          <div class="the_activeintent_right_svg" style="position: absolute;right: -25px;bottom: -5px;"><svg xmlns="http://www.w3.org/2000/svg" width="69" height="20" viewBox="0 0 69 20">              <path id="Polygon_1" data-name="Polygon 1" d="M34.5,0,69,20H0Z" fill="#eaeef5" />            </svg></div>        </div>        <div id="microphone" class="the_activeintent_avatar"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71">  <g id="Group_2" data-name="Group 2" transform="translate(-301 -110)">    <circle id="Ellipse_1" data-name="Ellipse 1" cx="35.5" cy="35.5" r="35.5" transform="translate(301 110)" fill="#0a8cc7"/>    <path id="Icon_awesome-microphone-alt" data-name="Icon awesome-microphone-alt" d="M28.8,16.459H27.432a1.371,1.371,0,0,0-1.372,1.372v4.115a10.985,10.985,0,0,1-12.069,10.92c-5.7-.556-9.876-5.681-9.876-11.408V17.831a1.371,1.371,0,0,0-1.372-1.372H1.372A1.371,1.371,0,0,0,0,17.831v3.443c0,7.684,5.484,14.535,13.03,15.575v2.927H8.23a1.371,1.371,0,0,0-1.372,1.372v1.372A1.371,1.371,0,0,0,8.23,43.891H21.946a1.371,1.371,0,0,0,1.372-1.372V41.148a1.371,1.371,0,0,0-1.372-1.372h-4.8V36.881a15.1,15.1,0,0,0,13.03-14.936V17.831A1.371,1.371,0,0,0,28.8,16.459ZM15.088,30.175a8.23,8.23,0,0,0,8.23-8.23H16c-.5,0-.915-.307-.915-.686V19.888c0-.379.41-.686.915-.686h7.315V16.459H16c-.5,0-.915-.307-.915-.686V14.4c0-.379.41-.686.915-.686h7.315V10.973H16c-.5,0-.915-.307-.915-.686V8.915c0-.379.41-.686.915-.686h7.315a8.23,8.23,0,1,0-16.459,0V21.946A8.23,8.23,0,0,0,15.088,30.175Z" transform="translate(321.574 123.716)" fill="#fff"/>  </g></svg></div>      </div>    </button>  </div>'),
                document.body.appendChild(e);
            }),
            _defineProperty(this, "addSpeakerElements", function () {
              var e,
                t = _createForOfIteratorHelper(
                  document.querySelectorAll("[magic='speakable']")
                );
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value,
                    i = document.createElement("div");
                  (i.innerHTML =
                    "<div  ><button class='speaker' " +
                    r +
                    " ><img style='width: 25px;' src='data:image/png;base64,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'/> </button></div>"),
                    n.appendChild(i);
                }
              } catch (o) {
                t.e(o);
              } finally {
                t.f();
              }
            }),
            _defineProperty(this, "addListener", function () {
              var e = t.recognition;
              t.recognition &&
                document
                  .getElementById("microphone")
                  .addEventListener("click", function () {
                    if (1 === o) return (o = 0), e.stop();
                    var t = document.querySelectorAll(
                      ".the_activeintent_voice_flex.the_activeintent_display_none"
                    );
                    t.length > 0 &&
                      t[0].classList.remove("the_activeintent_display_none"),
                      (document.getElementById(
                        "the_activeintent_text_voice"
                      ).innerHTML =
                        "Enable permissions on the upper left of your browser window"),
                      e.start(),
                      (o = 1),
                      (e.onstart = function () {
                        var e = document.getElementsByClassName(
                          "the_activeintent_voice_flex"
                        );
                        e.length > 0 &&
                          (e[0].className +=
                            " the_activeintent_voice_flex_top_0");
                        var t = document.getElementsByClassName(
                          "the_activeintent_right_svg"
                        );
                        t.length > 0 &&
                          (t[0].className +=
                            " the_activeintent_right_svg_none");
                        var n = document.getElementsByClassName(
                          "the_activeintent_avatar"
                        );
                        n.length > 0 &&
                          (n[0].className += " the_activeintent_avatar_voice"),
                          (document.getElementById(
                            "the_activeintent_text_voice"
                          ).innerHTML =
                            "<div class='the_activeintent_loading'>Listening </div>");
                      });
                  }),
                setInterval(function () {
                  var e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
                    t = /Chrome/i.test(navigator.userAgent);
                  !e && t && speechSynthesis.pause(), speechSynthesis.resume();
                }, 1e4);
              var n,
                i = _createForOfIteratorHelper(
                  document.querySelectorAll(".speaker")
                );
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  n.value.addEventListener("click", function () {
                    speechSynthesis.cancel();
                    var e =
                      this.parentElement.parentElement.parentElement.textContent.trim();
                    speechSynthesis.speak(new SpeechSynthesisUtterance(e));
                  });
                }
              } catch (r) {
                i.e(r);
              } finally {
                i.f();
              }
            }),
            (this.intents = e),
            window.hasOwnProperty("webkitSpeechRecognition") &&
              ((this.recognition = new window.webkitSpeechRecognition()),
              (this.recognition.lang = "en-US"),
              (this.recognition.interimResults = !1),
              (this.recognition.continuous = !1));
          var n = document.createElement("link");
          (n.type = "text/css"),
            (n.rel = "stylesheet"),
            (n.href =
              "https://cdn.jsdelivr.net/npm/active-intent@latest/activeintent.css");
          var a = document.querySelector("script");
          a.parentNode.insertBefore(n, a),
            window.hasOwnProperty("webkitSpeechGrammarList") &&
              ((this.speechRecognitionList =
                new window.webkitSpeechGrammarList()),
              this.speechRecognitionList.addFromString("#JSGF V1.0;", 1),
              (this.recognition.grammars = this.speechRecognitionList));
          var c = window.document.getElementById("ActiveIntent");
          c && (this.activationKey = c.getAttribute("activationKey")),
            this.activationKey && this.usingSDKRequest();
        };
      t.default = a;
    },
  ]);
});
//# sourceMappingURL=index.js.map
