async function loadFormacao(){
    const fileRequest = await fetch('assets/pages/formacao.html');
    const textForm = await fileRequest.text();

    document.getElementById('apresentacao').innerHTML = textForm;
}

async function loadExperiencia(){
    const fileRequest2 = await fetch('assets/pages/experiencia.html');
    const textForm2 = await fileRequest2.text();

    document.getElementById('apresentacao').innerHTML = textForm2;
}

async function loadContato(){
    const fileRequest3 = await fetch('assets/pages/contato.html');
    const textForm3 = await fileRequest3.text();
    document.getElementById('apresentacao').innerHTML = textForm3;

    //trocar imagem
    const imageElement = document.getElementById('foto_index')
    imageElement.src = 'assets/img/emoji.png'
}