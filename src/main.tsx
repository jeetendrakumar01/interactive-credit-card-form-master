import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CardProvider } from "./context/CardContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CardProvider>
    <App />
  </CardProvider>
);
