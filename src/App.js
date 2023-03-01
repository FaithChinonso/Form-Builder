import logo from "./logo.svg";
import "./App.css";
import ParentContainer from "./components/ParentContainer";
import Builder from "./components/Builder";
import { useState } from "react";
import PreviewPage from "./components/PreviewPage";

function App() {
  const [showBuilder, setShowBuilder] = useState(true);
  return (
    <ParentContainer>
      {showBuilder ? (
        <Builder setShowBuilder={setShowBuilder} />
      ) : (
        <PreviewPage setShowBuilder={setShowBuilder} />
      )}
    </ParentContainer>
  );
}

export default App;
