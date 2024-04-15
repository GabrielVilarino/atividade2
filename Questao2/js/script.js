function alterarImagem(){
    var btnImage = document.getElementById('360')
    var sofaImage = document.getElementById('sofa')
    //alert(btnImage.src)
    if (btnImage.src == 'https://atividade2-rho.vercel.app/Questao2/src/btn360.png') {
        btnImage.src = 'https://atividade2-rho.vercel.app/Questao2/src/fechar.png'
        sofaImage.src = 'https://atividade2-rho.vercel.app/Questao2/src/gif.gif'
    }
    else{
        btnImage.src = 'https://atividade2-rho.vercel.app/Questao2/src/btn360.png'
        sofaImage.src = 'https://atividade2-rho.vercel.app/Questao2/src/image.png'
    }
}