import { useDispatch, useSelector } from 'react-redux';
import { selectCar, selectIsModalOpen } from '../../redux/selectors';
import { AiOutlineClose } from 'react-icons/ai';
import {
  StyledImgModal,
  StyledInfoBottom,
  StyledInfoWrap,
  StyledModalCarBackdrop,
  StyledModalCloseBtn,
  StyledModalLink,
  StyledModalWrap,
  StyledName,
  StyledRentalConditions,
  StyledRentalRow,
  StyledRentalWrap,
} from './ModalCar.styled';
import { toggleModal } from '../../redux/carSlice';
import { useEffect } from 'react';
import { StyledTags } from '../CarItem/CarItem.styled';

const ModalCar = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const car = useSelector(selectCar);

  const dispatch = useDispatch();

  const clickBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(toggleModal(false));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    isModalOpen && (
      <StyledModalCarBackdrop onClick={clickBackdrop}>
        <StyledModalWrap>
          <StyledModalCloseBtn
            onClick={() => {
              dispatch(toggleModal(false));
            }}
          >
            <AiOutlineClose size="24" />
          </StyledModalCloseBtn>
          <StyledImgModal
            style={{
              backgroundImage: `url(${car.img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <StyledInfoWrap>
            <StyledName>
              {car.make} <span>{car.model}</span>, {car.year}
            </StyledName>
            <StyledTags>
              {car.address.split(',').slice(1).join(' | ')} | Id: {car.id} |
              Year: {car.year} | Type:{' '}
              {car.type.charAt(0) + car.type.substring(1).toLowerCase()} | Fuel
              Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}
            </StyledTags>
          </StyledInfoWrap>
          <p>{car.description}</p>
          <StyledInfoBottom>
            <p>Accessories and functionalities:</p>
            <StyledTags>
              {car.functionalities.join(' | ')}
              <br />
              {car.accessories.join(' | ')}
            </StyledTags>
          </StyledInfoBottom>
          <StyledInfoBottom>
            <p>Rental Conditions:</p>
            <StyledRentalWrap>
              <StyledRentalRow>
                <StyledRentalConditions>
                  {car.rentalConditions.split('\n')[0]}
                </StyledRentalConditions>
                <StyledRentalConditions>
                  {car.rentalConditions.split('\n')[1]}
                </StyledRentalConditions>
              </StyledRentalRow>

              <StyledRentalRow>
                <StyledRentalConditions>
                  {car.rentalConditions.split('\n')[2]}
                </StyledRentalConditions>
                <StyledRentalConditions>
                  Mileage: {car.mileage.toLocaleString('en-US')}
                </StyledRentalConditions>
                <StyledRentalConditions>
                  Price: {car.rentalPrice}
                </StyledRentalConditions>
              </StyledRentalRow>
            </StyledRentalWrap>
          </StyledInfoBottom>
          <StyledModalLink>Rental car</StyledModalLink>
        </StyledModalWrap>
      </StyledModalCarBackdrop>
    )
  );
};

export default ModalCar;
