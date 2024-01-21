import { StyledSvg } from '../CarItem/CarItem.styled';

const Heart = () => {
  return (
    <StyledSvg width="18" height="18" aria-label="Add to favorites">
      <use href="../../assets/icons.svg#icon-heart"></use>
    </StyledSvg>
  );
};

export default Heart;
