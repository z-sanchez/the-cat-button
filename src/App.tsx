import "./App.css";
import { usePwaServiceWorker } from "./hooks/usePwa";
// import { ConstructionPage } from "./pages/ConstructionPage";
import { HomePage } from "./pages/Home";
import { NewHomePage } from "./pages/NewHome";

function App() {
  usePwaServiceWorker();

  return <NewHomePage />;
  // return <ConstructionPage />;
}

export default App;
