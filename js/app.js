async function loadFormacao(){
    const fileRequest = await fetch('assets/pages/formacao.html');
    const textForm = await fileRequest.text();

    document.getElementById('apresentacao').innerHTML = textForm;

    //trocar imagem
    const imageElement = document.getElementById('foto_index')
    imageElement.src = 'assets/img/foto_index.png'
}

async function loadExperiencia(){
    const fileRequest2 = await fetch('assets/pages/experiencia.html');
    const textForm2 = await fileRequest2.text();

    document.getElementById('apresentacao').innerHTML = textForm2;

    //trocar imagem
    const imageElement = document.getElementById('foto_index')
    imageElement.src = 'assets/img/foto_index.png'
}

async function loadContato(){
    const fileRequest3 = await fetch('assets/pages/contato.html');
    const textForm3 = await fileRequest3.text();
    document.getElementById('apresentacao').innerHTML = textForm3;

    //trocar imagem
    const imageElement = document.getElementById('foto_index')
    imageElement.src = 'assets/img/emoji.png'
}

async function loadIndex(){
    const fileRequest4 = await fetch('index.html')
    const textForm4 = await fileRequest4.text();
   
    //Criar elemento temporário para dividir o conteúdo e pegar uma tag especifica
    const tempElement = document.createElement('div');
    tempElement.innerHTML = textForm4;

    const specificTag = tempElement.querySelector('#apresentacao');

    document.getElementById('apresentacao').innerHTML = specificTag.innerHTML;

    //trocar imagem
    const imageElement = document.getElementById('foto_index')
    imageElement.src = 'assets/img/foto_index.png'
}