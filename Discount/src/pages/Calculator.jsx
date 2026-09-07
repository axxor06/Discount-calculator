import React, { useState } from "react";

function Calculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);
  const [saving, setSaving] = useState(null);

  function calculateDiscount() {
    const originalPrice = Number(price);
    const discountPercent = Number(discount);

    if (
      originalPrice <= 0 ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      return;
    }

    const discountAmount =
      (originalPrice * discountPercent) / 100;

    const finalPrice =
      originalPrice - discountAmount;

    setResult(finalPrice);
    setSaving(discountAmount);
  }

  function clearCalculator() {
    setPrice("");
    setDiscount("");
    setResult(null);
    setSaving(null);
  }

  return (
    <main className="min-vh-100 bg-light py-5">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-12 col-sm-10 col-md-7 col-lg-5">

            <div className="bg-white border p-4 p-md-5">

              <h1 className="h3 fw-bold mb-2">
                Discount Calculator
              </h1>

              <p className="text-secondary mb-4">
                Enter the price and discount percentage.
              </p>


              <div className="mb-3">

                <label className="form-label">
                  Original Price
                </label>

                <div className="input-group">

                  <span className="input-group-text">
                    ₹
                  </span>

                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                </div>

              </div>


              <div className="mb-3">

                <label className="form-label">
                  Discount
                </label>

                <div className="input-group">

                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="form-control"
                    placeholder="Enter discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />

                  <span className="input-group-text">
                    %
                  </span>

                </div>

              </div>


              {result !== null && (
                <div className="border-top border-bottom py-3 mb-3">

                  <p className="text-secondary mb-1">
                    Final Price
                  </p>

                  <h2 className="h3 fw-bold mb-1">
                    ₹{result.toFixed(2)}
                  </h2>

                  <p className="text-secondary mb-0">
                    You save ₹{saving.toFixed(2)}
                  </p>

                </div>
              )}


              <button
                type="button"
                className="btn btn-dark w-100 mb-2"
                onClick={calculateDiscount}
              >
                Calculate
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={clearCalculator}
              >
                Clear
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Calculator;
