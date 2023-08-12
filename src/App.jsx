import "./App.css";
import Navbar from "./components/Navbar";

import { NavProvider } from "./context/NavContext";
import { PhotosProvider } from "./context/PhotosContext";

import View from "./components/View";

function App() {
  return (
    <PhotosProvider>
      <NavProvider>
        <main>
          <Navbar />
          <View />
        </main>
      </NavProvider>
    </PhotosProvider>
  );
}

export default App;
