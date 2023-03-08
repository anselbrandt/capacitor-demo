import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);

    console.log("submit!");

    setTimeout(() => {
      setLoading(false);
      navigate("/app/dashboard");
    }, 1500);
  };
  return (
    <main style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-col items-center gap-10">
          <div>
            <label>Email</label>
            <input type="text" className="border"></input>
          </div>

          <div>
            <label>Password</label>
            <input type="password" className="border"></input>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          )}
        </div>
      </form>
    </main>
  );
};

export default Login;
