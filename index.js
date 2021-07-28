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
      var r = (t[n] = { i: n, l: !1, exports: {} });
      return (
        e[n].call(r.exports, r, r.exports, __webpack_require__),
        (r.l = !0),
        r.exports
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
          for (var r in e)
            __webpack_require__.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
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
        for (var n = new Map(), r = 0; r < e.length - 1; r++) {
          var i = e.substring(r, r + 2),
            o = n.has(i) ? n.get(i) + 1 : 1;
          n.set(i, o);
        }
        for (var a = 0, s = 0; s < t.length - 1; s++) {
          var c = t.substring(s, s + 2),
            l = n.has(c) ? n.get(c) : 0;
          l > 0 && (n.set(c, l - 1), a++);
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
          for (var n = [], r = 0, i = 0; i < t.length; i++) {
            var o = t[i],
              a = compareTwoStrings(e, o);
            n.push({ target: o, rating: a }), a > n[r].rating && (r = i);
          }
          var s = n[r];
          return { ratings: n, bestMatch: s, bestMatchIndex: r };
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
            var r = 0,
              F = function () {};
            return {
              s: F,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
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
        var i,
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
            (a = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
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
      var r = n(0),
        i = 0,
        o = function App(e) {
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
                r = _createForOfIteratorHelper(t.intents);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value;
                  if (i.phrases.includes(e)) return i;
                  var o,
                    a = _createForOfIteratorHelper(i.phrases);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var s = o.value;
                      if (e.startsWith(s)) return i;
                    }
                  } catch (c) {
                    a.e(c);
                  } finally {
                    a.f();
                  }
                }
              } catch (c) {
                r.e(c);
              } finally {
                r.f();
              }
            }),
            _defineProperty(this, "configureRecognition", function () {
              var e,
                n = t.findTheIntent;
              (t.recognition.onstart = function () {
                document.getElementsByClassName(
                  "the_activeintent_permission"
                )[0].style.display = "none";
              }),
                (t.recognition.onaudiostart = function () {
                  (document.getElementsByClassName(
                    "the_activeintent_listening"
                  )[0].style.display = "block"),
                    (document.getElementsByClassName(
                      "the_activeintent_image"
                    )[0].style.opacity = "1"),
                    (window.dotsGoingUp = !0),
                    window.setInterval(function () {
                      var e = document.getElementsByClassName(
                        "the_activeintent_int"
                      )[0];
                      window.dotsGoingUp
                        ? (e.innerHTML += ".")
                        : ((e.innerHTML = e.innerHTML.substring(
                            1,
                            e.innerHTML.length
                          )),
                          "" === e.innerHTML && (window.dotsGoingUp = !0)),
                        e.innerHTML.length > 3 && (window.dotsGoingUp = !1);
                    }, 400);
                }),
                (t.recognition.onresult = function (t) {
                  i = 0;
                  var o = t.results.length - 1,
                    a = t.results[o][0].transcript.trim(),
                    s = n(a),
                    c = "";
                  if (void 0 !== s)
                    if (((e = s), "ArticleIntent" === s.name)) {
                      var l = document.querySelectorAll("article h1");
                      0 === l.length
                        ? (c = "There are no articles")
                        : ((c = "There are ".concat(
                            l.length,
                            " articles. Choose any one.\r\n"
                          )),
                          l.forEach(function (e, t) {
                            c += ""
                              .concat(t + 1, " ")
                              .concat(e.textContent.trim(), "\r\n");
                          }));
                    } else {
                      var u = document.querySelector(
                        "[og-intent='" + s.name + "']"
                      );
                      null !== u && void 0 !== u && (c = u.textContent.trim());
                    }
                  else if (
                    void 0 === s &&
                    void 0 !== e &&
                    "ArticleIntent" === e.name
                  ) {
                    var d = document.querySelectorAll("article h1"),
                      p = [];
                    d.forEach(function (e) {
                      p.push(e.textContent.trim());
                    });
                    var f = r.findBestMatch(a, p);
                    c =
                      0 !== f.bestMatchIndex
                        ? document
                            .querySelectorAll("article p")
                            [f.bestMatchIndex].textContent.trim()
                        : "No Articles found with ".concat(a);
                  } else c = "We haven't set it up";
                  if (
                    void 0 !== s &&
                    void 0 !== s.type &&
                    "action" === s.type
                  ) {
                    var h,
                      y = _createForOfIteratorHelper(s.phrases);
                    try {
                      for (y.s(); !(h = y.n()).done; ) {
                        var _ = h.value;
                        a = a.replace(_, "");
                      }
                    } catch (b) {
                      y.e(b);
                    } finally {
                      y.f();
                    }
                    var g,
                      m = _createForOfIteratorHelper(
                        document.querySelectorAll(
                          "[og-intent='" + s.name + "']"
                        )
                      );
                    try {
                      for (m.s(); !(g = m.n()).done; ) {
                        var v = g.value;
                        a.trim().toLowerCase() ===
                          v.textContent.trim().toLowerCase() && v.click();
                      }
                    } catch (b) {
                      m.e(b);
                    } finally {
                      m.f();
                    }
                  } else
                    speechSynthesis.cancel(),
                      speechSynthesis.speak(new SpeechSynthesisUtterance(c));
                }),
                (t.recognition.onaudioend = function () {
                  (i = 0),
                    (document.getElementsByClassName(
                      "the_activeintent_listening"
                    )[0].style.display = "none");
                }),
                (t.recognition.onend = function () {
                  (i = 0),
                    (document.getElementsByClassName(
                      "the_activeintent_permission"
                    )[0].style.display = "none"),
                    (document.getElementsByClassName(
                      "the_activeintent_listening"
                    )[0].style.display = "none"),
                    (document.getElementsByClassName(
                      "the_activeintent_image"
                    )[0].style.opacity = "0");
                }),
                (t.recognition.onerror = function (e) {
                  i = 0;
                });
            }),
            _defineProperty(this, "addMicrophoneElement", function () {
              var e = document.createElement("div");
              (e.innerHTML =
                '<div class="the_activeintent" style="position: fixed;bottom: 8%;right: 5%;"><div style="display:flex;color: #515151;align-items: center;"><div style="position: absolute;right: 100%;"><div class="the_activeintent_permission"style="background: #EAEEF5;padding: 18px;border-radius: 13px;margin-right: 45px;position: relative;bottom: 40px;width: 198px;outline: none;display:none">Enable permissions on <br> the upper left of your <br> browser window<div style="position: absolute;right: -30px;bottom: 0;"><svg xmlns="http://www.w3.org/2000/svg" width="69" height="20" viewBox="0 0 69 20">              <path id="Polygon_1" data-name="Polygon 1" d="M34.5,0,69,20H0Z" fill="#eaeef5" />            </svg> </div></div><div class="the_activeintent_listening"style="background: #EAEEF5;padding: 18px;border-radius: 13px;margin-right: 45px;width: 198px;outline: none;display:none">Listening<span class="the_activeintent_int" style="padding-left:5px">.</span></div></div><div><button id="microphone" style="padding: 0;border: none;background: none;cursor: pointer;outline: none;display:flex;align-items:center"><img src="https://i.ibb.co/SnsCnd6/Group-2.png" style="position:absolute;right: 9px"/><img class="the_activeintent_image" src="https://i.ibb.co/GpLfcMy/record.gif" width="89px" style="opacity:0"  /></button></div></div></div>'),
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
                    r = document.createElement("div");
                  (r.innerHTML = "<div>TEST TEST</div>"), n.appendChild(r);
                }
              } catch (i) {
                t.e(i);
              } finally {
                t.f();
              }
            }),
            _defineProperty(this, "addListener", function () {
              var e = t.recognition;
              if (t.recognition) {
                var n,
                  r = _createForOfIteratorHelper(
                    document.querySelectorAll("#microphone")
                  );
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    n.value.addEventListener("click", function () {
                      if (
                        ((document.getElementsByClassName(
                          "the_activeintent_permission"
                        )[0].style.display = "block"),
                        1 === i)
                      )
                        return (i = 0), e.stop();
                      e.start(), (i = 1);
                    });
                  }
                } catch (s) {
                  r.e(s);
                } finally {
                  r.f();
                }
              }
              setInterval(function () {
                var e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
                  t = /Chrome/i.test(navigator.userAgent);
                !e && t && speechSynthesis.pause(), speechSynthesis.resume();
              }, 1e4);
              var o,
                a = _createForOfIteratorHelper(
                  document.querySelectorAll(".speaker")
                );
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  o.value.addEventListener("click", function () {
                    speechSynthesis.cancel();
                    var e =
                      this.parentElement.parentElement.parentElement.textContent.trim();
                    speechSynthesis.speak(new SpeechSynthesisUtterance(e));
                  });
                }
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
            }),
            (this.intents = e),
            window.hasOwnProperty("webkitSpeechRecognition") &&
              ((this.recognition = new window.webkitSpeechRecognition()),
              (this.recognition.lang = "en-US"),
              (this.recognition.interimResults = !1),
              (this.recognition.continuous = !1)),
            window.hasOwnProperty("webkitSpeechGrammarList") &&
              ((this.speechRecognitionList =
                new window.webkitSpeechGrammarList()),
              this.speechRecognitionList.addFromString("#JSGF V1.0;", 1),
              (this.recognition.grammars = this.speechRecognitionList));
          var n = window.document.getElementById("ActiveIntent");
          n && (this.activationKey = n.getAttribute("activationKey")),
            this.activationKey && this.usingSDKRequest();
        };
      t.default = o;
    },
  ]);
});
//# sourceMappingURL=index.js.map
