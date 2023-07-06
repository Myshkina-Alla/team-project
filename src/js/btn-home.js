
(() => {
    let backButton = document.getElementById('back-btn');

    backButton.addEventListener('click', function () {
        smoothScroll(document.documentElement);
    });

    backButton.style.display = 'none';

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > window.innerHeight) {
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    });

    function smoothScroll(target) {
        let targetPosition = 0;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let duration = 800;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            let timeElapsed = currentTime - start;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
})();