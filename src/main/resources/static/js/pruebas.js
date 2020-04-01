'use strict';
var superhex = function () {
    function e(e) {
        if (0 == e) return fn[0];
        if (dn[e]) return fn[dn[e]];
        var t = [
        ];
        e == Gt && un >= 0 && (t = En[un]),
        void 0 !== ln[e] && ln[e] >= 0 && (t = En[ln[e]]),
        dn[Gt] && t.push(dn[Gt]);
        do {
            for (var n = !0, i = Math.floor(Math.random() * (fn.length - 1)) + 1, a = 0; a < t.length; a++) t[a] == i && (n = !1)
        } while (!n);
        return dn[e] = i,
            fn[i]
    }
    function t(t) {
        return 0 == t ? mn[0] : (dn[t] || e(t), mn[dn[t]])
    }
    function n() {
        var e = document.createElement('canvas').getContext('2d');
        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
    }
    function i(e) {
        yn = e,
            1 == e ? document.getElementById('button-quality-high').classList.remove('unselected')  : document.getElementById('button-quality-high').classList.add('unselected'),
            0.75 == e ? document.getElementById('button-quality-medium').classList.remove('unselected')  : document.getElementById('button-quality-medium').classList.add('unselected'),
            0.5 == e ? document.getElementById('button-quality-low').classList.remove('unselected')  : document.getElementById('button-quality-low').classList.add('unselected'),
        'undefined' != typeof Storage && localStorage.setItem('quality', e)
    }
    function a(e) {
        var t = new Array(e || 0),
            n = e;
        if (arguments.length > 1) for (var i = Array.prototype.slice.call(arguments, 1); n--; ) t[e - 1 - n] = a.apply(this, i);
        return t
    }
    function o(e, t) {
        We = a(2 * dt + 1, 2 * dt + 1),
            zt = !0,
            E(e, t)
    }
    function r(e, t) {
        return We[e + dt] && We[e + dt][t + dt] && We[e + dt][t + dt].pid ? We[e + dt][t + dt].pid : 0
    }
    function s(e, t) {
        We[e + dt][t + dt].pid = 0,
        bt[1 + e + dt][1 + t + dt] && w(b(e, t)),
        0 != We[e + dt][t + dt].aid && u(e, t, 0, We[e + dt][t + dt].aid)
    }
    function l(e, t) {
        We[e + dt][t + dt] = {
            pid: 0,
            aid: 0
        },
        bt[1 + e + dt][1 + t + dt] && w(b(e, t)),
            g(e, t)
    }
    function d(e, n, i) {
        if (We[e + dt] && We[e + dt][n + dt] || (We[e + dt][n + dt] = {
            pid: 0,
            aid: 0
        }), We[e + dt][n + dt].aid = i, bt[1 + e + dt][1 + n + dt]) {
            var a = We[e + dt][n + dt].pid;
            w(b(e, n), t(a)),
                c(e, n, a, i)
        }
    }
    function c(t, n, i, a) {
        if (xt[1 + t + dt][1 + n + dt]) return void u(t, n, i, a);
        var o = new PIXI.Sprite(at.hexagon_white_contour);
        o.tint = e(a),
        0 == i && (o.alpha = 0.3),
            o.width = gt,
            o.height = ht,
            o.position = y(t, n),
            o.hexPosition = {
                q: t,
                r: n
            },
            Oe.addChild(o),
            xt[1 + t + dt][1 + n + dt] = o
    }
    function u(t, n, i, a) {
        var o = xt[1 + t + dt][1 + n + dt];
        o && (o.tint = e(a), 0 == i && (o.alpha = 0.3))
    }
    function g(e, t) {
        xt[1 + e + dt][1 + t + dt] && (Oe.removeChild(xt[1 + e + dt][1 + t + dt]), xt[1 + e + dt][1 + t + dt] = null)
    }
    function h(t, n) {
        We[t + dt][n + dt].aid = 0,
        bt[1 + t + dt][1 + n + dt] && w(b(t, n), e(We[t + dt][n + dt].pid)),
            g(t, n)
    }
    function f(t, n, i) {
        void 0 === i && (i = Gt),
            We[t + dt][n + dt] = {
                pid: i,
                aid: 0
            },
        bt[1 + t + dt][1 + n + dt] && w(b(t, n), e(i))
    }
    function m(t, n, i, a) {
        if (We[t + dt][n + dt] = {
            pid: i,
            aid: a
        }, bt[1 + t + dt][1 + n + dt]) if (0 == a) w(b(t, n), e(i)),
            g(t, n);
        else {
            var o = b(t, n);
            w(o, e(i)),
                c(t, n, i, a)
        }
    }
    function p(e, t) {
        return We[e + dt][t + dt] && We[e + dt][t + dt].aid ? We[e + dt][t + dt].aid : 0
    }
    function y(e, t) {
        var n = 3 * ut / 2 * e,
            i = ut * Math.sqrt(3) * (t + e / 2);
        return new PIXI.Point(n, i)
    }
    function k(e, t) {
        var n = 2 * e / 3 / ut,
            i = ( - e / 3 + Math.sqrt(3) / 3 * t) / ut,
            a = n,
            o = i,
            r = - a - o,
            s = Math.round(a),
            l = Math.round(r),
            d = Math.round(o),
            c = Math.abs(s - a),
            u = Math.abs(l - r),
            g = Math.abs(d - o);
        return c > u && c > g ? s = - l - d : u > g ? l = - s - d : d = - s - l,
            {
                q: s,
                r: d
            }
    }
    function v(e, t, n, i, a, o) {
        if (void 0 === e && (e = 5197647), void 0 === t && (t = 4868682), void 0 === n && (n = 1), void 0 === i && (i = 1), void 0 === a && (a = ft * ut), void 0 === o && (o = !1), It.length > 0) {
            var r = It.pop();
            r.tint = e,
                r.alpha = n
        } else {
            var r = new PIXI.Sprite(at.hexagon_white_degrade);
            r.tint = e,
                r.alpha = n
        }
        return r.width = gt - 0.2 * ut,
            r.height = ht - 0.2 * ut,
            r.visible = o,
            r
    }
    function w(e, t, n, i, a) {
        void 0 === t && (t = 5197647),
        void 0 === n && (n = 4868682),
        void 0 === i && (i = 1),
        void 0 === a && (a = 1),
            e.tint = t,
            e.alpha = i
    }
    function I(t, n) {
        e(Gt),
            Fe.texture = - 1 == un ? at['player-' + dn[Gt]] : at[xn[un]],
            - 1 == un ? (Fe.width = 2 * mt + 2 * yt, Fe.height = 2 * mt + 2 * yt)  : (Fe.width = 2 * mt * 96 / 63 * (1 + 1 / 3), Fe.height = 2 * mt * 96 / 63 * (1 + 1 / 3))
    }
    function b(n, i) {
        if (bt[1 + n + dt][1 + i + dt]) return bt[1 + n + dt][1 + i + dt];
        var a;
        if (J(n, i)) a = v(16711680),
            a.isBorder = !0;
        else {
            var o = r(n, i),
                s = p(n, i);
            0 == s ? (a = v(e(o)), g(n, i))  : (a = v(t(o)), c(n, i, o, s))
        }
        return a.position = y(n, i),
            a.x += ut * ft,
            a.y += ut * ft,
            a.hexPosition = {
                q: n,
                r: i
            },
            bt[1 + n + dt][1 + i + dt] = a,
            Ve.addChild(a),
            a
    }
    function x(e, t) {
        if (bt[1 + e + dt][1 + t + dt]) {
            var n = bt[1 + e + dt][1 + t + dt];
            Ve.removeChild(n),
                bt[1 + e + dt][1 + t + dt] = null,
                It.push(n)
        }
    }
    function E(e, t) {
        var n = (new Date).getTime();
        bt = a(2 * dt + 1 + 2, 2 * dt + 1 + 2),
            xt = a(2 * dt + 1 + 2, 2 * dt + 1 + 2);
        for (var i = - ct; i <= ct; i++) for (var o = - ct; o <= ct; o++) Math.abs(i + o) <= ct && Z(e + i, t + o) && b(e + i, t + o);
        var r = (new Date).getTime();
        console.log('create map container in ' + (r - n))
    }
    function q(t) {
        for (Gt > 0 && t != Gt && e(t) == e(Gt) && console.error('encountered player with same color', t, Gt), void 0 !== ln[t] && ln[t] >= 0 && xn[ln[t]] ? (qt[t] = new PIXI.Sprite(at[xn[ln[t]]]), qt[t].width = 2 * mt * 96 / 63 * (1 + 1 / 3), qt[t].height = 2 * mt * 96 / 63 * (1 + 1 / 3))  : (e(t), qt[t] = new PIXI.Sprite(at['player-' + dn[t]]), qt[t].width = 2 * mt + 2 * yt, qt[t].height = 2 * mt + 2 * yt), qt[t].anchor.set(0.5), qt[t].x = St[t] * ut - qt[t].width / 2, qt[t].y = Ct[t] * ut - qt[t].height / 2, Ye.addChild(qt[t]), Mt[t] = new PIXI.Text(sn[t], {
            fontFamily: 'Arial',
            fontSize: 16 / pn,
            fill: 16777215
        }); Mt[t].context.measureText(Mt[t].text).width > 160; ) Mt[t].text = Mt[t].text.slice(0, - 1);
        Ye.addChild(Mt[t])
    }
    function M(e) {
        return 'https:' === window.location.protocol.toLowerCase() ? 'wss://' + e.replace(':', '/')  : 'ws://' + e
    }
    function P(e) {
        kn[e.z] = new WebSocket(M(e.u)),
            kn[e.z].binaryType = 'arraybuffer',
            kn[e.z].pings = [
            ],
            kn[e.z].sendPing = function () {
                this.lastPingTime = (new Date).getTime();
                var e = new Uint8Array(1);
                e.set([99], 0),
                    this.send(e)
            },
            kn[e.z].addEventListener('open', function (e) {
                e.target.sendPing()
            }),
            kn[e.z].addEventListener('close', function (e) {
            }),
            kn[e.z].addEventListener('message', function (t) {
                var n = new DataView(t.data),
                    i = n.getUint8(0);
                99 == i ? (t.target.pings.push((new Date).getTime() - t.target.lastPingTime), console.log('zone ping', e.z, t.target.pings[t.target.pings.length - 1]), t.target.pings.length >= 3 ? (t.target.close(), delete kn[e.z], wt[e.z] = Math.min.apply(Math, t.target.pings), console.log('kept zone ping', e.z, wt[e.z]))  : t.target.sendPing())  : console.log('unexpected code from server', i)
            })
    }
    function B() {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function () {
            if (4 == e.readyState && 200 == e.status) {
                Xe = JSON.parse(e.responseText),
                    console.log('got server list: ', Xe);
                for (var t = 0; t < Xe.length; t++) P(Xe[t])
            }
        },
            e.onerror = function () {
                document.getElementById('button-play-text').innerHTML = 'Retrying',
                    document.getElementById('button-play-again-text').innerHTML = 'Retrying',
                    setTimeout(B, 5000)
            },
            e.open('GET', MM_URL + '/serversv2', !0),
            e.send(null)
    }
    function S() {
        var e,
            t = Xe && 0 == Xe.length,
            n = null;
        if (Xe) for (var i = 0; i < Xe.length; i++) {
            var a = Xe[i].z;
            wt[a] && (t = !0, - 1 != wt[a] && (!n || e > wt[a]) && (n = a, e = wt[a]))
        }
        if (!cn || !t) return void setTimeout(S, 50);
        console.log('best zone', n, 'ping', e);
        for (var a in kn) kn[a].close();
        kn = [
        ];
        var o = new XMLHttpRequest;
        o.onreadystatechange = function () {
            4 == o.readyState && 200 == o.status && (WSERVER_URL = o.responseText, console.log('got server : ', WSERVER_URL), WSERVER_URL.startsWith('ERROR') ? (document.getElementById('button-play-text').innerHTML = 'Retrying', document.getElementById('button-play-again-text').innerHTML = 'Retrying', setTimeout(S, 5000))  : U())
        },
            o.onerror = function () {
                document.getElementById('button-play-text').innerHTML = 'Retrying',
                    document.getElementById('button-play-again-text').innerHTML = 'Retrying',
                    setTimeout(S, 5000)
            },
            o.open('GET', MM_URL + '?zone=' + (n || '') + (ot ? '&pk=' + ot : ''), !0),
            o.send(null)
    }
    function C() {
        Xt || (hn++, 'undefined' != typeof Storage && localStorage.setItem('respawnCount', hn), it = document.getElementById('username').value.substring(0, 15), 'undefined' != typeof Storage && localStorage.setItem('username', it), it || (it = 'Guest'), document.getElementById('networkError').style.display = 'none', document.getElementById('button-play-text').innerHTML = 'Connecting', Xt = !0, document.getElementById('button-play').classList.add('button-loading'), z(), S())
    }
    function T() {
        if (Yt && !Xt) {
            hn++,
            'undefined' != typeof Storage && localStorage.setItem('respawnCount', hn),
                it = document.getElementById('username').value.substring(0, 15),
            it || (it = 'Guest'),
                document.getElementById('networkError').style.display = 'none',
                document.getElementById('button-play-again-text').innerHTML = 'Connecting',
                Xt = !0,
                document.getElementById('button-play-again').classList.add('button-loading'),
            document.getElementById('friendsScores') && (document.getElementById('friendsScores').style.display = 'none'),
            document.getElementById('fps') && (document.getElementById('fps').style.display = Ft ? 'block' : 'none'),
                Yt = !1,
                Gt = - 1,
                je.alpha = 1,
                Oe.removeChildren(),
                Ve.removeChildren();
            for (var e = 0; e < Et.length; e++) Qe.removeChild(Et[e]);
            Et = [
            ],
                zt = !1,
                At = !1,
                Rt = !1,
                _t = !1,
                Nt = 0,
                et = null;
            for (var t = 0; t < St.length; t++) St[t] && (console.log('remove player ', t), me(t));
            Zt = [
            ],
                Jt = [
                ],
                Tt = [
                ],
                Lt = [
                ],
                Dt = [
                ],
                Ht = [
                ],
                sn = [
                ],
                ln = [
                ],
                dn = [
                ],
                Ge.x = 10000,
                S()
        }
    }
    function L() {
        zt ? T()  : C(),
            document.getElementById('TKS_superhex-io_300x250').style.display = 'block'
    }
    function H() {
        'undefined' != typeof ga && (ot ? ga('send', 'event', 'Click', 'Play', 'InParty')  : ga('send', 'event', 'Click', 'Play', 'NoParty'), ga('send', 'event', 'Click', 'PlaySkin', un >= 0 ? xn[un] : 'color')),
            'undefined' != typeof aiptag && (4 == hn || hn > 4 && (hn - 4) % 3 == 0) ? aiptag.cmd.player.push(function () {
                adplayer.startPreRoll()
            })  : C()
    }
    function D() {
        'undefined' != typeof ga && (ot ? ga('send', 'event', 'Click', 'PlayAgain', 'InParty')  : ga('send', 'event', 'Click', 'PlayAgain', 'NoParty'), ga('send', 'event', 'Click', 'PlayAgainSkin', un >= 0 ? xn[un] : 'color')),
        Ne && clearTimeout(Ne),
            'undefined' != typeof aiptag && (4 == hn || hn > 4 && (hn - 4) % 3 == 0) ? (aiptag.cmd.player.push(function () {
                adplayer.startPreRoll()
            }), document.getElementById('TKS_superhex-io_300x250').style.display = 'none')  : T()
    }
    function A() {
        'undefined' != typeof ga && ga('send', 'event', 'Click', 'MainMenu'),
        Ne && clearTimeout(Ne),
            Ue.close(),
            document.getElementById('button-main-menu').innerHTML = 'Loading...',
            document.getElementById('button-main-menu').classList.add('button-loading'),
            window.location.reload()
    }
    function R(e) {
        var t = (new Date).getTime();
        if (t - Vt > 5000) {
            var n = new DataView(new ArrayBuffer(7));
            n.setUint8(0, 50),
                n.setInt16(1, Je, !0),
                n.setInt16(3, Qt, !0),
                n.setInt16(5, MainLoop.getFPS(), !0),
                Qt = 0,
                $e = e,
                Ze = e,
                Ue.send(n.buffer),
                Vt = t
        }
        Je ? (Je = 0.75 * Je + 0.25 * e, e > $e && ($e = e), e < Ze && (Ze = e))  : (Je = e, $e = Je, Ze = Je)
    }
    function X(e) {
        var t = new DataView(e.data);
        switch (t.getUint8(0)) {
            case 1:
                re(t),
                    MainLoop.start(),
                    oe(),
                    document.getElementById('respawn').style.display = 'none',
                    document.getElementById('homepage').style.display = 'none';
                var n = document.getElementById('TKS_superhex-io_300x250');
                n && (n.parentElement.removeChild(n), document.getElementById('respawn-ad').appendChild(n));
                var i = document.getElementById('780560');
                i && (i.parentElement.removeChild(i), document.getElementById('respawn-ad').appendChild(i)),
                    document.getElementById('button-play-again').classList.remove('button-loading'),
                    Xt = !1,
                    document.getElementById('button-play-again-text').innerHTML = 'Play Again',
                    ze.view.style.display = 'block';
                break;
            case 2:
                document.getElementById('leaderboard').style.display = 'block',
                    document.getElementById('score').style.display = 'block';
                var a = (new Date).getTime(),
                    o = Jt.shift();
                Zt.shift(),
                    R(a - o),
                    console.log('first ping is ', a - o),
                    Nt = a,
                    At = !0,
                    le(Gt, St[Gt], Ct[Gt], Pt[Gt], Bt[Gt], 0),
                    setTimeout(function () {
                        var e = (new Date).getTime(),
                            t = setInterval(function () {
                                var n = (new Date).getTime();
                                n - e > 1000 ? (clearInterval(t), je.alpha = 0)  : je.alpha = 1 - (n - e) / 1000
                            }, 20)
                    }, 5000);
                break;
            case 3:
                if (At && Rt) {
                    var r = (new Date).getTime(),
                        o = Jt.shift();
                    Zt.shift(),
                        R(r - o),
                        se(t)
                }
                break;
            case 4:
                Rt && he(t);
                break;
            case 5:
                Rt && updatePlayersPosition(t);
                break;
            case 13:
                Rt && de(t);
                break;
            case 6:
                tn = t.getUint32(1, !0),
                    en = t.getUint32(5, !0),
                    nn = t.getInt16(9, !0),
                    an = t.getInt16(11, !0);
                for (var s = (t.byteLength - 13) / 6, l = 0; l < s; l++) on[l] = {
                    playerId: t.getInt16(13 + 6 * l, !0),
                    score: t.getUint32(13 + 6 * l + 2, !0)
                };
                Ee(),
                    qe();
                break;
            case 14:
                for (var d = t.getInt16(1, !0), c = [
                ], l = 0; l < d; l++) c.push({
                    playerId: t.getInt16(3 + 8 * l, !0),
                    rank: t.getInt16(3 + 8 * l + 2, !0),
                    score: t.getUint32(3 + 8 * l + 4, !0)
                });
                rn = c,
                    rn.sort(function (e, t) {
                        return e.rank - t.rank
                    }),
                    Me();
                break;
            case 7:
                Rt && fe(t);
                break;
            case 8:
                Rt && pe(t.getInt16(1, !0), t.getInt16(3, !0), t.getInt16(5, !0));
                break;
            case 9:
                Rt && ye(t);
                break;
            case 10:
                Rt && ve(t);
                break;
            case 11:
                Rt && be(t);
                break;
            case 15:
                Rt && xe(t);
                break;
            case 12:
                document.getElementById('button-play-text').innerHTML = 'Connecting',
                    document.getElementById('button-play-again-text').innerHTML = 'Connecting',
                    console.log('server returned : map is full'),
                    At = !1,
                    Ut = !0,
                    Ue.close(),
                    S();
                break;
            case 99:
                var u = (new Date).getTime() - Ke;
                if (R(u), console.log('ping is ', u), ++Ot < 3) oe();
                else {
                    var g = new Uint8Array(1);
                    g.set([2], 0),
                        Ue.send(g),
                        Jt.push((new Date).getTime()),
                        Zt.push(Bt[Gt])
                }
        }
    }
    function U() {
        if (document.getElementById('button-play-text').innerHTML = 'Joining', document.getElementById('button-play-again-text').innerHTML = 'Joining', Ue && Ue.readyState <= 1 && Ue.url.startsWith(M(WSERVER_URL))) return console.log('rejoining same map'),
            void ae();
        Ue && Ue.readyState <= 1 && (console.log('close previous connection'), Ut = !0, Ue.close(), Ot = 0, Vt = 0, Qt = 0, sn = [
        ], ln = [
        ], dn = [
        ], on = [
        ], rn = [
        ]),
            Ue = new WebSocket(M(WSERVER_URL)),
            Ue.binaryType = 'arraybuffer',
            Ue.addEventListener('open', function (e) {
                console.log('socket connected'),
                    ie()
            }),
            Ue.addEventListener('close', function (e) {
                console.log('socket closed'),
                Ut || (document.getElementById('networkError').style.display = 'block'),
                    Ut = !1,
                    At = !1
            });
        Ue.addEventListener('message', X)
    }
    function z() {
        PIXI.ticker.shared.stop();
        PIXI.utils.isWebGLSupported(),
            ze = PIXI.autoDetectRenderer(256, 256, {
                antialias: !0,
                transparent: !1,
                resolution: yn
            }),
        ze.plugins.interaction && (ze.plugins.interaction.destroy(), ze.plugins.interaction = null),
            window.addEventListener('resize', _, !0),
            ze.view.addEventListener('mousemove', j, !0),
            ze.view.addEventListener('touchstart', W, !0),
            ze.view.addEventListener('touchmove', W, !0),
            ze.view.style.display = 'none',
            ze.backgroundColor = 4408131,
            ze.view.style.position = 'absolute',
            ze.autoResize = !0,
            document.body.appendChild(ze.view),
            _e = new PIXI.Container,
            Ge = new PIXI.Container,
            _e.addChild(Ge),
            Oe = new PIXI.Container,
            Ge.addChild(Oe),
            Ve = new PIXI.Container,
            Ge.addChild(Ve),
            Qe = new PIXI.Container,
            Ge.addChild(Qe),
            Ye = new PIXI.Container,
            Ge.addChild(Ye),
            Fe = new PIXI.Sprite,
            _e.addChild(Fe),
            je = new PIXI.Text(it, {
                fontFamily: 'Arial',
                fontSize: 16 / pn,
                fill: 16777215
            }),
            _e.addChild(je),
            _(),
            MainLoop.setBegin($).setUpdate(ee).setDraw(te).setEnd(ne)
    }
    function _() {
        var i = ut;
        if (pn = n(), console.log('PIXEL RATIO', pn, 'window size', window.innerWidth, window.innerHeight), ut = Math.max(window.innerWidth / 40 / 2 / 0.75, window.innerHeight / 40 / Math.sqrt(3)), gt = 2 * ut, ht = Math.sqrt(3) / 2 * gt, mt = 0.6 * ut, pt = 2 / 3 * mt, yt = mt / 3, Ve) {
            Ve.x = - gt / 2,
                Ve.y = - ht / 2;
            for (var a = 0; a < Ve.children.length; a++) if (Ve.children[a].width = gt - 0.2 * ut, Ve.children[a].height = ht - 0.2 * ut, Ve.children[a].position = y(Ve.children[a].hexPosition.q, Ve.children[a].hexPosition.r), Ve.children[a].x += ut * ft, Ve.children[a].y += ut * ft, K(Ve.children[a].hexPosition.q, Ve.children[a].hexPosition.r)) {
                var o = r(Ve.children[a].hexPosition.q, Ve.children[a].hexPosition.r),
                    s = p(Ve.children[a].hexPosition.q, Ve.children[a].hexPosition.r);
                0 == s ? w(Ve.children[a], e(o))  : w(Ve.children[a], t(o))
            } else w(Ve.children[a], 16711680);
            Oe.x = - gt / 2,
                Oe.y = - ht / 2;
            for (var a = 0; a < Oe.children.length; a++) Oe.children[a].width = gt,
                Oe.children[a].height = ht,
                Oe.children[a].position = y(Oe.children[a].hexPosition.q, Oe.children[a].hexPosition.r);
            - 1 == un ? (Fe.width = 2 * mt + 2 * yt, Fe.height = 2 * mt + 2 * yt)  : (Fe.width = 2 * mt * 96 / 63 * (1 + 1 / 3), Fe.height = 2 * mt * 96 / 63 * (1 + 1 / 3)),
                Fe.anchor.set(0.5);
            for (l in qt) void 0 !== ln[l] && ln[l] >= 0 ? (qt[l].width = 2 * mt * 96 / 63 * (1 + 1 / 3), qt[l].height = 2 * mt * 96 / 63 * (1 + 1 / 3))  : (qt[l].width = 2 * mt + 2 * yt, qt[l].height = 2 * mt + 2 * yt);
            je.style.fontSize = 16 / pn;
            for (l in Mt) Mt[l].style.fontSize = 16 / pn;
            for (var l in Lt) for (var d = ut / i, a = 0; a < Lt[l].length; a++) Lt[l][a] *= d;
            var c = pt / 20;
            for (var l in Et) Et[l].scale.x = c,
                Et[l].scale.y = c;
            ze.resize(window.innerWidth, window.innerHeight),
                Fe.x = window.innerWidth / 2,
                Fe.y = window.innerHeight / 2,
                je.x = window.innerWidth / 2 - je.width / 2,
                je.y = window.innerHeight / 2 - ht - mt,
                Yt ? (Ge.x = window.innerWidth / 2 - tt * ut, Ge.y = window.innerHeight / 2 - nt * ut)  : (Ge.x = window.innerWidth / 2 - St[Gt] * ut, Ge.y = window.innerHeight / 2 - Ct[Gt] * ut)
        }
    }
    function F() {
        lt = null;
        var e = new DataView(new ArrayBuffer(5));
        e.setUint8(0, 3),
            e.setFloat32(1, st, !0),
        Ue && 1 == Ue.readyState && (Jt.push((new Date).getTime()), Zt.push(st), Ue.send(e.buffer))
    }
    function j(e) {
        if (e.clientY != window.innerHeight / 2 || e.clientX != window.innerWidth / 2) {
            var t = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2);
            !At || Yt || _t || (lt && clearTimeout(lt), st = t, 0 != Jt.length & (new Date).getTime() - Jt[Jt.length - 1] < 10 ? lt = setTimeout(F, 10)  : F())
        }
    }
    function W(e) {
        e.touches && 1 == e.touches.length && (j({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY
        }), e.preventDefault())
    }
    function N(e, t) {
        for (var n = t - e; n < - Math.PI; ) n += 2 * Math.PI;
        for (; n > Math.PI; ) n -= 2 * Math.PI;
        return n
    }
    function G(e, t) {
        return (Math.abs(e.q - t.q) + Math.abs(e.q + e.r - t.q - t.r) + Math.abs(e.r - t.r)) / 2
    }
    function O(e, t) {
        var n = vn[t];
        e.q += n.q,
            e.r += n.r
    }
    function V(e) {
        for (var t = {
            minQ: e[0].q,
            maxQ: e[0].q,
            minR: e[0].r,
            maxR: e[0].r
        }, n = 1; n < e.length; n++) e[n].q < t.minQ && (t.minQ = e[n].q),
        e[n].q > t.maxQ && (t.maxQ = e[n].q),
        e[n].r < t.minR && (t.minR = e[n].r),
        e[n].r > t.maxR && (t.maxR = e[n].r);
        return t
    }
    function Q(e, t) {
        return e.r == t.r ? e.q > t.q ? 0 : 3 : e.q == t.q ? e.r > t.r ? 5 : 2 : e.q > t.q ? 1 : 4
    }
    function Y(e) {
        var t = V(e),
            n = e[0],
            i = null;
        e.push(n);
        for (var a = 0; a < e.length; a++) {
            var o = e[a];
            if (null != i) {
                var r = Q(i, o);
                o.angles || (o.angles = [
                ]),
                    o.angles.push(r),
                i.angles || (i.angles = [
                ]),
                    i.angles.push((r + 3) % 6)
            }
            i = o
        }
        e.pop();
        var s = [
        ];
        for (var a in e) {
            var l = e[a].q;
            s[l] || (s[l] = [
            ]),
                s[l].push(e[a])
        }
        for (var a in s) s[a].sort(function (e, t) {
            return e.r - t.r
        });
        for (var d = [
        ], l = t.minQ; l <= t.maxQ; l++) {
            var c = !1,
                u = 0,
                g = s[l],
                h = null;
            if (g) for (var a = 0; a < g.length; a++) {
                var f = g[a];
                if (c) for (var m = h.r + 1; m <= f.r - 1; m++) d.push({
                    q: l,
                    r: m
                });
                if (null != h && h.r - f.r > 1 && (u = 0), (3 == f.angles[1] || 4 == f.angles[1]) && f.angles[0] <= 1 || (3 == f.angles[0] || 4 == f.angles[0]) && f.angles[1] <= 1) c = !c,
                    u = 0;
                else if (2 == f.angles[0] && 5 != f.angles[1]) {
                    var p = f.angles[1] > 2 ? 1 : 2;
                    u > 0 && u != p ? (c = !c, u = 0)  : u = p
                } else if (2 == f.angles[1] && 5 != f.angles[0]) {
                    var p = f.angles[0] > 2 ? 1 : 2;
                    u > 0 && u != p ? (c = !c, u = 0)  : u = p
                } else if (5 == f.angles[0] && 2 != f.angles[1]) {
                    var p = f.angles[1] > 2 ? 1 : 2;
                    u > 0 && u != p ? (c = !c, u = 0)  : u = p
                } else if (5 == f.angles[1] && 2 != f.angles[0]) {
                    var p = f.angles[0] > 2 ? 1 : 2;
                    u > 0 && u != p ? (c = !c, u = 0)  : u = p
                }
                h = f
            }
        }
        return d
    }
    function K(e, t) {
        return !(Math.abs(t) > dt) && (t <= 0 ? e >= - dt - t && e <= dt : e >= - dt && e <= dt - t)
    }
    function J(e, t) {
        return (Math.abs(e) + Math.abs(e + t) + Math.abs(t)) / 2 == dt + 1
    }
    function Z(e, t) {
        return !(Math.abs(t) > dt + 1) && (t <= 0 ? e >= - (dt + 1) - t && e <= dt + 1 : e >= - (dt + 1) && e <= dt + 1 - t)
    }
    function $() {
    }
    function ee(e) {
        for (var t = Kt.length - 1; t >= 0; t--) {
            var n = Kt[t];
            if (n.time += e, 'CAPTURING' === n.type || 'UNCAPTURING' === n.type) {
                for (var i = n.from + (n.to - n.from) * Math.min(1, n.time / n.length), a = 0; a < n.hexs.length; a++) {
                    var o = n.hexs[a];
                    o.width = (gt - ft * ut * 2) * i,
                        o.height = (ht - ft * ut * 2) * i,
                        o.position = y(o.hexPosition.q, o.hexPosition.r),
                        o.x += ft * ut + (gt - ft * ut * 2) * (1 - i) / 2,
                        o.y += ft * ut + (ht - ft * ut * 2) * (1 - i) / 2
                }
                if (n.time >= n.length) for (var a = 0; a < n.hexs.length; a++) {
                    var o = n.hexs[a];
                    Ve.removeChild(o),
                    'CAPTURING' === n.type && f(o.hexPosition.q, o.hexPosition.r, n.playerId),
                        o.destroy()
                }
            } else if ('EXPLOSION' == n.type) for (var a = 0; a < n.parts.length; a++) {
                var r = n.parts[a];
                r.graphicsData[0].fillAlpha = n.from + (n.to - n.from) * Math.min(1, n.time / n.length),
                    r.graphicsData[0].lineAlpha = n.from + (n.to - n.from) * Math.min(1, n.time / n.length),
                    r.dirty++,
                    r.clearDirty++,
                n.time <= n.moveLength && (r.x += Math.cos(r.animationDirection) * r.animationSpeed, r.y += Math.sin(r.animationDirection) * r.animationSpeed),
                n.time >= n.length && (Ye.removeChild(r), r.destroy())
            } else if ('TRAIL_DISAPPEAR' == n.type) {
                var r = n.trailGraphics;
                r.alpha = n.from + (n.to - n.from) * Math.min(1, n.time / n.length),
                n.time >= n.length && Qe.removeChild(r)
            } else if (n.type = 'IMPACT') {
                var i = n.from + (n.to - n.from) * Math.min(1, n.time / n.length);
                n.sprite.graphicsData[0].shape.radius = i * mt * 4,
                    n.sprite.alpha = 1 * (1 - i),
                    n.sprite.dirty++,
                    n.sprite.clearDirty++,
                n.time >= n.length && Ye.removeChild(n.sprite)
            }
            n.time > n.length && Kt.splice(t, 1)
        }
        var s = (new Date).getTime();
        for (var l in $t) for (var d = $t[l]; d.length > 0 && d[0].time <= s; ) {
            for (var c = d.shift(), t = 0; t < c.points.length; t++) ge(c.points[t][0], c.points[t][1], c.points[t][2], c.points[t][3]);
            Lt[l] && Ht[l] && Lt[l].splice(2 * (Ht[l] + 1)),
                le(c.playerId, c.x, c.y, c.dir, c.targetDir, c.time),
                ue(l)
        }
        if (rt = s, At) {
            if (!Yt) {
                var u = Bt[Gt];
                if (Jt.length > 0 && Jt[0] < s - Je / 2) {
                    for (var t = 0; t < Jt.length - 1 && Jt[t + 1] < s - Je / 2; ) t++;
                    u = Zt[t]
                }
                var g = N(Pt[Gt], u);
                Pt[Gt] += g * vt * e / 1000,
                    St[Gt] += Math.cos(Pt[Gt]) * kt * e / 1000,
                    Ct[Gt] += Math.sin(Pt[Gt]) * kt * e / 1000,
                    Fe.rotation = Pt[Gt] - Math.PI / 2,
                    Ge.x = window.innerWidth / 2 - St[Gt] * ut,
                    Ge.y = window.innerHeight / 2 - Ct[Gt] * ut,
                    ke(),
                    Be(),
                    ue(Gt),
                    document.getElementById('networkLag').style.display = s - Tt[l] > 500 ? 'block' : 'none'
            }
            for (var l in St) if (Yt || l != Gt) {
                var h = G(k(ut * (Yt ? tt : St[Gt]), ut * (Yt ? nt : Ct[Gt])), k(ut * St[l], ut * Ct[l]));
                if (h > ct + 1 || s - Tt[l] > 2000) console.log('removed player', l, 'from view'),
                    me(l);
                else {
                    var g = N(Pt[l], Bt[l]);
                    Pt[l] += g * vt * e / 1000,
                        St[l] += Math.cos(Pt[l]) * kt * e / 1000,
                        Ct[l] += Math.sin(Pt[l]) * kt * e / 1000,
                        qt[l].x = St[l] * ut,
                        qt[l].y = Ct[l] * ut,
                        qt[l].rotation = Pt[l] - Math.PI / 2,
                        Mt[l].x = St[l] * ut - Mt[l].width / 2,
                        Mt[l].y = Ct[l] * ut - ht - mt,
                        ue(l)
                }
            }
        }
    }
    function te() {
        (new Date).getTime();
        ze.render(_e)
    }
    function ne(e, t) {
        document.getElementById('fps').textContent = 'fps : ' + Math.round(e) + ' - ping = ' + Math.round(Je) + ' - jitter = ' + Qt + ' server = ' + WSERVER_URL,
        t && console.log('panic: simulation is too late')
    }
    function ie() {
        var e = new DataView(new ArrayBuffer(2 + 2 * it.length + 1 + (ot ? 2 * ot.length : 0) + 2));
        e.setUint8(0, 1),
            e.setUint8(1, it.length);
        for (var t = 0; t < it.length; t++) {
            var n = it.charCodeAt(t);
            e.setUint8(2 + 2 * t, 255 & n),
                e.setUint8(2 + 2 * t + 1, n >>> 8)
        }
        var i = 1 + 2 * it.length + 1;
        if (ot) {
            e.setUint8(i, ot.length);
            for (var t = 0; t < ot.length; t++) {
                var n = ot.charCodeAt(t);
                e.setUint8(i + 1 + 2 * t, 255 & n),
                    e.setUint8(i + 1 + 2 * t + 1, n >>> 8)
            }
            i += 2 * ot.length
        } else e.setUint8(i, 0);
        i++,
            e.setInt16(i, un, !0),
            Ue.send(e.buffer),
            Rt = !0
    }
    function ae() {
        tn = 7,
            en = 0;
        var e = new DataView(new ArrayBuffer(1));
        e.setUint8(0, 4),
            Ue.send(e.buffer),
            Rt = !0
    }
    function oe() {
        Ke = (new Date).getTime();
        var e = new Uint8Array(1);
        e.set([99], 0),
            Ue.send(e)
    }
    function re(n) {
        Gt = n.getInt16(1, !0),
            console.log('player id is ', Gt),
            sn[Gt] = it,
            dt = n.getInt16(3, !0),
            ct = n.getInt16(5, !0),
            an = n.getInt16(7, !0),
            nn = an;
        var i = n.getInt16(9, !0),
            a = n.getInt16(11, !0);
        console.log('Player starts at ', i, a),
            Bt[Gt] = n.getFloat32(13, !0),
            Pt[Gt] = Bt[Gt],
            Fe.rotation = Pt[Gt] - Math.PI / 2,
            o(i, a);
        var r = y(i, a);
        St[Gt] = r.x / ut,
            Ct[Gt] = r.y / ut,
            Ge.x = window.innerWidth / 2 - r.x,
            Ge.y = window.innerHeight / 2 - r.y,
            ke(),
            I(e(Gt), t(Gt)),
            Fe.visible = !0,
            je.visible = !0;
        var s = (n.byteLength - 17) / 4 / 2,
            l = n.getInt16(17, !0),
            d = n.getInt16(19, !0),
            c = n.getInt16(21, !0),
            u = n.getInt16(23, !0),
            g = 0,
            h = 0,
            f = - ct,
            p = - 1,
            k = - 1;
        do {
            K(i + h, a + f) && (l == i + h && d == a + f && (p = c, k = u, ++g < s && (l = n.getInt16(17 + 8 * g + 0, !0), d = n.getInt16(17 + 8 * g + 2, !0), c = n.getInt16(17 + 8 * g + 4, !0), u = n.getInt16(17 + 8 * g + 6, !0))), - 1 == p && - 1 == k || m(i + h, a + f, p, k)),
                h++,
            (f <= 0 && h > ct || f > 0 && h > ct - f) && (f++, h = f <= 0 ? - ct - f : - ct)
        } while (f <= ct);
        Ee(),
            document.getElementById('minimap').style.display = 'block',
            Be()
    }
    function se(e) {
        var t = (e.getFloat32(1, !0), e.getFloat32(5, !0), e.getFloat32(9, !0), e.getFloat32(13, !0));
        Bt[Gt] = t
    }
    function le(e, t, n, i, a, o) {
        if (o = 0, Yt || e != Gt) for (; o > 17; ) {
            var r = N(i, a);
            i += r * vt * 17 / 1000,
                t += Math.cos(i) * kt * 17 / 1000,
                n += Math.sin(i) * kt * 17 / 1000,
                o -= 17
        } else for (var s = (new Date).getTime(), l = s - o, d = 0; o > 17; ) {
            for (; d < Jt.length && Jt[d] < l - Je / 2; ) a = Zt[d],
                d++;
            var r = N(i, a);
            i += r * vt * 17 / 1000,
                t += Math.cos(i) * kt * 17 / 1000,
                n += Math.sin(i) * kt * 17 / 1000,
                o -= 17,
                l += 17
        }
        if (St[e]) {
            var c = Math.sqrt(Math.pow(t - St[e], 2) + Math.pow(n - Ct[e], 2)),
                u = c > 3 ? c : c > 1 ? 0.2 : Math.min(c, 0.05);
            c > 0 && u > 0 && (St[e] += (t - St[e]) * u / c, Ct[e] += (n - Ct[e]) * u / c, Yt || e != Gt || (Ge.x = window.innerWidth / 2 - St[Gt] * ut, Ge.y = window.innerHeight / 2 - Ct[Gt] * ut, ke()))
        } else console.log('set initial position for player', e, t, n),
            St[e] = t,
            Ct[e] = n;
        if ((Yt || Gt > 0 && e != Gt) && (qt[e] || q(e), qt[e].x = St[e] * ut - qt[e].width / 2, qt[e].y = Ct[e] * ut - qt[e].height / 2, Mt[e].x = St[e] * ut - Mt[e].width / 2, Mt[e].y = Ct[e] * ut - ht - mt), Pt[e]) {
            var g = N(Pt[e], i);
            g > 0.1 && (g = 0.1),
            g < - 0.1 && (g = - 0.1),
                Pt[e] += g
        } else Pt[e] = i;
        Bt[e] = a
    }
    function de(e) {
        var t = (new Date).getTime(),
            n = e.getUint32(1, !0),
            i = Nt + 17 * n,
            a = e.getInt16(5, !0);
        if (a == Gt && !Yt && Tt[Gt]) {
            var o = Math.abs((new Date).getTime() - Tt[Gt] - 51);
            o > Qt && (Qt = o)
        }
        Tt[a] = t;
        var r = e.getFloat32(7, !0),
            s = e.getFloat32(11, !0),
            l = e.getFloat32(15, !0),
            d = e.getFloat32(19, !0),
            c = [
            ];
        if (e.byteLength > 23) for (var u = e.getInt16(23, !0), g = e.getInt16(25, !0), h = 0; h < u; h++) {
            var f = e.getFloat32(27 + 8 * h + 0, !0),
                m = e.getFloat32(27 + 8 * h + 4, !0);
            c.push([a,
                g + h,
                f,
                m])
        }
        if (i < t) {
            for (var h = 0; h < c.length; h++) ge(c[h][0], c[h][1], c[h][2], c[h][3]);
            Lt[a] && Ht[a] && Lt[a].splice(2 * (Ht[a] + 1)),
                le(a, r, s, l, d, t - i),
                ue(a)
        } else $t[a] || ($t[a] = [
        ]),
            $t[a].push({
                playerId: a,
                x: r,
                y: s,
                dir: l,
                targetDir: d,
                time: i,
                points: c
            })
    }
    function ce(t, n, i) {
        var a = pt / 20;
        if (!Et[t]) {
            new PIXI.Point(St[t] * ut, Ct[t] * ut),
                new PIXI.Point(St[t] * ut + 50, Ct[t] * ut + 50);
            wn[t] = [
            ],
                Et[t] = new PIXI.mesh.Rope(PIXI.loader.resources['img/traine.png'].texture, wn[t]),
                Et[t].tint = e(t),
                Et[t].scale.x = a,
                Et[t].scale.y = a,
                Qe.addChild(Et[t])
        }
        for (var o = 0; o < Lt[t].length / 2; o++) wn[t][o] ? (wn[t][o].x = Lt[t][2 * o] / a, wn[t][o].y = Lt[t][2 * o + 1] / a)  : wn[t][o] = new PIXI.Point(Lt[t][2 * o] / a, Lt[t][2 * o + 1] / a);
        Et[t].refresh();
        for (var r = 0.034 * kt * ut / PIXI.loader.resources['img/traine.png'].texture.width / a, s = Et[t].uvs, l = 0, o = 0; o < s.length / 4; o++) s[4 * o] = l,
            s[4 * o + 2] = l,
            l += r
    }
    function ue(e) {
        var t = (new Date).getTime();
        if (Lt[e] && Lt[e].length >= 4) {
            var n = St[e] * ut,
                i = Ct[e] * ut,
                a = Lt[e][Lt[e].length - 1],
                o = Lt[e][Lt[e].length - 2];
            Math.sqrt(Math.pow(o - n, 2) + Math.pow(a - i, 2)) > mt && (Lt[e].push(n, i), Dt[e].push(t), ce(e, Lt.length / 2 - 1, Lt.length / 2 - 1))
        }
    }
    function ge(e, t, n, i, a) {
        if (void 0 === a && (a = (new Date).getTime()), Lt[e] || (Lt[e] = [
        ]), Dt[e] || (Dt[e] = [
        ]), Lt[e][2 * t] = n * ut, Lt[e][2 * t + 1] = i * ut, Dt[e][t] = a, (!Ht[e] || Ht[e] < t) && (Ht[e] = t), zt) {
            ce(e, t, t);
            var o = k(n * ut, i * ut),
                s = r(o.q, o.r),
                l = p(o.q, o.r);
            s != e && l != e && K(o.q, o.r) && d(o.q, o.r, e)
        }
    }
    function he(t) {
        for (var n = t.getInt16(1, !0), i = t.getInt16(3, !0), a = [
        ], o = 0; o < i; o++) {
            var s = t.getInt16(5 + 4 * o, !0),
                l = t.getInt16(5 + 4 * o + 2, !0);
            a.push({
                q: s,
                r: l
            })
        }
        var d = Y(a);
        console.log('read capture for player', n, 'and path count :', i, 'hexs to fill :', d.length),
            Array.prototype.push.apply(d, a);
        for (var c = Yt || !At ? k(tt * ut, nt * ut)  : k(St[Gt] * ut, Ct[Gt] * ut), u = [
        ], h = 0, o = 0; o < a.length; o++) g(a[o].q, a[o].r);
        for (var o = 0; o < d.length; o++) {
            var f = r(d[o].q, d[o].r);
            if (f != n && (f == Gt && tn--, h++, G(d[o], c) <= ct)) {
                w(b(d[o].q, d[o].r), e(0)),
                    g(d[o].q, d[o].r);
                var m = v(e(n), void 0, void 0, void 0, 0, !0);
                m.hexPosition = d[o],
                    m.position = y(d[o].q, d[o].r),
                    m.width = 0.5 * (gt - ft * ut * 2),
                    m.height = 0.5 * (ht - ft * ut * 2),
                    m.x += ft * ut + 0.25 * (gt - ft * ut * 2),
                    m.y += ft * ut + 0.25 * (ht - ft * ut * 2),
                    Ve.addChild(m),
                    u.push(m)
            }
        }
        if (Kt.push({
            type: 'CAPTURING',
            hexs: u,
            from: 0.5,
            to: 1,
            time: 0,
            length: 200,
            playerId: n
        }), n == Gt && (tn += h, h >= 100 && Pe(h)), Ee(), delete Lt[n], delete Dt[n], delete wn[n], delete Ht[n], Qe.removeChild(Et[n]), delete Et[n], $t[n]) for (var o = 0; o < $t[n].length; o++) $t[n][o].points = [
        ]
    }
    function fe(n) {
        var i = n.getInt16(1, !0),
            a = n.getInt16(3, !0);
        console.log('player is dead', i, 'killer is ', a);
        for (var o = [
        ], l = Yt || !At ? k(tt * ut, nt * ut)  : k(St[Gt] * ut, Ct[Gt] * ut), d = {
            q: 0,
            r: 0
        }, c = - ct; c <= ct; c++) for (var u = - ct; u <= ct; u++) if (d.q = l.q + c, d.r = l.r + u, K(d.q, d.r)) if (r(d.q, d.r) == i) {
            if (s(d.q, d.r), G(l, d) <= ct) {
                var g = v(e(i), void 0, void 0, void 0, 0, !0);
                g.hexPosition = {
                    q: d.q,
                    r: d.r
                },
                    g.position = y(d.q, d.r),
                    g.width = gt - ft * ut * 2,
                    g.height = ht - ft * ut * 2,
                    g.x += ft * ut,
                    g.y += ft * ut,
                    Ve.addChild(g),
                    o.push(g)
            }
        } else p(d.q, d.r) == i && h(d.q, d.r);
        if (o.length > 0 && setTimeout(function () {
            Kt.push({
                type: 'UNCAPTURING',
                hexs: o,
                from: 1,
                to: 0,
                time: 0,
                length: 500,
                playerId: i
            })
        }, 500), n.byteLength >= 13) {
            var f = n.getFloat32(5, !0),
                m = n.getFloat32(9, !0),
                w = new PIXI.Graphics,
                I = 0.01 * mt;
            w.beginFill(16777215),
                w.drawCircle(f * ut, m * ut, I),
                w.endFill(),
                w.alpha = 1,
                Ye.addChild(w),
                Kt.push({
                    type: 'IMPACT',
                    from: 0,
                    to: 1,
                    time: 0,
                    length: 300,
                    playerId: i,
                    impactX: f,
                    impactY: m,
                    sprite: w
                })
        }
        for (var b = [
        ], x = 0; x < 9; x++) {
            var w = new PIXI.Graphics,
                I = ut / 6 + Math.random() * ut / 9;
            w.lineStyle(yt * I / mt, e(i), 1),
                w.beginFill(t(i)),
                w.drawCircle(St[i] * ut, Ct[i] * ut, I),
                w.endFill(),
                b.push(w),
                w.animationDirection = Math.random() * Math.PI * 2,
                w.animationSpeed = 2 * Math.random() + 2,
                Ye.addChild(w)
        }
        if (Kt.push({
            type: 'EXPLOSION',
            parts: b,
            from: 1,
            to: 0,
            time: 0,
            length: 500,
            moveLength: 500,
            playerId: i
        }), Et[i] && (Kt.push({
            type: 'TRAIL_DISAPPEAR',
            trailGraphics: Et[i],
            from: 1,
            to: 0,
            time: 0,
            length: 200,
            playerId: i
        }), delete Et[i], delete Lt[i], delete Dt[i], delete wn[i], delete Ht[i]), Yt || i != Gt) me(i);
        else {
            Yt = !0,
                tt = St[Gt],
                nt = Ct[Gt],
                delete St[Gt],
                delete Ct[Gt],
                delete Pt[Gt],
                delete Bt[Gt],
                delete $t[Gt],
                Fe.visible = !1,
                je.visible = !1,
                document.getElementById('rankValue').innerHTML = '',
                document.getElementById('finalScore').innerHTML = tn + 500 * en;
            var E = 100 * tn / (1 + 3 * dt * (dt + 1));
            document.getElementById('finalMapPercent').innerHTML = E.toString().match(/^-?\d+(?:\.\d{0,1})?/) [0],
                document.getElementById('finalKills').innerHTML = en,
                document.getElementById('finalBlocks').innerHTML = tn,
                setTimeout(function () {
                    document.getElementById('fps') && (document.getElementById('fps').style.display = 'none'),
                        document.getElementById('respawn').style.display = 'block',
                        document.getElementById('victory').style.display = 'none',
                        Ne = setTimeout(function () {
                            location.reload()
                        }, 900000),
                    'undefined' != typeof ga && (ga('set', 'page', '/respawn'), ga('send', 'pageview'))
                }, 1000),
            'undefined' != typeof aiptag && (aiptag.cmd.display.push(function () {
                aipDisplayTag.display('TKS_superhex-io_300x250')
            }), aiptag.cmd.display.push(function () {
                aipDisplayTag.display('superhex-io_728x90')
            })),
            factorem && factorem.refreshAds([1], !0)
        }
        delete ln[i],
            delete sn[i],
            delete dn[i],
        Yt || an--,
        Yt || i == Gt || a != Gt || (en++, Pe(500)),
            Ee()
    }
    function me(e) {
        Ye.removeChild(qt[e]),
            Ye.removeChild(Mt[e]),
            delete qt[e],
            delete Mt[e],
            delete St[e],
            delete Ct[e],
            delete Pt[e],
            delete Bt[e],
            delete $t[e],
            delete Tt[e]
    }
    function pe(e, t, n) {
        console.log('player joins', e),
            f(t, n, e);
        for (var i = 0; i < 6; i++) K(t + vn[i].q, n + vn[i].r) && f(t + vn[i].q, n + vn[i].r, e);
        Yt || an++
    }
    function ye(e) {
        for (var t = e.getInt16(1, !0), n = e.getInt16(3, !0), i = e.getInt16(5, !0), a = e.getInt16(7, !0), o = Q({
            q: i,
            r: a
        }, {
            q: t,
            r: n
        }), r = {
            q: i + vn[(o + 5) % 6].q * ct,
            r: a + vn[(o + 5) % 6].r * ct
        }, s = (o + 1) % 6, d = 0; d < ct; d++) K(r.q, r.r) && l(r.q, r.r),
            O(r, s);
        for (var c = (o + 2) % 6, d = 0; d < ct; d++) K(r.q, r.r) && l(r.q, r.r),
            O(r, c);
        K(r.q, r.r) && l(r.q, r.r);
        for (var u = e.getInt16(9, !0), g = 0; g < u; g++) {
            m(e.getInt16(11 + 8 * g + 0, !0), e.getInt16(11 + 8 * g + 2, !0), e.getInt16(11 + 8 * g + 4, !0), e.getInt16(11 + 8 * g + 6, !0))
        }
    }
    function ke() {
        var e = k(St[Gt] * ut, Ct[Gt] * ut);
        if (!et || Math.abs(e.q - et.q) > 4 || Math.abs(e.r - et.r) > 4) {
            b(e.q, e.r).visible = !0;
            for (var t = 1; t <= ct; t++) for (var n = {
                q: e.q + vn[4].q * t,
                r: e.r + vn[4].r * t
            }, i = 0; i < 6; i++) for (var a = 0; a < t; a++) Z(n.q, n.r) && (b(n.q, n.r).visible = !0),
                O(n, i);
            et = e
        } else if (e.q != et.q || e.r != et.r) do {
            var o = {
                q: e.q - et.q,
                r: e.r - et.r
            };
            o.q = 0 == o.q ? 0 : o.q / Math.abs(o.q),
                o.r = 0 == o.r ? 0 : o.r / Math.abs(o.r);
            for (var r = {
                q: et.q + o.q,
                r: et.r + o.r
            }, s = Q(r, et), n = {
                q: r.q + vn[(s + 5) % 6].q * ct,
                r: r.r + vn[(s + 5) % 6].r * ct
            }, l = (s + 1) % 6, a = 0; a < ct; a++) Z(n.q, n.r) && (b(n.q, n.r).visible = !0),
                O(n, l);
            for (var d = (s + 2) % 6, a = 0; a < ct; a++) Z(n.q, n.r) && (b(n.q, n.r).visible = !0),
                O(n, d);
            Z(n.q, n.r) && (b(n.q, n.r).visible = !0),
                n = {
                    q: et.q + vn[(s + 2) % 6].q * ct,
                    r: et.r + vn[(s + 2) % 6].r * ct
                };
            for (var c = (s + 4) % 6, a = 0; a < ct; a++) Z(n.q, n.r) && (x(n.q, n.r), g(n.q, n.r)),
                O(n, c);
            for (var u = (s + 5) % 6, a = 0; a < ct; a++) Z(n.q, n.r) && (x(n.q, n.r), g(n.q, n.r)),
                O(n, u);
            Z(n.q, n.r) && (x(n.q, n.r), g(n.q, n.r)),
                et = r
        } while (et.q != e.q || et.r != e.r)
    }
    function ve(e) {
        for (var t = e.getInt16(1, !0), n = 3, i = 0; i < t; i++) {
            for (var a = e.getInt16(n, !0), o = e.getInt16(n + 2, !0), r = e.getInt16(n + 4, !0), s = 0; s <= r - o; s++) {
                var l = e.getFloat32(n + 6 + 8 * s, !0),
                    d = e.getFloat32(n + 6 + 8 * s + 4, !0);
                Lt[a] || (Lt[a] = [
                ]),
                Dt[a] || (Dt[a] = [
                ]),
                    Lt[a][2 * (o + s)] = l * ut,
                    Lt[a][2 * (o + s) + 1] = d * ut
            }
            n += 6 + 8 * (r - o + 1),
            zt && ce(a, o, r)
        }
    }
    function we(e) {
        return e.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
    }
    function Ie(e) {
        for (var t = e.split(' '), n = 0; n < t.length; n++) {
            var i = t[n].toUpperCase(),
                a = (i.match(/[a-zA-Z0-9]/) || [
                ]).pop();
            if (void 0 !== bn[a]) for (var o = 0; o < bn[a].length; o++) {
                var r = bn[a][o];
                - 1 != i.indexOf(r) && (t[n] = '❤')
            }
        }
        e = t.join(' ');
        for (var o = 0; o < bn[' '].length; o++) {
            var r = bn[' '][o];
            - 1 !== e.toUpperCase().indexOf(r.toUpperCase()) && (e = e.replace(new RegExp(bn[' '][o], 'ig'), '❤'))
        }
        return e
    }
    function be(e) {
        for (var t = e.getInt16(1, !0), n = e.getUint8(3, !0), i = '', a = 0; a < n; a++) {
            var o = e.getUint8(4 + 2 * a, !0) | e.getUint8(4 + 2 * a + 1, !0) << 8;
            i += String.fromCharCode(o)
        }
        console.log('username received for player', t, i),
            sn[t] = Ie(we(i)),
        Yt || t != Gt || (it = i, _e.removeChild(je), je = new PIXI.Text(it, {
            fontFamily: 'Arial',
            fontSize: 16 / pn,
            fill: 16777215
        }), je.x = window.innerWidth / 2 - je.width / 2, je.y = window.innerHeight / 2 - ht - mt, _e.addChild(je))
    }
    function xe(e) {
        var t = e.getInt16(1, !0),
            n = e.getInt16(3, !0);
        console.log('skin id received for player', t, n),
            ln[t] = n
    }
    function Ee() {
        document.getElementById('scoreValue').innerHTML = tn + 500 * en;
        var e = 100 * tn / (1 + 3 * dt * (dt + 1));
        document.getElementById('mapPercent').innerHTML = e.toString().match(/^-?\d+(?:\.\d{0,1})?/) [0],
            document.getElementById('blocksValue').innerHTML = tn,
            document.getElementById('killsValue').innerHTML = en,
            document.getElementById('rankValue').innerHTML = nn,
            document.getElementById('totalPlayers').innerHTML = an,
        At && !_t && e >= 100 && (_t = !0, Wt = (new Date).getTime(), document.getElementById('victory').style.display = 'block')
    }
    function qe() {
        for (var e = 0; e < on.length; e++) on[e].playerId > 0 ? (document.getElementById('lb' + (e + 1) + 'Name').innerHTML = sn[on[e].playerId], document.getElementById('lb' + (e + 1) + 'Score').innerHTML = on[e].score)  : (document.getElementById('lb' + (e + 1) + 'Name').innerHTML = '', document.getElementById('lb' + (e + 1) + 'Score').innerHTML = '')
    }
    function Me() {
        document.getElementById('friendsScores').style.display = rn.length > 0 ? 'block' : 'none';
        for (var e = '<table class="table">', t = 0; t < rn.length; t++) rn[t].rank > 0 && (e += '<tr><td class="rank">' + rn[t].rank + '.</td><td class="name">' + sn[rn[t].playerId] + '</td><td class="fscore">' + rn[t].score + '</td></tr>');
        e += '</table><div class="separator"></div>',
            document.getElementById('friends-detail').innerHTML = e
    }
    function Pe(e) {
        document.getElementById('bonusDisplay').innerHTML = '+' + e,
            document.getElementById('bonusDisplay').classList.remove('shown'),
            setTimeout(function () {
                document.getElementById('bonusDisplay').classList.add('shown')
            }, 100)
    }
    function Be() {
        var e = k(St[Gt] * ut, Ct[Gt] * ut),
            t = e.q / dt * 0.866,
            n = (e.r + e.q / 2) / dt;
        document.getElementById('minimap-position').setAttribute('cx', t),
            document.getElementById('minimap-position').setAttribute('cy', n)
    }
    function Se() {
        document.getElementById('button-create-party').style.display = 'none',
            document.getElementById('spinner-create-party').style.display = 'block',
        'undefined' != typeof ga && ga('send', 'event', 'Click', 'CreateParty');
        var e,
            t = Xe && 0 == Xe.length,
            n = null;
        if (Xe) for (var i = 0; i < Xe.length; i++) {
            var a = Xe[i].z;
            wt[a] && (t = !0, - 1 != wt[a] && (!n || e > wt[a]) && (n = a, e = wt[a]))
        }
        if (!t) return void setTimeout(Se, 50);
        var o = new XMLHttpRequest;
        o.onreadystatechange = function () {
            4 == o.readyState && 200 == o.status && (ot = o.responseText, document.getElementById('create-party').style.display = 'none', document.getElementById('in-party').style.display = 'block', window.location.hash = ot, document.getElementById('party-share-link').value = 'http://' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + window.location.pathname + '#' + ot)
        },
            o.onerror = function () {
                console.log('Error with createParty, retrying in 5s'),
                    setTimeout(Se, 5000)
            },
            o.open('GET', MM_URL + '/createParty' + (n ? '?zone=' + n : ''), !0),
            o.send(null)
    }
    function Ce() {
        ot = null,
            window.location.hash = '',
            document.getElementById('button-create-party').style.display = 'block',
            document.getElementById('spinner-create-party').style.display = 'none',
            document.getElementById('create-party').style.display = 'block',
            document.getElementById('in-party').style.display = 'none',
        'undefined' != typeof ga && ga('send', 'event', 'Click', 'LeaveParty')
    }
    function Te(e) {
        return 0 != e || 'undefined' == typeof Storage || localStorage.getItem('followClicked') ? 1 != e || 'undefined' == typeof Storage || localStorage.getItem('tweetClicked') ? 2 != e || 'undefined' == typeof Storage || localStorage.getItem('likeClicked') ? 3 != e || 'undefined' == typeof Storage || localStorage.getItem('subscribeClicked') ? 4 != e || 'undefined' == typeof Storage || localStorage.getItem('shareClicked') ? (document.getElementById('skin-' + un) && document.getElementById('skin-' + un).childNodes.item(1).classList.remove('selected'), un == e ? (un = - 1, document.getElementById('skin-' + e).childNodes.item(1).classList.remove('selected'))  : (un = e, document.getElementById('skin-' + e).childNodes.item(1).classList.add('selected')), document.getElementById('selected-skin-img').src = 'img/bs/' + ( - 1 == un ? 'fox' : xn[un]) + '.png', void ('undefined' != typeof Storage && localStorage.setItem('selectedSkin', un)))  : (window.open('https://www.facebook.com/sharer?u=http%3A%2F%2Fsuperhex.io%2F', '_blank'), localStorage.setItem('shareClicked', 1), void Le(gn))  : (window.open('https://www.youtube.com/channel/UCOF4hltac1SF61qBE7mSgoQ?sub_confirmation=1', '_blank'), localStorage.setItem('subscribeClicked', 1), void Le(gn))  : (window.open('https://www.facebook.com/superhex.io/', '_blank'), localStorage.setItem('likeClicked', 1), void Le(gn))  : (window.open('https://twitter.com/intent/tweet?text=Come%20play%20with%20me!%20http%3A%2F%2Fsuperhex.io%2F%20%23superhexio', '_blank'), localStorage.setItem('tweetClicked', 1), void Le(gn))  : (window.open('https://twitter.com/intent/follow?screen_name=superhexio', '_blank'), localStorage.setItem('followClicked', 1), void Le(gn))
    }
    function Le(e) {
        gn = e;
        for (var t = document.getElementById('skin-list'), n = '', i = 0; i < xn.length; i++) i >= e && i <= e + 3 && (n += '<div id="skin-' + i + '" class="card" onclick="superhex.selectSkin(' + i + ')"><div class="imgcontainer"><img src="img/' + xn[i] + '.png"></div>', 0 != i || 'undefined' == typeof Storage || localStorage.getItem('followClicked') ? 1 != i || 'undefined' == typeof Storage || localStorage.getItem('tweetClicked') ? 2 != i || 'undefined' == typeof Storage || localStorage.getItem('likeClicked') ? 3 != i || 'undefined' == typeof Storage || localStorage.getItem('subscribeClicked') ? 4 != i || 'undefined' == typeof Storage || localStorage.getItem('shareClicked') ? n += '<div class="checkbox' + (i == un ? ' selected' : '') + '"></div>' : n += '<div class="skin-share"><div class="text">Share</div></div>' : n += '<div class="skin-subscribe"><div class="text">Subscribe</div></div>' : n += '<div class="skin-like"><div class="text">Like</div></div>' : n += '<div class="skin-tweet"><div class="text">Tweet</div></div>' : n += '<div class="skin-follow"><div class="text">Follow</div></div>', n += '</div>');
        t.innerHTML = n,
            document.getElementById('skin-left-arrow').style.visibility = gn > 0 ? 'visible' : 'hidden',
            document.getElementById('skin-right-arrow').style.visibility = gn + 4 < xn.length ? 'visible' : 'hidden'
    }
    function He() {
        Le(gn + 4)
    }
    function De() {
        Le(gn - 4)
    }
    function Ae() {
        if (qn || Mn || Pn || Bn) j({
            clientX: window.innerWidth / 2 + (Bn ? 10 : 0) + (Pn ? - 10 : 0),
            clientY: window.innerHeight / 2 + (qn ? - 10 : 0) + (Mn ? 10 : 0)
        });
        else {
            if (!Pt[Gt]) return;
            j({
                clientX: window.innerWidth / 2 + 10 * Math.cos(Pt[Gt]),
                clientY: window.innerHeight / 2 + 10 * Math.sin(Pt[Gt])
            })
        }
    }
    function Re() {
        try {
            (navigator.language.startsWith('ru') || navigator.language.startsWith('uk')) && (document.getElementById('portal-button').href = 'http://vseigru.net', document.getElementById('portal-button').getElementsByTagName('button') [0].innerHTML = 'More Games')
        } catch (e) {
            console.error(e)
        }
    }
    var WSERVER_URL,
        Xe,
        Ue,
        ze,
        _e,
        Fe,
        je,
        We,
        Ne,
        Ge,
        Oe,
        Ve,
        Qe,
        Ye,
        Ke,
        Je,
        Ze,
        $e,
        et,
        tt,
        nt,
        it,
        at,
        ot,
        rt,
        st,
        lt,
        dt = 15,
        ct = 15,
        ut = Math.max(window.innerWidth / 40 / 2 / 0.75, window.innerHeight / 40 / Math.sqrt(3)),
        gt = 2 * ut,
        ht = Math.sqrt(3) / 2 * gt,
        ft = 0.1,
        mt = 0.6 * ut,
        pt = 2 / 3 * mt,
        yt = mt / 3,
        kt = 7,
        vt = 5,
        wt = [
        ],
        It = [
        ],
        bt = [
        ],
        xt = [
        ],
        Et = [
        ],
        qt = [
        ],
        Mt = [
        ],
        Pt = [
        ],
        Bt = [
        ],
        St = [
        ],
        Ct = [
        ],
        Tt = [
        ],
        Lt = [
        ],
        Ht = [
        ],
        Dt = [
        ],
        At = !1,
        Rt = !1,
        Xt = !1,
        Ut = !1,
        zt = !1,
        _t = !1,
        Ft = !1,
        jt = !1,
        Wt = 0,
        Nt = 0,
        Gt = - 1,
        Ot = 0,
        Vt = 0,
        Qt = 0,
        Yt = !1,
        Kt = [
        ],
        Jt = [
        ],
        Zt = [
        ],
        $t = [
        ],
        en = 0,
        tn = 7,
        nn = 0,
        an = 0,
        on = [
        ],
        rn = [
        ],
        sn = [
        ],
        ln = [
        ],
        dn = [
        ],
        cn = !1,
        un = - 1,
        gn = 0,
        hn = 'undefined' != typeof Storage && localStorage.getItem('respawnCount') ? localStorage.getItem('respawnCount')  : 0,
        fn = [
            5197647,
            16776518,
            16594229,
            16735861,
            2948860,
            16657620,
            9764642,
            16747050,
            16762930,
            16718941,
            1295871,
            16147199,
            2293637,
            15597449,
            9043927,
            10289033
        ],
        mn = [
            5197647,
            7631624,
            13116195,
            9389135,
            1486766,
            13836207,
            6271494,
            13133334,
            9596687,
            12849990,
            38599,
            11682745,
            962133,
            8556345,
            3192970,
            4832562
        ],
        pn = n(),
        yn = 1,
        kn = [
        ],
        vn = [
            {
                q: 1,
                r: 0
            },
            {
                q: 1,
                r: - 1
            },
            {
                q: 0,
                r: - 1
            },
            {
                q: - 1,
                r: 0
            },
            {
                q: - 1,
                r: 1
            },
            {
                q: 0,
                r: 1
            }
        ];
    document.addEventListener('DOMContentLoaded', function () {
        if ('undefined' != typeof Storage) {
            localStorage.getItem('username') && (document.getElementById('username').value = localStorage.getItem('username')),
            localStorage.getItem('selectedSkin') && (un = localStorage.getItem('selectedSkin')),
                document.getElementById('selected-skin-img').src = 'img/bs/' + ( - 1 == un ? 'fox' : xn[un]) + '.png';
            var e = localStorage.getItem('quality');
            e && i(e)
        }
        window.location.hash && (6 == window.location.hash.length || 7 == window.location.hash.length && window.location.hash.startsWith('#')) && (ot = window.location.hash.startsWith('#') ? window.location.hash.substr(1)  : window.location.hash, document.getElementById('create-party').style.display = 'none', document.getElementById('in-party').style.display = 'block', document.getElementById('party-share-link').value = 'http://' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + window.location.pathname + '#' + ot),
            Le(0)
    }, !1),
        window.addEventListener('load', function () {
            PIXI.loader.add('img/texturepack2.json').add('img/traine.png').load(function (e, t) {
                cn = !0,
                    B();
                for (var n in t) if (n.error) {
                    console.error('error loading asset', n),
                        alert('Error loading game images, please reload the page. Clear your browser cache if this happens repeatedly.');
                    break
                }
                at = PIXI.loader.resources['img/texturepack2.json'].textures,
                    PIXI.loader.resources['img/traine.png'].texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
            })
        }, !1);
    var wn = [
        ],
        In = [
            '4r5e',
            '5h1t',
            '5hit',
            'a_s_s',
            'a55',
            'anal',
            'analconda',
            'anus',
            'ar5e',
            'arrse',
            'arse',
            'arsehole',
            'ass',
            'ass fuck',
            'asses',
            'assfucker',
            'ass-fucker',
            'assfukka',
            'asshole',
            'assholes',
            'assmucus',
            'asswhole',
            'b!tch',
            'b00bs',
            'b17ch',
            'b1tch',
            'ballbag',
            'balls',
            'ballsack',
            'bastard',
            'bastards',
            'beastial',
            'beastiality',
            'bellend',
            'bestial',
            'bestiality',
            'bi+ch',
            'biatch',
            'bitch',
            'bitcher',
            'bitchers',
            'bitches',
            'bitchin',
            'bitching',
            'bloody',
            'blow job',
            'blowjob',
            'blowjobs',
            'blumpkin',
            'boiolas',
            'bollock',
            'bollocks',
            'bollok',
            'boner',
            'boob',
            'boobs',
            'booobs',
            'boooobs',
            'booooobs',
            'booooooobs',
            'breasts',
            'buceta',
            'bugger',
            'buggery',
            'bum',
            'bunny fucker',
            'butt',
            'butthole',
            'buttmuch',
            'buttplug',
            'c0ck',
            'c0cksucker',
            'carpet muncher',
            'cawk',
            'chink',
            'cipa',
            'cl1t',
            'clit',
            'clitoris',
            'clits',
            'cnut',
            'cock',
            'cockface',
            'cockhead',
            'cockmunch',
            'cockmuncher',
            'cocks',
            'cocksuck',
            'cocksucked',
            'cocksucker',
            'cock-sucker',
            'cocksucker',
            'cocksucking',
            'cocksucks',
            'cocksuka',
            'cocksukka',
            'cok',
            'cokmuncher',
            'coksucka',
            'coon',
            'cox',
            'crap',
            'cum',
            'cum freak',
            'cumdump',
            'cumjunkie',
            'cummer',
            'cumming',
            'cums',
            'cumshot',
            'cunilingus',
            'cunillingus',
            'cunnilingus',
            'cunt',
            'cuntbag',
            'cuntlick',
            'cuntlicker',
            'cuntlicking',
            'cunts',
            'cuntsicle',
            'cyalis',
            'cyberfuc',
            'cyberfuck',
            'cyberfucked',
            'cyberfucker',
            'cyberfuckers',
            'cyberfucking',
            'd1ck',
            'damn',
            'darn',
            'dick',
            'dickhead',
            'dildo',
            'dildos',
            'dink',
            'dinks',
            'dirsa',
            'dlck',
            'dog-fucker',
            'doggin',
            'dogging',
            'donkeyribber',
            'doosh',
            'douche',
            'duche',
            'dyke',
            'ejaculate',
            'ejaculated',
            'ejaculates',
            'ejaculating',
            'ejaculatings',
            'ejaculation',
            'ejakulate',
            'f u c k',
            'f u c k e r',
            'f_u_c_k',
            'f4nny',
            'facialize',
            'fag',
            'fagging',
            'faggitt',
            'faggot',
            'faggs',
            'fagot',
            'fagots',
            'fags',
            'fanny',
            'fannyflaps',
            'fannyfucker',
            'fanyy',
            'fart',
            'fatass',
            'fcuk',
            'fcuker',
            'fcuking',
            'feck',
            'fecker',
            'felch',
            'felching',
            'fellate',
            'fellatio',
            'fingerfuck',
            'fingerfucked',
            'fingerfucker',
            'fingerfuckers',
            'fingerfucking',
            'fingerfucks',
            'fistfuck',
            'fistfucked',
            'fistfucker',
            'fistfuckers',
            'fistfucking',
            'fistfuckings',
            'fistfucks',
            'flange',
            'fook',
            'fooker',
            'fuck',
            'fucka',
            'fuck-bitch',
            'fucked',
            'fucker',
            'fuckers',
            'fuckhead',
            'fuckheads',
            'fuckin',
            'fucking',
            'fucking ',
            'fuckings',
            'fuckingshitmotherfucker',
            'fuckme',
            'fuckmeat',
            'fucks',
            'fucktoy',
            'fuckwhit',
            'fuckwit',
            'fudge packer',
            'fudgepacker',
            'fuk',
            'fuker',
            'fukker',
            'fukkin',
            'fuks',
            'fukwhit',
            'fukwit',
            'fux',
            'fux0r',
            'gangbang',
            'gangbang',
            'gangbanged',
            'gangbangs',
            'gaylord',
            'gaysex',
            'goatse',
            'God',
            'god-dam',
            'goddamn',
            'goddamned',
            'god-damned',
            'hardcoresex',
            'hell',
            'heshe',
            'hoar',
            'hoare',
            'hoer',
            'homo',
            'hore',
            'horniest',
            'horny',
            'hotsex',
            'jackoff',
            'jack-off',
            'jap',
            'jerk-off',
            'jism',
            'jiz',
            'jizm',
            'jizz',
            'kawk',
            'knob',
            'knobead',
            'knobed',
            'knobend',
            'knobhead',
            'knobjocky',
            'knobjokey',
            'kock',
            'kondum',
            'kondums',
            'kum',
            'kummer',
            'kumming',
            'kums',
            'kunilingus',
            'l3i+ch',
            'l3itch',
            'labia',
            'liter',
            'lust',
            'lusting',
            'm0f0',
            'm0fo',
            'm45terbate',
            'ma5terb8',
            'ma5terbate',
            'masochist',
            'masterb8',
            'masterbat*',
            'masterbat3',
            'masterbate',
            'master-bate',
            'masterbation',
            'masterbations',
            'masturbate',
            'mof0',
            'mofo',
            'mo-fo',
            'mothafuck',
            'mothafucka',
            'mothafuckas',
            'mothafuckaz',
            'mothafucked',
            'mothafucker',
            'mothafuckers',
            'mothafuckin',
            'mothafucking',
            'mothafuckings',
            'mothafucks',
            'mother fucker',
            'motherfuck',
            'motherfucked',
            'motherfucker',
            'motherfucker',
            'motherfuckers',
            'motherfuckin',
            'motherfucking',
            'motherfucking',
            'motherfuckings',
            'motherfuckka',
            'motherfucks',
            'muff',
            'mutha',
            'muthafecker',
            'muthafuckker',
            'muther',
            'mutherfucker',
            'n1gga',
            'n1gger',
            'nazi',
            'nigg3r',
            'nigg4h',
            'nigga',
            'niggah',
            'niggas',
            'niggaz',
            'nigger',
            'niggers',
            'nlgger',
            'nlggers',
            'nob',
            'nob jokey',
            'nobhead',
            'nobjocky',
            'nobjokey',
            'numbnuts',
            'nutsack',
            'orgasim',
            'orgasims',
            'orgasm',
            'orgasms',
            'p0rn',
            'pawn',
            'pecker',
            'penis',
            'penisfucker',
            'phonesex',
            'phuck',
            'phuk',
            'phuked',
            'phuking',
            'phukked',
            'phukking',
            'phuks',
            'phuq',
            'pigfucker',
            'pimpis',
            'piss',
            'pissed',
            'pisser',
            'pissers',
            'pisses',
            'pissflaps',
            'pissin',
            'pissing',
            'pissoff',
            'poop',
            'porn',
            'porno',
            'pornography',
            'pornos',
            'prick',
            'pricks',
            'pron',
            'pube',
            'pusse',
            'pussi',
            'pussies',
            'pussy',
            'pussys',
            'rapist',
            'rectum',
            'retard',
            'rimjaw',
            'rimming',
            's hit',
            's_h_i_t',
            'sadist',
            'schlong',
            'screwing',
            'scroat',
            'scrote',
            'scrotum',
            'semen',
            'sex',
            'sh!+',
            'sh!t',
            'sh1t',
            'shag',
            'shagger',
            'shaggin',
            'shagging',
            'shemale',
            'shi+',
            'shit',
            'shit ass',
            'shitass',
            'shitdick',
            'shite',
            'shited',
            'shitey',
            'shitfuck',
            'shitfull',
            'shithead',
            'shiting',
            'shitings',
            'shits',
            'shitted',
            'shitter',
            'shitters',
            'shitting',
            'shittings',
            'shitty',
            'skank',
            'skullfuck',
            'slaptard',
            'slich',
            'slut',
            'sluts',
            'smegma',
            'smut',
            'snatch',
            'sob',
            'son-of-a-bitch',
            'spac',
            'spunk',
            'sucker',
            't1tt1e5',
            't1tties',
            'teets',
            'teez',
            'testical',
            'testicle',
            'tit',
            'titfuck',
            'tits',
            'titt',
            'tittie5',
            'tittiefucker',
            'titties',
            'tittyfuck',
            'tittywank',
            'titwank',
            'tosser',
            'turd',
            'tw4t',
            'twat',
            'twathead',
            'twatty',
            'twunt',
            'twunter',
            'v14gra',
            'v1gra',
            'vagina',
            'viagra',
            'vulva',
            'w00se',
            'wang',
            'wank',
            'wanker',
            'wanky',
            'whoar',
            'whore',
            'willies',
            'willy',
            'xrated',
            'xxx'
        ],
        bn = {
        };
    !function () {
        for (var e = 0; e < In.length; e++) {
            var t = In[e].toUpperCase(),
                n = t.charAt(0);
            - 1 !== t.indexOf(' ') && (n = ' '),
            void 0 === bn[n] && (bn[n] = [
            ]),
                bn[n].push(t)
        }
    }();
    var xn = [
            'chick',
            'duck',
            'cow',
            'owls',
            'elephant',
            'fox',
            'panda',
            'cat',
            'pig',
            'frog'
        ],
        En = [
            [1,
                8,
                13],
            [
                4,
                10,
                14
            ],
            [
            ],
            [
                2,
                3,
                9
            ],
            [
                4,
                10,
                14
            ],
            [
                7,
                8
            ],
            [
            ],
            [
                1,
                8,
                13
            ],
            [
                2,
                3,
                9,
                5
            ],
            [
                6,
                12,
                15
            ]
        ],
        qn = !1,
        Mn = !1,
        Pn = !1,
        Bn = !1;
    document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 38:
                qn || (qn = !0, Ae());
                break;
            case 40:
                Mn || (Mn = !0, Ae());
                break;
            case 37:
                Pn || (Pn = !0, Ae());
                break;
            case 39:
                Bn || (Bn = !0, Ae())
        }
    }), document.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
            case 38:
                qn = !1,
                    Ae();
                break;
            case 40:
                Mn = !1,
                    Ae();
                break;
            case 37:
                Pn = !1,
                    Ae();
                break;
            case 39:
                Bn = !1,
                    Ae()
        }
    }), document.addEventListener('keyup', function (e) {
        At && (At && 83 == e.keyCode ? (Ft = !Ft, document.getElementById('fps') && (document.getElementById('fps').style.display = Ft ? 'block' : 'none'))  : At && 70 == e.keyCode && (jt = !jt, document.getElementById('friends-detail').style.display = jt ? 'block' : 'none'))
    }), 'loading' !== document.readyState ? Re()  : document.addEventListener('DOMContentLoaded', Re, !1); var Sn = {
        clickPlay: H,
        clickPlayAgain: D,
        clickMainMenu: A,
        aipComplete: L,
        setQuality: i,
        createParty: Se,
        leaveParty: Ce,
        selectSkin: Te,
        nextSkins: He,
        previousSkins: De
    }; return Sn
}();//# sourceMappingURL=game.min.js.map
