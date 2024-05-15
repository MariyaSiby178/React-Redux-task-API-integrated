import React, { useCallback, useEffect, useState } from "react";
import { FaPencil, FaTrashCan, FaTrash } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisteredDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDataReq, getDataReq, getIdReq } from "../../Redux/Action/Action";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const RegisteredDetails = () => {
  const state = useSelector((state) => state.ReducerSaga);
  console.log(state);
  let dispatch = useDispatch();
  let nav = useNavigate();
  const [array, setArray] = useState(null);
  const [loading, setLoading] = useState(false);

  const get = useCallback(() => {
    dispatch(getDataReq());
  }, [dispatch]);

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    setLoading(true); // Set loading to true before data loading
    // Simulate data loading delay
    setTimeout(() => {
      setLoading(false); // Set loading to false after data loading
    }, 1000); // Adjust the time as needed
  }, []);


  useEffect(() => {
    setArray(state.details);
  }, [state]);

  const handleDelete = useCallback(
    (info) => {
      console.log(info.id);
      dispatch(deleteDataReq(info.id)); // Assuming `deleteDataReq` is your delete action creator
      toast.error("User Deleted !!!", {
        position: "top-right",
      });
    },
    [dispatch]
  );

  const handleEdit = (info) => {
    console.log(info);
    dispatch(getIdReq(info.id)); // Get the data of the selected member
    nav(`/form/${info.id}`); // Navigate to the edit form with the member's id
  };

  //   const handleDelete=(info)=>{
  // console.log(info);
  // dispatch((getDataReq(info.id)))
  //   }

  return (
    <div className="registered-details">
      {loading ? (
        <Loader loading={loading} /> // Show loader while loading
      ) : (
      <div className="card">
        <div className="heading">
          <h1 className="mx-auto">Registered Members</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-light">
            <thead className="">
              <tr className="">
                <th scope="col">S.No</th>
                <th scope="col">First Name</th>
                <th scope="col">Middle Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Marrital Status</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">E-mail</th>
                <th scope="col">Mobile number</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th scope="col">Pincode</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {array &&
                array.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.middleName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.street}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.country}</td>
                    <td>{item.pincode}</td>
                    <td>
                      <FaPencil
                        className="mx-1 text-success edit_icon"
                        onClick={() => handleEdit(item)}
                      />
                      <FaTrashCan
                        className="ms-1 text-danger delete_icon"
                        onClick={() => handleDelete(item)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  );
};

export default RegisteredDetails;
