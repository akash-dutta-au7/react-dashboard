import { BrowserRouter } from "react-router-dom";
import Route from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
