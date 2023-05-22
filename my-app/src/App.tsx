import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllContinents from './pages/AllContinents';
import ContinentDetails from './pages/ContinentDetails';
import CountryDetails from './pages/CountryDetails';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllContinents />} />
        <Route path='/continent-details/:code' element={<ContinentDetails />} />
        <Route path='/country-details/:code' element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  )
}


function App() {
  return (
    <Router />
  );
}

export default App;
