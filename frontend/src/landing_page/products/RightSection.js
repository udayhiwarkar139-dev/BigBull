import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
     
        <div className="col-6 p-5">
          <h1 className="fs-2 text-muted">{productName}</h1>
          <p className="mt-3 text-muted fs-6" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;