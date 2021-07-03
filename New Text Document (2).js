$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#mycontent:visible')['length']) {
            window['location']['href'] = 'https://shardawebsolutions.com/'
        }
    }, 3000)
});
window['onload'] = function() {
    var _0xa3cdx1 = document['getElementById']('mycontent');
    _0xa3cdx1['setAttribute']('href', 'https://sarakrijobdaily.com/');
    _0xa3cdx1['setAttribute']('rel', 'dofollow');
    _0xa3cdx1['setAttribute']('title', 'Copyright');
    _0xa3cdx1['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: #ff00ba!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    _0xa3cdx1['innerHTML'] = 'Owner'
};
$(document)['ready'](function(_0xa3cdx2) {
    var _0xa3cdx3 = -1,
        o = '',
        _0xa3cdx5 = '';
    _0xa3cdx2('#menu')['find']('ul')['find']('li')['each'](function() {
        for (var _0xa3cdx6 = _0xa3cdx2(this)['text'](), _0xa3cdx7 = _0xa3cdx2(this)['find']('a')['attr']('href'), _0xa3cdx8 = 0, _0xa3cdx9 = 0; _0xa3cdx9 < _0xa3cdx6['length'] && (_0xa3cdx8 = _0xa3cdx6['indexOf']('_', _0xa3cdx8), -1 != _0xa3cdx8); _0xa3cdx9++) {
            _0xa3cdx8++
        };
        if (level = _0xa3cdx9, level > _0xa3cdx3 && (o += '<ul>', _0xa3cdx5 += '<ul>'), level < _0xa3cdx3) {
            offset = _0xa3cdx3 - level;
            for (var _0xa3cdx9 = 0; _0xa3cdx9 < offset; _0xa3cdx9++) {
                o += '</ul></li>', _0xa3cdx5 += '</ul></li>'
            }
        };
        _0xa3cdx6 = _0xa3cdx6['replace'](/_/gi, ''), o += '<li><a href=\'' + _0xa3cdx7 + '\'>' + _0xa3cdx6 + '</a>', _0xa3cdx5 += '<li><a href=\'' + _0xa3cdx7 + '\'>';
        for (var _0xa3cdx9 = 0; _0xa3cdx9 < level; _0xa3cdx9++) {
            _0xa3cdx5 += ''
        };
        _0xa3cdx5 += _0xa3cdx6 + '</a>', _0xa3cdx3 = level
    });
    for (var _0xa3cdx8 = 0; _0xa3cdx3 >= _0xa3cdx8; _0xa3cdx8++) {
        o += '</ul>', _0xa3cdx5 += '</ul>', 0 != _0xa3cdx8 && (o += '</li>', _0xa3cdx5 += '</li>')
    };
    _0xa3cdx2('#menu .LinkList')['html'](_0xa3cdx5), _0xa3cdx2('#menu > .LinkList > ul')['attr']('id', 'nav'), selectnav('nav'), _0xa3cdx2('#menu ul > li > ul')['parent']('li')['addClass']('parent'), _0xa3cdx2('#menu .widget')['attr']('style', 'display:block!important;'), _0xa3cdx2('#menu ul > li')['first']()['addClass']('hub-home')
});
$('.ticker .HTML .widget-content')['each'](function() {
    var _0xa3cdxa = $(this)['find']('span')['attr']('data-no') || '',
        _0xa3cdxb = $(this)['find']('span')['attr']('data-label') || '',
        _0xa3cdxc = $(this)['find']('span')['attr']('data-type') || '';
    if (_0xa3cdxc != undefined && _0xa3cdxc['match']('recent')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xa3cdxa,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xa3cdx1) {
                var _0xa3cdxd = '';
                var _0xa3cdxe = '<ul>';
                for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1['feed']['entry']['length']; _0xa3cdxf++) {
                    for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                        if (_0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                            _0xa3cdxd = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                            break
                        }
                    };
                    var _0xa3cdx11 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['title']['$t'];
                    var s = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['category'][0]['term'];
                    var _0xa3cdx13 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['content']['$t'];
                    var _0xa3cdx14 = $('<div>')['html'](_0xa3cdx13);
                    if (_0xa3cdx13['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xa3cdx5 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                        var _0xa3cdx3 = _0xa3cdx5
                    } else {
                        if (_0xa3cdx13['indexOf']('<img') > -1) {
                            var _0xa3cdx15 = _0xa3cdx14['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                            var _0xa3cdx3 = _0xa3cdx15
                        } else {
                            var _0xa3cdx3 = no_image
                        }
                    };
                    _0xa3cdxe += '<li><div class="tk-thumb"><a class="tk-img" href="' + _0xa3cdxd + '" style="background:url(' + _0xa3cdx3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + _0xa3cdxd + '">' + _0xa3cdx11 + '</a></h3></li>'
                };
                _0xa3cdxe += '</ul>';
                $('.ticker .widget-content')['each'](function() {
                    $(this)['html'](_0xa3cdxe);
                    $(this)['prev']('h2')['wrapInner']('<span></span>');
                    $(this)['prev']('h2')['prepend']('<i class="fa fa-fire"></i>');
                    $(this)['find']('ul')['webTicker']()
                })
            }
        })
    } else {
        if (_0xa3cdxc['match']('label')) {
            $['ajax']({
                url: '/feeds/posts/default/-/' + _0xa3cdxb + '?alt=json-in-script&max-results=' + _0xa3cdxa,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0xa3cdx1) {
                    var _0xa3cdxd = '';
                    var _0xa3cdxe = '<ul>';
                    for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1['feed']['entry']['length']; _0xa3cdxf++) {
                        for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                            if (_0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                                _0xa3cdxd = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                                break
                            }
                        };
                        var _0xa3cdx11 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['title']['$t'];
                        var s = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['category'][0]['term'];
                        var _0xa3cdx13 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['content']['$t'];
                        var _0xa3cdx14 = $('<div>')['html'](_0xa3cdx13);
                        if (_0xa3cdx13['indexOf']('//www.youtube.com/embed/') > -1) {
                            var _0xa3cdx5 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                            var _0xa3cdx3 = _0xa3cdx5
                        } else {
                            if (_0xa3cdx13['indexOf']('<img') > -1) {
                                var _0xa3cdx15 = _0xa3cdx14['find']('img:first')['attr']('src')['replace']('s72-c', 's100');
                                var _0xa3cdx3 = _0xa3cdx15
                            } else {
                                var _0xa3cdx3 = no_image
                            }
                        };
                        _0xa3cdxe += '<li><div class="tk-thumb"><a class="tk-img" href="' + _0xa3cdxd + '" style="background:url(' + _0xa3cdx3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + _0xa3cdxd + '">' + _0xa3cdx11 + '</a></h3></li>'
                    };
                    _0xa3cdxe += '</ul>';
                    $('.ticker .HTML .widget-content')['each'](function() {
                        $(this)['html'](_0xa3cdxe);
                        $(this)['prev']('h2')['wrapInner']('<span></span>');
                        $(this)['prev']('h2')['prepend']('<i class="fa fa-fire"></i>');
                        $(this)['find']('ul')['webTicker']()
                    })
                }
            })
        } else {
            $('.news-tick-wrap')['remove']()
        }
    }
});
$(document)['ready'](function() {
    $('.sidebar h2,.lowerbar h2')['wrap']('<div class="widget-title"></div>')
});
$(function() {
    selectnav('nav1');
    $('.post-body img')['parent']('a')['css']('margin', '0 auto!important')
});
$('.PopularPosts ul li img')['attr']('src', function(_0xa3cdx16, _0xa3cdx17) {
    if (_0xa3cdx17['match']('hqdefault.jpg')) {
        return _0xa3cdx17['replace']('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xa3cdx17['match']('default.jpg')) {
            return _0xa3cdx17['replace']('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xa3cdx17['match']('s72-c')) {
                return _0xa3cdx17['replace']('/s72-c', '/s100-c')
            } else {
                if (_0xa3cdx17['match']('w72-h72-p-nu')) {
                    return _0xa3cdx17['replace']('/w72-h72-p-nu', '/s100-c')
                } else {
                    if (_0xa3cdx17['match']('w72-h72-p-k-no-nu')) {
                        return _0xa3cdx17['replace']('/w72-h72-p-k-no-nu', '/s100-c')
                    } else {
                        return _0xa3cdx17['replace']('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png')
                    }
                }
            }
        }
    }
});
$('.comments .avatar-image-container img')['attr']('src', function(_0xa3cdx16, _0xa3cdx17) {
    if (_0xa3cdx17['match']('hqdefault.jpg')) {
        return _0xa3cdx17['replace']('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xa3cdx17['match']('default.jpg')) {
            return _0xa3cdx17['replace']('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xa3cdx17['match']('s35-c')) {
                return _0xa3cdx17['replace']('/s35-c', '/s100-c')
            } else {
                if (_0xa3cdx17['match']('s72-c')) {
                    return _0xa3cdx17['replace']('/s72-c', '/s100-c')
                } else {
                    if (_0xa3cdx17['match']('w72-h72-p-nu')) {
                        return _0xa3cdx17['replace']('/w72-h72-p-nu', '/s100-c')
                    } else {
                        return _0xa3cdx17['replace']('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png')
                    }
                }
            }
        }
    }
});
$(document)['ready'](function() {
    var _0xa3cdx18 = $('#sidetabs #tabside1 .widget h2')['text']();
    $('.menu-tab .item-1 a')['text'](_0xa3cdx18);
    var _0xa3cdxd = $('#sidetabs #tabside2 .widget h2')['text']();
    $('.menu-tab .item-2 a')['text'](_0xa3cdxd);
    var _0xa3cdx5 = $('#sidetabs #tabside3 .widget h2')['text']();
    $('.menu-tab .item-3 a')['text'](_0xa3cdx5);
    $('#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title')['remove']();
    $(this)['find']('.menu-tab li')['addClass']('hide-tab');
    $('.sidetabs')['tabslet']({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if (0 === $('.sidetabs .widget')['length']) {
        $('.sidetabs')['remove']()
    }
});
$(document)['ready'](function() {
    $('.ty-ran-yard span')['each'](function() {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xa3cdx19) {
                _0xa3cdx19 = _0xa3cdx19['feed']['entry']['length'] - 3, _0xa3cdx19 = Math['floor'](Math['random']() * (_0xa3cdx19 - 0 + 1)) + 0, 0 == _0xa3cdx19 && (_0xa3cdx19 = Math['floor'](Math['random']() * (_0xa3cdx19 - 0 + 1)) + 1), _0xa3cdx19 == 0 && (_0xa3cdx19 == 1), $['ajax']({
                    url: '/feeds/posts/default?alt=json-in-script&start-index=' + _0xa3cdx19 + '&max-results=1',
                    type: 'get',
                    dataType: 'jsonp',
                    success: function(_0xa3cdx1a) {
                        var _0xa3cdx7 = '';
                        var _0xa3cdx1b = '';
                        for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1a['feed']['entry']['length']; _0xa3cdxf++) {
                            for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                                if (_0xa3cdx1a['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                                    _0xa3cdx7 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                                    break
                                }
                            };
                            _0xa3cdx1b += '<a class="ran-sym" href="' + _0xa3cdx7 + '"></a>'
                        };
                        $('.ty-ran-yard span')['html'](_0xa3cdx1b)
                    }
                })
            }
        })
    })
});
$('.Label a,.post-labels a,.breadcrumbs span a,.label-head a')['attr']('href', function(_0xa3cdx16, _0xa3cdx1c) {
    return _0xa3cdx1c['replace'](_0xa3cdx1c, _0xa3cdx1c + '?&max-results=' + perPage)
});
var s = '[full_width]';
var o = '[left_sidebar]';
$('.post *')['replaceText'](s, '<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>');
$('.post-body *')['replaceText'](o, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>');
$('.ty-trigger .HTML .widget-content span.latestcomments')['each'](function() {
    var _0xa3cdxa = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/comments/default?alt=json-in-script&max-results=' + _0xa3cdxa,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xa3cdx1) {
            var _0xa3cdxd = '';
            var _0xa3cdxe = '<div class="tyard-komet">';
            for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1['feed']['entry']['length']; _0xa3cdxf++) {
                if (_0xa3cdxf == _0xa3cdx1['feed']['entry']['length']) {
                    break
                };
                for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                    if (_0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                        _0xa3cdxd = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                        break
                    }
                };
                if ('content' in _0xa3cdx1['feed']['entry'][_0xa3cdxf]) {
                    var _0xa3cdx13 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['content']['$t']
                } else {
                    if ('summary' in b_rc) {
                        var _0xa3cdx13 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['summary']['$t']
                    } else {
                        var _0xa3cdx13 = ''
                    }
                };
                var _0xa3cdx1d = /<\S[^>]*>/g;
                _0xa3cdx13 = _0xa3cdx13['replace'](_0xa3cdx1d, '');
                if (_0xa3cdx13['length'] > 70) {
                    _0xa3cdx13 = '' + _0xa3cdx13['substring'](0, 50) + '...'
                };
                var _0xa3cdx1e = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['author'][0]['name']['$t'];
                var _0xa3cdx1f = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['author'][0]['gd$image']['src'];
                if (_0xa3cdx1f['match']('http://img1.blogblog.com/img/blank.gif')) {
                    var _0xa3cdx3 = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (_0xa3cdx1f['match']('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var _0xa3cdx3 = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var _0xa3cdx3 = _0xa3cdx1f
                    }
                };
                _0xa3cdxe += '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' + _0xa3cdx3 + '"/></div><a href="' + _0xa3cdxd + '">' + _0xa3cdx1e + '</a><span>"' + _0xa3cdx13 + '"</span></div>'
            };
            _0xa3cdxe += '</div><div class="clear"/>';
            $('.ty-trigger .HTML .widget-content span.latestcomments')['each'](function() {
                var _0xa3cdx6 = $(this)['attr']('data-no');
                if (_0xa3cdx6 == _0xa3cdxa) {
                    $(this)['parent']()['html'](_0xa3cdxe)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.latestposts')['each'](function() {
    var _0xa3cdxa = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xa3cdxa,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xa3cdx1) {
            var _0xa3cdxd = '';
            var _0xa3cdxe = '<div class="ty-bonus">';
            for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1['feed']['entry']['length']; _0xa3cdxf++) {
                for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                    if (_0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                        _0xa3cdxd = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                        break
                    }
                };
                var _0xa3cdx11 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['title']['$t'];
                var s = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['category'][0]['term'];
                var _0xa3cdx1e = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['author'][0]['name']['$t'];
                var _0xa3cdx20 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['published']['$t'],
                    _0xa3cdx19 = _0xa3cdx20['substring'](0, 4),
                    _0xa3cdx21 = _0xa3cdx20['substring'](5, 7),
                    _0xa3cdx22 = _0xa3cdx20['substring'](8, 10),
                    _0xa3cdx23 = month_format[parseInt(_0xa3cdx21, 10)] + ' ' + _0xa3cdx22 + ', ' + _0xa3cdx19;
                var _0xa3cdx13 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['content']['$t'];
                var _0xa3cdx14 = $('<div>')['html'](_0xa3cdx13);
                if (_0xa3cdx13['indexOf']('//www.youtube.com/embed/') > -1) {
                    var _0xa3cdx5 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                    var _0xa3cdx3 = _0xa3cdx5
                } else {
                    if (_0xa3cdx13['indexOf']('<img') > -1) {
                        var _0xa3cdx15 = _0xa3cdx14['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                        var _0xa3cdx3 = _0xa3cdx15
                    } else {
                        var _0xa3cdx3 = no_image
                    }
                };
                _0xa3cdxe += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + _0xa3cdxd + '" style="background:url(' + _0xa3cdx3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + _0xa3cdxd + '">' + _0xa3cdx11 + '</a></h3><span class="yard-auth-ty">' + _0xa3cdx1e + '</span><span class="ty-time">' + _0xa3cdx23 + '</span></div></div>'
            };
            _0xa3cdxe += '</div>';
            $('.ty-trigger .HTML .widget-content span.latestposts')['each'](function() {
                var _0xa3cdx6 = $(this)['attr']('data-no');
                if (_0xa3cdx6 == _0xa3cdxa) {
                    $(this)['parent']()['html'](_0xa3cdxe)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.tagpost')['each'](function() {
    var _0xa3cdxb = $(this)['attr']('data-label'),
        _0xa3cdxa = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/posts/default/-/' + _0xa3cdxb + '?alt=json-in-script&max-results=' + _0xa3cdxa,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xa3cdx1) {
            var _0xa3cdxd = '';
            var _0xa3cdxe = '<div class="ty-bonus">';
            for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1['feed']['entry']['length']; _0xa3cdxf++) {
                for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                    if (_0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                        _0xa3cdxd = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                        break
                    }
                };
                var _0xa3cdx11 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['title']['$t'];
                var s = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['category'][0]['term'];
                var _0xa3cdx1e = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['author'][0]['name']['$t'];
                var _0xa3cdx20 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['published']['$t'],
                    _0xa3cdx19 = _0xa3cdx20['substring'](0, 4),
                    _0xa3cdx21 = _0xa3cdx20['substring'](5, 7),
                    _0xa3cdx22 = _0xa3cdx20['substring'](8, 10),
                    _0xa3cdx23 = month_format[parseInt(_0xa3cdx21, 10)] + ' ' + _0xa3cdx22 + ', ' + _0xa3cdx19;
                var _0xa3cdx13 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['content']['$t'];
                var _0xa3cdx14 = $('<div>')['html'](_0xa3cdx13);
                if (_0xa3cdx13['indexOf']('//www.youtube.com/embed/') > -1) {
                    var _0xa3cdx5 = _0xa3cdx1['feed']['entry'][_0xa3cdxf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                    var _0xa3cdx3 = _0xa3cdx5
                } else {
                    if (_0xa3cdx13['indexOf']('<img') > -1) {
                        var _0xa3cdx15 = _0xa3cdx14['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                        var _0xa3cdx3 = _0xa3cdx15
                    } else {
                        var _0xa3cdx3 = no_image
                    }
                };
                _0xa3cdxe += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + _0xa3cdxd + '" style="background:url(' + _0xa3cdx3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + _0xa3cdxd + '">' + _0xa3cdx11 + '</a></h3><span class="yard-auth-ty">' + _0xa3cdx1e + '</span><span class="ty-time">' + _0xa3cdx23 + '</span></div></div>'
            };
            _0xa3cdxe += '</div>';
            $('.ty-trigger .HTML .widget-content span.tagpost')['each'](function() {
                var _0xa3cdx6 = $(this)['attr']('data-label');
                if (_0xa3cdx6 == _0xa3cdxb) {
                    $(this)['parent']()['html'](_0xa3cdxe)
                }
            })
        }
    })
});
$(document)['ready'](function(_0xa3cdx24) {
    var _0xa3cdxa = _0xa3cdx24('#post-pager .blog-pager-newer-link');
    var _0xa3cdx13 = _0xa3cdx24('#post-pager .blog-pager-older-link');
    _0xa3cdx24['get'](_0xa3cdxa['attr']('href'), function(_0xa3cdx13) {
        _0xa3cdxa['html']('<b>' + POSTPAGER_NEWER + '</b><span>' + _0xa3cdx24(_0xa3cdx13)['find']('.post h1.post-title')['text']() + '</span>')
    }, 'html');
    _0xa3cdx24['get'](_0xa3cdx13['attr']('href'), function(_0xa3cdxa) {
        _0xa3cdx13['html']('<b>' + POSTPAGER_OLDER + '</b><span>' + _0xa3cdx24(_0xa3cdxa)['find']('.post h1.post-title')['text']() + '</span>')
    }, 'html')
});
$('#related-posts')['each'](function() {
    var _0xa3cdx11 = $(this)['html']();
    $['ajax']({
        url: '/feeds/posts/default/-/' + _0xa3cdx11 + '?alt=json-in-script&max-results=' + related_number,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xa3cdx1a) {
            var _0xa3cdx25 = '';
            var _0xa3cdx26 = '<h4 class="related-title">Recommended Articles</h4><ul class="related">';
            for (var _0xa3cdxf = 0; _0xa3cdxf < _0xa3cdx1a['feed']['entry']['length']; _0xa3cdxf++) {
                for (var _0xa3cdx10 = 0; _0xa3cdx10 < _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['link']['length']; _0xa3cdx10++) {
                    if (_0xa3cdx1a['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['rel'] == 'alternate') {
                        _0xa3cdx25 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['link'][_0xa3cdx10]['href'];
                        break
                    }
                };
                if ('content' in _0xa3cdx1a['feed']['entry'][_0xa3cdxf]) {
                    var _0xa3cdx27 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['content']['$t']
                } else {
                    if ('summary' in b_rc) {
                        var _0xa3cdx27 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['summary']['$t']
                    } else {
                        var _0xa3cdx27 = ''
                    }
                };
                var _0xa3cdx28 = /<\S[^>]*>/g;
                _0xa3cdx27 = _0xa3cdx27['replace'](_0xa3cdx28, ''), _0xa3cdx27['length'] > 170 && (_0xa3cdx27 = '' + _0xa3cdx27['substring'](0, 150) + '...');
                var _0xa3cdx29 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['title']['$t'];
                var _0xa3cdx2a = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['category'][0]['term'];
                var _0xa3cdx2b = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['published']['$t'],
                    _0xa3cdx2c = _0xa3cdx2b['substring'](0, 4),
                    _0xa3cdx2d = _0xa3cdx2b['substring'](5, 7),
                    _0xa3cdx2e = _0xa3cdx2b['substring'](8, 10),
                    _0xa3cdx2f = month_format[parseInt(_0xa3cdx2d, 10)] + ' ' + _0xa3cdx2e + ', ' + _0xa3cdx2c;
                var _0xa3cdx28 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['content']['$t'];
                var _0xa3cdx30 = $('<div>')['html'](_0xa3cdx28);
                if (_0xa3cdx28['indexOf']('http://www.youtube.com/embed/') > -1 || _0xa3cdx28['indexOf']('https://www.youtube.com/embed/') > -1) {
                    var _0xa3cdx31 = _0xa3cdx1a['feed']['entry'][_0xa3cdxf]['media$thumbnail']['url'];
                    var _0xa3cdx32 = '<a class="related-img" href="' + _0xa3cdx25 + '" style="background:url(' + _0xa3cdx31 + ') no-repeat center center;background-size: cover"/>'
                } else {
                    if (_0xa3cdx28['indexOf']('<img') > -1) {
                        var _0xa3cdx33 = _0xa3cdx30['find']('img:first')['attr']('src');
                        var _0xa3cdx32 = '<a class="related-img" href="' + _0xa3cdx25 + '" style="background:url(' + _0xa3cdx33 + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                    } else {
                        var _0xa3cdx32 = '<a class="related-img" href="' + _0xa3cdx25 + '" style="background:url(' + no_image + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                    }
                };
                _0xa3cdx26 += '<li><span class="related-tag">' + _0xa3cdx2a + '</span><div class="related-thumb">' + _0xa3cdx32 + '</div><div class="related-content"><h3 class="related-title"><a href="' + _0xa3cdx25 + '">' + _0xa3cdx29 + '</a><span class="recent-date">' + _0xa3cdx2f + '</span></h3><p class="recent-summary">' + _0xa3cdx27 + '</p></div></li>'
            };
            _0xa3cdx26 += '</ul><div class="clear"/>';
            $('#related-posts')['html'](_0xa3cdx26);
            $('.related-img')['each'](function() {
                $(this)['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('/default.jpg', '/mqdefault.jpg')
                })['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('s72-c', 's100')
                })['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('s200', 's100')
                })['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('s320', 's100')
                })['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('s400', 's100')
                })['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('s640', 's100')
                })['attr']('style', function(_0xa3cdxf, _0xa3cdx33) {
                    return _0xa3cdx33['replace']('s1600', 's100')
                })
            })
        }
    })
})