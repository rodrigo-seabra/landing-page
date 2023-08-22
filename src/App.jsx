import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./global.css"
import "./app.css"


function App( props ) {
  return (
    <>
        <div className="Page">
          <Header/>
          <Main/>
           <Footer cor = "Noturno"/>
        </div>
    </>

  );
}

export default App;
