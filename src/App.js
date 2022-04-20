
import './App.css';
import Nav from './views/Nav/Nav';
import Home from './views/Components/Home';
import CategoryOverview from './views/Components/CategoryOverview';
import Category from './views/Components/Category';
import Product from './views/Components/Product';


function App() {
  return (
    <div className="container-fluid">


      {/* <Home></Home> */}
      {/* <CategoryOverview></CategoryOverview> */}
      {/* <Category></Category> */}
      <Product></Product>

    </div>
  );
}

export default App;
