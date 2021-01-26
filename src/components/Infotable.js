import React from "react";

export default function Infotable({
  brand,
  tradeName,
  firstAdmissionDate,
  fuelType,
}) {
  return (
    <div>
      <h4>
        {brand} {tradeName}
      </h4>
      <h4>{firstAdmissionDate}</h4>
      <h4>{fuelType}</h4>
    </div>
  );
}
