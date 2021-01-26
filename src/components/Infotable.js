import React from "react";

export default function InfoTable({
  brand,
  tradeName,
  firstAdmissionDate,
  fuelType,
}) {
  return (
    <div class="jumbotron">
      <h5>Trade Name</h5>
      <h4>
        {brand} {tradeName}
      </h4>
      <h5>Date of First Admission</h5>
      <h4>{firstAdmissionDate}</h4>
      <h5>Fuel Description</h5>
      <h4>{fuelType}</h4>
    </div>
  );
}
