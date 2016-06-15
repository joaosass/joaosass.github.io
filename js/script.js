var ind = 0;
var li = document.querySelectorAll("li");
for(var i = 0; i < 4; i++){
    li[i].onclick = function(){
        nav.style.left = "-100vh";
        botao.style.left = "5vh";
        ind = 0;
        if(this.innerHTML == "Inicio"){
            var tempo = setInterval(function(){
                if(window.pageYOffset != 0){
                    window.scrollTo(0, window.pageYOffset - 90);
                }
                else{
                    clearInterval(tempo);
                }
            },0);
        }
        else if(this.innerHTML == "Perfil" && window.pageYOffset < document.querySelector("#perfil").offsetTop){
            var tempo = setInterval(function(){
                if(window.pageYOffset < document.querySelector("#perfil").offsetTop){
                    window.scrollTo(0, window.pageYOffset + 60);
                }
                else{
                    clearInterval(tempo);
                }
            },0);
        }
        else if(this.innerHTML == "Perfil" && window.pageYOffset > document.querySelector("#perfil").offsetTop){
            var tempo = setInterval(function(){
                if(window.pageYOffset > document.querySelector("#perfil").offsetTop){
                    window.scrollTo(0, window.pageYOffset - 60);
                }
                else{
                    clearInterval(tempo);
                }
            },0);
        }
        else if(this.innerHTML == "Habilidades" && window.pageYOffset < document.querySelector("#linguagens").offsetTop){
            var tempo = setInterval(function(){
                if(window.pageYOffset < document.querySelector("#linguagens").offsetTop){
                    window.scrollTo(0, window.pageYOffset + 60);
                }
                else{
                    clearInterval(tempo);
                }
            },0);
        }
        else if(this.innerHTML == "Habilidades" && window.pageYOffset > document.querySelector("#linguagens").offsetTop){
            var tempo = setInterval(function(){
                if(window.pageYOffset > document.querySelector("#linguagens").offsetTop){
                    window.scrollTo(0, window.pageYOffset - 60);
                }
                else{
                    clearInterval(tempo);
                }
            },0);
        }
        else if(this.innerHTML == "Portfólio"){
            var tempo = setInterval(function(){
                if(window.pageYOffset <= document.querySelector("#portfolio").offsetTop){
                    window.scrollTo(0, window.pageYOffset + 90);
                }
                else{
                    clearInterval(tempo);
                }
            },0);
        }
        return false;
    }
}

var nav = document.querySelector("nav");
var botao = document.querySelector(".botao");
botao.onclick = function(){
    if(ind == 0){
        nav.style.left = 0;
        botao.style.left = "225px";
        ind = 1;
    }
    else{
        nav.style.left = "-100vh";
        botao.style.left = "5vh";
        ind = 0;
    }
}
