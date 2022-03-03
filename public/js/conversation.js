async function newFormHandler(event) {
  event.preventDefault();
  const body = document.querySelector('#chatInput').value;
  const conversationId = document.getElementById('conversation-id').getAttribute('data');
  const response = await fetch(`/api/message`, {
    method: 'POST',
    body: JSON.stringify({
      body: body,
      conversation_id: conversationId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/conversation/' + conversationId);
  } else {
    alert('Failed to send message');
    console.log(body + ' ' + conversationId);
  }
}

document.querySelector('#chatInputContainer').addEventListener('submit', newFormHandler);
