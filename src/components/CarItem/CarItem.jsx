import Heart from '../Heart/Heart';
import { StyledLi } from './CarItem.styled';

/* eslint-disable react/prop-types */
const CarItem = ({ car }) => {
  //   const cars = useSelector(selectCars);

  //   const dispatch = useDispatch();

  return (
    <StyledLi>
      <img src={car.img} alt={car.description} />
      <div>
        <p>
          {car.make} <span>{car.model}</span>, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <p>
        {car.address.split(',').slice(1).join(' |')} | {car.rentalCompany} |
        Premium | {car.type.charAt(0) + car.type.substring(1).toLowerCase()} |
        {car.model} | {car.id} | {car.functionalities[0]}
      </p>
      <button>Learn more</button>
      <Heart />
    </StyledLi>
  );
};

export default CarItem;
