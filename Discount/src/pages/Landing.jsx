import { Link } from "react-router-dom";

function Landing() {
  return (
    <main>

      

      <section className="position-relative overflow-hidden">

        <img
          src="/discount-hero.png"
          alt=""
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />

        <div
          className="position-relative d-flex align-items-center justify-content-center text-center"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >

          <div className="container">

            <div className="row justify-content-center">

              <div className="col-11 col-md-8 col-lg-6">

                <p className="small fw-semibold text-dark mb-3">
                  DISCOUNT CALCULATOR
                </p>

                <h1 className="display-3 fw-bold text-dark mb-4">
                  Know your savings
                  <br />
                  before you pay.
                </h1>

                <p className="lead text-secondary mb-4">
                  Quickly calculate your discount, savings,
                  and final price without complicated formulas.
                </p>

                <Link
                  to="/calculator"
                  className="btn btn-dark btn-lg rounded-pill px-4 fw-semibold"
                >
                  Calculate Discount
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}

      <section className="py-5 bg-white">

        <div className="container py-4">

          <div className="text-center mb-5">

            <p className="small fw-semibold text-secondary mb-2">
              SIMPLE BY DESIGN
            </p>

            <h2 className="fw-bold mb-3">
              Just the numbers you need.
            </h2>

            <p className="text-secondary mb-0">
              No complicated formulas. No unnecessary steps.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="h-100 border rounded-4 p-4">

                <div className="display-6 fw-bold text-dark mb-3">
                  %
                </div>

                <h5 className="fw-bold">
                  Discount
                </h5>

                <p className="text-secondary mb-0">
                  Enter the percentage you're getting off
                  the original price.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="h-100 border rounded-4 p-4">

                <div className="display-6 fw-bold text-dark mb-3">
                  ₹
                </div>

                <h5 className="fw-bold">
                  Savings
                </h5>

                <p className="text-secondary mb-0">
                  See exactly how much money you save
                  from the discount.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="h-100 border rounded-4 p-4">

                <div className="display-6 fw-bold text-dark mb-3">
                  =
                </div>

                <h5 className="fw-bold">
                  Final Price
                </h5>

                <p className="text-secondary mb-0">
                  Get the final amount you'll actually
                  need to pay.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-5 bg-light">

        <div className="container py-4">

          <div className="text-center">

            <h2 className="fw-bold mb-3">
              Got a discount?
            </h2>

            <p className="text-secondary mb-4">
              Find out what you'll actually pay.
            </p>

            <Link
              to="/calculator"
              className="btn btn-dark rounded-pill px-4 fw-semibold"
            >
              Open Calculator
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Landing;
