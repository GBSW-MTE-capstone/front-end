import React from "react";
import { Route } from "react-router-dom";

export const TourDetailsRouter = () => {
  return (
    <>
      <Route path="/tour/jomungukMuseum" element={<JomungukMuseum />} />{" "}
    </>
  );
};
