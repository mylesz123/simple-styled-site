import styled from 'styled-components';

const FlexLayoutWrapper = styled.div`
  display: flex;
  justify-content: ${({ justifyContent = 'space-evenly' }) =>
    justifyContent};
  flex-wrap: wrap;
  padding-left: 2em;
  padding-right: 2em;
  min-width: ${({ fillAvailableSpace }) =>
    fillAvailableSpace ? '-webkit-fill-available' : '0'};
`;

export default FlexLayoutWrapper;
