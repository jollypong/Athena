async function newFormHandler(event) {
  event.preventDefault();
  const chat_text = document.querySelector('#chatInput').value;
  
  const response = await fetch(`/api/conversation`, {
    method: 'POST',
    body: JSON.stringify({
      chat_text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  if (response.ok) {
    document.location.replace('/conversation');
  } else {
    alert('Failed to send message');
  }
}

document.querySelector('#chatInputContainer').addEventListener('submit', newFormHandler);
  