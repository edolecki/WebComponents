/*
    Using module in the HTML allows us to import the 
    BBHButton component. Here the button is defined 
    as a custom element. We can use it in any HTML 
    document as a custom element.
*/
import { BBHButton } from "./components/BBHButton.js";
customElements.define('bbh-button', BBHButton);

// Normal application JS code

const buttonSave = document.getElementById('saveChanges'); 
buttonSave.addEventListener('click', () => {
    alert('Changes saved!');    
})


// Hey, check this out! This is new. New reference.
const originalObject = {
    name: "John",
    age: 30,
    hobbies: ["coding", "music"],
    address: {
      street: "123 Main St",
      city: "Erie"
    }
  };
  
  const clonedObject = structuredClone(originalObject);
  
  console.log(clonedObject); 