'use strict';

{
  const menu = document.getElementById('menu');
  const openButton = document.getElementById('openButton');

  openButton.addEventListener('click', () =>{
    menu.classList.toggle('open');
  });
}