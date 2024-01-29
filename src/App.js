import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent.jsx";
const whatIWannaSay = "Bear with Me";
const newAnchor = "Imma learn ";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          className="App-logo"
          image="https://placebear.com/g/200/300"
          imageAlt="bear-pic"
        />
        <h1>{whatIWannaSay}</h1>
        <h3> {newAnchor}</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <ButtonComponent toClick="CLICCAMI" onclick="https://placebear.com/" />
      </header>
    </div>
  );
}

export default App;
