/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const CustomersStatistics = () => {
  return (
    <div className="col-xl-4 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Customers Statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-project-0-mjvhu/embed/charts?id=63845f95-938e-4b6a-89d3-909609e1d3ab&maxDataAge=60&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};
export default CustomersStatistics;
