import styled from 'styled-components';

const StackLayoutWrapper = styled.div`
  min-width: ${({ fillAvailableSpace }) =>
    fillAvailableSpace ? '-webkit-fill-available' : '0'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-bottom: ${({ gap = 0.8 }) => `${gap}rem`} !important;
  }
`;

export default StackLayoutWrapper;
