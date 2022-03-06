const messageContatiner = document.getElementById('message-container');
messageContatiner.scrollTop = messageContatiner.scrollHeight;

const loadChatButton = document.getElementById('load-chat-button');
loadChatButton.addEventListener('click', () => {
  location.reload();
});

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
    alert('You must be logged in to participate in this conversation!');
    console.log(body + ' ' + conversationId);
  }
}

document.querySelector('#chatInputContainer').addEventListener('submit', newFormHandler);