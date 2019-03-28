;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    219: function(n, t, e) {
      'use strict'
      var o = e(7),
        a = e.n(o),
        i = e(0),
        r = e.n(i),
        l = e(224),
        p = e(1),
        c = e(221),
        d = e(4),
        s = e(29),
        m = e(75),
        f = e(225),
        g = e.n(f),
        u = e(98),
        h = d.c.span.withConfig({
          displayName: 'TextGradient',
          componentId: 'mvk6mi-0',
        })([
          'background:linear-gradient(45deg,#fff2df,#99ffec,#faa7ff);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;',
        ]),
        b = e(226),
        x = d.c.nav.withConfig({
          displayName: 'Nav__Navbar',
          componentId: 'sc-1ofyja1-0',
        })(
          [
            'display:',
            ';position:fixed;top:0;bottom:0;left:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:0 0 25px;background:#43436a;color:#cbd6ff;overflow-y:auto;z-index:1;transform:',
            ';transition:transform ',
            ',visibility 0.2s,opacity 0.8s;transition-timing-function:',
            ';visibility:',
            ';box-shadow:5px 0 30px 0 rgba(0,32,64,0.25);opacity:',
            ';',
            '{display:block;visibility:visible;transform:none;box-shadow:none;opacity:1;}',
          ],
          function(n) {
            return n.isMounted ? 'block' : 'none'
          },
          function(n) {
            return n.isOpen
              ? 'translate3d(-4%, 0, 0) scaleX(1)'
              : 'translate3d(-100%, 0, 0) scaleX(0)'
          },
          function(n) {
            return n.isOpen ? '0.55s' : '0.3s'
          },
          function(n) {
            return n.isOpen ? 'cubic-bezier(.165, 1.3, 0.4, 1)' : 'ease'
          },
          function(n) {
            return n.isOpen ? 'visible' : 'hidden'
          },
          function(n) {
            return n.isOpen ? 1 : 0
          },
          p.g.lg,
        ),
        y = d.c.ul.withConfig({
          displayName: 'Nav__List',
          componentId: 'sc-1ofyja1-1',
        })(['list-style:none;padding-left:0;margin:0;']),
        w = d.c.li.withConfig({
          displayName: 'Nav__ListItem',
          componentId: 'sc-1ofyja1-2',
        })(
          [
            'margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:10px 25px;padding-left:calc(25px + 4%);font-size:17px;',
            '{padding-left:25px;}&:hover{border-bottom-color:transparent;text-decoration:none;color:white;}}',
          ],
          p.g.lg,
        ),
        k = d.c.button.withConfig({
          displayName: 'Nav__XButton',
          componentId: 'sc-1ofyja1-3',
        })(
          [
            'position:absolute;right:5px;top:5px;background:none;border:none;color:inherit;padding:0;transform:scale(0.9);',
            '{display:none;}',
          ],
          p.g.lg,
        ),
        v = d.c.div.withConfig({
          displayName: 'Nav__Version',
          componentId: 'sc-1ofyja1-4',
        })(
          [
            'color:#d0ffba;font-weight:bold;margin:0;padding:15px 25px;padding-left:calc(25px + 4%);',
            '{padding-left:25px;}',
          ],
          p.g.lg,
        ),
        z = (function(n) {
          function t() {
            for (
              var t, e = arguments.length, o = new Array(e), a = 0;
              a < e;
              a++
            )
              o[a] = arguments[a]
            return (
              ((t = n.call.apply(n, [this].concat(o)) || this).state = {
                isMounted: !1,
                transitions: !0,
              }),
              (t.ref = Object(i.createRef)()),
              (t.handleResize = function() {
                t.setState({ transitions: !1 }),
                  clearTimeout(t.timeout),
                  (t.timeout = setTimeout(function() {
                    t.setState({ transitions: !0 })
                  }, 100))
              }),
              (t.handleClose = function() {
                t.props.close()
              }),
              (t.handleBlur = function(n) {
                n.currentTarget.contains(n.relatedTarget) || t.props.close()
              }),
              (t.handleOutsideClick = function(n) {
                t.props.isOpen &&
                  !t.ref.current.contains(n.target) &&
                  t.props.close()
              }),
              t
            )
          }
          a()(t, n)
          var e = t.prototype
          return (
            (e.componentDidMount = function() {
              this.setState({ isMounted: !0 }),
                window.addEventListener('resize', this.handleResize),
                window.addEventListener(
                  'mousedown',
                  this.handleOutsideClick,
                  !0,
                ),
                this.handleResize()
            }),
            (e.componentWillUnmount = function() {
              window.removeEventListener('resize', this.handleResize),
                window.removeEventListener(
                  'mousedown',
                  this.handleOutsideClick,
                  !0,
                ),
                clearTimeout(this.timeout)
            }),
            (e.render = function() {
              var n = this.props.isOpen,
                t = this.state,
                e = t.isMounted,
                o = t.transitions
              return r.a.createElement(
                u.a,
                null,
                r.a.createElement(
                  x,
                  {
                    id: 'main-nav',
                    ref: this.ref,
                    style: { transition: o ? '' : 'none' },
                    isOpen: n,
                    isMounted: e,
                    onBlur: this.handleBlur,
                  },
                  r.a.createElement(
                    v,
                    null,
                    r.a.createElement(h, null, 'v', b.a),
                  ),
                  r.a.createElement(
                    k,
                    { 'aria-label': 'Close Menu', onClick: this.handleClose },
                    r.a.createElement(g.a, {
                      style: { width: 36, height: 36 },
                    }),
                  ),
                  r.a.createElement(
                    y,
                    null,
                    r.a.createElement(s.StaticQuery, {
                      query: E,
                      render: function(n) {
                        return Object(m.a)(n.allMdx.edges).map(function(n) {
                          var t = n.node
                          return r.a.createElement(
                            w,
                            { key: t.frontmatter.path },
                            r.a.createElement(
                              p.f,
                              { to: t.frontmatter.path },
                              t.frontmatter.title,
                            ),
                          )
                        })
                      },
                      data: c,
                    }),
                  ),
                ),
              )
            }),
            t
          )
        })(i.Component),
        E = '4190207198',
        N = e(227),
        C = e.n(N),
        M = e(228),
        j = e.n(M),
        O = 'rgba(0, 32, 128, 0.12)',
        _ = 'linear-gradient(135deg, #00acff, #6f99fc) no-repeat',
        I = Object(d.c)(p.e).withConfig({
          displayName: 'NavButtons__Container',
          componentId: 'ii0ddk-0',
        })(
          [
            'margin-top:40px;margin-left:-10px;margin-right:-10px;',
            '{margin-left:-35px;margin-right:-35px;}',
          ],
          p.g.md,
        ),
        T = Object(d.c)(s.Link).withConfig({
          displayName: 'NavButtons__NavButton',
          componentId: 'ii0ddk-1',
        })(
          [
            'display:block;padding:40px 25px;border:',
            ';border-radius:4px;background:',
            ';text-decoration:none;color:',
            ';font-weight:bold;margin:0 10px 15px;font-size:20px;transition:box-shadow 0.15s,border 0.15s,filter 0.15s;width:100%;&:hover{border-color:inherit;background:',
            ';color:',
            ';text-decoration:none;}&[data-next]{border-bottom:none;filter:saturate(1.15);order:-1;&:hover{filter:saturate(1.15) brightness(1.2);}}',
            '{width:calc(50% - 20px);margin:0 10px;order:initial;&[data-next]{order:initial;}}',
            '{font-size:24px;}',
          ],
          function(n) {
            return n['data-next'] ? 'none' : '1px solid ' + O
          },
          function(n) {
            return n['data-next'] ? _ : 'white'
          },
          function(n) {
            return n['data-next'] ? 'white' : 'inherit'
          },
          function(n) {
            return n['data-next'] ? _ : 'white'
          },
          function(n) {
            return n['data-next'] ? 'white' : 'inherit'
          },
          p.g.sm,
          p.g.md,
        )
      var S = function(n) {
          var t = n.next
          return r.a.createElement(
            I,
            null,
            r.a.createElement(s.StaticQuery, {
              query: L,
              render: function(n) {
                var e = Object(m.a)(n.allMdx.edges).map(function(n) {
                    return n.node
                  }),
                  o = e[t],
                  a = t > 1 ? e[t - 2] : null
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  a &&
                    r.a.createElement(
                      T,
                      { to: a.frontmatter.path },
                      r.a.createElement(j.a, {
                        'aria-label': 'Previous',
                        style: { verticalAlign: -4 },
                      }),
                      ' ',
                      a.frontmatter.title,
                    ),
                  o &&
                    r.a.createElement(
                      T,
                      { to: o.frontmatter.path, 'data-next': !0 },
                      o.frontmatter.title,
                      ' ',
                      r.a.createElement(C.a, {
                        'aria-label': 'Next',
                        style: { verticalAlign: -4 },
                      }),
                    ),
                )
              },
              data: c,
            }),
          )
        },
        L = '4190207198',
        A = e(220),
        F = e.n(A),
        B = e(10),
        D = e.n(B),
        H = e(229),
        V = e.n(H),
        R = e(230),
        q = e.n(R),
        P = e(231),
        J = e.n(P),
        G = e(232),
        Q = e.n(G),
        X = d.c.div.withConfig({
          displayName: 'VersionNotice__Banner',
          componentId: 'sc-6cohjm-0',
        })(
          [
            'position:relative;top:-25px;background:#4b4f74;color:white;border-radius:0 0 10px 10px;padding:15px;font-size:15px;margin-bottom:15px;margin-left:50px;font-weight:600;a{color:white;border-bottom:1px solid white;&:hover{color:cyan;}}',
            '{margin-left:0;margin-bottom:25px;}',
          ],
          p.g.lg,
        )
      var U = function() {
          return r.a.createElement(
            X,
            null,
            "You're reading the docs for the newest version, v4!",
            r.a.createElement('br', null),
            r.a.createElement(
              'a',
              {
                href: 'https://github.com/atomiks/tippyjs/releases/tag/v4.0.0',
                rel: 'noopener noreferrer',
                target: '_blank',
              },
              'Read the migration guide from v3',
            ),
            ' ',
            'or',
            ' ',
            r.a.createElement(
              'a',
              {
                href:
                  'https://github.com/atomiks/tippyjs/tree/8c8a367fa8de94ddd1b1cc7fb259dd5d5f075458/website/src/pages',
                rel: 'noopener noreferrer',
                target: '_blank',
              },
              'view the old docs for v3',
            ),
          )
        },
        Y = e(233),
        W = e.n(Y),
        Z = e(3)
      function K() {
        var n = F()(['', ''])
        return (
          (K = function() {
            return n
          }),
          n
        )
      }
      var $ = d.c.header.withConfig({
          displayName: 'Header__HeaderRoot',
          componentId: 'sc-9eu2yh-0',
        })(
          [
            "position:relative;background-image:radial-gradient( circle at 0% 20%,#a09eff,#4884f0,#b3e0fa );background-repeat:no-repeat;background-size:cover;padding:25px 0;text-align:center;margin-bottom:50px;color:white;&::before{content:'';position:absolute;top:-50px;display:block;background-image:url(",
            ');background-size:cover;width:100vw;height:100vh;',
            '{left:-250px;}}',
          ],
          W.a,
          p.g.lg,
        ),
        nn = d.c.img.withConfig({
          displayName: 'Header__Logo',
          componentId: 'sc-9eu2yh-1',
        })(['display:block;height:70px;margin:0 auto 10px;']),
        tn = d.c.h1.withConfig({
          displayName: 'Header__Title',
          componentId: 'sc-9eu2yh-2',
        })([
          'display:inline-block;font-size:48px;font-weight:600;margin-top:0;margin-bottom:25px;font-weight:400;',
        ]),
        en = Object(d.c)(p.d).withConfig({
          displayName: 'Header__ButtonLink',
          componentId: 'sc-9eu2yh-3',
        })([
          'background:rgba(255,255,255,0.15);padding:12px 24px;border-radius:4px;transition:all 0.25s;color:#ffffff;margin:0 10px 10px;font-weight:500;&:hover{background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);text-decoration:none;}',
        ]),
        on = d.c.button.withConfig({
          displayName: 'Header__MenuButton',
          componentId: 'sc-9eu2yh-4',
        })(
          [
            'position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;',
            '{display:none;}',
          ],
          p.g.lg,
        ),
        an = Object(d.c)(p.d).withConfig({
          displayName: 'Header__PoweredByLink',
          componentId: 'sc-9eu2yh-5',
        })([
          'position:relative;top:10px;color:rgba(255,255,255,0.9);font-size:90%;&:hover{color:white;}',
        ]),
        rn = Object(d.b)(
          [
            'margin:0 0 -30px;',
            '{margin:-6% 0 -30px;}@media (min-width:1700px){margin:-7% 0 -30px;}',
          ],
          p.g.md,
        ),
        ln = { verticalAlign: -6, marginRight: 10 },
        pn = D()({}, ln, { color: '#ffe6b3', width: 20, height: 20 }),
        cn = D()({}, ln, { color: '#333' }),
        dn = { width: 36, height: 36 },
        sn = (function(n) {
          function t() {
            for (
              var t, e = arguments.length, o = new Array(e), a = 0;
              a < e;
              a++
            )
              o[a] = arguments[a]
            return (
              ((t = n.call.apply(n, [this].concat(o)) || this).state = {
                displayVersionNotice: !1,
              }),
              t
            )
          }
          a()(t, n)
          var e = t.prototype
          return (
            (e.componentDidMount = function() {
              var n = this.props.pageIndex,
                t = localStorage.getItem('disableVersionNotice')
              localStorage.setItem('disableVersionNotice', 'true'),
                this.setState({ displayVersionNotice: n > 1 && null === t })
            }),
            (e.render = function() {
              var n = this.props,
                t = n.isNavOpen,
                e = n.openNav,
                o = this.state.displayVersionNotice
              return r.a.createElement(
                $,
                null,
                r.a.createElement(
                  p.b,
                  null,
                  o && r.a.createElement(U, null),
                  r.a.createElement(nn, {
                    src: V.a,
                    draggable: 'false',
                    alt: 'Tippy Logo',
                  }),
                  r.a.createElement(
                    tn,
                    null,
                    r.a.createElement(h, null, 'Tippy.js'),
                  ),
                  r.a.createElement(
                    p.e,
                    { justify: 'center' },
                    r.a.createElement(
                      Z.b,
                      {
                        content:
                          'If you like Tippy.js, feel free to star it on GitHub!',
                        animation: 'shift-toward',
                        arrow: !0,
                      },
                      r.a.createElement(
                        en,
                        { href: 'https://github.com/atomiks/tippyjs' },
                        r.a.createElement(q.a, { style: cn }),
                        'View on GitHub',
                      ),
                    ),
                  ),
                  r.a.createElement(
                    on,
                    {
                      'aria-label': 'Menu',
                      'aria-expanded': t ? 'true' : 'false',
                      onClick: e,
                    },
                    r.a.createElement(Q.a, { style: dn }),
                  ),
                  r.a.createElement(
                    an,
                    { href: 'https://popper.js.org' },
                    r.a.createElement(J.a, { style: pn }),
                    'Proudly powered by Popper.js',
                  ),
                ),
                r.a.createElement(
                  mn,
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 1920 240',
                    fill: 'white',
                  },
                  r.a.createElement(
                    'g',
                    null,
                    r.a.createElement('path', {
                      d:
                        'M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z',
                    }),
                  ),
                ),
              )
            }),
            t
          )
        })(i.Component),
        mn = Object(d.c)('svg')(K(), rn),
        fn = d.c.main.withConfig({
          displayName: 'Main',
          componentId: 'sc-7otpyo-0',
        })(['', '{margin-left:250px;}'], p.g.lg),
        gn = d.c.footer.withConfig({
          displayName: 'Footer',
          componentId: 'sc-1xqajj9-0',
        })(
          [
            'text-align:center;padding:25px 0;border-top:1px solid ',
            ';margin-top:50px;color:#9dacb6;font-size:85%;background:white;',
          ],
          O,
        ),
        un = e(222)
      function hn() {
        var n = F()([
          "\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #515168;\n    height: 100%;\n    font-size: 16px;\n    -webkit-tap-highlight-color: transparent;\n\n    ",
          " {\n      font-size: 17px;\n    }\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #333;\n    color: white;\n  }\n  &::selection {\n    background: #333;\n    color: white;\n  }\n\n  pre code::-moz-selection,\n  pre span::-moz-selection {\n    background-color: rgba(200, 210, 255, 0.25);\n    color: inherit;\n  }\n  pre code::selection,\n  pre span::selection {\n    background-color: rgba(200, 210, 255, 0.25);\n    color: inherit;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    position: relative;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    color: #333;\n\n    &:hover .link-icon {\n      opacity: 1;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n    display: inline-block;\n    color: inherit;\n    text-shadow: -2px 2px 0px #ffffff, -4px 4px 0px #aeffce;\n    color: #5b36df;\n    padding: 10px 0;\n    transition: color 0.3s;\n\n    &::-moz-selection {\n      text-shadow: none;\n    }\n\n    &::selection {\n      text-shadow: none;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: calc(50% + 40px);\n      margin-left: -25px;\n      background: linear-gradient(90deg,#aefcf9,#f4ffdf);\n      z-index: -1;\n      transition: width 0.4s cubic-bezier(.23, 1, .32, 1);\n      border-radius: 3px;\n    }\n\n    ",
          ' {\n      font-size: 2.488rem;\n    }\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 2.5rem;\n    padding-right: 30px;\n\n    ',
          ' {\n      font-size: 2.074rem;\n    }\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 2.2rem;\n    color: #666c80;\n\n    ',
          ' {\n      font-size: 1.728rem;\n    }\n  }\n\n  h5 {\n    font-size: 1.44rem;\n    color: #666c80;\n  }\n\n  .link-icon {\n    display: inline-block;\n    position: absolute;\n    padding: 10px 0;\n    opacity: 0;\n    transition: opacity 0.2s;\n    width: 30px;\n    top: -10px;\n    right: 0;\n    color: #5b36df;\n\n    &:hover,\n    &:focus {\n      opacity: 1;\n      text-decoration: none;\n    }\n\n    ',
          ' {\n      right: initial;\n      left: -30px;\n\n      &:focus {\n        width: 20px;\n      }\n    }\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n\n  ul {\n    padding-left: 18px;\n  }\n\n  table {\n    box-shadow: 0 0 0 1px rgba(0,32,128,0.1);\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n    font-size: 16px;\n\n    ',
          ' {\n      width: calc(100% + 50px);\n      margin-left: -25px;\n    }\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted rgba(0,32,128,0.1);\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 18px;\n    color: #333;\n    padding: 0;\n  }\n\n  th:last-child, td:last-child {\n    padding-left: 25px;\n  }\n\n  table th, table td {\n    text-align: left;\n    padding: 15px;\n\n    ',
          ' {\n      padding: 15px 25px;\n    }\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid rgba(0,32,128,0.1);\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted rgba(0,32,128,0.1);\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    th:last-child, td:last-child {\n      padding-left: 15px;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid rgba(0, 16, 64, 0.15);\n    margin-top: 5px;\n  }\n\n  [data-reach-skip-link] {\n    position: fixed;\n    z-index: 2;\n    padding: 10px;\n    left: -9999px;\n    background: white;\n    border-radius: 4px;\n    font-weight: bold;\n    font-size: 15px;\n\n    &:focus {\n      left: 5px;\n      top: 5px;\n    }\n  }\n\n  button,\n  a {\n    &.focus-visible {\n      outline: 0;\n      box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 5px rgb(150, 180, 255);\n    }\n  }\n\n  blockquote {\n    color: #5b36df;\n    border-left: 5px solid;\n    margin: 0;\n    padding-left: 15px;\n  }\n',
        ])
        return (
          (hn = function() {
            return n
          }),
          n
        )
      }
      var bn = Object(d.a)(
        hn(),
        p.g.md,
        p.g.md,
        p.g.md,
        p.g.md,
        p.g.md,
        p.g.xl,
        p.g.xl,
      )
      function xn() {
        var n = F()([
          "\n  .tippy-tooltip.ajax-theme {\n    position: absolute;\n    width: 200px;\n    padding: 0;\n    overflow: hidden;\n\n    img {\n      display: block;\n      max-width: 100%;\n    }\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.ajax-theme {\n    top: auto !important;\n    bottom: 0;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.ajax-theme {\n    bottom: auto !important;\n    top: 0;\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.tomato-theme .tippy-arrow {\n    border-top-color: tomato;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.tomato-theme .tippy-arrow {\n    border-bottom-color: tomato;\n  }\n\n  .tippy-tooltip.tomato-theme {\n    font-weight: bold;\n    color: yellow;\n    background: tomato;\n\n    &[data-animatefill] {\n      background-color: transparent;\n    }\n\n    .tippy-backdrop {\n      background: tomato;\n    }\n\n    .tippy-roundarrow {\n      fill: tomato;\n    }\n  }\n\n  .tippy-tooltip.scaled-arrow-theme .tippy-arrow {\n    transform: scale(1.5);\n  }\n\n  .tippy-tooltip.dropdown-theme {\n    text-align: left;\n    font-size: 95%;\n  }\n\n  .tippy-tooltip.crazy-inertia-theme {\n    &[data-inertia][data-state=\"visible\"] {\n      transition-timing-function: cubic-bezier(0.54, 100, 0.2, 0.26);\n    }\n  }\n",
        ])
        return (
          (xn = function() {
            return n
          }),
          n
        )
      }
      var yn = Object(d.a)(xn())
      function wn() {
        var n = F()([
          "\n  code[class*='language-'],\n  pre[class*='language-'] {\n    font-family: ",
          ";\n    color: #ff98a4;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 5%;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #212139;\n    font-size: 17px;\n    line-height: 1.5;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    ",
          ' {\n      margin-left: -25px;\n      margin-right: -25px;\n      padding: 16px 25px;\n    }\n\n    ',
          ' {\n      border-radius: 0 0 8px 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 25px;\n      font-size: 18px;\n    }\n  }\n\n  code.language-text {\n    background: #eeeefa;\n    color: #333;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    line-height: inherit;\n    font-size: 95%;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #c3a2ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7f96cf;\n  }\n\n  .token.attr-name {\n    color: #c3a2ff;\n  }\n\n  .token.selector {\n    color: #ffc777;\n  }\n\n  .token.constant {\n    color: #ff959c;\n  }\n\n  .token.punctuation {\n    color: #9fc8ff;\n  }\n  \n  .token.tag .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #89DDFF;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #fface4;\n  }\n\n  .token.flow {\n    color: #89DDFF;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #fa7692;\n  }\n\n  .token.number,\n  .token.boolean,\n  .token.symbol,\n  .token.deleted {\n    color: #ff9d74;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #bcf298;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #82AAFF;\n  }\n\n  .token.method {\n    color: #25c8e5;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffc777;\n  }\n\n  .token.property.definition {\n    color: #77e0c6;\n  }\n\n  .token.property.access {\n    color: #89DDFF;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .gatsby-highlight {\n    position: relative;\n    margin-top: 3.5rem;\n    margin-bottom: 1.5rem;\n  \n    ',
          ' {\n      margin-left: -25px;\n      margin-right: -25px;\n    }\n\n    &[data-language="html"]::before {\n      color: #ffafaf;\n    }\n\n    &[data-language="js"]::before {\n      color: #ffd789;\n    }\n\n    &[data-language="css"]::before {\n      color: #8fdeff;\n    }\n\n    &[data-language="bash"]::before {\n      color: #d2adff;\n    }\n\n    &::before {\n      content: attr(data-language);\n      display: block;\n      width: 111.1%;\n      position: absolute;\n      background: #43436a;\n      font-weight: bold;\n      padding: 8px 8px;\n      font-family: ',
          ';\n      color: white;\n      margin-left: -5.55%;\n      padding-left: 5%;\n      text-transform: uppercase;\n      transform: translateY(-100%);\n      font-size: 18px;\n\n      ',
          ' {\n        width: calc(100% + 50px);\n        margin-left: -25px;\n        padding-left: 25px;\n      }\n\n      ',
          ' {\n        margin-left: 0;\n        border-radius: 8px 8px 0 0;\n        width: 100%;\n      }\n    }\n  }\n\n  a code.language-text {\n    color: inherit;\n  }\n',
        ])
        return (
          (wn = function() {
            return n
          }),
          n
        )
      }
      var kn =
          '\'Inconsolata\', Menlo, "Operator Mono", "Roboto Mono", "Dank Mono", Menlo, Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
        vn = Object(d.a)(wn(), kn, p.g.sm, p.g.md, p.g.md, kn, p.g.sm, p.g.md)
      var zn = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(bn, null),
            r.a.createElement(yn, null),
            r.a.createElement(vn, null),
          )
        },
        En = (function(n) {
          function t() {
            for (
              var t, e = arguments.length, o = new Array(e), a = 0;
              a < e;
              a++
            )
              o[a] = arguments[a]
            return (
              ((t = n.call.apply(n, [this].concat(o)) || this).state = {
                isNavOpen: !1,
              }),
              (t.openNav = function() {
                t.setState({ isNavOpen: !0 })
              }),
              (t.closeNav = function() {
                t.setState({ isNavOpen: !1 })
              }),
              t
            )
          }
          a()(t, n)
          var e = t.prototype
          return (
            (e.componentDidMount = function() {
              setTimeout(function() {
                if (window.location.hash) {
                  var n = document.querySelector(window.location.hash)
                  n && n.scrollIntoView()
                }
              })
            }),
            (e.render = function() {
              var n = this.state.isNavOpen,
                t = this.props,
                e = t.children,
                o = t.pageContext
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(zn, null),
                r.a.createElement(un.a, { pageContext: o }),
                r.a.createElement(l.b, null),
                r.a.createElement(
                  fn,
                  null,
                  r.a.createElement(sn, {
                    openNav: this.openNav,
                    isNavOpen: n,
                    pageIndex: o.frontmatter.index,
                  }),
                  r.a.createElement(z, { isOpen: n, close: this.closeNav }),
                  r.a.createElement(
                    l.a,
                    null,
                    r.a.createElement(
                      p.b,
                      null,
                      r.a.createElement('h2', null, o.frontmatter.title),
                      e,
                      r.a.createElement(S, { next: o.frontmatter.index + 1 }),
                    ),
                  ),
                  r.a.createElement(
                    gn,
                    null,
                    '© ',
                    new Date().getFullYear(),
                    ' - MIT License',
                  ),
                ),
              )
            }),
            t
          )
        })(i.Component)
      t.a = En
    },
    221: function(n) {
      n.exports = {
        data: {
          allMdx: {
            edges: [
              {
                node: {
                  frontmatter: { title: 'AJAX', path: '/ajax/', index: 9 },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Accessibility',
                    path: '/accessibility/',
                    index: 10,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Getting Started',
                    path: '/getting-started/',
                    index: 1,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Creating Tooltips',
                    path: '/creating-tooltips/',
                    index: 2,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Customizing Tooltips',
                    path: '/customizing-tooltips/',
                    index: 3,
                  },
                },
              },
              {
                node: {
                  frontmatter: { title: 'Misc', path: '/misc/', index: 11 },
                },
              },
              {
                node: {
                  frontmatter: { title: 'Themes', path: '/themes/', index: 8 },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'HTML Content',
                    path: '/html-content/',
                    index: 7,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Methods',
                    path: '/methods/',
                    index: 6,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Motivation',
                    path: '/motivation/',
                    index: 13,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Tippy Instance',
                    path: '/tippy-instance/',
                    index: 5,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'All Options',
                    path: '/all-options/',
                    index: 4,
                  },
                },
              },
              { node: { frontmatter: { title: 'Demo', path: '/', index: 0 } } },
              {
                node: {
                  frontmatter: { title: 'FAQ', path: '/faq/', index: 12 },
                },
              },
            ],
          },
        },
      }
    },
    222: function(n, t, e) {
      'use strict'
      var o = e(234),
        a = e(0),
        i = e.n(a),
        r = e(235),
        l = e.n(r),
        p = e(29)
      function c(n) {
        var t = n.title,
          e = n.description,
          a = n.lang,
          r = n.meta,
          c = n.keywords,
          s = n.pageContext
        return i.a.createElement(p.StaticQuery, {
          query: d,
          render: function(n) {
            var o = e || n.site.siteMetadata.description,
              p = 'Demo' === s.frontmatter.title,
              d =
                t ||
                (p
                  ? 'Tippy.js - Vanilla JS Tooltip and Popover Library'
                  : s.frontmatter.title)
            return i.a.createElement(l.a, {
              htmlAttributes: { lang: a },
              title: d,
              titleTemplate: p ? null : '%s | ' + n.site.siteMetadata.title,
              meta: [
                { name: 'description', content: o },
                { property: 'og:title', content: d },
                { property: 'og:description', content: o },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:creator',
                  content: n.site.siteMetadata.author,
                },
                { name: 'twitter:title', content: d },
                { name: 'twitter:description', content: o },
              ]
                .concat(
                  c.length > 0
                    ? { name: 'keywords', content: c.join(', ') }
                    : [],
                )
                .concat(r),
            })
          },
          data: o,
        })
      }
      ;(c.defaultProps = { lang: 'en', meta: [], keywords: [] }), (t.a = c)
      var d = '1025518380'
    },
    226: function(n) {
      n.exports = { a: '4.2.0' }
    },
    229: function(n, t, e) {
      n.exports = e.p + 'static/logo-ebc385458e03fdb24af078536af88065.svg'
    },
    233: function(n, t, e) {
      n.exports = e.p + 'static/bubbles-4989859a4b6961599ff97c983f6f5947.svg'
    },
    234: function(n) {
      n.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Tippy.js',
              description:
                'A simple, easy-to-use vanilla JavaScript library for creating tooltips and popovers to use in web sites and apps. The flat-level option API makes customizing a tooltip and popover as easy as adding a single object property or data attribute. Make tooltips follow the mouse cursor, have an arrow, change duration and delay, have custom themes and animations, HTML content, touch support, and more...',
              author: '@atomiks',
            },
          },
        },
      }
    },
  },
])
//# sourceMappingURL=1-2a9f87dd5039dc476449.js.map
