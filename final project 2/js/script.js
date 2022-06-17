const popup = document.querySelector(".popup");
const close = document.querySelector(".closeBtn");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
  }, 4000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("chat-button").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("chat-button").style.display = "block";
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
      loop: true,
    },
  },
});

$(".owl-carousel").owlCarousel({
  items: 2,
  merge: true,
  loop: true,
  margin: 10,
  video: true,
  lazyLoad: true,
  center: true,
  responsive: {
    480: {
      items: 2,
    },
    600: {
      items: 4,
    },
  },
});
