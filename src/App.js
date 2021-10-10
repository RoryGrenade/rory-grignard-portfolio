import React, {useEffect} from "react";
import WebFont from "webfontloader";
import './scss/App.scss';
import Header from "./Header";
import ExampleContent from "./ExampleContent"

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
      <Header />
      <ExampleContent />
    </div>
  );
}

export default App;
