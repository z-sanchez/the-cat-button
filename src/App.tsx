import "./App.css";
import { usePwaServiceWorker } from "./hooks/usePwa";
import { ConstructionPage } from "./pages/ConstructionPage";

function App() {
  usePwaServiceWorker();

  return <ConstructionPage />;
}

export default App;
