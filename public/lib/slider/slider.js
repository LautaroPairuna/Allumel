document.addEventListener('DOMContentLoaded', () => {
    function initializeSlider(container) {
        let slideIndex = 0;
        const slides = container.querySelectorAll(".sldr-li");
        const totalSlides = slides.length;
        const sliderUl = container.querySelector(".sldr-ul");
        const nextButton = container.querySelector(".sldr-nxt");
        const prevButton = container.querySelector(".sldr-prv");
        let startX;

        function showSlide(index) {
            const offset = -index * 100; // Calcula el desplazamiento
            sliderUl.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide(slideIndex);
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            showSlide(slideIndex);
        }

        function handleTouchStart(event) {
            startX = event.touches[0].clientX;
        }

        function handleTouchEnd(event) {
            const endX = event.changedTouches[0].clientX;
            const diffX = startX - endX;

            if (Math.abs(diffX) > 50) { // Umbral para el desplazamiento
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }

        if (nextButton) nextButton.addEventListener('click', nextSlide);
        if (prevButton) prevButton.addEventListener('click', prevSlide);
        sliderUl.addEventListener('touchstart', handleTouchStart);
        sliderUl.addEventListener('touchend', handleTouchEnd);

        // Mostrar la primera diapositiva
        showSlide(slideIndex);

    }

    const sliders = document.querySelectorAll('.sldr-container');
    sliders.forEach(initializeSlider);
});
