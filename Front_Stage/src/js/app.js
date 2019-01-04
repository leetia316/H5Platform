'use strict';
var utils = require('utils');
var comp = require('comp');

// meta缩放
// var clientW = document.body.clientWidth;
// var percent = clientW / 640;
// document.getElementById('GoH5ViewPort').setAttribute('content', 'width=device-width, initial-scale=' + percent + ', maximum-scale=' + percent + ', user-scalable=no');

// body追加移动端样式
console.log('utils.browserType： ',utils.browserType());
if(utils.browserType() === 'pc') {
    document.body.style.maxWidth = '640px';
    document.body.style.margin = 'auto';

    comp.toast('PC浏览器请开启模拟手机访问：先按键盘 F12，再点击右上角手机图标，然后按F5刷新一下页面！',30000);
}

var load = require('./load.js');
var music = require('./music.js');

var H5PF = require('./h5pf.js');
