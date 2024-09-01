import "./App.css"
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Home/>
        <Auth/>
        <Footer/>
    </div>
  );
}

export default App;