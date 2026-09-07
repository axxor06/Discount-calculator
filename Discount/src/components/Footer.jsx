import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">

        <div className="row g-5">

          <div className="col-lg-5">
            <h5 className="fw-bold mb-3">
              Discount Calculator
            </h5>

            <p className="text-white-50 mb-4">
              A simple way to calculate discounts,
              savings, and final prices.
            </p>

            <Link
              to="/calculator"
              className="btn btn-light rounded-pill px-4 fw-semibold"
            >
              Calculate Discount
            </Link>
          </div>


          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">
              Explore
            </h6>

            <div className="d-flex flex-column gap-2">

              <Link
                to="/"
                className="text-white-50 text-decoration-none"
              >
                Home
              </Link>

              <Link
                to="/calculator"
                className="text-white-50 text-decoration-none"
              >
                Calculator
              </Link>

            </div>
          </div>


          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">
              Calculator
            </h6>

            <div className="d-flex flex-column gap-2">

              <span className="text-white-50">
                Discount
              </span>

              <span className="text-white-50">
                Savings
              </span>

              <span className="text-white-50">
                Final Price
              </span>

            </div>
          </div>


          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">
              Simple & Clear
            </h6>

            <p className="text-white-50 small mb-0">
              Enter two numbers and get the answer.
              That's all there is to it.
            </p>
          </div>

        </div>


        <hr className="border-secondary my-4" />


        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">

          <p className="text-white-50 small mb-0">
            © {new Date().getFullYear()} Discount Calculator
          </p>

          <p className="text-white-50 small mb-0">
            Simple. Fast. Accurate.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
