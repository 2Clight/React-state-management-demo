// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsingUseState from "./usingUseState"; // Import the component you want to route to
import UsingUseReducer from "./UsingUseReducer"; // Import the UsingUseReducer component
import UsingUseMemo from "./UsingUseMemo"
import UsingUseCallback from "./UsingUseCallback"; // Import the UsingUseCallback component
import UsingUseEffect from "./UsingUseEffect";
import UsingUseRef from "./UsingUseRef";
import UsingUseContext from "./UsingUseContext";
import UsingReactQuery from "./UsingReactQuery";
import Home from "./Home"; // Import the Home component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/use-state" element={<UsingUseState />} /> {/* Component route */}
        <Route path="/use-reducer" element={<UsingUseReducer />} /> {/* UsingUseReducer route */}
        <Route path="/use-memo" element={<UsingUseMemo />} /> {/* UsingUseReducer route */}
        <Route path="/use-callback" element={<UsingUseCallback />} /> {/* UsingUseCallback route */}
        <Route path="/use-effect" element={<UsingUseEffect />} /> {/* UsingUseEffect route */}
        <Route path="/use-ref" element={<UsingUseRef />} /> {/* UsingUseEffect route */}
        <Route path="/use-context" element={<UsingUseContext />} />  
        <Route path="/use-reactquery" element={<UsingReactQuery />} />  


      </Routes>
    </Router>
  );
}

export default App;
