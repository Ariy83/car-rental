import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>
        It looks like you are lost, the page you are looking for is not
        available!
      </p>
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
};

export default NotFound;
