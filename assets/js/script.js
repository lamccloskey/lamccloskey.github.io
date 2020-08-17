(function () {
    const menuToggle = document.querySelector('#navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', toggle);

    function toggle() {
        menuToggle
            .classList
            .toggle('is-active');
        navbarMenu
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