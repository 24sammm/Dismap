// Menu toggle functionality
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

// Responsive menu handling
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

// Menu item animations
$("nav .menu li a").click(function (e) {
  e.preventDefault(); // Prevent default link behavior

  var menuItem = $(this);
  var targetSection = menuItem.attr("href"); // Get the target section ID

  // Animate scrolling to the target section (replace with your preferred animation library)
  $("html, body").animate({
    scrollTop: $(targetSection).offset().top
  }, 500); // Adjust animation duration (in milliseconds) as desired

  // Add/remove active class for visual feedback (optional)
  menuItem.parent().addClass("active").siblings().removeClass("active");
});


document.getElementById("close-button").onclick = function() {
  document.getElementById("popup").style.display = "none";
}


// Navigation background color change on scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
      $("nav img.hitam").show();
      $("nav img.putih").hide();
    } else {
      $("nav").removeClass("putih");
      $("nav img.hitam").hide();
      $("nav img.putih").show();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const triggers = document.querySelectorAll('.popup-trigger');
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');
  const closeButton = document.querySelector('.close-button');

  const popupContent = {
    'gunung-meletus-pra': `
    <ul>
        <li>Menerima informasi PVMBG terkait perkembangan aktivitas gunung berapi</li>
        <li>Siapkan masker dan kacamata pelindung</li>
        <li>Mengetahui jalur evakuasi yang telah disiapkan</li>
        <li>Mempersiapkan evakuasi lain bila letusan meluas</li>
        <li>Siapkan dukungan logistik</li>
    </ul>
`,
'gunung-meletus-saat': `
<ul>
    <li>Pastikan sudah berada di tempat aman</li>
    <li>Gunakan masker dan kacamata pelindung</li>
    <li>Selalu memerhatikan arahan dari pihak berwenang</li>
</ul>
`,
'gunung-meletus-pasca': `
<ul>
    <li> pastikan kebutuhan dasar terus terpenuhi </li>
    <li> tetap gunakan masker dan kacamata pelindung ketika berada di wilayah yang terdampak</li>
    <li> memperhatikan perkembangan informasi dari pihak berwenang </li>
    <li> waspada akan kemungkinan kedua </li>
</ul>
`,
'tsunami-pra': `
<ul>
    <li>mengetahui informasi dari BPBD, BMKG atau PVMBG</li>
    <li>kenali area sekitar yang terkena resiko tsunami dan kenali jalur evakuasi yang telah dibuat ketika peringatan dikeluarkan</li>
    <li>siapkan dukungan logistik</li>
</ul>
`,
'tsunami-saat': `
<ul>
    <li>segera berlari menuju ke tempat tinggi atau mengikuti jalur evakuasi yang sudah ditetapkan</li>
    <li>ketika berada di kapal, jangan arahkan kapal mendekat ke pesisir</li>
    <li>untuk mengantisipasi gelombang susulan, jangan turun ke tempat yang rendah saat gelombang pertama surut</li>
    <li>segera mengungsi setelah ada pemberitahuan dari pihak berwajib</li>
    <li>utamakan keselamatan, tinggalkan barang yang tidak perlu</li>
    <li>memastikan keberadaan anggota keluarga</li>
</ul>
`,
'tsunami-pasca': `
<ul>
    <li> pastikan telah memperoleh informasi tsunami telah berakhir</li>
    <li> jauhi area tergenang yang mungkin terkontaminasi zat berbahaya</li>
    <li> jauhi area terdampak yang rusak</li>
    <li> jauhi jaringan listrik dan pipa gas</li>
    <li> jika terluka, dapatkan perawatan di pos kesehatan terdekat</li>
    <li> selalu periksa ketersediaan makanan</li>
</ul>
`,
'gempa-pra': `
<ul>
    <li> mendirikan bangunan tahan gempa</li>
    <li> kenali lokasi bangunan tempat tinggal</li>
    <li> tempatkan perabotan pada tempat yang proposional </li>
    <li> siapkan peralatan; senter, P3K, makanan instan, dll</li>
    <li> periksa penggunaan listrik dan gas</li>
    <li> catat nomor telepon penting </li>
    <li> kenali jalur evakuasi</li>
    <li> ikuti kegiatan simulasi mitigasi bencana gempa</li>
</ul>
`,
'gempa-saat': `
<ul>
    <li>tetap tenang</li>
    <li> hindari sesuatu yang akan roboh/lari ke tanah lapang</li>
    <li> perhatikan tempat anda berdiri untuk mengantisipasi adanya retakan tanah</li>
    <li> turun dari kendaraan dan jauhi pantai</li>
</ul>
`,
'gempa-pasca': `
<ul>
    <li>cepat keluar dari bangunan</li>
    <li>hindari bangunan yang berpotensi roboh</li>
    <li>jika terluka, lakukan pertolongan pertama</li>
</ul>
`,
  };

  triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
          const popupType = this.dataset.popup;
          popupText.innerHTML = popupContent[popupType];
          popup.style.display = 'flex';
      });
  });

  closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });
});

