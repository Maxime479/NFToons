import logo from './assets/lazy_lion.png';
import './css/App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./js/pages/Home";
import NftDetails from "./js/pages/Modal";





export default function App() {


    const navigate = useNavigate();


  return (
      <div>
          <div>
              <Routes>
                  <Route path="/" element={<Start nav={navigate} />} />
                  <Route path="/home" element={<Home nav={navigate} />} />
                  <Route path="/home/:id" element={<NftDetails />} />
              </Routes>
          </div>
      </div>
  );
}


function Start({...props}) {

    const navigate = props.nav


    const navigateToHome = () => {
        navigate('/home');
    };

    // const navigateStart = () => {
    //     navigate('/');
    // };


    return (
        <div className="App">
            <header className="App-header">

                <img
                    src={logo}
                    className="App-logo"
                    alt="main_logo"
                    onClick={() => navigateToHome()}
                />

                <p>
                    L'aventure NFToons commence ici.
                </p>
            </header>
        </div>
    );
}
