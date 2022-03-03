async function newFormHandler(event) {
    event.preventDefault();
    const chat_input= document.querySelector('#chatinput').value;
   
    const response = await fetch(`/api/dish`, {
      method: 'POST',
      body: JSON.stringify({
        chat_input,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
  }
  
  document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
   