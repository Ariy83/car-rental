import styled from 'styled-components';

export const StyledLi = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledImgWrap = styled.div`
  width: 274px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 14px;
  background-color: #f3f3f2;
  margin-bottom: 6px;
`;

export const StyledHeart = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 9;
  cursor: pointer;
`;

export const StyledNamePrice = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  span {
    color: var(--blue-main);
  }
`;
export const StyledTags = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  color: var(--txt-grey-descr);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 274px;
  min-height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: var(--blue-main);
`;
