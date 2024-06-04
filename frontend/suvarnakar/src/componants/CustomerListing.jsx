import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { toggleSidebar } from "../features/sidebarToggleSlice";
import { useSelector, useDispatch } from 'react-redux';



function CustomerListing() {
  const [rowSelection, setRowSelection] = useState({});
  const [customerList, setCustomerList] = useState([]);
  console.log("customer list", customerList);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const isSidebarToggled = useSelector((state) => state.sidebarToggle.isSidebarToggled);
  console.log("sidebar toggle",isSidebarToggled)
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  // Handle click on "Select Template" button
  const handleSelectTemplate = () => {
    // Transfer rowSelection values to template page
    // const selectedRows = Object.keys(rowSelection)
    // .filter((key) => rowSelection[key])
    // .map((key) => customerList[parseInt(key)].id);

    const selectedRows = Object.keys(rowSelection).map((key) => {
      const id = parseInt(key);
      const foundData = customerList.find((item) => item.id === id);
      console.log("foundData",foundData)
      return foundData ? {"name":foundData.name,"phone_number":foundData.mobile_no} : null;
    });
    console.log("selectedRows",selectedRows.length==0)
    if (selectedRows.length==0) {
      toast.warning("Not Selected Any Customers.");
    } else {
      navigate("/templates", { state: { selectedRows } });
    }
  };

  const CustomerListData = async () => {
    try {
      console.log("Fetching data...");
      console.log("hello");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const res = await axios.get(
        "/api/v1/customerviewset/list_users/",
        config
      );
      if (res.data) {
        setCustomerList(res?.data);
      }
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
  useEffect(() => {
    console.log("useeffect");
    CustomerListData();
  }, []);
  console.log("slected", rowSelection);
  const columns = useMemo(
    () => [
      {
        id: "name",
        header: "Name",
        accessorKey: "name",
        size: 160,
      },
      {
        id: "email",
        header: "Email",
        accessorKey: "email",
        size: 160,
      },
      {
        id: "mobile_no",
        header: "Mobile No",
        accessorKey: "mobile_no",
        size: 160,
      },
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data: customerList,
    enableColumnOrdering: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enablePinning: true,
    enableRowSelection: true,
    getRowId: (row) => row.id, //give each row a more useful id
    onRowSelectionChange: setRowSelection, //connect internal row selection state to your own

    state: { rowSelection },
    // paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    //optionally override the default column widths
    defaultColumn: {
      maxSize: 400,
      minSize: 80,
      size: 180, //default size is usually 180
    },
    // enableColumnResizing: true,
    columnResizeMode: "onChange",
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      pagination: { pageSize: 5, pageIndex: 0 },
      // columnPinning: {
      //   // left: ["mrt-row-expand", "mrt-row-select"],
      //   // right: ["mrt-row-actions"],
      // },
    },
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [
        2,5, 10, 20, 50,
        {
          value: customerList?.length > 0 ? customerList?.length : 1,
          label: "All",
        },
      ],
      shape: "rounded",
      variant: "outlined",
    },
    muiTablePaperProps: {
      elevation: 0, //change the mui box shadow
      //customize paper styles
      sx: {
        borderRadius: "0",
        border: "none",
      },
    },
  });
  return (
    <>
      <div className={`page-wrapper ${isSidebarToggled ? 'toggled' : ''}`}>
        <SideBar />

        <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Header toggleSidebar={handleToggleSidebar}/>
          <div className="container-fluid relative px-3">
            <div className="layout-specing">
              <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                <div className="relative">
                  <button
                    type="button"
                    className="absolute top-0 left-0 mt-2 ml-4 py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md z-10" // Adjust the positioning and z-index
                    onClick={handleSelectTemplate} // Handle click event
                  >
                    Select Template
                  </button>
                  {customerList ? <MaterialReactTable table={table} /> : []}
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

export default CustomerListing;
