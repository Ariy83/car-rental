import { FaRegHeart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';
import { StyledHeart } from './Heart.styled';

const Heart = () => {
  return (
    <StyledHeart>
      <FaRegHeart color="white" />
      {/* <FaHeart color="#3470ff" /> */}
    </StyledHeart>
  );
};

export default Heart;
