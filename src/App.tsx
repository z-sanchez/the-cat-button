import "./App.css";
import { usePwaServiceWorker } from "./hooks/usePwa";
// import { ConstructionPage } from "./pages/ConstructionPage";
import { HomePage } from "./pages/Home";

function App() {
  usePwaServiceWorker();

  return <HomePage />;
  // return <ConstructionPage />;
}

export default App;
