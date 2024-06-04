async function loadFormacao(){
    const fileRequest = await fetch('formacao.html');
    const textForm = await fileRequest.text();

    document.getElementById('apresentacao').innerHTML = textForm;
}

async function loadExperiencia(){
    const fileRequest2 = await fetch('experiencia.html');
    const textForm2 = await fileRequest2.text();

    document.getElementById('apresentacao').innerHTML = textForm2;
}

async function loadContato(){
    const fileRequest3 = await fetch('contato.html');
    const textForm3 = await fileRequest3.text();

    document.getElementById('apresentacao').innerHTML = textForm3;
}