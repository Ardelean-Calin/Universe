import React from "react";

const Spinner = () => (
  <div>
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue darken-1-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
