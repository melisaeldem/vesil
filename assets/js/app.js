document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    console.log("1");
    if ($(".loader-wrapper")) {
      $(".loader-wrapper").hide();
    }
  }, 250);

  setTimeout(() => {
    // if ($(".page-wrapper p")) {
    //   gsap.fromTo(
    //     ".page-wrapper p",
    //     {
    //       opacity: 0,
    //       y: 30,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       stagger: 0.1,

    //       scrollTrigger: {
    //         trigger: ".page-wrapper",
    //         start: "top top",
    //       },
    //     }
    //   );
    // }

    // if ($(".splash-buttonsh a")) {
    //   gsap.fromTo(
    //     ".splash-buttonsh a",
    //     {
    //       opacity: 0,
    //       y: 30,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       stagger: 0.1,

    //       scrollTrigger: {
    //         trigger: ".splash-buttons",
    //         start: "top top",
    //       },
    //     }
    //   );
    // }
    if ($(".animate-1")) {
      gsap.fromTo(
        ".animate-1",
        {
          opacity: 0,
          y: 30,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,

          scrollTrigger: {
            trigger: ".animate-1",
            start: "top top",
          },
        }
      );
    }

    if ($(".animate")) {
      gsap.fromTo(
        ".animate",
        {
          opacity: 0,
          y: 30,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,

          scrollTrigger: {
            trigger: ".animate",
            start: "top bottom",
          },
        }
      );
    }
  }, 300);
});

// LANGUAGE SETTING
$(document).ready(function () {
  var arrLang = {
    tr: {
      0: "Size Uygun Dili Seçin",
      1: "Devam etmek için lütfen tercih ettiğiniz dili seçin. Bunu daha sonra ayarlardan değiştirebilirsiniz.",
      2: "Size Uygun Görünüm Modunu Seçin",
      3: "Uygulamayı kullanmak istediğiniz görünüm modunu seçin. Bu özelliği daha sonra ayarlardan değiştirebilirsiniz. ",
      4: "Geri Dön",
      5: "Aydınlık Mod",
      6: "Devam Et",
      7: "Konumunuzu paylaşarak pazar yerimize dahil olun.",
      8: "Bu sayede bulunduğunuz konuma yakın potansiyel müşterilerinizi ve tedarikçilerinizi bulmanızı kolaylaştırın.",
      9: "Konum Erişimine İzin Ver",
      10: "Şimdi Değil",
      11: "Üye Olun, Giriş Yapın veya Misafir olarak devam edin",
      12: "Vesil’in ortak pazar yerinde aktif olarak dahil olabilmek için Kayıt Olun veya bir hesabınız varsa giriş yapın. Sadece pazar yerinin nasıl çalıştığını gözlemlemek istiyorsanız Misafir olarak devam edin.",
      13: "Kayıt Ol",
      14: "Giriş Yap",
      15: "Misafir olarak devam et",
      16: "Vesil'e ",
      17: "Hoş Geldiniz",
      18: "Email, şirket adı ya da telefon numarası",
      19: "Şifre",
      20: "Şifremi Unuttum",
      21: "Giriş Yap",
      22: "Hesabın yok mu? Kayıt Ol",
      23: "Şifremi Unuttum",
      24: "Doğrulama şifresi almak için lütfen e-posta adresinizi girin.",
      25: "E-mail ile doğrulama kodu gönder",
      26: "Telefon numarası ile kod gönder",
      27: "E-mail",
      28: "Doğrulama Kodu Gönder",
      29: "Doğrulama şifresi almak için lütfen telefon numaranızı giriniz.",
      30: "Telefon Numarası",
      31: "Vesil",
      32: "Resmi Şirket İsmi",
      33: "Şirket Vergi Numarası",
      34: "Tekrar Şifre",
      35: "Kayıt Ol",
      36: "Hesabın var mı? Giriş yap.",
      37: "Şirket Türü",
      38: "Size uygun olan şirket türünü ve / veya türlerini seçiniz.",
      39: "Şirket Türü",
      40: "Devam Et",
      41: "Satış yapmak",
      42: "ile ilgilendiğiniz sektörler",
      43: "Satış yapacağınız",
      44: "ve / veya gelecekte",
      45: "satışını planladığınız",
      46: "ürün türlerini seçiniz.",
      47: "Metal",
      48: "Satın almakla",
      49: "ile ilgilendiğiniz ürün türleri",
      50: "Satın aldığınız",
      51: "ve / veya",
      52: "ilgilendiğiniz",
      53: "ürün türlerini seçiniz.",
    },

    en: {
      0: "Select Your Preferred Language",
      1: "Please select the language you prefer to continue. You can change this later in the settings.",
      2: "Select Your Preferred Appearance Mode",
      3: "Choose the appearance mode you want to use for the application. You can change this later in the settings.",
      4: "Go Back",
      5: "Light Mode",
      6: "Continue",
      7: "Join our marketplace by sharing your location.",
      8: "This will help you easily find potential customers and suppliers near your location.",
      9: "Allow Location Access",
      10: "Not Now",
      11: "Sign Up, Log In, or Continue as a Guest",
      12: "Sign up or log in to actively participate in Vesil's joint marketplace. If you just want to observe how the marketplace works, continue as a guest.",
      13: "Sign Up",
      14: "Log In",
      15: "Continue as Guest",
      16: "Welcome to",
      17: "Vesil",
      18: "Email, company name, or phone number",
      19: "Password",
      20: "Forgot Password",
      21: "Log In",
      22: "Don't have an account? Sign Up",
      23: "Forgot Password",
      24: "Please enter your email address to receive a verification code.",
      25: "Send verification code via email",
      26: "Send code via phone number",
      27: "Email",
      28: "Send Verification Code",
      29: "Please enter your phone number to receive a verification code.",
      30: "Phone Number",
      31: "Vesil",
      32: "Official Company Name",
      33: "Company Tax Number",
      34: "Repeat Password",
      35: "Sign Up",
      36: "Already have an account? Log In.",
      37: "Company Type",
      38: "Select the company type(s) that apply to you.",
      39: "Company Type",
      40: "Continue",
      41: "Interested in Selling",
      42: "the sectors you're involved in",
      43: "the products you sell",
      44: "and/or plan to sell in the future",
      45: "Select the product types",
      46: "you are planning to sell.",
      47: "Metal",
      48: "Interested in Purchasing",
      49: "the product types you're interested in",
      50: "the products you purchase",
      51: "and/or",
      52: "are interested in.",
      53: "Select the product types you are interested in.",
    },
  };

  $(".language-item").click(function () {
    localStorage.setItem("dil", JSON.stringify($(this).attr("id")));
    location.reload();
  });

  var lang = JSON.parse(localStorage.getItem("dil"));

  if (lang == "en") {
    $("#drop_yazı").html("English");
  } else {
    $("#drop_yazı").html("Türkçe");
  }

  $("a,h5,p,h1,h2,span,li,button,h3,label").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// DARK MODE
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
if (localStorage.getItem("darkmode") === "active") {
  document.documentElement.classList.add("darkmode");
}

const buttons = document.querySelectorAll(".purple-button");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const targetPage = button.getAttribute("href");
    console.log(`Sayfa yenilenmeden ${targetPage} sayfasına geçiliyor!`);

    setTimeout(() => {
      window.location.href = targetPage;
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("select-all");
  const checkboxes = document.querySelectorAll(
    ".checkin .form-check-input:not(#select-all)"
  );

  selectAllCheckbox.addEventListener("change", function () {
    const isChecked = this.checked;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
      const noneChecked = Array.from(checkboxes).every((cb) => !cb.checked);

      if (allChecked) {
        selectAllCheckbox.checked = true;
      } else if (noneChecked) {
        selectAllCheckbox.checked = false;
      } else {
        selectAllCheckbox.checked = false;
      }
    });
  });
});
