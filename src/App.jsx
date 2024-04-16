import AppLayout from "./sections/AppLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-darkBlue">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
