var nav = document.querySelector("nav");
var botao = document.querySelector(".botao");
var main = document.querySelector("main");
var li = document.querySelectorAll("li");
for(var i = 0; i < 4; i++){
    li[i].onclick = function(){
        nav.classList.toggle("mostra");
        main.classList.toggle("mostra");
    }
}
botao.onclick = function(){
    nav.classList.toggle("mostra");
    main.classList.toggle("mostra");
}
