import 'babel-polyfill';
import '../css/main.scss';

import $ from 'jquery';
import Swiper from 'swiper';

//Wordlink API RandomeWord
//API KYE = e126907909a400f77500606e74703c2e7003c5507165fc0c7
//API KYE = https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=
// import Swiper JS
// import Swiper styles 

const swiper = new Swiper();
let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=e126907909a400f77500606e74703c2e7003c5507165fc0c7";

fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
        $(".word").text(json.word)
        console.log(json.word)
    })
    .catch(err => console.log(err))


/**
 * Auto initialise modules that support it
 **/

const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
    const el = moduleElements[i]
    const name = el.getAttribute('data-module')
    const Module = require(`./components/${name}`).default
    new Module(el)
    console.log(name);
}