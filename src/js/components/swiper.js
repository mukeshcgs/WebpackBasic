// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles

export default class swiper {
    constructor(el) {
        this.el = el;

        this.init();
    }

    init() {
        console.log("Footer module init");
        const swiper = new Swiper();

        this.handleCountrySelectorClicks();
    }

    handleCountrySelectorClicks() {
        const el = this.el.querySelector(".market-selector"),
            linkTarget = document.querySelector("header .js-country-link"),
            event = new MouseEvent("click", {
                "view": window,
                "bubbles": true,
                "cancelable": true
            });

        if (el != null) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("Dispatch click to country selector");
                linkTarget.dispatchEvent(event);
            });
        }
    }
}