document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


const supportForm = document.querySelector(".hero-form");
const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const telInput = document.querySelector("input[name='tel']");
const areaInput = document.querySelector("input[name='area']");
const weightInput = document.querySelector("input[name='weight']");
const countryInput = document.querySelector("input[name='country']");
const cityInput = document.querySelector("input[name='city']");
const regionInput = document.querySelector("input[name='region']");
const deliveryInput = document.querySelector("input[name='delivery']");
const contactNameInput = contactForm.querySelector("input[name='name']");
const contactEmailInput = contactForm.querySelector("input[name='email']");
const contactTelInput = contactForm.querySelector("input[name='tel']");
const messageInput = contactForm.querySelector("textarea[name='message']");
const questionInput = contactForm.querySelector("input[name='question']");

function validateInput(input, message) {
  const errorMessage = input.nextElementSibling;
  if (input.value.trim() === "") {
    input.classList.add("error");
    errorMessage.textContent = `${message} отсутствует. Заполните все поля.`;
    return false;
  } else {
    input.classList.remove("error");
    errorMessage.textContent = "";
    return true;
  }
}

const successModal = document.getElementById("successModal");
const closeButton = document.querySelector(".close-button");

function showModal() {
  successModal.style.display = "block";
}

closeButton.addEventListener("click", function() {
  successModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === successModal) {
    successModal.style.display = "none";
  }
});

supportForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const nameIsValid = validateInput(nameInput, "Имя");
  const emailIsValid = validateInput(emailInput, "Почта");
  const telIsValid = validateInput(telInput, "Телефон");
  const areaIsValid = validateInput(areaInput, "Общая площадь");
  const weightIsValid = validateInput(weightInput, "Вес");
  const countryIsValid = validateInput(countryInput, "Страна");
  const cityIsValid = validateInput(cityInput, "Город");
  const regionIsValid = validateInput(regionInput, "Область");
  const deliveryIsValid = validateInput(deliveryInput, "Город доставки");


  if (nameIsValid && emailIsValid && telIsValid && areaIsValid && weightIsValid && countryIsValid && cityIsValid && regionIsValid && deliveryIsValid) {
    showModal();
    supportForm.reset();
  }
});


contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const nameIsValid = validateInput(contactNameInput, "Имя");
  const emailIsValid = validateInput(contactEmailInput, "Почта");
  const telIsValid = validateInput(contactTelInput, "Телефон");
  const messageIsValid = validateInput(messageInput, "Сообщение");
  const questionIsValid = validateInput(questionInput, "Тема вопросы");

  if (nameIsValid && emailIsValid && telIsValid && messageIsValid && questionIsValid) {
    showModal();
    contactForm.reset();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const reviewsSlider = document.querySelector(".reviews-slider");
  const reviewsContents = document.querySelectorAll(".reviews-content");
  const btnPrevious = document.querySelector(".reviews-previous .reviews-btn");
  const btnNext = document.querySelector(".reviews-next .reviews-btn");

  let currentIndex = 0;
  const totalReviews = reviewsContents.length;
  const intervalTime = 5000;

  function showReview(index) {
      reviewsContents.forEach((content, i) => {
          content.style.display = i === index ? "flex" : "none";
      });
  }

  function nextReview() {
      currentIndex = (currentIndex + 1) % totalReviews;
      showReview(currentIndex);
  }

  function previousReview() {
      currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
      showReview(currentIndex);
  }

  btnNext.addEventListener("click", nextReview);
  btnPrevious.addEventListener("click", previousReview);

  showReview(currentIndex);

  setInterval(nextReview, intervalTime);
});
