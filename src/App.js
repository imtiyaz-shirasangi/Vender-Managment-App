import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Fragment, useState } from "react";
import LoginForm from "./components/Header/LoginForm";
import NavigationBar from "./components/Header/NavigationBar";
import ResetPassword from "./components/Header/ResetPassword";
import VendorForm from "./components/Venders/VenderForm";
import VendorList from "./components/Venders/VenderList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      setVendors([...vendors, { ...vendor, id: Date.now() }]);
    }
  };

  const editVendor = (id) => {
    setEditVendorId(id);
    // You may want to pre-fill the form with the vendor details for editing
    console.log("editing clicked");
  };

  const deleteVendor = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vendor?"
    );
    if (confirmDelete) {
      setVendors(vendors.filter((vendor) => vendor.id !== id));
      setEditVendorId(null);
      console.log("deleted");
    }
  };

  return (
      <Switch>
      <Route path="/" exact>
        <LoginForm />
      </Route>
      <Route path="/navigation">
        <NavigationBar />
      </Route>
      <Route path="/resetpassword">
        <ResetPassword />
      </Route>
      <Route path="/vender">
        <VendorForm onSubmit={addVendor} />
      </Route>
      <Route path="/venderlist" exact>
        <VendorList
          vendors={vendors}
          onEdit={editVendor}
          onDelete={deleteVendor}
        />
      </Route>
    </Switch>
  );
};

export default App;
