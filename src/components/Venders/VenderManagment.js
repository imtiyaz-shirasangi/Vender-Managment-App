import React, { useState } from "react";
import VendorForm from "./VenderForm";
import classes from "./VenderManagment.module.css";

function VenderManagment() {
  const [vendors, setVendors] = useState([]);
  const [editVendorId, setEditVendorId] = useState(null);

  const addVendor = (vendor) => {
    if (editVendorId !== null) {
      // Editing existing vendor
      const updatedVendors = vendors.map((v) =>
        v.id === editVendorId ? { ...v, ...vendor } : v
      );
      setVendors(updatedVendors);
      setEditVendorId(null);
    } else {
      // Adding new vendor
      setVendors([...vendors, { ...vendor, id: Date.now() }]);
    }
  };

  return (
    <section className={classes.managment}>
      <VendorForm onSubmit={addVendor} />
    </section>
  );
}

export default VenderManagment;
