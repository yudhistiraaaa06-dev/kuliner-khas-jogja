/**
 * Script Interaktif Kuliner Khas Yogyakarta
 * Menggunakan jQuery untuk interaktivitas komponen halaman
 */

$(document).ready(function() {
            
    // 1. MOBILE MENU TOGGLE
    $('#menu-btn').click(function() {
        $('#mobile-menu').toggleClass('hidden');
    });

    // Sembunyikan menu otomatis ketika salah satu link menu mobile diklik
    $('#mobile-menu a').click(function() {
        $('#mobile-menu').addClass('hidden');
    });

    // 2. SLIDER / CAROUSEL UTAMA
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        $(slides[index]).addClass('active');
    }

    // Tombol Next
    $('#next-slide').click(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    // Tombol Prev
    $('#prev-slide').click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Jalankan auto-rotate slider setiap 5 detik
    let autoSlide = setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Hentikan rotasi otomatis jika user mengklik tombol kontrol secara manual
    $('#prev-slide, #next-slide').click(function() {
        clearInterval(autoSlide);
    });


    // 3. LOGIKA NAVIGASI TAB RESEP GUDEG
    $('#tab-gudeg-bahan-btn').click(function() {
        // Atur gaya tombol aktif
        $(this).addClass('text-amber-900 border-b-2 border-amber-800').removeClass('text-stone-500');
        $('#tab-gudeg-cara-btn').addClass('text-stone-500').removeClass('text-amber-900 border-b-2 border-amber-800');
        
        // Atur keterlihatan konten
        $('#tab-gudeg-bahan').removeClass('hidden');
        $('#tab-gudeg-cara').addClass('hidden');
    });

    $('#tab-gudeg-cara-btn').click(function() {
        // Atur gaya tombol aktif
        $(this).addClass('text-amber-900 border-b-2 border-amber-800').removeClass('text-stone-500');
        $('#tab-gudeg-bahan-btn').addClass('text-stone-500').removeClass('text-amber-900 border-b-2 border-amber-800');
        
        // Atur keterlihatan konten
        $('#tab-gudeg-cara').removeClass('hidden');
        $('#tab-gudeg-bahan').addClass('hidden');
    });


    // 4. LOGIKA NAVIGASI TAB RESEP SATE KLATAK
    $('#tab-klatak-bahan-btn').click(function() {
        // Atur gaya tombol aktif
        $(this).addClass('text-amber-900 border-b-2 border-amber-800').removeClass('text-stone-500');
        $('#tab-klatak-cara-btn').addClass('text-stone-500').removeClass('text-amber-900 border-b-2 border-amber-800');
        
        // Atur keterlihatan konten
        $('#tab-klatak-bahan').removeClass('hidden');
        $('#tab-klatak-cara').addClass('hidden');
    });

    $('#tab-klatak-cara-btn').click(function() {
        // Atur gaya tombol aktif
        $(this).addClass('text-amber-900 border-b-2 border-amber-800').removeClass('text-stone-500');
        $('#tab-klatak-bahan-btn').addClass('text-stone-500').removeClass('text-amber-900 border-b-2 border-amber-800');
        
        // Atur keterlihatan konten
        $('#tab-klatak-cara').removeClass('hidden');
        $('#tab-klatak-bahan').addClass('hidden');
    });


    // 5. INTERAKSI SUBMIT FORMULIR ULASAN (AJAX-Style)
    $('#comment-form').submit(function(e) {
        e.preventDefault(); // Mencegah reload halaman web secara default
        
        const name = $('#comment-name').val();
        const text = $('#comment-text').val();

        // Elemen HTML komentar baru
        const newCommentHtml = `
            <div class="border-b border-amber-900/50 pb-3" style="display:none;">
                <span class="font-bold text-amber-400">${name}</span>
                <span class="text-xs text-amber-500 ml-2">Baru saja</span>
                <p class="text-stone-300 text-sm mt-1">${text}</p>
            </div>
        `;

        // Masukkan elemen baru ke baris pertama daftar ulasan
        $('#comment-list').prepend(newCommentHtml);
        
        // Tampilkan komentar baru dengan efek animasi halus
        $('#comment-list div:first-child').slideDown(400);

        // Berikan notifikasi sukses kepada pengunjung
        $('#comment-success').removeClass('hidden').fadeIn().delay(3000).fadeOut();

        // Kosongkan kembali kolom formulir input
        $('#comment-form')[0].reset();
    });

});