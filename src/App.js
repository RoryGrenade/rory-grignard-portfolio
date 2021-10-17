import React, {useEffect} from "react";
import WebFont from "webfontloader";
import './scss/App.scss';
import HeaderElement from "./HeaderElement";
import MainElement from "./MainElement";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans:400,700', 'Source Code Pro:600']
      }
    })
  }, []);

  return (
    <div className="App">
      <HeaderElement />
      <MainElement />
    </div>
  );
}

export default App;
