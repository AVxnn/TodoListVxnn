let input = document.querySelector('.nav-input-text');
let button = document.querySelector('.nav-btn');
let listItem = document.querySelector('.main-list-item');
let itemIcon = document.querySelector('.item-icon');
let sum = 0;

function start(){
    let text = input.value;
    let textInput = input.value;
    let template = '<div class="item-div ' + sum + '"><div class="text-ara"> <div class="checkbox-list"> <span class="checkbox-fake"></span> </div> <span class="item-text">' + text +'</span> <span class="item-icon"><img class="img-header" src="img/basket.svg" alt=""></span> </div> </div>';
    listItem.innerHTML += template; 
    sum++;
}

input.oninput = function(){

    console.log(input.value);
}

button.addEventListener('click', function () {
    if(input.value){
        start();
        
    } else{
        alert('Вы не ввели задачу!');
    }
    
});



window.setInterval(function(){

    var imageHeader = document.querySelector('.header-up');
    var now = new Date();
    var clock = document.getElementById("clock");
   clock.innerHTML = now.toLocaleTimeString();
   if(now.getHours() < 6 || now.getHours() > 17){
    imageHeader.classList.add('down');
   } else if(now){
    imageHeader.classList.remove('down');
   }
}, 1000);

