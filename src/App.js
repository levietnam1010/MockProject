import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav/Nav';
import Home from './views/Components/Home';
import CategoryOverview from './views/Components/CategoryOverview';
import Category from './views/Components/Category';


function App() {
  return (
    <div className="container-fluid">


      {/* <Home></Home>
       <CategoryOverview></CategoryOverview> */}
      <Category></Category>


    </div>
  );
}

export default App;
