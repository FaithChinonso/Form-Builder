import logo from "./logo.svg";
import "./App.css";
import ParentContainer from "./components/ParentContainer";
import Builder from "./components/Builder";
import { useState } from "react";
import PreviewPage from "./components/PreviewPage";
import Modal from "./components/Modal";

function App() {
  const [showBuilder, setShowBuilder] = useState(true);
  return (
    <ParentContainer>
      {showBuilder ? (
        <Builder setShowBuilder={setShowBuilder} />
      ) : (
        <PreviewPage setShowBuilder={setShowBuilder} />
      )}
      <Modal />
    </ParentContainer>
  );
}

export default App;
