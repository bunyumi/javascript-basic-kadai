const text = document.querySelector("#text");

const btn = document.querySelector("#btn");

btn.addEventListener('click',()=>{
  const textSecond = document.createElement('h2');
  textSecond.textContent = 'ボタンをクリックしました';
  document.body.appendChild(textSecond);
});

