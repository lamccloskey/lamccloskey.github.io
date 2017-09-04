(function () {
    const menu = document.querySelector('.nav-toggle');
    const navRight = document.querySelector('.nav-right');

    menu.addEventListener('click', toggleMenu);

    function toggleMenu() {
        menu
            .classList
            .toggle('is-active');
        navRight
            .classList
            .toggle('is-active');
    }
})();


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-102619569-2', 'auto');
ga('send', 'pageview');