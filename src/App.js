import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./components/Write";
import Read from "./components/Read";
import Update from "./components/Update";
import UpdateWrite from "./components/UpdateWrite.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Write />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/updateWrite/:firebaseId" element={<UpdateWrite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
