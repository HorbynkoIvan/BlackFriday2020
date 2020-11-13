'use strict';

import './../scss/common.scss';

import $ from 'jquery';

window.$ = window.jQuery = $;
import slick from 'slick-carousel';

import {estimateSlider} from './partials/estimate_slider.js'
import {secretsSlider} from './partials/secret_slider.js'
import {plyrPlayer} from './partials/plyr.js'

window.addEventListener('DOMContentLoaded', () => {
    estimateSlider()
    secretsSlider()
    plyrPlayer()
   /* const arrowLeft = $(".secrets").find(".arrow_left");
    const arrowRight = $(".secrets").find(".arrow_right");

    const videoList = $(".secrets").find(".test");

    arrowRight.on('click', function (){
        videoList.each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
    })

    arrowLeft.on('click', function (){
        videoList.each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
    })*/
})

