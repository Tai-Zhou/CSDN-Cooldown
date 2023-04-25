// ==UserScript==
// @name         CSDN 背景图片屏蔽
// @namespace    https://github.com/Tai-Zhou/CSDN-Cooldown
// @version      0.4
// @description  屏蔽 CSDN 的 gif 背景，让 CPU 休息休息。
// @author       tai-zhou
// @match        https://*.blog.csdn.net/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @icon64       https://g.csdnimg.cn/static/logo/favicon64.ico
// @updateURL    https://raw.githubusercontent.com/Tai-Zhou/CSDN-Cooldown/main/csdn-cooldown.user.js
// @downloadURL  https://raw.githubusercontent.com/Tai-Zhou/CSDN-Cooldown/main/csdn-cooldown.user.js
// @supportURL   https://github.com/Tai-Zhou/CSDN-Cooldown
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.cssText = "background-image:none!important;";
})();
