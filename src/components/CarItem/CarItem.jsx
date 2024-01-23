import { useDispatch, useSelector } from 'react-redux';
import Heart from '../Heart/Heart';
import {
  StyledButton,
  StyledImgWrap,
  StyledLi,
  StyledNamePrice,
  StyledTags,
} from './CarItem.styled';
import { openCarModal, toggleModal } from '../../redux/carSlice';
import { selectIsModalOpen } from '../../redux/selectors';
import { getRandomInt } from '../../utils/functions';

/* eslint-disable react/prop-types */
const CarItem = ({ car }) => {
  const isModalOpen = useSelector(selectIsModalOpen);

  const dispatch = useDispatch();

  const learnMore = car => {
    dispatch(toggleModal(!isModalOpen));
    dispatch(openCarModal(car));
    console.log(car);
  };

  return (
    <StyledLi>
      <StyledImgWrap
        style={{
          backgroundImage: `url(${car.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <StyledNamePrice>
        <p>
          {car.make} <span>{car.model.split('-').slice(0, 1).join(' ')}</span>,{' '}
          {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </StyledNamePrice>
      <StyledTags>
        {car.address.split(',').slice(1).join(' | ')} | {car.rentalCompany} |
        Premium | {car.type.charAt(0) + car.type.substring(1).toLowerCase()} |
        {` ${car.model}`} | {car.id} |{' '}
        {car.functionalities[getRandomInt(0, 3)].split(' ').slice(-2).join(' ')}
      </StyledTags>
      <StyledButton onClick={() => learnMore(car)}>Learn more</StyledButton>
      <Heart />
    </StyledLi>
  );
};

export default CarItem;
