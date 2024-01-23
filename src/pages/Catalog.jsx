import Header from '../components/Header/Header';
import CarList from '../components/carList/carList';
import ModalCar from '../components/ModalCar/ModalCar';
import SelectCars from '../components/SelectCars/SelectCars';

const Catalog = () => {
  return (
    <>
      <Header />
      <SelectCars />
      <CarList />
      <ModalCar />
    </>
  );
};

export default Catalog;
