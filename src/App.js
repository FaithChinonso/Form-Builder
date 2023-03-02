import logo from "./logo.svg";
import "./App.css";
import ParentContainer from "./components/ParentContainer";
import Builder from "./components/Builder";
import { useState } from "react";
import PreviewPage from "./components/PreviewPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";

function App() {
  const [showBuilder, setShowBuilder] = useState(true);

  return (
    <ParentContainer>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              {showBuilder ? (
                <Builder setShowBuilder={setShowBuilder} />
              ) : (
                <PreviewPage setShowBuilder={setShowBuilder} />
              )}
            </div>
          }
          exact
        />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </ParentContainer>
  );
}

export default App;
