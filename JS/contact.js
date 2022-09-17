function submit() {
    let name = document.getElementById('name').value;
    if (name == '' || name === undefined) {
        document.getElementById('error').innerHTML = 'Name is required!';
        return;
    }
    let subject = document.getElementById('subject').value;
    if (subject.length < 1) {
        document.getElementById('error').innerHTML = 'Subject length must be 10 at minimum!';
        return;
    }
    let email = document.getElementById('email').value;
    var validRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    if (name == '' || name === undefined) {
        document.getElementById('error').innerHTML = 'Email is required!';
    }
    if (email.match(validRegex) === null) {
        document.getElementById('error').innerHTML = 'Please enter valid email!';
        return;
    }
    let message = document.getElementById('message').value;
    if (message.length < 1) {
        document.getElementById('error').innerHTML = 'Please write your message!';
        return;
    }
    document.getElementById('error').innerHTML = '';
    document.getElementById('validationMsg').innerHTML = 'Great, your message has been sent.';
}
