import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './views/Nav/Nav';
import Home from './views/Components/Home';
import CategoryOverview from './views/Components/CategoryOverview';
import Category from './views/Components/Category';
import Product from './views/Components/Product';
import { Button } from '@mui/material'

function App() {
  return (
    <div className="container-fluid">


      {/* <Home></Home> */}
      {/* <CategoryOverview></CategoryOverview> */}
      {/* <Category></Category> */}
      {/* <Product></Product> */}

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/category/*' element={<CategoryOverview></CategoryOverview>}></Route>

      </Routes>

    </div>
  );
}

export default App;
