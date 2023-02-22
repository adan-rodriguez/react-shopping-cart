import { createRoot } from "react-dom/client";
import App from "./App";
import { FiltersProvider } from "./contexts/filters";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
