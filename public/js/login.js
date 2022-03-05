
let submit = document.getElementById('submit-button')

submit.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;


        //validator
        if(!username || !password){
            alert('Please make sure all fields are filled')
            return;
        };
         //login
        //fetch to login api
        const data = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            if (data.status === 201) {
            window.location.href = '/';
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.log(err)

    }
})
    
