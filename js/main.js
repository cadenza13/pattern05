'use strict';

{
  const li = document.querySelectorAll('li');
  const p = document.querySelector('p');
  const mask = document.getElementById('mask');
  const logo = document.getElementById('logo');
  const navigate = document.getElementById('navigate');

  li.forEach((n, index) =>{
    n.addEventListener('mouseover', () =>{
      switch(index){
        case 0:
          p.textContent = 'ポポラマーマ';
          break;
        case 1:
          p.textContent = '自分';
          break;
        case 2:
          p.textContent = 'グループ';
          break;
        case 3:
          p.textContent = 'ナイスショット';
          break;
        case 4:
          p.textContent = 'ツイッター';
          break;
      }
    });
  });

  navigate.addEventListener('mouseover', () =>{
    p.textContent = '私はナビゲーターです。';
  });

  // 以下,表示直後の演出

  let skipButton = false;

  function openingA(){
    if(skipButton === true){
      return;
    }
    logo.classList.add('move');
    setTimeout(openingB, 4000);
  }

  function openingB(){
    logo.classList.remove('move');
    if(skipButton === true){
      return;
    }
    logo.classList.remove('move');
    logo.classList.add('jump');
    setTimeout(openingC, 3500);
  }

  function openingC(){
    logo.classList.remove('jump');
    if(skipButton === true){
      return;
    }
    logo.classList.add('skip');
    logo.classList.remove('jump');
    mask.classList.add('clear');
    button.classList.add('hidden')
    setTimeout(openingE, 3000);
  }
  
  function openingD(){
    mask.classList.add('hidden');
    li.forEach(contents =>{
      contents.classList.add('stop');
    });
  }

  openingA();

  // 以下,時間によって背景やコメントを変更

  const d = new Date();
  let Hours = d.getHours();
  
  if(Hours >= 18 && Hours <= 23){
    p.textContent = 'こんばんは！';
  } else if(Hours >= 11 && Hours <= 17){
    p.textContent = 'こんにちは！';
  } else if(Hours >= 4 && Hours <= 10){
    p.textContent = 'おはようございます！';
  } else{
    p.textContent = 'こんばんは！';
  }

  // 以下,コンテンツを表示させるまでの処理

  function openingE(){
    if(skipButton === true){
      return;
    }
    li.forEach(contents =>{
      contents.classList.add('show');
    });
    p.textContent = 'これがコンテンツです!';
    setTimeout(openingD, 1500);
  }

  // 以下,スキップ処理

  const button = document.querySelector('button');

  button.addEventListener('click', () =>{
    skipButton = true;
    mask.classList.add('hidden');
    button.classList.add('hidden');
    logo.classList.add('skip');
    li.forEach(contents =>{
      contents.classList.add('stop');
      contents.classList.add('show');
    });
    // setTimeout(skipsLogo, 100);
  });

  // function skipsLogo(){
  //   logo.classList.add('skip');
  //   logo.classList.remove('hidden');
  // }
}