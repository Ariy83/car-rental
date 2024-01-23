import { useSelector } from 'react-redux';
import { selectFavCars } from '../../redux/selectors';
import { StyledFlex, StyledList } from '../carList/carList.styled';
import CarItem from '../CarItem/CarItem';

const FavList = () => {
  const favCars = useSelector(selectFavCars);

  return (
    <StyledFlex>
      <StyledList>
        {favCars?.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </StyledList>
    </StyledFlex>
  );
};

export default FavList;
