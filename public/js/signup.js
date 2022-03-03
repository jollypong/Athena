let signUpButton = document.getElementById('sign-up');

submit.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;

        
            //signup
        
            const data=await  fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 201) {
                        window.location.href = '/';
                    } else {
                        console.log(data);
                    }
                }
                );
        }
     catch (err) {
        console.log(err);
    }
});
