function Slider (_items) {
    this.next = (event) => {
        const _activeElement = _items.querySelector(".active");
        const nextElement = _activeElement.nextElementSibling;
        if (nextElement) {
            _activeElement.classList.remove("active");
            _activeElement.nextElementSibling.classList.add('active');
        }
        if (!_activeElement.nextElementSibling.nextElementSibling) {
            event.target.style.display = "none";
        }
        event.target.closest(".itc-slider__wrapper").querySelector(".itc-slider__btn_prev").style.display = "block"
    }
    this.prev = (event) => {
        const _activeElement = _items.querySelector(".active");
        const prevElement = _activeElement.previousElementSibling;
        if (prevElement) {
            _activeElement.classList.remove("active");
            _activeElement.previousElementSibling.classList.add('active');
        }
        if (!_activeElement.previousElementSibling.previousElementSibling) {
            event.target.style.display = "none";
        }
        event.target.closest(".itc-slider__wrapper").querySelector(".itc-slider__btn_next").style.display = "block"
    }
}

const slider = new Slider(document.querySelector(".itc-slider__items"));
document.querySelector(".itc-slider__btn_prev").addEventListener("click", slider.prev);
document.querySelector(".itc-slider__btn_next").addEventListener("click", slider.next);
