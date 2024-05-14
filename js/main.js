
function Slider() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function SlideShow() {
  var swiper = new Swiper(".myslider", {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
    },
  });
}

function data() {
  var swiper = new Swiper(".mycaption", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


function Search(){
  let tableT=document.querySelector(".tableT")
  let box=document.querySelector(".header .search")
  box.addEventListener("click",function(){
    tableT.classList.add("active")
    let closeB=document.createElement("a")
    closeB.classList.add("close")
    closeB.insertAdjacentHTML("afterbegin","&times")
    tableT.insertAdjacentElement("afterbegin",closeB)
    let input=document.createElement("input")
    input.classList.add("input")
    tableT.insertAdjacentElement("afterbegin",input)
    let p=document.createElement("p")
    p.classList.add("p")
    p.insertAdjacentText("afterbegin","تاریخچه جستجو")
    tableT.insertAdjacentElement("afterbegin",p)
    let textP=document.createElement("p")
    textP.classList.add("textp")
    textP.insertAdjacentText("afterbegin","در این لیست، فیلم‌ و سریال‌ها، بازیگر و کارگردان‌هایی که جستجو می‌کنید ذخیره می‌شوند.")
    tableT.insertAdjacentElement("afterbegin",textP)
    closeB.addEventListener("click",function(){
      tableT.classList.remove("active")
    })
  })
  
}






Slider();
SlideShow();
data()
Search()