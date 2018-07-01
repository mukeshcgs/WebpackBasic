import 'babel-polyfill';

import '../css/main.scss';
import '../img/ms-icon-310x310.png';
var Promise = require('es6-promise').Promise;

import 'gsap'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'jquery-validation'
//  import 'slider-pro';
import Swiper from 'swiper'

$("#commentForm").validate();

new TimelineLite().to('#urlCopyMessage', 0, { visibility: 'visible', opacity: 1 })
    .fromTo('#urlCopyMessage', 0.35,
        { opacity: 0, y: 20 },
        { opacity: 1, y: -30 }
    )
    .to('#urlCopyMessage', 0.35,
        { opacity: 0, delay: 0.25 }
    )
    .to('#urlCopyMessage', 0, { visibility: 'hidden' });

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
console.log(mySwiper);

// Check Images is loaded in DOM 
var img1 = document.querySelector('.img-1');
var img2 = document.querySelector('.img-2');


function loaded() {
    // woo yey image loaded
}

if (img1.complete) {
    loaded();
    console.log("wsssdx")
}
else {
    img1.addEventListener('load', loaded);
}

img1.addEventListener('error', function() {
    // argh everything's broken
    console.log("xxxxxxxxxxx")
});

//////////////////////////////////////////
/**
 * ASYNC & AWAIT
 */
// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// const preMovie = async () => {

//     const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });
//     const getPopcorn = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('popcorn'), 3000);
//     });

//     const addButter = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('butter'), 3000);
//     });

//     let ticket = await person3PromiseToShowTicketWhenWifeArrives;

//     console.log(`got the ${ticket}`);
//     console.log(`Husband:we should go in now`);
//     console.log(`Wife: "i am hungry"`);

//     let popcorn = await getPopcorn;
//     console.log(`Husband: here is ${popcorn}`);
//     console.log(`Husband:we should go in now`);
//     console.log(`Wife: "I dont like popcorn without butter!"`);

//     let butter = await addButter;
//     console.log(`added ${butter}`);

//     console.log(`Husband:Anything else darling`);
//     console.log(`Wife: lets go we are going to miss the preivew`);
//     console.log(`Husband: thanks for the reminder *grin*`);

//     return ticket;

// };

// preMovie().then((t) => console.log(`person4 shows ${t}`));

// console.log('person4 shows ticket');


//Wordlink API RandomeWord
//API KYE = e126907909a400f77500606e74703c2e7003c5507165fc0c7
//API KYE = https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=

let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=e126907909a400f77500606e74703c2e7003c5507165fc0c7";

fetch(wordnikAPI)
.then(response => response.json())
.then( json => {
	$(".word").text(json.word)
	console.log(json.word)
})
.catch(err => console.log(err))
