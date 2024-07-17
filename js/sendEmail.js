function SendEmail(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const mensagem = document.getElementById("message").value

    Email.send({
        SecureToken: 'YOUR TOKEN',
        To: 'YOUR EMAIL',
        From:'YOUR EMAIL',
        Subject: "Form Portfólio:",
        Body: `
                Name: ${name} <br>
                Email: ${email} <br>
                Message: ${message} 
        `
    }).then(() => {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        settimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    });
}