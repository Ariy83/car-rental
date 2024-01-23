import styled from 'styled-components';

export const StyledModalCarBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledModalWrap = styled.div`
  position: relative;
  max-width: 541px;
  max-height: 752px;
  border-radius: 24px;
  background: var(--white);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    width: 461px;
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 24px;
  }

  button {
    border: none;
  }
`;

export const StyledModalCloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: var(--white);
  border: none;
  outline: transparent;
  color: var(--txt-black);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: var(--white);
    color: var(--txt-black);
  }
`;

export const StyledImgModal = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background-color: #f3f3f2;
  margin-bottom: 14px;
`;

export const StyledInfoWrap = styled.div`
  display: flex;
  width: 277px;
  height: 72px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  span {
    color: var(--blue-main);
  }
`;

export const StyledInfoBottom = styled.div`
  display: flex;
  width: 461px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
  p {
    margin-bottom: 0;
  }
`;

export const StyledRentalConditions = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  span {
    color: var(--blue-main);
  }
`;
export const StyledRentalWrap = styled.div`
  display: flex;
  width: 461px;
  height: 72px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const StyledRentalRow = styled.div`
  display: flex;
  width: 461px;
  height: 32px;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledModalLink = styled.a`
  display: inline-block;
  padding: 12px 50px;
  text-decoration: none;
  background-color: var(--blue-main);
  color: var(--white);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  :hover,
  :active,
  :focus {
    background-color: var(--blue-hover);
  }
`;
