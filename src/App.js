import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
