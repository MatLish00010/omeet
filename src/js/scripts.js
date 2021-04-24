"use strict";
import svg4everybody from 'svg4everybody';
import scrollLock from 'scroll-lock';

import testServerRequest from './components/test-server-request.js';
import firebaseLogic from "./components/firebaseLogic";
import initializeClock from "./components/timer";
import invitation from "./components/invitation";
import ScrollAnimation from './components/scrollAnimation';

svg4everybody();

const selectors = {
    scrollAnimation: '.js-scroll-animation'
};


window.app = {
    header: null,
    scroll: {
        disable: scrollLock.disablePageScroll,
        enable: scrollLock.enablePageScroll
    },

    setInert(...args) {
        args.forEach(item => {
            item.setAttribute('inert', true);
        })
    },

    removeInert(...args) {
        args.forEach(item => {
            item.removeAttribute('inert');
        })
    },

    initModule(Module, selector) {
        if (!!selector) {
            let blocks = Array.prototype.slice.call(document.querySelectorAll(selector));
            blocks.forEach(block => {
                new Module(block);
            });
        } else {
            new Module();
        }
    },

    init() {
        app.initModule(testServerRequest, '.js-test-api');
        app.initModule(invitation, '.js-invitation');
        firebaseLogic();

        const deadline = '2021-08-07';
        initializeClock(deadline);
        app.initModule(ScrollAnimation, selectors.scrollAnimation);
    }
};


window.addEventListener('DOMContentLoaded', app.init);