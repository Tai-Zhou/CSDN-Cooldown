// ==UserScript==
// @name         CSDN 背景图片屏蔽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽 CSDN 的 gif 背景，让 CPU 休息休息。
// @author       tai-zhou
// @match        https://blog.csdn.net/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @icon64       https://g.csdnimg.cn/static/logo/favicon64.ico
// @updateURL    https://raw.githubusercontent.com/Tai-Zhou/CSDN-Cooldown/main/csdn-cooldown.js
// @downloadURL  https://raw.githubusercontent.com/Tai-Zhou/CSDN-Cooldown/main/csdn-cooldown.js
// @supportURL   https://github.com/Tai-Zhou/CSDN-Cooldown
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.cssText = "background-image:none!important;"
})();
