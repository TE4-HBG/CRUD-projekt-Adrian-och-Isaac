
const submitButton = document.getElementById('submit-button');
const todoInput = document.getElementById('todo-input');


submitButton.addEventListener('click', sendData);

 function sendData(e){
    e.preventDefault()
   
    

fetch("/items", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({"text": todoInput.value})
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', todoInput);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


}           