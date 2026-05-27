// Şablonun dinamik etkileşimleri ve efektleri için temel JS yapısı
document.addEventListener('DOMContentLoaded', () => {

    // Navigasyon linklerine tıklandığında aktif sınıfını yönetme
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // İleride eklenebilecek pürüzsüz kaydırma (Smooth Scroll) efekti altyapısı
    console.log("Coşkun Taşdemir Portfolyo Şablonu Hazır!");
});