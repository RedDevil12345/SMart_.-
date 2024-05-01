$(document).ready(function() {
    // Tambahkan kelas 'other-page' ke body saat halaman bukan halaman home
    if(window.location.href.indexOf("home") === -1) {
        $('body').addClass('other-page');
    }

    // Saat navigasi terjadi, periksa halaman dan terapkan kelas yang sesuai
    $('ul.navbar-nav li.nav-item a.nav-link').on('click', function() {
        // Hapus semua kelas terkait halaman dari body
        $('body').removeClass('other-page');
        // Jika bukan halaman home, tambahkan kelas 'other-page'
        if($(this).attr('href') !== '#home') {
            $('body').addClass('other-page');
        }
    });
});

window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

AOS.init({
    duration:800,
});