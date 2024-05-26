import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Form from './screens/Form';
import ListMovies from './screens/ListMovies';
import MovieScreen from './screens/MovieScreen';
import Screen404 from './screens/Screen404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import 'normalize.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ListMovies" element={<ListMovies />} />
          <Route path="/MovieScreen" element={<MovieScreen />} />
          <Route path="*" element={<Screen404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
