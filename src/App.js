
import './App.css';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import Menu from './Menu/Menu';
import background from './assests/images/baby-background.jpg'


function App() {
  const myStyle={
    backgroundImage: `url(${background})`,
    'min-height': '1000px'
  }
  return (
    <div className="App" style={myStyle}>
      <Header/>
      <Menu/>
      <Footer/>

        </div>
  );
}

export default App;
