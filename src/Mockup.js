import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0.1em 0.2em 0.3em 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px 3px 0 0;

  ::before {
    display: block;
    position: absolute;
    content: '';
    top: -1.25em;
    left: 1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f44;
    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
  }

  .mockup_img {
    position: relative;
    height: 0;
    padding-bottom: 65%;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .mockup_link {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);

    span {
      font-size: 20px;
      padding: 12px 14px 8px;
      border: 2px solid #ebebeb;
      border-radius: 4px;
      color: #ebebeb;
    }
  }

  .mockup_link:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .mockup_link:hover span {
    background: #ebebeb;
    color: #000;
  }
`;

function Mockup({ mockupData }) {
  return (
    <Wrapper>
      <div className='mockup_img'>
        <img src={mockupData.image} alt={mockupData.alt} />
      </div>
      <a
        className='mockup_link'
        href={mockupData.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>사이트 바로가기</span>
      </a>
    </Wrapper>
  );
}
export default Mockup;
