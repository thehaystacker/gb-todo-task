import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./components/pages/create";
import Update from "./components/pages/update";
import { TaskProvider } from "./contexts/task";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </TaskProvider>
    </div>
  );
}

export default App;
