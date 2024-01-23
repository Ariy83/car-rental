import styled from 'styled-components';

export const SelectForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-top: 20px;
`;

export const CarFilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const DropdownLabel = styled.label`
  color: var(--txt-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const DropdownSelect = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  border-width: 0;
  background: var(--input-back);
  color: var(--txt-select);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const TextInput = styled.input`
  position: absolute;
  top: 40px;
  left: 18px;
  z-index: 9;
  width: 117px;
  height: 20px;
  border-width: 0;
  background-color: transparent;
  color: var(--txt-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SelectedPrice = styled.span`
  font-weight: bold;
  margin-left: 8px;
`;

export const MileageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const MileageInputs = styled.div`
  display: flex;
  padding: 8.5px 18px;
  max-height: 48px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 14px;
  border-width: 0;
  background: var(--input-back);
  color: var(--txt-select);
  input {
    max-width: 160px;
    border-width: 0;
    background-color: transparent;
    color: var(--txt-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const VerticalLine = styled.div`
  height: 30px;
  border-left: 1px solid rgba(138, 138, 137, 0.2);
  margin: 0 12px;
`;

export const SelectButton = styled.button`
  display: flex;
  width: 136px;
  height: 47px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
`;
