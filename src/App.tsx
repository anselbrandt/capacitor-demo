import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="m-1">
      <h1>Capacitor Demo</h1>
      <Outlet />
    </div>
  );
}

export default App;
