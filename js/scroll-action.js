// 글자가 좌측 기준으로 90%만큼 왔을 때 등장하는 애니메이션
const setTransform = () => {
  const siteworkTit = document.querySelectorAll('.sitework-tit span');
  // x좌표 백분율 구하기
  function getPercent(element) {
    const coordinate = element.getBoundingClientRect();
    return coordinate['x'] / window.innerWidth;
  }

  siteworkTit.forEach(e => {
    siteworkTitPer = getPercent(e);
    if (siteworkTitPer < 0.9) {
      e.style.transform = 'translateX(0)';
      e.style.opacity = 1;
    } else {
      e.style.transform = 'translateX(200%)';
      e.style.opacity = 0;
    }
  });
};

// 프로그래스바 애니메이션, 넘버 생성
const setProgressNum = startScroll => {
  let scrollTop = window.scrollY;
  const progressbar = document.querySelector('.progress__line-white');
  const progressNum = document.querySelector('.setnumber');
  const siteworkCont = document.querySelectorAll('.sitework-txt__item');

  for (let i = 0; i < siteworkCont.length; i++) {
    if (scrollTop >= startScroll + (i * 2000) && scrollTop <= (startScroll + 2000) + (i * 2000)) {
      progressbar.style.width = `${scrollTop/20 - ((startScroll + (i * 2000))/20)}%`;
      progressNum.innerHTML = `0${i+1}`;
    };
  };
};

// 화면전환을 위해 컨탠츠를 덮는 바 애니메이션
const setCoverBar = (startScroll => {
  let scrollTop = window.scrollY;
  const coverRow1 = document.querySelectorAll('.cover-row--s1 li');
  const coverRow2 = document.querySelectorAll('.cover-row--s2 li span');

  const setBar = (barName) => {
    if (scrollTop > startScroll) {
      barName.forEach((e, i) => {
        e.style.visibility = 'visible';
        setTimeout(function () {
          e.style.width = '100%'
        }, 100 * i);
      });
    } else {
      barName.forEach((e, i) => {
        setTimeout(function () {
          e.style.width = '0%'
        }, 100 * i);
        // e.style.visibility = 'hidden';
      });
    };
  };
  setBar(coverRow1);
  setBar(coverRow2);
});
// SCRIPT 글자쪼개기
document.querySelectorAll('.script-tit').forEach(el => {
  let text = el.innerText;
  let split = text.split('').join('</span><span aria-hidden="true">');
  split = '<span aria-hidden="true">' + split + '</span>';
  el.innerHTML = split;
  el.setAttribute('aria-label', text);
});

// script 글자 등장 애니메이션
const setScriptTitUp = (startScroll, speed) => {
  let scrollTop = window.scrollY;
  const scriptTit = document.querySelectorAll('.script-tit span');

  if (scrollTop > startScroll) {
    scriptTit.forEach((e, i) => {
      setTimeout(() => {
        e.classList.add('active');
      }, speed * i);
    });
  } else {
    scriptTit.forEach((e, i) => {
      setTimeout(() => {
        e.classList.remove('active');
      }, speed * i);
    });
  };
};

window.addEventListener('scroll', function () {
  setTransform();
  setProgressNum(6500);
  setCoverBar(15000);
  setScriptTitUp(15500, 100);
});

// 스크롤 확인
function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".scroll").innerHTML = scrollTop;
  requestAnimationFrame(scroll);
}
scroll();