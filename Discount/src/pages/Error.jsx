import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="container text-center">

        <p className="display-1 fw-bold text-dark mb-2">
          404
        </p>

        <h1 className="h3 fw-bold mb-3">
          Page not found
        </h1>

        <p className="text-secondary mb-4">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="btn btn-dark rounded-pill px-4 fw-semibold"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}

export default Error;
