import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Сatalog of cars</NavLink>
        <NavLink to="/favorite">Favorite cars</NavLink>
      </StyledHeader>
    </>
  );
};

export default Header;
