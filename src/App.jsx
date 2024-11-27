import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExampleMaterialUI from "./components/ExampleMaterialUI";
import { InputMain } from "./components/InputMain/InputMain";
import { Register } from "./components/Register/Register";
import { Example } from "./components/Register/Example";
import { HomePageGame } from "./components/HomePageGame/HomePageGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="one" element={<ExampleMaterialUI />} />
        <Route path="/input-main" element={<InputMain />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Example />} />
        <Route path="/home-page-game" element={<HomePageGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
