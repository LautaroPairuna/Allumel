function startCounter(containerId, counterIds) {
    const counterContainer = document.getElementById(containerId);
    const counterElements = counterIds.map(id => document.getElementById(id));

    function animateCounters() {
        const containerTop = counterContainer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (containerTop - viewportHeight <= 0) {
        window.removeEventListener("scroll", animateCounters);

        counterElements.forEach(counterElement => {
            const targetCount = parseInt(counterElement.getAttribute('data-num'));
            const signo = counterElement.getAttribute('data-signo') || '';
            const duration = 3000;
            let startTime = null;
            let counter = 0;

            function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = Math.floor((targetCount / duration) * progress);
            counter = Math.min(increment, targetCount);
            counterElement.textContent = signo + counter.toLocaleString();

            if (progress < duration) {
                requestAnimationFrame(updateCounter);
            }
            }
            requestAnimationFrame(updateCounter);
        });
        }
    }
    window.addEventListener("scroll", animateCounters, { passive: true });
}
// Inicializa los contadores con los IDs que definiste en tu HTML
startCounter('counter_one', ['counter1', 'counter2', 'counter3']);
  