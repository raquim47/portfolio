const codeBtn = document.querySelectorAll('.code-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const codeWrap = document.querySelectorAll('.code');
const codeTab = document.querySelectorAll('.code-tab li');
const codeCont = document.querySelectorAll('.code pre'); 

codeBtn.forEach((e, i) => {
  e.addEventListener('click', ()=>{
    codeWrap.forEach(el => {
      el.classList.remove('active');
    });
    codeWrap[i].classList.add('active');
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', ()=>{
  modal.style.display = 'none';
});





codeTab.forEach((e, i) => {
  e.addEventListener('click', (a) => {
    a.preventDefault();

    codeTab.forEach(el => {
      el.classList.remove('active');
    });
    e.classList.add('active');

    codeWrap.forEach(el =>{
      el.querySelectorAll('pre').forEach(ele =>{
        ele.classList.remove('active');
      });
      el.children[i].classList.add('active');
    });
  });
});