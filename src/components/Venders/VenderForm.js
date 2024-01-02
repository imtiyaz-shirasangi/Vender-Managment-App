import React, { useState } from "react";
import classes from "./VenderForm.module.css";

const VendorForm = ({ onSubmit }) => {
  const [vendor, setVendor] = useState({
    name: "",
    bankAccountNo: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor((prevVendor) => ({ ...prevVendor, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(vendor);
    alert("Added Successfully");
    setVendor({
      name: "",
      bankAccountNo: "",
      bankName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      zipCode: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label className={classes.control1}>Vendor Name</label>
        <input
          type="text"
          name="name"
          value={vendor.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="bankAccountNo" className={classes.control1}>
          Bank Account No
        </label>
        <input
          type="text"
          id="bankAccountNo"
          name="bankAccountNo"
          value={vendor.bankAccountNo}
          onChange={handleChange}
          required
        />

        <br />
        <label htmlFor="bankName" className={classes.control1}>
          Bank Name
        </label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          value={vendor.bankName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="addressLine1" className={classes.control1}>
          Address Line 1
        </label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={vendor.addressLine1}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="addressLine2" className={classes.control1}>
          Address Line 2
        </label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={vendor.addressLine2}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="city" className={classes.control1}>
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={vendor.city}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="zipCode" className={classes.control1}>
          Zip Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={vendor.zipCode}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="country" className={classes.control1}>
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={vendor.country}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className={classes.button}>
          Add Vendor
        </button>
      </form>
    </>
  );
};

export default VendorForm;
