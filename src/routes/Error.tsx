import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="p-1">
      <p>There's nothing here!</p>
      <Link
        to="/"
        className="text-blue-600 dark:text-blue-500 hover:underline"
      >
        Back home!
      </Link>
    </main>
  );
};

export default Error;
