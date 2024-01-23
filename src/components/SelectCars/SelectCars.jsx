import { useForm, useWatch } from 'react-hook-form';
import {
  CarFilterWrapper,
  DropdownLabel,
  DropdownSelect,
  MileageInputs,
  MileageWrapper,
  SelectButton,
  SelectForm,
  SelectedPrice,
  TextInput,
  VerticalLine,
} from './SelectCars.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarBrands, selectCars } from '../../redux/selectors';
import { useState } from 'react';
import {
  filterByBrand,
  filterByMileage,
  filterByPrice,
  filterByText,
} from './filters';
import { addFilteredCars } from '../../redux/carSlice';

const SelectCars = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const carBrands = useSelector(selectCarBrands);

  const mileageFrom = useWatch({ control, name: 'mileageFrom' }) || '';
  const mileageTo = useWatch({ control, name: 'mileageTo' }) || '';
  const maxPrice = 500;
  const step = 10;

  const [filters, setFilters] = useState({
    selectedBrand: '',
    textInput: '',
    selectedPrice: null,
  });

  const handleBrandChange = event => {
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedBrand: event.target.value,
    }));
  };

  const handleTextChange = event => {
    setFilters(prevFilters => ({
      ...prevFilters,
      textInput: event.target.value,
    }));
  };

  const handlePriceChange = event => {
    const price =
      event.target.value === '' ? null : parseInt(event.target.value, 10);
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedPrice: price,
    }));
  };

  const submit = () => {
    const filteredCars = filterByText(
      filterByBrand(
        filterByPrice(cars, filters.selectedPrice),
        filters.selectedBrand
      ),
      filters.textInput
    );

    const finalFilteredCars = filterByMileage(
      filteredCars,
      mileageFrom,
      mileageTo
    );

    dispatch(addFilteredCars(finalFilteredCars));
    reset();
  };

  return (
    <SelectForm onSubmit={handleSubmit(submit)}>
      <CarFilterWrapper>
        <DropdownLabel>Car Brand:</DropdownLabel>
        <DropdownSelect
          value={filters.selectedBrand}
          onChange={handleBrandChange}
        >
          <option value=""></option>
          {carBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </DropdownSelect>
        <TextInput
          type="text"
          placeholder="Enter the text"
          value={filters.textInput}
          onChange={handleTextChange}
        />
      </CarFilterWrapper>

      <CarFilterWrapper>
        <DropdownLabel>Price/1 hour:</DropdownLabel>
        <DropdownSelect
          value={filters.selectedPrice || ''}
          onChange={handlePriceChange}
        >
          <option value="">To $</option>
          {Array.from(
            { length: Math.ceil(maxPrice / step) + 1 },
            (_, index) => (
              <option key={index * step} value={index * step}>
                {index * step}
              </option>
            )
          )}
        </DropdownSelect>
        {filters.selectedPrice !== null && (
          <SelectedPrice>To ${filters.selectedPrice}</SelectedPrice>
        )}
      </CarFilterWrapper>

      <MileageWrapper>
        <DropdownLabel>Car mileage / km</DropdownLabel>
        <MileageInputs>
          <input
            type="text"
            placeholder="From"
            {...register('mileageFrom')}
            value={mileageFrom}
          />
          <VerticalLine />
          <input
            type="text"
            placeholder="To"
            {...register('mileageTo')}
            value={mileageTo}
          />
        </MileageInputs>
      </MileageWrapper>

      <SelectButton type="submit">Search</SelectButton>
    </SelectForm>
  );
};

export default SelectCars;
