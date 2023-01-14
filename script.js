fetch('/student-login', {
    method: 'POST',
    body: JSON.stringify({
        username: document.getElementById('student-username').value,
        password: document.getElementById('student-password').value
    })
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    if(data.status === 'success'){
        document.getElementById('student-name').innerHTML = data.name;
        document.getElementById('student-email').innerHTML = data.email;
        document.getElementById('student-phone').innerHTML = data.phone;
    }
});