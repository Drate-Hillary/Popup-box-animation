const popup = document.querySelector('.popup'),
      button = document.querySelector('.button');

function popup_open(){
    popup.style.transform = 'scale(1.0)';
}

function close_popup(){
    popup.style.transform = 'scale(0.2, 0.0)';
}

button.addEventListener('mousemove', ()=> {
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseleave', ()=> {
    button.style.transform = 'scale(1.0';
});