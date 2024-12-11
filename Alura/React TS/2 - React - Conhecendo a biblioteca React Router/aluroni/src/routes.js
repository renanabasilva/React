import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} index />
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>
    </Router>
  );
}