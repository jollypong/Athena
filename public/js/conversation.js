async function newFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#chatInput').value;
  
  const response = await fetch(`/api/conversation`, {
    method: 'POST',
    body: JSON.stringify({
      dish_name,
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

document.querySelector('.chatInputContainer').addEventListener('submit', newFormHandler);
  