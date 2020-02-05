;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    783: function(e, t, r) {
      'use strict'
      r.r(t)
      var n,
        i = (function() {
          function e(e) {
            var t = this
            ;(this._defaults = e),
              (this._worker = null),
              (this._idleCheckInterval = setInterval(function() {
                return t._checkIfIdle()
              }, 3e4)),
              (this._lastUsedTime = 0),
              (this._configChangeListener = this._defaults.onDidChange(
                function() {
                  return t._stopWorker()
                }
              ))
          }
          return (
            (e.prototype._stopWorker = function() {
              this._worker && (this._worker.dispose(), (this._worker = null)),
                (this._client = null)
            }),
            (e.prototype.dispose = function() {
              clearInterval(this._idleCheckInterval),
                this._configChangeListener.dispose(),
                this._stopWorker()
            }),
            (e.prototype._checkIfIdle = function() {
              this._worker &&
                (Date.now() - this._lastUsedTime > 12e4 && this._stopWorker())
            }),
            (e.prototype._getClient = function() {
              return (
                (this._lastUsedTime = Date.now()),
                this._client ||
                  ((this._worker = monaco.editor.createWebWorker({
                    moduleId: 'vs/language/json/jsonWorker',
                    label: this._defaults.languageId,
                    createData: {
                      languageSettings: this._defaults.diagnosticsOptions,
                      languageId: this._defaults.languageId,
                      enableSchemaRequest: this._defaults.diagnosticsOptions
                        .enableSchemaRequest
                    }
                  })),
                  (this._client = this._worker.getProxy())),
                this._client
              )
            }),
            (e.prototype.getLanguageServiceWorker = function() {
              for (var e, t = this, r = [], n = 0; n < arguments.length; n++)
                r[n] = arguments[n]
              return this._getClient()
                .then(function(t) {
                  e = t
                })
                .then(function(e) {
                  return t._worker.withSyncedResources(r)
                })
                .then(function(t) {
                  return e
                })
            }),
            e
          )
        })()
      function o(e, t) {
        void 0 === t && (t = !1)
        var r = e.length,
          n = 0,
          i = '',
          o = 0,
          c = 16,
          l = 0,
          f = 0,
          h = 0,
          p = 0,
          m = 0
        function d(t, r) {
          for (var i = 0, o = 0; i < t || !r; ) {
            var a = e.charCodeAt(n)
            if (a >= 48 && a <= 57) o = 16 * o + a - 48
            else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10
            else {
              if (!(a >= 97 && a <= 102)) break
              o = 16 * o + a - 97 + 10
            }
            n++, i++
          }
          return i < t && (o = -1), o
        }
        function g() {
          if (((i = ''), (m = 0), (o = n), (f = l), (p = h), n >= r))
            return (o = r), (c = 17)
          var t = e.charCodeAt(n)
          if (a(t)) {
            do {
              n++, (i += String.fromCharCode(t)), (t = e.charCodeAt(n))
            } while (a(t))
            return (c = 15)
          }
          if (s(t))
            return (
              n++,
              (i += String.fromCharCode(t)),
              13 === t && 10 === e.charCodeAt(n) && (n++, (i += '\n')),
              l++,
              (h = n),
              (c = 14)
            )
          switch (t) {
            case 123:
              return n++, (c = 1)
            case 125:
              return n++, (c = 2)
            case 91:
              return n++, (c = 3)
            case 93:
              return n++, (c = 4)
            case 58:
              return n++, (c = 6)
            case 44:
              return n++, (c = 5)
            case 34:
              return (
                n++,
                (i = (function() {
                  for (var t = '', i = n; ; ) {
                    if (n >= r) {
                      ;(t += e.substring(i, n)), (m = 2)
                      break
                    }
                    var o = e.charCodeAt(n)
                    if (34 === o) {
                      ;(t += e.substring(i, n)), n++
                      break
                    }
                    if (92 !== o) {
                      if (o >= 0 && o <= 31) {
                        if (s(o)) {
                          ;(t += e.substring(i, n)), (m = 2)
                          break
                        }
                        m = 6
                      }
                      n++
                    } else {
                      if (((t += e.substring(i, n)), ++n >= r)) {
                        m = 2
                        break
                      }
                      switch (e.charCodeAt(n++)) {
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
                          var a = d(4, !0)
                          a >= 0 ? (t += String.fromCharCode(a)) : (m = 4)
                          break
                        default:
                          m = 5
                      }
                      i = n
                    }
                  }
                  return t
                })()),
                (c = 10)
              )
            case 47:
              var g = n - 1
              if (47 === e.charCodeAt(n + 1)) {
                for (n += 2; n < r && !s(e.charCodeAt(n)); ) n++
                return (i = e.substring(g, n)), (c = 12)
              }
              if (42 === e.charCodeAt(n + 1)) {
                n += 2
                for (var y = r - 1, b = !1; n < y; ) {
                  var x = e.charCodeAt(n)
                  if (42 === x && 47 === e.charCodeAt(n + 1)) {
                    ;(n += 2), (b = !0)
                    break
                  }
                  n++,
                    s(x) &&
                      (13 === x && 10 === e.charCodeAt(n) && n++, l++, (h = n))
                }
                return b || (n++, (m = 1)), (i = e.substring(g, n)), (c = 13)
              }
              return (i += String.fromCharCode(t)), n++, (c = 16)
            case 45:
              if (
                ((i += String.fromCharCode(t)),
                ++n === r || !u(e.charCodeAt(n)))
              )
                return (c = 16)
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
                  var t = n
                  if (48 === e.charCodeAt(n)) n++
                  else for (n++; n < e.length && u(e.charCodeAt(n)); ) n++
                  if (n < e.length && 46 === e.charCodeAt(n)) {
                    if (!(++n < e.length && u(e.charCodeAt(n))))
                      return (m = 3), e.substring(t, n)
                    for (n++; n < e.length && u(e.charCodeAt(n)); ) n++
                  }
                  var r = n
                  if (
                    n < e.length &&
                    (69 === e.charCodeAt(n) || 101 === e.charCodeAt(n))
                  )
                    if (
                      (((++n < e.length && 43 === e.charCodeAt(n)) ||
                        45 === e.charCodeAt(n)) &&
                        n++,
                      n < e.length && u(e.charCodeAt(n)))
                    ) {
                      for (n++; n < e.length && u(e.charCodeAt(n)); ) n++
                      r = n
                    } else m = 3
                  return e.substring(t, r)
                })()),
                (c = 11)
              )
            default:
              for (; n < r && v(t); ) n++, (t = e.charCodeAt(n))
              if (o !== n) {
                switch ((i = e.substring(o, n))) {
                  case 'true':
                    return (c = 8)
                  case 'false':
                    return (c = 9)
                  case 'null':
                    return (c = 7)
                }
                return (c = 16)
              }
              return (i += String.fromCharCode(t)), n++, (c = 16)
          }
        }
        function v(e) {
          if (a(e) || s(e)) return !1
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
            ;(n = e), (i = ''), (o = 0), (c = 16), (m = 0)
          },
          getPosition: function() {
            return n
          },
          scan: t
            ? function() {
                var e
                do {
                  e = g()
                } while (e >= 12 && e <= 15)
                return e
              }
            : g,
          getToken: function() {
            return c
          },
          getTokenValue: function() {
            return i
          },
          getTokenOffset: function() {
            return o
          },
          getTokenLength: function() {
            return n - o
          },
          getTokenStartLine: function() {
            return f
          },
          getTokenStartCharacter: function() {
            return o - p
          },
          getTokenError: function() {
            return m
          }
        }
      }
      function a(e) {
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
      function s(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e
      }
      function u(e) {
        return e >= 48 && e <= 57
      }
      function c(e, t, r) {
        void 0 === r && (r = n.DEFAULT)
        var i = o(e, !1)
        function a(e) {
          return e
            ? function() {
                return e(
                  i.getTokenOffset(),
                  i.getTokenLength(),
                  i.getTokenStartLine(),
                  i.getTokenStartCharacter()
                )
              }
            : function() {
                return !0
              }
        }
        function s(e) {
          return e
            ? function(t) {
                return e(
                  t,
                  i.getTokenOffset(),
                  i.getTokenLength(),
                  i.getTokenStartLine(),
                  i.getTokenStartCharacter()
                )
              }
            : function() {
                return !0
              }
        }
        var u = a(t.onObjectBegin),
          c = s(t.onObjectProperty),
          l = a(t.onObjectEnd),
          f = a(t.onArrayBegin),
          h = a(t.onArrayEnd),
          p = s(t.onLiteralValue),
          m = s(t.onSeparator),
          d = a(t.onComment),
          g = s(t.onError),
          v = r && r.disallowComments,
          y = r && r.allowTrailingComma
        function b() {
          for (;;) {
            var e = i.scan()
            switch (i.getTokenError()) {
              case 4:
                x(14)
                break
              case 5:
                x(15)
                break
              case 3:
                x(13)
                break
              case 1:
                v || x(11)
                break
              case 2:
                x(12)
                break
              case 6:
                x(16)
            }
            switch (e) {
              case 12:
              case 13:
                v ? x(10) : d()
                break
              case 16:
                x(1)
                break
              case 15:
              case 14:
                break
              default:
                return e
            }
          }
        }
        function x(e, t, r) {
          if (
            (void 0 === t && (t = []),
            void 0 === r && (r = []),
            g(e),
            t.length + r.length > 0)
          )
            for (var n = i.getToken(); 17 !== n; ) {
              if (-1 !== t.indexOf(n)) {
                b()
                break
              }
              if (-1 !== r.indexOf(n)) break
              n = b()
            }
        }
        function S(e) {
          var t = i.getTokenValue()
          return e ? p(t) : c(t), b(), !0
        }
        function k() {
          switch (i.getToken()) {
            case 3:
              return (function() {
                f(), b()
                for (var e = !1; 4 !== i.getToken() && 17 !== i.getToken(); ) {
                  if (5 === i.getToken()) {
                    if (
                      (e || x(4, [], []), m(','), b(), 4 === i.getToken() && y)
                    )
                      break
                  } else e && x(6, [], [])
                  k() || x(4, [], [4, 5]), (e = !0)
                }
                return h(), 4 !== i.getToken() ? x(8, [4], []) : b(), !0
              })()
            case 1:
              return (function() {
                u(), b()
                for (var e = !1; 2 !== i.getToken() && 17 !== i.getToken(); ) {
                  if (5 === i.getToken()) {
                    if (
                      (e || x(4, [], []), m(','), b(), 2 === i.getToken() && y)
                    )
                      break
                  } else e && x(6, [], [])
                  ;(10 !== i.getToken()
                    ? (x(3, [], [2, 5]), 0)
                    : (S(!1),
                      6 === i.getToken()
                        ? (m(':'), b(), k() || x(4, [], [2, 5]))
                        : x(5, [], [2, 5]),
                      1)) || x(4, [], [2, 5]),
                    (e = !0)
                }
                return l(), 2 !== i.getToken() ? x(7, [2], []) : b(), !0
              })()
            case 10:
              return S(!0)
            default:
              return (function() {
                switch (i.getToken()) {
                  case 11:
                    var e = 0
                    try {
                      'number' != typeof (e = JSON.parse(i.getTokenValue())) &&
                        (x(2), (e = 0))
                    } catch (e) {
                      x(2)
                    }
                    p(e)
                    break
                  case 7:
                    p(null)
                    break
                  case 8:
                    p(!0)
                    break
                  case 9:
                    p(!1)
                    break
                  default:
                    return !1
                }
                return b(), !0
              })()
          }
        }
        return (
          b(),
          17 === i.getToken()
            ? !!r.allowEmptyContent || (x(4, [], []), !1)
            : k()
              ? (17 !== i.getToken() && x(9, [], []), !0)
              : (x(4, [], []), !1)
        )
      }
      !(function(e) {
        e.DEFAULT = {allowTrailingComma: !1}
      })(n || (n = {}))
      var l,
        f,
        h,
        p,
        m,
        d,
        g,
        v,
        y,
        b,
        x,
        S,
        k,
        C,
        w,
        A,
        I,
        T,
        E,
        O,
        j = o,
        P = function(e, t, r) {
          void 0 === t && (t = []), void 0 === r && (r = n.DEFAULT)
          var i = null,
            o = [],
            a = []
          function s(e) {
            Array.isArray(o) ? o.push(e) : null !== i && (o[i] = e)
          }
          return (
            c(
              e,
              {
                onObjectBegin: function() {
                  var e = {}
                  s(e), a.push(o), (o = e), (i = null)
                },
                onObjectProperty: function(e) {
                  i = e
                },
                onObjectEnd: function() {
                  o = a.pop()
                },
                onArrayBegin: function() {
                  var e = []
                  s(e), a.push(o), (o = e), (i = null)
                },
                onArrayEnd: function() {
                  o = a.pop()
                },
                onLiteralValue: s,
                onError: function(e, r, n) {
                  t.push({error: e, offset: r, length: n})
                }
              },
              r
            ),
            o[0]
          )
        },
        M = function e(t, r, n) {
          if (
            (void 0 === n && (n = !1),
            (function(e, t, r) {
              return (
                void 0 === r && (r = !1),
                (t >= e.offset && t < e.offset + e.length) ||
                  (r && t === e.offset + e.length)
              )
            })(t, r, n))
          ) {
            var i = t.children
            if (Array.isArray(i))
              for (var o = 0; o < i.length && i[o].offset <= r; o++) {
                var a = e(i[o], r, n)
                if (a) return a
              }
            return t
          }
        },
        _ = function e(t) {
          if (!t.parent || !t.parent.children) return []
          var r = e(t.parent)
          if ('property' === t.parent.type) {
            var n = t.parent.children[0].value
            r.push(n)
          } else if ('array' === t.parent.type) {
            var i = t.parent.children.indexOf(t)
            ;-1 !== i && r.push(i)
          }
          return r
        },
        V = function e(t) {
          switch (t.type) {
            case 'array':
              return t.children.map(e)
            case 'object':
              for (
                var r = Object.create(null), n = 0, i = t.children;
                n < i.length;
                n++
              ) {
                var o = i[n],
                  a = o.children[1]
                a && (r[o.children[0].value] = e(a))
              }
              return r
            case 'null':
            case 'string':
            case 'number':
            case 'boolean':
              return t.value
            default:
              return
          }
        }
      function F(e, t) {
        if (e === t) return !0
        if (null == e || null == t) return !1
        if (typeof e != typeof t) return !1
        if ('object' != typeof e) return !1
        if (Array.isArray(e) !== Array.isArray(t)) return !1
        var r, n
        if (Array.isArray(e)) {
          if (e.length !== t.length) return !1
          for (r = 0; r < e.length; r++) if (!F(e[r], t[r])) return !1
        } else {
          var i = []
          for (n in e) i.push(n)
          i.sort()
          var o = []
          for (n in t) o.push(n)
          if ((o.sort(), !F(i, o))) return !1
          for (r = 0; r < i.length; r++) if (!F(e[i[r]], t[i[r]])) return !1
        }
        return !0
      }
      function N(e) {
        return 'number' == typeof e
      }
      function R(e) {
        return void 0 !== e
      }
      function $(e) {
        return 'boolean' == typeof e
      }
      !(function(e) {
        ;(e.create = function(e, t) {
          return {line: e, character: t}
        }),
          (e.is = function(e) {
            var t = e
            return (
              me.objectLiteral(t) && me.number(t.line) && me.number(t.character)
            )
          })
      })(l || (l = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n) {
            if (me.number(e) && me.number(t) && me.number(r) && me.number(n))
              return {start: l.create(e, t), end: l.create(r, n)}
            if (l.is(e) && l.is(t)) return {start: e, end: t}
            throw new Error(
              'Range#create called with invalid arguments[' +
                e +
                ', ' +
                t +
                ', ' +
                r +
                ', ' +
                n +
                ']'
            )
          }),
            (e.is = function(e) {
              var t = e
              return me.objectLiteral(t) && l.is(t.start) && l.is(t.end)
            })
        })(f || (f = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {uri: e, range: t}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                f.is(t.range) &&
                (me.string(t.uri) || me.undefined(t.uri))
              )
            })
        })(h || (h = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n) {
            return {
              targetUri: e,
              targetRange: t,
              targetSelectionRange: r,
              originSelectionRange: n
            }
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                f.is(t.targetRange) &&
                me.string(t.targetUri) &&
                (f.is(t.targetSelectionRange) ||
                  me.undefined(t.targetSelectionRange)) &&
                (f.is(t.originSelectionRange) ||
                  me.undefined(t.originSelectionRange))
              )
            })
        })(p || (p = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n) {
            return {red: e, green: t, blue: r, alpha: n}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.number(t.red) &&
                me.number(t.green) &&
                me.number(t.blue) &&
                me.number(t.alpha)
              )
            })
        })(m || (m = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {range: e, color: t}
          }),
            (e.is = function(e) {
              var t = e
              return f.is(t.range) && m.is(t.color)
            })
        })(d || (d = {})),
        (function(e) {
          ;(e.create = function(e, t, r) {
            return {label: e, textEdit: t, additionalTextEdits: r}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.string(t.label) &&
                (me.undefined(t.textEdit) || w.is(t)) &&
                (me.undefined(t.additionalTextEdits) ||
                  me.typedArray(t.additionalTextEdits, w.is))
              )
            })
        })(g || (g = {})),
        (function(e) {
          ;(e.Comment = 'comment'),
            (e.Imports = 'imports'),
            (e.Region = 'region')
        })(v || (v = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n, i) {
            var o = {startLine: e, endLine: t}
            return (
              me.defined(r) && (o.startCharacter = r),
              me.defined(n) && (o.endCharacter = n),
              me.defined(i) && (o.kind = i),
              o
            )
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.number(t.startLine) &&
                me.number(t.startLine) &&
                (me.undefined(t.startCharacter) ||
                  me.number(t.startCharacter)) &&
                (me.undefined(t.endCharacter) || me.number(t.endCharacter)) &&
                (me.undefined(t.kind) || me.string(t.kind))
              )
            })
        })(y || (y = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {location: e, message: t}
          }),
            (e.is = function(e) {
              var t = e
              return me.defined(t) && h.is(t.location) && me.string(t.message)
            })
        })(b || (b = {})),
        (function(e) {
          ;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
        })(x || (x = {})),
        (function(e) {
          ;(e.Unnecessary = 1), (e.Deprecated = 2)
        })(S || (S = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n, i, o) {
            var a = {range: e, message: t}
            return (
              me.defined(r) && (a.severity = r),
              me.defined(n) && (a.code = n),
              me.defined(i) && (a.source = i),
              me.defined(o) && (a.relatedInformation = o),
              a
            )
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                f.is(t.range) &&
                me.string(t.message) &&
                (me.number(t.severity) || me.undefined(t.severity)) &&
                (me.number(t.code) ||
                  me.string(t.code) ||
                  me.undefined(t.code)) &&
                (me.string(t.source) || me.undefined(t.source)) &&
                (me.undefined(t.relatedInformation) ||
                  me.typedArray(t.relatedInformation, b.is))
              )
            })
        })(k || (k = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n]
            var i = {title: e, command: t}
            return me.defined(r) && r.length > 0 && (i.arguments = r), i
          }),
            (e.is = function(e) {
              var t = e
              return me.defined(t) && me.string(t.title) && me.string(t.command)
            })
        })(C || (C = {})),
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
              return (
                me.objectLiteral(t) && me.string(t.newText) && f.is(t.range)
              )
            })
        })(w || (w = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {textDocument: e, edits: t}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) && D.is(t.textDocument) && Array.isArray(t.edits)
              )
            })
        })(A || (A = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            var r = {kind: 'create', uri: e}
            return (
              void 0 === t ||
                (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
                (r.options = t),
              r
            )
          }),
            (e.is = function(e) {
              var t = e
              return (
                t &&
                'create' === t.kind &&
                me.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    me.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      me.boolean(t.options.ignoreIfExists))))
              )
            })
        })(I || (I = {})),
        (function(e) {
          ;(e.create = function(e, t, r) {
            var n = {kind: 'rename', oldUri: e, newUri: t}
            return (
              void 0 === r ||
                (void 0 === r.overwrite && void 0 === r.ignoreIfExists) ||
                (n.options = r),
              n
            )
          }),
            (e.is = function(e) {
              var t = e
              return (
                t &&
                'rename' === t.kind &&
                me.string(t.oldUri) &&
                me.string(t.newUri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    me.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      me.boolean(t.options.ignoreIfExists))))
              )
            })
        })(T || (T = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            var r = {kind: 'delete', uri: e}
            return (
              void 0 === t ||
                (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
                (r.options = t),
              r
            )
          }),
            (e.is = function(e) {
              var t = e
              return (
                t &&
                'delete' === t.kind &&
                me.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.recursive ||
                    me.boolean(t.options.recursive)) &&
                    (void 0 === t.options.ignoreIfNotExists ||
                      me.boolean(t.options.ignoreIfNotExists))))
              )
            })
        })(E || (E = {})),
        (function(e) {
          e.is = function(e) {
            var t = e
            return (
              t &&
              (void 0 !== t.changes || void 0 !== t.documentChanges) &&
              (void 0 === t.documentChanges ||
                t.documentChanges.every(function(e) {
                  return me.string(e.kind)
                    ? I.is(e) || T.is(e) || E.is(e)
                    : A.is(e)
                }))
            )
          }
        })(O || (O = {}))
      var L,
        D,
        W,
        U,
        q,
        B,
        K,
        J,
        z,
        H,
        G,
        Z,
        X,
        Q,
        Y,
        ee,
        te,
        re,
        ne,
        ie,
        oe,
        ae,
        se,
        ue,
        ce,
        le,
        fe,
        he = (function() {
          function e(e) {
            this.edits = e
          }
          return (
            (e.prototype.insert = function(e, t) {
              this.edits.push(w.insert(e, t))
            }),
            (e.prototype.replace = function(e, t) {
              this.edits.push(w.replace(e, t))
            }),
            (e.prototype.delete = function(e) {
              this.edits.push(w.del(e))
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
                    if (A.is(e)) {
                      var r = new he(e.edits)
                      t._textEditChanges[e.textDocument.uri] = r
                    }
                  })
                : e.changes &&
                  Object.keys(e.changes).forEach(function(r) {
                    var n = new he(e.changes[r])
                    t._textEditChanges[r] = n
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
            if (D.is(e)) {
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = {documentChanges: []}),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  'Workspace edit is not configured for document changes.'
                )
              var t = e
              if (!(n = this._textEditChanges[t.uri])) {
                var r = {textDocument: t, edits: (i = [])}
                this._workspaceEdit.documentChanges.push(r),
                  (n = new he(i)),
                  (this._textEditChanges[t.uri] = n)
              }
              return n
            }
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = {changes: Object.create(null)}),
              !this._workspaceEdit.changes)
            )
              throw new Error(
                'Workspace edit is not configured for normal text edit changes.'
              )
            var n
            if (!(n = this._textEditChanges[e])) {
              var i = []
              ;(this._workspaceEdit.changes[e] = i),
                (n = new he(i)),
                (this._textEditChanges[e] = n)
            }
            return n
          }),
          (e.prototype.createFile = function(e, t) {
            this.checkDocumentChanges(),
              this._workspaceEdit.documentChanges.push(I.create(e, t))
          }),
          (e.prototype.renameFile = function(e, t, r) {
            this.checkDocumentChanges(),
              this._workspaceEdit.documentChanges.push(T.create(e, t, r))
          }),
          (e.prototype.deleteFile = function(e, t) {
            this.checkDocumentChanges(),
              this._workspaceEdit.documentChanges.push(E.create(e, t))
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
            return me.defined(t) && me.string(t.uri)
          })
      })(L || (L = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {uri: e, version: t}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                me.string(t.uri) &&
                (null === t.version || me.number(t.version))
              )
            })
        })(D || (D = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n) {
            return {uri: e, languageId: t, version: r, text: n}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                me.string(t.uri) &&
                me.string(t.languageId) &&
                me.number(t.version) &&
                me.string(t.text)
              )
            })
        })(W || (W = {})),
        (function(e) {
          ;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
        })(U || (U = {})),
        (function(e) {
          e.is = function(t) {
            var r = t
            return r === e.PlainText || r === e.Markdown
          }
        })(U || (U = {})),
        (function(e) {
          e.is = function(e) {
            var t = e
            return me.objectLiteral(e) && U.is(t.kind) && me.string(t.value)
          }
        })(q || (q = {})),
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
        })(B || (B = {})),
        (function(e) {
          ;(e.PlainText = 1), (e.Snippet = 2)
        })(K || (K = {})),
        (function(e) {
          e.Deprecated = 1
        })(J || (J = {})),
        (function(e) {
          e.create = function(e) {
            return {label: e}
          }
        })(z || (z = {})),
        (function(e) {
          e.create = function(e, t) {
            return {items: e || [], isIncomplete: !!t}
          }
        })(H || (H = {})),
        (function(e) {
          ;(e.fromPlainText = function(e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.string(t) ||
                (me.objectLiteral(t) &&
                  me.string(t.language) &&
                  me.string(t.value))
              )
            })
        })(G || (G = {})),
        (function(e) {
          e.is = function(e) {
            var t = e
            return (
              !!t &&
              me.objectLiteral(t) &&
              (q.is(t.contents) ||
                G.is(t.contents) ||
                me.typedArray(t.contents, G.is)) &&
              (void 0 === e.range || f.is(e.range))
            )
          }
        })(Z || (Z = {})),
        (function(e) {
          e.create = function(e, t) {
            return t ? {label: e, documentation: t} : {label: e}
          }
        })(X || (X = {})),
        (function(e) {
          e.create = function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n]
            var i = {label: e}
            return (
              me.defined(t) && (i.documentation = t),
              me.defined(r) ? (i.parameters = r) : (i.parameters = []),
              i
            )
          }
        })(Q || (Q = {})),
        (function(e) {
          ;(e.Text = 1), (e.Read = 2), (e.Write = 3)
        })(Y || (Y = {})),
        (function(e) {
          e.create = function(e, t) {
            var r = {range: e}
            return me.number(t) && (r.kind = t), r
          }
        })(ee || (ee = {})),
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
        })(te || (te = {})),
        (function(e) {
          e.Deprecated = 1
        })(re || (re = {})),
        (function(e) {
          e.create = function(e, t, r, n, i) {
            var o = {name: e, kind: t, location: {uri: n, range: r}}
            return i && (o.containerName = i), o
          }
        })(ne || (ne = {})),
        (function(e) {
          ;(e.create = function(e, t, r, n, i, o) {
            var a = {name: e, detail: t, kind: r, range: n, selectionRange: i}
            return void 0 !== o && (a.children = o), a
          }),
            (e.is = function(e) {
              var t = e
              return (
                t &&
                me.string(t.name) &&
                me.number(t.kind) &&
                f.is(t.range) &&
                f.is(t.selectionRange) &&
                (void 0 === t.detail || me.string(t.detail)) &&
                (void 0 === t.deprecated || me.boolean(t.deprecated)) &&
                (void 0 === t.children || Array.isArray(t.children))
              )
            })
        })(ie || (ie = {})),
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
        })(oe || (oe = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            var r = {diagnostics: e}
            return null != t && (r.only = t), r
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                me.typedArray(t.diagnostics, k.is) &&
                (void 0 === t.only || me.typedArray(t.only, me.string))
              )
            })
        })(ae || (ae = {})),
        (function(e) {
          ;(e.create = function(e, t, r) {
            var n = {title: e}
            return (
              C.is(t) ? (n.command = t) : (n.edit = t),
              void 0 !== r && (n.kind = r),
              n
            )
          }),
            (e.is = function(e) {
              var t = e
              return (
                t &&
                me.string(t.title) &&
                (void 0 === t.diagnostics ||
                  me.typedArray(t.diagnostics, k.is)) &&
                (void 0 === t.kind || me.string(t.kind)) &&
                (void 0 !== t.edit || void 0 !== t.command) &&
                (void 0 === t.command || C.is(t.command)) &&
                (void 0 === t.isPreferred || me.boolean(t.isPreferred)) &&
                (void 0 === t.edit || O.is(t.edit))
              )
            })
        })(se || (se = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            var r = {range: e}
            return me.defined(t) && (r.data = t), r
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                f.is(t.range) &&
                (me.undefined(t.command) || C.is(t.command))
              )
            })
        })(ue || (ue = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {tabSize: e, insertSpaces: t}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                me.number(t.tabSize) &&
                me.boolean(t.insertSpaces)
              )
            })
        })(ce || (ce = {})),
        (function(e) {
          ;(e.create = function(e, t, r) {
            return {range: e, target: t, data: r}
          }),
            (e.is = function(e) {
              var t = e
              return (
                me.defined(t) &&
                f.is(t.range) &&
                (me.undefined(t.target) || me.string(t.target))
              )
            })
        })(le || (le = {})),
        (function(e) {
          ;(e.create = function(e, t) {
            return {range: e, parent: t}
          }),
            (e.is = function(t) {
              var r = t
              return (
                void 0 !== r &&
                f.is(r.range) &&
                (void 0 === r.parent || e.is(r.parent))
              )
            })
        })(fe || (fe = {}))
      var pe
      !(function(e) {
        ;(e.create = function(e, t, r, n) {
          return new de(e, t, r, n)
        }),
          (e.is = function(e) {
            var t = e
            return !!(
              me.defined(t) &&
              me.string(t.uri) &&
              (me.undefined(t.languageId) || me.string(t.languageId)) &&
              me.number(t.lineCount) &&
              me.func(t.getText) &&
              me.func(t.positionAt) &&
              me.func(t.offsetAt)
            )
          }),
          (e.applyEdits = function(e, t) {
            for (
              var r = e.getText(),
                n = (function e(t, r) {
                  if (t.length <= 1) return t
                  var n = (t.length / 2) | 0,
                    i = t.slice(0, n),
                    o = t.slice(n)
                  e(i, r), e(o, r)
                  var a = 0,
                    s = 0,
                    u = 0
                  for (; a < i.length && s < o.length; ) {
                    var c = r(i[a], o[s])
                    t[u++] = c <= 0 ? i[a++] : o[s++]
                  }
                  for (; a < i.length; ) t[u++] = i[a++]
                  for (; s < o.length; ) t[u++] = o[s++]
                  return t
                })(t, function(e, t) {
                  var r = e.range.start.line - t.range.start.line
                  return 0 === r
                    ? e.range.start.character - t.range.start.character
                    : r
                }),
                i = r.length,
                o = n.length - 1;
              o >= 0;
              o--
            ) {
              var a = n[o],
                s = e.offsetAt(a.range.start),
                u = e.offsetAt(a.range.end)
              if (!(u <= i)) throw new Error('Overlapping edit')
              ;(r = r.substring(0, s) + a.newText + r.substring(u, r.length)),
                (i = s)
            }
            return r
          })
      })(pe || (pe = {}))
      var me,
        de = (function() {
          function e(e, t, r, n) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = r),
              (this._content = n),
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
                  r = this.offsetAt(e.end)
                return this._content.substring(t, r)
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
                  var e = [], t = this._content, r = !0, n = 0;
                  n < t.length;
                  n++
                ) {
                  r && (e.push(n), (r = !1))
                  var i = t.charAt(n)
                  ;(r = '\r' === i || '\n' === i),
                    '\r' === i &&
                      n + 1 < t.length &&
                      '\n' === t.charAt(n + 1) &&
                      n++
                }
                r && t.length > 0 && e.push(t.length), (this._lineOffsets = e)
              }
              return this._lineOffsets
            }),
            (e.prototype.positionAt = function(e) {
              e = Math.max(Math.min(e, this._content.length), 0)
              var t = this.getLineOffsets(),
                r = 0,
                n = t.length
              if (0 === n) return l.create(0, e)
              for (; r < n; ) {
                var i = Math.floor((r + n) / 2)
                t[i] > e ? (n = i) : (r = i + 1)
              }
              var o = r - 1
              return l.create(o, e - t[o])
            }),
            (e.prototype.offsetAt = function(e) {
              var t = this.getLineOffsets()
              if (e.line >= t.length) return this._content.length
              if (e.line < 0) return 0
              var r = t[e.line],
                n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
              return Math.max(Math.min(r + e.character, n), r)
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
      })(me || (me = {}))
      var ge,
        ve,
        ye,
        be = (function() {
          function e(e, t, r, n) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = r),
              (this._content = n),
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
                  r = this.offsetAt(e.end)
                return this._content.substring(t, r)
              }
              return this._content
            }),
            (e.prototype.update = function(t, r) {
              for (var n = 0, i = t; n < i.length; n++) {
                var o = i[n]
                if (e.isIncremental(o)) {
                  var a = Se(o.range),
                    s = this.offsetAt(a.start),
                    u = this.offsetAt(a.end)
                  this._content =
                    this._content.substring(0, s) +
                    o.text +
                    this._content.substring(u, this._content.length)
                  var c = Math.max(a.start.line, 0),
                    l = Math.max(a.end.line, 0),
                    f = this._lineOffsets,
                    h = xe(o.text, !1, s)
                  if (l - c === h.length)
                    for (var p = 0, m = h.length; p < m; p++)
                      f[p + c + 1] = h[p]
                  else
                    h.length < 1e4
                      ? f.splice.apply(f, [c + 1, l - c].concat(h))
                      : (this._lineOffsets = f = f
                          .slice(0, c + 1)
                          .concat(h, f.slice(l + 1)))
                  var d = o.text.length - (u - s)
                  if (0 !== d)
                    for (p = c + 1 + h.length, m = f.length; p < m; p++)
                      f[p] = f[p] + d
                } else {
                  if (!e.isFull(o))
                    throw new Error('Unknown change event received')
                  ;(this._content = o.text), (this._lineOffsets = void 0)
                }
              }
              this._version = r
            }),
            (e.prototype.getLineOffsets = function() {
              return (
                void 0 === this._lineOffsets &&
                  (this._lineOffsets = xe(this._content, !0)),
                this._lineOffsets
              )
            }),
            (e.prototype.positionAt = function(e) {
              e = Math.max(Math.min(e, this._content.length), 0)
              var t = this.getLineOffsets(),
                r = 0,
                n = t.length
              if (0 === n) return {line: 0, character: e}
              for (; r < n; ) {
                var i = Math.floor((r + n) / 2)
                t[i] > e ? (n = i) : (r = i + 1)
              }
              var o = r - 1
              return {line: o, character: e - t[o]}
            }),
            (e.prototype.offsetAt = function(e) {
              var t = this.getLineOffsets()
              if (e.line >= t.length) return this._content.length
              if (e.line < 0) return 0
              var r = t[e.line],
                n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
              return Math.max(Math.min(r + e.character, n), r)
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
      function xe(e, t, r) {
        void 0 === r && (r = 0)
        for (var n = t ? [r] : [], i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i)
          ;(13 !== o && 10 !== o) ||
            (13 === o && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++,
            n.push(r + i + 1))
        }
        return n
      }
      function Se(e) {
        var t = e.start,
          r = e.end
        return t.line > r.line ||
          (t.line === r.line && t.character > r.character)
          ? {start: r, end: t}
          : e
      }
      function ke(e) {
        var t = Se(e.range)
        return t !== e.range ? {newText: e.newText, range: t} : e
      }
      function Ce(e, t) {
        return 0 === t.length
          ? e
          : e.replace(/\{(\d+)\}/g, function(e, r) {
              var n = r[0]
              return void 0 !== t[n] ? t[n] : e
            })
      }
      function we(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n]
        return Ce(t, r)
      }
      function Ae(e) {
        return we
      }
      !(function(e) {
        ;(e.create = function(e, t, r, n) {
          return new be(e, t, r, n)
        }),
          (e.update = function(e, t, r) {
            if (e instanceof be) return e.update(t, r), e
            throw new Error(
              'TextDocument.update: document must be created by TextDocument.create'
            )
          }),
          (e.applyEdits = function(e, t) {
            for (
              var r = e.getText(),
                n = (function e(t, r) {
                  if (t.length <= 1) return t
                  var n = (t.length / 2) | 0,
                    i = t.slice(0, n),
                    o = t.slice(n)
                  e(i, r), e(o, r)
                  var a = 0,
                    s = 0,
                    u = 0
                  for (; a < i.length && s < o.length; ) {
                    var c = r(i[a], o[s])
                    t[u++] = c <= 0 ? i[a++] : o[s++]
                  }
                  for (; a < i.length; ) t[u++] = i[a++]
                  for (; s < o.length; ) t[u++] = o[s++]
                  return t
                })(t.map(ke), function(e, t) {
                  var r = e.range.start.line - t.range.start.line
                  return 0 === r
                    ? e.range.start.character - t.range.start.character
                    : r
                }),
                i = r.length,
                o = n.length - 1;
              o >= 0;
              o--
            ) {
              var a = n[o],
                s = e.offsetAt(a.range.start),
                u = e.offsetAt(a.range.end)
              if (!(u <= i)) throw new Error('Overlapping edit')
              ;(r = r.substring(0, s) + a.newText + r.substring(u, r.length)),
                (i = s)
            }
            return r
          })
      })(ge || (ge = {})),
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
        })(ve || (ve = {})),
        ((ye || (ye = {})).LATEST = {
          textDocument: {
            completion: {
              completionItem: {
                documentationFormat: [U.Markdown, U.PlainText],
                commitCharactersSupport: !0
              }
            }
          }
        })
      var Ie,
        Te,
        Ee = ((Ie = function(e, t) {
          return (Ie =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        }),
        function(e, t) {
          function r() {
            this.constructor = e
          }
          Ie(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()))
        }),
        Oe = Ae(),
        je = {
          'color-hex': {
            errorMessage: Oe(
              'colorHexFormatWarning',
              'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'
            ),
            pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/
          },
          'date-time': {
            errorMessage: Oe(
              'dateTimeFormatWarning',
              'String is not a RFC3339 date-time.'
            ),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
          },
          date: {
            errorMessage: Oe(
              'dateFormatWarning',
              'String is not a RFC3339 date.'
            ),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i
          },
          time: {
            errorMessage: Oe(
              'timeFormatWarning',
              'String is not a RFC3339 time.'
            ),
            pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
          },
          email: {
            errorMessage: Oe(
              'emailFormatWarning',
              'String is not an e-mail address.'
            ),
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }
        },
        Pe = (function() {
          function e(e, t, r) {
            ;(this.offset = t), (this.length = r), (this.parent = e)
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
        })()
      ;(function(e) {
        function t(t, r) {
          var n = e.call(this, t, r) || this
          return (n.type = 'null'), (n.value = null), n
        }
        Ee(t, e)
      })(Pe),
        (function(e) {
          function t(t, r, n) {
            var i = e.call(this, t, n) || this
            return (i.type = 'boolean'), (i.value = r), i
          }
          Ee(t, e)
        })(Pe),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (n.type = 'array'), (n.items = []), n
          }
          Ee(t, e),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.items
              },
              enumerable: !0,
              configurable: !0
            })
        })(Pe),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (
              (n.type = 'number'), (n.isInteger = !0), (n.value = Number.NaN), n
            )
          }
          Ee(t, e)
        })(Pe),
        (function(e) {
          function t(t, r, n) {
            var i = e.call(this, t, r, n) || this
            return (i.type = 'string'), (i.value = ''), i
          }
          Ee(t, e)
        })(Pe),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (n.type = 'property'), (n.colonOffset = -1), n
          }
          Ee(t, e),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.valueNode
                  ? [this.keyNode, this.valueNode]
                  : [this.keyNode]
              },
              enumerable: !0,
              configurable: !0
            })
        })(Pe),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (n.type = 'object'), (n.properties = []), n
          }
          Ee(t, e),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.properties
              },
              enumerable: !0,
              configurable: !0
            })
        })(Pe)
      function Me(e) {
        return $(e) ? (e ? {} : {not: {}}) : e
      }
      !(function(e) {
        ;(e[(e.Key = 0)] = 'Key'), (e[(e.Enum = 1)] = 'Enum')
      })(Te || (Te = {}))
      var _e = (function() {
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
                (-1 === this.focusOffset || $e(e, this.focusOffset)) &&
                e !== this.exclude
              )
            }),
            (e.prototype.newSub = function() {
              return new e(-1, this.exclude)
            }),
            e
          )
        })(),
        Ve = (function() {
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
        Fe = (function() {
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
              for (var t = 0, r = e; t < r.length; t++) {
                var n = r[t]
                this.merge(n)
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
                for (var t = 0, r = this.problems; t < r.length; t++) {
                  var n = r[t]
                  n.code === ve.EnumValueMismatch &&
                    (n.message = Oe(
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
                (e.enumValueMatch ||
                  (!e.hasProblems() && e.propertiesMatches)) &&
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
      function Ne(e) {
        return V(e)
      }
      function Re(e) {
        return _(e)
      }
      function $e(e, t, r) {
        return (
          void 0 === r && (r = !1),
          (t >= e.offset && t < e.offset + e.length) ||
            (r && t === e.offset + e.length)
        )
      }
      !(function() {
        function e(e, t, r) {
          void 0 === t && (t = []),
            void 0 === r && (r = []),
            (this.root = e),
            (this.syntaxErrors = t),
            (this.comments = r)
        }
        ;(e.prototype.getNodeFromOffset = function(e, t) {
          if ((void 0 === t && (t = !1), this.root)) return M(this.root, e, t)
        }),
          (e.prototype.visit = function(e) {
            if (this.root) {
              var t = function(r) {
                var n = e(r),
                  i = r.children
                if (Array.isArray(i))
                  for (var o = 0; o < i.length && n; o++) n = t(i[o])
                return n
              }
              t(this.root)
            }
          }),
          (e.prototype.validate = function(e, t) {
            if (this.root && t) {
              var r = new Fe()
              return (
                Le(this.root, t, r, Ve.instance),
                r.problems.map(function(t) {
                  var r = f.create(
                    e.positionAt(t.location.offset),
                    e.positionAt(t.location.offset + t.location.length)
                  )
                  return k.create(r, t.message, t.severity, t.code)
                })
              )
            }
            return null
          }),
          (e.prototype.getMatchingSchemas = function(e, t, r) {
            void 0 === t && (t = -1), void 0 === r && (r = null)
            var n = new _e(t, r)
            return this.root && e && Le(this.root, e, new Fe(), n), n.schemas
          })
      })()
      function Le(e, t, r, n) {
        if (e && n.include(e)) {
          switch (e.type) {
            case 'object':
              !(function(e, t, r, n) {
                for (
                  var i = Object.create(null), o = [], a = 0, s = e.properties;
                  a < s.length;
                  a++
                ) {
                  var u = (y = s[a]).keyNode.value
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
                        p = h
                          ? {offset: h.offset, length: h.length}
                          : {offset: e.offset, length: 1}
                      r.problems.push({
                        location: p,
                        severity: x.Warning,
                        message: Oe(
                          'MissingRequiredPropWarning',
                          'Missing property "{0}".',
                          f
                        )
                      })
                    }
                  }
                var m = function(e) {
                  for (var t = o.indexOf(e); t >= 0; )
                    o.splice(t, 1), (t = o.indexOf(e))
                }
                if (t.properties)
                  for (
                    var d = 0, g = Object.keys(t.properties);
                    d < g.length;
                    d++
                  ) {
                    f = g[d]
                    m(f)
                    var v = t.properties[f]
                    if ((P = i[f]))
                      if ($(v))
                        if (v) r.propertiesMatches++, r.propertiesValueMatches++
                        else {
                          var y = P.parent
                          r.problems.push({
                            location: {
                              offset: y.keyNode.offset,
                              length: y.keyNode.length
                            },
                            severity: x.Warning,
                            message:
                              t.errorMessage ||
                              Oe(
                                'DisallowedExtraPropWarning',
                                'Property {0} is not allowed.',
                                f
                              )
                          })
                        }
                      else {
                        var b = new Fe()
                        Le(P, v, b, n), r.mergePropertyMatch(b)
                      }
                  }
                if (t.patternProperties)
                  for (
                    var S = 0, k = Object.keys(t.patternProperties);
                    S < k.length;
                    S++
                  )
                    for (
                      var C = k[S], w = new RegExp(C), A = 0, I = o.slice(0);
                      A < I.length;
                      A++
                    ) {
                      f = I[A]
                      if (w.test(f))
                        if ((m(f), (P = i[f])))
                          if ($((v = t.patternProperties[C])))
                            if (v)
                              r.propertiesMatches++, r.propertiesValueMatches++
                            else {
                              y = P.parent
                              r.problems.push({
                                location: {
                                  offset: y.keyNode.offset,
                                  length: y.keyNode.length
                                },
                                severity: x.Warning,
                                message:
                                  t.errorMessage ||
                                  Oe(
                                    'DisallowedExtraPropWarning',
                                    'Property {0} is not allowed.',
                                    f
                                  )
                              })
                            }
                          else {
                            b = new Fe()
                            Le(P, v, b, n), r.mergePropertyMatch(b)
                          }
                    }
                if ('object' == typeof t.additionalProperties)
                  for (var T = 0, E = o; T < E.length; T++) {
                    f = E[T]
                    if ((P = i[f])) {
                      b = new Fe()
                      Le(P, t.additionalProperties, b, n),
                        r.mergePropertyMatch(b)
                    }
                  }
                else if (!1 === t.additionalProperties && o.length > 0)
                  for (var O = 0, j = o; O < j.length; O++) {
                    var P
                    f = j[O]
                    if ((P = i[f])) {
                      y = P.parent
                      r.problems.push({
                        location: {
                          offset: y.keyNode.offset,
                          length: y.keyNode.length
                        },
                        severity: x.Warning,
                        message:
                          t.errorMessage ||
                          Oe(
                            'DisallowedExtraPropWarning',
                            'Property {0} is not allowed.',
                            f
                          )
                      })
                    }
                  }
                N(t.maxProperties) &&
                  e.properties.length > t.maxProperties &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'MaxPropWarning',
                      'Object has more properties than limit of {0}.',
                      t.maxProperties
                    )
                  })
                N(t.minProperties) &&
                  e.properties.length < t.minProperties &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'MinPropWarning',
                      'Object has fewer properties than the required number of {0}',
                      t.minProperties
                    )
                  })
                if (t.dependencies)
                  for (
                    var M = 0, _ = Object.keys(t.dependencies);
                    M < _.length;
                    M++
                  ) {
                    u = _[M]
                    if (i[u]) {
                      var V = t.dependencies[u]
                      if (Array.isArray(V))
                        for (var F = 0, R = V; F < R.length; F++) {
                          var L = R[F]
                          i[L]
                            ? r.propertiesValueMatches++
                            : r.problems.push({
                                location: {offset: e.offset, length: e.length},
                                severity: x.Warning,
                                message: Oe(
                                  'RequiredDependentPropWarning',
                                  'Object is missing property {0} required by property {1}.',
                                  L,
                                  u
                                )
                              })
                        }
                      else if ((v = Me(V))) {
                        b = new Fe()
                        Le(e, v, b, n), r.mergePropertyMatch(b)
                      }
                    }
                  }
                var D = Me(t.propertyNames)
                if (D)
                  for (var W = 0, U = e.properties; W < U.length; W++) {
                    var q = U[W]
                    ;(u = q.keyNode) && Le(u, D, r, Ve.instance)
                  }
              })(e, t, r, n)
              break
            case 'array':
              !(function(e, t, r, n) {
                if (Array.isArray(t.items)) {
                  for (var i = t.items, o = 0; o < i.length; o++) {
                    var a = Me(i[o]),
                      s = new Fe()
                    ;(h = e.items[o])
                      ? (Le(h, a, s, n), r.mergePropertyMatch(s))
                      : e.items.length >= i.length && r.propertiesValueMatches++
                  }
                  if (e.items.length > i.length)
                    if ('object' == typeof t.additionalItems)
                      for (var u = i.length; u < e.items.length; u++) {
                        s = new Fe()
                        Le(e.items[u], t.additionalItems, s, n),
                          r.mergePropertyMatch(s)
                      }
                    else
                      !1 === t.additionalItems &&
                        r.problems.push({
                          location: {offset: e.offset, length: e.length},
                          severity: x.Warning,
                          message: Oe(
                            'additionalItemsWarning',
                            'Array has too many items according to schema. Expected {0} or fewer.',
                            i.length
                          )
                        })
                } else {
                  var c = Me(t.items)
                  if (c)
                    for (var l = 0, f = e.items; l < f.length; l++) {
                      var h = f[l]
                      s = new Fe()
                      Le(h, c, s, n), r.mergePropertyMatch(s)
                    }
                }
                var p = Me(t.contains)
                if (p) {
                  e.items.some(function(e) {
                    var t = new Fe()
                    return Le(e, p, t, Ve.instance), !t.hasProblems()
                  }) ||
                    r.problems.push({
                      location: {offset: e.offset, length: e.length},
                      severity: x.Warning,
                      message:
                        t.errorMessage ||
                        Oe(
                          'requiredItemMissingWarning',
                          'Array does not contain required item.'
                        )
                    })
                }
                N(t.minItems) &&
                  e.items.length < t.minItems &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'minItemsWarning',
                      'Array has too few items. Expected {0} or more.',
                      t.minItems
                    )
                  })
                N(t.maxItems) &&
                  e.items.length > t.maxItems &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'maxItemsWarning',
                      'Array has too many items. Expected {0} or fewer.',
                      t.maxItems
                    )
                  })
                if (!0 === t.uniqueItems) {
                  var m = Ne(e)
                  m.some(function(e, t) {
                    return t !== m.lastIndexOf(e)
                  }) &&
                    r.problems.push({
                      location: {offset: e.offset, length: e.length},
                      severity: x.Warning,
                      message: Oe(
                        'uniqueItemsWarning',
                        'Array has duplicate items.'
                      )
                    })
                }
              })(e, t, r, n)
              break
            case 'string':
              !(function(e, t, r, n) {
                N(t.minLength) &&
                  e.value.length < t.minLength &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'minLengthWarning',
                      'String is shorter than the minimum length of {0}.',
                      t.minLength
                    )
                  })
                N(t.maxLength) &&
                  e.value.length > t.maxLength &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'maxLengthWarning',
                      'String is longer than the maximum length of {0}.',
                      t.maxLength
                    )
                  })
                if (((i = t.pattern), 'string' == typeof i)) {
                  new RegExp(t.pattern).test(e.value) ||
                    r.problems.push({
                      location: {offset: e.offset, length: e.length},
                      severity: x.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        Oe(
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
                        var a = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                          e.value
                        )
                        a
                          ? a[2] ||
                            'uri' !== t.format ||
                            (o = Oe(
                              'uriSchemeMissing',
                              'URI with a scheme is expected.'
                            ))
                          : (o = Oe('uriMissing', 'URI is expected.'))
                      } else o = Oe('uriEmpty', 'URI expected.')
                      o &&
                        r.problems.push({
                          location: {offset: e.offset, length: e.length},
                          severity: x.Warning,
                          message:
                            t.patternErrorMessage ||
                            t.errorMessage ||
                            Oe(
                              'uriFormatWarning',
                              'String is not a URI: {0}',
                              o
                            )
                        })
                      break
                    case 'color-hex':
                    case 'date-time':
                    case 'date':
                    case 'time':
                    case 'email':
                      var s = je[t.format]
                      ;(e.value && s.pattern.exec(e.value)) ||
                        r.problems.push({
                          location: {offset: e.offset, length: e.length},
                          severity: x.Warning,
                          message:
                            t.patternErrorMessage ||
                            t.errorMessage ||
                            s.errorMessage
                        })
                  }
              })(e, t, r)
              break
            case 'number':
              !(function(e, t, r, n) {
                var i = e.value
                N(t.multipleOf) &&
                  i % t.multipleOf != 0 &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'multipleOfWarning',
                      'Value is not divisible by {0}.',
                      t.multipleOf
                    )
                  })
                function o(e, t) {
                  return N(t) ? t : $(t) && t ? e : void 0
                }
                function a(e, t) {
                  if (!$(t) || !t) return e
                }
                var s = o(t.minimum, t.exclusiveMinimum)
                N(s) &&
                  i <= s &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'exclusiveMinimumWarning',
                      'Value is below the exclusive minimum of {0}.',
                      s
                    )
                  })
                var u = o(t.maximum, t.exclusiveMaximum)
                N(u) &&
                  i >= u &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'exclusiveMaximumWarning',
                      'Value is above the exclusive maximum of {0}.',
                      u
                    )
                  })
                var c = a(t.minimum, t.exclusiveMinimum)
                N(c) &&
                  i < c &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'minimumWarning',
                      'Value is below the minimum of {0}.',
                      c
                    )
                  })
                var l = a(t.maximum, t.exclusiveMaximum)
                N(l) &&
                  i > l &&
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'maximumWarning',
                      'Value is above the maximum of {0}.',
                      l
                    )
                  })
              })(e, t, r)
              break
            case 'property':
              return Le(e.valueNode, t, r, n)
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
                r.problems.push({
                  location: {offset: e.offset, length: e.length},
                  severity: x.Warning,
                  message:
                    t.errorMessage ||
                    Oe(
                      'typeArrayMismatchWarning',
                      'Incorrect type. Expected one of {0}.',
                      t.type.join(', ')
                    )
                })
              : t.type &&
                (i(t.type) ||
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message:
                      t.errorMessage ||
                      Oe(
                        'typeMismatchWarning',
                        'Incorrect type. Expected "{0}".',
                        t.type
                      )
                  }))
            if (Array.isArray(t.allOf))
              for (var o = 0, a = t.allOf; o < a.length; o++) {
                var s = a[o]
                Le(e, Me(s), r, n)
              }
            var u = Me(t.not)
            if (u) {
              var c = new Fe(),
                l = n.newSub()
              Le(e, u, c, l),
                c.hasProblems() ||
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    message: Oe(
                      'notSchemaWarning',
                      'Matches a schema that is not allowed.'
                    )
                  })
              for (var f = 0, h = l.schemas; f < h.length; f++) {
                var p = h[f]
                ;(p.inverted = !p.inverted), n.add(p)
              }
            }
            var m = function(t, i) {
              for (var o = [], a = null, s = 0, u = t; s < u.length; s++) {
                var c = Me(u[s]),
                  l = new Fe(),
                  f = n.newSub()
                if ((Le(e, c, l, f), l.hasProblems() || o.push(c), a))
                  if (
                    i ||
                    l.hasProblems() ||
                    a.validationResult.hasProblems()
                  ) {
                    var h = l.compare(a.validationResult)
                    h > 0
                      ? (a = {
                          schema: c,
                          validationResult: l,
                          matchingSchemas: f
                        })
                      : 0 === h &&
                        (a.matchingSchemas.merge(f),
                        a.validationResult.mergeEnumValues(l))
                  } else
                    a.matchingSchemas.merge(f),
                      (a.validationResult.propertiesMatches +=
                        l.propertiesMatches),
                      (a.validationResult.propertiesValueMatches +=
                        l.propertiesValueMatches)
                else a = {schema: c, validationResult: l, matchingSchemas: f}
              }
              return (
                o.length > 1 &&
                  i &&
                  r.problems.push({
                    location: {offset: e.offset, length: 1},
                    severity: x.Warning,
                    message: Oe(
                      'oneOfWarning',
                      'Matches multiple schemas when only one must validate.'
                    )
                  }),
                null !== a &&
                  (r.merge(a.validationResult),
                  (r.propertiesMatches += a.validationResult.propertiesMatches),
                  (r.propertiesValueMatches +=
                    a.validationResult.propertiesValueMatches),
                  n.merge(a.matchingSchemas)),
                o.length
              )
            }
            Array.isArray(t.anyOf) && m(t.anyOf, !1)
            Array.isArray(t.oneOf) && m(t.oneOf, !0)
            var d = function(t) {
                var i = new Fe(),
                  o = n.newSub()
                Le(e, Me(t), i, o),
                  r.merge(i),
                  (r.propertiesMatches += i.propertiesMatches),
                  (r.propertiesValueMatches += i.propertiesValueMatches),
                  n.merge(o)
              },
              g = Me(t.if)
            g &&
              (function(t, r, i) {
                var o = Me(t),
                  a = new Fe(),
                  s = n.newSub()
                Le(e, o, a, s),
                  n.merge(s),
                  a.hasProblems() ? i && d(i) : r && d(r)
              })(g, Me(t.then), Me(t.else))
            if (Array.isArray(t.enum)) {
              for (
                var v = Ne(e), y = !1, b = 0, S = t.enum;
                b < S.length;
                b++
              ) {
                var k = S[b]
                if (F(v, k)) {
                  y = !0
                  break
                }
              }
              ;(r.enumValues = t.enum),
                (r.enumValueMatch = y),
                y ||
                  r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    code: ve.EnumValueMismatch,
                    message:
                      t.errorMessage ||
                      Oe(
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
            if (R(t.const)) {
              F((v = Ne(e)), t.const)
                ? (r.enumValueMatch = !0)
                : (r.problems.push({
                    location: {offset: e.offset, length: e.length},
                    severity: x.Warning,
                    code: ve.EnumValueMismatch,
                    message:
                      t.errorMessage ||
                      Oe(
                        'constWarning',
                        'Value must be {0}.',
                        JSON.stringify(t.const)
                      )
                  }),
                  (r.enumValueMatch = !1)),
                (r.enumValues = [t.const])
            }
            t.deprecationMessage &&
              e.parent &&
              r.problems.push({
                location: {offset: e.parent.offset, length: e.parent.length},
                severity: x.Warning,
                message: t.deprecationMessage
              })
          })(),
            n.add({node: e, schema: t})
        }
      }
      function De(e, t) {
        var r = e.length - t.length
        return r > 0 ? e.lastIndexOf(t) === r : 0 === r && e === t
      }
      var We = Ae()
      ;(function() {
        function e(e, t, r, n) {
          void 0 === t && (t = []),
            void 0 === r && (r = Promise),
            void 0 === n && (n = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = r),
            (this.clientCapabilities = n),
            (this.templateVarIdCounter = 0)
        }
        ;(e.prototype.doResolve = function(e) {
          for (var t = this.contributions.length - 1; t >= 0; t--)
            if (this.contributions[t].resolveCompletion) {
              var r = this.contributions[t].resolveCompletion(e)
              if (r) return r
            }
          return this.promiseConstructor.resolve(e)
        }),
          (e.prototype.doComplete = function(e, t, r) {
            var n = this,
              i = {items: [], isIncomplete: !1},
              o = e.getText(),
              a = e.offsetAt(t),
              s = r.getNodeFromOffset(a, !0)
            if (this.isInComment(e, s ? s.offset : 0, a))
              return Promise.resolve(i)
            if (s && a === s.offset + s.length && a > 0) {
              var u = o[a - 1]
              ;(('object' === s.type && '}' === u) ||
                ('array' === s.type && ']' === u)) &&
                (s = s.parent)
            }
            var c = this.getCurrentWord(e, a),
              l = null
            if (
              !s ||
              ('string' !== s.type &&
                'number' !== s.type &&
                'boolean' !== s.type &&
                'null' !== s.type)
            ) {
              var h = a - c.length
              h > 0 && '"' === o[h - 1] && h--,
                (l = f.create(e.positionAt(h), t))
            } else
              l = f.create(
                e.positionAt(s.offset),
                e.positionAt(s.offset + s.length)
              )
            var p = {},
              m = {
                add: function(e) {
                  var t = e.label,
                    r = p[t]
                  if (r) r.documentation || (r.documentation = e.documentation)
                  else {
                    if ((t = t.replace(/[\n]/g, '↵')).length > 60) {
                      var n = t.substr(0, 57).trim() + '...'
                      p[n] || (t = n)
                    }
                    l && (e.textEdit = w.replace(l, e.insertText)),
                      (e.label = t),
                      (p[t] = e),
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
              .getSchemaForResource(e.uri, r)
              .then(function(t) {
                var u = [],
                  f = !0,
                  h = '',
                  d = null
                if (s && 'string' === s.type) {
                  var g = s.parent
                  g &&
                    'property' === g.type &&
                    g.keyNode === s &&
                    ((f = !g.valueNode),
                    (d = g),
                    (h = o.substr(s.offset + 1, s.length - 2)),
                    g && (s = g.parent))
                }
                if (s && 'object' === s.type) {
                  if (s.offset === a) return i
                  s.properties.forEach(function(e) {
                    ;(d && d === e) || (p[e.keyNode.value] = z.create('__'))
                  })
                  var v = ''
                  f && (v = n.evaluateSeparatorAfter(e, e.offsetAt(l.end))),
                    t
                      ? n.getPropertyCompletions(t, r, s, f, v, m)
                      : n.getSchemaLessPropertyCompletions(r, s, h, m)
                  var y = Re(s)
                  n.contributions.forEach(function(t) {
                    var r = t.collectPropertyCompletions(
                      e.uri,
                      y,
                      c,
                      f,
                      '' === v,
                      m
                    )
                    r && u.push(r)
                  }),
                    !t &&
                      c.length > 0 &&
                      '"' !== o.charAt(a - c.length - 1) &&
                      (m.add({
                        kind: B.Property,
                        label: n.getLabelForValue(c),
                        insertText: n.getInsertTextForProperty(c, null, !1, v),
                        insertTextFormat: K.Snippet,
                        documentation: ''
                      }),
                      m.setAsIncomplete())
                }
                var b = {}
                return (
                  t
                    ? n.getValueCompletions(t, r, s, a, e, m, b)
                    : n.getSchemaLessValueCompletions(r, s, a, e, m),
                  n.contributions.length > 0 &&
                    n.getContributedValueCompletions(r, s, a, e, m, u),
                  n.promiseConstructor.all(u).then(function() {
                    if (0 === m.getNumberOfProposals()) {
                      var t = a
                      !s ||
                        ('string' !== s.type &&
                          'number' !== s.type &&
                          'boolean' !== s.type &&
                          'null' !== s.type) ||
                        (t = s.offset + s.length)
                      var r = n.evaluateSeparatorAfter(e, t)
                      n.addFillerValueCompletions(b, r, m)
                    }
                    return i
                  })
                )
              })
          }),
          (e.prototype.getPropertyCompletions = function(e, t, r, n, i, o) {
            var a = this
            t.getMatchingSchemas(e.schema, r.offset).forEach(function(e) {
              if (e.node === r && !e.inverted) {
                var t = e.schema.properties
                t &&
                  Object.keys(t).forEach(function(e) {
                    var r = t[e]
                    if (
                      'object' == typeof r &&
                      !r.deprecationMessage &&
                      !r.doNotSuggest
                    ) {
                      var s = {
                        kind: B.Property,
                        label: e,
                        insertText: a.getInsertTextForProperty(e, r, n, i),
                        insertTextFormat: K.Snippet,
                        filterText: a.getFilterTextForValue(e),
                        documentation:
                          a.fromMarkup(r.markdownDescription) ||
                          r.description ||
                          ''
                      }
                      De(s.insertText, '$1' + i) &&
                        (s.command = {
                          title: 'Suggest',
                          command: 'editor.action.triggerSuggest'
                        }),
                        o.add(s)
                    }
                  })
              }
            })
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function(e, t, r, n) {
            var i = this,
              o = function(e) {
                e.properties.forEach(function(e) {
                  var t = e.keyNode.value
                  n.add({
                    kind: B.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ''),
                    insertTextFormat: K.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: ''
                  })
                })
              }
            if (t.parent)
              if ('property' === t.parent.type) {
                var a = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === a &&
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
                n.add({
                  kind: B.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty(
                    '$schema',
                    null,
                    !0,
                    ''
                  ),
                  insertTextFormat: K.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema')
                })
          }),
          (e.prototype.getSchemaLessValueCompletions = function(e, t, r, n, i) {
            var o = this,
              a = r
            if (
              (!t ||
                ('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                ((a = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind('object'),
                  label: 'Empty object',
                  insertText: this.getInsertTextForValue({}, ''),
                  insertTextFormat: K.Snippet,
                  documentation: ''
                }),
                void i.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: K.Snippet,
                  documentation: ''
                })
              )
            var s = this.evaluateSeparatorAfter(n, a),
              u = function(e) {
                $e(e.parent, r, !0) ||
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, n),
                    insertText: o.getInsertTextForMatchingNode(e, n, s),
                    insertTextFormat: K.Snippet,
                    documentation: ''
                  }),
                  'boolean' === e.type &&
                    o.addBooleanValueCompletion(!e.value, s, i)
              }
            if ('property' === t.type && r > t.colonOffset) {
              var c = t.valueNode
              if (
                c &&
                (r > c.offset + c.length ||
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
                  this.addDollarSchemaCompletions(s, i)
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
          (e.prototype.getValueCompletions = function(e, t, r, n, i, o, a) {
            var s = this,
              u = n,
              c = null,
              l = null
            if (
              (!r ||
                ('string' !== r.type &&
                  'number' !== r.type &&
                  'boolean' !== r.type &&
                  'null' !== r.type) ||
                ((u = r.offset + r.length), (l = r), (r = r.parent)),
              r)
            ) {
              if ('property' === r.type && n > r.colonOffset) {
                var f = r.valueNode
                if (f && n > f.offset + f.length) return
                ;(c = r.keyNode.value), (r = r.parent)
              }
              if (r && (null !== c || 'array' === r.type)) {
                var h = this.evaluateSeparatorAfter(i, u)
                t
                  .getMatchingSchemas(e.schema, r.offset, l)
                  .forEach(function(e) {
                    if (e.node === r && !e.inverted && e.schema) {
                      if ('array' === r.type && e.schema.items)
                        if (Array.isArray(e.schema.items)) {
                          var t = s.findItemAtOffset(r, i, n)
                          t < e.schema.items.length &&
                            s.addSchemaValueCompletions(
                              e.schema.items[t],
                              h,
                              o,
                              a
                            )
                        } else
                          s.addSchemaValueCompletions(e.schema.items, h, o, a)
                      if (e.schema.properties) {
                        var u = e.schema.properties[c]
                        u && s.addSchemaValueCompletions(u, h, o, a)
                      }
                    }
                  }),
                  '$schema' !== c ||
                    r.parent ||
                    this.addDollarSchemaCompletions(h, o),
                  a.boolean &&
                    (this.addBooleanValueCompletion(!0, h, o),
                    this.addBooleanValueCompletion(!1, h, o)),
                  a.null && this.addNullValueCompletion(h, o)
              }
            } else this.addSchemaValueCompletions(e.schema, '', o, a)
          }),
          (e.prototype.getContributedValueCompletions = function(
            e,
            t,
            r,
            n,
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
                'property' === t.type && r > t.colonOffset)
              ) {
                var a = t.keyNode.value,
                  s = t.valueNode
                if (!s || r <= s.offset + s.length) {
                  var u = Re(t.parent)
                  this.contributions.forEach(function(e) {
                    var t = e.collectValueCompletions(n.uri, u, a, i)
                    t && o.push(t)
                  })
                }
              }
            } else
              this.contributions.forEach(function(e) {
                var t = e.collectDefaultCompletions(n.uri, i)
                t && o.push(t)
              })
          }),
          (e.prototype.addSchemaValueCompletions = function(e, t, r, n) {
            var i = this
            'object' == typeof e &&
              (this.addEnumValueCompletions(e, t, r),
              this.addDefaultValueCompletions(e, t, r),
              this.collectTypes(e, n),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, r, n)
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, r, n)
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, r, n)
                }))
          }),
          (e.prototype.addDefaultValueCompletions = function(e, t, r, n) {
            var i = this
            void 0 === n && (n = 0)
            var o = !1
            if (R(e.default)) {
              for (var a = e.type, s = e.default, u = n; u > 0; u--)
                (s = [s]), (a = 'array')
              r.add({
                kind: this.getSuggestionKind(a),
                label: this.getLabelForValue(s),
                insertText: this.getInsertTextForValue(s, t),
                insertTextFormat: K.Snippet,
                detail: We('json.suggest.default', 'Default value')
              }),
                (o = !0)
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function(a) {
                for (var s = e.type, u = a, c = n; c > 0; c--)
                  (u = [u]), (s = 'array')
                r.add({
                  kind: i.getSuggestionKind(s),
                  label: i.getLabelForValue(u),
                  insertText: i.getInsertTextForValue(u, t),
                  insertTextFormat: K.Snippet
                }),
                  (o = !0)
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function(a) {
                  var s,
                    u,
                    c = e.type,
                    l = a.body,
                    f = a.label
                  if (R(l)) {
                    e.type
                    for (var h = n; h > 0; h--) (l = [l]), 'array'
                    ;(s = i.getInsertTextForSnippetValue(l, t)),
                      (u = i.getFilterTextForSnippetValue(l)),
                      (f = f || i.getLabelForSnippetValue(l))
                  } else if ('string' == typeof a.bodyText) {
                    var p = '',
                      m = '',
                      d = ''
                    for (h = n; h > 0; h--)
                      (p = p + d + '[\n'),
                        (m = m + '\n' + d + ']'),
                        (d += '\t'),
                        (c = 'array')
                    ;(s =
                      p + d + a.bodyText.split('\n').join('\n' + d) + m + t),
                      (f = f || s),
                      (u = s.replace(/[\n]/g, ''))
                  }
                  r.add({
                    kind: i.getSuggestionKind(c),
                    label: f,
                    documentation:
                      i.fromMarkup(a.markdownDescription) || a.description,
                    insertText: s,
                    insertTextFormat: K.Snippet,
                    filterText: u
                  }),
                    (o = !0)
                }),
              o ||
                'object' != typeof e.items ||
                Array.isArray(e.items) ||
                this.addDefaultValueCompletions(e.items, t, r, n + 1)
          }),
          (e.prototype.addEnumValueCompletions = function(e, t, r) {
            if (
              (R(e.const) &&
                r.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: K.Snippet,
                  documentation:
                    this.fromMarkup(e.markdownDescription) || e.description
                }),
              Array.isArray(e.enum))
            )
              for (var n = 0, i = e.enum.length; n < i; n++) {
                var o = e.enum[n],
                  a = this.fromMarkup(e.markdownDescription) || e.description
                e.markdownEnumDescriptions &&
                n < e.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (a = this.fromMarkup(e.markdownEnumDescriptions[n]))
                  : e.enumDescriptions &&
                    n < e.enumDescriptions.length &&
                    (a = e.enumDescriptions[n]),
                  r.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: K.Snippet,
                    documentation: a
                  })
              }
          }),
          (e.prototype.collectTypes = function(e, t) {
            if (!Array.isArray(e.enum) && !R(e.const)) {
              var r = e.type
              Array.isArray(r)
                ? r.forEach(function(e) {
                    return (t[e] = !0)
                  })
                : (t[r] = !0)
            }
          }),
          (e.prototype.addFillerValueCompletions = function(e, t, r) {
            e.object &&
              r.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: K.Snippet,
                detail: We('defaults.object', 'New object'),
                documentation: ''
              }),
              e.array &&
                r.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: K.Snippet,
                  detail: We('defaults.array', 'New array'),
                  documentation: ''
                })
          }),
          (e.prototype.addBooleanValueCompletion = function(e, t, r) {
            r.add({
              kind: this.getSuggestionKind('boolean'),
              label: e ? 'true' : 'false',
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: K.Snippet,
              documentation: ''
            })
          }),
          (e.prototype.addNullValueCompletion = function(e, t) {
            t.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + e,
              insertTextFormat: K.Snippet,
              documentation: ''
            })
          }),
          (e.prototype.addDollarSchemaCompletions = function(e, t) {
            var r = this
            this.schemaService
              .getRegisteredSchemaIds(function(e) {
                return 'http' === e || 'https' === e
              })
              .forEach(function(n) {
                return t.add({
                  kind: B.Module,
                  label: r.getLabelForValue(n),
                  filterText: r.getFilterTextForValue(n),
                  insertText: r.getInsertTextForValue(n, e),
                  insertTextFormat: K.Snippet,
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
            var r = JSON.stringify(e, null, '\t')
            return '{}' === r
              ? '{$1}' + t
              : '[]' === r ? '[$1]' + t : this.getInsertTextForPlainText(r + t)
          }),
          (e.prototype.getInsertTextForSnippetValue = function(e, t) {
            return (
              (function e(t, r, n) {
                if (null !== t && 'object' == typeof t) {
                  var i = r + '\t'
                  if (Array.isArray(t)) {
                    if (0 === t.length) return '[]'
                    for (var o = '[\n', a = 0; a < t.length; a++)
                      (o += i + e(t[a], i, n)),
                        a < t.length - 1 && (o += ','),
                        (o += '\n')
                    return (o += r + ']')
                  }
                  var s = Object.keys(t)
                  if (0 === s.length) return '{}'
                  for (o = '{\n', a = 0; a < s.length; a++) {
                    var u = s[a]
                    ;(o += i + JSON.stringify(u) + ': ' + e(t[u], i, n)),
                      a < s.length - 1 && (o += ','),
                      (o += '\n')
                  }
                  return (o += r + '}')
                }
                return n(t)
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
                var r = JSON.stringify(e)
                return (
                  (r = r.substr(1, r.length - 2)),
                  '"${1:' + (r = this.getInsertTextForPlainText(r)) + '}"' + t
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
            if (!e) return B.Value
            switch (e) {
              case 'string':
                return B.Value
              case 'object':
                return B.Module
              case 'property':
                return B.Property
              default:
                return B.Value
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
          (e.prototype.getInsertTextForMatchingNode = function(e, t, r) {
            switch (e.type) {
              case 'array':
                return this.getInsertTextForValue([], r)
              case 'object':
                return this.getInsertTextForValue({}, r)
              default:
                var n = t.getText().substr(e.offset, e.length) + r
                return this.getInsertTextForPlainText(n)
            }
          }),
          (e.prototype.getInsertTextForProperty = function(e, t, r, n) {
            var i = this.getInsertTextForValue(e, '')
            if (!r) return i
            var o,
              a = i + ': ',
              s = 0
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body
                  R(u) && (o = this.getInsertTextForSnippetValue(u, ''))
                }
                s += t.defaultSnippets.length
              }
              if (
                (t.enum &&
                  (o ||
                    1 !== t.enum.length ||
                    (o = this.getInsertTextForGuessedValue(t.enum[0], '')),
                  (s += t.enum.length)),
                R(t.default) &&
                  (o || (o = this.getInsertTextForGuessedValue(t.default, '')),
                  s++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o ||
                    (o = this.getInsertTextForGuessedValue(t.examples[0], '')),
                  (s += t.examples.length)),
                0 === s)
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
            return (!o || s > 1) && (o = '$1'), a + o + n
          }),
          (e.prototype.getCurrentWord = function(e, t) {
            for (
              var r = t - 1, n = e.getText();
              r >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(n.charAt(r));

            )
              r--
            return n.substring(r + 1, t)
          }),
          (e.prototype.evaluateSeparatorAfter = function(e, t) {
            var r = j(e.getText(), !0)
            switch ((r.setPosition(t), r.scan())) {
              case 5:
              case 2:
              case 4:
              case 17:
                return ''
              default:
                return ','
            }
          }),
          (e.prototype.findItemAtOffset = function(e, t, r) {
            for (
              var n = j(t.getText(), !0), i = e.items, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var a = i[o]
              if (r > a.offset + a.length)
                return (
                  n.setPosition(a.offset + a.length),
                  5 === n.scan() && r >= n.getTokenOffset() + n.getTokenLength()
                    ? o + 1
                    : o
                )
              if (r >= a.offset) return o
            }
            return 0
          }),
          (e.prototype.isInComment = function(e, t, r) {
            var n = j(e.getText(), !1)
            n.setPosition(t)
            for (
              var i = n.scan();
              17 !== i && n.getTokenOffset() + n.getTokenLength() < r;

            )
              i = n.scan()
            return (12 === i || 13 === i) && n.getTokenOffset() <= r
          }),
          (e.prototype.fromMarkup = function(e) {
            if (e && this.doesSupportMarkdown())
              return {kind: U.Markdown, value: e}
          }),
          (e.prototype.doesSupportMarkdown = function() {
            if (!R(this.supportsMarkdown)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !== e.completionItem.documentationFormat.indexOf(U.Markdown)
            }
            return this.supportsMarkdown
          }),
          (e.prototype.doesSupportsCommitCharacters = function() {
            if (!R(this.supportsCommitCharacters)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion
              this.supportsCommitCharacters =
                e &&
                e.completionItem &&
                !!e.completionItem.commitCharactersSupport
            }
            return this.supportsCommitCharacters
          })
      })(),
        (function() {
          function e(e, t, r) {
            void 0 === t && (t = []),
              (this.schemaService = e),
              (this.contributions = t),
              (this.promise = r || Promise)
          }
          e.prototype.doHover = function(e, t, r) {
            var n = e.offsetAt(t),
              i = r.getNodeFromOffset(n)
            if (
              !i ||
              (('object' === i.type || 'array' === i.type) &&
                n > i.offset + 1 &&
                n < i.offset + i.length - 1)
            )
              return this.promise.resolve(null)
            var o = i
            if ('string' === i.type) {
              var a = i.parent
              if (
                a &&
                'property' === a.type &&
                a.keyNode === i &&
                !(i = a.valueNode)
              )
                return this.promise.resolve(null)
            }
            for (
              var s = f.create(
                  e.positionAt(o.offset),
                  e.positionAt(o.offset + o.length)
                ),
                u = function(e) {
                  return {contents: e, range: s}
                },
                c = Re(i),
                l = this.contributions.length - 1;
              l >= 0;
              l--
            ) {
              var h = this.contributions[l].getInfoContribution(e.uri, c)
              if (h)
                return h.then(function(e) {
                  return u(e)
                })
            }
            return this.schemaService
              .getSchemaForResource(e.uri, r)
              .then(function(e) {
                if (e) {
                  var t = r.getMatchingSchemas(e.schema, i.offset),
                    n = null,
                    o = null,
                    a = null,
                    s = null
                  t.every(function(e) {
                    if (
                      e.node === i &&
                      !e.inverted &&
                      e.schema &&
                      ((n = n || e.schema.title),
                      (o =
                        o ||
                        e.schema.markdownDescription ||
                        Ue(e.schema.description)),
                      e.schema.enum)
                    ) {
                      var t = e.schema.enum.indexOf(Ne(i))
                      e.schema.markdownEnumDescriptions
                        ? (a = e.schema.markdownEnumDescriptions[t])
                        : e.schema.enumDescriptions &&
                          (a = Ue(e.schema.enumDescriptions[t])),
                        a &&
                          'string' != typeof (s = e.schema.enum[t]) &&
                          (s = JSON.stringify(s))
                    }
                    return !0
                  })
                  var c = ''
                  return (
                    n && (c = Ue(n)),
                    o && (c.length > 0 && (c += '\n\n'), (c += o)),
                    a &&
                      (c.length > 0 && (c += '\n\n'),
                      (c +=
                        '`' +
                        (function(e) {
                          if (-1 !== e.indexOf('`')) return '`` ' + e + ' ``'
                          return e
                        })(s) +
                        '`: ' +
                        a)),
                    u([c])
                  )
                }
                return null
              })
          }
        })()
      function Ue(e) {
        if (e)
          return e
            .replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3')
            .replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
      }
      var qe = r(784),
        Be = Ae(),
        Ke = (function() {
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
        Je = (function() {
          function e(e, t, r) {
            ;(this.service = e),
              (this.url = t),
              (this.dependencies = {}),
              r &&
                (this.unresolvedSchema = this.service.promise.resolve(
                  new ze(r)
                ))
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
                  (this.resolvedSchema = this.getUnresolvedSchema().then(
                    function(t) {
                      return e.service.resolveSchemaContent(
                        t,
                        e.url,
                        e.dependencies
                      )
                    }
                  )),
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
        ze = function(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t)
        },
        He = (function() {
          function e(e, t) {
            void 0 === t && (t = []), (this.schema = e), (this.errors = t)
          }
          return (
            (e.prototype.getSection = function(e) {
              return Me(this.getSectionRecursive(e, this.schema))
            }),
            (e.prototype.getSectionRecursive = function(e, t) {
              if (!t || 'boolean' == typeof t || 0 === e.length) return t
              var r = e.shift()
              if (t.properties && (t.properties[r], 1))
                return this.getSectionRecursive(e, t.properties[r])
              if (t.patternProperties)
                for (
                  var n = 0, i = Object.keys(t.patternProperties);
                  n < i.length;
                  n++
                ) {
                  var o = i[n]
                  if (new RegExp(o).test(r))
                    return this.getSectionRecursive(e, t.patternProperties[o])
                }
              else {
                if ('object' == typeof t.additionalProperties)
                  return this.getSectionRecursive(e, t.additionalProperties)
                if (r.match('[0-9]+'))
                  if (Array.isArray(t.items)) {
                    var a = parseInt(r, 10)
                    if (!isNaN(a) && t.items[a])
                      return this.getSectionRecursive(e, t.items[a])
                  } else if (t.items)
                    return this.getSectionRecursive(e, t.items)
              }
              return null
            }),
            e
          )
        })()
      !(function() {
        function e(e, t, r) {
          ;(this.contextService = t),
            (this.requestService = e),
            (this.promiseConstructor = r || Promise),
            (this.callOnDispose = []),
            (this.contributionSchemas = {}),
            (this.contributionAssociations = {}),
            (this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.filePatternAssociationById = {}),
            (this.registeredSchemasIds = {})
        }
        ;(e.prototype.getRegisteredSchemaIds = function(e) {
          return Object.keys(this.registeredSchemasIds).filter(function(t) {
            var r = qe.a.parse(t).scheme
            return 'schemaservice' !== r && (!e || e(r))
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
                r = !1,
                n = [(e = this.normalizeId(e))],
                i = Object.keys(this.schemasById).map(function(e) {
                  return t.schemasById[e]
                });
              n.length;

            )
              for (var o = n.pop(), a = 0; a < i.length; a++) {
                var s = i[a]
                s &&
                  (s.url === o || s.dependencies[o]) &&
                  (s.url !== o && n.push(s.url),
                  s.clearSchema(),
                  (i[a] = void 0),
                  (r = !0))
              }
            return r
          }),
          (e.prototype.normalizeId = function(e) {
            try {
              return qe.a.parse(e).toString()
            } catch (t) {
              return e
            }
          }),
          (e.prototype.setSchemaContributions = function(e) {
            if (e.schemas) {
              var t = e.schemas
              for (var r in t) {
                var n = this.normalizeId(r)
                this.contributionSchemas[n] = this.addSchemaHandle(n, t[r])
              }
            }
            if (e.schemaAssociations) {
              var i = e.schemaAssociations
              for (var o in i) {
                var a = i[o]
                this.contributionAssociations[o] = a
                for (
                  var s = this.getOrAddFilePatternAssociation(o), u = 0, c = a;
                  u < c.length;
                  u++
                ) {
                  var l = c[u]
                  r = this.normalizeId(l)
                  s.addSchema(r)
                }
              }
            }
          }),
          (e.prototype.addSchemaHandle = function(e, t) {
            var r = new Je(this, e, t)
            return (this.schemasById[e] = r), r
          }),
          (e.prototype.getOrAddSchemaHandle = function(e, t) {
            return this.schemasById[e] || this.addSchemaHandle(e, t)
          }),
          (e.prototype.getOrAddFilePatternAssociation = function(e) {
            var t = this.filePatternAssociationById[e]
            return (
              t ||
                ((t = new Ke(e)),
                (this.filePatternAssociationById[e] = t),
                this.filePatternAssociations.push(t)),
              t
            )
          }),
          (e.prototype.registerExternalSchema = function(e, t, r) {
            void 0 === t && (t = null)
            var n = this.normalizeId(e)
            if (((this.registeredSchemasIds[n] = !0), t))
              for (var i = 0, o = t; i < o.length; i++) {
                var a = o[i]
                this.getOrAddFilePatternAssociation(a).addSchema(n)
              }
            return r ? this.addSchemaHandle(n, r) : this.getOrAddSchemaHandle(n)
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
                var r = this.getOrAddFilePatternAssociation(t),
                  n = 0,
                  i = this.contributionAssociations[t];
                n < i.length;
                n++
              ) {
                var o = i[n]
                e = this.normalizeId(o)
                r.addSchema(e)
              }
          }),
          (e.prototype.getResolvedSchema = function(e) {
            var t = this.normalizeId(e),
              r = this.schemasById[t]
            return r ? r.getResolvedSchema() : this.promise.resolve(null)
          }),
          (e.prototype.loadSchema = function(e) {
            if (!this.requestService) {
              var t = Be(
                'json.schema.norequestservice',
                "Unable to load schema from '{0}'. No schema request service available",
                Ge(e)
              )
              return this.promise.resolve(new ze({}, [t]))
            }
            return this.requestService(e).then(
              function(t) {
                if (!t) {
                  var r = Be(
                    'json.schema.nocontent',
                    "Unable to load schema from '{0}': No content.",
                    Ge(e)
                  )
                  return new ze({}, [r])
                }
                var n,
                  i = []
                n = P(t, i)
                var o = i.length
                  ? [
                      Be(
                        'json.schema.invalidFormat',
                        "Unable to parse content from '{0}': Parse error at offset {1}.",
                        Ge(e),
                        i[0].offset
                      )
                    ]
                  : []
                return new ze(n, o)
              },
              function(t) {
                var r = t.toString(),
                  n = t.toString().split('Error: ')
                return (
                  n.length > 1 && (r = n[1]),
                  De(r, '.') && (r = r.substr(0, r.length - 1)),
                  new ze({}, [
                    Be(
                      'json.schema.nocontent',
                      "Unable to load schema from '{0}': {1}.",
                      Ge(e),
                      r
                    )
                  ])
                )
              }
            )
          }),
          (e.prototype.resolveSchemaContent = function(e, t, r) {
            var n = this,
              i = e.errors.slice(0),
              o = e.schema
            if (o.$schema) {
              var a = this.normalizeId(o.$schema)
              if ('http://json-schema.org/draft-03/schema' === a)
                return this.promise.resolve(
                  new He({}, [
                    Be(
                      'json.schema.draft03.notsupported',
                      'Draft-03 schemas are not supported.'
                    )
                  ])
                )
              'https://json-schema.org/draft/2019-09/schema' === a &&
                e.errors.push(
                  Be(
                    'json.schema.draft201909.notsupported',
                    'Draft 2019-09 schemas are not yet fully supported.'
                  )
                )
            }
            var s = this.contextService,
              u = function(e, t, r, n) {
                var o = (function(e, t) {
                  if (!t) return e
                  var r = e
                  return (
                    '/' === t[0] && (t = t.substr(1)),
                    t.split('/').some(function(e) {
                      return !(r = r[e])
                    }),
                    r
                  )
                })(t, n)
                if (o)
                  for (var a in o)
                    o.hasOwnProperty(a) && !e.hasOwnProperty(a) && (e[a] = o[a])
                else
                  i.push(
                    Be(
                      'json.schema.invalidref',
                      "$ref '{0}' in '{1}' can not be resolved.",
                      n,
                      r
                    )
                  )
              },
              c = function(e, t, r, o, a) {
                s &&
                  !/^\w+:\/\/.*/.test(t) &&
                  (t = s.resolveRelativePath(t, o)),
                  (t = n.normalizeId(t))
                var c = n.getOrAddSchemaHandle(t)
                return c.getUnresolvedSchema().then(function(n) {
                  if (((a[t] = !0), n.errors.length)) {
                    var o = r ? t + '#' + r : t
                    i.push(
                      Be(
                        'json.schema.problemloadingref',
                        "Problems loading reference '{0}': {1}",
                        o,
                        n.errors[0]
                      )
                    )
                  }
                  return u(e, n.schema, t, r), l(e, n.schema, t, c.dependencies)
                })
              },
              l = function(e, t, r, i) {
                if (!e || 'object' != typeof e) return Promise.resolve(null)
                for (
                  var o = [e],
                    a = [],
                    s = [],
                    l = function(e) {
                      for (var n = []; e.$ref; ) {
                        var a = e.$ref,
                          l = a.split('#', 2)
                        if ((delete e.$ref, l[0].length > 0))
                          return void s.push(c(e, l[0], l[1], r, i))
                        ;-1 === n.indexOf(a) && (u(e, t, r, l[1]), n.push(a))
                      }
                      !(function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t]
                        for (var r = 0, n = e; r < n.length; r++) {
                          var i = n[r]
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
                          for (var r = 0, n = e; r < n.length; r++) {
                            var i = n[r]
                            if ('object' == typeof i)
                              for (var a in i) {
                                var s = i[a]
                                'object' == typeof s && o.push(s)
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
                          for (var r = 0, n = e; r < n.length; r++) {
                            var i = n[r]
                            if (Array.isArray(i))
                              for (var a = 0, s = i; a < s.length; a++) {
                                var u = s[a]
                                'object' == typeof u && o.push(u)
                              }
                          }
                        })(e.anyOf, e.allOf, e.oneOf, e.items)
                    };
                  o.length;

                ) {
                  var f = o.pop()
                  a.indexOf(f) >= 0 || (a.push(f), l(f))
                }
                return n.promise.all(s)
              }
            return l(o, o, t, r).then(function(e) {
              return new He(o, i)
            })
          }),
          (e.prototype.getSchemaForResource = function(e, t) {
            if (t && t.root && 'object' === t.root.type) {
              var r = t.root.properties.filter(function(e) {
                return (
                  '$schema' === e.keyNode.value &&
                  e.valueNode &&
                  'string' === e.valueNode.type
                )
              })
              if (r.length > 0) {
                var n = Ne(r[0].valueNode)
                if (
                  (n &&
                    (function(e, t) {
                      if (e.length < t.length) return !1
                      for (var r = 0; r < t.length; r++)
                        if (e[r] !== t[r]) return !1
                      return !0
                    })(n, '.') &&
                    this.contextService &&
                    (n = this.contextService.resolveRelativePath(n, e)),
                  n)
                ) {
                  var i = this.normalizeId(n)
                  return this.getOrAddSchemaHandle(i).getResolvedSchema()
                }
              }
            }
            for (
              var o = Object.create(null),
                a = [],
                s = 0,
                u = this.filePatternAssociations;
              s < u.length;
              s++
            ) {
              var c = u[s]
              if (c.matchesPattern(e))
                for (var l = 0, f = c.getSchemas(); l < f.length; l++) {
                  var h = f[l]
                  o[h] || (a.push(h), (o[h] = !0))
                }
            }
            return a.length > 0
              ? this.createCombinedSchema(e, a).getResolvedSchema()
              : this.promise.resolve(null)
          }),
          (e.prototype.createCombinedSchema = function(e, t) {
            if (1 === t.length) return this.getOrAddSchemaHandle(t[0])
            var r = 'schemaservice://combinedSchema/' + encodeURIComponent(e),
              n = {
                allOf: t.map(function(e) {
                  return {$ref: e}
                })
              }
            return this.addSchemaHandle(r, n)
          })
      })()
      function Ge(e) {
        try {
          var t = qe.a.parse(e)
          if ('file' === t.scheme) return t.fsPath
        } catch (e) {}
        return e
      }
      var Ze = Ae(),
        Xe = ((function() {
          function e(e, t) {
            ;(this.jsonSchemaService = e),
              (this.promise = t),
              (this.validationEnabled = !0)
          }
          ;(e.prototype.configure = function(e) {
            e &&
              ((this.validationEnabled = e.validate),
              (this.commentSeverity = e.allowComments ? void 0 : x.Error))
          }),
            (e.prototype.doValidation = function(e, t, r, n) {
              var i = this
              if (!this.validationEnabled) return this.promise.resolve([])
              var o = [],
                a = {},
                s = function(e) {
                  var t =
                    e.range.start.line +
                    ' ' +
                    e.range.start.character +
                    ' ' +
                    e.message
                  a[t] || ((a[t] = !0), o.push(e))
                },
                u = function(n) {
                  var a = r ? Qe(r.trailingCommas) : x.Error,
                    u = r ? Qe(r.comments) : i.commentSeverity
                  if (n) {
                    if (n.errors.length && t.root) {
                      var c = t.root,
                        l = 'object' === c.type ? c.properties[0] : null
                      if (l && '$schema' === l.keyNode.value) {
                        var h = l.valueNode || l,
                          p = f.create(
                            e.positionAt(h.offset),
                            e.positionAt(h.offset + h.length)
                          )
                        s(
                          k.create(
                            p,
                            n.errors[0],
                            x.Warning,
                            ve.SchemaResolveError
                          )
                        )
                      } else {
                        p = f.create(
                          e.positionAt(c.offset),
                          e.positionAt(c.offset + 1)
                        )
                        s(
                          k.create(
                            p,
                            n.errors[0],
                            x.Warning,
                            ve.SchemaResolveError
                          )
                        )
                      }
                    } else {
                      var m = t.validate(e, n.schema)
                      m && m.forEach(s)
                    }
                    ;(function e(t) {
                      if (t && 'object' == typeof t) {
                        if ($(t.allowComments)) return t.allowComments
                        if (t.allOf)
                          for (var r = 0, n = t.allOf; r < n.length; r++) {
                            var i = n[r],
                              o = e(i)
                            if ($(o)) return o
                          }
                      }
                      return
                    })(n.schema) && (u = void 0),
                      (function e(t) {
                        if (t && 'object' == typeof t) {
                          if ($(t.allowTrailingCommas))
                            return t.allowTrailingCommas
                          if ($(t.allowsTrailingCommas))
                            return t.allowsTrailingCommas
                          if (t.allOf)
                            for (var r = 0, n = t.allOf; r < n.length; r++) {
                              var i = n[r],
                                o = e(i)
                              if ($(o)) return o
                            }
                        }
                        return
                      })(n.schema) && (a = void 0)
                  }
                  for (var d = 0, g = t.syntaxErrors; d < g.length; d++) {
                    var v = g[d]
                    if (v.code === ve.TrailingComma) {
                      if ('number' != typeof a) continue
                      v.severity = a
                    }
                    s(v)
                  }
                  if ('number' == typeof u) {
                    var y = Ze(
                      'InvalidCommentToken',
                      'Comments are not permitted in JSON.'
                    )
                    t.comments.forEach(function(e) {
                      s(k.create(e, y, u, ve.CommentNotPermitted))
                    })
                  }
                  return o
                }
              if (n) {
                var c = n.id || 'schemaservice://untitled/' + Xe++
                return this.jsonSchemaService
                  .resolveSchemaContent(new ze(n), c, {})
                  .then(function(e) {
                    return u(e)
                  })
              }
              return this.jsonSchemaService
                .getSchemaForResource(e.uri, t)
                .then(function(e) {
                  return u(e)
                })
            })
        })(),
        0)
      function Qe(e) {
        switch (e) {
          case 'error':
            return x.Error
          case 'warning':
            return x.Warning
          case 'ignore':
            return
        }
      }
      function Ye(e) {
        return e < 48
          ? 0
          : e <= 57
            ? e - 48
            : (e < 97 && (e += 32), e >= 97 && e <= 102 ? e - 97 + 10 : 0)
      }
      function et(e) {
        if ('#' !== e[0]) return null
        switch (e.length) {
          case 4:
            return {
              red: 17 * Ye(e.charCodeAt(1)) / 255,
              green: 17 * Ye(e.charCodeAt(2)) / 255,
              blue: 17 * Ye(e.charCodeAt(3)) / 255,
              alpha: 1
            }
          case 5:
            return {
              red: 17 * Ye(e.charCodeAt(1)) / 255,
              green: 17 * Ye(e.charCodeAt(2)) / 255,
              blue: 17 * Ye(e.charCodeAt(3)) / 255,
              alpha: 17 * Ye(e.charCodeAt(4)) / 255
            }
          case 7:
            return {
              red: (16 * Ye(e.charCodeAt(1)) + Ye(e.charCodeAt(2))) / 255,
              green: (16 * Ye(e.charCodeAt(3)) + Ye(e.charCodeAt(4))) / 255,
              blue: (16 * Ye(e.charCodeAt(5)) + Ye(e.charCodeAt(6))) / 255,
              alpha: 1
            }
          case 9:
            return {
              red: (16 * Ye(e.charCodeAt(1)) + Ye(e.charCodeAt(2))) / 255,
              green: (16 * Ye(e.charCodeAt(3)) + Ye(e.charCodeAt(4))) / 255,
              blue: (16 * Ye(e.charCodeAt(5)) + Ye(e.charCodeAt(6))) / 255,
              alpha: (16 * Ye(e.charCodeAt(7)) + Ye(e.charCodeAt(8))) / 255
            }
        }
        return null
      }
      !(function() {
        function e(e) {
          this.schemaService = e
        }
        ;(e.prototype.findDocumentSymbols = function(e, t, r) {
          var n = this
          void 0 === r && (r = {resultLimit: Number.MAX_VALUE})
          var i = t.root
          if (!i) return null
          var o = r.resultLimit,
            a = e.uri
          if (
            ('vscode://defaultsettings/keybindings.json' === a ||
              De(a.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var s = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u]
              if ('object' === l.type)
                for (var f = 0, p = l.properties; f < p.length; f++) {
                  var m = p[f]
                  if ('key' === m.keyNode.value && m.valueNode) {
                    var d = h.create(e.uri, tt(e, l))
                    if (
                      (s.push({
                        name: Ne(m.valueNode),
                        kind: te.Function,
                        location: d
                      }),
                      --o <= 0)
                    )
                      return (
                        r &&
                          r.onResultLimitExceeded &&
                          r.onResultLimitExceeded(a),
                        s
                      )
                  }
                }
            }
            return s
          }
          for (
            var g = [{node: i, containerName: ''}],
              v = 0,
              y = !1,
              b = [],
              x = function(t, r) {
                'array' === t.type
                  ? t.items.forEach(function(e) {
                      e && g.push({node: e, containerName: r})
                    })
                  : 'object' === t.type &&
                    t.properties.forEach(function(t) {
                      var i = t.valueNode
                      if (i)
                        if (o > 0) {
                          o--
                          var a = h.create(e.uri, tt(e, t)),
                            s = r ? r + '.' + t.keyNode.value : t.keyNode.value
                          b.push({
                            name: n.getKeyLabel(t),
                            kind: n.getSymbolKind(i.type),
                            location: a,
                            containerName: r
                          }),
                            g.push({node: i, containerName: s})
                        } else y = !0
                    })
              };
            v < g.length;

          ) {
            var S = g[v++]
            x(S.node, S.containerName)
          }
          return (
            y && r && r.onResultLimitExceeded && r.onResultLimitExceeded(a), b
          )
        }),
          (e.prototype.findDocumentSymbols2 = function(e, t, r) {
            var n = this
            void 0 === r && (r = {resultLimit: Number.MAX_VALUE})
            var i = t.root
            if (!i) return null
            var o = r.resultLimit,
              a = e.uri
            if (
              ('vscode://defaultsettings/keybindings.json' === a ||
                De(a.toLowerCase(), '/user/keybindings.json')) &&
              'array' === i.type
            ) {
              for (var s = [], u = 0, c = i.items; u < c.length; u++) {
                var l = c[u]
                if ('object' === l.type)
                  for (var f = 0, h = l.properties; f < h.length; f++) {
                    var p = h[f]
                    if ('key' === p.keyNode.value && p.valueNode) {
                      var m = tt(e, l),
                        d = tt(e, p.keyNode)
                      if (
                        (s.push({
                          name: Ne(p.valueNode),
                          kind: te.Function,
                          range: m,
                          selectionRange: d
                        }),
                        --o <= 0)
                      )
                        return (
                          r &&
                            r.onResultLimitExceeded &&
                            r.onResultLimitExceeded(a),
                          s
                        )
                    }
                  }
              }
              return s
            }
            for (
              var g = [],
                v = [{node: i, result: g}],
                y = 0,
                b = !1,
                x = function(t, r) {
                  'array' === t.type
                    ? t.items.forEach(function(t, i) {
                        if (t)
                          if (o > 0) {
                            o--
                            var a = tt(e, t),
                              s = a,
                              u = {
                                name: String(i),
                                kind: n.getSymbolKind(t.type),
                                range: a,
                                selectionRange: s,
                                children: []
                              }
                            r.push(u), v.push({result: u.children, node: t})
                          } else b = !0
                      })
                    : 'object' === t.type &&
                      t.properties.forEach(function(t) {
                        var i = t.valueNode
                        if (i)
                          if (o > 0) {
                            o--
                            var a = tt(e, t),
                              s = tt(e, t.keyNode),
                              u = {
                                name: n.getKeyLabel(t),
                                kind: n.getSymbolKind(i.type),
                                range: a,
                                selectionRange: s,
                                children: []
                              }
                            r.push(u), v.push({result: u.children, node: i})
                          } else b = !0
                      })
                };
              y < v.length;

            ) {
              var S = v[y++]
              x(S.node, S.result)
            }
            return (
              b && r && r.onResultLimitExceeded && r.onResultLimitExceeded(a), g
            )
          }),
          (e.prototype.getSymbolKind = function(e) {
            switch (e) {
              case 'object':
                return te.Module
              case 'string':
                return te.String
              case 'number':
                return te.Number
              case 'array':
                return te.Array
              case 'boolean':
                return te.Boolean
              default:
                return te.Variable
            }
          }),
          (e.prototype.getKeyLabel = function(e) {
            var t = e.keyNode.value
            return (
              t && (t = t.replace(/[\n]/g, '↵')),
              t && t.trim() ? t : '"' + t + '"'
            )
          }),
          (e.prototype.findDocumentColors = function(e, t, r) {
            return this.schemaService
              .getSchemaForResource(e.uri, t)
              .then(function(n) {
                var i = []
                if (n)
                  for (
                    var o =
                        r && 'number' == typeof r.resultLimit
                          ? r.resultLimit
                          : Number.MAX_VALUE,
                      a = {},
                      s = 0,
                      u = t.getMatchingSchemas(n.schema);
                    s < u.length;
                    s++
                  ) {
                    var c = u[s]
                    if (
                      !c.inverted &&
                      c.schema &&
                      ('color' === c.schema.format ||
                        'color-hex' === c.schema.format) &&
                      c.node &&
                      'string' === c.node.type
                    ) {
                      var l = String(c.node.offset)
                      if (!a[l]) {
                        var f = et(Ne(c.node))
                        if (f) {
                          var h = tt(e, c.node)
                          i.push({color: f, range: h})
                        }
                        if (((a[l] = !0), --o <= 0))
                          return (
                            r &&
                              r.onResultLimitExceeded &&
                              r.onResultLimitExceeded(e.uri),
                            i
                          )
                      }
                    }
                  }
                return i
              })
          }),
          (e.prototype.getColorPresentations = function(e, t, r, n) {
            var i,
              o = [],
              a = Math.round(255 * r.red),
              s = Math.round(255 * r.green),
              u = Math.round(255 * r.blue)
            function c(e) {
              var t = e.toString(16)
              return 2 !== t.length ? '0' + t : t
            }
            return (
              (i =
                1 === r.alpha
                  ? '#' + c(a) + c(s) + c(u)
                  : '#' + c(a) + c(s) + c(u) + c(Math.round(255 * r.alpha))),
              o.push({label: i, textEdit: w.replace(n, JSON.stringify(i))}),
              o
            )
          })
      })()
      function tt(e, t) {
        return f.create(
          e.positionAt(t.offset),
          e.positionAt(t.offset + t.length)
        )
      }
      var rt = Ae(),
        nt = {
          schemaAssociations: {},
          schemas: {
            'http://json-schema.org/draft-04/schema#': {
              title: rt(
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
                maxProperties: {
                  allOf: [{$ref: '#/definitions/positiveInteger'}]
                },
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
              title: rt(
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
                minProperties: {
                  $ref: '#/definitions/nonNegativeIntegerDefault0'
                },
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
        it = {
          id: rt('schema.json.id', 'A unique identifier for the schema.'),
          $schema: rt(
            'schema.json.$schema',
            'The schema to verify this document against.'
          ),
          title: rt('schema.json.title', 'A descriptive title of the element.'),
          description: rt(
            'schema.json.description',
            'A long description of the element. Used in hover menus and suggestions.'
          ),
          default: rt(
            'schema.json.default',
            'A default value. Used by suggestions.'
          ),
          multipleOf: rt(
            'schema.json.multipleOf',
            'A number that should cleanly divide the current value (i.e. have no remainder).'
          ),
          maximum: rt(
            'schema.json.maximum',
            'The maximum numerical value, inclusive by default.'
          ),
          exclusiveMaximum: rt(
            'schema.json.exclusiveMaximum',
            'Makes the maximum property exclusive.'
          ),
          minimum: rt(
            'schema.json.minimum',
            'The minimum numerical value, inclusive by default.'
          ),
          exclusiveMinimum: rt(
            'schema.json.exclusiveMininum',
            'Makes the minimum property exclusive.'
          ),
          maxLength: rt(
            'schema.json.maxLength',
            'The maximum length of a string.'
          ),
          minLength: rt(
            'schema.json.minLength',
            'The minimum length of a string.'
          ),
          pattern: rt(
            'schema.json.pattern',
            'A regular expression to match the string against. It is not implicitly anchored.'
          ),
          additionalItems: rt(
            'schema.json.additionalItems',
            'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.'
          ),
          items: rt(
            'schema.json.items',
            'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.'
          ),
          maxItems: rt(
            'schema.json.maxItems',
            'The maximum number of items that can be inside an array. Inclusive.'
          ),
          minItems: rt(
            'schema.json.minItems',
            'The minimum number of items that can be inside an array. Inclusive.'
          ),
          uniqueItems: rt(
            'schema.json.uniqueItems',
            'If all of the items in the array must be unique. Defaults to false.'
          ),
          maxProperties: rt(
            'schema.json.maxProperties',
            'The maximum number of properties an object can have. Inclusive.'
          ),
          minProperties: rt(
            'schema.json.minProperties',
            'The minimum number of properties an object can have. Inclusive.'
          ),
          required: rt(
            'schema.json.required',
            'An array of strings that lists the names of all properties required on this object.'
          ),
          additionalProperties: rt(
            'schema.json.additionalProperties',
            "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
          ),
          definitions: rt(
            'schema.json.definitions',
            'Not used for validation. Place subschemas here that you wish to reference inline with $ref.'
          ),
          properties: rt(
            'schema.json.properties',
            'A map of property names to schemas for each property.'
          ),
          patternProperties: rt(
            'schema.json.patternProperties',
            'A map of regular expressions on property names to schemas for matching properties.'
          ),
          dependencies: rt(
            'schema.json.dependencies',
            'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.'
          ),
          enum: rt(
            'schema.json.enum',
            'The set of literal values that are valid.'
          ),
          type: rt(
            'schema.json.type',
            'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.'
          ),
          format: rt(
            'schema.json.format',
            'Describes the format expected for the value.'
          ),
          allOf: rt(
            'schema.json.allOf',
            'An array of schemas, all of which must match.'
          ),
          anyOf: rt(
            'schema.json.anyOf',
            'An array of schemas, where at least one must match.'
          ),
          oneOf: rt(
            'schema.json.oneOf',
            'An array of schemas, exactly one of which must match.'
          ),
          not: rt('schema.json.not', 'A schema which must not match.'),
          $id: rt('schema.json.$id', 'A unique identifier for the schema.'),
          $ref: rt(
            'schema.json.$ref',
            'Reference a definition hosted on any location.'
          ),
          $comment: rt(
            'schema.json.$comment',
            'Comments from schema authors to readers or maintainers of the schema.'
          ),
          readOnly: rt(
            'schema.json.readOnly',
            'Indicates that the value of the instance is managed exclusively by the owning authority.'
          ),
          examples: rt(
            'schema.json.examples',
            'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.'
          ),
          contains: rt(
            'schema.json.contains',
            'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'
          ),
          propertyNames: rt(
            'schema.json.propertyNames',
            'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.'
          ),
          const: rt(
            'schema.json.const',
            'An instance validates successfully against this keyword if its value is equal to the value of the keyword.'
          ),
          contentMediaType: rt(
            'schema.json.contentMediaType',
            'Describes the media type of a string property.'
          ),
          contentEncoding: rt(
            'schema.json.contentEncoding',
            'Describes the content encoding of a string property.'
          ),
          if: rt(
            'schema.json.if',
            'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'
          ),
          then: rt(
            'schema.json.then',
            'The "if" subschema is used for validation when the "if" subschema succeeds.'
          ),
          else: rt(
            'schema.json.else',
            'The "else" subschema is used for validation when the "if" subschema fails.'
          )
        }
      for (var ot in nt.schemas) {
        var at = nt.schemas[ot]
        for (var st in at.properties) {
          var ut = at.properties[st]
          !0 === ut && (ut = at.properties[st] = {})
          var ct = it[st]
          ct
            ? (ut.description = ct)
            : console.log(st + ": localize('schema.json." + st + '\', "")')
        }
      }
      monaco.Uri
      var lt = monaco.Range,
        ft = (function() {
          function e(e, t, r) {
            var n = this
            ;(this._languageId = e),
              (this._worker = t),
              (this._disposables = []),
              (this._listener = Object.create(null))
            var i = function(e) {
                var t,
                  r = e.getModeId()
                r === n._languageId &&
                  ((n._listener[e.uri.toString()] = e.onDidChangeContent(
                    function() {
                      clearTimeout(t),
                        (t = setTimeout(function() {
                          return n._doValidate(e.uri, r)
                        }, 500))
                    }
                  )),
                  n._doValidate(e.uri, r))
              },
              o = function(e) {
                monaco.editor.setModelMarkers(e, n._languageId, [])
                var t = e.uri.toString(),
                  r = n._listener[t]
                r && (r.dispose(), delete n._listener[t])
              }
            this._disposables.push(monaco.editor.onDidCreateModel(i)),
              this._disposables.push(
                monaco.editor.onWillDisposeModel(function(e) {
                  o(e), n._resetSchema(e.uri)
                })
              ),
              this._disposables.push(
                monaco.editor.onDidChangeModelLanguage(function(e) {
                  o(e.model), i(e.model), n._resetSchema(e.model.uri)
                })
              ),
              this._disposables.push(
                r.onDidChange(function(e) {
                  monaco.editor.getModels().forEach(function(e) {
                    e.getModeId() === n._languageId && (o(e), i(e))
                  })
                })
              ),
              this._disposables.push({
                dispose: function() {
                  for (var e in (monaco.editor.getModels().forEach(o),
                  n._listener))
                    n._listener[e].dispose()
                }
              }),
              monaco.editor.getModels().forEach(i)
          }
          return (
            (e.prototype.dispose = function() {
              this._disposables.forEach(function(e) {
                return e && e.dispose()
              }),
                (this._disposables = [])
            }),
            (e.prototype._resetSchema = function(e) {
              this._worker().then(function(t) {
                t.resetSchema(e.toString())
              })
            }),
            (e.prototype._doValidate = function(e, t) {
              this._worker(e)
                .then(function(r) {
                  return r.doValidation(e.toString()).then(function(r) {
                    var n = r.map(function(e) {
                        return (
                          (r =
                            'number' == typeof (t = e).code
                              ? String(t.code)
                              : t.code),
                          {
                            severity: ht(t.severity),
                            startLineNumber: t.range.start.line + 1,
                            startColumn: t.range.start.character + 1,
                            endLineNumber: t.range.end.line + 1,
                            endColumn: t.range.end.character + 1,
                            message: t.message,
                            code: r,
                            source: t.source
                          }
                        )
                        var t, r
                      }),
                      i = monaco.editor.getModel(e)
                    i &&
                      i.getModeId() === t &&
                      monaco.editor.setModelMarkers(i, t, n)
                  })
                })
                .then(void 0, function(e) {
                  console.error(e)
                })
            }),
            e
          )
        })()
      function ht(e) {
        switch (e) {
          case x.Error:
            return monaco.MarkerSeverity.Error
          case x.Warning:
            return monaco.MarkerSeverity.Warning
          case x.Information:
            return monaco.MarkerSeverity.Info
          case x.Hint:
            return monaco.MarkerSeverity.Hint
          default:
            return monaco.MarkerSeverity.Info
        }
      }
      function pt(e) {
        if (e) return {character: e.column - 1, line: e.lineNumber - 1}
      }
      function mt(e) {
        if (e)
          return {
            start: {line: e.startLineNumber - 1, character: e.startColumn - 1},
            end: {line: e.endLineNumber - 1, character: e.endColumn - 1}
          }
      }
      function dt(e) {
        if (e)
          return new lt(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1
          )
      }
      function gt(e) {
        var t = monaco.languages.CompletionItemKind
        switch (e) {
          case B.Text:
            return t.Text
          case B.Method:
            return t.Method
          case B.Function:
            return t.Function
          case B.Constructor:
            return t.Constructor
          case B.Field:
            return t.Field
          case B.Variable:
            return t.Variable
          case B.Class:
            return t.Class
          case B.Interface:
            return t.Interface
          case B.Module:
            return t.Module
          case B.Property:
            return t.Property
          case B.Unit:
            return t.Unit
          case B.Value:
            return t.Value
          case B.Enum:
            return t.Enum
          case B.Keyword:
            return t.Keyword
          case B.Snippet:
            return t.Snippet
          case B.Color:
            return t.Color
          case B.File:
            return t.File
          case B.Reference:
            return t.Reference
        }
        return t.Property
      }
      function vt(e) {
        if (e) return {range: dt(e.range), text: e.newText}
      }
      var yt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          Object.defineProperty(e.prototype, 'triggerCharacters', {
            get: function() {
              return [' ', ':']
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.provideCompletionItems = function(e, t, r, n) {
            var i = e.uri
            return this._worker(i)
              .then(function(e) {
                return e.doComplete(i.toString(), pt(t))
              })
              .then(function(r) {
                if (r) {
                  var n = e.getWordUntilPosition(t),
                    i = new lt(
                      t.lineNumber,
                      n.startColumn,
                      t.lineNumber,
                      n.endColumn
                    ),
                    o = r.items.map(function(e) {
                      var t = {
                        label: e.label,
                        insertText: e.insertText || e.label,
                        sortText: e.sortText,
                        filterText: e.filterText,
                        documentation: e.documentation,
                        detail: e.detail,
                        range: i,
                        kind: gt(e.kind)
                      }
                      return (
                        e.textEdit &&
                          ((t.range = dt(e.textEdit.range)),
                          (t.insertText = e.textEdit.newText)),
                        e.additionalTextEdits &&
                          (t.additionalTextEdits = e.additionalTextEdits.map(
                            vt
                          )),
                        e.insertTextFormat === K.Snippet &&
                          (t.insertTextRules =
                            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                        t
                      )
                    })
                  return {isIncomplete: r.isIncomplete, suggestions: o}
                }
              })
          }),
          e
        )
      })()
      function bt(e) {
        return 'string' == typeof e
          ? {value: e}
          : (t = e) && 'object' == typeof t && 'string' == typeof t.kind
            ? 'plaintext' === e.kind
              ? {value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')}
              : {value: e.value}
            : {value: '```' + e.language + '\n' + e.value + '\n```\n'}
        var t
      }
      function xt(e) {
        if (e) return Array.isArray(e) ? e.map(bt) : [bt(e)]
      }
      var St = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideHover = function(e, t, r) {
            var n = e.uri
            return this._worker(n)
              .then(function(e) {
                return e.doHover(n.toString(), pt(t))
              })
              .then(function(e) {
                if (e) return {range: dt(e.range), contents: xt(e.contents)}
              })
          }),
          e
        )
      })()
      function kt(e) {
        var t = monaco.languages.SymbolKind
        switch (e) {
          case te.File:
            return t.Array
          case te.Module:
            return t.Module
          case te.Namespace:
            return t.Namespace
          case te.Package:
            return t.Package
          case te.Class:
            return t.Class
          case te.Method:
            return t.Method
          case te.Property:
            return t.Property
          case te.Field:
            return t.Field
          case te.Constructor:
            return t.Constructor
          case te.Enum:
            return t.Enum
          case te.Interface:
            return t.Interface
          case te.Function:
            return t.Function
          case te.Variable:
            return t.Variable
          case te.Constant:
            return t.Constant
          case te.String:
            return t.String
          case te.Number:
            return t.Number
          case te.Boolean:
            return t.Boolean
          case te.Array:
            return t.Array
        }
        return t.Function
      }
      var Ct = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideDocumentSymbols = function(e, t) {
            var r = e.uri
            return this._worker(r)
              .then(function(e) {
                return e.findDocumentSymbols(r.toString())
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return {
                      name: e.name,
                      detail: '',
                      containerName: e.containerName,
                      kind: kt(e.kind),
                      range: dt(e.location.range),
                      selectionRange: dt(e.location.range),
                      tags: []
                    }
                  })
              })
          }),
          e
        )
      })()
      function wt(e) {
        return {tabSize: e.tabSize, insertSpaces: e.insertSpaces}
      }
      var At = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentFormattingEdits = function(e, t, r) {
              var n = e.uri
              return this._worker(n).then(function(e) {
                return e.format(n.toString(), null, wt(t)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(vt)
                })
              })
            }),
            e
          )
        })(),
        It = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentRangeFormattingEdits = function(
              e,
              t,
              r,
              n
            ) {
              var i = e.uri
              return this._worker(i).then(function(e) {
                return e.format(i.toString(), mt(t), wt(r)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(vt)
                })
              })
            }),
            e
          )
        })(),
        Tt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentColors = function(e, t) {
              var r = e.uri
              return this._worker(r)
                .then(function(e) {
                  return e.findDocumentColors(r.toString())
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      return {color: e.color, range: dt(e.range)}
                    })
                })
            }),
            (e.prototype.provideColorPresentations = function(e, t, r) {
              var n = e.uri
              return this._worker(n)
                .then(function(e) {
                  return e.getColorPresentations(
                    n.toString(),
                    t.color,
                    mt(t.range)
                  )
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      var t = {label: e.label}
                      return (
                        e.textEdit && (t.textEdit = vt(e.textEdit)),
                        e.additionalTextEdits &&
                          (t.additionalTextEdits = e.additionalTextEdits.map(
                            vt
                          )),
                        t
                      )
                    })
                })
            }),
            e
          )
        })(),
        Et = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideFoldingRanges = function(e, t, r) {
              var n = e.uri
              return this._worker(n)
                .then(function(e) {
                  return e.getFoldingRanges(n.toString(), t)
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      var t = {start: e.startLine + 1, end: e.endLine + 1}
                      return (
                        void 0 !== e.kind &&
                          (t.kind = (function(e) {
                            switch (e) {
                              case v.Comment:
                                return monaco.languages.FoldingRangeKind.Comment
                              case v.Imports:
                                return monaco.languages.FoldingRangeKind.Imports
                              case v.Region:
                                return monaco.languages.FoldingRangeKind.Region
                            }
                            return
                          })(e.kind)),
                        t
                      )
                    })
                })
            }),
            e
          )
        })()
      var Ot = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideSelectionRanges = function(e, t, r) {
            var n = e.uri
            return this._worker(n)
              .then(function(e) {
                return e.getSelectionRanges(n.toString(), t.map(pt))
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    for (var t = []; e; )
                      t.push({range: dt(e.range)}), (e = e.parent)
                    return t
                  })
              })
          }),
          e
        )
      })()
      function jt(e) {
        return {
          getInitialState: function() {
            return new Pt(null, null, !1)
          },
          tokenize: function(t, r, n, i) {
            return (function(e, t, r, n, i) {
              void 0 === n && (n = 0)
              var o = 0,
                a = !1
              switch (r.scanError) {
                case 2:
                  ;(t = '"' + t), (o = 1)
                  break
                case 1:
                  ;(t = '/*' + t), (o = 2)
              }
              var s,
                u,
                c = j(t),
                l = r.lastWasColon
              u = {tokens: [], endState: r.clone()}
              for (;;) {
                var f = n + c.getPosition(),
                  h = ''
                if (17 === (s = c.scan())) break
                if (f === n + c.getPosition())
                  throw new Error(
                    'Scanner did not advance, next 3 characters are: ' +
                      t.substr(c.getPosition(), 3)
                  )
                switch ((a && (f -= o), (a = o > 0), s)) {
                  case 1:
                  case 2:
                    ;(h = 'delimiter.bracket.json'), (l = !1)
                    break
                  case 3:
                  case 4:
                    ;(h = 'delimiter.array.json'), (l = !1)
                    break
                  case 6:
                    ;(h = 'delimiter.colon.json'), (l = !0)
                    break
                  case 5:
                    ;(h = 'delimiter.comma.json'), (l = !1)
                    break
                  case 8:
                  case 9:
                  case 7:
                    ;(h = 'keyword.json'), (l = !1)
                    break
                  case 10:
                    ;(h = l ? 'string.value.json' : 'string.key.json'), (l = !1)
                    break
                  case 11:
                    ;(h = 'number.json'), (l = !1)
                }
                if (e)
                  switch (s) {
                    case 12:
                      h = 'comment.line.json'
                      break
                    case 13:
                      h = 'comment.block.json'
                  }
                ;(u.endState = new Pt(r.getStateData(), c.getTokenError(), l)),
                  u.tokens.push({startIndex: f, scopes: h})
              }
              return u
            })(e, t, r, n)
          }
        }
      }
      var Pt = (function() {
        function e(e, t, r) {
          ;(this._state = e), (this.scanError = t), (this.lastWasColon = r)
        }
        return (
          (e.prototype.clone = function() {
            return new e(this._state, this.scanError, this.lastWasColon)
          }),
          (e.prototype.equals = function(t) {
            return (
              t === this ||
              (!!(t && t instanceof e) &&
                (this.scanError === t.scanError &&
                  this.lastWasColon === t.lastWasColon))
            )
          }),
          (e.prototype.getStateData = function() {
            return this._state
          }),
          (e.prototype.setStateData = function(e) {
            this._state = e
          }),
          e
        )
      })()
      function Mt(e) {
        var t = [],
          r = [],
          n = new i(e)
        t.push(n)
        var o = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return n.getLanguageServiceWorker.apply(n, e)
        }
        function a() {
          var t = e.languageId,
            n = e.modeConfiguration
          Vt(r),
            n.documentFormattingEdits &&
              r.push(
                monaco.languages.registerDocumentFormattingEditProvider(
                  t,
                  new At(o)
                )
              ),
            n.documentRangeFormattingEdits &&
              r.push(
                monaco.languages.registerDocumentRangeFormattingEditProvider(
                  t,
                  new It(o)
                )
              ),
            n.completionItems &&
              r.push(
                monaco.languages.registerCompletionItemProvider(t, new yt(o))
              ),
            n.hovers &&
              r.push(monaco.languages.registerHoverProvider(t, new St(o))),
            n.documentSymbols &&
              r.push(
                monaco.languages.registerDocumentSymbolProvider(t, new Ct(o))
              ),
            n.tokens && r.push(monaco.languages.setTokensProvider(t, jt(!0))),
            n.colors &&
              r.push(monaco.languages.registerColorProvider(t, new Tt(o))),
            n.foldingRanges &&
              r.push(
                monaco.languages.registerFoldingRangeProvider(t, new Et(o))
              ),
            n.diagnostics && r.push(new ft(t, o, e)),
            n.selectionRanges &&
              r.push(
                monaco.languages.registerSelectionRangeProvider(t, new Ot(o))
              )
        }
        a(), t.push(monaco.languages.setLanguageConfiguration(e.languageId, Ft))
        var s = e.modeConfiguration
        return (
          e.onDidChange(function(e) {
            e.modeConfiguration !== s && ((s = e.modeConfiguration), a())
          }),
          t.push(_t(r)),
          _t(t)
        )
      }
      function _t(e) {
        return {
          dispose: function() {
            return Vt(e)
          }
        }
      }
      function Vt(e) {
        for (; e.length; ) e.pop().dispose()
      }
      r.d(t, 'setupMode', function() {
        return Mt
      })
      var Ft = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: {lineComment: '//', blockComment: ['/*', '*/']},
        brackets: [['{', '}'], ['[', ']']],
        autoClosingPairs: [
          {open: '{', close: '}', notIn: ['string']},
          {open: '[', close: ']', notIn: ['string']},
          {open: '"', close: '"', notIn: ['string']}
        ]
      }
    },
    784: function(e, t, r) {
      'use strict'
      ;(function(e) {
        r.d(t, 'a', function() {
          return p
        })
        var n,
          i,
          o,
          a = ((n = function(e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t
                }) ||
              function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
              })(e, t)
          }),
          function(e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()))
          })
        if ('object' == typeof e) o = 'win32' === e.platform
        else if ('object' == typeof navigator) {
          var s = navigator.userAgent
          o = s.indexOf('Windows') >= 0
        }
        var u = /^\w[\w\d+.-]*$/,
          c = /^\//,
          l = /^\/\//
        var f = '/',
          h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
          p = (function() {
            function e(e, t, r, n, i, o) {
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
                    })(this.scheme, r || '')),
                    (this.query = n || ''),
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
                  r = e.authority,
                  n = e.path,
                  i = e.query,
                  o = e.fragment
                return (
                  void 0 === t ? (t = this.scheme) : null === t && (t = ''),
                  void 0 === r ? (r = this.authority) : null === r && (r = ''),
                  void 0 === n ? (n = this.path) : null === n && (n = ''),
                  void 0 === i ? (i = this.query) : null === i && (i = ''),
                  void 0 === o ? (o = this.fragment) : null === o && (o = ''),
                  t === this.scheme &&
                  r === this.authority &&
                  n === this.path &&
                  i === this.query &&
                  o === this.fragment
                    ? this
                    : new d(t, r, n, i, o)
                )
              }),
              (e.parse = function(e, t) {
                void 0 === t && (t = !1)
                var r = h.exec(e)
                return r
                  ? new d(
                      r[2] || '',
                      decodeURIComponent(r[4] || ''),
                      decodeURIComponent(r[5] || ''),
                      decodeURIComponent(r[7] || ''),
                      decodeURIComponent(r[9] || ''),
                      t
                    )
                  : new d('', '', '', '', '')
              }),
              (e.file = function(e) {
                var t = ''
                if (
                  (o && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f)
                ) {
                  var r = e.indexOf(f, 2)
                  ;-1 === r
                    ? ((t = e.substring(2)), (e = f))
                    : ((t = e.substring(2, r)), (e = e.substring(r) || f))
                }
                return new d('file', t, e, '', '')
              }),
              (e.from = function(e) {
                return new d(e.scheme, e.authority, e.path, e.query, e.fragment)
              }),
              (e.prototype.toString = function(e) {
                return void 0 === e && (e = !1), x(this, e)
              }),
              (e.prototype.toJSON = function() {
                return this
              }),
              (e.revive = function(t) {
                if (t) {
                  if (t instanceof e) return t
                  var r = new d(t)
                  return (
                    (r._formatted = t.external),
                    (r._fsPath = t._sep === m ? t.fsPath : null),
                    r
                  )
                }
                return t
              }),
              e
            )
          })(),
          m = o ? 1 : void 0,
          d = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this
              return (t._formatted = null), (t._fsPath = null), t
            }
            return (
              a(t, e),
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
                    ? x(this, !0)
                    : (this._formatted || (this._formatted = x(this, !1)),
                      this._formatted)
                )
              }),
              (t.prototype.toJSON = function() {
                var e = {$mid: 1}
                return (
                  this._fsPath && ((e.fsPath = this._fsPath), (e._sep = m)),
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
          })(p),
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
          for (var r = void 0, n = -1, i = 0; i < e.length; i++) {
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
              -1 !== n &&
                ((r += encodeURIComponent(e.substring(n, i))), (n = -1)),
                void 0 !== r && (r += e.charAt(i))
            else {
              void 0 === r && (r = e.substr(0, i))
              var a = g[o]
              void 0 !== a
                ? (-1 !== n &&
                    ((r += encodeURIComponent(e.substring(n, i))), (n = -1)),
                  (r += a))
                : -1 === n && (n = i)
            }
          }
          return (
            -1 !== n && (r += encodeURIComponent(e.substring(n))),
            void 0 !== r ? r : e
          )
        }
        function y(e) {
          for (var t = void 0, r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r)
            35 === n || 63 === n
              ? (void 0 === t && (t = e.substr(0, r)), (t += g[n]))
              : void 0 !== t && (t += e[r])
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
        function x(e, t) {
          var r = t ? y : v,
            n = '',
            i = e.scheme,
            o = e.authority,
            a = e.path,
            s = e.query,
            u = e.fragment
          if (
            (i && ((n += i), (n += ':')),
            (o || 'file' === i) && ((n += f), (n += f)),
            o)
          ) {
            var c = o.indexOf('@')
            if (-1 !== c) {
              var l = o.substr(0, c)
              ;(o = o.substr(c + 1)),
                -1 === (c = l.indexOf(':'))
                  ? (n += r(l, !1))
                  : ((n += r(l.substr(0, c), !1)),
                    (n += ':'),
                    (n += r(l.substr(c + 1), !1))),
                (n += '@')
            }
            ;-1 === (c = (o = o.toLowerCase()).indexOf(':'))
              ? (n += r(o, !1))
              : ((n += r(o.substr(0, c), !1)), (n += o.substr(c)))
          }
          if (a) {
            if (
              a.length >= 3 &&
              47 === a.charCodeAt(0) &&
              58 === a.charCodeAt(2)
            )
              (h = a.charCodeAt(1)) >= 65 &&
                h <= 90 &&
                (a = '/' + String.fromCharCode(h + 32) + ':' + a.substr(3))
            else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
              var h
              ;(h = a.charCodeAt(0)) >= 65 &&
                h <= 90 &&
                (a = String.fromCharCode(h + 32) + ':' + a.substr(2))
            }
            n += r(a, !0)
          }
          return (
            s && ((n += '?'), (n += r(s, !1))),
            u && ((n += '#'), (n += t ? u : v(u, !1))),
            n
          )
        }
      }.call(this, r(162)))
    }
  }
])
//# sourceMappingURL=1.bundle.js.map
