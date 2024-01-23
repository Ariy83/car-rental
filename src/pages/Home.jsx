import Header from '../components/Header/Header';
import { StyledFlex } from '../components/carList/carList.styled';

const Home = () => {
  return (
    <>
      <Header />
      <StyledFlex>
        <h1>An application that provides car rental services in Ukraine</h1>
        <h2>The application consists of 3 pages:</h2>
        <ul
          style={{
            width: '80%',
            textAlign: 'center',
            lineHeight: '1.7',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          <li>
            the home page with a general description of the services provided by
            the company;
          </li>
          <li>
            a page containing a catalog of cars of various configurations, which
            the user can filter by brand, price by the hour of car rental and
            the number of kilometers covered by the car during its operation
            (mileage);
          </li>
          <li>page with ads that have been added to favorites by the user.</li>
        </ul>
      </StyledFlex>
    </>
  );
};

export default Home;
