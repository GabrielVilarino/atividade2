function alterarImagem(){
    var btnImage = document.getElementById('360')
    var sofaImage = document.getElementById('sofa')
    //alert(btnImage.src)
    if (btnImage.src == 'http://127.0.0.1:5500/Questao2/src/btn360.png') {
        btnImage.src = 'http://127.0.0.1:5500/Questao2/src/fechar.png'
        sofaImage.src = 'http://127.0.0.1:5500/Questao2/src/gif.gif'
    }
    else{
        btnImage.src = 'http://127.0.0.1:5500/Questao2/src/btn360.png'
        sofaImage.src = 'http://127.0.0.1:5500/Questao2/src/image.png'
    }
}