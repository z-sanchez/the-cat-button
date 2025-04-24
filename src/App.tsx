import "./App.css";
import { usePwaServiceWorker } from "./hooks/usePwa";
// import { ConstructionPage } from "./pages/ConstructionPage";
import { Homepage } from "./pages/HomePage";

function App() {
  usePwaServiceWorker();

  return <Homepage />;
  // return <ConstructionPage />;
}

export default App;
