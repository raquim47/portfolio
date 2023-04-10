import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(./images/profile.jpeg) no-repeat center;
  background-size: cover;
  height: 100vh;
  @media screen and (max-width: 960px) {
    flex: auto;
    height: 80vh;
    order: 1;
  }
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
    content: '';
  }
`;

const MainText = styled.div`
  position: relative;
  font-family: 'NEXON Lv1 Gothic Bold';
  color: white;
  text-align: center;

  h2 {
    font-size: 3.5vw;
    line-height: 1.8;
    transform: translateY(-100%);
    transform: ${(props) =>
      props.isMounted ? 'translateY(0%)' : 'translateY(-50%)'};
    opacity: ${(props) => (props.isMounted ? 100 : 0)};
    transition: transform 0.4s ease-in, opacity 0.4s ease-in;
    @media screen and (max-width: 960px) {
      font-size: 6.5vw;
    }
  }

  h2:nth-of-type(1) {
  }

  h2:nth-of-type(2) {
    transition-delay: 0.3s;
  }

  strong {
    display: inline-block;
    margin-right: 15px;
    font-size: 4.6vw;
    line-height: 1;
    background-size: 100% 100%;
    background-image: linear-gradient(transparent 80%, #8b00ff 20%);
    @media screen and (max-width: 960px) {
      font-size: 8.5vw;
    }
  }
`;

const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  max-width: 350px;
  padding: 5% 0 3%;
  background: #1c1d1f;
  color: #fff;
  @media screen and (max-width: 960px) {
    width: 100%;
    max-width: none;
    order: 0;
  }
`;

const SideBarNav = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 960px) {
    gap: 30px;
    margin-bottom: 40px;
    padding: 30px 0;
  }

  a {
    position: relative;
    display: inline-block;
    cursor: pointer;

    ::before {
      position: absolute;
      right: -20px;
      bottom: 12%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #8b00ff;
      content: '';
    }

    ::after {
      position: absolute;
      right: -15px;
      bottom: 12%;
      width: 0%;
      height: 10px;
      background: #8b00ff;
      transition: width 0.3s ease-in-out;
      content: '';
    }

    :hover::after {
      width: calc(100% + 15px);
    }
  }

  strong {
    position: relative;
    font-size: 36px;
    z-index: 10;
    @media screen and (max-width: 960px) {
      font-size: 28px;
    }
  }
`;

const SideBarInfo = styled.div`
  p {
    margin-bottom: 15px;
    color: #9b9b9b;
    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }
`;

function Banner() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Wrapper>
      <Main>
        <MainText isMounted={isMounted}>
          <h2>안녕하세요</h2>
          <h2>
            <strong>홍승진</strong>입니다
          </h2>
        </MainText>
      </Main>
      <SideBar>
        <SideBarNav>
          <Link
            activeClass='active'
            to='project'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <strong>Project</strong>
          </Link>
          <Link
            activeClass='active'
            to='study'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <strong>Study</strong>
          </Link>
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>GitHub</strong>
          </a>
          <a herf='#'>
            <strong>Velog</strong>
          </a>
        </SideBarNav>
        <SideBarInfo>
          <p>raquim47@naver.com</p>
          <p>Last Update : 23.01.01</p>
        </SideBarInfo>
      </SideBar>
    </Wrapper>
  );
}
export default Banner;
