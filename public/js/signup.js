//sign up page required! 
let submit = document.getElementById('sign-up');

submit.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        //form handle?
        let username = document.getElementById('username').value.trim();
        let password = document.getElementById('password').value.trim();
        let email = document.getElementById('email').value.trim();
        
        //validator
        if (!username || !password || !email) {
            alert('Please make sure all fields are filled')
            return;
        };

        //sign-up
        const data = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        });
        
        if (data.status === 201) {
            window.location.href = '/login';
            alert('Login Sucessful');
        } else {
            console.log(data);
        };
    } catch (err) {
        console.log(err);
    };
});
