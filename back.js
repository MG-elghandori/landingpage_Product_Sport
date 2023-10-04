AOS.init();
//animation icons whatsap : 
window.addEventListener('load', function() {
    var animatedDiv = document.getElementById('animateddroiteDiv');
    animatedDiv.style.opacity = '1';
    animatedDiv.style.transform = 'translateX(0)';
});

//animation icons facboook instagram : 
window.addEventListener('load', function() {
    var animatedDiv = document.getElementById('animatedgoucheDiv');
    animatedDiv.style.opacity = '1';
    animatedDiv.style.transform = 'translateX(0)';
});

    window.addEventListener('load', function() {
    document.getElementById('img_footer').classList.add('loaded');
});

//alert
const form = document.getElementById("contact-form");
const msgValidation = document.querySelector(".modal-text"); 


//incrementchampQuantity
function incrementQuantity() {
  let quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.value);
  if (currentQuantity < 10) {
    quantityElement.value = currentQuantity + 1;
  } else {
    afficherMessage()
    msgValidation.innerHTML=`<div class='text-danger mt-1'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-exclamation-circle' viewBox='0 0 16 16'>
    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>
    <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z'/>
  </svg><span class='mx-2'>Le maximum est 10 quantités</span></div>`
    }
}

//decrementchampQuantity
function decrementQuantity() {
    let quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.value);
  if (currentQuantity > 1) {
    quantityElement.value = currentQuantity - 1;
  }
}

//form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const systemDate = new Date().toISOString();
  const btn_confirm = document.getElementById('btn_confirm');

  const errorMessages = [];

  if (!firstname) {
    errorMessages.push("Veuillez entrer votre nom.");
  }

  if (!lastname) {
    errorMessages.push("Veuillez entrer votre prénom.");
  }

  if (!phone) {
    errorMessages.push("Veuillez entrer votre téléphone.");
  } else if (isNaN(Number(phone))) {
    errorMessages.push("Veuillez entrer un numéro valide.");
  }
  if (!city) {
    errorMessages.push("Veuillez entrer votre ville.");
  }

  if (errorMessages.length > 0) {
    msgValidation.innerHTML = errorMessages
      .map((msg) => `<div class='text-danger mt-1' ><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-exclamation-circle' viewBox='0 0 16 16'>
    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>
    <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z'/>
  </svg><span class='mx-2'>${msg}</span></div>`)
      .join("");
  } else {
    msgValidation.innerHTML = "<div class='text-success text-center mt-2'>Bravo !</div>";
  }


  afficherMessage();
});
function afficherMessage() {
  const modal = document.getElementById("customAlert");
  modal.style.display = "block";
}

function fermerMessage() {
let quantityElement = document.getElementById("quantity");
  const modal = document.getElementById("customAlert");
  modal.style.display = "none";
  city.value="";
  phone.value="";
  lastname.value=""
  firstname.value=""
  quantityElement.value=1
}