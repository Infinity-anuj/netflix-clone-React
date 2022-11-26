import './App.css'   // mention the path of file  . is 
import Nav from './Components/Nav/Nav';
import Header from './Components/Nav/header/Header'
import Content from './Components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key : 'c591008e758cf37f649a782aaa18e048'
};

const App = () => {
  return <div>
    <Nav />
    <Header />
    <Content />
  </div>;         //only single element is returned. 
  
};

export default App; // exporting a function   