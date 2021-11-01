import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { data.map((autor) => <p> {`Nome completo: ${autor.firstName} ${autor.middleName} ${autor.lastName}`} </p>)}
        </header>
    </div>
  );
}

export default App;
