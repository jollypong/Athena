const logoutButton = document.getElementById('logout');

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('/api/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            location.replace('/');
        });
});