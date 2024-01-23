import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCarsThunk } from '../../redux/operations';
import { loadMore } from '../../redux/carSlice';
import {
  selectCars,
  selectFilteredCars,
  selectIsLoading,
  selectPage,
} from '../../redux/selectors';
import CarItem from '../CarItem/CarItem';
import { StyledFlex, StyledList, StyledLoadMore } from './carList.styled';

const CarList = () => {
  let page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(selectFilteredCars);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchAllCarsThunk(1));
    }
  }, [cars, cars.length, dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchAllCarsThunk(page));
    }
  }, [dispatch, page]);

  return (
    <StyledFlex>
      <StyledList>
        {filteredCars.length === 0
          ? cars?.map(car => <CarItem key={car.id} car={car} />)
          : filteredCars?.map(car => <CarItem key={car.id} car={car} />)}
      </StyledList>
      {page < 3 && (
        <StyledLoadMore onClick={() => dispatch(loadMore())}>
          {isLoading ? 'Loading...' : 'Load more'}
        </StyledLoadMore>
      )}
    </StyledFlex>
  );
};

export default CarList;
