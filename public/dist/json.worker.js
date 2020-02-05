!(function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var i = (t[r] = {i: r, l: !1, exports: {}})
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(e, '__esModule', {value: !0})
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', {enumerable: !0, value: e}),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t]
            }.bind(null, i)
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 7))
})([
  function(e, t, n) {
    'use strict'
    ;(function(e, r) {
      n.d(t, 'c', function() {
        return d
      }),
        n.d(t, 'b', function() {
          return p
        }),
        n.d(t, 'a', function() {
          return m
        })
      var i = !1,
        o = !1,
        s = !1,
        a = !1,
        u = void 0,
        c =
          void 0 !== e &&
          void 0 !== e.versions &&
          void 0 !== e.versions.electron &&
          'renderer' === e.type
      if ('object' != typeof navigator || c) {
        if ('object' == typeof e) {
          ;(i = 'win32' === e.platform),
            (o = 'darwin' === e.platform),
            (s = 'linux' === e.platform),
            'en',
            'en'
          var l = e.env.VSCODE_NLS_CONFIG
          if (l)
            try {
              var f = JSON.parse(l),
                h = f.availableLanguages['*']
              f.locale, h || 'en', f._translationsConfigFile
            } catch (e) {}
          !0
        }
      } else
        (i = (u = navigator.userAgent).indexOf('Windows') >= 0),
          (o = u.indexOf('Macintosh') >= 0),
          u.indexOf('Macintosh') >= 0 &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0,
          (s = u.indexOf('Linux') >= 0),
          (a = !0),
          navigator.language
      var d = i,
        p = a,
        m = 'object' == typeof self ? self : 'object' == typeof r ? r : {}
      !(function() {
        if (m.setImmediate) return m.setImmediate.bind(m)
        if ('function' == typeof m.postMessage && !m.importScripts) {
          var t = []
          m.addEventListener('message', function(e) {
            if (e.data && e.data.vscodeSetImmediateId)
              for (var n = 0, r = t.length; n < r; n++) {
                var i = t[n]
                if (i.id === e.data.vscodeSetImmediateId)
                  return t.splice(n, 1), void i.callback()
              }
          })
          var n = 0
          return function(e) {
            var r = ++n
            t.push({id: r, callback: e}),
              m.postMessage({vscodeSetImmediateId: r}, '*')
          }
        }
        if (void 0 !== e && 'function' == typeof e.nextTick)
          return e.nextTick.bind(e)
        var r = Promise.resolve()
      })()
    }.call(this, n(3), n(1)))
  },
  function(e, t) {
    var n
    n = (function() {
      return this
    })()
    try {
      n = n || new Function('return this')()
    } catch (e) {
      'object' == typeof window && (n = window)
    }
    e.exports = n
  },
  function(e, t, n) {
    'use strict'
    ;(function(e) {
      n.d(t, 'a', function() {
        return d
      })
      var r,
        i,
        o,
        s = ((r = function(e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }),
        function(e, t) {
          function n() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        })
      if ('object' == typeof e) o = 'win32' === e.platform
      else if ('object' == typeof navigator) {
        var a = navigator.userAgent
        o = a.indexOf('Windows') >= 0
      }
      var u = /^\w[\w\d+.-]*$/,
        c = /^\//,
        l = /^\/\//
      var f = '/',
        h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        d = (function() {
          function e(e, t, n, r, i, o) {
            void 0 === o && (o = !1),
              'object' == typeof e
                ? ((this.scheme = e.scheme || ''),
                  (this.authority = e.authority || ''),
                  (this.path = e.path || ''),
                  (this.query = e.query || ''),
                  (this.fragment = e.fragment || ''))
                : ((this.scheme = (function(e, t) {
                    return e || t ? e : 'file'
                  })(e, o)),
                  (this.authority = t || ''),
                  (this.path = (function(e, t) {
                    switch (e) {
                      case 'https':
                      case 'http':
                      case 'file':
                        t ? t[0] !== f && (t = f + t) : (t = f)
                    }
                    return t
                  })(this.scheme, n || '')),
                  (this.query = r || ''),
                  (this.fragment = i || ''),
                  (function(e, t) {
                    if (!e.scheme && t)
                      throw new Error(
                        '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                          e.authority +
                          '", path: "' +
                          e.path +
                          '", query: "' +
                          e.query +
                          '", fragment: "' +
                          e.fragment +
                          '"}'
                      )
                    if (e.scheme && !u.test(e.scheme))
                      throw new Error(
                        '[UriError]: Scheme contains illegal characters.'
                      )
                    if (e.path)
                      if (e.authority) {
                        if (!c.test(e.path))
                          throw new Error(
                            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                          )
                      } else if (l.test(e.path))
                        throw new Error(
                          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                        )
                  })(this, o))
          }
          return (
            (e.isUri = function(t) {
              return (
                t instanceof e ||
                (!!t &&
                  ('string' == typeof t.authority &&
                    'string' == typeof t.fragment &&
                    'string' == typeof t.path &&
                    'string' == typeof t.query &&
                    'string' == typeof t.scheme &&
                    'function' == typeof t.fsPath &&
                    'function' == typeof t.with &&
                    'function' == typeof t.toString))
              )
            }),
            Object.defineProperty(e.prototype, 'fsPath', {
              get: function() {
                return b(this)
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.with = function(e) {
              if (!e) return this
              var t = e.scheme,
                n = e.authority,
                r = e.path,
                i = e.query,
                o = e.fragment
              return (
                void 0 === t ? (t = this.scheme) : null === t && (t = ''),
                void 0 === n ? (n = this.authority) : null === n && (n = ''),
                void 0 === r ? (r = this.path) : null === r && (r = ''),
                void 0 === i ? (i = this.query) : null === i && (i = ''),
                void 0 === o ? (o = this.fragment) : null === o && (o = ''),
                t === this.scheme &&
                n === this.authority &&
                r === this.path &&
                i === this.query &&
                o === this.fragment
                  ? this
                  : new m(t, n, r, i, o)
              )
            }),
            (e.parse = function(e, t) {
              void 0 === t && (t = !1)
              var n = h.exec(e)
              return n
                ? new m(
                    n[2] || '',
                    decodeURIComponent(n[4] || ''),
                    decodeURIComponent(n[5] || ''),
                    decodeURIComponent(n[7] || ''),
                    decodeURIComponent(n[9] || ''),
                    t
                  )
                : new m('', '', '', '', '')
            }),
            (e.file = function(e) {
              var t = ''
              if ((o && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f)) {
                var n = e.indexOf(f, 2)
                ;-1 === n
                  ? ((t = e.substring(2)), (e = f))
                  : ((t = e.substring(2, n)), (e = e.substring(n) || f))
              }
              return new m('file', t, e, '', '')
            }),
            (e.from = function(e) {
              return new m(e.scheme, e.authority, e.path, e.query, e.fragment)
            }),
            (e.prototype.toString = function(e) {
              return void 0 === e && (e = !1), _(this, e)
            }),
            (e.prototype.toJSON = function() {
              return this
            }),
            (e.revive = function(t) {
              if (t) {
                if (t instanceof e) return t
                var n = new m(t)
                return (
                  (n._formatted = t.external),
                  (n._fsPath = t._sep === p ? t.fsPath : null),
                  n
                )
              }
              return t
            }),
            e
          )
        })(),
        p = o ? 1 : void 0,
        m = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this
            return (t._formatted = null), (t._fsPath = null), t
          }
          return (
            s(t, e),
            Object.defineProperty(t.prototype, 'fsPath', {
              get: function() {
                return this._fsPath || (this._fsPath = b(this)), this._fsPath
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.toString = function(e) {
              return (
                void 0 === e && (e = !1),
                e
                  ? _(this, !0)
                  : (this._formatted || (this._formatted = _(this, !1)),
                    this._formatted)
              )
            }),
            (t.prototype.toJSON = function() {
              var e = {$mid: 1}
              return (
                this._fsPath && ((e.fsPath = this._fsPath), (e._sep = p)),
                this._formatted && (e.external = this._formatted),
                this.path && (e.path = this.path),
                this.scheme && (e.scheme = this.scheme),
                this.authority && (e.authority = this.authority),
                this.query && (e.query = this.query),
                this.fragment && (e.fragment = this.fragment),
                e
              )
            }),
            t
          )
        })(d),
        g = (((i = {})[58] = '%3A'),
        (i[47] = '%2F'),
        (i[63] = '%3F'),
        (i[35] = '%23'),
        (i[91] = '%5B'),
        (i[93] = '%5D'),
        (i[64] = '%40'),
        (i[33] = '%21'),
        (i[36] = '%24'),
        (i[38] = '%26'),
        (i[39] = '%27'),
        (i[40] = '%28'),
        (i[41] = '%29'),
        (i[42] = '%2A'),
        (i[43] = '%2B'),
        (i[44] = '%2C'),
        (i[59] = '%3B'),
        (i[61] = '%3D'),
        (i[32] = '%20'),
        i)
      function v(e, t) {
        for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i)
          if (
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            45 === o ||
            46 === o ||
            95 === o ||
            126 === o ||
            (t && 47 === o)
          )
            -1 !== r &&
              ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
              void 0 !== n && (n += e.charAt(i))
          else {
            void 0 === n && (n = e.substr(0, i))
            var s = g[o]
            void 0 !== s
              ? (-1 !== r &&
                  ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                (n += s))
              : -1 === r && (r = i)
          }
        }
        return (
          -1 !== r && (n += encodeURIComponent(e.substring(r))),
          void 0 !== n ? n : e
        )
      }
      function y(e) {
        for (var t = void 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n)
          35 === r || 63 === r
            ? (void 0 === t && (t = e.substr(0, n)), (t += g[r]))
            : void 0 !== t && (t += e[n])
        }
        return void 0 !== t ? t : e
      }
      function b(e) {
        var t
        return (
          (t =
            e.authority && e.path.length > 1 && 'file' === e.scheme
              ? '//' + e.authority + e.path
              : 47 === e.path.charCodeAt(0) &&
                ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                  (e.path.charCodeAt(1) >= 97 &&
                    e.path.charCodeAt(1) <= 122)) &&
                58 === e.path.charCodeAt(2)
                ? e.path[1].toLowerCase() + e.path.substr(2)
                : e.path),
          o && (t = t.replace(/\//g, '\\')),
          t
        )
      }
      function _(e, t) {
        var n = t ? y : v,
          r = '',
          i = e.scheme,
          o = e.authority,
          s = e.path,
          a = e.query,
          u = e.fragment
        if (
          (i && ((r += i), (r += ':')),
          (o || 'file' === i) && ((r += f), (r += f)),
          o)
        ) {
          var c = o.indexOf('@')
          if (-1 !== c) {
            var l = o.substr(0, c)
            ;(o = o.substr(c + 1)),
              -1 === (c = l.indexOf(':'))
                ? (r += n(l, !1))
                : ((r += n(l.substr(0, c), !1)),
                  (r += ':'),
                  (r += n(l.substr(c + 1), !1))),
              (r += '@')
          }
          ;-1 === (c = (o = o.toLowerCase()).indexOf(':'))
            ? (r += n(o, !1))
            : ((r += n(o.substr(0, c), !1)), (r += o.substr(c)))
        }
        if (s) {
          if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2))
            (h = s.charCodeAt(1)) >= 65 &&
              h <= 90 &&
              (s = '/' + String.fromCharCode(h + 32) + ':' + s.substr(3))
          else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
            var h
            ;(h = s.charCodeAt(0)) >= 65 &&
              h <= 90 &&
              (s = String.fromCharCode(h + 32) + ':' + s.substr(2))
          }
          r += n(s, !0)
        }
        return (
          a && ((r += '?'), (r += n(a, !1))),
          u && ((r += '#'), (r += t ? u : v(u, !1))),
          r
        )
      }
    }.call(this, n(3)))
  },
  function(e, t) {
    var n,
      r,
      i = (e.exports = {})
    function o() {
      throw new Error('setTimeout has not been defined')
    }
    function s() {
      throw new Error('clearTimeout has not been defined')
    }
    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0)
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0)
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }
    !(function() {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : o
      } catch (e) {
        n = o
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        r = s
      }
    })()
    var u,
      c = [],
      l = !1,
      f = -1
    function h() {
      l &&
        u &&
        ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && d())
    }
    function d() {
      if (!l) {
        var e = a(h)
        l = !0
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++f < t; ) u && u[f].run()
          ;(f = -1), (t = c.length)
        }
        ;(u = null),
          (l = !1),
          (function(e) {
            if (r === clearTimeout) return clearTimeout(e)
            if ((r === s || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e)
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          })(e)
      }
    }
    function p(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function m() {}
    ;(i.nextTick = function(e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      c.push(new p(e, t)), 1 !== c.length || l || a(d)
    }),
      (p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function(e) {
        return []
      }),
      (i.binding = function(e) {
        throw new Error('process.binding is not supported')
      }),
      (i.cwd = function() {
        return '/'
      }),
      (i.chdir = function(e) {
        throw new Error('process.chdir is not supported')
      }),
      (i.umask = function() {
        return 0
      })
  },
  function(e, t, n) {
    ;(function(e, t) {
      ;(function() {
        'use strict'
        function n(e) {
          var t = this.constructor
          return this.then(
            function(n) {
              return t.resolve(e()).then(function() {
                return n
              })
            },
            function(n) {
              return t.resolve(e()).then(function() {
                return t.reject(n)
              })
            }
          )
        }
        var r = setTimeout
        function i() {}
        function o(e) {
          if (!(this instanceof o))
            throw new TypeError('Promises must be constructed via new')
          if ('function' != typeof e) throw new TypeError('not a function')
          ;(this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            f(e, this)
        }
        function s(e, t) {
          for (; 3 === e._state; ) e = e._value
          0 !== e._state
            ? ((e._handled = !0),
              o._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected
                if (null !== n) {
                  var r
                  try {
                    r = n(e._value)
                  } catch (e) {
                    return void u(t.promise, e)
                  }
                  a(t.promise, r)
                } else (1 === e._state ? a : u)(t.promise, e._value)
              }))
            : e._deferreds.push(t)
        }
        function a(e, t) {
          try {
            if (t === e)
              throw new TypeError('A promise cannot be resolved with itself.')
            if (t && ('object' == typeof t || 'function' == typeof t)) {
              var n = t.then
              if (t instanceof o)
                return (e._state = 3), (e._value = t), void c(e)
              if ('function' == typeof n)
                return void f(
                  ((r = n),
                  (i = t),
                  function() {
                    r.apply(i, arguments)
                  }),
                  e
                )
            }
            ;(e._state = 1), (e._value = t), c(e)
          } catch (t) {
            u(e, t)
          }
          var r, i
        }
        function u(e, t) {
          ;(e._state = 2), (e._value = t), c(e)
        }
        function c(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            o._immediateFn(function() {
              e._handled || o._unhandledRejectionFn(e._value)
            })
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            s(e, e._deferreds[t])
          e._deferreds = null
        }
        function l(e, t, n) {
          ;(this.onFulfilled = 'function' == typeof e ? e : null),
            (this.onRejected = 'function' == typeof t ? t : null),
            (this.promise = n)
        }
        function f(e, t) {
          var n = !1
          try {
            e(
              function(e) {
                n || ((n = !0), a(t, e))
              },
              function(e) {
                n || ((n = !0), u(t, e))
              }
            )
          } catch (e) {
            if (n) return
            ;(n = !0), u(t, e)
          }
        }
        ;(o.prototype.catch = function(e) {
          return this.then(null, e)
        }),
          (o.prototype.then = function(e, t) {
            var n = new this.constructor(i)
            return s(this, new l(e, t, n)), n
          }),
          (o.prototype.finally = n),
          (o.all = function(e) {
            return new o(function(t, n) {
              if (!e || void 0 === e.length)
                throw new TypeError('Promise.all accepts an array')
              var r = Array.prototype.slice.call(e)
              if (0 === r.length) return t([])
              var i = r.length
              function o(e, s) {
                try {
                  if (s && ('object' == typeof s || 'function' == typeof s)) {
                    var a = s.then
                    if ('function' == typeof a)
                      return void a.call(
                        s,
                        function(t) {
                          o(e, t)
                        },
                        n
                      )
                  }
                  ;(r[e] = s), 0 == --i && t(r)
                } catch (e) {
                  n(e)
                }
              }
              for (var s = 0; s < r.length; s++) o(s, r[s])
            })
          }),
          (o.resolve = function(e) {
            return e && 'object' == typeof e && e.constructor === o
              ? e
              : new o(function(t) {
                  t(e)
                })
          }),
          (o.reject = function(e) {
            return new o(function(t, n) {
              n(e)
            })
          }),
          (o.race = function(e) {
            return new o(function(t, n) {
              for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
            })
          }),
          (o._immediateFn =
            ('function' == typeof e &&
              function(t) {
                e(t)
              }) ||
            function(e) {
              r(e, 0)
            }),
          (o._unhandledRejectionFn = function(e) {
            'undefined' != typeof console &&
              console &&
              console.warn('Possible Unhandled Promise Rejection:', e)
          })
        var h = (function() {
          if ('undefined' != typeof self) return self
          if ('undefined' != typeof window) return window
          if (void 0 !== t) return t
          throw new Error('unable to locate global object')
        })()
        'Promise' in h
          ? h.Promise.prototype.finally || (h.Promise.prototype.finally = n)
          : (h.Promise = o)
      })()
    }.call(this, n(5).setImmediate, n(1)))
  },
  function(e, t, n) {
    ;(function(e) {
      var r =
          (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
        i = Function.prototype.apply
      function o(e, t) {
        ;(this._id = e), (this._clearFn = t)
      }
      ;(t.setTimeout = function() {
        return new o(i.call(setTimeout, r, arguments), clearTimeout)
      }),
        (t.setInterval = function() {
          return new o(i.call(setInterval, r, arguments), clearInterval)
        }),
        (t.clearTimeout = t.clearInterval = function(e) {
          e && e.close()
        }),
        (o.prototype.unref = o.prototype.ref = function() {}),
        (o.prototype.close = function() {
          this._clearFn.call(r, this._id)
        }),
        (t.enroll = function(e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t)
        }),
        (t.unenroll = function(e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1)
        }),
        (t._unrefActive = t.active = function(e) {
          clearTimeout(e._idleTimeoutId)
          var t = e._idleTimeout
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function() {
              e._onTimeout && e._onTimeout()
            }, t))
        }),
        n(6),
        (t.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate))
    }.call(this, n(1)))
  },
  function(e, t, n) {
    ;(function(e, t) {
      !(function(e, n) {
        'use strict'
        if (!e.setImmediate) {
          var r,
            i,
            o,
            s,
            a,
            u = 1,
            c = {},
            l = !1,
            f = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e)
          ;(h = h && h.setTimeout ? h : e),
            '[object process]' === {}.toString.call(e.process)
              ? (r = function(e) {
                  t.nextTick(function() {
                    p(e)
                  })
                })
              : !(function() {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage
                    return (
                      (e.onmessage = function() {
                        t = !1
                      }),
                      e.postMessage('', '*'),
                      (e.onmessage = n),
                      t
                    )
                  }
                })()
                ? e.MessageChannel
                  ? (((o = new MessageChannel()).port1.onmessage = function(e) {
                      p(e.data)
                    }),
                    (r = function(e) {
                      o.port2.postMessage(e)
                    }))
                  : f && 'onreadystatechange' in f.createElement('script')
                    ? ((i = f.documentElement),
                      (r = function(e) {
                        var t = f.createElement('script')
                        ;(t.onreadystatechange = function() {
                          p(e),
                            (t.onreadystatechange = null),
                            i.removeChild(t),
                            (t = null)
                        }),
                          i.appendChild(t)
                      }))
                    : (r = function(e) {
                        setTimeout(p, 0, e)
                      })
                : ((s = 'setImmediate$' + Math.random() + '$'),
                  (a = function(t) {
                    t.source === e &&
                      'string' == typeof t.data &&
                      0 === t.data.indexOf(s) &&
                      p(+t.data.slice(s.length))
                  }),
                  e.addEventListener
                    ? e.addEventListener('message', a, !1)
                    : e.attachEvent('onmessage', a),
                  (r = function(t) {
                    e.postMessage(s + t, '*')
                  })),
            (h.setImmediate = function(e) {
              'function' != typeof e && (e = new Function('' + e))
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1]
              var i = {callback: e, args: t}
              return (c[u] = i), r(u), u++
            }),
            (h.clearImmediate = d)
        }
        function d(e) {
          delete c[e]
        }
        function p(e) {
          if (l) setTimeout(p, 0, e)
          else {
            var t = c[e]
            if (t) {
              l = !0
              try {
                !(function(e) {
                  var t = e.callback,
                    n = e.args
                  switch (n.length) {
                    case 0:
                      t()
                      break
                    case 1:
                      t(n[0])
                      break
                    case 2:
                      t(n[0], n[1])
                      break
                    case 3:
                      t(n[0], n[1], n[2])
                      break
                    default:
                      t.apply(void 0, n)
                  }
                })(t)
              } finally {
                d(e), (l = !1)
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === e ? this : e) : self)
    }.call(this, n(1), n(3)))
  },
  function(e, t, n) {
    'use strict'
    n.r(t)
    var r = new ((function() {
      function e() {
        ;(this.listeners = []),
          (this.unexpectedErrorHandler = function(e) {
            setTimeout(function() {
              if (e.stack) throw new Error(e.message + '\n\n' + e.stack)
              throw e
            }, 0)
          })
      }
      return (
        (e.prototype.emit = function(e) {
          this.listeners.forEach(function(t) {
            t(e)
          })
        }),
        (e.prototype.onUnexpectedError = function(e) {
          this.unexpectedErrorHandler(e), this.emit(e)
        }),
        (e.prototype.onUnexpectedExternalError = function(e) {
          this.unexpectedErrorHandler(e)
        }),
        e
      )
    })())()
    function i(e) {
      s(e) || r.onUnexpectedError(e)
    }
    function o(e) {
      return e instanceof Error
        ? {
            $isError: !0,
            name: e.name,
            message: e.message,
            stack: e.stacktrace || e.stack
          }
        : e
    }
    function s(e) {
      return (
        e instanceof Error && 'Canceled' === e.name && 'Canceled' === e.message
      )
    }
    function a(e) {}
    function u(e) {
      return Array.isArray(e)
        ? (e.forEach(function(e) {
            e && e.dispose()
          }),
          [])
        : e ? (e.dispose(), e) : void 0
    }
    function c() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return (
        e.forEach(a),
        {
          dispose: function() {
            return u(e)
          }
        }
      )
    }
    var l = (function() {
        function e() {
          ;(this._toDispose = new Set()), (this._isDisposed = !1)
        }
        return (
          (e.prototype.dispose = function() {
            this._isDisposed || ((this._isDisposed = !0), this.clear())
          }),
          (e.prototype.clear = function() {
            this._toDispose.forEach(function(e) {
              return e.dispose()
            }),
              this._toDispose.clear()
          }),
          (e.prototype.add = function(e) {
            if (!e) return e
            if (e === this)
              throw new Error('Cannot register a disposable on itself!')
            return (
              this._isDisposed
                ? console.warn(
                    new Error(
                      'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
                    ).stack
                  )
                : this._toDispose.add(e),
              e
            )
          }),
          e
        )
      })(),
      f = (function() {
        function e() {
          this._store = new l()
        }
        return (
          (e.prototype.dispose = function() {
            this._store.dispose()
          }),
          (e.prototype._register = function(e) {
            if (e === this)
              throw new Error('Cannot register a disposable on itself!')
            return this._store.add(e)
          }),
          (e.None = Object.freeze({dispose: function() {}})),
          e
        )
      })(),
      h = ((function() {
        function e() {
          this._isDisposed = !1
        }
        Object.defineProperty(e.prototype, 'value', {
          get: function() {
            return this._isDisposed ? void 0 : this._value
          },
          set: function(e) {
            this._isDisposed ||
              e === this._value ||
              (this._value && this._value.dispose(), (this._value = e))
          },
          enumerable: !0,
          configurable: !0
        }),
          (e.prototype.clear = function() {
            this.value = void 0
          }),
          (e.prototype.dispose = function() {
            ;(this._isDisposed = !0),
              this._value && this._value.dispose(),
              (this._value = void 0)
          })
      })(),
      (function() {
        function e(e) {
          this.object = e
        }
        e.prototype.dispose = function() {}
      })(),
      n(0))
    Object.prototype.hasOwnProperty
    function d(e) {
      for (
        var t = [],
          n = 0,
          r = (function(e) {
            for (
              var t = [], n = Object.getPrototypeOf(e);
              Object.prototype !== n;

            )
              (t = t.concat(Object.getOwnPropertyNames(n))),
                (n = Object.getPrototypeOf(n))
            return t
          })(e);
        n < r.length;
        n++
      ) {
        var i = r[n]
        'function' == typeof e[i] && t.push(i)
      }
      return t
    }
    function p(e, t) {
      for (
        var n = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments, 0)
              return t(e, n)
            }
          },
          r = {},
          i = 0,
          o = e;
        i < o.length;
        i++
      ) {
        var s = o[i]
        r[s] = n(s)
      }
      return r
    }
    var m,
      g = ((m = function(e, t) {
        return (m =
          Object.setPrototypeOf ||
          ({__proto__: []} instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
      }),
      function(e, t) {
        function n() {
          this.constructor = e
        }
        m(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()))
      })
    var v = (function() {
        function e(e) {
          ;(this._workerId = -1),
            (this._handler = e),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null))
        }
        return (
          (e.prototype.setWorkerId = function(e) {
            this._workerId = e
          }),
          (e.prototype.sendMessage = function(e, t) {
            var n = this,
              r = String(++this._lastSentReq)
            return new Promise(function(i, o) {
              ;(n._pendingReplies[r] = {resolve: i, reject: o}),
                n._send({vsWorker: n._workerId, req: r, method: e, args: t})
            })
          }),
          (e.prototype.handleMessage = function(e) {
            e &&
              e.vsWorker &&
              ((-1 !== this._workerId && e.vsWorker !== this._workerId) ||
                this._handleMessage(e))
          }),
          (e.prototype._handleMessage = function(e) {
            var t = this
            if (e.seq) {
              var n = e
              if (!this._pendingReplies[n.seq])
                return void console.warn('Got reply to unknown seq')
              var r = this._pendingReplies[n.seq]
              if ((delete this._pendingReplies[n.seq], n.err)) {
                var i = n.err
                return (
                  n.err.$isError &&
                    (((i = new Error()).name = n.err.name),
                    (i.message = n.err.message),
                    (i.stack = n.err.stack)),
                  void r.reject(i)
                )
              }
              r.resolve(n.res)
            } else {
              var s = e,
                a = s.req
              this._handler.handleMessage(s.method, s.args).then(
                function(e) {
                  t._send({vsWorker: t._workerId, seq: a, res: e, err: void 0})
                },
                function(e) {
                  e.detail instanceof Error && (e.detail = o(e.detail)),
                    t._send({
                      vsWorker: t._workerId,
                      seq: a,
                      res: void 0,
                      err: o(e)
                    })
                }
              )
            }
          }),
          (e.prototype._send = function(e) {
            var t = []
            if (e.req)
              for (var n = e, r = 0; r < n.args.length; r++)
                n.args[r] instanceof ArrayBuffer && t.push(n.args[r])
            else (n = e).res instanceof ArrayBuffer && t.push(n.res)
            this._handler.sendMessage(e, t)
          }),
          e
        )
      })(),
      y = ((function(e) {
        function t(t, n, r) {
          var i = e.call(this) || this,
            o = null
          ;(i._worker = i._register(
            t.create(
              'vs/base/common/worker/simpleWorker',
              function(e) {
                i._protocol.handleMessage(e)
              },
              function(e) {
                o && o(e)
              }
            )
          )),
            (i._protocol = new v({
              sendMessage: function(e, t) {
                i._worker.postMessage(e, t)
              },
              handleMessage: function(e, t) {
                if ('function' != typeof r[e])
                  return Promise.reject(
                    new Error('Missing method ' + e + ' on main thread host.')
                  )
                try {
                  return Promise.resolve(r[e].apply(r, t))
                } catch (e) {
                  return Promise.reject(e)
                }
              }
            })),
            i._protocol.setWorkerId(i._worker.getId())
          var s = null
          void 0 !== self.require && 'function' == typeof self.require.getConfig
            ? (s = self.require.getConfig())
            : void 0 !== self.requirejs &&
              (s = self.requirejs.s.contexts._.config)
          var a = d(r)
          i._onModuleLoaded = i._protocol.sendMessage('$initialize', [
            i._worker.getId(),
            JSON.parse(JSON.stringify(s)),
            n,
            a
          ])
          var u = function(e, t) {
            return i._request(e, t)
          }
          return (
            (i._lazyProxy = new Promise(function(e, t) {
              ;(o = t),
                i._onModuleLoaded.then(
                  function(t) {
                    e(p(t, u))
                  },
                  function(e) {
                    t(e), i._onError('Worker failed to load ' + n, e)
                  }
                )
            })),
            i
          )
        }
        g(t, e),
          (t.prototype.getProxyObject = function() {
            return this._lazyProxy
          }),
          (t.prototype._request = function(e, t) {
            var n = this
            return new Promise(function(r, i) {
              n._onModuleLoaded.then(function() {
                n._protocol.sendMessage(e, t).then(r, i)
              }, i)
            })
          }),
          (t.prototype._onError = function(e, t) {
            console.error(e), console.info(t)
          })
      })(f),
      (function() {
        function e(e, t) {
          var n = this
          ;(this._requestHandlerFactory = t),
            (this._requestHandler = null),
            (this._protocol = new v({
              sendMessage: function(t, n) {
                e(t, n)
              },
              handleMessage: function(e, t) {
                return n._handleMessage(e, t)
              }
            }))
        }
        return (
          (e.prototype.onmessage = function(e) {
            this._protocol.handleMessage(e)
          }),
          (e.prototype._handleMessage = function(e, t) {
            if ('$initialize' === e)
              return this.initialize(t[0], t[1], t[2], t[3])
            if (
              !this._requestHandler ||
              'function' != typeof this._requestHandler[e]
            )
              return Promise.reject(
                new Error('Missing requestHandler or method: ' + e)
              )
            try {
              return Promise.resolve(
                this._requestHandler[e].apply(this._requestHandler, t)
              )
            } catch (e) {
              return Promise.reject(e)
            }
          }),
          (e.prototype.initialize = function(e, t, n, r) {
            var i = this
            this._protocol.setWorkerId(e)
            var o = p(r, function(e, t) {
              return i._protocol.sendMessage(e, t)
            })
            return this._requestHandlerFactory
              ? ((this._requestHandler = this._requestHandlerFactory(o)),
                Promise.resolve(d(this._requestHandler)))
              : (t &&
                  (void 0 !== t.baseUrl && delete t.baseUrl,
                  void 0 !== t.paths &&
                    void 0 !== t.paths.vs &&
                    delete t.paths.vs,
                  (t.catchError = !0),
                  self.require.config(t)),
                new Promise(function(e, t) {
                  self.require(
                    [n],
                    function(n) {
                      ;(i._requestHandler = n.create(o)),
                        i._requestHandler
                          ? e(d(i._requestHandler))
                          : t(new Error('No RequestHandler!'))
                    },
                    t
                  )
                }))
          }),
          e
        )
      })())
    function b(e, t) {
      return (
        (function e(t, n, r, i, o) {
          if (i <= r) return
          var s = (r + (i - r) / 2) | 0
          if ((e(t, n, r, s, o), e(t, n, s + 1, i, o), n(t[s], t[s + 1]) <= 0))
            return
          !(function(e, t, n, r, i, o) {
            for (var s = n, a = r + 1, u = n; u <= i; u++) o[u] = e[u]
            for (u = n; u <= i; u++)
              s > r
                ? (e[u] = o[a++])
                : a > i
                  ? (e[u] = o[s++])
                  : t(o[a], o[s]) < 0 ? (e[u] = o[a++]) : (e[u] = o[s++])
          })(t, n, r, s, i, o)
        })(e, t, 0, e.length - 1, []),
        e
      )
    }
    var _ = (function() {
      function e(e, t, n, r) {
        ;(this.originalStart = e),
          (this.originalLength = t),
          (this.modifiedStart = n),
          (this.modifiedLength = r)
      }
      return (
        (e.prototype.getOriginalEnd = function() {
          return this.originalStart + this.originalLength
        }),
        (e.prototype.getModifiedEnd = function() {
          return this.modifiedStart + this.modifiedLength
        }),
        e
      )
    })()
    function C(e, t) {
      return ((t << 5) - t + e) | 0
    }
    function S(e, t) {
      t = C(149417, t)
      for (var n = 0, r = e.length; n < r; n++) t = C(e.charCodeAt(n), t)
      return t
    }
    var E = (function() {
      function e(e) {
        this.source = e
      }
      return (
        (e.prototype.getElements = function() {
          for (
            var e = this.source,
              t = new Int32Array(e.length),
              n = 0,
              r = e.length;
            n < r;
            n++
          )
            t[n] = e.charCodeAt(n)
          return t
        }),
        e
      )
    })()
    function x(e, t, n) {
      return new T(new E(e), new E(t)).ComputeDiff(n).changes
    }
    var w,
      N = (function() {
        function e() {}
        return (
          (e.Assert = function(e, t) {
            if (!e) throw new Error(t)
          }),
          e
        )
      })(),
      L = (function() {
        function e() {}
        return (
          (e.Copy = function(e, t, n, r, i) {
            for (var o = 0; o < i; o++) n[r + o] = e[t + o]
          }),
          (e.Copy2 = function(e, t, n, r, i) {
            for (var o = 0; o < i; o++) n[r + o] = e[t + o]
          }),
          e
        )
      })(),
      A = (function() {
        function e() {
          ;(this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0)
        }
        return (
          (e.prototype.MarkNextChange = function() {
            ;(this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.m_changes.push(
                new _(
                  this.m_originalStart,
                  this.m_originalCount,
                  this.m_modifiedStart,
                  this.m_modifiedCount
                )
              ),
              (this.m_originalCount = 0),
              (this.m_modifiedCount = 0),
              (this.m_originalStart = 1073741824),
              (this.m_modifiedStart = 1073741824)
          }),
          (e.prototype.AddOriginalElement = function(e, t) {
            ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
              (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
              this.m_originalCount++
          }),
          (e.prototype.AddModifiedElement = function(e, t) {
            ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
              (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
              this.m_modifiedCount++
          }),
          (e.prototype.getChanges = function() {
            return (
              (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                this.MarkNextChange(),
              this.m_changes
            )
          }),
          (e.prototype.getReverseChanges = function() {
            return (
              (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                this.MarkNextChange(),
              this.m_changes.reverse(),
              this.m_changes
            )
          }),
          e
        )
      })(),
      T = (function() {
        function e(t, n, r) {
          void 0 === r && (r = null), (this.ContinueProcessingPredicate = r)
          var i = e._getElements(t),
            o = i[0],
            s = i[1],
            a = i[2],
            u = e._getElements(n),
            c = u[0],
            l = u[1],
            f = u[2]
          ;(this._hasStrings = a && f),
            (this._originalStringElements = o),
            (this._originalElementsOrHash = s),
            (this._modifiedStringElements = c),
            (this._modifiedElementsOrHash = l),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = [])
        }
        return (
          (e._isStringArray = function(e) {
            return e.length > 0 && 'string' == typeof e[0]
          }),
          (e._getElements = function(t) {
            var n = t.getElements()
            if (e._isStringArray(n)) {
              for (
                var r = new Int32Array(n.length), i = 0, o = n.length;
                i < o;
                i++
              )
                r[i] = S(n[i], 0)
              return [n, r, !0]
            }
            return n instanceof Int32Array
              ? [[], n, !1]
              : [[], new Int32Array(n), !1]
          }),
          (e.prototype.ElementsAreEqual = function(e, t) {
            return (
              this._originalElementsOrHash[e] ===
                this._modifiedElementsOrHash[t] &&
              (!this._hasStrings ||
                this._originalStringElements[e] ===
                  this._modifiedStringElements[t])
            )
          }),
          (e.prototype.OriginalElementsAreEqual = function(e, t) {
            return (
              this._originalElementsOrHash[e] ===
                this._originalElementsOrHash[t] &&
              (!this._hasStrings ||
                this._originalStringElements[e] ===
                  this._originalStringElements[t])
            )
          }),
          (e.prototype.ModifiedElementsAreEqual = function(e, t) {
            return (
              this._modifiedElementsOrHash[e] ===
                this._modifiedElementsOrHash[t] &&
              (!this._hasStrings ||
                this._modifiedStringElements[e] ===
                  this._modifiedStringElements[t])
            )
          }),
          (e.prototype.ComputeDiff = function(e) {
            return this._ComputeDiff(
              0,
              this._originalElementsOrHash.length - 1,
              0,
              this._modifiedElementsOrHash.length - 1,
              e
            )
          }),
          (e.prototype._ComputeDiff = function(e, t, n, r, i) {
            var o = [!1],
              s = this.ComputeDiffRecursive(e, t, n, r, o)
            return (
              i && (s = this.PrettifyChanges(s)), {quitEarly: o[0], changes: s}
            )
          }),
          (e.prototype.ComputeDiffRecursive = function(e, t, n, r, i) {
            for (i[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n); )
              e++, n++
            for (; t >= e && r >= n && this.ElementsAreEqual(t, r); ) t--, r--
            if (e > t || n > r) {
              var o = void 0
              return (
                n <= r
                  ? (N.Assert(
                      e === t + 1,
                      'originalStart should only be one more than originalEnd'
                    ),
                    (o = [new _(e, 0, n, r - n + 1)]))
                  : e <= t
                    ? (N.Assert(
                        n === r + 1,
                        'modifiedStart should only be one more than modifiedEnd'
                      ),
                      (o = [new _(e, t - e + 1, n, 0)]))
                    : (N.Assert(
                        e === t + 1,
                        'originalStart should only be one more than originalEnd'
                      ),
                      N.Assert(
                        n === r + 1,
                        'modifiedStart should only be one more than modifiedEnd'
                      ),
                      (o = [])),
                o
              )
            }
            var s = [0],
              a = [0],
              u = this.ComputeRecursionPoint(e, t, n, r, s, a, i),
              c = s[0],
              l = a[0]
            if (null !== u) return u
            if (!i[0]) {
              var f = this.ComputeDiffRecursive(e, c, n, l, i),
                h = []
              return (
                (h = i[0]
                  ? [new _(c + 1, t - (c + 1) + 1, l + 1, r - (l + 1) + 1)]
                  : this.ComputeDiffRecursive(c + 1, t, l + 1, r, i)),
                this.ConcatenateChanges(f, h)
              )
            }
            return [new _(e, t - e + 1, n, r - n + 1)]
          }),
          (e.prototype.WALKTRACE = function(
            e,
            t,
            n,
            r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            h,
            d,
            p,
            m,
            g,
            v
          ) {
            var y,
              b = null,
              C = new A(),
              S = t,
              E = n,
              x = h[0] - m[0] - r,
              w = -1073741824,
              N = this.m_forwardHistory.length - 1
            do {
              ;(k = x + e) === S || (k < E && u[k - 1] < u[k + 1])
                ? ((d = (l = u[k + 1]) - x - r),
                  l < w && C.MarkNextChange(),
                  (w = l),
                  C.AddModifiedElement(l + 1, d),
                  (x = k + 1 - e))
                : ((d = (l = u[k - 1] + 1) - x - r),
                  l < w && C.MarkNextChange(),
                  (w = l - 1),
                  C.AddOriginalElement(l, d + 1),
                  (x = k - 1 - e)),
                N >= 0 &&
                  ((e = (u = this.m_forwardHistory[N])[0]),
                  (S = 1),
                  (E = u.length - 1))
            } while (--N >= -1)
            if (((y = C.getReverseChanges()), v[0])) {
              var L = h[0] + 1,
                T = m[0] + 1
              if (null !== y && y.length > 0) {
                var O = y[y.length - 1]
                ;(L = Math.max(L, O.getOriginalEnd())),
                  (T = Math.max(T, O.getModifiedEnd()))
              }
              b = [new _(L, f - L + 1, T, p - T + 1)]
            } else {
              ;(C = new A()),
                (S = o),
                (E = s),
                (x = h[0] - m[0] - a),
                (w = 1073741824),
                (N = g
                  ? this.m_reverseHistory.length - 1
                  : this.m_reverseHistory.length - 2)
              do {
                var k
                ;(k = x + i) === S || (k < E && c[k - 1] >= c[k + 1])
                  ? ((d = (l = c[k + 1] - 1) - x - a),
                    l > w && C.MarkNextChange(),
                    (w = l + 1),
                    C.AddOriginalElement(l + 1, d + 1),
                    (x = k + 1 - i))
                  : ((d = (l = c[k - 1]) - x - a),
                    l > w && C.MarkNextChange(),
                    (w = l),
                    C.AddModifiedElement(l + 1, d + 1),
                    (x = k - 1 - i)),
                  N >= 0 &&
                    ((i = (c = this.m_reverseHistory[N])[0]),
                    (S = 1),
                    (E = c.length - 1))
              } while (--N >= -1)
              b = C.getChanges()
            }
            return this.ConcatenateChanges(y, b)
          }),
          (e.prototype.ComputeRecursionPoint = function(e, t, n, r, i, o, s) {
            var a = 0,
              u = 0,
              c = 0,
              l = 0,
              f = 0,
              h = 0
            e--,
              n--,
              (i[0] = 0),
              (o[0] = 0),
              (this.m_forwardHistory = []),
              (this.m_reverseHistory = [])
            var d = t - e + (r - n),
              p = d + 1,
              m = new Int32Array(p),
              g = new Int32Array(p),
              v = r - n,
              y = t - e,
              b = e - n,
              C = t - r,
              S = (y - v) % 2 == 0
            ;(m[v] = e), (g[y] = t), (s[0] = !1)
            for (var E = 1; E <= d / 2 + 1; E++) {
              var x = 0,
                w = 0
              ;(c = this.ClipDiagonalBound(v - E, E, v, p)),
                (l = this.ClipDiagonalBound(v + E, E, v, p))
              for (var N = c; N <= l; N += 2) {
                u =
                  (a =
                    N === c || (N < l && m[N - 1] < m[N + 1])
                      ? m[N + 1]
                      : m[N - 1] + 1) -
                  (N - v) -
                  b
                for (
                  var A = a;
                  a < t && u < r && this.ElementsAreEqual(a + 1, u + 1);

                )
                  a++, u++
                if (
                  ((m[N] = a),
                  a + u > x + w && ((x = a), (w = u)),
                  !S && Math.abs(N - y) <= E - 1 && a >= g[N])
                )
                  return (
                    (i[0] = a),
                    (o[0] = u),
                    A <= g[N] && E <= 1448
                      ? this.WALKTRACE(
                          v,
                          c,
                          l,
                          b,
                          y,
                          f,
                          h,
                          C,
                          m,
                          g,
                          a,
                          t,
                          i,
                          u,
                          r,
                          o,
                          S,
                          s
                        )
                      : null
                  )
              }
              var T = (x - e + (w - n) - E) / 2
              if (
                null !== this.ContinueProcessingPredicate &&
                !this.ContinueProcessingPredicate(x, T)
              )
                return (
                  (s[0] = !0),
                  (i[0] = x),
                  (o[0] = w),
                  T > 0 && E <= 1448
                    ? this.WALKTRACE(
                        v,
                        c,
                        l,
                        b,
                        y,
                        f,
                        h,
                        C,
                        m,
                        g,
                        a,
                        t,
                        i,
                        u,
                        r,
                        o,
                        S,
                        s
                      )
                    : (e++, n++, [new _(e, t - e + 1, n, r - n + 1)])
                )
              ;(f = this.ClipDiagonalBound(y - E, E, y, p)),
                (h = this.ClipDiagonalBound(y + E, E, y, p))
              for (N = f; N <= h; N += 2) {
                u =
                  (a =
                    N === f || (N < h && g[N - 1] >= g[N + 1])
                      ? g[N + 1] - 1
                      : g[N - 1]) -
                  (N - y) -
                  C
                for (A = a; a > e && u > n && this.ElementsAreEqual(a, u); )
                  a--, u--
                if (((g[N] = a), S && Math.abs(N - v) <= E && a <= m[N]))
                  return (
                    (i[0] = a),
                    (o[0] = u),
                    A >= m[N] && E <= 1448
                      ? this.WALKTRACE(
                          v,
                          c,
                          l,
                          b,
                          y,
                          f,
                          h,
                          C,
                          m,
                          g,
                          a,
                          t,
                          i,
                          u,
                          r,
                          o,
                          S,
                          s
                        )
                      : null
                  )
              }
              if (E <= 1447) {
                var O = new Int32Array(l - c + 2)
                ;(O[0] = v - c + 1),
                  L.Copy2(m, c, O, 1, l - c + 1),
                  this.m_forwardHistory.push(O),
                  ((O = new Int32Array(h - f + 2))[0] = y - f + 1),
                  L.Copy2(g, f, O, 1, h - f + 1),
                  this.m_reverseHistory.push(O)
              }
            }
            return this.WALKTRACE(
              v,
              c,
              l,
              b,
              y,
              f,
              h,
              C,
              m,
              g,
              a,
              t,
              i,
              u,
              r,
              o,
              S,
              s
            )
          }),
          (e.prototype.PrettifyChanges = function(e) {
            for (var t = 0; t < e.length; t++) {
              for (
                var n = e[t],
                  r =
                    t < e.length - 1
                      ? e[t + 1].originalStart
                      : this._originalElementsOrHash.length,
                  i =
                    t < e.length - 1
                      ? e[t + 1].modifiedStart
                      : this._modifiedElementsOrHash.length,
                  o = n.originalLength > 0,
                  s = n.modifiedLength > 0;
                n.originalStart + n.originalLength < r &&
                n.modifiedStart + n.modifiedLength < i &&
                (!o ||
                  this.OriginalElementsAreEqual(
                    n.originalStart,
                    n.originalStart + n.originalLength
                  )) &&
                (!s ||
                  this.ModifiedElementsAreEqual(
                    n.modifiedStart,
                    n.modifiedStart + n.modifiedLength
                  ));

              )
                n.originalStart++, n.modifiedStart++
              var a = [null]
              t < e.length - 1 &&
                this.ChangesOverlap(e[t], e[t + 1], a) &&
                ((e[t] = a[0]), e.splice(t + 1, 1), t--)
            }
            for (t = e.length - 1; t >= 0; t--) {
              ;(n = e[t]), (r = 0), (i = 0)
              if (t > 0) {
                var u = e[t - 1]
                u.originalLength > 0 &&
                  (r = u.originalStart + u.originalLength),
                  u.modifiedLength > 0 &&
                    (i = u.modifiedStart + u.modifiedLength)
              }
              ;(o = n.originalLength > 0), (s = n.modifiedLength > 0)
              for (
                var c = 0,
                  l = this._boundaryScore(
                    n.originalStart,
                    n.originalLength,
                    n.modifiedStart,
                    n.modifiedLength
                  ),
                  f = 1;
                ;
                f++
              ) {
                var h = n.originalStart - f,
                  d = n.modifiedStart - f
                if (h < r || d < i) break
                if (
                  o &&
                  !this.OriginalElementsAreEqual(h, h + n.originalLength)
                )
                  break
                if (
                  s &&
                  !this.ModifiedElementsAreEqual(d, d + n.modifiedLength)
                )
                  break
                var p = this._boundaryScore(
                  h,
                  n.originalLength,
                  d,
                  n.modifiedLength
                )
                p > l && ((l = p), (c = f))
              }
              ;(n.originalStart -= c), (n.modifiedStart -= c)
            }
            return e
          }),
          (e.prototype._OriginalIsBoundary = function(e) {
            return (
              e <= 0 ||
              e >= this._originalElementsOrHash.length - 1 ||
              (this._hasStrings &&
                /^\s*$/.test(this._originalStringElements[e]))
            )
          }),
          (e.prototype._OriginalRegionIsBoundary = function(e, t) {
            if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1))
              return !0
            if (t > 0) {
              var n = e + t
              if (
                this._OriginalIsBoundary(n - 1) ||
                this._OriginalIsBoundary(n)
              )
                return !0
            }
            return !1
          }),
          (e.prototype._ModifiedIsBoundary = function(e) {
            return (
              e <= 0 ||
              e >= this._modifiedElementsOrHash.length - 1 ||
              (this._hasStrings &&
                /^\s*$/.test(this._modifiedStringElements[e]))
            )
          }),
          (e.prototype._ModifiedRegionIsBoundary = function(e, t) {
            if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1))
              return !0
            if (t > 0) {
              var n = e + t
              if (
                this._ModifiedIsBoundary(n - 1) ||
                this._ModifiedIsBoundary(n)
              )
                return !0
            }
            return !1
          }),
          (e.prototype._boundaryScore = function(e, t, n, r) {
            return (
              (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) +
              (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0)
            )
          }),
          (e.prototype.ConcatenateChanges = function(e, t) {
            var n = []
            if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e
            if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
              var r = new Array(e.length + t.length - 1)
              return (
                L.Copy(e, 0, r, 0, e.length - 1),
                (r[e.length - 1] = n[0]),
                L.Copy(t, 1, r, e.length, t.length - 1),
                r
              )
            }
            r = new Array(e.length + t.length)
            return (
              L.Copy(e, 0, r, 0, e.length),
              L.Copy(t, 0, r, e.length, t.length),
              r
            )
          }),
          (e.prototype.ChangesOverlap = function(e, t, n) {
            if (
              (N.Assert(
                e.originalStart <= t.originalStart,
                'Left change is not less than or equal to right change'
              ),
              N.Assert(
                e.modifiedStart <= t.modifiedStart,
                'Left change is not less than or equal to right change'
              ),
              e.originalStart + e.originalLength >= t.originalStart ||
                e.modifiedStart + e.modifiedLength >= t.modifiedStart)
            ) {
              var r = e.originalStart,
                i = e.originalLength,
                o = e.modifiedStart,
                s = e.modifiedLength
              return (
                e.originalStart + e.originalLength >= t.originalStart &&
                  (i = t.originalStart + t.originalLength - e.originalStart),
                e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                  (s = t.modifiedStart + t.modifiedLength - e.modifiedStart),
                (n[0] = new _(r, i, o, s)),
                !0
              )
            }
            return (n[0] = null), !1
          }),
          (e.prototype.ClipDiagonalBound = function(e, t, n, r) {
            if (e >= 0 && e < r) return e
            var i = t % 2 == 0
            return e < 0
              ? i === (n % 2 == 0) ? 0 : 1
              : i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2
          }),
          e
        )
      })(),
      O = (function() {
        var e = function(t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        }
      })(),
      k = {done: !0, value: void 0}
    !(function(e) {
      var t = {
        next: function() {
          return k
        }
      }
      ;(e.empty = function() {
        return t
      }),
        (e.single = function(e) {
          var t = !1
          return {
            next: function() {
              return t ? k : ((t = !0), {done: !1, value: e})
            }
          }
        }),
        (e.fromArray = function(e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = e.length),
            {
              next: function() {
                return t >= n ? k : {done: !1, value: e[t++]}
              }
            }
          )
        }),
        (e.fromNativeIterator = function(e) {
          return {
            next: function() {
              var t = e.next()
              return t.done ? k : {done: !1, value: t.value}
            }
          }
        }),
        (e.from = function(t) {
          return t ? (Array.isArray(t) ? e.fromArray(t) : t) : e.empty()
        }),
        (e.map = function(e, t) {
          return {
            next: function() {
              var n = e.next()
              return n.done ? k : {done: !1, value: t(n.value)}
            }
          }
        }),
        (e.filter = function(e, t) {
          return {
            next: function() {
              for (;;) {
                var n = e.next()
                if (n.done) return k
                if (t(n.value)) return {done: !1, value: n.value}
              }
            }
          }
        }),
        (e.forEach = function(e, t) {
          for (var n = e.next(); !n.done; n = e.next()) t(n.value)
        }),
        (e.collect = function(e, t) {
          void 0 === t && (t = Number.POSITIVE_INFINITY)
          var n = []
          if (0 === t) return n
          for (
            var r = 0, i = e.next();
            !i.done && (n.push(i.value), !(++r >= t));
            i = e.next()
          );
          return n
        }),
        (e.concat = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          var n = 0
          return {
            next: function() {
              if (n >= e.length) return k
              var t = e[n].next()
              return t.done ? (n++, this.next()) : t
            }
          }
        }),
        (e.chain = function(e) {
          return new I(e)
        })
    })(w || (w = {}))
    var I = (function() {
      function e(e) {
        this.it = e
      }
      return (
        (e.prototype.next = function() {
          return this.it.next()
        }),
        e
      )
    })()
    ;(function(e) {
      function t(t, n, r, i) {
        return (
          void 0 === n && (n = 0),
          void 0 === r && (r = t.length),
          void 0 === i && (i = n - 1),
          e.call(this, t, n, r, i) || this
        )
      }
      O(t, e),
        (t.prototype.current = function() {
          return e.prototype.current.call(this)
        }),
        (t.prototype.previous = function() {
          return (
            (this.index = Math.max(this.index - 1, this.start - 1)),
            this.current()
          )
        }),
        (t.prototype.first = function() {
          return (this.index = this.start), this.current()
        }),
        (t.prototype.last = function() {
          return (this.index = this.end - 1), this.current()
        }),
        (t.prototype.parent = function() {
          return null
        })
    })(
      (function() {
        function e(e, t, n, r) {
          void 0 === t && (t = 0),
            void 0 === n && (n = e.length),
            void 0 === r && (r = t - 1),
            (this.items = e),
            (this.start = t),
            (this.end = n),
            (this.index = r)
        }
        return (
          (e.prototype.first = function() {
            return (this.index = this.start), this.current()
          }),
          (e.prototype.next = function() {
            return (
              (this.index = Math.min(this.index + 1, this.end)), this.current()
            )
          }),
          (e.prototype.current = function() {
            return this.index === this.start - 1 || this.index === this.end
              ? null
              : this.items[this.index]
          }),
          e
        )
      })()
    ),
      (function() {
        function e(e, t) {
          ;(this.iterator = e), (this.fn = t)
        }
        e.prototype.next = function() {
          return this.fn(this.iterator.next())
        }
      })()
    var P,
      M = (function() {
        var e = function(t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        }
      })(),
      R = /^\w[\w\d+.-]*$/,
      j = /^\//,
      F = /^\/\//
    var D = '/',
      V = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      U = (function() {
        function e(e, t, n, r, i, o) {
          void 0 === o && (o = !1),
            'object' == typeof e
              ? ((this.scheme = e.scheme || ''),
                (this.authority = e.authority || ''),
                (this.path = e.path || ''),
                (this.query = e.query || ''),
                (this.fragment = e.fragment || ''))
              : ((this.scheme = (function(e, t) {
                  return e || t ? e : 'file'
                })(e, o)),
                (this.authority = t || ''),
                (this.path = (function(e, t) {
                  switch (e) {
                    case 'https':
                    case 'http':
                    case 'file':
                      t ? t[0] !== D && (t = D + t) : (t = D)
                  }
                  return t
                })(this.scheme, n || '')),
                (this.query = r || ''),
                (this.fragment = i || ''),
                (function(e, t) {
                  if (!e.scheme && t)
                    throw new Error(
                      '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                        e.authority +
                        '", path: "' +
                        e.path +
                        '", query: "' +
                        e.query +
                        '", fragment: "' +
                        e.fragment +
                        '"}'
                    )
                  if (e.scheme && !R.test(e.scheme))
                    throw new Error(
                      '[UriError]: Scheme contains illegal characters.'
                    )
                  if (e.path)
                    if (e.authority) {
                      if (!j.test(e.path))
                        throw new Error(
                          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                        )
                    } else if (F.test(e.path))
                      throw new Error(
                        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                      )
                })(this, o))
        }
        return (
          (e.isUri = function(t) {
            return (
              t instanceof e ||
              (!!t &&
                ('string' == typeof t.authority &&
                  'string' == typeof t.fragment &&
                  'string' == typeof t.path &&
                  'string' == typeof t.query &&
                  'string' == typeof t.scheme &&
                  'function' == typeof t.fsPath &&
                  'function' == typeof t.with &&
                  'function' == typeof t.toString))
            )
          }),
          Object.defineProperty(e.prototype, 'fsPath', {
            get: function() {
              return H(this)
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.with = function(e) {
            if (!e) return this
            var t = e.scheme,
              n = e.authority,
              r = e.path,
              i = e.query,
              o = e.fragment
            return (
              void 0 === t ? (t = this.scheme) : null === t && (t = ''),
              void 0 === n ? (n = this.authority) : null === n && (n = ''),
              void 0 === r ? (r = this.path) : null === r && (r = ''),
              void 0 === i ? (i = this.query) : null === i && (i = ''),
              void 0 === o ? (o = this.fragment) : null === o && (o = ''),
              t === this.scheme &&
              n === this.authority &&
              r === this.path &&
              i === this.query &&
              o === this.fragment
                ? this
                : new q(t, n, r, i, o)
            )
          }),
          (e.parse = function(e, t) {
            void 0 === t && (t = !1)
            var n = V.exec(e)
            return n
              ? new q(
                  n[2] || '',
                  G(n[4] || ''),
                  G(n[5] || ''),
                  G(n[7] || ''),
                  G(n[9] || ''),
                  t
                )
              : new q('', '', '', '', '')
          }),
          (e.file = function(e) {
            var t = ''
            if ((h.c && (e = e.replace(/\\/g, D)), e[0] === D && e[1] === D)) {
              var n = e.indexOf(D, 2)
              ;-1 === n
                ? ((t = e.substring(2)), (e = D))
                : ((t = e.substring(2, n)), (e = e.substring(n) || D))
            }
            return new q('file', t, e, '', '')
          }),
          (e.from = function(e) {
            return new q(e.scheme, e.authority, e.path, e.query, e.fragment)
          }),
          (e.prototype.toString = function(e) {
            return void 0 === e && (e = !1), Y(this, e)
          }),
          (e.prototype.toJSON = function() {
            return this
          }),
          (e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t
              var n = new q(t)
              return (
                (n._formatted = t.external),
                (n._fsPath = t._sep === W ? t.fsPath : null),
                n
              )
            }
            return t
          }),
          e
        )
      })(),
      W = h.c ? 1 : void 0,
      q = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (t._formatted = null), (t._fsPath = null), t
        }
        return (
          M(t, e),
          Object.defineProperty(t.prototype, 'fsPath', {
            get: function() {
              return this._fsPath || (this._fsPath = H(this)), this._fsPath
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.toString = function(e) {
            return (
              void 0 === e && (e = !1),
              e
                ? Y(this, !0)
                : (this._formatted || (this._formatted = Y(this, !1)),
                  this._formatted)
            )
          }),
          (t.prototype.toJSON = function() {
            var e = {$mid: 1}
            return (
              this._fsPath && ((e.fsPath = this._fsPath), (e._sep = W)),
              this._formatted && (e.external = this._formatted),
              this.path && (e.path = this.path),
              this.scheme && (e.scheme = this.scheme),
              this.authority && (e.authority = this.authority),
              this.query && (e.query = this.query),
              this.fragment && (e.fragment = this.fragment),
              e
            )
          }),
          t
        )
      })(U),
      K = (((P = {})[58] = '%3A'),
      (P[47] = '%2F'),
      (P[63] = '%3F'),
      (P[35] = '%23'),
      (P[91] = '%5B'),
      (P[93] = '%5D'),
      (P[64] = '%40'),
      (P[33] = '%21'),
      (P[36] = '%24'),
      (P[38] = '%26'),
      (P[39] = '%27'),
      (P[40] = '%28'),
      (P[41] = '%29'),
      (P[42] = '%2A'),
      (P[43] = '%2B'),
      (P[44] = '%2C'),
      (P[59] = '%3B'),
      (P[61] = '%3D'),
      (P[32] = '%20'),
      P)
    function B(e, t) {
      for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i)
        if (
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          45 === o ||
          46 === o ||
          95 === o ||
          126 === o ||
          (t && 47 === o)
        )
          -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
            void 0 !== n && (n += e.charAt(i))
        else {
          void 0 === n && (n = e.substr(0, i))
          var s = K[o]
          void 0 !== s
            ? (-1 !== r &&
                ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
              (n += s))
            : -1 === r && (r = i)
        }
      }
      return (
        -1 !== r && (n += encodeURIComponent(e.substring(r))),
        void 0 !== n ? n : e
      )
    }
    function $(e) {
      for (var t = void 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n)
        35 === r || 63 === r
          ? (void 0 === t && (t = e.substr(0, n)), (t += K[r]))
          : void 0 !== t && (t += e[n])
      }
      return void 0 !== t ? t : e
    }
    function H(e) {
      var t
      return (
        (t =
          e.authority && e.path.length > 1 && 'file' === e.scheme
            ? '//' + e.authority + e.path
            : 47 === e.path.charCodeAt(0) &&
              ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
              58 === e.path.charCodeAt(2)
              ? e.path[1].toLowerCase() + e.path.substr(2)
              : e.path),
        h.c && (t = t.replace(/\//g, '\\')),
        t
      )
    }
    function Y(e, t) {
      var n = t ? $ : B,
        r = '',
        i = e.scheme,
        o = e.authority,
        s = e.path,
        a = e.query,
        u = e.fragment
      if (
        (i && ((r += i), (r += ':')),
        (o || 'file' === i) && ((r += D), (r += D)),
        o)
      ) {
        var c = o.indexOf('@')
        if (-1 !== c) {
          var l = o.substr(0, c)
          ;(o = o.substr(c + 1)),
            -1 === (c = l.indexOf(':'))
              ? (r += n(l, !1))
              : ((r += n(l.substr(0, c), !1)),
                (r += ':'),
                (r += n(l.substr(c + 1), !1))),
            (r += '@')
        }
        ;-1 === (c = (o = o.toLowerCase()).indexOf(':'))
          ? (r += n(o, !1))
          : ((r += n(o.substr(0, c), !1)), (r += o.substr(c)))
      }
      if (s) {
        if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2))
          (f = s.charCodeAt(1)) >= 65 &&
            f <= 90 &&
            (s = '/' + String.fromCharCode(f + 32) + ':' + s.substr(3))
        else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
          var f
          ;(f = s.charCodeAt(0)) >= 65 &&
            f <= 90 &&
            (s = String.fromCharCode(f + 32) + ':' + s.substr(2))
        }
        r += n(s, !0)
      }
      return (
        a && ((r += '?'), (r += n(a, !1))),
        u && ((r += '#'), (r += t ? u : B(u, !1))),
        r
      )
    }
    var z = /(%[0-9A-Za-z][0-9A-Za-z])+/g
    function G(e) {
      return e.match(z)
        ? e.replace(z, function(e) {
            return (function e(t) {
              try {
                return decodeURIComponent(t)
              } catch (n) {
                return t.length > 3 ? t.substr(0, 3) + e(t.substr(3)) : t
              }
            })(e)
          })
        : e
    }
    var J = (function() {
        function e(e, t) {
          ;(this.lineNumber = e), (this.column = t)
        }
        return (
          (e.prototype.with = function(t, n) {
            return (
              void 0 === t && (t = this.lineNumber),
              void 0 === n && (n = this.column),
              t === this.lineNumber && n === this.column ? this : new e(t, n)
            )
          }),
          (e.prototype.delta = function(e, t) {
            return (
              void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.with(this.lineNumber + e, this.column + t)
            )
          }),
          (e.prototype.equals = function(t) {
            return e.equals(this, t)
          }),
          (e.equals = function(e, t) {
            return (
              (!e && !t) ||
              (!!e &&
                !!t &&
                e.lineNumber === t.lineNumber &&
                e.column === t.column)
            )
          }),
          (e.prototype.isBefore = function(t) {
            return e.isBefore(this, t)
          }),
          (e.isBefore = function(e, t) {
            return (
              e.lineNumber < t.lineNumber ||
              (!(t.lineNumber < e.lineNumber) && e.column < t.column)
            )
          }),
          (e.prototype.isBeforeOrEqual = function(t) {
            return e.isBeforeOrEqual(this, t)
          }),
          (e.isBeforeOrEqual = function(e, t) {
            return (
              e.lineNumber < t.lineNumber ||
              (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
            )
          }),
          (e.compare = function(e, t) {
            var n = 0 | e.lineNumber,
              r = 0 | t.lineNumber
            return n === r ? (0 | e.column) - (0 | t.column) : n - r
          }),
          (e.prototype.clone = function() {
            return new e(this.lineNumber, this.column)
          }),
          (e.prototype.toString = function() {
            return '(' + this.lineNumber + ',' + this.column + ')'
          }),
          (e.lift = function(t) {
            return new e(t.lineNumber, t.column)
          }),
          (e.isIPosition = function(e) {
            return (
              e &&
              'number' == typeof e.lineNumber &&
              'number' == typeof e.column
            )
          }),
          e
        )
      })(),
      Q = (function() {
        function e(e, t, n, r) {
          e > n || (e === n && t > r)
            ? ((this.startLineNumber = n),
              (this.startColumn = r),
              (this.endLineNumber = e),
              (this.endColumn = t))
            : ((this.startLineNumber = e),
              (this.startColumn = t),
              (this.endLineNumber = n),
              (this.endColumn = r))
        }
        return (
          (e.prototype.isEmpty = function() {
            return e.isEmpty(this)
          }),
          (e.isEmpty = function(e) {
            return (
              e.startLineNumber === e.endLineNumber &&
              e.startColumn === e.endColumn
            )
          }),
          (e.prototype.containsPosition = function(t) {
            return e.containsPosition(this, t)
          }),
          (e.containsPosition = function(e, t) {
            return (
              !(
                t.lineNumber < e.startLineNumber ||
                t.lineNumber > e.endLineNumber
              ) &&
              (!(
                t.lineNumber === e.startLineNumber && t.column < e.startColumn
              ) &&
                !(t.lineNumber === e.endLineNumber && t.column > e.endColumn))
            )
          }),
          (e.prototype.containsRange = function(t) {
            return e.containsRange(this, t)
          }),
          (e.containsRange = function(e, t) {
            return (
              !(
                t.startLineNumber < e.startLineNumber ||
                t.endLineNumber < e.startLineNumber
              ) &&
              (!(
                t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber
              ) &&
                (!(
                  t.startLineNumber === e.startLineNumber &&
                  t.startColumn < e.startColumn
                ) &&
                  !(
                    t.endLineNumber === e.endLineNumber &&
                    t.endColumn > e.endColumn
                  )))
            )
          }),
          (e.prototype.strictContainsRange = function(t) {
            return e.strictContainsRange(this, t)
          }),
          (e.strictContainsRange = function(e, t) {
            return (
              !(
                t.startLineNumber < e.startLineNumber ||
                t.endLineNumber < e.startLineNumber
              ) &&
              (!(
                t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber
              ) &&
                (!(
                  t.startLineNumber === e.startLineNumber &&
                  t.startColumn <= e.startColumn
                ) &&
                  !(
                    t.endLineNumber === e.endLineNumber &&
                    t.endColumn >= e.endColumn
                  )))
            )
          }),
          (e.prototype.plusRange = function(t) {
            return e.plusRange(this, t)
          }),
          (e.plusRange = function(t, n) {
            var r, i, o, s
            return (
              n.startLineNumber < t.startLineNumber
                ? ((r = n.startLineNumber), (i = n.startColumn))
                : n.startLineNumber === t.startLineNumber
                  ? ((r = n.startLineNumber),
                    (i = Math.min(n.startColumn, t.startColumn)))
                  : ((r = t.startLineNumber), (i = t.startColumn)),
              n.endLineNumber > t.endLineNumber
                ? ((o = n.endLineNumber), (s = n.endColumn))
                : n.endLineNumber === t.endLineNumber
                  ? ((o = n.endLineNumber),
                    (s = Math.max(n.endColumn, t.endColumn)))
                  : ((o = t.endLineNumber), (s = t.endColumn)),
              new e(r, i, o, s)
            )
          }),
          (e.prototype.intersectRanges = function(t) {
            return e.intersectRanges(this, t)
          }),
          (e.intersectRanges = function(t, n) {
            var r = t.startLineNumber,
              i = t.startColumn,
              o = t.endLineNumber,
              s = t.endColumn,
              a = n.startLineNumber,
              u = n.startColumn,
              c = n.endLineNumber,
              l = n.endColumn
            return (
              r < a ? ((r = a), (i = u)) : r === a && (i = Math.max(i, u)),
              o > c ? ((o = c), (s = l)) : o === c && (s = Math.min(s, l)),
              r > o ? null : r === o && i > s ? null : new e(r, i, o, s)
            )
          }),
          (e.prototype.equalsRange = function(t) {
            return e.equalsRange(this, t)
          }),
          (e.equalsRange = function(e, t) {
            return (
              !!e &&
              !!t &&
              e.startLineNumber === t.startLineNumber &&
              e.startColumn === t.startColumn &&
              e.endLineNumber === t.endLineNumber &&
              e.endColumn === t.endColumn
            )
          }),
          (e.prototype.getEndPosition = function() {
            return new J(this.endLineNumber, this.endColumn)
          }),
          (e.prototype.getStartPosition = function() {
            return new J(this.startLineNumber, this.startColumn)
          }),
          (e.prototype.toString = function() {
            return (
              '[' +
              this.startLineNumber +
              ',' +
              this.startColumn +
              ' -> ' +
              this.endLineNumber +
              ',' +
              this.endColumn +
              ']'
            )
          }),
          (e.prototype.setEndPosition = function(t, n) {
            return new e(this.startLineNumber, this.startColumn, t, n)
          }),
          (e.prototype.setStartPosition = function(t, n) {
            return new e(t, n, this.endLineNumber, this.endColumn)
          }),
          (e.prototype.collapseToStart = function() {
            return e.collapseToStart(this)
          }),
          (e.collapseToStart = function(t) {
            return new e(
              t.startLineNumber,
              t.startColumn,
              t.startLineNumber,
              t.startColumn
            )
          }),
          (e.fromPositions = function(t, n) {
            return (
              void 0 === n && (n = t),
              new e(t.lineNumber, t.column, n.lineNumber, n.column)
            )
          }),
          (e.lift = function(t) {
            return t
              ? new e(
                  t.startLineNumber,
                  t.startColumn,
                  t.endLineNumber,
                  t.endColumn
                )
              : null
          }),
          (e.isIRange = function(e) {
            return (
              e &&
              'number' == typeof e.startLineNumber &&
              'number' == typeof e.startColumn &&
              'number' == typeof e.endLineNumber &&
              'number' == typeof e.endColumn
            )
          }),
          (e.areIntersectingOrTouching = function(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber &&
                  e.endColumn < t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber &&
                  t.endColumn < e.startColumn)
              )
            )
          }),
          (e.areIntersecting = function(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber &&
                  e.endColumn <= t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber &&
                  t.endColumn <= e.startColumn)
              )
            )
          }),
          (e.compareRangesUsingStarts = function(e, t) {
            if (e && t) {
              var n = 0 | e.startLineNumber,
                r = 0 | t.startLineNumber
              if (n === r) {
                var i = 0 | e.startColumn,
                  o = 0 | t.startColumn
                if (i === o) {
                  var s = 0 | e.endLineNumber,
                    a = 0 | t.endLineNumber
                  return s === a ? (0 | e.endColumn) - (0 | t.endColumn) : s - a
                }
                return i - o
              }
              return n - r
            }
            return (e ? 1 : 0) - (t ? 1 : 0)
          }),
          (e.compareRangesUsingEnds = function(e, t) {
            return e.endLineNumber === t.endLineNumber
              ? e.endColumn === t.endColumn
                ? e.startLineNumber === t.startLineNumber
                  ? e.startColumn - t.startColumn
                  : e.startLineNumber - t.startLineNumber
                : e.endColumn - t.endColumn
              : e.endLineNumber - t.endLineNumber
          }),
          (e.spansMultipleLines = function(e) {
            return e.endLineNumber > e.startLineNumber
          }),
          e
        )
      })()
    String.fromCharCode(65279)
    !(function() {
      function e() {
        this._data = JSON.parse(
          '[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]'
        )
      }
      ;(e.getInstance = function() {
        return e._INSTANCE || (e._INSTANCE = new e()), e._INSTANCE
      }),
        (e.prototype.getGraphemeBreakType = function(e) {
          if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4
          if (e < 127) return 0
          for (var t = this._data, n = t.length / 3, r = 1; r <= n; )
            if (e < t[3 * r]) r *= 2
            else {
              if (!(e > t[3 * r + 1])) return t[3 * r + 2]
              r = 2 * r + 1
            }
          return 0
        }),
        (e._INSTANCE = null)
    })()
    function Z(e, t, n, r) {
      return new T(e, t, n).ComputeDiff(r)
    }
    var X = (function() {
        function e(e) {
          for (var t = [], n = [], r = 0, i = e.length; r < i; r++)
            (t[r] = ie(e[r], 1)), (n[r] = oe(e[r], 1))
          ;(this.lines = e), (this._startColumns = t), (this._endColumns = n)
        }
        return (
          (e.prototype.getElements = function() {
            for (var e = [], t = 0, n = this.lines.length; t < n; t++)
              e[t] = this.lines[t].substring(
                this._startColumns[t] - 1,
                this._endColumns[t] - 1
              )
            return e
          }),
          (e.prototype.getStartLineNumber = function(e) {
            return e + 1
          }),
          (e.prototype.getEndLineNumber = function(e) {
            return e + 1
          }),
          (e.prototype.createCharSequence = function(e, t, n) {
            for (var r = [], i = [], o = [], s = 0, a = t; a <= n; a++)
              for (
                var u = this.lines[a],
                  c = e ? this._startColumns[a] : 1,
                  l = e ? this._endColumns[a] : u.length + 1,
                  f = c;
                f < l;
                f++
              )
                (r[s] = u.charCodeAt(f - 1)), (i[s] = a + 1), (o[s] = f), s++
            return new ee(r, i, o)
          }),
          e
        )
      })(),
      ee = (function() {
        function e(e, t, n) {
          ;(this._charCodes = e), (this._lineNumbers = t), (this._columns = n)
        }
        return (
          (e.prototype.getElements = function() {
            return this._charCodes
          }),
          (e.prototype.getStartLineNumber = function(e) {
            return this._lineNumbers[e]
          }),
          (e.prototype.getStartColumn = function(e) {
            return this._columns[e]
          }),
          (e.prototype.getEndLineNumber = function(e) {
            return this._lineNumbers[e]
          }),
          (e.prototype.getEndColumn = function(e) {
            return this._columns[e] + 1
          }),
          e
        )
      })(),
      te = (function() {
        function e(e, t, n, r, i, o, s, a) {
          ;(this.originalStartLineNumber = e),
            (this.originalStartColumn = t),
            (this.originalEndLineNumber = n),
            (this.originalEndColumn = r),
            (this.modifiedStartLineNumber = i),
            (this.modifiedStartColumn = o),
            (this.modifiedEndLineNumber = s),
            (this.modifiedEndColumn = a)
        }
        return (
          (e.createFromDiffChange = function(t, n, r) {
            var i, o, s, a, u, c, l, f
            return (
              0 === t.originalLength
                ? ((i = 0), (o = 0), (s = 0), (a = 0))
                : ((i = n.getStartLineNumber(t.originalStart)),
                  (o = n.getStartColumn(t.originalStart)),
                  (s = n.getEndLineNumber(
                    t.originalStart + t.originalLength - 1
                  )),
                  (a = n.getEndColumn(t.originalStart + t.originalLength - 1))),
              0 === t.modifiedLength
                ? ((u = 0), (c = 0), (l = 0), (f = 0))
                : ((u = r.getStartLineNumber(t.modifiedStart)),
                  (c = r.getStartColumn(t.modifiedStart)),
                  (l = r.getEndLineNumber(
                    t.modifiedStart + t.modifiedLength - 1
                  )),
                  (f = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1))),
              new e(i, o, s, a, u, c, l, f)
            )
          }),
          e
        )
      })()
    var ne = (function() {
        function e(e, t, n, r, i) {
          ;(this.originalStartLineNumber = e),
            (this.originalEndLineNumber = t),
            (this.modifiedStartLineNumber = n),
            (this.modifiedEndLineNumber = r),
            (this.charChanges = i)
        }
        return (
          (e.createFromDiffResult = function(t, n, r, i, o, s, a) {
            var u,
              c,
              l,
              f,
              h = void 0
            if (
              (0 === n.originalLength
                ? ((u = r.getStartLineNumber(n.originalStart) - 1), (c = 0))
                : ((u = r.getStartLineNumber(n.originalStart)),
                  (c = r.getEndLineNumber(
                    n.originalStart + n.originalLength - 1
                  ))),
              0 === n.modifiedLength
                ? ((l = i.getStartLineNumber(n.modifiedStart) - 1), (f = 0))
                : ((l = i.getStartLineNumber(n.modifiedStart)),
                  (f = i.getEndLineNumber(
                    n.modifiedStart + n.modifiedLength - 1
                  ))),
              s &&
                n.originalLength > 0 &&
                n.originalLength < 20 &&
                n.modifiedLength > 0 &&
                n.modifiedLength < 20 &&
                o())
            ) {
              var d = r.createCharSequence(
                  t,
                  n.originalStart,
                  n.originalStart + n.originalLength - 1
                ),
                p = i.createCharSequence(
                  t,
                  n.modifiedStart,
                  n.modifiedStart + n.modifiedLength - 1
                ),
                m = Z(d, p, o, !0).changes
              a &&
                (m = (function(e) {
                  if (e.length <= 1) return e
                  for (
                    var t = [e[0]], n = t[0], r = 1, i = e.length;
                    r < i;
                    r++
                  ) {
                    var o = e[r],
                      s =
                        o.originalStart - (n.originalStart + n.originalLength),
                      a = o.modifiedStart - (n.modifiedStart + n.modifiedLength)
                    Math.min(s, a) < 3
                      ? ((n.originalLength =
                          o.originalStart + o.originalLength - n.originalStart),
                        (n.modifiedLength =
                          o.modifiedStart + o.modifiedLength - n.modifiedStart))
                      : (t.push(o), (n = o))
                  }
                  return t
                })(m)),
                (h = [])
              for (var g = 0, v = m.length; g < v; g++)
                h.push(te.createFromDiffChange(m[g], d, p))
            }
            return new e(u, c, l, f, h)
          }),
          e
        )
      })(),
      re = (function() {
        function e(e, t, n) {
          ;(this.shouldComputeCharChanges = n.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges =
              n.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = n.shouldMakePrettyDiff),
            (this.originalLines = e),
            (this.modifiedLines = t),
            (this.original = new X(e)),
            (this.modified = new X(t)),
            (this.continueLineDiff = se(n.maxComputationTime)),
            (this.continueCharDiff = se(
              0 === n.maxComputationTime
                ? 0
                : Math.min(n.maxComputationTime, 5e3)
            ))
        }
        return (
          (e.prototype.computeDiff = function() {
            if (
              1 === this.original.lines.length &&
              0 === this.original.lines[0].length
            )
              return {
                quitEarly: !1,
                changes: [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.lines.length,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                      }
                    ]
                  }
                ]
              }
            if (
              1 === this.modified.lines.length &&
              0 === this.modified.lines[0].length
            )
              return {
                quitEarly: !1,
                changes: [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.lines.length,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                      }
                    ]
                  }
                ]
              }
            var e = Z(
                this.original,
                this.modified,
                this.continueLineDiff,
                this.shouldMakePrettyDiff
              ),
              t = e.changes,
              n = e.quitEarly
            if (this.shouldIgnoreTrimWhitespace) {
              for (var r = [], i = 0, o = t.length; i < o; i++)
                r.push(
                  ne.createFromDiffResult(
                    this.shouldIgnoreTrimWhitespace,
                    t[i],
                    this.original,
                    this.modified,
                    this.continueCharDiff,
                    this.shouldComputeCharChanges,
                    this.shouldPostProcessCharChanges
                  )
                )
              return {quitEarly: n, changes: r}
            }
            for (
              var s = [], a = 0, u = 0, c = ((i = -1), t.length);
              i < c;
              i++
            ) {
              for (
                var l = i + 1 < c ? t[i + 1] : null,
                  f = l ? l.originalStart : this.originalLines.length,
                  h = l ? l.modifiedStart : this.modifiedLines.length;
                a < f && u < h;

              ) {
                var d = this.originalLines[a],
                  p = this.modifiedLines[u]
                if (d !== p) {
                  for (var m = ie(d, 1), g = ie(p, 1); m > 1 && g > 1; ) {
                    if (d.charCodeAt(m - 2) !== p.charCodeAt(g - 2)) break
                    m--, g--
                  }
                  ;(m > 1 || g > 1) &&
                    this._pushTrimWhitespaceCharChange(
                      s,
                      a + 1,
                      1,
                      m,
                      u + 1,
                      1,
                      g
                    )
                  for (
                    var v = oe(d, 1),
                      y = oe(p, 1),
                      b = d.length + 1,
                      _ = p.length + 1;
                    v < b && y < _;

                  ) {
                    if (d.charCodeAt(v - 1) !== d.charCodeAt(y - 1)) break
                    v++, y++
                  }
                  ;(v < b || y < _) &&
                    this._pushTrimWhitespaceCharChange(
                      s,
                      a + 1,
                      v,
                      b,
                      u + 1,
                      y,
                      _
                    )
                }
                a++, u++
              }
              l &&
                (s.push(
                  ne.createFromDiffResult(
                    this.shouldIgnoreTrimWhitespace,
                    l,
                    this.original,
                    this.modified,
                    this.continueCharDiff,
                    this.shouldComputeCharChanges,
                    this.shouldPostProcessCharChanges
                  )
                ),
                (a += l.originalLength),
                (u += l.modifiedLength))
            }
            return {quitEarly: n, changes: s}
          }),
          (e.prototype._pushTrimWhitespaceCharChange = function(
            e,
            t,
            n,
            r,
            i,
            o,
            s
          ) {
            if (!this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s)) {
              var a = void 0
              this.shouldComputeCharChanges &&
                (a = [new te(t, n, t, r, i, o, i, s)]),
                e.push(new ne(t, t, i, i, a))
            }
          }),
          (e.prototype._mergeTrimWhitespaceCharChange = function(
            e,
            t,
            n,
            r,
            i,
            o,
            s
          ) {
            var a = e.length
            if (0 === a) return !1
            var u = e[a - 1]
            return (
              0 !== u.originalEndLineNumber &&
              0 !== u.modifiedEndLineNumber &&
              (u.originalEndLineNumber + 1 === t &&
                u.modifiedEndLineNumber + 1 === i &&
                ((u.originalEndLineNumber = t),
                (u.modifiedEndLineNumber = i),
                this.shouldComputeCharChanges &&
                  u.charChanges &&
                  u.charChanges.push(new te(t, n, t, r, i, o, i, s)),
                !0))
            )
          }),
          e
        )
      })()
    function ie(e, t) {
      var n = (function(e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t)
          if (32 !== r && 9 !== r) return t
        }
        return -1
      })(e)
      return -1 === n ? t : n + 1
    }
    function oe(e, t) {
      var n = (function(e, t) {
        void 0 === t && (t = e.length - 1)
        for (var n = t; n >= 0; n--) {
          var r = e.charCodeAt(n)
          if (32 !== r && 9 !== r) return n
        }
        return -1
      })(e)
      return -1 === n ? t : n + 2
    }
    function se(e) {
      if (0 === e)
        return function() {
          return !0
        }
      var t = Date.now()
      return function() {
        return Date.now() - t < e
      }
    }
    function ae(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e
    }
    function ue(e) {
      return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e
    }
    var ce = function(e, t) {
        ;(this.index = e), (this.remainder = t)
      },
      le = (function() {
        function e(e) {
          ;(this.values = e),
            (this.prefixSum = new Uint32Array(e.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1)
        }
        return (
          (e.prototype.getCount = function() {
            return this.values.length
          }),
          (e.prototype.insertValues = function(e, t) {
            e = ue(e)
            var n = this.values,
              r = this.prefixSum,
              i = t.length
            return (
              0 !== i &&
              ((this.values = new Uint32Array(n.length + i)),
              this.values.set(n.subarray(0, e), 0),
              this.values.set(n.subarray(e), e + i),
              this.values.set(t, e),
              e - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = e - 1),
              (this.prefixSum = new Uint32Array(this.values.length)),
              this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  r.subarray(0, this.prefixSumValidIndex[0] + 1)
                ),
              !0)
            )
          }),
          (e.prototype.changeValue = function(e, t) {
            return (
              (e = ue(e)),
              (t = ue(t)),
              this.values[e] !== t &&
                ((this.values[e] = t),
                e - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = e - 1),
                !0)
            )
          }),
          (e.prototype.removeValues = function(e, t) {
            ;(e = ue(e)), (t = ue(t))
            var n = this.values,
              r = this.prefixSum
            if (e >= n.length) return !1
            var i = n.length - e
            return (
              t >= i && (t = i),
              0 !== t &&
                ((this.values = new Uint32Array(n.length - t)),
                this.values.set(n.subarray(0, e), 0),
                this.values.set(n.subarray(e + t), e),
                (this.prefixSum = new Uint32Array(this.values.length)),
                e - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = e - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                  this.prefixSum.set(
                    r.subarray(0, this.prefixSumValidIndex[0] + 1)
                  ),
                !0)
            )
          }),
          (e.prototype.getTotalValue = function() {
            return 0 === this.values.length
              ? 0
              : this._getAccumulatedValue(this.values.length - 1)
          }),
          (e.prototype.getAccumulatedValue = function(e) {
            return e < 0 ? 0 : ((e = ue(e)), this._getAccumulatedValue(e))
          }),
          (e.prototype._getAccumulatedValue = function(e) {
            if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e]
            var t = this.prefixSumValidIndex[0] + 1
            0 === t && ((this.prefixSum[0] = this.values[0]), t++),
              e >= this.values.length && (e = this.values.length - 1)
            for (var n = t; n <= e; n++)
              this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n]
            return (
              (this.prefixSumValidIndex[0] = Math.max(
                this.prefixSumValidIndex[0],
                e
              )),
              this.prefixSum[e]
            )
          }),
          (e.prototype.getIndexOf = function(e) {
            ;(e = Math.floor(e)), this.getTotalValue()
            for (
              var t = 0, n = this.values.length - 1, r = 0, i = 0, o = 0;
              t <= n;

            )
              if (
                ((r = (t + (n - t) / 2) | 0),
                e < (o = (i = this.prefixSum[r]) - this.values[r]))
              )
                n = r - 1
              else {
                if (!(e >= i)) break
                t = r + 1
              }
            return new ce(r, e - o)
          }),
          e
        )
      })(),
      fe = ((function() {
        function e(e) {
          ;(this._cacheAccumulatedValueStart = 0),
            (this._cache = null),
            (this._actual = new le(e)),
            this._bustCache()
        }
        ;(e.prototype._bustCache = function() {
          ;(this._cacheAccumulatedValueStart = 0), (this._cache = null)
        }),
          (e.prototype.insertValues = function(e, t) {
            this._actual.insertValues(e, t) && this._bustCache()
          }),
          (e.prototype.changeValue = function(e, t) {
            this._actual.changeValue(e, t) && this._bustCache()
          }),
          (e.prototype.removeValues = function(e, t) {
            this._actual.removeValues(e, t) && this._bustCache()
          }),
          (e.prototype.getTotalValue = function() {
            return this._actual.getTotalValue()
          }),
          (e.prototype.getAccumulatedValue = function(e) {
            return this._actual.getAccumulatedValue(e)
          }),
          (e.prototype.getIndexOf = function(e) {
            if (((e = Math.floor(e)), null !== this._cache)) {
              var t = e - this._cacheAccumulatedValueStart
              if (t >= 0 && t < this._cache.length) return this._cache[t]
            }
            return this._actual.getIndexOf(e)
          }),
          (e.prototype.warmUpCache = function(e, t) {
            for (var n = [], r = e; r <= t; r++) n[r - e] = this.getIndexOf(r)
            ;(this._cache = n), (this._cacheAccumulatedValueStart = e)
          })
      })(),
      (function() {
        function e(e, t, n, r) {
          ;(this._uri = e),
            (this._lines = t),
            (this._eol = n),
            (this._versionId = r),
            (this._lineStarts = null)
        }
        return (
          (e.prototype.dispose = function() {
            this._lines.length = 0
          }),
          (e.prototype.getText = function() {
            return this._lines.join(this._eol)
          }),
          (e.prototype.onEvents = function(e) {
            e.eol &&
              e.eol !== this._eol &&
              ((this._eol = e.eol), (this._lineStarts = null))
            for (var t = 0, n = e.changes; t < n.length; t++) {
              var r = n[t]
              this._acceptDeleteRange(r.range),
                this._acceptInsertText(
                  new J(r.range.startLineNumber, r.range.startColumn),
                  r.text
                )
            }
            this._versionId = e.versionId
          }),
          (e.prototype._ensureLineStarts = function() {
            if (!this._lineStarts) {
              for (
                var e = this._eol.length,
                  t = this._lines.length,
                  n = new Uint32Array(t),
                  r = 0;
                r < t;
                r++
              )
                n[r] = this._lines[r].length + e
              this._lineStarts = new le(n)
            }
          }),
          (e.prototype._setLineText = function(e, t) {
            ;(this._lines[e] = t),
              this._lineStarts &&
                this._lineStarts.changeValue(
                  e,
                  this._lines[e].length + this._eol.length
                )
          }),
          (e.prototype._acceptDeleteRange = function(e) {
            if (e.startLineNumber !== e.endLineNumber)
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(
                  0,
                  e.startColumn - 1
                ) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)
              ),
                this._lines.splice(
                  e.startLineNumber,
                  e.endLineNumber - e.startLineNumber
                ),
                this._lineStarts &&
                  this._lineStarts.removeValues(
                    e.startLineNumber,
                    e.endLineNumber - e.startLineNumber
                  )
            else {
              if (e.startColumn === e.endColumn) return
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(
                  0,
                  e.startColumn - 1
                ) +
                  this._lines[e.startLineNumber - 1].substring(e.endColumn - 1)
              )
            }
          }),
          (e.prototype._acceptInsertText = function(e, t) {
            if (0 !== t.length) {
              var n = t.split(/\r\n|\r|\n/)
              if (1 !== n.length) {
                ;(n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
                  e.column - 1
                )),
                  this._setLineText(
                    e.lineNumber - 1,
                    this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                      n[0]
                  )
                for (
                  var r = new Uint32Array(n.length - 1), i = 1;
                  i < n.length;
                  i++
                )
                  this._lines.splice(e.lineNumber + i - 1, 0, n[i]),
                    (r[i - 1] = n[i].length + this._eol.length)
                this._lineStarts &&
                  this._lineStarts.insertValues(e.lineNumber, r)
              } else
                this._setLineText(
                  e.lineNumber - 1,
                  this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                    n[0] +
                    this._lines[e.lineNumber - 1].substring(e.column - 1)
                )
            }
          }),
          e
        )
      })())
    var he = (function(e) {
      void 0 === e && (e = '')
      for (
        var t = '(-?\\d*\\.\\d\\w*)|([^', n = 0;
        n < '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?'.length;
        n++
      ) {
        var r = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?'[n]
        e.indexOf(r) >= 0 || (t += '\\' + r)
      }
      return (t += '\\s]+)'), new RegExp(t, 'g')
    })()
    var de = (function() {
        function e(t) {
          var n = ae(t)
          ;(this._defaultValue = n),
            (this._asciiMap = e._createAsciiMap(n)),
            (this._map = new Map())
        }
        return (
          (e._createAsciiMap = function(e) {
            for (var t = new Uint8Array(256), n = 0; n < 256; n++) t[n] = e
            return t
          }),
          (e.prototype.set = function(e, t) {
            var n = ae(t)
            e >= 0 && e < 256 ? (this._asciiMap[e] = n) : this._map.set(e, n)
          }),
          (e.prototype.get = function(e) {
            return e >= 0 && e < 256
              ? this._asciiMap[e]
              : this._map.get(e) || this._defaultValue
          }),
          e
        )
      })(),
      pe = ((function() {
        function e() {
          this._actual = new de(0)
        }
        ;(e.prototype.add = function(e) {
          this._actual.set(e, 1)
        }),
          (e.prototype.has = function(e) {
            return 1 === this._actual.get(e)
          })
      })(),
      (function() {
        function e(e, t, n) {
          for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++)
            r[i] = n
          ;(this._data = r), (this.rows = e), (this.cols = t)
        }
        return (
          (e.prototype.get = function(e, t) {
            return this._data[e * this.cols + t]
          }),
          (e.prototype.set = function(e, t, n) {
            this._data[e * this.cols + t] = n
          }),
          e
        )
      })()),
      me = (function() {
        function e(e) {
          for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) {
            var o = e[r],
              s = o[0]
            ;(c = o[1]) > t && (t = c),
              s > n && (n = s),
              (l = o[2]) > n && (n = l)
          }
          t++, n++
          var a = new pe(n, t, 0)
          for (r = 0, i = e.length; r < i; r++) {
            var u = e[r],
              c = ((s = u[0]), u[1]),
              l = u[2]
            a.set(s, c, l)
          }
          ;(this._states = a), (this._maxCharCode = t)
        }
        return (
          (e.prototype.nextState = function(e, t) {
            return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t)
          }),
          e
        )
      })(),
      ge = null
    var ve = null
    var ye = (function() {
      function e() {}
      return (
        (e._createLink = function(e, t, n, r, i) {
          var o = i - 1
          do {
            var s = t.charCodeAt(o)
            if (2 !== e.get(s)) break
            o--
          } while (o > r)
          if (r > 0) {
            var a = t.charCodeAt(r - 1),
              u = t.charCodeAt(o)
            ;((40 === a && 41 === u) ||
              (91 === a && 93 === u) ||
              (123 === a && 125 === u)) &&
              o--
          }
          return {
            range: {
              startLineNumber: n,
              startColumn: r + 1,
              endLineNumber: n,
              endColumn: o + 2
            },
            url: t.substring(r, o + 1)
          }
        }),
        (e.computeLinks = function(t, n) {
          void 0 === n &&
            (null === ge &&
              (ge = new me([
                [1, 104, 2],
                [1, 72, 2],
                [1, 102, 6],
                [1, 70, 6],
                [2, 116, 3],
                [2, 84, 3],
                [3, 116, 4],
                [3, 84, 4],
                [4, 112, 5],
                [4, 80, 5],
                [5, 115, 9],
                [5, 83, 9],
                [5, 58, 10],
                [6, 105, 7],
                [6, 73, 7],
                [7, 108, 8],
                [7, 76, 8],
                [8, 101, 9],
                [8, 69, 9],
                [9, 58, 10],
                [10, 47, 11],
                [11, 47, 12]
              ])),
            (n = ge))
          for (
            var r = (function() {
                if (null === ve) {
                  ve = new de(0)
                  for (
                    var e = 0;
                    e <
                    ' \t<>\'"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…'
                      .length;
                    e++
                  )
                    ve.set(
                      ' \t<>\'"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…'.charCodeAt(
                        e
                      ),
                      1
                    )
                  for (e = 0; e < '.,;'.length; e++)
                    ve.set('.,;'.charCodeAt(e), 2)
                }
                return ve
              })(),
              i = [],
              o = 1,
              s = t.getLineCount();
            o <= s;
            o++
          ) {
            for (
              var a = t.getLineContent(o),
                u = a.length,
                c = 0,
                l = 0,
                f = 0,
                h = 1,
                d = !1,
                p = !1,
                m = !1;
              c < u;

            ) {
              var g = !1,
                v = a.charCodeAt(c)
              if (13 === h) {
                var y = void 0
                switch (v) {
                  case 40:
                    ;(d = !0), (y = 0)
                    break
                  case 41:
                    y = d ? 0 : 1
                    break
                  case 91:
                    ;(p = !0), (y = 0)
                    break
                  case 93:
                    y = p ? 0 : 1
                    break
                  case 123:
                    ;(m = !0), (y = 0)
                    break
                  case 125:
                    y = m ? 0 : 1
                    break
                  case 39:
                    y = 34 === f || 96 === f ? 0 : 1
                    break
                  case 34:
                    y = 39 === f || 96 === f ? 0 : 1
                    break
                  case 96:
                    y = 39 === f || 34 === f ? 0 : 1
                    break
                  case 42:
                    y = 42 === f ? 1 : 0
                    break
                  default:
                    y = r.get(v)
                }
                1 === y && (i.push(e._createLink(r, a, o, l, c)), (g = !0))
              } else if (12 === h) {
                y = void 0
                91 === v ? ((p = !0), (y = 0)) : (y = r.get(v)),
                  1 === y ? (g = !0) : (h = 13)
              } else 0 === (h = n.nextState(h, v)) && (g = !0)
              g &&
                ((h = 1), (d = !1), (p = !1), (m = !1), (l = c + 1), (f = v)),
                c++
            }
            13 === h && i.push(e._createLink(r, a, o, l, u))
          }
          return i
        }),
        e
      )
    })()
    function be(e) {
      return e &&
        'function' == typeof e.getLineCount &&
        'function' == typeof e.getLineContent
        ? ye.computeLinks(e)
        : []
    }
    var _e = (function() {
      function e() {
        this._defaultValueSet = [
          ['true', 'false'],
          ['True', 'False'],
          [
            'Private',
            'Public',
            'Friend',
            'ReadOnly',
            'Partial',
            'Protected',
            'WriteOnly'
          ],
          ['public', 'protected', 'private']
        ]
      }
      return (
        (e.prototype.navigateValueSet = function(e, t, n, r, i) {
          var o
          if (e && t && (o = this.doNavigateValueSet(t, i)))
            return {range: e, value: o}
          if (n && r && (o = this.doNavigateValueSet(r, i)))
            return {range: n, value: o}
          return null
        }),
        (e.prototype.doNavigateValueSet = function(e, t) {
          var n = this.numberReplace(e, t)
          return null !== n ? n : this.textReplace(e, t)
        }),
        (e.prototype.numberReplace = function(e, t) {
          var n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1)),
            r = Number(e),
            i = parseFloat(e)
          return isNaN(r) || isNaN(i) || r !== i
            ? null
            : 0 !== r || t
              ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
              : null
        }),
        (e.prototype.textReplace = function(e, t) {
          return this.valueSetsReplace(this._defaultValueSet, e, t)
        }),
        (e.prototype.valueSetsReplace = function(e, t, n) {
          for (var r = null, i = 0, o = e.length; null === r && i < o; i++)
            r = this.valueSetReplace(e[i], t, n)
          return r
        }),
        (e.prototype.valueSetReplace = function(e, t, n) {
          var r = e.indexOf(t)
          return r >= 0
            ? ((r += n ? 1 : -1) < 0 ? (r = e.length - 1) : (r %= e.length),
              e[r])
            : null
        }),
        (e.INSTANCE = new e()),
        e
      )
    })()
    n(4)
    var Ce,
      Se = (function() {
        function e(t) {
          ;(this.element = t),
            (this.next = e.Undefined),
            (this.prev = e.Undefined)
        }
        return (e.Undefined = new e(void 0)), e
      })(),
      Ee = (function() {
        function e() {
          ;(this._first = Se.Undefined),
            (this._last = Se.Undefined),
            (this._size = 0)
        }
        return (
          Object.defineProperty(e.prototype, 'size', {
            get: function() {
              return this._size
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isEmpty = function() {
            return this._first === Se.Undefined
          }),
          (e.prototype.clear = function() {
            ;(this._first = Se.Undefined),
              (this._last = Se.Undefined),
              (this._size = 0)
          }),
          (e.prototype.unshift = function(e) {
            return this._insert(e, !1)
          }),
          (e.prototype.push = function(e) {
            return this._insert(e, !0)
          }),
          (e.prototype._insert = function(e, t) {
            var n = this,
              r = new Se(e)
            if (this._first === Se.Undefined)
              (this._first = r), (this._last = r)
            else if (t) {
              var i = this._last
              ;(this._last = r), (r.prev = i), (i.next = r)
            } else {
              var o = this._first
              ;(this._first = r), (r.next = o), (o.prev = r)
            }
            this._size += 1
            var s = !1
            return function() {
              s || ((s = !0), n._remove(r))
            }
          }),
          (e.prototype.shift = function() {
            if (this._first !== Se.Undefined) {
              var e = this._first.element
              return this._remove(this._first), e
            }
          }),
          (e.prototype.pop = function() {
            if (this._last !== Se.Undefined) {
              var e = this._last.element
              return this._remove(this._last), e
            }
          }),
          (e.prototype._remove = function(e) {
            if (e.prev !== Se.Undefined && e.next !== Se.Undefined) {
              var t = e.prev
              ;(t.next = e.next), (e.next.prev = t)
            } else
              e.prev === Se.Undefined && e.next === Se.Undefined
                ? ((this._first = Se.Undefined), (this._last = Se.Undefined))
                : e.next === Se.Undefined
                  ? ((this._last = this._last.prev),
                    (this._last.next = Se.Undefined))
                  : e.prev === Se.Undefined &&
                    ((this._first = this._first.next),
                    (this._first.prev = Se.Undefined))
            this._size -= 1
          }),
          (e.prototype.iterator = function() {
            var e,
              t = this._first
            return {
              next: function() {
                return t === Se.Undefined
                  ? k
                  : (e
                      ? (e.value = t.element)
                      : (e = {done: !1, value: t.element}),
                    (t = t.next),
                    e)
              }
            }
          }),
          (e.prototype.toArray = function() {
            for (var e = [], t = this._first; t !== Se.Undefined; t = t.next)
              e.push(t.element)
            return e
          }),
          e
        )
      })(),
      xe = (function() {
        var e = function(t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        }
      })()
    !(function(e) {
      function t(e) {
        return function(t, n, r) {
          void 0 === n && (n = null)
          var i,
            o = !1
          return (
            (i = e(
              function(e) {
                if (!o) return i ? i.dispose() : (o = !0), t.call(n, e)
              },
              null,
              r
            )),
            o && i.dispose(),
            i
          )
        }
      }
      function n(e, t) {
        return s(function(n, r, i) {
          return (
            void 0 === r && (r = null),
            e(
              function(e) {
                return n.call(r, t(e))
              },
              null,
              i
            )
          )
        })
      }
      function r(e, t) {
        return s(function(n, r, i) {
          return (
            void 0 === r && (r = null),
            e(
              function(e) {
                t(e), n.call(r, e)
              },
              null,
              i
            )
          )
        })
      }
      function i(e, t) {
        return s(function(n, r, i) {
          return (
            void 0 === r && (r = null),
            e(
              function(e) {
                return t(e) && n.call(r, e)
              },
              null,
              i
            )
          )
        })
      }
      function o(e, t, r) {
        var i = r
        return n(e, function(e) {
          return (i = t(i, e))
        })
      }
      function s(e) {
        var t,
          n = new Le({
            onFirstListenerAdd: function() {
              t = e(n.fire, n)
            },
            onLastListenerRemove: function() {
              t.dispose()
            }
          })
        return n.event
      }
      function a(e, t, n, r, i) {
        var o
        void 0 === n && (n = 100), void 0 === r && (r = !1)
        var s = void 0,
          a = void 0,
          u = 0,
          c = new Le({
            leakWarningThreshold: i,
            onFirstListenerAdd: function() {
              o = e(function(e) {
                u++,
                  (s = t(s, e)),
                  r && !a && c.fire(s),
                  clearTimeout(a),
                  (a = setTimeout(function() {
                    var e = s
                    ;(s = void 0),
                      (a = void 0),
                      (!r || u > 1) && c.fire(e),
                      (u = 0)
                  }, n))
              })
            },
            onLastListenerRemove: function() {
              o.dispose()
            }
          })
        return c.event
      }
      function u(e) {
        var t,
          n = !0
        return i(e, function(e) {
          var r = n || e !== t
          return (n = !1), (t = e), r
        })
      }
      ;(e.None = function() {
        return f.None
      }),
        (e.once = t),
        (e.map = n),
        (e.forEach = r),
        (e.filter = i),
        (e.signal = function(e) {
          return e
        }),
        (e.any = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return function(t, n, r) {
            return (
              void 0 === n && (n = null),
              c.apply(
                void 0,
                e.map(function(e) {
                  return e(
                    function(e) {
                      return t.call(n, e)
                    },
                    null,
                    r
                  )
                })
              )
            )
          }
        }),
        (e.reduce = o),
        (e.snapshot = s),
        (e.debounce = a),
        (e.stopwatch = function(e) {
          var r = new Date().getTime()
          return n(t(e), function(e) {
            return new Date().getTime() - r
          })
        }),
        (e.latch = u),
        (e.buffer = function(e, t, n) {
          void 0 === t && (t = !1), void 0 === n && (n = [])
          var r = n.slice(),
            i = e(function(e) {
              r ? r.push(e) : s.fire(e)
            }),
            o = function() {
              r &&
                r.forEach(function(e) {
                  return s.fire(e)
                }),
                (r = null)
            },
            s = new Le({
              onFirstListenerAdd: function() {
                i ||
                  (i = e(function(e) {
                    return s.fire(e)
                  }))
              },
              onFirstListenerDidAdd: function() {
                r && (t ? setTimeout(o) : o())
              },
              onLastListenerRemove: function() {
                i && i.dispose(), (i = null)
              }
            })
          return s.event
        })
      var l = (function() {
        function e(e) {
          this.event = e
        }
        return (
          (e.prototype.map = function(t) {
            return new e(n(this.event, t))
          }),
          (e.prototype.forEach = function(t) {
            return new e(r(this.event, t))
          }),
          (e.prototype.filter = function(t) {
            return new e(i(this.event, t))
          }),
          (e.prototype.reduce = function(t, n) {
            return new e(o(this.event, t, n))
          }),
          (e.prototype.latch = function() {
            return new e(u(this.event))
          }),
          (e.prototype.debounce = function(t, n, r, i) {
            return (
              void 0 === n && (n = 100),
              void 0 === r && (r = !1),
              new e(a(this.event, t, n, r, i))
            )
          }),
          (e.prototype.on = function(e, t, n) {
            return this.event(e, t, n)
          }),
          (e.prototype.once = function(e, n, r) {
            return t(this.event)(e, n, r)
          }),
          e
        )
      })()
      ;(e.chain = function(e) {
        return new l(e)
      }),
        (e.fromNodeEventEmitter = function(e, t, n) {
          void 0 === n &&
            (n = function(e) {
              return e
            })
          var r = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              return i.fire(n.apply(void 0, e))
            },
            i = new Le({
              onFirstListenerAdd: function() {
                return e.on(t, r)
              },
              onLastListenerRemove: function() {
                return e.removeListener(t, r)
              }
            })
          return i.event
        }),
        (e.fromDOMEventEmitter = function(e, t, n) {
          void 0 === n &&
            (n = function(e) {
              return e
            })
          var r = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t]
              return i.fire(n.apply(void 0, e))
            },
            i = new Le({
              onFirstListenerAdd: function() {
                return e.addEventListener(t, r)
              },
              onLastListenerRemove: function() {
                return e.removeEventListener(t, r)
              }
            })
          return i.event
        }),
        (e.fromPromise = function(e) {
          var t = new Le(),
            n = !1
          return (
            e
              .then(void 0, function() {
                return null
              })
              .then(function() {
                n
                  ? t.fire(void 0)
                  : setTimeout(function() {
                      return t.fire(void 0)
                    }, 0)
              }),
            (n = !0),
            t.event
          )
        }),
        (e.toPromise = function(e) {
          return new Promise(function(n) {
            return t(e)(n)
          })
        })
    })(Ce || (Ce = {}))
    !(function() {
      function e(e, t) {
        void 0 === t &&
          (t = Math.random()
            .toString(18)
            .slice(2, 5)),
          (this.customThreshold = e),
          (this.name = t),
          (this._warnCountdown = 0)
      }
      ;(e.prototype.dispose = function() {
        this._stacks && this._stacks.clear()
      }),
        (e.prototype.check = function(e) {
          var t = this,
            n = -1
          if (
            ('number' == typeof this.customThreshold &&
              (n = this.customThreshold),
            !(n <= 0 || e < n))
          ) {
            this._stacks || (this._stacks = new Map())
            var r = new Error().stack
                .split('\n')
                .slice(3)
                .join('\n'),
              i = this._stacks.get(r) || 0
            if (
              (this._stacks.set(r, i + 1),
              (this._warnCountdown -= 1),
              this._warnCountdown <= 0)
            ) {
              var o
              this._warnCountdown = 0.5 * n
              var s = 0
              this._stacks.forEach(function(e, t) {
                ;(!o || s < e) && ((o = t), (s = e))
              }),
                console.warn(
                  '[' +
                    this.name +
                    '] potential listener LEAK detected, having ' +
                    e +
                    ' listeners already. MOST frequent listener (' +
                    s +
                    '):'
                ),
                console.warn(o)
            }
            return function() {
              var e = t._stacks.get(r) || 0
              t._stacks.set(r, e - 1)
            }
          }
        })
    })()
    var we,
      Ne,
      Le = (function() {
        function e(e) {
          ;(this._disposed = !1),
            (this._options = e),
            (this._leakageMon = void 0)
        }
        return (
          Object.defineProperty(e.prototype, 'event', {
            get: function() {
              var t = this
              return (
                this._event ||
                  (this._event = function(n, r, i) {
                    t._listeners || (t._listeners = new Ee())
                    var o = t._listeners.isEmpty()
                    o &&
                      t._options &&
                      t._options.onFirstListenerAdd &&
                      t._options.onFirstListenerAdd(t)
                    var s,
                      a,
                      u = t._listeners.push(r ? [n, r] : n)
                    return (
                      o &&
                        t._options &&
                        t._options.onFirstListenerDidAdd &&
                        t._options.onFirstListenerDidAdd(t),
                      t._options &&
                        t._options.onListenerDidAdd &&
                        t._options.onListenerDidAdd(t, n, r),
                      t._leakageMon &&
                        (s = t._leakageMon.check(t._listeners.size)),
                      (a = {
                        dispose: function() {
                          ;(s && s(), (a.dispose = e._noop), t._disposed) ||
                            (u(),
                            t._options &&
                              t._options.onLastListenerRemove &&
                              ((t._listeners && !t._listeners.isEmpty()) ||
                                t._options.onLastListenerRemove(t)))
                        }
                      }),
                      i instanceof l ? i.add(a) : Array.isArray(i) && i.push(a),
                      a
                    )
                  }),
                this._event
              )
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.fire = function(e) {
            if (this._listeners) {
              this._deliveryQueue || (this._deliveryQueue = new Ee())
              for (
                var t = this._listeners.iterator(), n = t.next();
                !n.done;
                n = t.next()
              )
                this._deliveryQueue.push([n.value, e])
              for (; this._deliveryQueue.size > 0; ) {
                var r = this._deliveryQueue.shift(),
                  o = r[0],
                  s = r[1]
                try {
                  'function' == typeof o
                    ? o.call(void 0, s)
                    : o[0].call(o[1], s)
                } catch (n) {
                  i(n)
                }
              }
            }
          }),
          (e.prototype.dispose = function() {
            this._listeners && this._listeners.clear(),
              this._deliveryQueue && this._deliveryQueue.clear(),
              this._leakageMon && this._leakageMon.dispose(),
              (this._disposed = !0)
          }),
          (e._noop = function() {}),
          e
        )
      })(),
      Ae = ((function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (
            (n._isPaused = 0),
            (n._eventQueue = new Ee()),
            (n._mergeFn = t && t.merge),
            n
          )
        }
        xe(t, e),
          (t.prototype.pause = function() {
            this._isPaused++
          }),
          (t.prototype.resume = function() {
            if (0 !== this._isPaused && 0 == --this._isPaused)
              if (this._mergeFn) {
                var t = this._eventQueue.toArray()
                this._eventQueue.clear(),
                  e.prototype.fire.call(this, this._mergeFn(t))
              } else
                for (; !this._isPaused && 0 !== this._eventQueue.size; )
                  e.prototype.fire.call(this, this._eventQueue.shift())
          }),
          (t.prototype.fire = function(t) {
            this._listeners &&
              (0 !== this._isPaused
                ? this._eventQueue.push(t)
                : e.prototype.fire.call(this, t))
          })
      })(Le),
      (function() {
        function e() {
          var e = this
          ;(this.hasListeners = !1),
            (this.events = []),
            (this.emitter = new Le({
              onFirstListenerAdd: function() {
                return e.onFirstListenerAdd()
              },
              onLastListenerRemove: function() {
                return e.onLastListenerRemove()
              }
            }))
        }
        Object.defineProperty(e.prototype, 'event', {
          get: function() {
            return this.emitter.event
          },
          enumerable: !0,
          configurable: !0
        }),
          (e.prototype.add = function(e) {
            var t = this,
              n = {event: e, listener: null}
            this.events.push(n), this.hasListeners && this.hook(n)
            return (function(e) {
              var t = {
                dispose: function() {
                  e()
                }
              }
              return t
            })(
              (function(e) {
                var t,
                  n = this,
                  r = !1
                return function() {
                  return r ? t : ((r = !0), (t = e.apply(n, arguments)))
                }
              })(function() {
                t.hasListeners && t.unhook(n)
                var e = t.events.indexOf(n)
                t.events.splice(e, 1)
              })
            )
          }),
          (e.prototype.onFirstListenerAdd = function() {
            var e = this
            ;(this.hasListeners = !0),
              this.events.forEach(function(t) {
                return e.hook(t)
              })
          }),
          (e.prototype.onLastListenerRemove = function() {
            var e = this
            ;(this.hasListeners = !1),
              this.events.forEach(function(t) {
                return e.unhook(t)
              })
          }),
          (e.prototype.hook = function(e) {
            var t = this
            e.listener = e.event(function(e) {
              return t.emitter.fire(e)
            })
          }),
          (e.prototype.unhook = function(e) {
            e.listener && e.listener.dispose(), (e.listener = null)
          }),
          (e.prototype.dispose = function() {
            this.emitter.dispose()
          })
      })(),
      (function() {
        function e() {
          this.buffers = []
        }
        ;(e.prototype.wrapEvent = function(e) {
          var t = this
          return function(n, r, i) {
            return e(
              function(e) {
                var i = t.buffers[t.buffers.length - 1]
                i
                  ? i.push(function() {
                      return n.call(r, e)
                    })
                  : n.call(r, e)
              },
              void 0,
              i
            )
          }
        }),
          (e.prototype.bufferEvents = function(e) {
            var t = []
            this.buffers.push(t)
            var n = e()
            return (
              this.buffers.pop(),
              t.forEach(function(e) {
                return e()
              }),
              n
            )
          })
      })(),
      (function() {
        function e() {
          var e = this
          ;(this.listening = !1),
            (this.inputEvent = Ce.None),
            (this.inputEventListener = f.None),
            (this.emitter = new Le({
              onFirstListenerDidAdd: function() {
                ;(e.listening = !0),
                  (e.inputEventListener = e.inputEvent(
                    e.emitter.fire,
                    e.emitter
                  ))
              },
              onLastListenerRemove: function() {
                ;(e.listening = !1), e.inputEventListener.dispose()
              }
            })),
            (this.event = this.emitter.event)
        }
        Object.defineProperty(e.prototype, 'input', {
          set: function(e) {
            ;(this.inputEvent = e),
              this.listening &&
                (this.inputEventListener.dispose(),
                (this.inputEventListener = e(this.emitter.fire, this.emitter)))
          },
          enumerable: !0,
          configurable: !0
        }),
          (e.prototype.dispose = function() {
            this.inputEventListener.dispose(), this.emitter.dispose()
          })
      })(),
      Object.freeze(function(e, t) {
        var n = setTimeout(e.bind(t), 0)
        return {
          dispose: function() {
            clearTimeout(n)
          }
        }
      }))
    ;((Ne = we || (we = {})).isCancellationToken = function(e) {
      return (
        e === Ne.None ||
        e === Ne.Cancelled ||
        e instanceof Oe ||
        (!(!e || 'object' != typeof e) &&
          'boolean' == typeof e.isCancellationRequested &&
          'function' == typeof e.onCancellationRequested)
      )
    }),
      (Ne.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: Ce.None
      })),
      (Ne.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: Ae
      }))
    var Te,
      Oe = (function() {
        function e() {
          ;(this._isCancelled = !1), (this._emitter = null)
        }
        return (
          (e.prototype.cancel = function() {
            this._isCancelled ||
              ((this._isCancelled = !0),
              this._emitter && (this._emitter.fire(void 0), this.dispose()))
          }),
          Object.defineProperty(e.prototype, 'isCancellationRequested', {
            get: function() {
              return this._isCancelled
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'onCancellationRequested', {
            get: function() {
              return this._isCancelled
                ? Ae
                : (this._emitter || (this._emitter = new Le()),
                  this._emitter.event)
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.dispose = function() {
            this._emitter && (this._emitter.dispose(), (this._emitter = null))
          }),
          e
        )
      })(),
      ke = (function() {
        function e(e) {
          ;(this._token = void 0),
            (this._parentListener = void 0),
            (this._parentListener =
              e && e.onCancellationRequested(this.cancel, this))
        }
        return (
          Object.defineProperty(e.prototype, 'token', {
            get: function() {
              return this._token || (this._token = new Oe()), this._token
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.cancel = function() {
            this._token
              ? this._token instanceof Oe && this._token.cancel()
              : (this._token = we.Cancelled)
          }),
          (e.prototype.dispose = function(e) {
            void 0 === e && (e = !1),
              e && this.cancel(),
              this._parentListener && this._parentListener.dispose(),
              this._token
                ? this._token instanceof Oe && this._token.dispose()
                : (this._token = we.None)
          }),
          e
        )
      })(),
      Ie = (function() {
        function e() {
          ;(this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null))
        }
        return (
          (e.prototype.define = function(e, t) {
            ;(this._keyCodeToStr[e] = t),
              (this._strToKeyCode[t.toLowerCase()] = e)
          }),
          (e.prototype.keyCodeToStr = function(e) {
            return this._keyCodeToStr[e]
          }),
          (e.prototype.strToKeyCode = function(e) {
            return this._strToKeyCode[e.toLowerCase()] || 0
          }),
          e
        )
      })(),
      Pe = new Ie(),
      Me = new Ie(),
      Re = new Ie()
    !(function() {
      function e(e, t, n, r) {
        void 0 === n && (n = t),
          void 0 === r && (r = n),
          Pe.define(e, t),
          Me.define(e, n),
          Re.define(e, r)
      }
      e(0, 'unknown'),
        e(1, 'Backspace'),
        e(2, 'Tab'),
        e(3, 'Enter'),
        e(4, 'Shift'),
        e(5, 'Ctrl'),
        e(6, 'Alt'),
        e(7, 'PauseBreak'),
        e(8, 'CapsLock'),
        e(9, 'Escape'),
        e(10, 'Space'),
        e(11, 'PageUp'),
        e(12, 'PageDown'),
        e(13, 'End'),
        e(14, 'Home'),
        e(15, 'LeftArrow', 'Left'),
        e(16, 'UpArrow', 'Up'),
        e(17, 'RightArrow', 'Right'),
        e(18, 'DownArrow', 'Down'),
        e(19, 'Insert'),
        e(20, 'Delete'),
        e(21, '0'),
        e(22, '1'),
        e(23, '2'),
        e(24, '3'),
        e(25, '4'),
        e(26, '5'),
        e(27, '6'),
        e(28, '7'),
        e(29, '8'),
        e(30, '9'),
        e(31, 'A'),
        e(32, 'B'),
        e(33, 'C'),
        e(34, 'D'),
        e(35, 'E'),
        e(36, 'F'),
        e(37, 'G'),
        e(38, 'H'),
        e(39, 'I'),
        e(40, 'J'),
        e(41, 'K'),
        e(42, 'L'),
        e(43, 'M'),
        e(44, 'N'),
        e(45, 'O'),
        e(46, 'P'),
        e(47, 'Q'),
        e(48, 'R'),
        e(49, 'S'),
        e(50, 'T'),
        e(51, 'U'),
        e(52, 'V'),
        e(53, 'W'),
        e(54, 'X'),
        e(55, 'Y'),
        e(56, 'Z'),
        e(57, 'Meta'),
        e(58, 'ContextMenu'),
        e(59, 'F1'),
        e(60, 'F2'),
        e(61, 'F3'),
        e(62, 'F4'),
        e(63, 'F5'),
        e(64, 'F6'),
        e(65, 'F7'),
        e(66, 'F8'),
        e(67, 'F9'),
        e(68, 'F10'),
        e(69, 'F11'),
        e(70, 'F12'),
        e(71, 'F13'),
        e(72, 'F14'),
        e(73, 'F15'),
        e(74, 'F16'),
        e(75, 'F17'),
        e(76, 'F18'),
        e(77, 'F19'),
        e(78, 'NumLock'),
        e(79, 'ScrollLock'),
        e(80, ';', ';', 'OEM_1'),
        e(81, '=', '=', 'OEM_PLUS'),
        e(82, ',', ',', 'OEM_COMMA'),
        e(83, '-', '-', 'OEM_MINUS'),
        e(84, '.', '.', 'OEM_PERIOD'),
        e(85, '/', '/', 'OEM_2'),
        e(86, '`', '`', 'OEM_3'),
        e(110, 'ABNT_C1'),
        e(111, 'ABNT_C2'),
        e(87, '[', '[', 'OEM_4'),
        e(88, '\\', '\\', 'OEM_5'),
        e(89, ']', ']', 'OEM_6'),
        e(90, "'", "'", 'OEM_7'),
        e(91, 'OEM_8'),
        e(92, 'OEM_102'),
        e(93, 'NumPad0'),
        e(94, 'NumPad1'),
        e(95, 'NumPad2'),
        e(96, 'NumPad3'),
        e(97, 'NumPad4'),
        e(98, 'NumPad5'),
        e(99, 'NumPad6'),
        e(100, 'NumPad7'),
        e(101, 'NumPad8'),
        e(102, 'NumPad9'),
        e(103, 'NumPad_Multiply'),
        e(104, 'NumPad_Add'),
        e(105, 'NumPad_Separator'),
        e(106, 'NumPad_Subtract'),
        e(107, 'NumPad_Decimal'),
        e(108, 'NumPad_Divide')
    })(),
      (function(e) {
        ;(e.toString = function(e) {
          return Pe.keyCodeToStr(e)
        }),
          (e.fromString = function(e) {
            return Pe.strToKeyCode(e)
          }),
          (e.toUserSettingsUS = function(e) {
            return Me.keyCodeToStr(e)
          }),
          (e.toUserSettingsGeneral = function(e) {
            return Re.keyCodeToStr(e)
          }),
          (e.fromUserSettings = function(e) {
            return Me.strToKeyCode(e) || Re.strToKeyCode(e)
          })
      })(Te || (Te = {}))
    !(function() {
      function e(e, t, n, r, i) {
        ;(this.ctrlKey = e),
          (this.shiftKey = t),
          (this.altKey = n),
          (this.metaKey = r),
          (this.keyCode = i)
      }
      ;(e.prototype.equals = function(e) {
        return (
          this.ctrlKey === e.ctrlKey &&
          this.shiftKey === e.shiftKey &&
          this.altKey === e.altKey &&
          this.metaKey === e.metaKey &&
          this.keyCode === e.keyCode
        )
      }),
        (e.prototype.isModifierKey = function() {
          return (
            0 === this.keyCode ||
            5 === this.keyCode ||
            57 === this.keyCode ||
            6 === this.keyCode ||
            4 === this.keyCode
          )
        }),
        (e.prototype.toChord = function() {
          return new mt([this])
        }),
        (e.prototype.isDuplicateModifierCase = function() {
          return (
            (this.ctrlKey && 5 === this.keyCode) ||
            (this.shiftKey && 4 === this.keyCode) ||
            (this.altKey && 6 === this.keyCode) ||
            (this.metaKey && 57 === this.keyCode)
          )
        })
    })()
    var je,
      Fe,
      De,
      Ve,
      Ue,
      We,
      qe,
      Ke,
      Be,
      $e,
      He,
      Ye,
      ze,
      Ge,
      Je,
      Qe,
      Ze,
      Xe,
      et,
      tt,
      nt,
      rt,
      it,
      ot,
      st,
      at,
      ut,
      ct,
      lt,
      ft,
      ht,
      dt,
      pt,
      mt = (function() {
        function e(e) {
          if (0 === e.length)
            throw (t = 'parts')
              ? new Error('Illegal argument: ' + t)
              : new Error('Illegal argument')
          var t
          this.parts = e
        }
        return (
          (e.prototype.equals = function(e) {
            if (null === e) return !1
            if (this.parts.length !== e.parts.length) return !1
            for (var t = 0; t < this.parts.length; t++)
              if (!this.parts[t].equals(e.parts[t])) return !1
            return !0
          }),
          e
        )
      })(),
      gt = (function() {
        var e = function(t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        }
      })(),
      vt = (function(e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r, i) || this
          return (
            (o.selectionStartLineNumber = t),
            (o.selectionStartColumn = n),
            (o.positionLineNumber = r),
            (o.positionColumn = i),
            o
          )
        }
        return (
          gt(t, e),
          (t.prototype.toString = function() {
            return (
              '[' +
              this.selectionStartLineNumber +
              ',' +
              this.selectionStartColumn +
              ' -> ' +
              this.positionLineNumber +
              ',' +
              this.positionColumn +
              ']'
            )
          }),
          (t.prototype.equalsSelection = function(e) {
            return t.selectionsEqual(this, e)
          }),
          (t.selectionsEqual = function(e, t) {
            return (
              e.selectionStartLineNumber === t.selectionStartLineNumber &&
              e.selectionStartColumn === t.selectionStartColumn &&
              e.positionLineNumber === t.positionLineNumber &&
              e.positionColumn === t.positionColumn
            )
          }),
          (t.prototype.getDirection = function() {
            return this.selectionStartLineNumber === this.startLineNumber &&
              this.selectionStartColumn === this.startColumn
              ? 0
              : 1
          }),
          (t.prototype.setEndPosition = function(e, n) {
            return 0 === this.getDirection()
              ? new t(this.startLineNumber, this.startColumn, e, n)
              : new t(e, n, this.startLineNumber, this.startColumn)
          }),
          (t.prototype.getPosition = function() {
            return new J(this.positionLineNumber, this.positionColumn)
          }),
          (t.prototype.setStartPosition = function(e, n) {
            return 0 === this.getDirection()
              ? new t(e, n, this.endLineNumber, this.endColumn)
              : new t(this.endLineNumber, this.endColumn, e, n)
          }),
          (t.fromPositions = function(e, n) {
            return (
              void 0 === n && (n = e),
              new t(e.lineNumber, e.column, n.lineNumber, n.column)
            )
          }),
          (t.liftSelection = function(e) {
            return new t(
              e.selectionStartLineNumber,
              e.selectionStartColumn,
              e.positionLineNumber,
              e.positionColumn
            )
          }),
          (t.selectionsArrEqual = function(e, t) {
            if ((e && !t) || (!e && t)) return !1
            if (!e && !t) return !0
            if (e.length !== t.length) return !1
            for (var n = 0, r = e.length; n < r; n++)
              if (!this.selectionsEqual(e[n], t[n])) return !1
            return !0
          }),
          (t.isISelection = function(e) {
            return (
              e &&
              'number' == typeof e.selectionStartLineNumber &&
              'number' == typeof e.selectionStartColumn &&
              'number' == typeof e.positionLineNumber &&
              'number' == typeof e.positionColumn
            )
          }),
          (t.createWithDirection = function(e, n, r, i, o) {
            return 0 === o ? new t(e, n, r, i) : new t(r, i, e, n)
          }),
          t
        )
      })(Q),
      yt = (function() {
        function e(e, t, n) {
          ;(this.offset = 0 | e), (this.type = t), (this.language = n)
        }
        return (
          (e.prototype.toString = function() {
            return '(' + this.offset + ', ' + this.type + ')'
          }),
          e
        )
      })()
    !(function(e) {
      ;(e[(e.Unknown = 0)] = 'Unknown'),
        (e[(e.Disabled = 1)] = 'Disabled'),
        (e[(e.Enabled = 2)] = 'Enabled')
    })(je || (je = {})),
      (function(e) {
        ;(e[(e.KeepWhitespace = 1)] = 'KeepWhitespace'),
          (e[(e.InsertAsSnippet = 4)] = 'InsertAsSnippet')
      })(Fe || (Fe = {})),
      (function(e) {
        ;(e[(e.Method = 0)] = 'Method'),
          (e[(e.Function = 1)] = 'Function'),
          (e[(e.Constructor = 2)] = 'Constructor'),
          (e[(e.Field = 3)] = 'Field'),
          (e[(e.Variable = 4)] = 'Variable'),
          (e[(e.Class = 5)] = 'Class'),
          (e[(e.Struct = 6)] = 'Struct'),
          (e[(e.Interface = 7)] = 'Interface'),
          (e[(e.Module = 8)] = 'Module'),
          (e[(e.Property = 9)] = 'Property'),
          (e[(e.Event = 10)] = 'Event'),
          (e[(e.Operator = 11)] = 'Operator'),
          (e[(e.Unit = 12)] = 'Unit'),
          (e[(e.Value = 13)] = 'Value'),
          (e[(e.Constant = 14)] = 'Constant'),
          (e[(e.Enum = 15)] = 'Enum'),
          (e[(e.EnumMember = 16)] = 'EnumMember'),
          (e[(e.Keyword = 17)] = 'Keyword'),
          (e[(e.Text = 18)] = 'Text'),
          (e[(e.Color = 19)] = 'Color'),
          (e[(e.File = 20)] = 'File'),
          (e[(e.Reference = 21)] = 'Reference'),
          (e[(e.Customcolor = 22)] = 'Customcolor'),
          (e[(e.Folder = 23)] = 'Folder'),
          (e[(e.TypeParameter = 24)] = 'TypeParameter'),
          (e[(e.Snippet = 25)] = 'Snippet')
      })(De || (De = {})),
      (function(e) {
        e[(e.Deprecated = 1)] = 'Deprecated'
      })(Ve || (Ve = {})),
      (function(e) {
        ;(e[(e.Invoke = 0)] = 'Invoke'),
          (e[(e.TriggerCharacter = 1)] = 'TriggerCharacter'),
          (e[(e.TriggerForIncompleteCompletions = 2)] =
            'TriggerForIncompleteCompletions')
      })(Ue || (Ue = {})),
      (function(e) {
        ;(e[(e.EXACT = 0)] = 'EXACT'),
          (e[(e.ABOVE = 1)] = 'ABOVE'),
          (e[(e.BELOW = 2)] = 'BELOW')
      })(We || (We = {})),
      (function(e) {
        ;(e[(e.NotSet = 0)] = 'NotSet'),
          (e[(e.ContentFlush = 1)] = 'ContentFlush'),
          (e[(e.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
          (e[(e.Explicit = 3)] = 'Explicit'),
          (e[(e.Paste = 4)] = 'Paste'),
          (e[(e.Undo = 5)] = 'Undo'),
          (e[(e.Redo = 6)] = 'Redo')
      })(qe || (qe = {})),
      (function(e) {
        ;(e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF')
      })(Ke || (Ke = {})),
      (function(e) {
        ;(e[(e.Text = 0)] = 'Text'),
          (e[(e.Read = 1)] = 'Read'),
          (e[(e.Write = 2)] = 'Write')
      })(Be || (Be = {})),
      (function(e) {
        ;(e[(e.None = 0)] = 'None'),
          (e[(e.Keep = 1)] = 'Keep'),
          (e[(e.Brackets = 2)] = 'Brackets'),
          (e[(e.Advanced = 3)] = 'Advanced'),
          (e[(e.Full = 4)] = 'Full')
      })($e || ($e = {})),
      (function(e) {
        ;(e[(e.acceptSuggestionOnCommitCharacter = 0)] =
          'acceptSuggestionOnCommitCharacter'),
          (e[(e.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
          (e[(e.accessibilitySupport = 2)] = 'accessibilitySupport'),
          (e[(e.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
          (e[(e.ariaLabel = 4)] = 'ariaLabel'),
          (e[(e.autoClosingBrackets = 5)] = 'autoClosingBrackets'),
          (e[(e.autoClosingOvertype = 6)] = 'autoClosingOvertype'),
          (e[(e.autoClosingQuotes = 7)] = 'autoClosingQuotes'),
          (e[(e.autoIndent = 8)] = 'autoIndent'),
          (e[(e.automaticLayout = 9)] = 'automaticLayout'),
          (e[(e.autoSurround = 10)] = 'autoSurround'),
          (e[(e.codeLens = 11)] = 'codeLens'),
          (e[(e.colorDecorators = 12)] = 'colorDecorators'),
          (e[(e.contextmenu = 13)] = 'contextmenu'),
          (e[(e.copyWithSyntaxHighlighting = 14)] =
            'copyWithSyntaxHighlighting'),
          (e[(e.cursorBlinking = 15)] = 'cursorBlinking'),
          (e[(e.cursorSmoothCaretAnimation = 16)] =
            'cursorSmoothCaretAnimation'),
          (e[(e.cursorStyle = 17)] = 'cursorStyle'),
          (e[(e.cursorSurroundingLines = 18)] = 'cursorSurroundingLines'),
          (e[(e.cursorSurroundingLinesStyle = 19)] =
            'cursorSurroundingLinesStyle'),
          (e[(e.cursorWidth = 20)] = 'cursorWidth'),
          (e[(e.disableLayerHinting = 21)] = 'disableLayerHinting'),
          (e[(e.disableMonospaceOptimizations = 22)] =
            'disableMonospaceOptimizations'),
          (e[(e.dragAndDrop = 23)] = 'dragAndDrop'),
          (e[(e.emptySelectionClipboard = 24)] = 'emptySelectionClipboard'),
          (e[(e.extraEditorClassName = 25)] = 'extraEditorClassName'),
          (e[(e.fastScrollSensitivity = 26)] = 'fastScrollSensitivity'),
          (e[(e.find = 27)] = 'find'),
          (e[(e.fixedOverflowWidgets = 28)] = 'fixedOverflowWidgets'),
          (e[(e.folding = 29)] = 'folding'),
          (e[(e.foldingStrategy = 30)] = 'foldingStrategy'),
          (e[(e.fontFamily = 31)] = 'fontFamily'),
          (e[(e.fontInfo = 32)] = 'fontInfo'),
          (e[(e.fontLigatures = 33)] = 'fontLigatures'),
          (e[(e.fontSize = 34)] = 'fontSize'),
          (e[(e.fontWeight = 35)] = 'fontWeight'),
          (e[(e.formatOnPaste = 36)] = 'formatOnPaste'),
          (e[(e.formatOnType = 37)] = 'formatOnType'),
          (e[(e.glyphMargin = 38)] = 'glyphMargin'),
          (e[(e.gotoLocation = 39)] = 'gotoLocation'),
          (e[(e.hideCursorInOverviewRuler = 40)] = 'hideCursorInOverviewRuler'),
          (e[(e.highlightActiveIndentGuide = 41)] =
            'highlightActiveIndentGuide'),
          (e[(e.hover = 42)] = 'hover'),
          (e[(e.inDiffEditor = 43)] = 'inDiffEditor'),
          (e[(e.letterSpacing = 44)] = 'letterSpacing'),
          (e[(e.lightbulb = 45)] = 'lightbulb'),
          (e[(e.lineDecorationsWidth = 46)] = 'lineDecorationsWidth'),
          (e[(e.lineHeight = 47)] = 'lineHeight'),
          (e[(e.lineNumbers = 48)] = 'lineNumbers'),
          (e[(e.lineNumbersMinChars = 49)] = 'lineNumbersMinChars'),
          (e[(e.links = 50)] = 'links'),
          (e[(e.matchBrackets = 51)] = 'matchBrackets'),
          (e[(e.minimap = 52)] = 'minimap'),
          (e[(e.mouseStyle = 53)] = 'mouseStyle'),
          (e[(e.mouseWheelScrollSensitivity = 54)] =
            'mouseWheelScrollSensitivity'),
          (e[(e.mouseWheelZoom = 55)] = 'mouseWheelZoom'),
          (e[(e.multiCursorMergeOverlapping = 56)] =
            'multiCursorMergeOverlapping'),
          (e[(e.multiCursorModifier = 57)] = 'multiCursorModifier'),
          (e[(e.multiCursorPaste = 58)] = 'multiCursorPaste'),
          (e[(e.occurrencesHighlight = 59)] = 'occurrencesHighlight'),
          (e[(e.overviewRulerBorder = 60)] = 'overviewRulerBorder'),
          (e[(e.overviewRulerLanes = 61)] = 'overviewRulerLanes'),
          (e[(e.parameterHints = 62)] = 'parameterHints'),
          (e[(e.quickSuggestions = 63)] = 'quickSuggestions'),
          (e[(e.quickSuggestionsDelay = 64)] = 'quickSuggestionsDelay'),
          (e[(e.readOnly = 65)] = 'readOnly'),
          (e[(e.renderControlCharacters = 66)] = 'renderControlCharacters'),
          (e[(e.renderIndentGuides = 67)] = 'renderIndentGuides'),
          (e[(e.renderFinalNewline = 68)] = 'renderFinalNewline'),
          (e[(e.renderLineHighlight = 69)] = 'renderLineHighlight'),
          (e[(e.renderWhitespace = 70)] = 'renderWhitespace'),
          (e[(e.revealHorizontalRightPadding = 71)] =
            'revealHorizontalRightPadding'),
          (e[(e.roundedSelection = 72)] = 'roundedSelection'),
          (e[(e.rulers = 73)] = 'rulers'),
          (e[(e.scrollbar = 74)] = 'scrollbar'),
          (e[(e.scrollBeyondLastColumn = 75)] = 'scrollBeyondLastColumn'),
          (e[(e.scrollBeyondLastLine = 76)] = 'scrollBeyondLastLine'),
          (e[(e.selectionClipboard = 77)] = 'selectionClipboard'),
          (e[(e.selectionHighlight = 78)] = 'selectionHighlight'),
          (e[(e.selectOnLineNumbers = 79)] = 'selectOnLineNumbers'),
          (e[(e.showFoldingControls = 80)] = 'showFoldingControls'),
          (e[(e.showUnused = 81)] = 'showUnused'),
          (e[(e.snippetSuggestions = 82)] = 'snippetSuggestions'),
          (e[(e.smoothScrolling = 83)] = 'smoothScrolling'),
          (e[(e.stopRenderingLineAfter = 84)] = 'stopRenderingLineAfter'),
          (e[(e.suggest = 85)] = 'suggest'),
          (e[(e.suggestFontSize = 86)] = 'suggestFontSize'),
          (e[(e.suggestLineHeight = 87)] = 'suggestLineHeight'),
          (e[(e.suggestOnTriggerCharacters = 88)] =
            'suggestOnTriggerCharacters'),
          (e[(e.suggestSelection = 89)] = 'suggestSelection'),
          (e[(e.tabCompletion = 90)] = 'tabCompletion'),
          (e[(e.useTabStops = 91)] = 'useTabStops'),
          (e[(e.wordSeparators = 92)] = 'wordSeparators'),
          (e[(e.wordWrap = 93)] = 'wordWrap'),
          (e[(e.wordWrapBreakAfterCharacters = 94)] =
            'wordWrapBreakAfterCharacters'),
          (e[(e.wordWrapBreakBeforeCharacters = 95)] =
            'wordWrapBreakBeforeCharacters'),
          (e[(e.wordWrapBreakObtrusiveCharacters = 96)] =
            'wordWrapBreakObtrusiveCharacters'),
          (e[(e.wordWrapColumn = 97)] = 'wordWrapColumn'),
          (e[(e.wordWrapMinified = 98)] = 'wordWrapMinified'),
          (e[(e.wrappingIndent = 99)] = 'wrappingIndent'),
          (e[(e.editorClassName = 100)] = 'editorClassName'),
          (e[(e.pixelRatio = 101)] = 'pixelRatio'),
          (e[(e.tabFocusMode = 102)] = 'tabFocusMode'),
          (e[(e.layoutInfo = 103)] = 'layoutInfo'),
          (e[(e.wrappingInfo = 104)] = 'wrappingInfo')
      })(He || (He = {})),
      (function(e) {
        ;(e[(e.TextDefined = 0)] = 'TextDefined'),
          (e[(e.LF = 1)] = 'LF'),
          (e[(e.CRLF = 2)] = 'CRLF')
      })(Ye || (Ye = {})),
      (function(e) {
        ;(e[(e.LF = 0)] = 'LF'), (e[(e.CRLF = 1)] = 'CRLF')
      })(ze || (ze = {})),
      (function(e) {
        ;(e[(e.None = 0)] = 'None'),
          (e[(e.Indent = 1)] = 'Indent'),
          (e[(e.IndentOutdent = 2)] = 'IndentOutdent'),
          (e[(e.Outdent = 3)] = 'Outdent')
      })(Ge || (Ge = {})),
      (function(e) {
        ;(e[(e.Unknown = 0)] = 'Unknown'),
          (e[(e.Backspace = 1)] = 'Backspace'),
          (e[(e.Tab = 2)] = 'Tab'),
          (e[(e.Enter = 3)] = 'Enter'),
          (e[(e.Shift = 4)] = 'Shift'),
          (e[(e.Ctrl = 5)] = 'Ctrl'),
          (e[(e.Alt = 6)] = 'Alt'),
          (e[(e.PauseBreak = 7)] = 'PauseBreak'),
          (e[(e.CapsLock = 8)] = 'CapsLock'),
          (e[(e.Escape = 9)] = 'Escape'),
          (e[(e.Space = 10)] = 'Space'),
          (e[(e.PageUp = 11)] = 'PageUp'),
          (e[(e.PageDown = 12)] = 'PageDown'),
          (e[(e.End = 13)] = 'End'),
          (e[(e.Home = 14)] = 'Home'),
          (e[(e.LeftArrow = 15)] = 'LeftArrow'),
          (e[(e.UpArrow = 16)] = 'UpArrow'),
          (e[(e.RightArrow = 17)] = 'RightArrow'),
          (e[(e.DownArrow = 18)] = 'DownArrow'),
          (e[(e.Insert = 19)] = 'Insert'),
          (e[(e.Delete = 20)] = 'Delete'),
          (e[(e.KEY_0 = 21)] = 'KEY_0'),
          (e[(e.KEY_1 = 22)] = 'KEY_1'),
          (e[(e.KEY_2 = 23)] = 'KEY_2'),
          (e[(e.KEY_3 = 24)] = 'KEY_3'),
          (e[(e.KEY_4 = 25)] = 'KEY_4'),
          (e[(e.KEY_5 = 26)] = 'KEY_5'),
          (e[(e.KEY_6 = 27)] = 'KEY_6'),
          (e[(e.KEY_7 = 28)] = 'KEY_7'),
          (e[(e.KEY_8 = 29)] = 'KEY_8'),
          (e[(e.KEY_9 = 30)] = 'KEY_9'),
          (e[(e.KEY_A = 31)] = 'KEY_A'),
          (e[(e.KEY_B = 32)] = 'KEY_B'),
          (e[(e.KEY_C = 33)] = 'KEY_C'),
          (e[(e.KEY_D = 34)] = 'KEY_D'),
          (e[(e.KEY_E = 35)] = 'KEY_E'),
          (e[(e.KEY_F = 36)] = 'KEY_F'),
          (e[(e.KEY_G = 37)] = 'KEY_G'),
          (e[(e.KEY_H = 38)] = 'KEY_H'),
          (e[(e.KEY_I = 39)] = 'KEY_I'),
          (e[(e.KEY_J = 40)] = 'KEY_J'),
          (e[(e.KEY_K = 41)] = 'KEY_K'),
          (e[(e.KEY_L = 42)] = 'KEY_L'),
          (e[(e.KEY_M = 43)] = 'KEY_M'),
          (e[(e.KEY_N = 44)] = 'KEY_N'),
          (e[(e.KEY_O = 45)] = 'KEY_O'),
          (e[(e.KEY_P = 46)] = 'KEY_P'),
          (e[(e.KEY_Q = 47)] = 'KEY_Q'),
          (e[(e.KEY_R = 48)] = 'KEY_R'),
          (e[(e.KEY_S = 49)] = 'KEY_S'),
          (e[(e.KEY_T = 50)] = 'KEY_T'),
          (e[(e.KEY_U = 51)] = 'KEY_U'),
          (e[(e.KEY_V = 52)] = 'KEY_V'),
          (e[(e.KEY_W = 53)] = 'KEY_W'),
          (e[(e.KEY_X = 54)] = 'KEY_X'),
          (e[(e.KEY_Y = 55)] = 'KEY_Y'),
          (e[(e.KEY_Z = 56)] = 'KEY_Z'),
          (e[(e.Meta = 57)] = 'Meta'),
          (e[(e.ContextMenu = 58)] = 'ContextMenu'),
          (e[(e.F1 = 59)] = 'F1'),
          (e[(e.F2 = 60)] = 'F2'),
          (e[(e.F3 = 61)] = 'F3'),
          (e[(e.F4 = 62)] = 'F4'),
          (e[(e.F5 = 63)] = 'F5'),
          (e[(e.F6 = 64)] = 'F6'),
          (e[(e.F7 = 65)] = 'F7'),
          (e[(e.F8 = 66)] = 'F8'),
          (e[(e.F9 = 67)] = 'F9'),
          (e[(e.F10 = 68)] = 'F10'),
          (e[(e.F11 = 69)] = 'F11'),
          (e[(e.F12 = 70)] = 'F12'),
          (e[(e.F13 = 71)] = 'F13'),
          (e[(e.F14 = 72)] = 'F14'),
          (e[(e.F15 = 73)] = 'F15'),
          (e[(e.F16 = 74)] = 'F16'),
          (e[(e.F17 = 75)] = 'F17'),
          (e[(e.F18 = 76)] = 'F18'),
          (e[(e.F19 = 77)] = 'F19'),
          (e[(e.NumLock = 78)] = 'NumLock'),
          (e[(e.ScrollLock = 79)] = 'ScrollLock'),
          (e[(e.US_SEMICOLON = 80)] = 'US_SEMICOLON'),
          (e[(e.US_EQUAL = 81)] = 'US_EQUAL'),
          (e[(e.US_COMMA = 82)] = 'US_COMMA'),
          (e[(e.US_MINUS = 83)] = 'US_MINUS'),
          (e[(e.US_DOT = 84)] = 'US_DOT'),
          (e[(e.US_SLASH = 85)] = 'US_SLASH'),
          (e[(e.US_BACKTICK = 86)] = 'US_BACKTICK'),
          (e[(e.US_OPEN_SQUARE_BRACKET = 87)] = 'US_OPEN_SQUARE_BRACKET'),
          (e[(e.US_BACKSLASH = 88)] = 'US_BACKSLASH'),
          (e[(e.US_CLOSE_SQUARE_BRACKET = 89)] = 'US_CLOSE_SQUARE_BRACKET'),
          (e[(e.US_QUOTE = 90)] = 'US_QUOTE'),
          (e[(e.OEM_8 = 91)] = 'OEM_8'),
          (e[(e.OEM_102 = 92)] = 'OEM_102'),
          (e[(e.NUMPAD_0 = 93)] = 'NUMPAD_0'),
          (e[(e.NUMPAD_1 = 94)] = 'NUMPAD_1'),
          (e[(e.NUMPAD_2 = 95)] = 'NUMPAD_2'),
          (e[(e.NUMPAD_3 = 96)] = 'NUMPAD_3'),
          (e[(e.NUMPAD_4 = 97)] = 'NUMPAD_4'),
          (e[(e.NUMPAD_5 = 98)] = 'NUMPAD_5'),
          (e[(e.NUMPAD_6 = 99)] = 'NUMPAD_6'),
          (e[(e.NUMPAD_7 = 100)] = 'NUMPAD_7'),
          (e[(e.NUMPAD_8 = 101)] = 'NUMPAD_8'),
          (e[(e.NUMPAD_9 = 102)] = 'NUMPAD_9'),
          (e[(e.NUMPAD_MULTIPLY = 103)] = 'NUMPAD_MULTIPLY'),
          (e[(e.NUMPAD_ADD = 104)] = 'NUMPAD_ADD'),
          (e[(e.NUMPAD_SEPARATOR = 105)] = 'NUMPAD_SEPARATOR'),
          (e[(e.NUMPAD_SUBTRACT = 106)] = 'NUMPAD_SUBTRACT'),
          (e[(e.NUMPAD_DECIMAL = 107)] = 'NUMPAD_DECIMAL'),
          (e[(e.NUMPAD_DIVIDE = 108)] = 'NUMPAD_DIVIDE'),
          (e[(e.KEY_IN_COMPOSITION = 109)] = 'KEY_IN_COMPOSITION'),
          (e[(e.ABNT_C1 = 110)] = 'ABNT_C1'),
          (e[(e.ABNT_C2 = 111)] = 'ABNT_C2'),
          (e[(e.MAX_VALUE = 112)] = 'MAX_VALUE')
      })(Je || (Je = {})),
      (function(e) {
        ;(e[(e.Hint = 1)] = 'Hint'),
          (e[(e.Info = 2)] = 'Info'),
          (e[(e.Warning = 4)] = 'Warning'),
          (e[(e.Error = 8)] = 'Error')
      })(Qe || (Qe = {})),
      (function(e) {
        ;(e[(e.Unnecessary = 1)] = 'Unnecessary'),
          (e[(e.Deprecated = 2)] = 'Deprecated')
      })(Ze || (Ze = {})),
      (function(e) {
        ;(e[(e.Inline = 1)] = 'Inline'), (e[(e.Gutter = 2)] = 'Gutter')
      })(Xe || (Xe = {})),
      (function(e) {
        ;(e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
          (e[(e.TEXTAREA = 1)] = 'TEXTAREA'),
          (e[(e.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (e[(e.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
          (e[(e.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (e[(e.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
          (e[(e.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
          (e[(e.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
          (e[(e.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
          (e[(e.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
          (e[(e.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
          (e[(e.SCROLLBAR = 11)] = 'SCROLLBAR'),
          (e[(e.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
          (e[(e.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR')
      })(et || (et = {})),
      (function(e) {
        ;(e[(e.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
          (e[(e.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (e[(e.TOP_CENTER = 2)] = 'TOP_CENTER')
      })(tt || (tt = {})),
      (function(e) {
        ;(e[(e.Left = 1)] = 'Left'),
          (e[(e.Center = 2)] = 'Center'),
          (e[(e.Right = 4)] = 'Right'),
          (e[(e.Full = 7)] = 'Full')
      })(nt || (nt = {})),
      (function(e) {
        ;(e[(e.Off = 0)] = 'Off'),
          (e[(e.On = 1)] = 'On'),
          (e[(e.Relative = 2)] = 'Relative'),
          (e[(e.Interval = 3)] = 'Interval'),
          (e[(e.Custom = 4)] = 'Custom')
      })(rt || (rt = {})),
      (function(e) {
        ;(e[(e.None = 0)] = 'None'),
          (e[(e.Text = 1)] = 'Text'),
          (e[(e.Blocks = 2)] = 'Blocks')
      })(it || (it = {})),
      (function(e) {
        ;(e[(e.Smooth = 0)] = 'Smooth'), (e[(e.Immediate = 1)] = 'Immediate')
      })(ot || (ot = {})),
      (function(e) {
        ;(e[(e.Auto = 1)] = 'Auto'),
          (e[(e.Hidden = 2)] = 'Hidden'),
          (e[(e.Visible = 3)] = 'Visible')
      })(st || (st = {})),
      (function(e) {
        ;(e[(e.LTR = 0)] = 'LTR'), (e[(e.RTL = 1)] = 'RTL')
      })(at || (at = {})),
      (function(e) {
        ;(e[(e.Invoke = 1)] = 'Invoke'),
          (e[(e.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (e[(e.ContentChange = 3)] = 'ContentChange')
      })(ut || (ut = {})),
      (function(e) {
        ;(e[(e.File = 0)] = 'File'),
          (e[(e.Module = 1)] = 'Module'),
          (e[(e.Namespace = 2)] = 'Namespace'),
          (e[(e.Package = 3)] = 'Package'),
          (e[(e.Class = 4)] = 'Class'),
          (e[(e.Method = 5)] = 'Method'),
          (e[(e.Property = 6)] = 'Property'),
          (e[(e.Field = 7)] = 'Field'),
          (e[(e.Constructor = 8)] = 'Constructor'),
          (e[(e.Enum = 9)] = 'Enum'),
          (e[(e.Interface = 10)] = 'Interface'),
          (e[(e.Function = 11)] = 'Function'),
          (e[(e.Variable = 12)] = 'Variable'),
          (e[(e.Constant = 13)] = 'Constant'),
          (e[(e.String = 14)] = 'String'),
          (e[(e.Number = 15)] = 'Number'),
          (e[(e.Boolean = 16)] = 'Boolean'),
          (e[(e.Array = 17)] = 'Array'),
          (e[(e.Object = 18)] = 'Object'),
          (e[(e.Key = 19)] = 'Key'),
          (e[(e.Null = 20)] = 'Null'),
          (e[(e.EnumMember = 21)] = 'EnumMember'),
          (e[(e.Struct = 22)] = 'Struct'),
          (e[(e.Event = 23)] = 'Event'),
          (e[(e.Operator = 24)] = 'Operator'),
          (e[(e.TypeParameter = 25)] = 'TypeParameter')
      })(ct || (ct = {})),
      (function(e) {
        e[(e.Deprecated = 1)] = 'Deprecated'
      })(lt || (lt = {})),
      (function(e) {
        ;(e[(e.Hidden = 0)] = 'Hidden'),
          (e[(e.Blink = 1)] = 'Blink'),
          (e[(e.Smooth = 2)] = 'Smooth'),
          (e[(e.Phase = 3)] = 'Phase'),
          (e[(e.Expand = 4)] = 'Expand'),
          (e[(e.Solid = 5)] = 'Solid')
      })(ft || (ft = {})),
      (function(e) {
        ;(e[(e.Line = 1)] = 'Line'),
          (e[(e.Block = 2)] = 'Block'),
          (e[(e.Underline = 3)] = 'Underline'),
          (e[(e.LineThin = 4)] = 'LineThin'),
          (e[(e.BlockOutline = 5)] = 'BlockOutline'),
          (e[(e.UnderlineThin = 6)] = 'UnderlineThin')
      })(ht || (ht = {})),
      (function(e) {
        ;(e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] =
          'AlwaysGrowsWhenTypingAtEdges'),
          (e[(e.NeverGrowsWhenTypingAtEdges = 1)] =
            'NeverGrowsWhenTypingAtEdges'),
          (e[(e.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (e[(e.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter')
      })(dt || (dt = {})),
      (function(e) {
        ;(e[(e.None = 0)] = 'None'),
          (e[(e.Same = 1)] = 'Same'),
          (e[(e.Indent = 2)] = 'Indent'),
          (e[(e.DeepIndent = 3)] = 'DeepIndent')
      })(pt || (pt = {}))
    var bt = (function() {
      function e() {}
      return (
        (e.chord = function(e, t) {
          return (function(e, t) {
            return (e | (((65535 & t) << 16) >>> 0)) >>> 0
          })(e, t)
        }),
        (e.CtrlCmd = 2048),
        (e.Shift = 1024),
        (e.Alt = 512),
        (e.WinCtrl = 256),
        e
      )
    })()
    var _t = (function() {
        var e = function(t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        }
      })(),
      Ct = function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
          function s(e) {
            try {
              u(r.next(e))
            } catch (e) {
              o(e)
            }
          }
          function a(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              o(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function(e) {
                      e(t)
                    })).then(s, a)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      St = function(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
        return (
          (o = {next: a(0), throw: a(1), return: a(2)}),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function() {
              return this
            }),
          o
        )
        function a(o) {
          return function(a) {
            return (function(o) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o
                      break
                    case 4:
                      return s.label++, {value: o[1], done: !1}
                    case 5:
                      s.label++, (r = o[1]), (o = [0])
                      continue
                    case 7:
                      ;(o = s.ops.pop()), s.trys.pop()
                      continue
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0
                        continue
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1]
                        break
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        ;(s.label = i[1]), (i = o)
                        break
                      }
                      if (i && s.label < i[2]) {
                        ;(s.label = i[2]), s.ops.push(o)
                        break
                      }
                      i[2] && s.ops.pop(), s.trys.pop()
                      continue
                  }
                  o = t.call(e, s)
                } catch (e) {
                  ;(o = [6, e]), (r = 0)
                } finally {
                  n = i = 0
                }
              if (5 & o[0]) throw o[1]
              return {value: o[0] ? o[1] : void 0, done: !0}
            })([o, a])
          }
        }
      },
      Et = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          _t(t, e),
          Object.defineProperty(t.prototype, 'uri', {
            get: function() {
              return this._uri
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'version', {
            get: function() {
              return this._versionId
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'eol', {
            get: function() {
              return this._eol
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.getValue = function() {
            return this.getText()
          }),
          (t.prototype.getLinesContent = function() {
            return this._lines.slice(0)
          }),
          (t.prototype.getLineCount = function() {
            return this._lines.length
          }),
          (t.prototype.getLineContent = function(e) {
            return this._lines[e - 1]
          }),
          (t.prototype.getWordAtPosition = function(e, t) {
            var n = (function(e, t, n, r) {
              t.lastIndex = 0
              var i = t.exec(n)
              if (!i) return null
              var o =
                i[0].indexOf(' ') >= 0
                  ? (function(e, t, n, r) {
                      var i,
                        o = e - 1 - r
                      for (t.lastIndex = 0; (i = t.exec(n)); ) {
                        var s = i.index || 0
                        if (s > o) return null
                        if (t.lastIndex >= o)
                          return {
                            word: i[0],
                            startColumn: r + 1 + s,
                            endColumn: r + 1 + t.lastIndex
                          }
                      }
                      return null
                    })(e, t, n, r)
                  : (function(e, t, n, r) {
                      var i,
                        o = e - 1 - r,
                        s = n.lastIndexOf(' ', o - 1) + 1
                      for (t.lastIndex = s; (i = t.exec(n)); ) {
                        var a = i.index || 0
                        if (a <= o && t.lastIndex >= o)
                          return {
                            word: i[0],
                            startColumn: r + 1 + a,
                            endColumn: r + 1 + t.lastIndex
                          }
                      }
                      return null
                    })(e, t, n, r)
              return (t.lastIndex = 0), o
            })(
              e.column,
              (function(e) {
                var t = he
                if (e && e instanceof RegExp)
                  if (e.global) t = e
                  else {
                    var n = 'g'
                    e.ignoreCase && (n += 'i'),
                      e.multiline && (n += 'm'),
                      e.unicode && (n += 'u'),
                      (t = new RegExp(e.source, n))
                  }
                return (t.lastIndex = 0), t
              })(t),
              this._lines[e.lineNumber - 1],
              0
            )
            return n
              ? new Q(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn)
              : null
          }),
          (t.prototype.createWordIterator = function(e) {
            var t,
              n,
              r = this,
              i = 0,
              o = 0,
              s = [],
              a = function() {
                if (o < s.length) {
                  var u = n.substring(s[o].start, s[o].end)
                  return (
                    (o += 1), t ? (t.value = u) : (t = {done: !1, value: u}), t
                  )
                }
                return i >= r._lines.length
                  ? k
                  : ((n = r._lines[i]),
                    (s = r._wordenize(n, e)),
                    (o = 0),
                    (i += 1),
                    a())
              }
            return {next: a}
          }),
          (t.prototype.getLineWords = function(e, t) {
            for (
              var n = this._lines[e - 1],
                r = [],
                i = 0,
                o = this._wordenize(n, t);
              i < o.length;
              i++
            ) {
              var s = o[i]
              r.push({
                word: n.substring(s.start, s.end),
                startColumn: s.start + 1,
                endColumn: s.end + 1
              })
            }
            return r
          }),
          (t.prototype._wordenize = function(e, t) {
            var n,
              r = []
            for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length; )
              r.push({start: n.index, end: n.index + n[0].length})
            return r
          }),
          (t.prototype.getValueInRange = function(e) {
            if (
              (e = this._validateRange(e)).startLineNumber === e.endLineNumber
            )
              return this._lines[e.startLineNumber - 1].substring(
                e.startColumn - 1,
                e.endColumn - 1
              )
            var t = this._eol,
              n = e.startLineNumber - 1,
              r = e.endLineNumber - 1,
              i = []
            i.push(this._lines[n].substring(e.startColumn - 1))
            for (var o = n + 1; o < r; o++) i.push(this._lines[o])
            return (
              i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t)
            )
          }),
          (t.prototype.offsetAt = function(e) {
            return (
              (e = this._validatePosition(e)),
              this._ensureLineStarts(),
              this._lineStarts.getAccumulatedValue(e.lineNumber - 2) +
                (e.column - 1)
            )
          }),
          (t.prototype.positionAt = function(e) {
            ;(e = Math.floor(e)), (e = Math.max(0, e)), this._ensureLineStarts()
            var t = this._lineStarts.getIndexOf(e),
              n = this._lines[t.index].length
            return {
              lineNumber: 1 + t.index,
              column: 1 + Math.min(t.remainder, n)
            }
          }),
          (t.prototype._validateRange = function(e) {
            var t = this._validatePosition({
                lineNumber: e.startLineNumber,
                column: e.startColumn
              }),
              n = this._validatePosition({
                lineNumber: e.endLineNumber,
                column: e.endColumn
              })
            return t.lineNumber !== e.startLineNumber ||
              t.column !== e.startColumn ||
              n.lineNumber !== e.endLineNumber ||
              n.column !== e.endColumn
              ? {
                  startLineNumber: t.lineNumber,
                  startColumn: t.column,
                  endLineNumber: n.lineNumber,
                  endColumn: n.column
                }
              : e
          }),
          (t.prototype._validatePosition = function(e) {
            if (!J.isIPosition(e)) throw new Error('bad position')
            var t = e.lineNumber,
              n = e.column,
              r = !1
            if (t < 1) (t = 1), (n = 1), (r = !0)
            else if (t > this._lines.length)
              (t = this._lines.length),
                (n = this._lines[t - 1].length + 1),
                (r = !0)
            else {
              var i = this._lines[t - 1].length + 1
              n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0))
            }
            return r ? {lineNumber: t, column: n} : e
          }),
          t
        )
      })(fe),
      xt = (function() {
        function e(e, t) {
          ;(this._host = e),
            (this._models = Object.create(null)),
            (this._foreignModuleFactory = t),
            (this._foreignModule = null)
        }
        return (
          (e.prototype.dispose = function() {
            this._models = Object.create(null)
          }),
          (e.prototype._getModel = function(e) {
            return this._models[e]
          }),
          (e.prototype._getModels = function() {
            var e = this,
              t = []
            return (
              Object.keys(this._models).forEach(function(n) {
                return t.push(e._models[n])
              }),
              t
            )
          }),
          (e.prototype.acceptNewModel = function(e) {
            this._models[e.url] = new Et(
              U.parse(e.url),
              e.lines,
              e.EOL,
              e.versionId
            )
          }),
          (e.prototype.acceptModelChanged = function(e, t) {
            this._models[e] && this._models[e].onEvents(t)
          }),
          (e.prototype.acceptRemovedModel = function(e) {
            this._models[e] && delete this._models[e]
          }),
          (e.prototype.computeDiff = function(e, t, n, r) {
            return Ct(this, void 0, void 0, function() {
              var i, o, s, a, u, c, l
              return St(this, function(f) {
                return (
                  (i = this._getModel(e)),
                  (o = this._getModel(t)),
                  i && o
                    ? ((s = i.getLinesContent()),
                      (a = o.getLinesContent()),
                      (u = new re(s, a, {
                        shouldComputeCharChanges: !0,
                        shouldPostProcessCharChanges: !0,
                        shouldIgnoreTrimWhitespace: n,
                        shouldMakePrettyDiff: !0,
                        maxComputationTime: r
                      })),
                      (c = u.computeDiff()),
                      (l =
                        !(c.changes.length > 0) &&
                        this._modelsAreIdentical(i, o)),
                      [
                        2,
                        {
                          quitEarly: c.quitEarly,
                          identical: l,
                          changes: c.changes
                        }
                      ])
                    : [2, null]
                )
              })
            })
          }),
          (e.prototype._modelsAreIdentical = function(e, t) {
            var n = e.getLineCount()
            if (n !== t.getLineCount()) return !1
            for (var r = 1; r <= n; r++) {
              if (e.getLineContent(r) !== t.getLineContent(r)) return !1
            }
            return !0
          }),
          (e.prototype.computeMoreMinimalEdits = function(t, n) {
            return Ct(this, void 0, void 0, function() {
              var r, i, o, s, a, u, c, l, f, h, d, p, m, g, v, y, _, C
              return St(this, function(S) {
                if (!(r = this._getModel(t))) return [2, n]
                for (
                  i = [],
                    o = void 0,
                    n = b(n, function(e, t) {
                      return e.range && t.range
                        ? Q.compareRangesUsingStarts(e.range, t.range)
                        : (e.range ? 0 : 1) - (t.range ? 0 : 1)
                    }),
                    s = 0,
                    a = n;
                  s < a.length;
                  s++
                )
                  if (
                    ((u = a[s]),
                    (c = u.range),
                    (l = u.text),
                    'number' == typeof (f = u.eol) && (o = f),
                    (!Q.isEmpty(c) || l) &&
                      ((h = r.getValueInRange(c)),
                      (l = l.replace(/\r\n|\n|\r/g, r.eol)),
                      h !== l))
                  )
                    if (Math.max(l.length, h.length) > e._diffLimit)
                      i.push({range: c, text: l})
                    else
                      for (
                        d = x(h, l, !1),
                          p = r.offsetAt(Q.lift(c).getStartPosition()),
                          m = 0,
                          g = d;
                        m < g.length;
                        m++
                      )
                        (v = g[m]),
                          (y = r.positionAt(p + v.originalStart)),
                          (_ = r.positionAt(
                            p + v.originalStart + v.originalLength
                          )),
                          (C = {
                            text: l.substr(v.modifiedStart, v.modifiedLength),
                            range: {
                              startLineNumber: y.lineNumber,
                              startColumn: y.column,
                              endLineNumber: _.lineNumber,
                              endColumn: _.column
                            }
                          }),
                          r.getValueInRange(C.range) !== C.text && i.push(C)
                return (
                  'number' == typeof o &&
                    i.push({
                      eol: o,
                      text: '',
                      range: {
                        startLineNumber: 0,
                        startColumn: 0,
                        endLineNumber: 0,
                        endColumn: 0
                      }
                    }),
                  [2, i]
                )
              })
            })
          }),
          (e.prototype.computeLinks = function(e) {
            return Ct(this, void 0, void 0, function() {
              var t
              return St(this, function(n) {
                return (t = this._getModel(e)) ? [2, be(t)] : [2, null]
              })
            })
          }),
          (e.prototype.textualSuggest = function(t, n, r, i) {
            return Ct(this, void 0, void 0, function() {
              var o, s, a, u, c, l, f, h
              return St(this, function(d) {
                if (!(o = this._getModel(t))) return [2, null]
                for (
                  s = [],
                    a = new Set(),
                    u = new RegExp(r, i),
                    (c = o.getWordAtPosition(n, u)) &&
                      a.add(o.getValueInRange(c)),
                    l = o.createWordIterator(u),
                    f = l.next();
                  !f.done && a.size <= e._suggestionsLimit;
                  f = l.next()
                )
                  (h = f.value),
                    a.has(h) || (a.add(h), isNaN(Number(h)) && s.push(h))
                return [2, s]
              })
            })
          }),
          (e.prototype.computeWordRanges = function(e, t, n, r) {
            return Ct(this, void 0, void 0, function() {
              var i, o, s, a, u, c, l, f, h
              return St(this, function(d) {
                if (!(i = this._getModel(e))) return [2, Object.create(null)]
                for (
                  o = new RegExp(n, r),
                    s = Object.create(null),
                    a = t.startLineNumber;
                  a < t.endLineNumber;
                  a++
                )
                  for (
                    u = i.getLineWords(a, o), c = 0, l = u;
                    c < l.length;
                    c++
                  )
                    (f = l[c]),
                      isNaN(Number(f.word)) &&
                        ((h = s[f.word]) || ((h = []), (s[f.word] = h)),
                        h.push({
                          startLineNumber: a,
                          startColumn: f.startColumn,
                          endLineNumber: a,
                          endColumn: f.endColumn
                        }))
                return [2, s]
              })
            })
          }),
          (e.prototype.navigateValueSet = function(e, t, n, r, i) {
            return Ct(this, void 0, void 0, function() {
              var o, s, a, u, c
              return St(this, function(l) {
                return (o = this._getModel(e))
                  ? ((s = new RegExp(r, i)),
                    t.startColumn === t.endColumn &&
                      (t = {
                        startLineNumber: t.startLineNumber,
                        startColumn: t.startColumn,
                        endLineNumber: t.endLineNumber,
                        endColumn: t.endColumn + 1
                      }),
                    (a = o.getValueInRange(t)),
                    (u = o.getWordAtPosition(
                      {lineNumber: t.startLineNumber, column: t.startColumn},
                      s
                    ))
                      ? ((c = o.getValueInRange(u)),
                        [2, _e.INSTANCE.navigateValueSet(t, a, u, c, n)])
                      : [2, null])
                  : [2, null]
              })
            })
          }),
          (e.prototype.loadForeignModule = function(e, t, n) {
            var r = this,
              i = {
                host: p(n, function(e, t) {
                  return r._host.fhr(e, t)
                }),
                getMirrorModels: function() {
                  return r._getModels()
                }
              }
            return this._foreignModuleFactory
              ? ((this._foreignModule = this._foreignModuleFactory(i, t)),
                Promise.resolve(d(this._foreignModule)))
              : Promise.reject(new Error('Unexpected usage'))
          }),
          (e.prototype.fmr = function(e, t) {
            if (
              !this._foreignModule ||
              'function' != typeof this._foreignModule[e]
            )
              return Promise.reject(
                new Error('Missing requestHandler or method: ' + e)
              )
            try {
              return Promise.resolve(
                this._foreignModule[e].apply(this._foreignModule, t)
              )
            } catch (e) {
              return Promise.reject(e)
            }
          }),
          (e._diffLimit = 1e5),
          (e._suggestionsLimit = 1e4),
          e
        )
      })()
    'function' == typeof importScripts &&
      (h.a.monaco = {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: ke,
        Emitter: Le,
        KeyCode: Je,
        KeyMod: bt,
        Position: J,
        Range: Q,
        Selection: vt,
        SelectionDirection: at,
        MarkerSeverity: Qe,
        MarkerTag: Ze,
        Uri: U,
        Token: yt
      })
    var wt,
      Nt = !1
    function Lt(e) {
      if (!Nt) {
        Nt = !0
        var t = new y(
          function(e) {
            self.postMessage(e)
          },
          function(t) {
            return new xt(t, e)
          }
        )
        self.onmessage = function(e) {
          t.onmessage(e.data)
        }
      }
    }
    function At(e, t) {
      void 0 === t && (t = !1)
      var n = e.length,
        r = 0,
        i = '',
        o = 0,
        s = 16,
        a = 0,
        u = 0,
        c = 0,
        l = 0,
        f = 0
      function h(t, n) {
        for (var i = 0, o = 0; i < t || !n; ) {
          var s = e.charCodeAt(r)
          if (s >= 48 && s <= 57) o = 16 * o + s - 48
          else if (s >= 65 && s <= 70) o = 16 * o + s - 65 + 10
          else {
            if (!(s >= 97 && s <= 102)) break
            o = 16 * o + s - 97 + 10
          }
          r++, i++
        }
        return i < t && (o = -1), o
      }
      function d() {
        if (((i = ''), (f = 0), (o = r), (u = a), (l = c), r >= n))
          return (o = n), (s = 17)
        var t = e.charCodeAt(r)
        if (Tt(t)) {
          do {
            r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r))
          } while (Tt(t))
          return (s = 15)
        }
        if (Ot(t))
          return (
            r++,
            (i += String.fromCharCode(t)),
            13 === t && 10 === e.charCodeAt(r) && (r++, (i += '\n')),
            a++,
            (c = r),
            (s = 14)
          )
        switch (t) {
          case 123:
            return r++, (s = 1)
          case 125:
            return r++, (s = 2)
          case 91:
            return r++, (s = 3)
          case 93:
            return r++, (s = 4)
          case 58:
            return r++, (s = 6)
          case 44:
            return r++, (s = 5)
          case 34:
            return (
              r++,
              (i = (function() {
                for (var t = '', i = r; ; ) {
                  if (r >= n) {
                    ;(t += e.substring(i, r)), (f = 2)
                    break
                  }
                  var o = e.charCodeAt(r)
                  if (34 === o) {
                    ;(t += e.substring(i, r)), r++
                    break
                  }
                  if (92 !== o) {
                    if (o >= 0 && o <= 31) {
                      if (Ot(o)) {
                        ;(t += e.substring(i, r)), (f = 2)
                        break
                      }
                      f = 6
                    }
                    r++
                  } else {
                    if (((t += e.substring(i, r)), ++r >= n)) {
                      f = 2
                      break
                    }
                    switch (e.charCodeAt(r++)) {
                      case 34:
                        t += '"'
                        break
                      case 92:
                        t += '\\'
                        break
                      case 47:
                        t += '/'
                        break
                      case 98:
                        t += '\b'
                        break
                      case 102:
                        t += '\f'
                        break
                      case 110:
                        t += '\n'
                        break
                      case 114:
                        t += '\r'
                        break
                      case 116:
                        t += '\t'
                        break
                      case 117:
                        var s = h(4, !0)
                        s >= 0 ? (t += String.fromCharCode(s)) : (f = 4)
                        break
                      default:
                        f = 5
                    }
                    i = r
                  }
                }
                return t
              })()),
              (s = 10)
            )
          case 47:
            var d = r - 1
            if (47 === e.charCodeAt(r + 1)) {
              for (r += 2; r < n && !Ot(e.charCodeAt(r)); ) r++
              return (i = e.substring(d, r)), (s = 12)
            }
            if (42 === e.charCodeAt(r + 1)) {
              r += 2
              for (var m = n - 1, g = !1; r < m; ) {
                var v = e.charCodeAt(r)
                if (42 === v && 47 === e.charCodeAt(r + 1)) {
                  ;(r += 2), (g = !0)
                  break
                }
                r++,
                  Ot(v) &&
                    (13 === v && 10 === e.charCodeAt(r) && r++, a++, (c = r))
              }
              return g || (r++, (f = 1)), (i = e.substring(d, r)), (s = 13)
            }
            return (i += String.fromCharCode(t)), r++, (s = 16)
          case 45:
            if (
              ((i += String.fromCharCode(t)), ++r === n || !kt(e.charCodeAt(r)))
            )
              return (s = 16)
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (
              (i += (function() {
                var t = r
                if (48 === e.charCodeAt(r)) r++
                else for (r++; r < e.length && kt(e.charCodeAt(r)); ) r++
                if (r < e.length && 46 === e.charCodeAt(r)) {
                  if (!(++r < e.length && kt(e.charCodeAt(r))))
                    return (f = 3), e.substring(t, r)
                  for (r++; r < e.length && kt(e.charCodeAt(r)); ) r++
                }
                var n = r
                if (
                  r < e.length &&
                  (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r))
                )
                  if (
                    (((++r < e.length && 43 === e.charCodeAt(r)) ||
                      45 === e.charCodeAt(r)) &&
                      r++,
                    r < e.length && kt(e.charCodeAt(r)))
                  ) {
                    for (r++; r < e.length && kt(e.charCodeAt(r)); ) r++
                    n = r
                  } else f = 3
                return e.substring(t, n)
              })()),
              (s = 11)
            )
          default:
            for (; r < n && p(t); ) r++, (t = e.charCodeAt(r))
            if (o !== r) {
              switch ((i = e.substring(o, r))) {
                case 'true':
                  return (s = 8)
                case 'false':
                  return (s = 9)
                case 'null':
                  return (s = 7)
              }
              return (s = 16)
            }
            return (i += String.fromCharCode(t)), r++, (s = 16)
        }
      }
      function p(e) {
        if (Tt(e) || Ot(e)) return !1
        switch (e) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1
        }
        return !0
      }
      return {
        setPosition: function(e) {
          ;(r = e), (i = ''), (o = 0), (s = 16), (f = 0)
        },
        getPosition: function() {
          return r
        },
        scan: t
          ? function() {
              var e
              do {
                e = d()
              } while (e >= 12 && e <= 15)
              return e
            }
          : d,
        getToken: function() {
          return s
        },
        getTokenValue: function() {
          return i
        },
        getTokenOffset: function() {
          return o
        },
        getTokenLength: function() {
          return r - o
        },
        getTokenStartLine: function() {
          return u
        },
        getTokenStartCharacter: function() {
          return o - l
        },
        getTokenError: function() {
          return f
        }
      }
    }
    function Tt(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (e >= 8192 && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      )
    }
    function Ot(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e
    }
    function kt(e) {
      return e >= 48 && e <= 57
    }
    function It(e, t, n) {
      var r, i, o, s, a
      if (t) {
        for (s = t.offset, a = s + t.length, o = s; o > 0 && !Mt(e, o - 1); )
          o--
        for (var u = a; u < e.length && !Mt(e, u); ) u++
        ;(i = e.substring(o, u)),
          (r = (function(e, t) {
            var n = 0,
              r = 0,
              i = t.tabSize || 4
            for (; n < e.length; ) {
              var o = e.charAt(n)
              if (' ' === o) r++
              else {
                if ('\t' !== o) break
                r += i
              }
              n++
            }
            return Math.floor(r / i)
          })(i, n))
      } else (i = e), (r = 0), (o = 0), (s = 0), (a = e.length)
      var c,
        l = (function(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t.charAt(n)
            if ('\r' === r)
              return n + 1 < t.length && '\n' === t.charAt(n + 1)
                ? '\r\n'
                : '\r'
            if ('\n' === r) return '\n'
          }
          return (e && e.eol) || '\n'
        })(n, e),
        f = !1,
        h = 0
      c = n.insertSpaces ? Pt(' ', n.tabSize || 4) : '\t'
      var d = At(i, !1),
        p = !1
      function m() {
        return l + Pt(c, r + h)
      }
      function g() {
        var e = d.scan()
        for (f = !1; 15 === e || 14 === e; ) (f = f || 14 === e), (e = d.scan())
        return (p = 16 === e || 0 !== d.getTokenError()), e
      }
      var v = []
      function y(t, n, r) {
        !p &&
          n < a &&
          r > s &&
          e.substring(n, r) !== t &&
          v.push({offset: n, length: r - n, content: t})
      }
      var b = g()
      if (17 !== b) {
        var _ = d.getTokenOffset() + o
        y(Pt(c, r), o, _)
      }
      for (; 17 !== b; ) {
        for (
          var C = d.getTokenOffset() + d.getTokenLength() + o, S = g(), E = '';
          !f && (12 === S || 13 === S);

        ) {
          y(' ', C, d.getTokenOffset() + o),
            (C = d.getTokenOffset() + d.getTokenLength() + o),
            (E = 12 === S ? m() : ''),
            (S = g())
        }
        if (2 === S) 1 !== b && (h--, (E = m()))
        else if (4 === S) 3 !== b && (h--, (E = m()))
        else {
          switch (b) {
            case 3:
            case 1:
              h++, (E = m())
              break
            case 5:
            case 12:
              E = m()
              break
            case 13:
              E = f ? m() : ' '
              break
            case 6:
              E = ' '
              break
            case 10:
              if (6 === S) {
                E = ''
                break
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === S || 13 === S ? (E = ' ') : 5 !== S && 17 !== S && (p = !0)
              break
            case 16:
              p = !0
          }
          !f || (12 !== S && 13 !== S) || (E = m())
        }
        y(E, C, d.getTokenOffset() + o), (b = S)
      }
      return v
    }
    function Pt(e, t) {
      for (var n = '', r = 0; r < t; r++) n += e
      return n
    }
    function Mt(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t))
    }
    function Rt(e, t, n) {
      void 0 === n && (n = wt.DEFAULT)
      var r = At(e, !1)
      function i(e) {
        return e
          ? function() {
              return e(
                r.getTokenOffset(),
                r.getTokenLength(),
                r.getTokenStartLine(),
                r.getTokenStartCharacter()
              )
            }
          : function() {
              return !0
            }
      }
      function o(e) {
        return e
          ? function(t) {
              return e(
                t,
                r.getTokenOffset(),
                r.getTokenLength(),
                r.getTokenStartLine(),
                r.getTokenStartCharacter()
              )
            }
          : function() {
              return !0
            }
      }
      var s = i(t.onObjectBegin),
        a = o(t.onObjectProperty),
        u = i(t.onObjectEnd),
        c = i(t.onArrayBegin),
        l = i(t.onArrayEnd),
        f = o(t.onLiteralValue),
        h = o(t.onSeparator),
        d = i(t.onComment),
        p = o(t.onError),
        m = n && n.disallowComments,
        g = n && n.allowTrailingComma
      function v() {
        for (;;) {
          var e = r.scan()
          switch (r.getTokenError()) {
            case 4:
              y(14)
              break
            case 5:
              y(15)
              break
            case 3:
              y(13)
              break
            case 1:
              m || y(11)
              break
            case 2:
              y(12)
              break
            case 6:
              y(16)
          }
          switch (e) {
            case 12:
            case 13:
              m ? y(10) : d()
              break
            case 16:
              y(1)
              break
            case 15:
            case 14:
              break
            default:
              return e
          }
        }
      }
      function y(e, t, n) {
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = []),
          p(e),
          t.length + n.length > 0)
        )
          for (var i = r.getToken(); 17 !== i; ) {
            if (-1 !== t.indexOf(i)) {
              v()
              break
            }
            if (-1 !== n.indexOf(i)) break
            i = v()
          }
      }
      function b(e) {
        var t = r.getTokenValue()
        return e ? f(t) : a(t), v(), !0
      }
      function _() {
        switch (r.getToken()) {
          case 3:
            return (function() {
              c(), v()
              for (var e = !1; 4 !== r.getToken() && 17 !== r.getToken(); ) {
                if (5 === r.getToken()) {
                  if ((e || y(4, [], []), h(','), v(), 4 === r.getToken() && g))
                    break
                } else e && y(6, [], [])
                _() || y(4, [], [4, 5]), (e = !0)
              }
              return l(), 4 !== r.getToken() ? y(8, [4], []) : v(), !0
            })()
          case 1:
            return (function() {
              s(), v()
              for (var e = !1; 2 !== r.getToken() && 17 !== r.getToken(); ) {
                if (5 === r.getToken()) {
                  if ((e || y(4, [], []), h(','), v(), 2 === r.getToken() && g))
                    break
                } else e && y(6, [], [])
                ;(10 !== r.getToken()
                  ? (y(3, [], [2, 5]), 0)
                  : (b(!1),
                    6 === r.getToken()
                      ? (h(':'), v(), _() || y(4, [], [2, 5]))
                      : y(5, [], [2, 5]),
                    1)) || y(4, [], [2, 5]),
                  (e = !0)
              }
              return u(), 2 !== r.getToken() ? y(7, [2], []) : v(), !0
            })()
          case 10:
            return b(!0)
          default:
            return (function() {
              switch (r.getToken()) {
                case 11:
                  var e = 0
                  try {
                    'number' != typeof (e = JSON.parse(r.getTokenValue())) &&
                      (y(2), (e = 0))
                  } catch (e) {
                    y(2)
                  }
                  f(e)
                  break
                case 7:
                  f(null)
                  break
                case 8:
                  f(!0)
                  break
                case 9:
                  f(!1)
                  break
                default:
                  return !1
              }
              return v(), !0
            })()
        }
      }
      return (
        v(),
        17 === r.getToken()
          ? !!n.allowEmptyContent || (y(4, [], []), !1)
          : _() ? (17 !== r.getToken() && y(9, [], []), !0) : (y(4, [], []), !1)
      )
    }
    ;(self.onmessage = function(e) {
      Nt || Lt(null)
    }),
      (function(e) {
        e.DEFAULT = {allowTrailingComma: !1}
      })(wt || (wt = {}))
    var jt,
      Ft,
      Dt,
      Vt,
      Ut,
      Wt,
      qt,
      Kt,
      Bt,
      $t,
      Ht,
      Yt,
      zt,
      Gt,
      Jt,
      Qt,
      Zt,
      Xt,
      en,
      tn,
      nn,
      rn = At,
      on = function(e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = wt.DEFAULT)
        var r = null,
          i = [],
          o = []
        function s(e) {
          Array.isArray(i) ? i.push(e) : null !== r && (i[r] = e)
        }
        return (
          Rt(
            e,
            {
              onObjectBegin: function() {
                var e = {}
                s(e), o.push(i), (i = e), (r = null)
              },
              onObjectProperty: function(e) {
                r = e
              },
              onObjectEnd: function() {
                i = o.pop()
              },
              onArrayBegin: function() {
                var e = []
                s(e), o.push(i), (i = e), (r = null)
              },
              onArrayEnd: function() {
                i = o.pop()
              },
              onLiteralValue: s,
              onError: function(e, n, r) {
                t.push({error: e, offset: n, length: r})
              }
            },
            n
          ),
          i[0]
        )
      },
      sn = function e(t, n, r) {
        if (
          (void 0 === r && (r = !1),
          (function(e, t, n) {
            return (
              void 0 === n && (n = !1),
              (t >= e.offset && t < e.offset + e.length) ||
                (n && t === e.offset + e.length)
            )
          })(t, n, r))
        ) {
          var i = t.children
          if (Array.isArray(i))
            for (var o = 0; o < i.length && i[o].offset <= n; o++) {
              var s = e(i[o], n, r)
              if (s) return s
            }
          return t
        }
      },
      an = function e(t) {
        if (!t.parent || !t.parent.children) return []
        var n = e(t.parent)
        if ('property' === t.parent.type) {
          var r = t.parent.children[0].value
          n.push(r)
        } else if ('array' === t.parent.type) {
          var i = t.parent.children.indexOf(t)
          ;-1 !== i && n.push(i)
        }
        return n
      },
      un = function e(t) {
        switch (t.type) {
          case 'array':
            return t.children.map(e)
          case 'object':
            for (
              var n = Object.create(null), r = 0, i = t.children;
              r < i.length;
              r++
            ) {
              var o = i[r],
                s = o.children[1]
              s && (n[o.children[0].value] = e(s))
            }
            return n
          case 'null':
          case 'string':
          case 'number':
          case 'boolean':
            return t.value
          default:
            return
        }
      }
    function cn(e, t) {
      if (e === t) return !0
      if (null == e || null == t) return !1
      if (typeof e != typeof t) return !1
      if ('object' != typeof e) return !1
      if (Array.isArray(e) !== Array.isArray(t)) return !1
      var n, r
      if (Array.isArray(e)) {
        if (e.length !== t.length) return !1
        for (n = 0; n < e.length; n++) if (!cn(e[n], t[n])) return !1
      } else {
        var i = []
        for (r in e) i.push(r)
        i.sort()
        var o = []
        for (r in t) o.push(r)
        if ((o.sort(), !cn(i, o))) return !1
        for (n = 0; n < i.length; n++) if (!cn(e[i[n]], t[i[n]])) return !1
      }
      return !0
    }
    function ln(e) {
      return 'number' == typeof e
    }
    function fn(e) {
      return void 0 !== e
    }
    function hn(e) {
      return 'boolean' == typeof e
    }
    !(function(e) {
      ;(e.create = function(e, t) {
        return {line: e, character: t}
      }),
        (e.is = function(e) {
          var t = e
          return (
            qn.objectLiteral(t) && qn.number(t.line) && qn.number(t.character)
          )
        })
    })(jt || (jt = {})),
      ((Dt = Ft || (Ft = {})).create = function(e, t, n, r) {
        if (qn.number(e) && qn.number(t) && qn.number(n) && qn.number(r))
          return {start: jt.create(e, t), end: jt.create(n, r)}
        if (jt.is(e) && jt.is(t)) return {start: e, end: t}
        throw new Error(
          'Range#create called with invalid arguments[' +
            e +
            ', ' +
            t +
            ', ' +
            n +
            ', ' +
            r +
            ']'
        )
      }),
      (Dt.is = function(e) {
        var t = e
        return qn.objectLiteral(t) && jt.is(t.start) && jt.is(t.end)
      }),
      (function(e) {
        ;(e.create = function(e, t) {
          return {uri: e, range: t}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              Ft.is(t.range) &&
              (qn.string(t.uri) || qn.undefined(t.uri))
            )
          })
      })(Vt || (Vt = {})),
      (function(e) {
        ;(e.create = function(e, t, n, r) {
          return {
            targetUri: e,
            targetRange: t,
            targetSelectionRange: n,
            originSelectionRange: r
          }
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              Ft.is(t.targetRange) &&
              qn.string(t.targetUri) &&
              (Ft.is(t.targetSelectionRange) ||
                qn.undefined(t.targetSelectionRange)) &&
              (Ft.is(t.originSelectionRange) ||
                qn.undefined(t.originSelectionRange))
            )
          })
      })(Ut || (Ut = {})),
      (function(e) {
        ;(e.create = function(e, t, n, r) {
          return {red: e, green: t, blue: n, alpha: r}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.number(t.red) &&
              qn.number(t.green) &&
              qn.number(t.blue) &&
              qn.number(t.alpha)
            )
          })
      })(Wt || (Wt = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          return {range: e, color: t}
        }),
          (e.is = function(e) {
            var t = e
            return Ft.is(t.range) && Wt.is(t.color)
          })
      })(qt || (qt = {})),
      (function(e) {
        ;(e.create = function(e, t, n) {
          return {label: e, textEdit: t, additionalTextEdits: n}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.string(t.label) &&
              (qn.undefined(t.textEdit) || Qt.is(t)) &&
              (qn.undefined(t.additionalTextEdits) ||
                qn.typedArray(t.additionalTextEdits, Qt.is))
            )
          })
      })(Kt || (Kt = {})),
      (function(e) {
        ;(e.Comment = 'comment'), (e.Imports = 'imports'), (e.Region = 'region')
      })(Bt || (Bt = {})),
      (function(e) {
        ;(e.create = function(e, t, n, r, i) {
          var o = {startLine: e, endLine: t}
          return (
            qn.defined(n) && (o.startCharacter = n),
            qn.defined(r) && (o.endCharacter = r),
            qn.defined(i) && (o.kind = i),
            o
          )
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.number(t.startLine) &&
              qn.number(t.startLine) &&
              (qn.undefined(t.startCharacter) || qn.number(t.startCharacter)) &&
              (qn.undefined(t.endCharacter) || qn.number(t.endCharacter)) &&
              (qn.undefined(t.kind) || qn.string(t.kind))
            )
          })
      })($t || ($t = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          return {location: e, message: t}
        }),
          (e.is = function(e) {
            var t = e
            return qn.defined(t) && Vt.is(t.location) && qn.string(t.message)
          })
      })(Ht || (Ht = {})),
      (function(e) {
        ;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
      })(Yt || (Yt = {})),
      (function(e) {
        ;(e.Unnecessary = 1), (e.Deprecated = 2)
      })(zt || (zt = {})),
      (function(e) {
        ;(e.create = function(e, t, n, r, i, o) {
          var s = {range: e, message: t}
          return (
            qn.defined(n) && (s.severity = n),
            qn.defined(r) && (s.code = r),
            qn.defined(i) && (s.source = i),
            qn.defined(o) && (s.relatedInformation = o),
            s
          )
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              Ft.is(t.range) &&
              qn.string(t.message) &&
              (qn.number(t.severity) || qn.undefined(t.severity)) &&
              (qn.number(t.code) ||
                qn.string(t.code) ||
                qn.undefined(t.code)) &&
              (qn.string(t.source) || qn.undefined(t.source)) &&
              (qn.undefined(t.relatedInformation) ||
                qn.typedArray(t.relatedInformation, Ht.is))
            )
          })
      })(Gt || (Gt = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r]
          var i = {title: e, command: t}
          return qn.defined(n) && n.length > 0 && (i.arguments = n), i
        }),
          (e.is = function(e) {
            var t = e
            return qn.defined(t) && qn.string(t.title) && qn.string(t.command)
          })
      })(Jt || (Jt = {})),
      (function(e) {
        ;(e.replace = function(e, t) {
          return {range: e, newText: t}
        }),
          (e.insert = function(e, t) {
            return {range: {start: e, end: e}, newText: t}
          }),
          (e.del = function(e) {
            return {range: e, newText: ''}
          }),
          (e.is = function(e) {
            var t = e
            return qn.objectLiteral(t) && qn.string(t.newText) && Ft.is(t.range)
          })
      })(Qt || (Qt = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          return {textDocument: e, edits: t}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) && pn.is(t.textDocument) && Array.isArray(t.edits)
            )
          })
      })(Zt || (Zt = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          var n = {kind: 'create', uri: e}
          return (
            void 0 === t ||
              (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
              (n.options = t),
            n
          )
        }),
          (e.is = function(e) {
            var t = e
            return (
              t &&
              'create' === t.kind &&
              qn.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  qn.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    qn.boolean(t.options.ignoreIfExists))))
            )
          })
      })(Xt || (Xt = {})),
      (function(e) {
        ;(e.create = function(e, t, n) {
          var r = {kind: 'rename', oldUri: e, newUri: t}
          return (
            void 0 === n ||
              (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
              (r.options = n),
            r
          )
        }),
          (e.is = function(e) {
            var t = e
            return (
              t &&
              'rename' === t.kind &&
              qn.string(t.oldUri) &&
              qn.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  qn.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    qn.boolean(t.options.ignoreIfExists))))
            )
          })
      })(en || (en = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          var n = {kind: 'delete', uri: e}
          return (
            void 0 === t ||
              (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
              (n.options = t),
            n
          )
        }),
          (e.is = function(e) {
            var t = e
            return (
              t &&
              'delete' === t.kind &&
              qn.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive ||
                  qn.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists ||
                    qn.boolean(t.options.ignoreIfNotExists))))
            )
          })
      })(tn || (tn = {})),
      (function(e) {
        e.is = function(e) {
          var t = e
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function(e) {
                return qn.string(e.kind)
                  ? Xt.is(e) || en.is(e) || tn.is(e)
                  : Zt.is(e)
              }))
          )
        }
      })(nn || (nn = {}))
    var dn,
      pn,
      mn,
      gn,
      vn,
      yn,
      bn,
      _n,
      Cn,
      Sn,
      En,
      xn,
      wn,
      Nn,
      Ln,
      An,
      Tn,
      On,
      kn,
      In,
      Pn,
      Mn,
      Rn,
      jn,
      Fn,
      Dn,
      Vn,
      Un = (function() {
        function e(e) {
          this.edits = e
        }
        return (
          (e.prototype.insert = function(e, t) {
            this.edits.push(Qt.insert(e, t))
          }),
          (e.prototype.replace = function(e, t) {
            this.edits.push(Qt.replace(e, t))
          }),
          (e.prototype.delete = function(e) {
            this.edits.push(Qt.del(e))
          }),
          (e.prototype.add = function(e) {
            this.edits.push(e)
          }),
          (e.prototype.all = function() {
            return this.edits
          }),
          (e.prototype.clear = function() {
            this.edits.splice(0, this.edits.length)
          }),
          e
        )
      })()
    !(function() {
      function e(e) {
        var t = this
        ;(this._textEditChanges = Object.create(null)),
          e &&
            ((this._workspaceEdit = e),
            e.documentChanges
              ? e.documentChanges.forEach(function(e) {
                  if (Zt.is(e)) {
                    var n = new Un(e.edits)
                    t._textEditChanges[e.textDocument.uri] = n
                  }
                })
              : e.changes &&
                Object.keys(e.changes).forEach(function(n) {
                  var r = new Un(e.changes[n])
                  t._textEditChanges[n] = r
                }))
      }
      Object.defineProperty(e.prototype, 'edit', {
        get: function() {
          return this._workspaceEdit
        },
        enumerable: !0,
        configurable: !0
      }),
        (e.prototype.getTextEditChange = function(e) {
          if (pn.is(e)) {
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = {documentChanges: []}),
              !this._workspaceEdit.documentChanges)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              )
            var t = e
            if (!(r = this._textEditChanges[t.uri])) {
              var n = {textDocument: t, edits: (i = [])}
              this._workspaceEdit.documentChanges.push(n),
                (r = new Un(i)),
                (this._textEditChanges[t.uri] = r)
            }
            return r
          }
          if (
            (this._workspaceEdit ||
              (this._workspaceEdit = {changes: Object.create(null)}),
            !this._workspaceEdit.changes)
          )
            throw new Error(
              'Workspace edit is not configured for normal text edit changes.'
            )
          var r
          if (!(r = this._textEditChanges[e])) {
            var i = []
            ;(this._workspaceEdit.changes[e] = i),
              (r = new Un(i)),
              (this._textEditChanges[e] = r)
          }
          return r
        }),
        (e.prototype.createFile = function(e, t) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(Xt.create(e, t))
        }),
        (e.prototype.renameFile = function(e, t, n) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(en.create(e, t, n))
        }),
        (e.prototype.deleteFile = function(e, t) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(tn.create(e, t))
        }),
        (e.prototype.checkDocumentChanges = function() {
          if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
            throw new Error(
              'Workspace edit is not configured for document changes.'
            )
        })
    })()
    !(function(e) {
      ;(e.create = function(e) {
        return {uri: e}
      }),
        (e.is = function(e) {
          var t = e
          return qn.defined(t) && qn.string(t.uri)
        })
    })(dn || (dn = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          return {uri: e, version: t}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              qn.string(t.uri) &&
              (null === t.version || qn.number(t.version))
            )
          })
      })(pn || (pn = {})),
      (function(e) {
        ;(e.create = function(e, t, n, r) {
          return {uri: e, languageId: t, version: n, text: r}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              qn.string(t.uri) &&
              qn.string(t.languageId) &&
              qn.number(t.version) &&
              qn.string(t.text)
            )
          })
      })(mn || (mn = {})),
      (function(e) {
        ;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
      })(gn || (gn = {})),
      (function(e) {
        e.is = function(t) {
          var n = t
          return n === e.PlainText || n === e.Markdown
        }
      })(gn || (gn = {})),
      (function(e) {
        e.is = function(e) {
          var t = e
          return qn.objectLiteral(e) && gn.is(t.kind) && qn.string(t.value)
        }
      })(vn || (vn = {})),
      (function(e) {
        ;(e.Text = 1),
          (e.Method = 2),
          (e.Function = 3),
          (e.Constructor = 4),
          (e.Field = 5),
          (e.Variable = 6),
          (e.Class = 7),
          (e.Interface = 8),
          (e.Module = 9),
          (e.Property = 10),
          (e.Unit = 11),
          (e.Value = 12),
          (e.Enum = 13),
          (e.Keyword = 14),
          (e.Snippet = 15),
          (e.Color = 16),
          (e.File = 17),
          (e.Reference = 18),
          (e.Folder = 19),
          (e.EnumMember = 20),
          (e.Constant = 21),
          (e.Struct = 22),
          (e.Event = 23),
          (e.Operator = 24),
          (e.TypeParameter = 25)
      })(yn || (yn = {})),
      (function(e) {
        ;(e.PlainText = 1), (e.Snippet = 2)
      })(bn || (bn = {})),
      (function(e) {
        e.Deprecated = 1
      })(_n || (_n = {})),
      (function(e) {
        e.create = function(e) {
          return {label: e}
        }
      })(Cn || (Cn = {})),
      (function(e) {
        e.create = function(e, t) {
          return {items: e || [], isIncomplete: !!t}
        }
      })(Sn || (Sn = {})),
      (function(e) {
        ;(e.fromPlainText = function(e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.string(t) ||
              (qn.objectLiteral(t) &&
                qn.string(t.language) &&
                qn.string(t.value))
            )
          })
      })(En || (En = {})),
      (function(e) {
        e.is = function(e) {
          var t = e
          return (
            !!t &&
            qn.objectLiteral(t) &&
            (vn.is(t.contents) ||
              En.is(t.contents) ||
              qn.typedArray(t.contents, En.is)) &&
            (void 0 === e.range || Ft.is(e.range))
          )
        }
      })(xn || (xn = {})),
      (function(e) {
        e.create = function(e, t) {
          return t ? {label: e, documentation: t} : {label: e}
        }
      })(wn || (wn = {})),
      (function(e) {
        e.create = function(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r]
          var i = {label: e}
          return (
            qn.defined(t) && (i.documentation = t),
            qn.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          )
        }
      })(Nn || (Nn = {})),
      (function(e) {
        ;(e.Text = 1), (e.Read = 2), (e.Write = 3)
      })(Ln || (Ln = {})),
      (function(e) {
        e.create = function(e, t) {
          var n = {range: e}
          return qn.number(t) && (n.kind = t), n
        }
      })(An || (An = {})),
      (function(e) {
        ;(e.File = 1),
          (e.Module = 2),
          (e.Namespace = 3),
          (e.Package = 4),
          (e.Class = 5),
          (e.Method = 6),
          (e.Property = 7),
          (e.Field = 8),
          (e.Constructor = 9),
          (e.Enum = 10),
          (e.Interface = 11),
          (e.Function = 12),
          (e.Variable = 13),
          (e.Constant = 14),
          (e.String = 15),
          (e.Number = 16),
          (e.Boolean = 17),
          (e.Array = 18),
          (e.Object = 19),
          (e.Key = 20),
          (e.Null = 21),
          (e.EnumMember = 22),
          (e.Struct = 23),
          (e.Event = 24),
          (e.Operator = 25),
          (e.TypeParameter = 26)
      })(Tn || (Tn = {})),
      (function(e) {
        e.Deprecated = 1
      })(On || (On = {})),
      (function(e) {
        e.create = function(e, t, n, r, i) {
          var o = {name: e, kind: t, location: {uri: r, range: n}}
          return i && (o.containerName = i), o
        }
      })(kn || (kn = {})),
      (function(e) {
        ;(e.create = function(e, t, n, r, i, o) {
          var s = {name: e, detail: t, kind: n, range: r, selectionRange: i}
          return void 0 !== o && (s.children = o), s
        }),
          (e.is = function(e) {
            var t = e
            return (
              t &&
              qn.string(t.name) &&
              qn.number(t.kind) &&
              Ft.is(t.range) &&
              Ft.is(t.selectionRange) &&
              (void 0 === t.detail || qn.string(t.detail)) &&
              (void 0 === t.deprecated || qn.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children))
            )
          })
      })(In || (In = {})),
      (function(e) {
        ;(e.Empty = ''),
          (e.QuickFix = 'quickfix'),
          (e.Refactor = 'refactor'),
          (e.RefactorExtract = 'refactor.extract'),
          (e.RefactorInline = 'refactor.inline'),
          (e.RefactorRewrite = 'refactor.rewrite'),
          (e.Source = 'source'),
          (e.SourceOrganizeImports = 'source.organizeImports'),
          (e.SourceFixAll = 'source.fixAll')
      })(Pn || (Pn = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          var n = {diagnostics: e}
          return null != t && (n.only = t), n
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              qn.typedArray(t.diagnostics, Gt.is) &&
              (void 0 === t.only || qn.typedArray(t.only, qn.string))
            )
          })
      })(Mn || (Mn = {})),
      (function(e) {
        ;(e.create = function(e, t, n) {
          var r = {title: e}
          return (
            Jt.is(t) ? (r.command = t) : (r.edit = t),
            void 0 !== n && (r.kind = n),
            r
          )
        }),
          (e.is = function(e) {
            var t = e
            return (
              t &&
              qn.string(t.title) &&
              (void 0 === t.diagnostics ||
                qn.typedArray(t.diagnostics, Gt.is)) &&
              (void 0 === t.kind || qn.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || Jt.is(t.command)) &&
              (void 0 === t.isPreferred || qn.boolean(t.isPreferred)) &&
              (void 0 === t.edit || nn.is(t.edit))
            )
          })
      })(Rn || (Rn = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          var n = {range: e}
          return qn.defined(t) && (n.data = t), n
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              Ft.is(t.range) &&
              (qn.undefined(t.command) || Jt.is(t.command))
            )
          })
      })(jn || (jn = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          return {tabSize: e, insertSpaces: t}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              qn.number(t.tabSize) &&
              qn.boolean(t.insertSpaces)
            )
          })
      })(Fn || (Fn = {})),
      (function(e) {
        ;(e.create = function(e, t, n) {
          return {range: e, target: t, data: n}
        }),
          (e.is = function(e) {
            var t = e
            return (
              qn.defined(t) &&
              Ft.is(t.range) &&
              (qn.undefined(t.target) || qn.string(t.target))
            )
          })
      })(Dn || (Dn = {})),
      (function(e) {
        ;(e.create = function(e, t) {
          return {range: e, parent: t}
        }),
          (e.is = function(t) {
            var n = t
            return (
              void 0 !== n &&
              Ft.is(n.range) &&
              (void 0 === n.parent || e.is(n.parent))
            )
          })
      })(Vn || (Vn = {}))
    var Wn
    !(function(e) {
      ;(e.create = function(e, t, n, r) {
        return new Kn(e, t, n, r)
      }),
        (e.is = function(e) {
          var t = e
          return !!(
            qn.defined(t) &&
            qn.string(t.uri) &&
            (qn.undefined(t.languageId) || qn.string(t.languageId)) &&
            qn.number(t.lineCount) &&
            qn.func(t.getText) &&
            qn.func(t.positionAt) &&
            qn.func(t.offsetAt)
          )
        }),
        (e.applyEdits = function(e, t) {
          for (
            var n = e.getText(),
              r = (function e(t, n) {
                if (t.length <= 1) return t
                var r = (t.length / 2) | 0,
                  i = t.slice(0, r),
                  o = t.slice(r)
                e(i, n), e(o, n)
                var s = 0,
                  a = 0,
                  u = 0
                for (; s < i.length && a < o.length; ) {
                  var c = n(i[s], o[a])
                  t[u++] = c <= 0 ? i[s++] : o[a++]
                }
                for (; s < i.length; ) t[u++] = i[s++]
                for (; a < o.length; ) t[u++] = o[a++]
                return t
              })(t, function(e, t) {
                var n = e.range.start.line - t.range.start.line
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n
              }),
              i = n.length,
              o = r.length - 1;
            o >= 0;
            o--
          ) {
            var s = r[o],
              a = e.offsetAt(s.range.start),
              u = e.offsetAt(s.range.end)
            if (!(u <= i)) throw new Error('Overlapping edit')
            ;(n = n.substring(0, a) + s.newText + n.substring(u, n.length)),
              (i = a)
          }
          return n
        })
    })(Wn || (Wn = {}))
    var qn,
      Kn = (function() {
        function e(e, t, n, r) {
          ;(this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0)
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end)
              return this._content.substring(t, n)
            }
            return this._content
          }),
          (e.prototype.update = function(e, t) {
            ;(this._content = e.text),
              (this._version = t),
              (this._lineOffsets = void 0)
          }),
          (e.prototype.getLineOffsets = function() {
            if (void 0 === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1))
                var i = t.charAt(r)
                ;(n = '\r' === i || '\n' === i),
                  '\r' === i &&
                    r + 1 < t.length &&
                    '\n' === t.charAt(r + 1) &&
                    r++
              }
              n && t.length > 0 && e.push(t.length), (this._lineOffsets = e)
            }
            return this._lineOffsets
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0)
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length
            if (0 === r) return jt.create(0, e)
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2)
              t[i] > e ? (r = i) : (n = i + 1)
            }
            var o = n - 1
            return jt.create(o, e - t[o])
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets()
            if (e.line >= t.length) return this._content.length
            if (e.line < 0) return 0
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
            return Math.max(Math.min(n + e.character, r), n)
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        )
      })()
    !(function(e) {
      var t = Object.prototype.toString
      ;(e.defined = function(e) {
        return void 0 !== e
      }),
        (e.undefined = function(e) {
          return void 0 === e
        }),
        (e.boolean = function(e) {
          return !0 === e || !1 === e
        }),
        (e.string = function(e) {
          return '[object String]' === t.call(e)
        }),
        (e.number = function(e) {
          return '[object Number]' === t.call(e)
        }),
        (e.func = function(e) {
          return '[object Function]' === t.call(e)
        }),
        (e.objectLiteral = function(e) {
          return null !== e && 'object' == typeof e
        }),
        (e.typedArray = function(e, t) {
          return Array.isArray(e) && e.every(t)
        })
    })(qn || (qn = {}))
    var Bn,
      $n,
      Hn,
      Yn = (function() {
        function e(e, t, n, r) {
          ;(this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0)
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end)
              return this._content.substring(t, n)
            }
            return this._content
          }),
          (e.prototype.update = function(t, n) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r]
              if (e.isIncremental(o)) {
                var s = Gn(o.range),
                  a = this.offsetAt(s.start),
                  u = this.offsetAt(s.end)
                this._content =
                  this._content.substring(0, a) +
                  o.text +
                  this._content.substring(u, this._content.length)
                var c = Math.max(s.start.line, 0),
                  l = Math.max(s.end.line, 0),
                  f = this._lineOffsets,
                  h = zn(o.text, !1, a)
                if (l - c === h.length)
                  for (var d = 0, p = h.length; d < p; d++) f[d + c + 1] = h[d]
                else
                  h.length < 1e4
                    ? f.splice.apply(f, [c + 1, l - c].concat(h))
                    : (this._lineOffsets = f = f
                        .slice(0, c + 1)
                        .concat(h, f.slice(l + 1)))
                var m = o.text.length - (u - a)
                if (0 !== m)
                  for (d = c + 1 + h.length, p = f.length; d < p; d++)
                    f[d] = f[d] + m
              } else {
                if (!e.isFull(o))
                  throw new Error('Unknown change event received')
                ;(this._content = o.text), (this._lineOffsets = void 0)
              }
            }
            this._version = n
          }),
          (e.prototype.getLineOffsets = function() {
            return (
              void 0 === this._lineOffsets &&
                (this._lineOffsets = zn(this._content, !0)),
              this._lineOffsets
            )
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0)
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length
            if (0 === r) return {line: 0, character: e}
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2)
              t[i] > e ? (r = i) : (n = i + 1)
            }
            var o = n - 1
            return {line: o, character: e - t[o]}
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets()
            if (e.line >= t.length) return this._content.length
            if (e.line < 0) return 0
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
            return Math.max(Math.min(n + e.character, r), n)
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.isIncremental = function(e) {
            var t = e
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 !== t.range &&
              (void 0 === t.rangeLength || 'number' == typeof t.rangeLength)
            )
          }),
          (e.isFull = function(e) {
            var t = e
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 === t.range &&
              void 0 === t.rangeLength
            )
          }),
          e
        )
      })()
    function zn(e, t, n) {
      void 0 === n && (n = 0)
      for (var r = t ? [n] : [], i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i)
        ;(13 !== o && 10 !== o) ||
          (13 === o && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++,
          r.push(n + i + 1))
      }
      return r
    }
    function Gn(e) {
      var t = e.start,
        n = e.end
      return t.line > n.line || (t.line === n.line && t.character > n.character)
        ? {start: n, end: t}
        : e
    }
    function Jn(e) {
      var t = Gn(e.range)
      return t !== e.range ? {newText: e.newText, range: t} : e
    }
    function Qn(e, t) {
      return 0 === t.length
        ? e
        : e.replace(/\{(\d+)\}/g, function(e, n) {
            var r = n[0]
            return void 0 !== t[r] ? t[r] : e
          })
    }
    function Zn(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
      return Qn(t, n)
    }
    function Xn(e) {
      return Zn
    }
    !(function(e) {
      ;(e.create = function(e, t, n, r) {
        return new Yn(e, t, n, r)
      }),
        (e.update = function(e, t, n) {
          if (e instanceof Yn) return e.update(t, n), e
          throw new Error(
            'TextDocument.update: document must be created by TextDocument.create'
          )
        }),
        (e.applyEdits = function(e, t) {
          for (
            var n = e.getText(),
              r = (function e(t, n) {
                if (t.length <= 1) return t
                var r = (t.length / 2) | 0,
                  i = t.slice(0, r),
                  o = t.slice(r)
                e(i, n), e(o, n)
                var s = 0,
                  a = 0,
                  u = 0
                for (; s < i.length && a < o.length; ) {
                  var c = n(i[s], o[a])
                  t[u++] = c <= 0 ? i[s++] : o[a++]
                }
                for (; s < i.length; ) t[u++] = i[s++]
                for (; a < o.length; ) t[u++] = o[a++]
                return t
              })(t.map(Jn), function(e, t) {
                var n = e.range.start.line - t.range.start.line
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n
              }),
              i = n.length,
              o = r.length - 1;
            o >= 0;
            o--
          ) {
            var s = r[o],
              a = e.offsetAt(s.range.start),
              u = e.offsetAt(s.range.end)
            if (!(u <= i)) throw new Error('Overlapping edit')
            ;(n = n.substring(0, a) + s.newText + n.substring(u, n.length)),
              (i = a)
          }
          return n
        })
    })(Bn || (Bn = {})),
      (function(e) {
        ;(e[(e.Undefined = 0)] = 'Undefined'),
          (e[(e.EnumValueMismatch = 1)] = 'EnumValueMismatch'),
          (e[(e.UnexpectedEndOfComment = 257)] = 'UnexpectedEndOfComment'),
          (e[(e.UnexpectedEndOfString = 258)] = 'UnexpectedEndOfString'),
          (e[(e.UnexpectedEndOfNumber = 259)] = 'UnexpectedEndOfNumber'),
          (e[(e.InvalidUnicode = 260)] = 'InvalidUnicode'),
          (e[(e.InvalidEscapeCharacter = 261)] = 'InvalidEscapeCharacter'),
          (e[(e.InvalidCharacter = 262)] = 'InvalidCharacter'),
          (e[(e.PropertyExpected = 513)] = 'PropertyExpected'),
          (e[(e.CommaExpected = 514)] = 'CommaExpected'),
          (e[(e.ColonExpected = 515)] = 'ColonExpected'),
          (e[(e.ValueExpected = 516)] = 'ValueExpected'),
          (e[(e.CommaOrCloseBacketExpected = 517)] =
            'CommaOrCloseBacketExpected'),
          (e[(e.CommaOrCloseBraceExpected = 518)] =
            'CommaOrCloseBraceExpected'),
          (e[(e.TrailingComma = 519)] = 'TrailingComma'),
          (e[(e.DuplicateKey = 520)] = 'DuplicateKey'),
          (e[(e.CommentNotPermitted = 521)] = 'CommentNotPermitted'),
          (e[(e.SchemaResolveError = 768)] = 'SchemaResolveError')
      })($n || ($n = {})),
      ((Hn || (Hn = {})).LATEST = {
        textDocument: {
          completion: {
            completionItem: {
              documentationFormat: [gn.Markdown, gn.PlainText],
              commitCharactersSupport: !0
            }
          }
        }
      })
    var er,
      tr = (function() {
        var e = function(t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        }
      })(),
      nr = Xn(),
      rr = {
        'color-hex': {
          errorMessage: nr(
            'colorHexFormatWarning',
            'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'
          ),
          pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/
        },
        'date-time': {
          errorMessage: nr(
            'dateTimeFormatWarning',
            'String is not a RFC3339 date-time.'
          ),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
        },
        date: {
          errorMessage: nr(
            'dateFormatWarning',
            'String is not a RFC3339 date.'
          ),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i
        },
        time: {
          errorMessage: nr(
            'timeFormatWarning',
            'String is not a RFC3339 time.'
          ),
          pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
        },
        email: {
          errorMessage: nr(
            'emailFormatWarning',
            'String is not an e-mail address.'
          ),
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
      },
      ir = (function() {
        function e(e, t, n) {
          ;(this.offset = t), (this.length = n), (this.parent = e)
        }
        return (
          Object.defineProperty(e.prototype, 'children', {
            get: function() {
              return []
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.toString = function() {
            return (
              'type: ' +
              this.type +
              ' (' +
              this.offset +
              '/' +
              this.length +
              ')' +
              (this.parent ? ' parent: {' + this.parent.toString() + '}' : '')
            )
          }),
          e
        )
      })(),
      or = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'null'), (r.value = null), r
        }
        return tr(t, e), t
      })(ir),
      sr = (function(e) {
        function t(t, n, r) {
          var i = e.call(this, t, r) || this
          return (i.type = 'boolean'), (i.value = n), i
        }
        return tr(t, e), t
      })(ir),
      ar = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'array'), (r.items = []), r
        }
        return (
          tr(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.items
            },
            enumerable: !0,
            configurable: !0
          }),
          t
        )
      })(ir),
      ur = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (
            (r.type = 'number'), (r.isInteger = !0), (r.value = Number.NaN), r
          )
        }
        return tr(t, e), t
      })(ir),
      cr = (function(e) {
        function t(t, n, r) {
          var i = e.call(this, t, n, r) || this
          return (i.type = 'string'), (i.value = ''), i
        }
        return tr(t, e), t
      })(ir),
      lr = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'property'), (r.colonOffset = -1), r
        }
        return (
          tr(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.valueNode
                ? [this.keyNode, this.valueNode]
                : [this.keyNode]
            },
            enumerable: !0,
            configurable: !0
          }),
          t
        )
      })(ir),
      fr = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'object'), (r.properties = []), r
        }
        return (
          tr(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.properties
            },
            enumerable: !0,
            configurable: !0
          }),
          t
        )
      })(ir)
    function hr(e) {
      return hn(e) ? (e ? {} : {not: {}}) : e
    }
    !(function(e) {
      ;(e[(e.Key = 0)] = 'Key'), (e[(e.Enum = 1)] = 'Enum')
    })(er || (er = {}))
    var dr = (function() {
        function e(e, t) {
          void 0 === e && (e = -1),
            void 0 === t && (t = null),
            (this.focusOffset = e),
            (this.exclude = t),
            (this.schemas = [])
        }
        return (
          (e.prototype.add = function(e) {
            this.schemas.push(e)
          }),
          (e.prototype.merge = function(e) {
            var t
            ;(t = this.schemas).push.apply(t, e.schemas)
          }),
          (e.prototype.include = function(e) {
            return (
              (-1 === this.focusOffset || yr(e, this.focusOffset)) &&
              e !== this.exclude
            )
          }),
          (e.prototype.newSub = function() {
            return new e(-1, this.exclude)
          }),
          e
        )
      })(),
      pr = (function() {
        function e() {}
        return (
          Object.defineProperty(e.prototype, 'schemas', {
            get: function() {
              return []
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.add = function(e) {}),
          (e.prototype.merge = function(e) {}),
          (e.prototype.include = function(e) {
            return !0
          }),
          (e.prototype.newSub = function() {
            return this
          }),
          (e.instance = new e()),
          e
        )
      })(),
      mr = (function() {
        function e() {
          ;(this.problems = []),
            (this.propertiesMatches = 0),
            (this.propertiesValueMatches = 0),
            (this.primaryValueMatches = 0),
            (this.enumValueMatch = !1),
            (this.enumValues = null)
        }
        return (
          (e.prototype.hasProblems = function() {
            return !!this.problems.length
          }),
          (e.prototype.mergeAll = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t]
              this.merge(r)
            }
          }),
          (e.prototype.merge = function(e) {
            this.problems = this.problems.concat(e.problems)
          }),
          (e.prototype.mergeEnumValues = function(e) {
            if (
              !this.enumValueMatch &&
              !e.enumValueMatch &&
              this.enumValues &&
              e.enumValues
            ) {
              this.enumValues = this.enumValues.concat(e.enumValues)
              for (var t = 0, n = this.problems; t < n.length; t++) {
                var r = n[t]
                r.code === $n.EnumValueMismatch &&
                  (r.message = nr(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    this.enumValues
                      .map(function(e) {
                        return JSON.stringify(e)
                      })
                      .join(', ')
                  ))
              }
            }
          }),
          (e.prototype.mergePropertyMatch = function(e) {
            this.merge(e),
              this.propertiesMatches++,
              (e.enumValueMatch || (!e.hasProblems() && e.propertiesMatches)) &&
                this.propertiesValueMatches++,
              e.enumValueMatch &&
                e.enumValues &&
                1 === e.enumValues.length &&
                this.primaryValueMatches++
          }),
          (e.prototype.compare = function(e) {
            var t = this.hasProblems()
            return t !== e.hasProblems()
              ? t ? -1 : 1
              : this.enumValueMatch !== e.enumValueMatch
                ? e.enumValueMatch ? -1 : 1
                : this.primaryValueMatches !== e.primaryValueMatches
                  ? this.primaryValueMatches - e.primaryValueMatches
                  : this.propertiesValueMatches !== e.propertiesValueMatches
                    ? this.propertiesValueMatches - e.propertiesValueMatches
                    : this.propertiesMatches - e.propertiesMatches
          }),
          e
        )
      })()
    function gr(e) {
      return un(e)
    }
    function vr(e) {
      return an(e)
    }
    function yr(e, t, n) {
      return (
        void 0 === n && (n = !1),
        (t >= e.offset && t < e.offset + e.length) ||
          (n && t === e.offset + e.length)
      )
    }
    var br = (function() {
      function e(e, t, n) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          (this.root = e),
          (this.syntaxErrors = t),
          (this.comments = n)
      }
      return (
        (e.prototype.getNodeFromOffset = function(e, t) {
          if ((void 0 === t && (t = !1), this.root)) return sn(this.root, e, t)
        }),
        (e.prototype.visit = function(e) {
          if (this.root) {
            var t = function(n) {
              var r = e(n),
                i = n.children
              if (Array.isArray(i))
                for (var o = 0; o < i.length && r; o++) r = t(i[o])
              return r
            }
            t(this.root)
          }
        }),
        (e.prototype.validate = function(e, t) {
          if (this.root && t) {
            var n = new mr()
            return (
              _r(this.root, t, n, pr.instance),
              n.problems.map(function(t) {
                var n = Ft.create(
                  e.positionAt(t.location.offset),
                  e.positionAt(t.location.offset + t.location.length)
                )
                return Gt.create(n, t.message, t.severity, t.code)
              })
            )
          }
          return null
        }),
        (e.prototype.getMatchingSchemas = function(e, t, n) {
          void 0 === t && (t = -1), void 0 === n && (n = null)
          var r = new dr(t, n)
          return this.root && e && _r(this.root, e, new mr(), r), r.schemas
        }),
        e
      )
    })()
    function _r(e, t, n, r) {
      if (e && r.include(e)) {
        switch (e.type) {
          case 'object':
            !(function(e, t, n, r) {
              for (
                var i = Object.create(null), o = [], s = 0, a = e.properties;
                s < a.length;
                s++
              ) {
                var u = (y = a[s]).keyNode.value
                ;(i[u] = y.valueNode), o.push(u)
              }
              if (Array.isArray(t.required))
                for (var c = 0, l = t.required; c < l.length; c++) {
                  var f = l[c]
                  if (!i[f]) {
                    var h =
                        e.parent &&
                        'property' === e.parent.type &&
                        e.parent.keyNode,
                      d = h
                        ? {offset: h.offset, length: h.length}
                        : {offset: e.offset, length: 1}
                    n.problems.push({
                      location: d,
                      severity: Yt.Warning,
                      message: nr(
                        'MissingRequiredPropWarning',
                        'Missing property "{0}".',
                        f
                      )
                    })
                  }
                }
              var p = function(e) {
                for (var t = o.indexOf(e); t >= 0; )
                  o.splice(t, 1), (t = o.indexOf(e))
              }
              if (t.properties)
                for (
                  var m = 0, g = Object.keys(t.properties);
                  m < g.length;
                  m++
                ) {
                  f = g[m]
                  p(f)
                  var v = t.properties[f]
                  if ((O = i[f]))
                    if (hn(v))
                      if (v) n.propertiesMatches++, n.propertiesValueMatches++
                      else {
                        var y = O.parent
                        n.problems.push({
                          location: {
                            offset: y.keyNode.offset,
                            length: y.keyNode.length
                          },
                          severity: Yt.Warning,
                          message:
                            t.errorMessage ||
                            nr(
                              'DisallowedExtraPropWarning',
                              'Property {0} is not allowed.',
                              f
                            )
                        })
                      }
                    else {
                      var b = new mr()
                      _r(O, v, b, r), n.mergePropertyMatch(b)
                    }
                }
              if (t.patternProperties)
                for (
                  var _ = 0, C = Object.keys(t.patternProperties);
                  _ < C.length;
                  _++
                )
                  for (
                    var S = C[_], E = new RegExp(S), x = 0, w = o.slice(0);
                    x < w.length;
                    x++
                  ) {
                    f = w[x]
                    if (E.test(f))
                      if ((p(f), (O = i[f])))
                        if (hn((v = t.patternProperties[S])))
                          if (v)
                            n.propertiesMatches++, n.propertiesValueMatches++
                          else {
                            y = O.parent
                            n.problems.push({
                              location: {
                                offset: y.keyNode.offset,
                                length: y.keyNode.length
                              },
                              severity: Yt.Warning,
                              message:
                                t.errorMessage ||
                                nr(
                                  'DisallowedExtraPropWarning',
                                  'Property {0} is not allowed.',
                                  f
                                )
                            })
                          }
                        else {
                          b = new mr()
                          _r(O, v, b, r), n.mergePropertyMatch(b)
                        }
                  }
              if ('object' == typeof t.additionalProperties)
                for (var N = 0, L = o; N < L.length; N++) {
                  f = L[N]
                  if ((O = i[f])) {
                    b = new mr()
                    _r(O, t.additionalProperties, b, r), n.mergePropertyMatch(b)
                  }
                }
              else if (!1 === t.additionalProperties && o.length > 0)
                for (var A = 0, T = o; A < T.length; A++) {
                  var O
                  f = T[A]
                  if ((O = i[f])) {
                    y = O.parent
                    n.problems.push({
                      location: {
                        offset: y.keyNode.offset,
                        length: y.keyNode.length
                      },
                      severity: Yt.Warning,
                      message:
                        t.errorMessage ||
                        nr(
                          'DisallowedExtraPropWarning',
                          'Property {0} is not allowed.',
                          f
                        )
                    })
                  }
                }
              ln(t.maxProperties) &&
                e.properties.length > t.maxProperties &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'MaxPropWarning',
                    'Object has more properties than limit of {0}.',
                    t.maxProperties
                  )
                })
              ln(t.minProperties) &&
                e.properties.length < t.minProperties &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'MinPropWarning',
                    'Object has fewer properties than the required number of {0}',
                    t.minProperties
                  )
                })
              if (t.dependencies)
                for (
                  var k = 0, I = Object.keys(t.dependencies);
                  k < I.length;
                  k++
                ) {
                  u = I[k]
                  if (i[u]) {
                    var P = t.dependencies[u]
                    if (Array.isArray(P))
                      for (var M = 0, R = P; M < R.length; M++) {
                        var j = R[M]
                        i[j]
                          ? n.propertiesValueMatches++
                          : n.problems.push({
                              location: {offset: e.offset, length: e.length},
                              severity: Yt.Warning,
                              message: nr(
                                'RequiredDependentPropWarning',
                                'Object is missing property {0} required by property {1}.',
                                j,
                                u
                              )
                            })
                      }
                    else if ((v = hr(P))) {
                      b = new mr()
                      _r(e, v, b, r), n.mergePropertyMatch(b)
                    }
                  }
                }
              var F = hr(t.propertyNames)
              if (F)
                for (var D = 0, V = e.properties; D < V.length; D++) {
                  var U = V[D]
                  ;(u = U.keyNode) && _r(u, F, n, pr.instance)
                }
            })(e, t, n, r)
            break
          case 'array':
            !(function(e, t, n, r) {
              if (Array.isArray(t.items)) {
                for (var i = t.items, o = 0; o < i.length; o++) {
                  var s = hr(i[o]),
                    a = new mr()
                  ;(h = e.items[o])
                    ? (_r(h, s, a, r), n.mergePropertyMatch(a))
                    : e.items.length >= i.length && n.propertiesValueMatches++
                }
                if (e.items.length > i.length)
                  if ('object' == typeof t.additionalItems)
                    for (var u = i.length; u < e.items.length; u++) {
                      a = new mr()
                      _r(e.items[u], t.additionalItems, a, r),
                        n.mergePropertyMatch(a)
                    }
                  else
                    !1 === t.additionalItems &&
                      n.problems.push({
                        location: {offset: e.offset, length: e.length},
                        severity: Yt.Warning,
                        message: nr(
                          'additionalItemsWarning',
                          'Array has too many items according to schema. Expected {0} or fewer.',
                          i.length
                        )
                      })
              } else {
                var c = hr(t.items)
                if (c)
                  for (var l = 0, f = e.items; l < f.length; l++) {
                    var h = f[l]
                    a = new mr()
                    _r(h, c, a, r), n.mergePropertyMatch(a)
                  }
              }
              var d = hr(t.contains)
              if (d) {
                e.items.some(function(e) {
                  var t = new mr()
                  return _r(e, d, t, pr.instance), !t.hasProblems()
                }) ||
                  n.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: Yt.Warning,
                    message:
                      t.errorMessage ||
                      nr(
                        'requiredItemMissingWarning',
                        'Array does not contain required item.'
                      )
                  })
              }
              ln(t.minItems) &&
                e.items.length < t.minItems &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'minItemsWarning',
                    'Array has too few items. Expected {0} or more.',
                    t.minItems
                  )
                })
              ln(t.maxItems) &&
                e.items.length > t.maxItems &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'maxItemsWarning',
                    'Array has too many items. Expected {0} or fewer.',
                    t.maxItems
                  )
                })
              if (!0 === t.uniqueItems) {
                var p = gr(e)
                p.some(function(e, t) {
                  return t !== p.lastIndexOf(e)
                }) &&
                  n.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: Yt.Warning,
                    message: nr(
                      'uniqueItemsWarning',
                      'Array has duplicate items.'
                    )
                  })
              }
            })(e, t, n, r)
            break
          case 'string':
            !(function(e, t, n, r) {
              ln(t.minLength) &&
                e.value.length < t.minLength &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'minLengthWarning',
                    'String is shorter than the minimum length of {0}.',
                    t.minLength
                  )
                })
              ln(t.maxLength) &&
                e.value.length > t.maxLength &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'maxLengthWarning',
                    'String is longer than the maximum length of {0}.',
                    t.maxLength
                  )
                })
              if (((i = t.pattern), 'string' == typeof i)) {
                new RegExp(t.pattern).test(e.value) ||
                  n.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: Yt.Warning,
                    message:
                      t.patternErrorMessage ||
                      t.errorMessage ||
                      nr(
                        'patternWarning',
                        'String does not match the pattern of "{0}".',
                        t.pattern
                      )
                  })
              }
              var i
              if (t.format)
                switch (t.format) {
                  case 'uri':
                  case 'uri-reference':
                    var o = void 0
                    if (e.value) {
                      var s = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                        e.value
                      )
                      s
                        ? s[2] ||
                          'uri' !== t.format ||
                          (o = nr(
                            'uriSchemeMissing',
                            'URI with a scheme is expected.'
                          ))
                        : (o = nr('uriMissing', 'URI is expected.'))
                    } else o = nr('uriEmpty', 'URI expected.')
                    o &&
                      n.problems.push({
                        location: {offset: e.offset, length: e.length},
                        severity: Yt.Warning,
                        message:
                          t.patternErrorMessage ||
                          t.errorMessage ||
                          nr('uriFormatWarning', 'String is not a URI: {0}', o)
                      })
                    break
                  case 'color-hex':
                  case 'date-time':
                  case 'date':
                  case 'time':
                  case 'email':
                    var a = rr[t.format]
                    ;(e.value && a.pattern.exec(e.value)) ||
                      n.problems.push({
                        location: {offset: e.offset, length: e.length},
                        severity: Yt.Warning,
                        message:
                          t.patternErrorMessage ||
                          t.errorMessage ||
                          a.errorMessage
                      })
                }
            })(e, t, n)
            break
          case 'number':
            !(function(e, t, n, r) {
              var i = e.value
              ln(t.multipleOf) &&
                i % t.multipleOf != 0 &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'multipleOfWarning',
                    'Value is not divisible by {0}.',
                    t.multipleOf
                  )
                })
              function o(e, t) {
                return ln(t) ? t : hn(t) && t ? e : void 0
              }
              function s(e, t) {
                if (!hn(t) || !t) return e
              }
              var a = o(t.minimum, t.exclusiveMinimum)
              ln(a) &&
                i <= a &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'exclusiveMinimumWarning',
                    'Value is below the exclusive minimum of {0}.',
                    a
                  )
                })
              var u = o(t.maximum, t.exclusiveMaximum)
              ln(u) &&
                i >= u &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'exclusiveMaximumWarning',
                    'Value is above the exclusive maximum of {0}.',
                    u
                  )
                })
              var c = s(t.minimum, t.exclusiveMinimum)
              ln(c) &&
                i < c &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'minimumWarning',
                    'Value is below the minimum of {0}.',
                    c
                  )
                })
              var l = s(t.maximum, t.exclusiveMaximum)
              ln(l) &&
                i > l &&
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'maximumWarning',
                    'Value is above the maximum of {0}.',
                    l
                  )
                })
            })(e, t, n)
            break
          case 'property':
            return _r(e.valueNode, t, n, r)
        }
        !(function() {
          function i(t) {
            return (
              e.type === t ||
              ('integer' === t && 'number' === e.type && e.isInteger)
            )
          }
          Array.isArray(t.type)
            ? t.type.some(i) ||
              n.problems.push({
                location: {offset: e.offset, length: e.length},
                severity: Yt.Warning,
                message:
                  t.errorMessage ||
                  nr(
                    'typeArrayMismatchWarning',
                    'Incorrect type. Expected one of {0}.',
                    t.type.join(', ')
                  )
              })
            : t.type &&
              (i(t.type) ||
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message:
                    t.errorMessage ||
                    nr(
                      'typeMismatchWarning',
                      'Incorrect type. Expected "{0}".',
                      t.type
                    )
                }))
          if (Array.isArray(t.allOf))
            for (var o = 0, s = t.allOf; o < s.length; o++) {
              var a = s[o]
              _r(e, hr(a), n, r)
            }
          var u = hr(t.not)
          if (u) {
            var c = new mr(),
              l = r.newSub()
            _r(e, u, c, l),
              c.hasProblems() ||
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  message: nr(
                    'notSchemaWarning',
                    'Matches a schema that is not allowed.'
                  )
                })
            for (var f = 0, h = l.schemas; f < h.length; f++) {
              var d = h[f]
              ;(d.inverted = !d.inverted), r.add(d)
            }
          }
          var p = function(t, i) {
            for (var o = [], s = null, a = 0, u = t; a < u.length; a++) {
              var c = hr(u[a]),
                l = new mr(),
                f = r.newSub()
              if ((_r(e, c, l, f), l.hasProblems() || o.push(c), s))
                if (i || l.hasProblems() || s.validationResult.hasProblems()) {
                  var h = l.compare(s.validationResult)
                  h > 0
                    ? (s = {schema: c, validationResult: l, matchingSchemas: f})
                    : 0 === h &&
                      (s.matchingSchemas.merge(f),
                      s.validationResult.mergeEnumValues(l))
                } else
                  s.matchingSchemas.merge(f),
                    (s.validationResult.propertiesMatches +=
                      l.propertiesMatches),
                    (s.validationResult.propertiesValueMatches +=
                      l.propertiesValueMatches)
              else s = {schema: c, validationResult: l, matchingSchemas: f}
            }
            return (
              o.length > 1 &&
                i &&
                n.problems.push({
                  location: {offset: e.offset, length: 1},
                  severity: Yt.Warning,
                  message: nr(
                    'oneOfWarning',
                    'Matches multiple schemas when only one must validate.'
                  )
                }),
              null !== s &&
                (n.merge(s.validationResult),
                (n.propertiesMatches += s.validationResult.propertiesMatches),
                (n.propertiesValueMatches +=
                  s.validationResult.propertiesValueMatches),
                r.merge(s.matchingSchemas)),
              o.length
            )
          }
          Array.isArray(t.anyOf) && p(t.anyOf, !1)
          Array.isArray(t.oneOf) && p(t.oneOf, !0)
          var m = function(t) {
              var i = new mr(),
                o = r.newSub()
              _r(e, hr(t), i, o),
                n.merge(i),
                (n.propertiesMatches += i.propertiesMatches),
                (n.propertiesValueMatches += i.propertiesValueMatches),
                r.merge(o)
            },
            g = hr(t.if)
          g &&
            (function(t, n, i) {
              var o = hr(t),
                s = new mr(),
                a = r.newSub()
              _r(e, o, s, a),
                r.merge(a),
                s.hasProblems() ? i && m(i) : n && m(n)
            })(g, hr(t.then), hr(t.else))
          if (Array.isArray(t.enum)) {
            for (var v = gr(e), y = !1, b = 0, _ = t.enum; b < _.length; b++) {
              var C = _[b]
              if (cn(v, C)) {
                y = !0
                break
              }
            }
            ;(n.enumValues = t.enum),
              (n.enumValueMatch = y),
              y ||
                n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  code: $n.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    nr(
                      'enumWarning',
                      'Value is not accepted. Valid values: {0}.',
                      t.enum
                        .map(function(e) {
                          return JSON.stringify(e)
                        })
                        .join(', ')
                    )
                })
          }
          if (fn(t.const)) {
            cn((v = gr(e)), t.const)
              ? (n.enumValueMatch = !0)
              : (n.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: Yt.Warning,
                  code: $n.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    nr(
                      'constWarning',
                      'Value must be {0}.',
                      JSON.stringify(t.const)
                    )
                }),
                (n.enumValueMatch = !1)),
              (n.enumValues = [t.const])
          }
          t.deprecationMessage &&
            e.parent &&
            n.problems.push({
              location: {offset: e.parent.offset, length: e.parent.length},
              severity: Yt.Warning,
              message: t.deprecationMessage
            })
        })(),
          r.add({node: e, schema: t})
      }
    }
    function Cr(e, t) {
      var n = [],
        r = -1,
        i = e.getText(),
        o = rn(i, !1),
        s = t && t.collectComments ? [] : void 0
      function a() {
        for (;;) {
          var t = o.scan()
          switch ((l(), t)) {
            case 12:
            case 13:
              Array.isArray(s) &&
                s.push(
                  Ft.create(
                    e.positionAt(o.getTokenOffset()),
                    e.positionAt(o.getTokenOffset() + o.getTokenLength())
                  )
                )
              break
            case 15:
            case 14:
              break
            default:
              return t
          }
        }
      }
      function u(t, i, o, s, a) {
        if ((void 0 === a && (a = Yt.Error), 0 === n.length || o !== r)) {
          var u = Ft.create(e.positionAt(o), e.positionAt(s))
          n.push(Gt.create(u, t, a, i, e.languageId)), (r = o)
        }
      }
      function c(e, t, n, r, s) {
        void 0 === n && (n = null),
          void 0 === r && (r = []),
          void 0 === s && (s = [])
        var c = o.getTokenOffset(),
          l = o.getTokenOffset() + o.getTokenLength()
        if (c === l && c > 0) {
          for (c--; c > 0 && /\s/.test(i.charAt(c)); ) c--
          l = c + 1
        }
        if ((u(e, t, c, l), n && f(n, !1), r.length + s.length > 0))
          for (var h = o.getToken(); 17 !== h; ) {
            if (-1 !== r.indexOf(h)) {
              a()
              break
            }
            if (-1 !== s.indexOf(h)) break
            h = a()
          }
        return n
      }
      function l() {
        switch (o.getTokenError()) {
          case 4:
            return (
              c(
                nr('InvalidUnicode', 'Invalid unicode sequence in string.'),
                $n.InvalidUnicode
              ),
              !0
            )
          case 5:
            return (
              c(
                nr(
                  'InvalidEscapeCharacter',
                  'Invalid escape character in string.'
                ),
                $n.InvalidEscapeCharacter
              ),
              !0
            )
          case 3:
            return (
              c(
                nr('UnexpectedEndOfNumber', 'Unexpected end of number.'),
                $n.UnexpectedEndOfNumber
              ),
              !0
            )
          case 1:
            return (
              c(
                nr('UnexpectedEndOfComment', 'Unexpected end of comment.'),
                $n.UnexpectedEndOfComment
              ),
              !0
            )
          case 2:
            return (
              c(
                nr('UnexpectedEndOfString', 'Unexpected end of string.'),
                $n.UnexpectedEndOfString
              ),
              !0
            )
          case 6:
            return (
              c(
                nr(
                  'InvalidCharacter',
                  'Invalid characters in string. Control characters must be escaped.'
                ),
                $n.InvalidCharacter
              ),
              !0
            )
        }
        return !1
      }
      function f(e, t) {
        return (
          (e.length = o.getTokenOffset() + o.getTokenLength() - e.offset),
          t && a(),
          e
        )
      }
      function h(t, n) {
        var r = new lr(t, o.getTokenOffset()),
          i = d(r)
        if (!i) {
          if (16 !== o.getToken()) return null
          c(
            nr('DoubleQuotesExpected', 'Property keys must be doublequoted'),
            $n.Undefined
          )
          var s = new cr(r, o.getTokenOffset(), o.getTokenLength())
          ;(s.value = o.getTokenValue()), (i = s), a()
        }
        r.keyNode = i
        var l = n[i.value]
        if (
          (l
            ? (u(
                nr('DuplicateKeyWarning', 'Duplicate object key'),
                $n.DuplicateKey,
                r.keyNode.offset,
                r.keyNode.offset + r.keyNode.length,
                Yt.Warning
              ),
              'object' == typeof l &&
                u(
                  nr('DuplicateKeyWarning', 'Duplicate object key'),
                  $n.DuplicateKey,
                  l.keyNode.offset,
                  l.keyNode.offset + l.keyNode.length,
                  Yt.Warning
                ),
              (n[i.value] = !0))
            : (n[i.value] = r),
          6 === o.getToken())
        )
          (r.colonOffset = o.getTokenOffset()), a()
        else if (
          (c(nr('ColonExpected', 'Colon expected'), $n.ColonExpected),
          10 === o.getToken() &&
            e.positionAt(i.offset + i.length).line <
              e.positionAt(o.getTokenOffset()).line)
        )
          return (r.length = i.length), r
        var f = p(r, i.value)
        return f
          ? ((r.valueNode = f), (r.length = f.offset + f.length - r.offset), r)
          : c(
              nr('ValueExpected', 'Value expected'),
              $n.ValueExpected,
              r,
              [],
              [2, 5]
            )
      }
      function d(e) {
        if (10 !== o.getToken()) return null
        var t = new cr(e, o.getTokenOffset())
        return (t.value = o.getTokenValue()), f(t, !0)
      }
      function p(e, t) {
        return (
          (function(e) {
            if (3 !== o.getToken()) return null
            var t = new ar(e, o.getTokenOffset())
            a()
            for (
              var n = 0, r = !1;
              4 !== o.getToken() && 17 !== o.getToken();

            ) {
              if (5 === o.getToken()) {
                r || c(nr('ValueExpected', 'Value expected'), $n.ValueExpected)
                var i = o.getTokenOffset()
                if ((a(), 4 === o.getToken())) {
                  r &&
                    u(
                      nr('TrailingComma', 'Trailing comma'),
                      $n.TrailingComma,
                      i,
                      i + 1
                    )
                  continue
                }
              } else
                r && c(nr('ExpectedComma', 'Expected comma'), $n.CommaExpected)
              var s = p(t, n++)
              s
                ? t.items.push(s)
                : c(
                    nr('PropertyExpected', 'Value expected'),
                    $n.ValueExpected,
                    null,
                    [],
                    [4, 5]
                  ),
                (r = !0)
            }
            return 4 !== o.getToken()
              ? c(
                  nr(
                    'ExpectedCloseBracket',
                    'Expected comma or closing bracket'
                  ),
                  $n.CommaOrCloseBacketExpected,
                  t
                )
              : f(t, !0)
          })(e) ||
          (function(e) {
            if (1 !== o.getToken()) return null
            var t = new fr(e, o.getTokenOffset()),
              n = Object.create(null)
            a()
            for (var r = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
              if (5 === o.getToken()) {
                r ||
                  c(
                    nr('PropertyExpected', 'Property expected'),
                    $n.PropertyExpected
                  )
                var i = o.getTokenOffset()
                if ((a(), 2 === o.getToken())) {
                  r &&
                    u(
                      nr('TrailingComma', 'Trailing comma'),
                      $n.TrailingComma,
                      i,
                      i + 1
                    )
                  continue
                }
              } else
                r && c(nr('ExpectedComma', 'Expected comma'), $n.CommaExpected)
              var s = h(t, n)
              s
                ? t.properties.push(s)
                : c(
                    nr('PropertyExpected', 'Property expected'),
                    $n.PropertyExpected,
                    null,
                    [],
                    [2, 5]
                  ),
                (r = !0)
            }
            return 2 !== o.getToken()
              ? c(
                  nr('ExpectedCloseBrace', 'Expected comma or closing brace'),
                  $n.CommaOrCloseBraceExpected,
                  t
                )
              : f(t, !0)
          })(e) ||
          d(e) ||
          (function(e) {
            if (11 !== o.getToken()) return null
            var t = new ur(e, o.getTokenOffset())
            if (0 === o.getTokenError()) {
              var n = o.getTokenValue()
              try {
                var r = JSON.parse(n)
                if (!ln(r))
                  return c(
                    nr('InvalidNumberFormat', 'Invalid number format.'),
                    $n.Undefined,
                    t
                  )
                t.value = r
              } catch (e) {
                return c(
                  nr('InvalidNumberFormat', 'Invalid number format.'),
                  $n.Undefined,
                  t
                )
              }
              t.isInteger = -1 === n.indexOf('.')
            }
            return f(t, !0)
          })(e) ||
          (function(e) {
            switch (o.getToken()) {
              case 7:
                return f(new or(e, o.getTokenOffset()), !0)
              case 8:
                return f(new sr(e, !0, o.getTokenOffset()), !0)
              case 9:
                return f(new sr(e, !1, o.getTokenOffset()), !0)
              default:
                return null
            }
          })(e)
        )
      }
      var m = null
      return (
        17 !== a() &&
          ((m = p(null))
            ? 17 !== o.getToken() &&
              c(
                nr('End of file expected', 'End of file expected.'),
                $n.Undefined
              )
            : c(
                nr(
                  'Invalid symbol',
                  'Expected a JSON object, array or literal.'
                ),
                $n.Undefined
              )),
        new br(m, n, s)
      )
    }
    function Sr(e, t) {
      var n = e.length - t.length
      return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t
    }
    var Er = Xn(),
      xr = (function() {
        function e(e, t, n, r) {
          void 0 === t && (t = []),
            void 0 === n && (n = Promise),
            void 0 === r && (r = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = n),
            (this.clientCapabilities = r),
            (this.templateVarIdCounter = 0)
        }
        return (
          (e.prototype.doResolve = function(e) {
            for (var t = this.contributions.length - 1; t >= 0; t--)
              if (this.contributions[t].resolveCompletion) {
                var n = this.contributions[t].resolveCompletion(e)
                if (n) return n
              }
            return this.promiseConstructor.resolve(e)
          }),
          (e.prototype.doComplete = function(e, t, n) {
            var r = this,
              i = {items: [], isIncomplete: !1},
              o = e.getText(),
              s = e.offsetAt(t),
              a = n.getNodeFromOffset(s, !0)
            if (this.isInComment(e, a ? a.offset : 0, s))
              return Promise.resolve(i)
            if (a && s === a.offset + a.length && s > 0) {
              var u = o[s - 1]
              ;(('object' === a.type && '}' === u) ||
                ('array' === a.type && ']' === u)) &&
                (a = a.parent)
            }
            var c = this.getCurrentWord(e, s),
              l = null
            if (
              !a ||
              ('string' !== a.type &&
                'number' !== a.type &&
                'boolean' !== a.type &&
                'null' !== a.type)
            ) {
              var f = s - c.length
              f > 0 && '"' === o[f - 1] && f--,
                (l = Ft.create(e.positionAt(f), t))
            } else
              l = Ft.create(
                e.positionAt(a.offset),
                e.positionAt(a.offset + a.length)
              )
            var h = {},
              d = {
                add: function(e) {
                  var t = e.label,
                    n = h[t]
                  if (n) n.documentation || (n.documentation = e.documentation)
                  else {
                    if ((t = t.replace(/[\n]/g, '↵')).length > 60) {
                      var r = t.substr(0, 57).trim() + '...'
                      h[r] || (t = r)
                    }
                    l && (e.textEdit = Qt.replace(l, e.insertText)),
                      (e.label = t),
                      (h[t] = e),
                      i.items.push(e)
                  }
                },
                setAsIncomplete: function() {
                  i.isIncomplete = !0
                },
                error: function(e) {
                  console.error(e)
                },
                log: function(e) {
                  console.log(e)
                },
                getNumberOfProposals: function() {
                  return i.items.length
                }
              }
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function(t) {
                var u = [],
                  f = !0,
                  p = '',
                  m = null
                if (a && 'string' === a.type) {
                  var g = a.parent
                  g &&
                    'property' === g.type &&
                    g.keyNode === a &&
                    ((f = !g.valueNode),
                    (m = g),
                    (p = o.substr(a.offset + 1, a.length - 2)),
                    g && (a = g.parent))
                }
                if (a && 'object' === a.type) {
                  if (a.offset === s) return i
                  a.properties.forEach(function(e) {
                    ;(m && m === e) || (h[e.keyNode.value] = Cn.create('__'))
                  })
                  var v = ''
                  f && (v = r.evaluateSeparatorAfter(e, e.offsetAt(l.end))),
                    t
                      ? r.getPropertyCompletions(t, n, a, f, v, d)
                      : r.getSchemaLessPropertyCompletions(n, a, p, d)
                  var y = vr(a)
                  r.contributions.forEach(function(t) {
                    var n = t.collectPropertyCompletions(
                      e.uri,
                      y,
                      c,
                      f,
                      '' === v,
                      d
                    )
                    n && u.push(n)
                  }),
                    !t &&
                      c.length > 0 &&
                      '"' !== o.charAt(s - c.length - 1) &&
                      (d.add({
                        kind: yn.Property,
                        label: r.getLabelForValue(c),
                        insertText: r.getInsertTextForProperty(c, null, !1, v),
                        insertTextFormat: bn.Snippet,
                        documentation: ''
                      }),
                      d.setAsIncomplete())
                }
                var b = {}
                return (
                  t
                    ? r.getValueCompletions(t, n, a, s, e, d, b)
                    : r.getSchemaLessValueCompletions(n, a, s, e, d),
                  r.contributions.length > 0 &&
                    r.getContributedValueCompletions(n, a, s, e, d, u),
                  r.promiseConstructor.all(u).then(function() {
                    if (0 === d.getNumberOfProposals()) {
                      var t = s
                      !a ||
                        ('string' !== a.type &&
                          'number' !== a.type &&
                          'boolean' !== a.type &&
                          'null' !== a.type) ||
                        (t = a.offset + a.length)
                      var n = r.evaluateSeparatorAfter(e, t)
                      r.addFillerValueCompletions(b, n, d)
                    }
                    return i
                  })
                )
              })
          }),
          (e.prototype.getPropertyCompletions = function(e, t, n, r, i, o) {
            var s = this
            t.getMatchingSchemas(e.schema, n.offset).forEach(function(e) {
              if (e.node === n && !e.inverted) {
                var t = e.schema.properties
                t &&
                  Object.keys(t).forEach(function(e) {
                    var n = t[e]
                    if (
                      'object' == typeof n &&
                      !n.deprecationMessage &&
                      !n.doNotSuggest
                    ) {
                      var a = {
                        kind: yn.Property,
                        label: e,
                        insertText: s.getInsertTextForProperty(e, n, r, i),
                        insertTextFormat: bn.Snippet,
                        filterText: s.getFilterTextForValue(e),
                        documentation:
                          s.fromMarkup(n.markdownDescription) ||
                          n.description ||
                          ''
                      }
                      Sr(a.insertText, '$1' + i) &&
                        (a.command = {
                          title: 'Suggest',
                          command: 'editor.action.triggerSuggest'
                        }),
                        o.add(a)
                    }
                  })
              }
            })
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function(e, t, n, r) {
            var i = this,
              o = function(e) {
                e.properties.forEach(function(e) {
                  var t = e.keyNode.value
                  r.add({
                    kind: yn.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ''),
                    insertTextFormat: bn.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: ''
                  })
                })
              }
            if (t.parent)
              if ('property' === t.parent.type) {
                var s = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === s &&
                      e.valueNode &&
                      'object' === e.valueNode.type &&
                      o(e.valueNode),
                    !0
                  )
                })
              } else
                'array' === t.parent.type &&
                  t.parent.items.forEach(function(e) {
                    'object' === e.type && e !== t && o(e)
                  })
            else
              'object' === t.type &&
                r.add({
                  kind: yn.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty(
                    '$schema',
                    null,
                    !0,
                    ''
                  ),
                  insertTextFormat: bn.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema')
                })
          }),
          (e.prototype.getSchemaLessValueCompletions = function(e, t, n, r, i) {
            var o = this,
              s = n
            if (
              (!t ||
                ('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                ((s = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind('object'),
                  label: 'Empty object',
                  insertText: this.getInsertTextForValue({}, ''),
                  insertTextFormat: bn.Snippet,
                  documentation: ''
                }),
                void i.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: bn.Snippet,
                  documentation: ''
                })
              )
            var a = this.evaluateSeparatorAfter(r, s),
              u = function(e) {
                yr(e.parent, n, !0) ||
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, r),
                    insertText: o.getInsertTextForMatchingNode(e, r, a),
                    insertTextFormat: bn.Snippet,
                    documentation: ''
                  }),
                  'boolean' === e.type &&
                    o.addBooleanValueCompletion(!e.value, a, i)
              }
            if ('property' === t.type && n > t.colonOffset) {
              var c = t.valueNode
              if (
                c &&
                (n > c.offset + c.length ||
                  'object' === c.type ||
                  'array' === c.type)
              )
                return
              var l = t.keyNode.value
              e.visit(function(e) {
                return (
                  'property' === e.type &&
                    e.keyNode.value === l &&
                    e.valueNode &&
                    u(e.valueNode),
                  !0
                )
              }),
                '$schema' === l &&
                  t.parent &&
                  !t.parent.parent &&
                  this.addDollarSchemaCompletions(a, i)
            }
            if ('array' === t.type)
              if (t.parent && 'property' === t.parent.type) {
                var f = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e.keyNode.value === f &&
                      e.valueNode &&
                      'array' === e.valueNode.type &&
                      e.valueNode.items.forEach(u),
                    !0
                  )
                })
              } else t.items.forEach(u)
          }),
          (e.prototype.getValueCompletions = function(e, t, n, r, i, o, s) {
            var a = this,
              u = r,
              c = null,
              l = null
            if (
              (!n ||
                ('string' !== n.type &&
                  'number' !== n.type &&
                  'boolean' !== n.type &&
                  'null' !== n.type) ||
                ((u = n.offset + n.length), (l = n), (n = n.parent)),
              n)
            ) {
              if ('property' === n.type && r > n.colonOffset) {
                var f = n.valueNode
                if (f && r > f.offset + f.length) return
                ;(c = n.keyNode.value), (n = n.parent)
              }
              if (n && (null !== c || 'array' === n.type)) {
                var h = this.evaluateSeparatorAfter(i, u)
                t
                  .getMatchingSchemas(e.schema, n.offset, l)
                  .forEach(function(e) {
                    if (e.node === n && !e.inverted && e.schema) {
                      if ('array' === n.type && e.schema.items)
                        if (Array.isArray(e.schema.items)) {
                          var t = a.findItemAtOffset(n, i, r)
                          t < e.schema.items.length &&
                            a.addSchemaValueCompletions(
                              e.schema.items[t],
                              h,
                              o,
                              s
                            )
                        } else
                          a.addSchemaValueCompletions(e.schema.items, h, o, s)
                      if (e.schema.properties) {
                        var u = e.schema.properties[c]
                        u && a.addSchemaValueCompletions(u, h, o, s)
                      }
                    }
                  }),
                  '$schema' !== c ||
                    n.parent ||
                    this.addDollarSchemaCompletions(h, o),
                  s.boolean &&
                    (this.addBooleanValueCompletion(!0, h, o),
                    this.addBooleanValueCompletion(!1, h, o)),
                  s.null && this.addNullValueCompletion(h, o)
              }
            } else this.addSchemaValueCompletions(e.schema, '', o, s)
          }),
          (e.prototype.getContributedValueCompletions = function(
            e,
            t,
            n,
            r,
            i,
            o
          ) {
            if (t) {
              if (
                (('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                  (t = t.parent),
                'property' === t.type && n > t.colonOffset)
              ) {
                var s = t.keyNode.value,
                  a = t.valueNode
                if (!a || n <= a.offset + a.length) {
                  var u = vr(t.parent)
                  this.contributions.forEach(function(e) {
                    var t = e.collectValueCompletions(r.uri, u, s, i)
                    t && o.push(t)
                  })
                }
              }
            } else
              this.contributions.forEach(function(e) {
                var t = e.collectDefaultCompletions(r.uri, i)
                t && o.push(t)
              })
          }),
          (e.prototype.addSchemaValueCompletions = function(e, t, n, r) {
            var i = this
            'object' == typeof e &&
              (this.addEnumValueCompletions(e, t, n),
              this.addDefaultValueCompletions(e, t, n),
              this.collectTypes(e, r),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, n, r)
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, n, r)
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, n, r)
                }))
          }),
          (e.prototype.addDefaultValueCompletions = function(e, t, n, r) {
            var i = this
            void 0 === r && (r = 0)
            var o = !1
            if (fn(e.default)) {
              for (var s = e.type, a = e.default, u = r; u > 0; u--)
                (a = [a]), (s = 'array')
              n.add({
                kind: this.getSuggestionKind(s),
                label: this.getLabelForValue(a),
                insertText: this.getInsertTextForValue(a, t),
                insertTextFormat: bn.Snippet,
                detail: Er('json.suggest.default', 'Default value')
              }),
                (o = !0)
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function(s) {
                for (var a = e.type, u = s, c = r; c > 0; c--)
                  (u = [u]), (a = 'array')
                n.add({
                  kind: i.getSuggestionKind(a),
                  label: i.getLabelForValue(u),
                  insertText: i.getInsertTextForValue(u, t),
                  insertTextFormat: bn.Snippet
                }),
                  (o = !0)
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function(s) {
                  var a,
                    u,
                    c = e.type,
                    l = s.body,
                    f = s.label
                  if (fn(l)) {
                    e.type
                    for (var h = r; h > 0; h--) (l = [l]), 'array'
                    ;(a = i.getInsertTextForSnippetValue(l, t)),
                      (u = i.getFilterTextForSnippetValue(l)),
                      (f = f || i.getLabelForSnippetValue(l))
                  } else if ('string' == typeof s.bodyText) {
                    var d = '',
                      p = '',
                      m = ''
                    for (h = r; h > 0; h--)
                      (d = d + m + '[\n'),
                        (p = p + '\n' + m + ']'),
                        (m += '\t'),
                        (c = 'array')
                    ;(a =
                      d + m + s.bodyText.split('\n').join('\n' + m) + p + t),
                      (f = f || a),
                      (u = a.replace(/[\n]/g, ''))
                  }
                  n.add({
                    kind: i.getSuggestionKind(c),
                    label: f,
                    documentation:
                      i.fromMarkup(s.markdownDescription) || s.description,
                    insertText: a,
                    insertTextFormat: bn.Snippet,
                    filterText: u
                  }),
                    (o = !0)
                }),
              o ||
                'object' != typeof e.items ||
                Array.isArray(e.items) ||
                this.addDefaultValueCompletions(e.items, t, n, r + 1)
          }),
          (e.prototype.addEnumValueCompletions = function(e, t, n) {
            if (
              (fn(e.const) &&
                n.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: bn.Snippet,
                  documentation:
                    this.fromMarkup(e.markdownDescription) || e.description
                }),
              Array.isArray(e.enum))
            )
              for (var r = 0, i = e.enum.length; r < i; r++) {
                var o = e.enum[r],
                  s = this.fromMarkup(e.markdownDescription) || e.description
                e.markdownEnumDescriptions &&
                r < e.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (s = this.fromMarkup(e.markdownEnumDescriptions[r]))
                  : e.enumDescriptions &&
                    r < e.enumDescriptions.length &&
                    (s = e.enumDescriptions[r]),
                  n.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: bn.Snippet,
                    documentation: s
                  })
              }
          }),
          (e.prototype.collectTypes = function(e, t) {
            if (!Array.isArray(e.enum) && !fn(e.const)) {
              var n = e.type
              Array.isArray(n)
                ? n.forEach(function(e) {
                    return (t[e] = !0)
                  })
                : (t[n] = !0)
            }
          }),
          (e.prototype.addFillerValueCompletions = function(e, t, n) {
            e.object &&
              n.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: bn.Snippet,
                detail: Er('defaults.object', 'New object'),
                documentation: ''
              }),
              e.array &&
                n.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: bn.Snippet,
                  detail: Er('defaults.array', 'New array'),
                  documentation: ''
                })
          }),
          (e.prototype.addBooleanValueCompletion = function(e, t, n) {
            n.add({
              kind: this.getSuggestionKind('boolean'),
              label: e ? 'true' : 'false',
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: bn.Snippet,
              documentation: ''
            })
          }),
          (e.prototype.addNullValueCompletion = function(e, t) {
            t.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + e,
              insertTextFormat: bn.Snippet,
              documentation: ''
            })
          }),
          (e.prototype.addDollarSchemaCompletions = function(e, t) {
            var n = this
            this.schemaService
              .getRegisteredSchemaIds(function(e) {
                return 'http' === e || 'https' === e
              })
              .forEach(function(r) {
                return t.add({
                  kind: yn.Module,
                  label: n.getLabelForValue(r),
                  filterText: n.getFilterTextForValue(r),
                  insertText: n.getInsertTextForValue(r, e),
                  insertTextFormat: bn.Snippet,
                  documentation: ''
                })
              })
          }),
          (e.prototype.getLabelForValue = function(e) {
            return JSON.stringify(e)
          }),
          (e.prototype.getFilterTextForValue = function(e) {
            return JSON.stringify(e)
          }),
          (e.prototype.getFilterTextForSnippetValue = function(e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1')
          }),
          (e.prototype.getLabelForSnippetValue = function(e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1')
          }),
          (e.prototype.getInsertTextForPlainText = function(e) {
            return e.replace(/[\\\$\}]/g, '\\$&')
          }),
          (e.prototype.getInsertTextForValue = function(e, t) {
            var n = JSON.stringify(e, null, '\t')
            return '{}' === n
              ? '{$1}' + t
              : '[]' === n ? '[$1]' + t : this.getInsertTextForPlainText(n + t)
          }),
          (e.prototype.getInsertTextForSnippetValue = function(e, t) {
            return (
              (function e(t, n, r) {
                if (null !== t && 'object' == typeof t) {
                  var i = n + '\t'
                  if (Array.isArray(t)) {
                    if (0 === t.length) return '[]'
                    for (var o = '[\n', s = 0; s < t.length; s++)
                      (o += i + e(t[s], i, r)),
                        s < t.length - 1 && (o += ','),
                        (o += '\n')
                    return (o += n + ']')
                  }
                  var a = Object.keys(t)
                  if (0 === a.length) return '{}'
                  for (o = '{\n', s = 0; s < a.length; s++) {
                    var u = a[s]
                    ;(o += i + JSON.stringify(u) + ': ' + e(t[u], i, r)),
                      s < a.length - 1 && (o += ','),
                      (o += '\n')
                  }
                  return (o += n + '}')
                }
                return r(t)
              })(e, '', function(e) {
                return 'string' == typeof e && '^' === e[0]
                  ? e.substr(1)
                  : JSON.stringify(e)
              }) + t
            )
          }),
          (e.prototype.getInsertTextForGuessedValue = function(e, t) {
            switch (typeof e) {
              case 'object':
                return null === e
                  ? '${1:null}' + t
                  : this.getInsertTextForValue(e, t)
              case 'string':
                var n = JSON.stringify(e)
                return (
                  (n = n.substr(1, n.length - 2)),
                  '"${1:' + (n = this.getInsertTextForPlainText(n)) + '}"' + t
                )
              case 'number':
              case 'boolean':
                return '${1:' + JSON.stringify(e) + '}' + t
            }
            return this.getInsertTextForValue(e, t)
          }),
          (e.prototype.getSuggestionKind = function(e) {
            if (Array.isArray(e)) {
              var t = e
              e = t.length > 0 ? t[0] : null
            }
            if (!e) return yn.Value
            switch (e) {
              case 'string':
                return yn.Value
              case 'object':
                return yn.Module
              case 'property':
                return yn.Property
              default:
                return yn.Value
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function(e, t) {
            switch (e.type) {
              case 'array':
                return '[]'
              case 'object':
                return '{}'
              default:
                return t.getText().substr(e.offset, e.length)
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function(e, t, n) {
            switch (e.type) {
              case 'array':
                return this.getInsertTextForValue([], n)
              case 'object':
                return this.getInsertTextForValue({}, n)
              default:
                var r = t.getText().substr(e.offset, e.length) + n
                return this.getInsertTextForPlainText(r)
            }
          }),
          (e.prototype.getInsertTextForProperty = function(e, t, n, r) {
            var i = this.getInsertTextForValue(e, '')
            if (!n) return i
            var o,
              s = i + ': ',
              a = 0
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body
                  fn(u) && (o = this.getInsertTextForSnippetValue(u, ''))
                }
                a += t.defaultSnippets.length
              }
              if (
                (t.enum &&
                  (o ||
                    1 !== t.enum.length ||
                    (o = this.getInsertTextForGuessedValue(t.enum[0], '')),
                  (a += t.enum.length)),
                fn(t.default) &&
                  (o || (o = this.getInsertTextForGuessedValue(t.default, '')),
                  a++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o ||
                    (o = this.getInsertTextForGuessedValue(t.examples[0], '')),
                  (a += t.examples.length)),
                0 === a)
              ) {
                var c = Array.isArray(t.type) ? t.type[0] : t.type
                switch ((c ||
                  (t.properties ? (c = 'object') : t.items && (c = 'array')),
                c)) {
                  case 'boolean':
                    o = '$1'
                    break
                  case 'string':
                    o = '"$1"'
                    break
                  case 'object':
                    o = '{$1}'
                    break
                  case 'array':
                    o = '[$1]'
                    break
                  case 'number':
                  case 'integer':
                    o = '${1:0}'
                    break
                  case 'null':
                    o = '${1:null}'
                    break
                  default:
                    return i
                }
              }
            }
            return (!o || a > 1) && (o = '$1'), s + o + r
          }),
          (e.prototype.getCurrentWord = function(e, t) {
            for (
              var n = t - 1, r = e.getText();
              n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n));

            )
              n--
            return r.substring(n + 1, t)
          }),
          (e.prototype.evaluateSeparatorAfter = function(e, t) {
            var n = rn(e.getText(), !0)
            switch ((n.setPosition(t), n.scan())) {
              case 5:
              case 2:
              case 4:
              case 17:
                return ''
              default:
                return ','
            }
          }),
          (e.prototype.findItemAtOffset = function(e, t, n) {
            for (
              var r = rn(t.getText(), !0), i = e.items, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var s = i[o]
              if (n > s.offset + s.length)
                return (
                  r.setPosition(s.offset + s.length),
                  5 === r.scan() && n >= r.getTokenOffset() + r.getTokenLength()
                    ? o + 1
                    : o
                )
              if (n >= s.offset) return o
            }
            return 0
          }),
          (e.prototype.isInComment = function(e, t, n) {
            var r = rn(e.getText(), !1)
            r.setPosition(t)
            for (
              var i = r.scan();
              17 !== i && r.getTokenOffset() + r.getTokenLength() < n;

            )
              i = r.scan()
            return (12 === i || 13 === i) && r.getTokenOffset() <= n
          }),
          (e.prototype.fromMarkup = function(e) {
            if (e && this.doesSupportMarkdown())
              return {kind: gn.Markdown, value: e}
          }),
          (e.prototype.doesSupportMarkdown = function() {
            if (!fn(this.supportsMarkdown)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !== e.completionItem.documentationFormat.indexOf(gn.Markdown)
            }
            return this.supportsMarkdown
          }),
          (e.prototype.doesSupportsCommitCharacters = function() {
            if (!fn(this.supportsCommitCharacters)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion
              this.supportsCommitCharacters =
                e &&
                e.completionItem &&
                !!e.completionItem.commitCharactersSupport
            }
            return this.supportsCommitCharacters
          }),
          e
        )
      })(),
      wr = (function() {
        function e(e, t, n) {
          void 0 === t && (t = []),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promise = n || Promise)
        }
        return (
          (e.prototype.doHover = function(e, t, n) {
            var r = e.offsetAt(t),
              i = n.getNodeFromOffset(r)
            if (
              !i ||
              (('object' === i.type || 'array' === i.type) &&
                r > i.offset + 1 &&
                r < i.offset + i.length - 1)
            )
              return this.promise.resolve(null)
            var o = i
            if ('string' === i.type) {
              var s = i.parent
              if (
                s &&
                'property' === s.type &&
                s.keyNode === i &&
                !(i = s.valueNode)
              )
                return this.promise.resolve(null)
            }
            for (
              var a = Ft.create(
                  e.positionAt(o.offset),
                  e.positionAt(o.offset + o.length)
                ),
                u = function(e) {
                  return {contents: e, range: a}
                },
                c = vr(i),
                l = this.contributions.length - 1;
              l >= 0;
              l--
            ) {
              var f = this.contributions[l].getInfoContribution(e.uri, c)
              if (f)
                return f.then(function(e) {
                  return u(e)
                })
            }
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function(e) {
                if (e) {
                  var t = n.getMatchingSchemas(e.schema, i.offset),
                    r = null,
                    o = null,
                    s = null,
                    a = null
                  t.every(function(e) {
                    if (
                      e.node === i &&
                      !e.inverted &&
                      e.schema &&
                      ((r = r || e.schema.title),
                      (o =
                        o ||
                        e.schema.markdownDescription ||
                        Nr(e.schema.description)),
                      e.schema.enum)
                    ) {
                      var t = e.schema.enum.indexOf(gr(i))
                      e.schema.markdownEnumDescriptions
                        ? (s = e.schema.markdownEnumDescriptions[t])
                        : e.schema.enumDescriptions &&
                          (s = Nr(e.schema.enumDescriptions[t])),
                        s &&
                          'string' != typeof (a = e.schema.enum[t]) &&
                          (a = JSON.stringify(a))
                    }
                    return !0
                  })
                  var c = ''
                  return (
                    r && (c = Nr(r)),
                    o && (c.length > 0 && (c += '\n\n'), (c += o)),
                    s &&
                      (c.length > 0 && (c += '\n\n'),
                      (c +=
                        '`' +
                        (function(e) {
                          if (-1 !== e.indexOf('`')) return '`` ' + e + ' ``'
                          return e
                        })(a) +
                        '`: ' +
                        s)),
                    u([c])
                  )
                }
                return null
              })
          }),
          e
        )
      })()
    function Nr(e) {
      if (e)
        return e
          .replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3')
          .replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
    }
    var Lr = n(2),
      Ar = Xn(),
      Tr = (function() {
        function e(e) {
          try {
            this.patternRegExp = new RegExp(
              (function(e) {
                return e
                  .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&')
                  .replace(/[\*]/g, '.*')
              })(e) + '$'
            )
          } catch (e) {
            this.patternRegExp = null
          }
          this.schemas = []
        }
        return (
          (e.prototype.addSchema = function(e) {
            this.schemas.push(e)
          }),
          (e.prototype.matchesPattern = function(e) {
            return this.patternRegExp && this.patternRegExp.test(e)
          }),
          (e.prototype.getSchemas = function() {
            return this.schemas
          }),
          e
        )
      })(),
      Or = (function() {
        function e(e, t, n) {
          ;(this.service = e),
            (this.url = t),
            (this.dependencies = {}),
            n &&
              (this.unresolvedSchema = this.service.promise.resolve(new kr(n)))
        }
        return (
          (e.prototype.getUnresolvedSchema = function() {
            return (
              this.unresolvedSchema ||
                (this.unresolvedSchema = this.service.loadSchema(this.url)),
              this.unresolvedSchema
            )
          }),
          (e.prototype.getResolvedSchema = function() {
            var e = this
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(function(
                  t
                ) {
                  return e.service.resolveSchemaContent(
                    t,
                    e.url,
                    e.dependencies
                  )
                })),
              this.resolvedSchema
            )
          }),
          (e.prototype.clearSchema = function() {
            ;(this.resolvedSchema = null),
              (this.unresolvedSchema = null),
              (this.dependencies = {})
          }),
          e
        )
      })(),
      kr = function(e, t) {
        void 0 === t && (t = []), (this.schema = e), (this.errors = t)
      },
      Ir = (function() {
        function e(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t)
        }
        return (
          (e.prototype.getSection = function(e) {
            return hr(this.getSectionRecursive(e, this.schema))
          }),
          (e.prototype.getSectionRecursive = function(e, t) {
            if (!t || 'boolean' == typeof t || 0 === e.length) return t
            var n = e.shift()
            if (t.properties && (t.properties[n], 1))
              return this.getSectionRecursive(e, t.properties[n])
            if (t.patternProperties)
              for (
                var r = 0, i = Object.keys(t.patternProperties);
                r < i.length;
                r++
              ) {
                var o = i[r]
                if (new RegExp(o).test(n))
                  return this.getSectionRecursive(e, t.patternProperties[o])
              }
            else {
              if ('object' == typeof t.additionalProperties)
                return this.getSectionRecursive(e, t.additionalProperties)
              if (n.match('[0-9]+'))
                if (Array.isArray(t.items)) {
                  var s = parseInt(n, 10)
                  if (!isNaN(s) && t.items[s])
                    return this.getSectionRecursive(e, t.items[s])
                } else if (t.items) return this.getSectionRecursive(e, t.items)
            }
            return null
          }),
          e
        )
      })(),
      Pr = (function() {
        function e(e, t, n) {
          ;(this.contextService = t),
            (this.requestService = e),
            (this.promiseConstructor = n || Promise),
            (this.callOnDispose = []),
            (this.contributionSchemas = {}),
            (this.contributionAssociations = {}),
            (this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.filePatternAssociationById = {}),
            (this.registeredSchemasIds = {})
        }
        return (
          (e.prototype.getRegisteredSchemaIds = function(e) {
            return Object.keys(this.registeredSchemasIds).filter(function(t) {
              var n = Lr.a.parse(t).scheme
              return 'schemaservice' !== n && (!e || e(n))
            })
          }),
          Object.defineProperty(e.prototype, 'promise', {
            get: function() {
              return this.promiseConstructor
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.dispose = function() {
            for (; this.callOnDispose.length > 0; ) this.callOnDispose.pop()()
          }),
          (e.prototype.onResourceChange = function(e) {
            for (
              var t = this,
                n = !1,
                r = [(e = this.normalizeId(e))],
                i = Object.keys(this.schemasById).map(function(e) {
                  return t.schemasById[e]
                });
              r.length;

            )
              for (var o = r.pop(), s = 0; s < i.length; s++) {
                var a = i[s]
                a &&
                  (a.url === o || a.dependencies[o]) &&
                  (a.url !== o && r.push(a.url),
                  a.clearSchema(),
                  (i[s] = void 0),
                  (n = !0))
              }
            return n
          }),
          (e.prototype.normalizeId = function(e) {
            try {
              return Lr.a.parse(e).toString()
            } catch (t) {
              return e
            }
          }),
          (e.prototype.setSchemaContributions = function(e) {
            if (e.schemas) {
              var t = e.schemas
              for (var n in t) {
                var r = this.normalizeId(n)
                this.contributionSchemas[r] = this.addSchemaHandle(r, t[n])
              }
            }
            if (e.schemaAssociations) {
              var i = e.schemaAssociations
              for (var o in i) {
                var s = i[o]
                this.contributionAssociations[o] = s
                for (
                  var a = this.getOrAddFilePatternAssociation(o), u = 0, c = s;
                  u < c.length;
                  u++
                ) {
                  var l = c[u]
                  n = this.normalizeId(l)
                  a.addSchema(n)
                }
              }
            }
          }),
          (e.prototype.addSchemaHandle = function(e, t) {
            var n = new Or(this, e, t)
            return (this.schemasById[e] = n), n
          }),
          (e.prototype.getOrAddSchemaHandle = function(e, t) {
            return this.schemasById[e] || this.addSchemaHandle(e, t)
          }),
          (e.prototype.getOrAddFilePatternAssociation = function(e) {
            var t = this.filePatternAssociationById[e]
            return (
              t ||
                ((t = new Tr(e)),
                (this.filePatternAssociationById[e] = t),
                this.filePatternAssociations.push(t)),
              t
            )
          }),
          (e.prototype.registerExternalSchema = function(e, t, n) {
            void 0 === t && (t = null)
            var r = this.normalizeId(e)
            if (((this.registeredSchemasIds[r] = !0), t))
              for (var i = 0, o = t; i < o.length; i++) {
                var s = o[i]
                this.getOrAddFilePatternAssociation(s).addSchema(r)
              }
            return n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r)
          }),
          (e.prototype.clearExternalSchemas = function() {
            for (var e in ((this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.filePatternAssociationById = {}),
            (this.registeredSchemasIds = {}),
            this.contributionSchemas))
              (this.schemasById[e] = this.contributionSchemas[e]),
                (this.registeredSchemasIds[e] = !0)
            for (var t in this.contributionAssociations)
              for (
                var n = this.getOrAddFilePatternAssociation(t),
                  r = 0,
                  i = this.contributionAssociations[t];
                r < i.length;
                r++
              ) {
                var o = i[r]
                e = this.normalizeId(o)
                n.addSchema(e)
              }
          }),
          (e.prototype.getResolvedSchema = function(e) {
            var t = this.normalizeId(e),
              n = this.schemasById[t]
            return n ? n.getResolvedSchema() : this.promise.resolve(null)
          }),
          (e.prototype.loadSchema = function(e) {
            if (!this.requestService) {
              var t = Ar(
                'json.schema.norequestservice',
                "Unable to load schema from '{0}'. No schema request service available",
                Mr(e)
              )
              return this.promise.resolve(new kr({}, [t]))
            }
            return this.requestService(e).then(
              function(t) {
                if (!t) {
                  var n = Ar(
                    'json.schema.nocontent',
                    "Unable to load schema from '{0}': No content.",
                    Mr(e)
                  )
                  return new kr({}, [n])
                }
                var r,
                  i = []
                r = on(t, i)
                var o = i.length
                  ? [
                      Ar(
                        'json.schema.invalidFormat',
                        "Unable to parse content from '{0}': Parse error at offset {1}.",
                        Mr(e),
                        i[0].offset
                      )
                    ]
                  : []
                return new kr(r, o)
              },
              function(t) {
                var n = t.toString(),
                  r = t.toString().split('Error: ')
                return (
                  r.length > 1 && (n = r[1]),
                  Sr(n, '.') && (n = n.substr(0, n.length - 1)),
                  new kr({}, [
                    Ar(
                      'json.schema.nocontent',
                      "Unable to load schema from '{0}': {1}.",
                      Mr(e),
                      n
                    )
                  ])
                )
              }
            )
          }),
          (e.prototype.resolveSchemaContent = function(e, t, n) {
            var r = this,
              i = e.errors.slice(0),
              o = e.schema
            if (o.$schema) {
              var s = this.normalizeId(o.$schema)
              if ('http://json-schema.org/draft-03/schema' === s)
                return this.promise.resolve(
                  new Ir({}, [
                    Ar(
                      'json.schema.draft03.notsupported',
                      'Draft-03 schemas are not supported.'
                    )
                  ])
                )
              'https://json-schema.org/draft/2019-09/schema' === s &&
                e.errors.push(
                  Ar(
                    'json.schema.draft201909.notsupported',
                    'Draft 2019-09 schemas are not yet fully supported.'
                  )
                )
            }
            var a = this.contextService,
              u = function(e, t, n, r) {
                var o = (function(e, t) {
                  if (!t) return e
                  var n = e
                  return (
                    '/' === t[0] && (t = t.substr(1)),
                    t.split('/').some(function(e) {
                      return !(n = n[e])
                    }),
                    n
                  )
                })(t, r)
                if (o)
                  for (var s in o)
                    o.hasOwnProperty(s) && !e.hasOwnProperty(s) && (e[s] = o[s])
                else
                  i.push(
                    Ar(
                      'json.schema.invalidref',
                      "$ref '{0}' in '{1}' can not be resolved.",
                      r,
                      n
                    )
                  )
              },
              c = function(e, t, n, o, s) {
                a &&
                  !/^\w+:\/\/.*/.test(t) &&
                  (t = a.resolveRelativePath(t, o)),
                  (t = r.normalizeId(t))
                var c = r.getOrAddSchemaHandle(t)
                return c.getUnresolvedSchema().then(function(r) {
                  if (((s[t] = !0), r.errors.length)) {
                    var o = n ? t + '#' + n : t
                    i.push(
                      Ar(
                        'json.schema.problemloadingref',
                        "Problems loading reference '{0}': {1}",
                        o,
                        r.errors[0]
                      )
                    )
                  }
                  return u(e, r.schema, t, n), l(e, r.schema, t, c.dependencies)
                })
              },
              l = function(e, t, n, i) {
                if (!e || 'object' != typeof e) return Promise.resolve(null)
                for (
                  var o = [e],
                    s = [],
                    a = [],
                    l = function(e) {
                      for (var r = []; e.$ref; ) {
                        var s = e.$ref,
                          l = s.split('#', 2)
                        if ((delete e.$ref, l[0].length > 0))
                          return void a.push(c(e, l[0], l[1], n, i))
                        ;-1 === r.indexOf(s) && (u(e, t, n, l[1]), r.push(s))
                      }
                      !(function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t]
                        for (var n = 0, r = e; n < r.length; n++) {
                          var i = r[n]
                          'object' == typeof i && o.push(i)
                        }
                      })(
                        e.items,
                        e.additionalProperties,
                        e.not,
                        e.contains,
                        e.propertyNames,
                        e.if,
                        e.then,
                        e.else
                      ),
                        (function() {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t]
                          for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n]
                            if ('object' == typeof i)
                              for (var s in i) {
                                var a = i[s]
                                'object' == typeof a && o.push(a)
                              }
                          }
                        })(
                          e.definitions,
                          e.properties,
                          e.patternProperties,
                          e.dependencies
                        ),
                        (function() {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t]
                          for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n]
                            if (Array.isArray(i))
                              for (var s = 0, a = i; s < a.length; s++) {
                                var u = a[s]
                                'object' == typeof u && o.push(u)
                              }
                          }
                        })(e.anyOf, e.allOf, e.oneOf, e.items)
                    };
                  o.length;

                ) {
                  var f = o.pop()
                  s.indexOf(f) >= 0 || (s.push(f), l(f))
                }
                return r.promise.all(a)
              }
            return l(o, o, t, n).then(function(e) {
              return new Ir(o, i)
            })
          }),
          (e.prototype.getSchemaForResource = function(e, t) {
            if (t && t.root && 'object' === t.root.type) {
              var n = t.root.properties.filter(function(e) {
                return (
                  '$schema' === e.keyNode.value &&
                  e.valueNode &&
                  'string' === e.valueNode.type
                )
              })
              if (n.length > 0) {
                var r = gr(n[0].valueNode)
                if (
                  (r &&
                    (function(e, t) {
                      if (e.length < t.length) return !1
                      for (var n = 0; n < t.length; n++)
                        if (e[n] !== t[n]) return !1
                      return !0
                    })(r, '.') &&
                    this.contextService &&
                    (r = this.contextService.resolveRelativePath(r, e)),
                  r)
                ) {
                  var i = this.normalizeId(r)
                  return this.getOrAddSchemaHandle(i).getResolvedSchema()
                }
              }
            }
            for (
              var o = Object.create(null),
                s = [],
                a = 0,
                u = this.filePatternAssociations;
              a < u.length;
              a++
            ) {
              var c = u[a]
              if (c.matchesPattern(e))
                for (var l = 0, f = c.getSchemas(); l < f.length; l++) {
                  var h = f[l]
                  o[h] || (s.push(h), (o[h] = !0))
                }
            }
            return s.length > 0
              ? this.createCombinedSchema(e, s).getResolvedSchema()
              : this.promise.resolve(null)
          }),
          (e.prototype.createCombinedSchema = function(e, t) {
            if (1 === t.length) return this.getOrAddSchemaHandle(t[0])
            var n = 'schemaservice://combinedSchema/' + encodeURIComponent(e),
              r = {
                allOf: t.map(function(e) {
                  return {$ref: e}
                })
              }
            return this.addSchemaHandle(n, r)
          }),
          e
        )
      })()
    function Mr(e) {
      try {
        var t = Lr.a.parse(e)
        if ('file' === t.scheme) return t.fsPath
      } catch (e) {}
      return e
    }
    var Rr = Xn(),
      jr = (function() {
        function e(e, t) {
          ;(this.jsonSchemaService = e),
            (this.promise = t),
            (this.validationEnabled = !0)
        }
        return (
          (e.prototype.configure = function(e) {
            e &&
              ((this.validationEnabled = e.validate),
              (this.commentSeverity = e.allowComments ? void 0 : Yt.Error))
          }),
          (e.prototype.doValidation = function(e, t, n, r) {
            var i = this
            if (!this.validationEnabled) return this.promise.resolve([])
            var o = [],
              s = {},
              a = function(e) {
                var t =
                  e.range.start.line +
                  ' ' +
                  e.range.start.character +
                  ' ' +
                  e.message
                s[t] || ((s[t] = !0), o.push(e))
              },
              u = function(r) {
                var s = n ? Dr(n.trailingCommas) : Yt.Error,
                  u = n ? Dr(n.comments) : i.commentSeverity
                if (r) {
                  if (r.errors.length && t.root) {
                    var c = t.root,
                      l = 'object' === c.type ? c.properties[0] : null
                    if (l && '$schema' === l.keyNode.value) {
                      var f = l.valueNode || l,
                        h = Ft.create(
                          e.positionAt(f.offset),
                          e.positionAt(f.offset + f.length)
                        )
                      a(
                        Gt.create(
                          h,
                          r.errors[0],
                          Yt.Warning,
                          $n.SchemaResolveError
                        )
                      )
                    } else {
                      h = Ft.create(
                        e.positionAt(c.offset),
                        e.positionAt(c.offset + 1)
                      )
                      a(
                        Gt.create(
                          h,
                          r.errors[0],
                          Yt.Warning,
                          $n.SchemaResolveError
                        )
                      )
                    }
                  } else {
                    var d = t.validate(e, r.schema)
                    d && d.forEach(a)
                  }
                  ;(function e(t) {
                    if (t && 'object' == typeof t) {
                      if (hn(t.allowComments)) return t.allowComments
                      if (t.allOf)
                        for (var n = 0, r = t.allOf; n < r.length; n++) {
                          var i = r[n],
                            o = e(i)
                          if (hn(o)) return o
                        }
                    }
                    return
                  })(r.schema) && (u = void 0),
                    (function e(t) {
                      if (t && 'object' == typeof t) {
                        if (hn(t.allowTrailingCommas))
                          return t.allowTrailingCommas
                        if (hn(t.allowsTrailingCommas))
                          return t.allowsTrailingCommas
                        if (t.allOf)
                          for (var n = 0, r = t.allOf; n < r.length; n++) {
                            var i = r[n],
                              o = e(i)
                            if (hn(o)) return o
                          }
                      }
                      return
                    })(r.schema) && (s = void 0)
                }
                for (var p = 0, m = t.syntaxErrors; p < m.length; p++) {
                  var g = m[p]
                  if (g.code === $n.TrailingComma) {
                    if ('number' != typeof s) continue
                    g.severity = s
                  }
                  a(g)
                }
                if ('number' == typeof u) {
                  var v = Rr(
                    'InvalidCommentToken',
                    'Comments are not permitted in JSON.'
                  )
                  t.comments.forEach(function(e) {
                    a(Gt.create(e, v, u, $n.CommentNotPermitted))
                  })
                }
                return o
              }
            if (r) {
              var c = r.id || 'schemaservice://untitled/' + Fr++
              return this.jsonSchemaService
                .resolveSchemaContent(new kr(r), c, {})
                .then(function(e) {
                  return u(e)
                })
            }
            return this.jsonSchemaService
              .getSchemaForResource(e.uri, t)
              .then(function(e) {
                return u(e)
              })
          }),
          e
        )
      })(),
      Fr = 0
    function Dr(e) {
      switch (e) {
        case 'error':
          return Yt.Error
        case 'warning':
          return Yt.Warning
        case 'ignore':
          return
      }
    }
    function Vr(e) {
      return e < 48
        ? 0
        : e <= 57
          ? e - 48
          : (e < 97 && (e += 32), e >= 97 && e <= 102 ? e - 97 + 10 : 0)
    }
    function Ur(e) {
      if ('#' !== e[0]) return null
      switch (e.length) {
        case 4:
          return {
            red: 17 * Vr(e.charCodeAt(1)) / 255,
            green: 17 * Vr(e.charCodeAt(2)) / 255,
            blue: 17 * Vr(e.charCodeAt(3)) / 255,
            alpha: 1
          }
        case 5:
          return {
            red: 17 * Vr(e.charCodeAt(1)) / 255,
            green: 17 * Vr(e.charCodeAt(2)) / 255,
            blue: 17 * Vr(e.charCodeAt(3)) / 255,
            alpha: 17 * Vr(e.charCodeAt(4)) / 255
          }
        case 7:
          return {
            red: (16 * Vr(e.charCodeAt(1)) + Vr(e.charCodeAt(2))) / 255,
            green: (16 * Vr(e.charCodeAt(3)) + Vr(e.charCodeAt(4))) / 255,
            blue: (16 * Vr(e.charCodeAt(5)) + Vr(e.charCodeAt(6))) / 255,
            alpha: 1
          }
        case 9:
          return {
            red: (16 * Vr(e.charCodeAt(1)) + Vr(e.charCodeAt(2))) / 255,
            green: (16 * Vr(e.charCodeAt(3)) + Vr(e.charCodeAt(4))) / 255,
            blue: (16 * Vr(e.charCodeAt(5)) + Vr(e.charCodeAt(6))) / 255,
            alpha: (16 * Vr(e.charCodeAt(7)) + Vr(e.charCodeAt(8))) / 255
          }
      }
      return null
    }
    var Wr = (function() {
      function e(e) {
        this.schemaService = e
      }
      return (
        (e.prototype.findDocumentSymbols = function(e, t, n) {
          var r = this
          void 0 === n && (n = {resultLimit: Number.MAX_VALUE})
          var i = t.root
          if (!i) return null
          var o = n.resultLimit,
            s = e.uri
          if (
            ('vscode://defaultsettings/keybindings.json' === s ||
              Sr(s.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var a = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u]
              if ('object' === l.type)
                for (var f = 0, h = l.properties; f < h.length; f++) {
                  var d = h[f]
                  if ('key' === d.keyNode.value && d.valueNode) {
                    var p = Vt.create(e.uri, qr(e, l))
                    if (
                      (a.push({
                        name: gr(d.valueNode),
                        kind: Tn.Function,
                        location: p
                      }),
                      --o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(s),
                        a
                      )
                  }
                }
            }
            return a
          }
          for (
            var m = [{node: i, containerName: ''}],
              g = 0,
              v = !1,
              y = [],
              b = function(t, n) {
                'array' === t.type
                  ? t.items.forEach(function(e) {
                      e && m.push({node: e, containerName: n})
                    })
                  : 'object' === t.type &&
                    t.properties.forEach(function(t) {
                      var i = t.valueNode
                      if (i)
                        if (o > 0) {
                          o--
                          var s = Vt.create(e.uri, qr(e, t)),
                            a = n ? n + '.' + t.keyNode.value : t.keyNode.value
                          y.push({
                            name: r.getKeyLabel(t),
                            kind: r.getSymbolKind(i.type),
                            location: s,
                            containerName: n
                          }),
                            m.push({node: i, containerName: a})
                        } else v = !0
                    })
              };
            g < m.length;

          ) {
            var _ = m[g++]
            b(_.node, _.containerName)
          }
          return (
            v && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), y
          )
        }),
        (e.prototype.findDocumentSymbols2 = function(e, t, n) {
          var r = this
          void 0 === n && (n = {resultLimit: Number.MAX_VALUE})
          var i = t.root
          if (!i) return null
          var o = n.resultLimit,
            s = e.uri
          if (
            ('vscode://defaultsettings/keybindings.json' === s ||
              Sr(s.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var a = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u]
              if ('object' === l.type)
                for (var f = 0, h = l.properties; f < h.length; f++) {
                  var d = h[f]
                  if ('key' === d.keyNode.value && d.valueNode) {
                    var p = qr(e, l),
                      m = qr(e, d.keyNode)
                    if (
                      (a.push({
                        name: gr(d.valueNode),
                        kind: Tn.Function,
                        range: p,
                        selectionRange: m
                      }),
                      --o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(s),
                        a
                      )
                  }
                }
            }
            return a
          }
          for (
            var g = [],
              v = [{node: i, result: g}],
              y = 0,
              b = !1,
              _ = function(t, n) {
                'array' === t.type
                  ? t.items.forEach(function(t, i) {
                      if (t)
                        if (o > 0) {
                          o--
                          var s = qr(e, t),
                            a = s,
                            u = {
                              name: String(i),
                              kind: r.getSymbolKind(t.type),
                              range: s,
                              selectionRange: a,
                              children: []
                            }
                          n.push(u), v.push({result: u.children, node: t})
                        } else b = !0
                    })
                  : 'object' === t.type &&
                    t.properties.forEach(function(t) {
                      var i = t.valueNode
                      if (i)
                        if (o > 0) {
                          o--
                          var s = qr(e, t),
                            a = qr(e, t.keyNode),
                            u = {
                              name: r.getKeyLabel(t),
                              kind: r.getSymbolKind(i.type),
                              range: s,
                              selectionRange: a,
                              children: []
                            }
                          n.push(u), v.push({result: u.children, node: i})
                        } else b = !0
                    })
              };
            y < v.length;

          ) {
            var C = v[y++]
            _(C.node, C.result)
          }
          return (
            b && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), g
          )
        }),
        (e.prototype.getSymbolKind = function(e) {
          switch (e) {
            case 'object':
              return Tn.Module
            case 'string':
              return Tn.String
            case 'number':
              return Tn.Number
            case 'array':
              return Tn.Array
            case 'boolean':
              return Tn.Boolean
            default:
              return Tn.Variable
          }
        }),
        (e.prototype.getKeyLabel = function(e) {
          var t = e.keyNode.value
          return (
            t && (t = t.replace(/[\n]/g, '↵')),
            t && t.trim() ? t : '"' + t + '"'
          )
        }),
        (e.prototype.findDocumentColors = function(e, t, n) {
          return this.schemaService
            .getSchemaForResource(e.uri, t)
            .then(function(r) {
              var i = []
              if (r)
                for (
                  var o =
                      n && 'number' == typeof n.resultLimit
                        ? n.resultLimit
                        : Number.MAX_VALUE,
                    s = {},
                    a = 0,
                    u = t.getMatchingSchemas(r.schema);
                  a < u.length;
                  a++
                ) {
                  var c = u[a]
                  if (
                    !c.inverted &&
                    c.schema &&
                    ('color' === c.schema.format ||
                      'color-hex' === c.schema.format) &&
                    c.node &&
                    'string' === c.node.type
                  ) {
                    var l = String(c.node.offset)
                    if (!s[l]) {
                      var f = Ur(gr(c.node))
                      if (f) {
                        var h = qr(e, c.node)
                        i.push({color: f, range: h})
                      }
                      if (((s[l] = !0), --o <= 0))
                        return (
                          n &&
                            n.onResultLimitExceeded &&
                            n.onResultLimitExceeded(e.uri),
                          i
                        )
                    }
                  }
                }
              return i
            })
        }),
        (e.prototype.getColorPresentations = function(e, t, n, r) {
          var i,
            o = [],
            s = Math.round(255 * n.red),
            a = Math.round(255 * n.green),
            u = Math.round(255 * n.blue)
          function c(e) {
            var t = e.toString(16)
            return 2 !== t.length ? '0' + t : t
          }
          return (
            (i =
              1 === n.alpha
                ? '#' + c(s) + c(a) + c(u)
                : '#' + c(s) + c(a) + c(u) + c(Math.round(255 * n.alpha))),
            o.push({label: i, textEdit: Qt.replace(r, JSON.stringify(i))}),
            o
          )
        }),
        e
      )
    })()
    function qr(e, t) {
      return Ft.create(
        e.positionAt(t.offset),
        e.positionAt(t.offset + t.length)
      )
    }
    var Kr,
      Br = Xn(),
      $r = {
        schemaAssociations: {},
        schemas: {
          'http://json-schema.org/draft-04/schema#': {
            title: Br(
              'schema.json',
              'Describes a JSON file using a schema. See json-schema.org for more info.'
            ),
            $schema: 'http://json-schema.org/draft-04/schema#',
            definitions: {
              schemaArray: {type: 'array', minItems: 1, items: {$ref: '#'}},
              positiveInteger: {type: 'integer', minimum: 0},
              positiveIntegerDefault0: {
                allOf: [{$ref: '#/definitions/positiveInteger'}, {default: 0}]
              },
              simpleTypes: {
                type: 'string',
                enum: [
                  'array',
                  'boolean',
                  'integer',
                  'null',
                  'number',
                  'object',
                  'string'
                ]
              },
              stringArray: {
                type: 'array',
                items: {type: 'string'},
                minItems: 1,
                uniqueItems: !0
              }
            },
            type: 'object',
            properties: {
              id: {type: 'string', format: 'uri'},
              $schema: {type: 'string', format: 'uri'},
              title: {type: 'string'},
              description: {type: 'string'},
              default: {},
              multipleOf: {type: 'number', minimum: 0, exclusiveMinimum: !0},
              maximum: {type: 'number'},
              exclusiveMaximum: {type: 'boolean', default: !1},
              minimum: {type: 'number'},
              exclusiveMinimum: {type: 'boolean', default: !1},
              maxLength: {allOf: [{$ref: '#/definitions/positiveInteger'}]},
              minLength: {
                allOf: [{$ref: '#/definitions/positiveIntegerDefault0'}]
              },
              pattern: {type: 'string', format: 'regex'},
              additionalItems: {
                anyOf: [{type: 'boolean'}, {$ref: '#'}],
                default: {}
              },
              items: {
                anyOf: [{$ref: '#'}, {$ref: '#/definitions/schemaArray'}],
                default: {}
              },
              maxItems: {allOf: [{$ref: '#/definitions/positiveInteger'}]},
              minItems: {
                allOf: [{$ref: '#/definitions/positiveIntegerDefault0'}]
              },
              uniqueItems: {type: 'boolean', default: !1},
              maxProperties: {allOf: [{$ref: '#/definitions/positiveInteger'}]},
              minProperties: {
                allOf: [{$ref: '#/definitions/positiveIntegerDefault0'}]
              },
              required: {allOf: [{$ref: '#/definitions/stringArray'}]},
              additionalProperties: {
                anyOf: [{type: 'boolean'}, {$ref: '#'}],
                default: {}
              },
              definitions: {
                type: 'object',
                additionalProperties: {$ref: '#'},
                default: {}
              },
              properties: {
                type: 'object',
                additionalProperties: {$ref: '#'},
                default: {}
              },
              patternProperties: {
                type: 'object',
                additionalProperties: {$ref: '#'},
                default: {}
              },
              dependencies: {
                type: 'object',
                additionalProperties: {
                  anyOf: [{$ref: '#'}, {$ref: '#/definitions/stringArray'}]
                }
              },
              enum: {type: 'array', minItems: 1, uniqueItems: !0},
              type: {
                anyOf: [
                  {$ref: '#/definitions/simpleTypes'},
                  {
                    type: 'array',
                    items: {$ref: '#/definitions/simpleTypes'},
                    minItems: 1,
                    uniqueItems: !0
                  }
                ]
              },
              format: {
                anyOf: [
                  {
                    type: 'string',
                    enum: [
                      'date-time',
                      'uri',
                      'email',
                      'hostname',
                      'ipv4',
                      'ipv6',
                      'regex'
                    ]
                  },
                  {type: 'string'}
                ]
              },
              allOf: {allOf: [{$ref: '#/definitions/schemaArray'}]},
              anyOf: {allOf: [{$ref: '#/definitions/schemaArray'}]},
              oneOf: {allOf: [{$ref: '#/definitions/schemaArray'}]},
              not: {allOf: [{$ref: '#'}]}
            },
            dependencies: {
              exclusiveMaximum: ['maximum'],
              exclusiveMinimum: ['minimum']
            },
            default: {}
          },
          'http://json-schema.org/draft-07/schema#': {
            title: Br(
              'schema.json',
              'Describes a JSON file using a schema. See json-schema.org for more info.'
            ),
            definitions: {
              schemaArray: {type: 'array', minItems: 1, items: {$ref: '#'}},
              nonNegativeInteger: {type: 'integer', minimum: 0},
              nonNegativeIntegerDefault0: {
                allOf: [
                  {$ref: '#/definitions/nonNegativeInteger'},
                  {default: 0}
                ]
              },
              simpleTypes: {
                enum: [
                  'array',
                  'boolean',
                  'integer',
                  'null',
                  'number',
                  'object',
                  'string'
                ]
              },
              stringArray: {
                type: 'array',
                items: {type: 'string'},
                uniqueItems: !0,
                default: []
              }
            },
            type: ['object', 'boolean'],
            properties: {
              $id: {type: 'string', format: 'uri-reference'},
              $schema: {type: 'string', format: 'uri'},
              $ref: {type: 'string', format: 'uri-reference'},
              $comment: {type: 'string'},
              title: {type: 'string'},
              description: {type: 'string'},
              default: !0,
              readOnly: {type: 'boolean', default: !1},
              examples: {type: 'array', items: !0},
              multipleOf: {type: 'number', exclusiveMinimum: 0},
              maximum: {type: 'number'},
              exclusiveMaximum: {type: 'number'},
              minimum: {type: 'number'},
              exclusiveMinimum: {type: 'number'},
              maxLength: {$ref: '#/definitions/nonNegativeInteger'},
              minLength: {$ref: '#/definitions/nonNegativeIntegerDefault0'},
              pattern: {type: 'string', format: 'regex'},
              additionalItems: {$ref: '#'},
              items: {
                anyOf: [{$ref: '#'}, {$ref: '#/definitions/schemaArray'}],
                default: !0
              },
              maxItems: {$ref: '#/definitions/nonNegativeInteger'},
              minItems: {$ref: '#/definitions/nonNegativeIntegerDefault0'},
              uniqueItems: {type: 'boolean', default: !1},
              contains: {$ref: '#'},
              maxProperties: {$ref: '#/definitions/nonNegativeInteger'},
              minProperties: {$ref: '#/definitions/nonNegativeIntegerDefault0'},
              required: {$ref: '#/definitions/stringArray'},
              additionalProperties: {$ref: '#'},
              definitions: {
                type: 'object',
                additionalProperties: {$ref: '#'},
                default: {}
              },
              properties: {
                type: 'object',
                additionalProperties: {$ref: '#'},
                default: {}
              },
              patternProperties: {
                type: 'object',
                additionalProperties: {$ref: '#'},
                propertyNames: {format: 'regex'},
                default: {}
              },
              dependencies: {
                type: 'object',
                additionalProperties: {
                  anyOf: [{$ref: '#'}, {$ref: '#/definitions/stringArray'}]
                }
              },
              propertyNames: {$ref: '#'},
              const: !0,
              enum: {type: 'array', items: !0, minItems: 1, uniqueItems: !0},
              type: {
                anyOf: [
                  {$ref: '#/definitions/simpleTypes'},
                  {
                    type: 'array',
                    items: {$ref: '#/definitions/simpleTypes'},
                    minItems: 1,
                    uniqueItems: !0
                  }
                ]
              },
              format: {type: 'string'},
              contentMediaType: {type: 'string'},
              contentEncoding: {type: 'string'},
              if: {$ref: '#'},
              then: {$ref: '#'},
              else: {$ref: '#'},
              allOf: {$ref: '#/definitions/schemaArray'},
              anyOf: {$ref: '#/definitions/schemaArray'},
              oneOf: {$ref: '#/definitions/schemaArray'},
              not: {$ref: '#'}
            },
            default: !0
          }
        }
      },
      Hr = {
        id: Br('schema.json.id', 'A unique identifier for the schema.'),
        $schema: Br(
          'schema.json.$schema',
          'The schema to verify this document against.'
        ),
        title: Br('schema.json.title', 'A descriptive title of the element.'),
        description: Br(
          'schema.json.description',
          'A long description of the element. Used in hover menus and suggestions.'
        ),
        default: Br(
          'schema.json.default',
          'A default value. Used by suggestions.'
        ),
        multipleOf: Br(
          'schema.json.multipleOf',
          'A number that should cleanly divide the current value (i.e. have no remainder).'
        ),
        maximum: Br(
          'schema.json.maximum',
          'The maximum numerical value, inclusive by default.'
        ),
        exclusiveMaximum: Br(
          'schema.json.exclusiveMaximum',
          'Makes the maximum property exclusive.'
        ),
        minimum: Br(
          'schema.json.minimum',
          'The minimum numerical value, inclusive by default.'
        ),
        exclusiveMinimum: Br(
          'schema.json.exclusiveMininum',
          'Makes the minimum property exclusive.'
        ),
        maxLength: Br(
          'schema.json.maxLength',
          'The maximum length of a string.'
        ),
        minLength: Br(
          'schema.json.minLength',
          'The minimum length of a string.'
        ),
        pattern: Br(
          'schema.json.pattern',
          'A regular expression to match the string against. It is not implicitly anchored.'
        ),
        additionalItems: Br(
          'schema.json.additionalItems',
          'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.'
        ),
        items: Br(
          'schema.json.items',
          'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.'
        ),
        maxItems: Br(
          'schema.json.maxItems',
          'The maximum number of items that can be inside an array. Inclusive.'
        ),
        minItems: Br(
          'schema.json.minItems',
          'The minimum number of items that can be inside an array. Inclusive.'
        ),
        uniqueItems: Br(
          'schema.json.uniqueItems',
          'If all of the items in the array must be unique. Defaults to false.'
        ),
        maxProperties: Br(
          'schema.json.maxProperties',
          'The maximum number of properties an object can have. Inclusive.'
        ),
        minProperties: Br(
          'schema.json.minProperties',
          'The minimum number of properties an object can have. Inclusive.'
        ),
        required: Br(
          'schema.json.required',
          'An array of strings that lists the names of all properties required on this object.'
        ),
        additionalProperties: Br(
          'schema.json.additionalProperties',
          "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
        ),
        definitions: Br(
          'schema.json.definitions',
          'Not used for validation. Place subschemas here that you wish to reference inline with $ref.'
        ),
        properties: Br(
          'schema.json.properties',
          'A map of property names to schemas for each property.'
        ),
        patternProperties: Br(
          'schema.json.patternProperties',
          'A map of regular expressions on property names to schemas for matching properties.'
        ),
        dependencies: Br(
          'schema.json.dependencies',
          'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.'
        ),
        enum: Br(
          'schema.json.enum',
          'The set of literal values that are valid.'
        ),
        type: Br(
          'schema.json.type',
          'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.'
        ),
        format: Br(
          'schema.json.format',
          'Describes the format expected for the value.'
        ),
        allOf: Br(
          'schema.json.allOf',
          'An array of schemas, all of which must match.'
        ),
        anyOf: Br(
          'schema.json.anyOf',
          'An array of schemas, where at least one must match.'
        ),
        oneOf: Br(
          'schema.json.oneOf',
          'An array of schemas, exactly one of which must match.'
        ),
        not: Br('schema.json.not', 'A schema which must not match.'),
        $id: Br('schema.json.$id', 'A unique identifier for the schema.'),
        $ref: Br(
          'schema.json.$ref',
          'Reference a definition hosted on any location.'
        ),
        $comment: Br(
          'schema.json.$comment',
          'Comments from schema authors to readers or maintainers of the schema.'
        ),
        readOnly: Br(
          'schema.json.readOnly',
          'Indicates that the value of the instance is managed exclusively by the owning authority.'
        ),
        examples: Br(
          'schema.json.examples',
          'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.'
        ),
        contains: Br(
          'schema.json.contains',
          'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'
        ),
        propertyNames: Br(
          'schema.json.propertyNames',
          'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.'
        ),
        const: Br(
          'schema.json.const',
          'An instance validates successfully against this keyword if its value is equal to the value of the keyword.'
        ),
        contentMediaType: Br(
          'schema.json.contentMediaType',
          'Describes the media type of a string property.'
        ),
        contentEncoding: Br(
          'schema.json.contentEncoding',
          'Describes the content encoding of a string property.'
        ),
        if: Br(
          'schema.json.if',
          'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'
        ),
        then: Br(
          'schema.json.then',
          'The "if" subschema is used for validation when the "if" subschema succeeds.'
        ),
        else: Br(
          'schema.json.else',
          'The "else" subschema is used for validation when the "if" subschema fails.'
        )
      }
    for (var Yr in $r.schemas) {
      var zr = $r.schemas[Yr]
      for (var Gr in zr.properties) {
        var Jr = zr.properties[Gr]
        !0 === Jr && (Jr = zr.properties[Gr] = {})
        var Qr = Hr[Gr]
        Qr
          ? (Jr.description = Qr)
          : console.log(Gr + ": localize('schema.json." + Gr + '\', "")')
      }
    }
    function Zr(e, t) {
      var n = [],
        r = [],
        i = [],
        o = -1,
        s = rn(e.getText(), !1),
        a = s.scan()
      function u(e) {
        n.push(e), r.push(i.length)
      }
      for (; 17 !== a; ) {
        switch (a) {
          case 1:
          case 3:
            var c = {
              startLine: (h = e.positionAt(s.getTokenOffset()).line),
              endLine: h,
              kind: 1 === a ? 'object' : 'array'
            }
            i.push(c)
            break
          case 2:
          case 4:
            var l = 2 === a ? 'object' : 'array'
            if (i.length > 0 && i[i.length - 1].kind === l) {
              c = i.pop()
              var f = e.positionAt(s.getTokenOffset()).line
              c &&
                f > c.startLine + 1 &&
                o !== c.startLine &&
                ((c.endLine = f - 1), u(c), (o = c.startLine))
            }
            break
          case 13:
            var h = e.positionAt(s.getTokenOffset()).line,
              d = e.positionAt(s.getTokenOffset() + s.getTokenLength()).line
            1 === s.getTokenError() && h + 1 < e.lineCount
              ? s.setPosition(e.offsetAt(jt.create(h + 1, 0)))
              : h < d &&
                (u({startLine: h, endLine: d, kind: Bt.Comment}), (o = h))
            break
          case 12:
            var p = e
              .getText()
              .substr(s.getTokenOffset(), s.getTokenLength())
              .match(/^\/\/\s*#(region\b)|(endregion\b)/)
            if (p) {
              f = e.positionAt(s.getTokenOffset()).line
              if (p[1]) {
                c = {startLine: f, endLine: f, kind: Bt.Region}
                i.push(c)
              } else {
                for (var m = i.length - 1; m >= 0 && i[m].kind !== Bt.Region; )
                  m--
                if (m >= 0) {
                  c = i[m]
                  ;(i.length = m),
                    f > c.startLine &&
                      o !== c.startLine &&
                      ((c.endLine = f), u(c), (o = c.startLine))
                }
              }
            }
        }
        a = s.scan()
      }
      var g = t && t.rangeLimit
      if ('number' != typeof g || n.length <= g) return n
      t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri)
      for (var v = [], y = 0, b = r; y < b.length; y++) {
        ;(x = b[y]) < 30 && (v[x] = (v[x] || 0) + 1)
      }
      var _ = 0,
        C = 0
      for (m = 0; m < v.length; m++) {
        var S = v[m]
        if (S) {
          if (S + _ > g) {
            C = m
            break
          }
          _ += S
        }
      }
      var E = []
      for (m = 0; m < n.length; m++) {
        var x
        'number' == typeof (x = r[m]) &&
          (x < C || (x === C && _++ < g)) &&
          E.push(n[m])
      }
      return E
    }
    function Xr(e, t, n) {
      function r(t, n) {
        return Ft.create(e.positionAt(t), e.positionAt(n))
      }
      var i = rn(e.getText(), !0)
      function o(e, t) {
        return (
          i.setPosition(e),
          i.scan() === t ? i.getTokenOffset() + i.getTokenLength() : -1
        )
      }
      return t.map(function(t) {
        for (
          var i = e.offsetAt(t), s = n.getNodeFromOffset(i, !0), a = [];
          s;

        ) {
          switch (s.type) {
            case 'string':
            case 'object':
            case 'array':
              var u = s.offset + 1,
                c = s.offset + s.length - 1
              u < c && i >= u && i <= c && a.push(r(u, c)),
                a.push(r(s.offset, s.offset + s.length))
              break
            case 'number':
            case 'boolean':
            case 'null':
            case 'property':
              a.push(r(s.offset, s.offset + s.length))
          }
          if (
            'property' === s.type ||
            (s.parent && 'array' === s.parent.type)
          ) {
            var l = o(s.offset + s.length, 5)
            ;-1 !== l && a.push(r(s.offset, l))
          }
          s = s.parent
        }
        for (var f = void 0, h = a.length - 1; h >= 0; h--)
          f = Vn.create(a[h], f)
        return f || (f = Vn.create(Ft.create(t, t))), f
      })
    }
    function ei(e) {
      var t = e.promiseConstructor || Promise,
        n = new Pr(e.schemaRequestService, e.workspaceContext, t)
      n.setSchemaContributions($r)
      var r = new xr(n, e.contributions, t, e.clientCapabilities),
        i = new wr(n, e.contributions, t),
        o = new Wr(n),
        s = new jr(n, t)
      return {
        configure: function(e) {
          n.clearExternalSchemas(),
            e.schemas &&
              e.schemas.forEach(function(e) {
                n.registerExternalSchema(e.uri, e.fileMatch, e.schema)
              }),
            s.configure(e)
        },
        resetSchema: function(e) {
          return n.onResourceChange(e)
        },
        doValidation: s.doValidation.bind(s),
        parseJSONDocument: function(e) {
          return Cr(e, {collectComments: !0})
        },
        newJSONDocument: function(e, t) {
          return (function(e, t) {
            return void 0 === t && (t = []), new br(e, t, [])
          })(e, t)
        },
        doResolve: r.doResolve.bind(r),
        doComplete: r.doComplete.bind(r),
        findDocumentSymbols: o.findDocumentSymbols.bind(o),
        findDocumentSymbols2: o.findDocumentSymbols2.bind(o),
        findColorSymbols: function(e, t) {
          return o.findDocumentColors(e, t).then(function(e) {
            return e.map(function(e) {
              return e.range
            })
          })
        },
        findDocumentColors: o.findDocumentColors.bind(o),
        getColorPresentations: o.getColorPresentations.bind(o),
        doHover: i.doHover.bind(i),
        getFoldingRanges: Zr,
        getSelectionRanges: Xr,
        format: function(e, t, n) {
          var r = void 0
          if (t) {
            var i = e.offsetAt(t.start)
            r = {offset: i, length: e.offsetAt(t.end) - i}
          }
          var o = {
            tabSize: n ? n.tabSize : 4,
            insertSpaces: !n || n.insertSpaces,
            eol: '\n'
          }
          return (function(e, t, n) {
            return It(e, t, n)
          })(e.getText(), r, o).map(function(t) {
            return Qt.replace(
              Ft.create(
                e.positionAt(t.offset),
                e.positionAt(t.offset + t.length)
              ),
              t.content
            )
          })
        }
      }
    }
    'undefined' != typeof fetch &&
      (Kr = function(e) {
        return fetch(e).then(function(e) {
          return e.text()
        })
      })
    var ti = (function() {
        function e(e) {
          this.wrapped = new Promise(e)
        }
        return (
          (e.prototype.then = function(e, t) {
            return this.wrapped.then(e, t)
          }),
          (e.prototype.getWrapped = function() {
            return this.wrapped
          }),
          (e.resolve = function(e) {
            return Promise.resolve(e)
          }),
          (e.reject = function(e) {
            return Promise.reject(e)
          }),
          (e.all = function(e) {
            return Promise.all(e)
          }),
          e
        )
      })(),
      ni = (function() {
        function e(e, t) {
          ;(this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId),
            (this._languageService = ei({
              schemaRequestService: t.enableSchemaRequest && Kr,
              promiseConstructor: ti
            })),
            this._languageService.configure(this._languageSettings)
        }
        return (
          (e.prototype.doValidation = function(e) {
            var t = this._getTextDocument(e)
            if (t) {
              var n = this._languageService.parseJSONDocument(t)
              return this._languageService.doValidation(t, n)
            }
            return Promise.resolve([])
          }),
          (e.prototype.doComplete = function(e, t) {
            var n = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(n)
            return this._languageService.doComplete(n, t, r)
          }),
          (e.prototype.doResolve = function(e) {
            return this._languageService.doResolve(e)
          }),
          (e.prototype.doHover = function(e, t) {
            var n = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(n)
            return this._languageService.doHover(n, t, r)
          }),
          (e.prototype.format = function(e, t, n) {
            var r = this._getTextDocument(e),
              i = this._languageService.format(r, t, n)
            return Promise.resolve(i)
          }),
          (e.prototype.resetSchema = function(e) {
            return Promise.resolve(this._languageService.resetSchema(e))
          }),
          (e.prototype.findDocumentSymbols = function(e) {
            var t = this._getTextDocument(e),
              n = this._languageService.parseJSONDocument(t),
              r = this._languageService.findDocumentSymbols(t, n)
            return Promise.resolve(r)
          }),
          (e.prototype.findDocumentColors = function(e) {
            var t = this._getTextDocument(e),
              n = this._languageService.parseJSONDocument(t),
              r = this._languageService.findDocumentColors(t, n)
            return Promise.resolve(r)
          }),
          (e.prototype.getColorPresentations = function(e, t, n) {
            var r = this._getTextDocument(e),
              i = this._languageService.parseJSONDocument(r),
              o = this._languageService.getColorPresentations(r, i, t, n)
            return Promise.resolve(o)
          }),
          (e.prototype.getFoldingRanges = function(e, t) {
            var n = this._getTextDocument(e),
              r = this._languageService.getFoldingRanges(n, t)
            return Promise.resolve(r)
          }),
          (e.prototype.getSelectionRanges = function(e, t) {
            var n = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(n),
              i = this._languageService.getSelectionRanges(n, t, r)
            return Promise.resolve(i)
          }),
          (e.prototype._getTextDocument = function(e) {
            for (
              var t = 0, n = this._ctx.getMirrorModels();
              t < n.length;
              t++
            ) {
              var r = n[t]
              if (r.uri.toString() === e)
                return Bn.create(e, this._languageId, r.version, r.getValue())
            }
            return null
          }),
          e
        )
      })()
    self.onmessage = function() {
      Lt(function(e, t) {
        return new ni(e, t)
      })
    }
  }
])
//# sourceMappingURL=json.worker.js.map
