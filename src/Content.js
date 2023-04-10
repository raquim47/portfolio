import styled from 'styled-components';
import Task from './Task';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 50px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Work = styled.article`
  max-width: 1100px;
  margin: 0 auto;
  h2 {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 6px solid #8b00ff;
  }

  h2 strong {
    font-size: 65px;
    @media screen and (max-width: 960px) {
      font-size: 45px;
    }
  }
`;

const projectData = [
  {
    title: '영화 별점 앱',
    techs: [
      'react',
      'redux',
      'typescript',
      'firebase',
      'react_hook_form',
      'react_query',
      'styled_components',
    ],
    overviews: [
      'TheMovieDB API_영화 검색, 저장, 평가를 할 수 있는 서비스 개발',
      'TypeScript_코드 안정성과 가독성 향상',
      'Firebase_사용자 인증처리, 사용자 계정 생성, 수정',
      'React-hook-form_로그인, 회원가입 폼 구현, 유효성 검사',
      'Firestore와 Redux 연동_사용자의 영화 찜목록, 별점, 코멘트 기능 구현 및 실시간 업데이트',
      '무한 스크롤_웹 API IntersectionObserver를 이용한 무한 스크롤 기능 구현',
      '인터랙션 애니메이션_Framer Motion 라이브러리를 활용한 상호작용이 가능한 애니메이션 구현',
    ],
    links: [
      { text: 'GitHub 링크', url: 'https://github.com/raquim47/mymovie' },
      {
        text: '블로그:Framer-Motion_박스 클릭하면 모달 팝업',
        url: 'https://velog.io/@raquim47/framermotion-popup',
      },
      {
        text: '블로그:React-hook-form, firebase로 로그인, 회원가입 기능 구현',
        url: 'https://velog.io/@raquim47/reacthookform-auth',
      },
      {
        text: '블로그:인증 페이지 리다이렉트',
        url: 'https://velog.io/@raquim47/React-redirect',
      },
      {
        text: '블로그:모바일 환경에서의 뒤로가기, popstate',
        url: 'https://velog.io/@raquim47/JS-popstate',
      },
    ],
    mockup: {
      alt: '영화 앱 사이트',
      image:
        'https://github.com/raquim47/data/raw/main/mymovie/mymovie_img01.gif?raw=true',
      url: 'https://mymovie-285fd.web.app/',
    },
  },
  {
    title: '쇼핑몰 앱',
    techs: ['react', 'redux', 'axios'],
    overviews: [
      'Redux Toolkit_상품 정보와 카트 데이터를 효율적으로 관리하기 위해 리덕스 사용',
      '컴포넌트 생명 주기 관리_useEffect, useState를 사용하여 마운트, 업데이트, 언마운트 시 동작을 구현',
      'Axios_서버로부터 상품 데이터를 비동기로 가져오기 위해 Axios 라이브러리 활용',
      'Local Storage_사용자 정보를 브라우저 로컬 스토래지에 저장하여 영속성을 보장',
      'useParams 훅을 사용하여 URL 파라미터를 활용하여 동적 라우팅 구현',
      '상품 리스트, 정렬 버튼 등 독립적이고 재사용 가능한 컴포넌트로 분리',
    ],
    links: [
      { text: 'GitHub 링크', url: 'https://github.com/raquim47/shopping-app' },
    ],
    mockup: {
      alt: '쇼핑몰 앱 사이트',
      image:
        'https://github.com/raquim47/data/raw/main/cozy/img/readme/cozy-readme1.gif?raw=true',
      url: 'https://raquim47.github.io/shopping-app/',
    },
  },
  {
    title: '그림판 앱',
    techs: ['html5', 'javascript', 'sass'],
    overviews: [
      'Javascript, Canvas API로 그림판 앱 만들기',
      '도형 그리기, 이미지 그리기, 사용한 색상 표시 기능 구현',
      'SCSS(SASS)_컴포넌트 단위의 스타일링',
    ],
    links: [
      { text: 'GitHub 링크', url: 'https://github.com/raquim47/paintingApp' },
    ],
    mockup: {
      alt: '그림판 앱 사이트',
      image:
        'https://raw.githubusercontent.com/raquim47/data/main/painting-app/paintingapp09.gif',
      url: 'https://raquim47.github.io/paintingApp/',
    },
  },
  {
    title: '메가박스 클론',
    techs: ['html5', 'css', 'jquery'],
    overviews: [
      'HTML, CSS 기초 배우기',
      '웹표준과 접근성 고려 (시멘틱 마크업, 스킵메뉴, IR기법)',
      '반응형 레이아웃 설계',
      'Swiper.js 라이브러리_이미지 슬라이드 구현',
      'jquery_탭 메뉴 구현',
      'YouTube API_동영상 플레이어 구현',
    ],
    links: [
      { text: 'GitHub 링크', url: 'https://github.com/raquim47/Clone-megabox' },
      {
        text: '블로그: 대체텍스트',
        url: 'https://velog.io/@raquim47/alternate-text',
      },
    ],
    mockup: {
      alt: '메가박스 클론 사이트',
      image:
        'https://github.com/raquim47/data/blob/main/megabox/main.png?raw=true',
      url: 'https://raquim47.github.io/Clone-megabox/',
    },
  },
];
const studyData = [
  {
    title: '자바스크립트 스터디',
    overviews: [
      '22.12~23.2 코드온랩 자바스크립트 스터디 진행',
      '자바스크립트 기초 문법',
      '자바스크립트를 사용한 알고리즘 문제풀이, 코드 리뷰',
    ],
    links: [
      {
        text: '자바스크립트 내용 정리: 변수, 자료형, 연산자, 조건문, 반복문, 함수 등 자바스크립트 기초 문법을 퀴즈 형식으로 정리한 사이트',
        url: 'https://raquim47.github.io/study/study-javascript/',
      },
      {
        text: '프로그래머스 알고리즘 : LV0~LV1 문제풀이 및 코드 리뷰',
        url: 'https://github.com/raquim47/codeonlab',
      },
    ],
    techs: ['javascript'],
    mockup: {
      alt: '자바스크립트 스터디 사이트',
      image:
        'https://raw.githubusercontent.com/raquim47/data/main/study/javascript.png',
      url: 'https://raquim47.github.io/study/study-javascript/',
    },
  },
];

function Content() {
  return (
    <Wrapper>
      <Work id='project'>
        <h2>
          <strong>Project</strong>
        </h2>
        {projectData.map((data, i) => (
          <Task data={data} key={i} />
        ))}
      </Work>
      <Work id='study'>
        <h2>
          <strong>Study</strong>
        </h2>
        {studyData.map((data, i) => (
          <Task data={data} key={i} />
        ))}
      </Work>
    </Wrapper>
  );
}
export default Content;
