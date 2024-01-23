export const filterByBrand = (cars, selectedBrand) => {
  if (!selectedBrand) return cars;
  return cars.filter(car => car.make === selectedBrand);
};

export const filterByText = (cars, textInput) => {
  if (!textInput) return cars;
  const searchText = textInput.toLowerCase();
  return cars.filter(car => car.make.toLowerCase().includes(searchText));
};

export const filterByPrice = (cars, selectedPrice) => {
  if (!selectedPrice) return cars;
  return cars.filter(
    car => parseFloat(car.rentalPrice.slice(1)) <= selectedPrice
  );
};

export const filterByMileage = (cars, from, to) => {
  const fromValue = parseInt(from, 10);
  const toValue = parseInt(to, 10);

  if (!from && !to) return cars;

  return cars.filter(car => {
    const carMileage = car.mileage || 0;
    return (!from || carMileage >= fromValue) && (!to || carMileage <= toValue);
  });
};
