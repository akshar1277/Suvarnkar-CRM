import logo from "./logo.svg";
import "./App.css";
import Home from "./componants/Home";
import { useEffect } from "react";
import Index from "./componants/Index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCustomer from "./componants/CreateCustomer";
import Templates from "./componants/Templates";
import CustomerListing from "./componants/CustomerListing"
function App() {
 
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/customer" element={<CreateCustomer />} />

            <Route path="/templates" element={<Templates />} />
            <Route path="/customer-listing" element={<CustomerListing />} />
            {/* <Route path="/customer-listing" element={<Masters />} /> */}
          </Routes>
         
          <ToastContainer
          position="top-right"
          autoClose={3000}
          // hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ marginTop: '55px', marginRight: '20px' }}
        />
        
      </Router>
    </div>
  );
}

export default App;
