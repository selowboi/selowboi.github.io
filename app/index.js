$(document).ready( () => {

    $('a').on('click', (event => {

        if (this.hash !== "") {
            event.preventDefault();
        
            let hash = this.hash;

            $('html', 'body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
            })
        }

    }))

})

const validateParams = () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "") {
        alert('Please fill in the required form!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email format!');
        return;
    }


    window.open(`mailto:${email}?subject=${name}&body=${message}`);
    console.log(name, email, message);

}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}