import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function NotFound() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-rose-300 from-rose-600">
          Error 404
        </span>{" "}
        Not Found
      </h1>

      <Button variant="destructive">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
