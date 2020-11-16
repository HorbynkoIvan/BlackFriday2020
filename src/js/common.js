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
    submitForm();

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

    function submitForm(){
        $(document).on('submit', '#form', function (event) {
            event.preventDefault();
            var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var email = $(this).serializeArray()[0].value;

            if (email.length) {
                if (!emailRegExp.test(email)) {
                    email.classList.add('error');
                    $('.js-subscription_tooltip').show();
                    return false;
                }

                $.post(window.location.pathname, {email: email, id: 30})
                    .done(function (response) {
                        $('.bf_parf_form_wrap').html('');
                        $('.bf_parf_form_wrap').html(' <div class="second_screen js_form_success">\n' +
                            '                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                            <circle cx="24" cy="24" r="22.5" stroke="#00FFF0" stroke-width="3"/>\n' +
                            '                            <path d="M15 23.0963L23.0125 31.1088L35 19.1213" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                            '                        </svg>\n' +
                            '\n' +
                            '                        <div>Вы подписаны</div>\n' +
                            '                    </div>');

                        dataLayer.push({
                            'eventCategory': 'landing',
                            'eventAction': 'blackFriday',
                            'eventLabel': 'formSend',
                            'event': 'autoEvent'
                        })
                    })
                    .fail(function (data) {
                        $('.bf_parf_form_wrap').html('');
                        $('.bf_parf_form_wrap').html(' <div class="second_screen js_form_success">\n' +
                            '                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                            <circle cx="24" cy="24" r="22.5" stroke="#00FFF0" stroke-width="3"/>\n' +
                            '                            <path d="M15 23.0963L23.0125 31.1088L35 19.1213" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                            '                        </svg>\n' +
                            '\n' +
                            '                        <div>Вы уже подписаны</div>\n' +
                            '                    </div>');
                    });
            }

        });
    }
})

// $(document).ready(function () {
//     $('.js_bf_parf_seo').addClass('bf_parf_seo--hide');
//     $('.js_button_btn_show').on('click', function () {
//         $(this).closest('.js_bf_parf_seo').removeClass('bf_parf_seo--hide');
//         $(this).closest('.js_bf_parf_seo_btn_shadow').hide();
//     });
//
//     $(document).on('submit', '#form', function (event) {
//         event.preventDefault();
//         var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         var email = $(this).serializeArray()[0].value;
//
//         if (email.length) {
//             if (!emailRegExp.test(email)) {
//                 email.classList.add('error');
//                 $('.js-subscription_tooltip').show();
//                 return false;
//             }
//
//             $.post(window.location.pathname, {email: email, id: 30})
//                 .done(function (response) {
//                     $('.bf_parf_form_wrap').html('');
//                     $('.bf_parf_form_wrap').html(' <div class="second_screen js_form_success">\n' +
//                         '                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//                         '                            <circle cx="24" cy="24" r="22.5" stroke="#00FFF0" stroke-width="3"/>\n' +
//                         '                            <path d="M15 23.0963L23.0125 31.1088L35 19.1213" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//                         '                        </svg>\n' +
//                         '\n' +
//                         '                        <div>Вы подписаны</div>\n' +
//                         '                    </div>');
//
//                     dataLayer.push({
//                         'eventCategory': 'landing',
//                         'eventAction': 'blackFriday',
//                         'eventLabel': 'formSend',
//                         'event': 'autoEvent'
//                     })
//                 })
//                 .fail(function (data) {
//                     $('.bf_parf_form_wrap').html('');
//                     $('.bf_parf_form_wrap').html(' <div class="second_screen js_form_success">\n' +
//                         '                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//                         '                            <circle cx="24" cy="24" r="22.5" stroke="#00FFF0" stroke-width="3"/>\n' +
//                         '                            <path d="M15 23.0963L23.0125 31.1088L35 19.1213" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//                         '                        </svg>\n' +
//                         '\n' +
//                         '                        <div>Вы уже подписаны</div>\n' +
//                         '                    </div>');
//                 });
//         }
//
//     });
// });
