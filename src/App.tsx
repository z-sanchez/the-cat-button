import { usePwaServiceWorker } from "./hooks/usePwa";
import { CollectionPage } from "./pages/CollectionPage";
// import { ConstructionPage } from "./pages/ConstructionPage";
import { Homepage } from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router";

function App() {
  usePwaServiceWorker();

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      {/* <Route path="/construction" element={<ConstructionPage />}></Route> */}
      <Route path="/collection" element={<CollectionPage />}></Route>
    </Routes>
  );
}

export default App;
