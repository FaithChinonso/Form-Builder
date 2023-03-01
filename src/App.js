import logo from "./logo.svg";
import "./App.css";
import ParentContainer from "./components/ParentContainer";
import Builder from "./components/Builder";

function App() {
  return (
    <ParentContainer>
      <Builder />
    </ParentContainer>
  );
}

export default App;
