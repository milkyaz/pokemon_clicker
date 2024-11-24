import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExampleMaterialUI from "./components/ExampleMaterialUI";
import InputMain from "./components/InputMain/InputMain";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="one" element={<ExampleMaterialUI />} />
        <Route path="two" element={<InputMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
