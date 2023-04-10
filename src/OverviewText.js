import styled from 'styled-components';

const Text = styled.p`
  display: flex;

  svg {
    color: ${(props) => (props.isLink ? '#000' : '#8b00ff')};
    display: inline-block;
    flex-shrink: 0;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    fill: currentColor;
  }

  span, a {
    line-height: 1.5;
  }
  a {
    text-decoration: underline;
  }
`;

function OverviewText({ text, isLink = false, url = '' }) {
  return (
    <Text isLink={isLink}>
      {!isLink ? (
        <>
          <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'></path>
          </svg>
          <span>{text}</span>
        </>
      ) : (
        <>
          <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'></path>
          </svg>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        </>
      )}
    </Text>
  );
}

export default OverviewText;
