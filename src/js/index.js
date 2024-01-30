import loadGTM from "./GTM.js";
import { formStepInteraction, formStepSubmit, formStepImpression } from "./GTMEvents.js";

loadGTM();

const heroEmailInput = document.querySelector(`.hero-email-input`);

heroEmailInput.addEventListener(`focus`, () => {
  heroEmailInput.classList.add(`active`);
  formStepInteraction(1, `Hero`, `Focus`);
});

heroEmailInput.addEventListener(`focusout`, () => {
  heroEmailInput.classList.add(`active`);
  formStepInteraction(1, `Hero`, `FocusOut`);
});

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {


            // You can also call your function here
            formStepImpression(1, `Hero`, `Visible`);

            // Once the event is fired, you might want to unobserve the target
            observer.unobserve(entry.target);
        }
    });
});

// Start observing the `.hero-email-input` element
observer.observe(heroEmailInput);

const form = document.querySelector(`.form`);

// Assuming `form` is your form element
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form data
    const data = e.target.emailInput.value;
  
    // Call the webhook
    fetch('https://hook.eu1.make.com', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('7vkudql149o1rkb04cvfzyowaoyjaa45:')
      },
      body: JSON.stringify(data), // data is the data you want to send, for example, form data
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });