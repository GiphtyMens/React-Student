import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Welcome from "./containers/pages/welcome/Welcome";
import Home from "./containers/Home";
import Map from "./containers/pages/map/Map";
import MapDetail from "./containers/pages/map/MapDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Dashboard />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="map" element={<Map />} />
            <Route path=":mapId" element={<MapDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
