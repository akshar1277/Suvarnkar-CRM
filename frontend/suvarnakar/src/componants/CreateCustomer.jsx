import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import { State, City } from "country-state-city";
import { toast } from 'react-toastify';
import axios from "axios";
import { toggleSidebar } from "../features/sidebarToggleSlice";
import { useSelector, useDispatch } from 'react-redux';

function CreateCustomer() {
  const countryCode = "IN";
  const stateoptions = State.getStatesOfCountry(countryCode).map((state) => ({
    value: state.name,
    displayValue: state.name,
  }));

  const [selectState, setSelectState] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [brithDate, setBrithDate] = useState();
  const [anniversaryDate, setAnniversaryDate] = useState();
  // const [state, setState] = useState();
  const [city, setCity] = useState();
  const [leadAssignTo, setLeadAssignTo] = useState();
  const [customerType, setCustomerType] = useState();
  const [leadType, setLeadType] = useState();

  const isSidebarToggled = useSelector((state) => state.sidebarToggle.isSidebarToggled);
  console.log("sidebar toggle",isSidebarToggled)
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  // const selectStateValue = (e) => {
  //   setSelectState(e.target.value);
  //   console.log(e.target.value);
  // };
  const selectedState = State.getStatesOfCountry(countryCode).find(
    (state) => state.name === selectState
  );
  console.log(selectedState);
  const cityoptions = selectedState
    ? City.getCitiesOfState(countryCode, selectedState.isoCode).map((city) => ({
        value: city.name,
        displayValue: city.name,
      }))
    : [];

  const CustomerDataSave = async (customer) => {
    try {
      // dispatch(userRegisterRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/customerviewset/",
        customer,
        config
      );
      
      setName("");
      setEmail("");
      setNumber("");
      setBrithDate("");
      setAnniversaryDate("");
      setCustomerType("");
      setLeadAssignTo("");
      setSelectState("");
      setCity("");
      setLeadType("");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response Error:", error.response.data);
        console.error("Status Code:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  };
  // const stats = State.getStatesOfCountry("IN");
  // console.log(stats);
  // const handleCities = () => {
  //   City.getCitiesOfState("IN", selectStat.stateCode);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    try{
    CustomerDataSave({
      name: name,
      email: email,
      mobile_no: number,
      birthday_date: brithDate,
      anniversary_date: anniversaryDate,
      customer_type: customerType,
      lead_assigned_to: leadAssignTo,
      state: selectState,
      city: city,
      lead_type: leadType,
    });
    toast.success('Form submitted successfully');
  }catch (error) {
    // Handle errors if any
    console.error("Error:", error);
    toast.error('Failed to submit the form. Please try again.');
  }
  };
  return (
    <>
      <div className={`page-wrapper ${isSidebarToggled ? 'toggled' : ''}`}>
        <SideBar />

        <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Header toggleSidebar={handleToggleSidebar}/>
          <div className="container-fluid relative px-3">
            <div className="layout-specing">
              <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                <div className="py-5 px-8">
                  <h5 className="text-lg font-semibold">Customer Lead</h5>
                </div>
                <div className="py-5 px-8 border-t border-gray-100 dark:border-slate-800">
                  <form onSubmit={submitHandler}>
                    <div className="grid grid-cols-1 gap-5">
                      <div className="">
                        <label className="form-label font-semibold">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                          placeholder="Name"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="">
                        <label className="form-label font-semibold">
                          Email:
                        </label>
                        <input
                          type="email"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                          placeholder="Email"
                          id="email"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <label className="form-label font-semibold">
                          Number:
                        </label>
                        <input
                          type="number"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                          placeholder="Phone number"
                          id="number"
                          name="number"
                          required
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <label className="font-semibold">Lead Type:</label>
                        <select
                          name="lead_type"
                          className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          value={leadType}
                          required
                          onChange={(e) => setLeadType(e.target.value)}
                        >
                          <option value="" selected>
                            Select...
                          </option>
                          <option value="walk_in">Walk In</option>
                          <option value="reference">Reference</option>
                          <option value="social_media">Social Media</option>
                          <option value="google">Google</option>
                        </select>
                      </div>
                      <div className="">
                        <label className="font-semibold">Customer Type:</label>
                        <select
                          name="customer_type"
                          className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          value={customerType}
                          required
                          onChange={(e) => setCustomerType(e.target.value)}
                        >
                          <option value="" selected>
                            Select...
                          </option>
                          <option value="diamond">Diamond</option>
                          <option value="gold">Gold</option>
                          <option value="silver">Silver</option>
                        </select>
                      </div>
                      <div className="grid gap-3 grid-col-1 lg:grid-cols-12">
                        <div className="xl:col-span-6">
                          <label className="form-label font-semibold">
                            Birth Date:
                          </label>
                          <input
                            type="date"
                            className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                            placeholder=""
                            id="birth_date"
                            name="birth_date"
                            value={brithDate}
                            required
                            onChange={(e) => setBrithDate(e.target.value)}
                          />
                        </div>
                        <div className="xl:col-span-6">
                          <label className="form-label font-semibold">
                            Anniversary Date:
                          </label>
                          <input
                            type="date"
                            className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                            placeholder="Phone number"
                            id="anniversary_date"
                            name="anniversary_date"
                            required
                            value={anniversaryDate}
                            onChange={(e) => setAnniversaryDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid gap-3 grid-col-1 lg:grid-cols-12">
                        <div className="xl:col-span-6">
                          <div className="">
                            <label className="font-semibold">State:</label>
                            <select
                              name="state"
                              id="state"
                              className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              required
                              value={selectState}
                              onChange={(e) => setSelectState(e.target.value)}
                            >
                              <option value="" selected>Select...</option>
                              {stateoptions.map((option, index) => {
                                return (
                                  <option key={index} value={option.value}>
                                    {option.displayValue}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="xl:col-span-6">
                          <div className="">
                            <label className="font-semibold">City:</label>
                            <select
                              name="city"
                              id="city"
                              required
                              className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              onChange={(e) => setCity(e.target.value)}
                            >
                              <option value="" selected>Select...</option>
                              {cityoptions.map((option, index) => {
                                return (
                                  <option key={index} value={option.value}>
                                    {option.displayValue}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <label className="form-label font-semibold">
                          Lead Assign To:
                        </label>
                        <input
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                          placeholder="Lead assign to"
                          id="lead_addign_to"
                          name="lead_addign_to"
                          required
                          value={leadAssignTo}
                          onChange={(e) => setLeadAssignTo(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          className=" py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigobg-indigo-700 text-white rounded-md"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default CreateCustomer;
