import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
