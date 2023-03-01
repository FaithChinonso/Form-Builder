import logo from "./logo.svg";
import "./App.css";
import ParentContainer from "./components/ParentContainer";
import Builder from "./components/Builder";
import { useState } from "react";
import PreviewPage from "./components/PreviewPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forms from "./components/Forms";

function App() {
  const [showBuilder, setShowBuilder] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ParentContainer>
          {showBuilder ? (
            <Builder setShowBuilder={setShowBuilder} />
          ) : (
            <PreviewPage setShowBuilder={setShowBuilder} />
          )}
        </ParentContainer>
      ),
    },
    {
      path: "/forms",
      element: (
        <ParentContainer>
          <Forms />
        </ParentContainer>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
