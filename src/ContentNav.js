import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Chapter = styled.div`
  h5 {
    font-family: 'NEXON Lv1 Gothic bold';
    font-size: 25px;
    margin-bottom: 20px;
  }

  li {
    color: #5e5e5e;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .dot {
    font-size: 10px;
    margin-right: 8px;
  }
`;
function ContentNav() {
  return (
    <Wrapper>
      <Chapter>
        <h5>Project</h5>
        <ol>
          <li>
            <a href='#'>
              <span className='dot'>●</span>영화 별점 앱
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='dot'>●</span>쇼핑몰 앱
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='dot'>●</span>그림판 앱
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='dot'>●</span>메가박스 클론
            </a>
          </li>
        </ol>
      </Chapter>
      <Chapter>
        <h5>Study</h5>
        <ol>
          <li>
            <a href='#'>
              <span className='dot'>●</span>프론트엔드 취업 스터디
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='dot'>●</span>자바스크립트 공부
            </a>
          </li>
        </ol>
      </Chapter>
    </Wrapper>
  );
}
export default ContentNav;
