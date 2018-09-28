export default class Work {
    constructor(el) {
      this.el = el;
  
      this.init();
    }
  
    init() {
      console.log("Work module init");
      this.handleCountrySelectorClicks();
    }
  
    handleCountrySelectorClicks() {
      const el = this.el.querySelector(".market-selector"),
            linkTarget = document.querySelector("Work .js-country-link"),
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