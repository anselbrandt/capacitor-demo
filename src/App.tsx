import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="m-1" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <h1>Capacitor Demo</h1>
      <Outlet />
    </div>
  );
}

export default App;
