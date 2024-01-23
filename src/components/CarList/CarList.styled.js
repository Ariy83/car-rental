import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;
export const StyledLoadMore = styled.div`
  cursor: pointer;
  padding: 20px;
  margin-top: 80px;
  color: var(--blue-main);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: var(--white);

  :hover,
  :active,
  :focus {
    color: var(--blue-hover);
    background-color: var(--white);
  }
`;
