import { useDispatch, useSelector } from 'react-redux';
import {
  StyledButton,
  StyledHeart,
  StyledImgWrap,
  StyledLi,
  StyledNamePrice,
  StyledTags,
} from './CarItem.styled';
import {
  addFavCars,
  delFavCars,
  openCarModal,
  toggleModal,
} from '../../redux/carSlice';
import { selectFavCars, selectIsModalOpen } from '../../redux/selectors';
import { getRandomInt } from '../../utils/functions';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

/* eslint-disable react/prop-types */
const CarItem = ({ car }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const favCars = useSelector(selectFavCars);

  const dispatch = useDispatch();

  const learnMore = car => {
    dispatch(toggleModal(!isModalOpen));
    dispatch(openCarModal(car));
  };

  const changeFavorite = car => {
    const isCarInFavorites = favCars.some(favCar => favCar.id === car.id);

    if (isCarInFavorites) {
      dispatch(delFavCars(car.id));
    } else {
      dispatch(addFavCars(car));
    }
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
      <StyledHeart
        onClick={() => {
          changeFavorite(car);
        }}
      >
        {favCars.some(favCar => favCar.id === car.id) ? (
          <FaHeart color="#3470ff" />
        ) : (
          <FaRegHeart color="white" />
        )}
      </StyledHeart>
    </StyledLi>
  );
};

export default CarItem;
