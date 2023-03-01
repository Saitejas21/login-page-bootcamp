import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

//import App from "./App";
import Navbar from "./navbar";
import Login from "./login";
import textOut from "./text-out";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <Login />
    <textOut />
  </StrictMode>
);
