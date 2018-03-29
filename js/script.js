var linkMap = document.querySelector(".map-thumbnail a");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");

var linkWriteUs = document.querySelector(".write-us-tab");
var popupWriteUs = document.querySelector(".modal-write-us");
var closeWriteUs = document.querySelector(".modal-write-us .modal-close");
var formWriteUs = popupWriteUs.querySelector("form");
var nameWriteUs = popupWriteUs.querySelector("input[name=name]");
var emailWriteUs = popupWriteUs.querySelector("input[name=email]");
var letterWriteUs = popupWriteUs.querySelector("input[name=letter]");

var deliveryServiceButton = document.querySelector(".delivery-tab");
var warrantyServiceButton = document.querySelector(".warranty-tab");
var creditServiceButton = document.querySelector(".credit-tab");
var deliveryServiceContent = document.querySelector(".service-delivery");
var warrantyServiceContent = document.querySelector(".service-warranty");
var creditServiceContent = document.querySelector(".service-credit");

var promoSlide1 = document.querySelector(".promo-slide-1");
var promoSlide2 = document.querySelector(".promo-slide-2");
var promoSlide3 = document.querySelector(".promo-slide-3");

var promoSlide1Button1 = document.querySelector("#promo-slide-1-1");
var promoSlide1Button2 = document.querySelector("#promo-slide-1-2");
var promoSlide1Button3 = document.querySelector("#promo-slide-1-3");
var promoSlide2Button1 = document.querySelector("#promo-slide-2-1");
var promoSlide2Button2 = document.querySelector("#promo-slide-2-2");
var promoSlide2Button3 = document.querySelector("#promo-slide-2-3");
var promoSlide3Button1 = document.querySelector("#promo-slide-3-1");
var promoSlide3Button2 = document.querySelector("#promo-slide-3-2");
var promoSlide3Button3 = document.querySelector("#promo-slide-3-3");

// Закрытие попапов клавишей Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
    popupWriteUs.classList.remove("modal-show");
  }
});

// Попап карта
linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
  closeMap.focus();
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

// Попап написать нам
linkWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  nameWriteUs.focus();
});

closeWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
});

formWriteUs.addEventListener("submit", function(evt) {
  if (!nameWriteUs.value || !emailWriteUs.value || !letterWriteUs.value) {
    evt.preventDefault();
    console.log('Форма не заполнена');
  }
});

// Промо-слайдер
promoSlide1Button1.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.add("active");
  promoSlide2.classList.remove("active");
  promoSlide3.classList.remove("active");
});

promoSlide1Button2.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("active");
  promoSlide2.classList.add("active");
  promoSlide2Button2.focus();
  promoSlide3.classList.remove("active");
});

promoSlide1Button3.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("active");
  promoSlide2.classList.remove("active");
  promoSlide3.classList.add("active");
  promoSlide3Button3.focus();
});

promoSlide2Button1.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.add("active");
  promoSlide1Button1.focus();
  promoSlide2.classList.remove("active");
  promoSlide3.classList.remove("active");
});

promoSlide2Button2.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("active");
  promoSlide2.classList.add("active");
  promoSlide3.classList.remove("active");
});

promoSlide2Button3.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("active");
  promoSlide2.classList.remove("active");
  promoSlide3.classList.add("active");
  promoSlide3Button3.focus();
});

promoSlide3Button1.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.add("active");
  promoSlide1Button1.focus();
  promoSlide2.classList.remove("active");
  promoSlide3.classList.remove("active");
});

promoSlide3Button2.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("active");
  promoSlide2.classList.add("active");
  promoSlide2Button2.focus();
  promoSlide3.classList.remove("active");
});

promoSlide3Button3.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("active");
  promoSlide2.classList.remove("active");
  promoSlide3.classList.add("active");
});

// Слайдер услуг
deliveryServiceButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  deliveryServiceButton.classList.add("active");
  warrantyServiceButton.classList.remove("active");
  creditServiceButton.classList.remove("active");
  deliveryServiceContent.classList.add("active");
  warrantyServiceContent.classList.remove("active");
  creditServiceContent.classList.remove("active");
});

warrantyServiceButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  deliveryServiceButton.classList.remove("active");
  warrantyServiceButton.classList.add("active");
  creditServiceButton.classList.remove("active");
  deliveryServiceContent.classList.remove("active");
  warrantyServiceContent.classList.add("active");
  creditServiceContent.classList.remove("active");
});

creditServiceButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  deliveryServiceButton.classList.remove("active");
  warrantyServiceButton.classList.remove("active");
  creditServiceButton.classList.add("active");
  warrantyServiceContent.classList.remove("active");
  deliveryServiceContent.classList.remove("active");
  creditServiceContent.classList.add("active");
});