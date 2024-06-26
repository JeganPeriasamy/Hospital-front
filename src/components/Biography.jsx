import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who We Are</h3>
          <p>
          Vision : Zee care  will be a health care leader in India by providing excellent quality medical care and services to patients in a family focused environment.
          </p>
          <p>
          Mission : Zee Care will improve the health and well being of the community by providing world class patient care, education and training.
          </p>

        </div>
      </div>
    </>
  );
};

export default Biography;
