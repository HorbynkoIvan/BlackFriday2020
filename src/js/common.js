'use strict';

import './../scss/common.scss';

import $ from 'jquery';

window.$ = window.jQuery = $;
import slick from 'slick-carousel';

import {estimateSlider} from './partials/estimate_slider.js'
import {secretsSlider} from './partials/secret_slider.js'
import {plyrPlayer} from './partials/plyr.js'

window.addEventListener('DOMContentLoaded', () => {
    openMore();

    function openMore() {
        const $btnMore = $('#btn_more');
        const $shadow = $('.about_top .shadow');
        const $aboutBottom = $('.about_bottom');

        $btnMore.on('click', function (){
            $(this).text(function(i, text){
                return text === "Читати повністю" ? "Згорнути" : "Читати повністю";
            })

            $aboutBottom.slideToggle();
            $shadow.fadeToggle()
        })
    }
})

