import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editDataReq, postDataReq } from "../../Redux/Action/Action";
import Loader from "../Loader/Loader";

const RegistrationForm = () => {
  const state = useSelector((res) => res.ReducerSaga);
  let dispatch = useDispatch();
  let nav = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true before data loading
    // Simulate data loading delay
    setTimeout(() => {
      setLoading(false); // Set loading to false after data loading
    }, 1000); // Adjust the time as needed
  }, []);

  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    number: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  useEffect(() => {
    console.log(state.editObj);
    if (state.editObj) {
      setFormValues((prevValues) => ({
        ...prevValues,
        firstName: state.editObj.firstName || "",
        middleName: state.editObj.middleName || "",
        lastName: state.editObj.lastName || "",
        gender: state.editObj.gender || "",
        dateOfBirth: state.editObj.dateOfBirth || "",
        email: state.editObj.email || "",
        number: state.editObj.number || "",
        street: state.editObj.street || "",
        city: state.editObj.city || "",
        state: state.editObj.state || "",
        country: state.editObj.country || "",
        pincode: state.editObj.pincode || "",
      }));
    }
  }, [state.editObj]);

  useEffect(() => {
    if (state.editObj) {
      setFormValues(state.editObj);
    }
  }, [state.editObj]);

  const handleChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // console.log(value);
  };
  // const handleSelect = (name, value) => {
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  //   console.log(value);
  // };
  const handleDateChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (formValues.id) {
      dispatch(editDataReq(formValues, formValues.id)); // Update existing record
      await new Promise((resolve) => {
        toast.info("User Updated Successfully !!!", {
          position: "top-right",
          onClose: resolve, // Resolve the promise when the toast is closed
        });
      });
    } else {
      dispatch(postDataReq(formValues)); // Post new data
      await new Promise((resolve) => {
        toast.success("User Registered Successfully !!!", {
          position: "top-right",
          onClose: resolve, // Resolve the promise when the toast is closed
        });
      });
    }
    setFormValues(""); // Clear the form values
    setLoading(false);
    nav(`/table`);
  };
  

  return (
    <div className="registration-form">
      {loading ? (
        <Loader loading={loading} /> // Show loader while loading
      ) : (
        <form className="card">
          <div className="headings">
            <h1>Employee Registration Form</h1>
            <p className="mt-2">
              Please fill out the form to complete your registration. Thank you!
            </p>
          </div>
          <h4 className="mx-auto">Personal Information</h4>
          <hr />
          <div className="name-inputs ">
            <label htmlFor="firstname">
              Full Name<span className="text-danger">*</span>
            </label>
            <div className="name-input">
              <input
                className="form-control me-2"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                // onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                // onChange={(e) => handleChange('firstName', e.target.value)}
              />
              <input
                className="form-control me-2"
                type="text"
                placeholder="Middle Name"
                name="middleName"
                value={formValues.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="gender-and-dob">
            <div className="gender me-2">
              <label htmlFor="gender">
                Gender<span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                value={formValues.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option disabled value="">
                  Select the status
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="I prefer not to say">I prefer not to say</option>
              </select>
              {/* <select
              className="form-select"
              name="gender"
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              <option selected disabled value="selected">
                Select the status
              </option>
              <option value="Married">Married</option>
              <option value="Unmarried">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select> */}
            </div>
            <div className="date-of-birth ">
              <label htmlFor="dob">
                Date of Birth<span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="date"
                name="dateOfBirth"
                value={formValues.dateOfBirth}
                onChange={(e) =>
                  handleDateChange("dateOfBirth", e.target.value)
                }
              />
            </div>
          </div>
          <h4 className="mx-auto">Contact Information</h4>
          <hr />
          <div className="email-and-number">
            <div className="email-input me-2">
              <label htmlFor="email">
                E-mail<span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={formValues.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <div className="number-input ">
                <label htmlFor="number">
                  Mobile Number<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="number"
                  value={formValues.number}
                  onChange={(e) => handleChange("number", e.target.value)}
                />
              </div>
            </div>
          </div>
          <h4 className="mx-auto">Address</h4>
          <hr />
          {/* <textarea
          className="form-control"
          name="street"
          onChange={(e) => handleChange("street", e.target.value)}
        ></textarea> */}
          <textarea
            className="form-control"
            placeholder="Street Address"
            value={formValues.street}
            onChange={(e) => handleChange("street", e.target.value)}
          />
          <br />
          <div className="address-details">
            <input
              className="city-input form-control me-2"
              type="text"
              placeholder="City"
              name="city"
              value={formValues.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
            <input
              className="state-input form-control"
              type="text"
              placeholder="State / Province"
              name="state"
              value={formValues.state}
              onChange={(e) => handleChange("state", e.target.value)}
            />
          </div>
          <br />
          <div className="country-details ">
            <input
              className="country-input form-control me-2"
              type="text"
              placeholder="Country"
              name="country"
              value={formValues.country}
              onChange={(e) => handleChange("country", e.target.value)}
            />
            <input
              className="pincode-input form-control"
              type="number"
              placeholder="ZIP Code"
              name="pincode"
              value={formValues.pincode}
              onChange={(e) => handleChange("pincode", e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={(e) => handleSubmit()}
              className="submit-button"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
