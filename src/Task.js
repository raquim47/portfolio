import styled from 'styled-components';
import Mockup from './Mockup';
import { techIconUrl } from './techIconUrl';
import OverviewText from './OverviewText';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 50px 0;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding: 30px 0;
    margin-bottom: 30px;
  }
`;

const LeftSection = styled.section`
  h3 {
    font-size: 36px;
    @media screen and (max-width: 960px) {
      font-size: 30px;
    }
  }
  flex: 1;
  margin-right: 50px;
  @media screen and (max-width: 960px) {
    margin-right: 10px;
  }
`;

const Tachs = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    display: inline-block;
  }
`;
const Intro = styled.div`
  line-height: 1.8;
  padding: 15px 20px;
  background-color: #EBEBEB;
  border-radius: 5px;
`
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0;
`;

const UrlLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  row-gap: 10px;
  h4 {
    font-size: 20px;
  }
`;

const RightSection = styled.section`
  width: 40%;
  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

function Task({ data }) {
  return (
    <Wrapper>
      <LeftSection>
        <h3>
          <strong>{data.title}</strong>
        </h3>
        {data.techs && (
          <Tachs>
            {data.techs.map((tech) => (
              <img src={techIconUrl[tech]} key={tech} alt={tech} />
            ))}
          </Tachs>
        )}
        {data.intro && <Intro>{data.intro}</Intro>}
        <Overview>
          {data.overviews.map((overview, i) => (
            <OverviewText text={overview} key={i} />
          ))}
        </Overview>
        <UrlLinks>
          <h4>
            <strong>관련 링크</strong>
          </h4>
          {data.links.map((link, i) => (
            <OverviewText key={i} isLink text={link.text} url={link.url} />
          ))}
        </UrlLinks>
      </LeftSection>
      <RightSection>
        <Mockup mockupData={data.mockup} />
      </RightSection>
    </Wrapper>
  );
}
export default Task;
