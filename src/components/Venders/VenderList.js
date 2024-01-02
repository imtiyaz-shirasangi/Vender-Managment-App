import React from "react";
import classes from './VenderList.module.css';

const VendorList = ({ vendors, onEdit, onDelete }) => {
  return (
    <div>
      <header>
        <h2>Vendor Lists</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Bank Account No.</th>
            <th>Bank Name</th>
            <th>Address Line 1</th>
            <th>Address Line 2</th>
            <th>City</th>
            <th>Country</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.bankAccountNo}</td>
              <td>{vendor.bankName}</td>
              <td>{vendor.addressLine1}</td>
              <td>{vendor.addressLine2}</td>
              <td>{vendor.city}</td>
              <td>{vendor.country}</td>
              <td>{vendor.zipCode}</td>
              <td>
                <button  onClick={() => onEdit(vendor.id)} className={classes.edit}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDelete(vendor.id)} className={classes.delete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorList;
