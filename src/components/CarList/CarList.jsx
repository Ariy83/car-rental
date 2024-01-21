import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCarsThunk } from '../../redux/operations';
import { selectCars, selectPage } from '../../redux/selectors';
import CarItem from '../CarItem/CarItem';

const CarList = () => {
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCarsThunk(page));
  }, [dispatch, page]);

  return (
    <ul>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarList;
