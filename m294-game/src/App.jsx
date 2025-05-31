import "./App.css";
import { Routes, Route, Link } from "react-router-dom";


import Home from './pages/Home';
import Game from "./pages/Game";
import Impressum from "./pages/Impressum";
import Rules from "./pages/Rules";
import Layout from "./components/layout";
import PageNotFound from "./pages/PageNotFound";


// App.jsx ist die Hauptkomponente der App
// Hier wird die App initialisiert und die erste Frage angezeigt
function App() {
  return (




    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Game />} />
        <Route path="/regeln" element={<Rules />} />
        <Route path="/blabli" element={<Impressum />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>

    </Routes>

  );
}


export default App;

