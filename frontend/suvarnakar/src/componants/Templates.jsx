import React, { useState, useEffect, useRef } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./templates.css";
import { toggleSidebar } from "../features/sidebarToggleSlice";
import { useSelector, useDispatch } from 'react-redux';

function Templates() {
  const location = useLocation();
  const { selectedRows } = location.state || {};
  const [templatesData, setTemplatesData] = useState();
  const [selectedTemplate, setSelectedTemplate] = useState({});
  const [editedTemplateHeader, setEditedTemplateHeader] = useState();
  const [editedTemplate, setEditedTemplate] = useState();
  const [showModal, setShowModal] = useState(false);
  const [variables, setVariables] = useState({});
  const [variablesHeader, setVariablesHeader] = useState({});
  const textareaRef = useRef(null);
  const textareaRefHeader = useRef(null);
  console.log("variable", variables);
  console.log("r", selectedRows);

  const isSidebarToggled = useSelector((state) => state.sidebarToggle.isSidebarToggled);
  console.log("sidebar toggle",isSidebarToggled)
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const templatesDataFetch = async () => {
    try {
      console.log("Fetching data...");
      console.log("hello");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const res = await axios.get(
        "/api/v1/templateviewset/list_templates/",
        config
      );
      if (res.data) {
        setTemplatesData(res?.data);
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

//   const templatesData=[
//     {
//         "id": 2,
//         "slug": "todo_price",
//         "header_content": "Today's Gold Price",
//         "content": "Gold Price per kg: {{gold_price}}\r\nsilver price per kg : {{silver_price}}",
//         "template_name": "daily_gold_price"
//     },
//     {
//         "id": 1,
//         "slug": "purchase",
//         "header_content": "Thank you for purchasing from {{company_name}}!",
//         "content": "Dear {{customer_name}},\r\nThank you so much for choosing {{company_name}}! We're thrilled that you enjoyed our treats. Your support means the world to us. 🍰✨ If there's anything else we can do for you, just let us know!\r\n\r\nWarm regards,\r\n{{company_name}}",
//         "template_name": "new_order"
//     }
// ]
  const handleOpenModal = () => {
    setShowModal(true);
    document.body.classList.remove("overflow-hidden");
    // document.body.classList.add('background-color:rgba(0, 0, 0, 0.215);');
  };
  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove("overflow");
  };

  const adjustTextareaHeightHeader = () => {
    if (textareaRefHeader.current) {
    const textarea = textareaRefHeader.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleTemplateSelection = (templateData) => {
    if (selectedRows == undefined || selectedRows == null) {
      toast.warning("Not Selected Any Customers.");
    }
    else{
      handleOpenModal();
      // Combine selectedCustomerList and templateData and navigate to desired page
      const combinedData = { ...selectedRows, templateData };
      // history.push('/process-data', { combinedData });
      // console.log("combine",combinedData)
      setSelectedTemplate(templateData);
      console.log("selected tem", selectedTemplate);
      // if(selectedTemplate==templateData)
      // toast.success("Template Selected");

    }
  };

  // const handleTemplateChangeHeader = (template) => {
  //   console.log("handle template ");
  //   adjustTextareaHeight();
  //   // const newTemplate = e.target.value;
  //   // setSelectedTemplate(template);

  //   const regex = /{{\s*([^{}\s]+)\s*}}/g;
  //   const matches = [...template.matchAll(regex)];
  //   const vars = {};

  //   matches.forEach((match) => {
  //     const variable = match[1].trim();

  //     if (variable !== "customer_name") {
  //       vars[variable] = variable;
  //     }
  //   });
  //   console.log("vars", vars);
  //   setVariablesHeader(vars);
  // };

  const handleTemplateChange = (template) => {
    console.log("handle template ");
    adjustTextareaHeightHeader();
    adjustTextareaHeight();
    // const newTemplate = e.target.value;
    // setSelectedTemplate(template);
    const body_content=template.content
    const total_content=template.header_content+body_content
    const regex = /{{\s*([^{}\s]+)\s*}}/g;
    const matches = [...total_content.matchAll(regex)];
    const vars = {};

    matches.forEach((match) => {
      const variable = match[1].trim();

      if (variable !== "customer_name") {
        vars[variable] = variable;
      }
    });
    console.log("vars", vars);
    setVariables(vars);
  };

  // const handleInputChange = (e, varName) => {
  //   const newVars = { ...variables, [varName]: e.target.value };
  //   setVariables(newVars);
  // };

  // const handleInputChangeHeader = (e) => {
  //   const { name, value } = e.target;
  //   setVariablesHeader((prevInputs) => ({
  //     ...prevInputs,
  //     [name]: value,
  //   }));
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVariables((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const renderTemplateHeader = () => {
    // console.log("rendertem edit",editedTemplate)
   
    adjustTextareaHeightHeader()
    let renderedTemplate = selectedTemplate.header_content;
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      const finalvalue="{{"+value+"}}"
      renderedTemplate = renderedTemplate.replace(regex, finalvalue);
    }
    return renderedTemplate;
  };
  const renderTemplate = () => {
    // console.log("rendertem edit",editedTemplate)
    adjustTextareaHeight()
    let renderedTemplate = selectedTemplate.content;
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      const finalvalue="{{"+value+"}}"
      renderedTemplate = renderedTemplate.replace(regex, finalvalue);
    }
    return renderedTemplate;
  };

  // const updateTextareaValue = () => {
  //   const newContent = renderTemplate();
  //   setDynamicContent(newContent);

  //   const textarea = textareaRef.current;
  //   if (textarea) {
  //     textarea.value = newContent;
  //     adjustTextareaHeight();

  //     // Manually dispatch input event
  //     const event = new Event('input', { bubbles: true });
  //     textarea.dispatchEvent(event);
  //   }
  // };

  const handleTemplateSave = (e) => {
    e.preventDefault();
    const newContentHeader = renderTemplateHeader();
    setEditedTemplateHeader(newContentHeader);
    const regexHeader = /{{\s*([^{}\s]+)\s*}}/g;
    const matchesHeader = [...newContentHeader.matchAll(regexHeader)];
    let varsHeader = [];
    matchesHeader.forEach((match) => {
      const variable = match[1].trim();
      // if (variable !== "customer_name") {
        varsHeader=[...varsHeader,variable];
      // }
    });
    console.log("variables list",varsHeader)
    // handleSendMessage(vars)

    const newContent = renderTemplate();
    setEditedTemplate(newContent);
    const regex = /{{\s*([^{}\s]+)\s*}}/g;
    const matches = [...newContent.matchAll(regex)];
    let vars = [];
    matches.forEach((match) => {
      const variable = match[1].trim();
      // if (variable !== "customer_name") {
        vars=[...vars,variable];
      // }
    });
    console.log("variables list",vars)
    handleSendMessage(vars,varsHeader)
    handleCloseModal()
  };

  const handleSendMessage = async (variableList,variableListHeader) => {
    // Combine selectedCustomerList and templateData and navigate to desired page
     
      try {
        const combinedData = {
          users: selectedRows,
          template_slug:selectedTemplate.slug,
          template_name:selectedTemplate.template_name,
          company_id:1,
          body_vars:variableList,
          header_vars:variableListHeader,
        };
        console.log("combineddataaaa", combinedData);
        console.log("hello");
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const res = await axios.post(
          "/api/v1/whatsappviewset/send_whatsapp_message/",
          combinedData,
          config
        );
        // console.log("eror",res)
        // if(res.data){
        // toast.success("Message sent successfully.");}
        console.log("Response:", res);
        if (res.status === 200) {
          // Message sent successfully
          toast.success("Message sent successfully.");
        } else {
          // Handle error from server
          toast.error(`Error: ${res.data.message}`);
        }
      } catch (error) {
        // if (error.response) {
        //   // The request was made and the server responded with a status code
        //   // that falls out of the range of 2xx

        //   toast.error("Response Error:", error.response.data);
        //   toast.error("Status Code:", error.response.status);
        // } else if (error.request) {
        //   // The request was made but no response was received
        //   console.error("Request Error:", error.request);

        // Something happened in setting up the request that triggered an Error
        toast.error("Failed to send message.");
        console.log("Error:", error);
      }
    
  };

  useEffect(() => {
    console.log("selected tem", selectedTemplate);
    templatesDataFetch()
    console.log("tempaltes data",templatesData)
    if (textareaRef.current) {
      adjustTextareaHeight();
      adjustTextareaHeightHeader();
    }
    if (showModal) {
      // handleTemplateChangeHeader(selectedTemplate.header_content);
      handleTemplateChange(selectedTemplate);
    }

    const handleClickOutsideModal = (event) => {
      if (event.target.className === "modal") {
        setShowModal(false);
        document.body.classList.remove("overflow");
      }
    };

    window.addEventListener("click", handleClickOutsideModal);

    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [selectedTemplate,selectedTemplate.content,showModal]);

  

  return (
    <>
      <div className={`page-wrapper ${isSidebarToggled ? 'toggled' : ''}`}>
        <SideBar />

        <main className="page-content bg-gray-50 dark:bg-slate-800">
          <Header toggleSidebar={handleToggleSidebar}/>
          <div className="container-fluid relative px-3">
            <div className="layout-specing">
              <div className="md:flex justify-between items-center">
                <div>
                  <h5 className="text-lg font-semibold">Templates</h5>
                </div>

                {/* <button
                  type="button"
                  onClick={handleSendMessage}
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white 
                rounded-md"
                >
                  Send Message
                </button> */}
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                {templatesData?templatesData.map((template) => (
                  <div
                    className={`relative flex flex-col justify-between rounded-md shadow dark:shadow-gray-700 overflow-hidden min-h-[300px]  ${
                      selectedTemplate === template.id
                        ? " border-4  !important"
                        : "bg-white dark:bg-slate-900"
                    }`}
                  >

                    <div className="content p-6 flex-grow">
                      <h6 className="mb-4 text-15 font-bold">
                        {template.template_name}
                      </h6>
                  <SimpleBar style={{ maxHeight: "200px"}} autoHide={false}>

                      <div className="mb-2  me-3 whitespace-pre-line  break-words">{template.header_content}</div>
                      <div className="mb-2  me-3 whitespace-pre-line  break-words">{template.content}</div>
                    
                      <div className="variables mb-4">
                        {/* {Object.keys(variables).map((varName) => (
                          <div key={varName} className="mb-2">
                            <label className="block font-medium mb-1">
                              {varName}:
                              <input
                                type="text"
                                value={variables[varName]}
                                onChange={(e) => handleInputChange(e, varName)}
                                className="w-full p-2 border border-gray-300 rounded"
                              />
                            </label>
                          </div>
                        ))} */}
                      </div>
                    </SimpleBar>  
                    </div>
                    <div className="px-6 pb-6 relative bottom-0 left-0">
                      {/* <a href="#!" onClick="paymentMethod.showModal()" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Add Payment Method</a> */}

                      <button
                        onClick={() => {
                          handleTemplateSelection(template);
                        }}
                        className={`py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  text-white rounded-md  ${
                          selectedTemplate === template.id
                            ? " bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700"
                            : "bg-indigo-600  hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700"
                        }`}
                      >
                        Select Template
                      </button>
                      {showModal && (
                        <div className="modal">
                          <div className="modal-content">
                            <span
                              className="close -mt-5"
                              onClick={handleCloseModal}
                            >
                              &times;
                            </span>
                            <div className="section-title ">
                              <h4 className="text-1xl font-semibold uppercase mb-3">
                                {selectedTemplate.template_name}
                              </h4>

                            <SimpleBar style={{ maxHeight: "50vh" }} autoHide={false}>
                              <div className="w-full p-4">
                                <form onSubmit={handleTemplateSave}>
                                  <textarea
                                    ref={textareaRefHeader}
                                    className="w-full p-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden resize-none"
                                    
                                    // onChange={adjustTextareaHeight}
                                    onInput={adjustTextareaHeightHeader}
                                    // value={selectedTemplate.content}
                                    value={renderTemplateHeader()}
                                    readOnly
                                  />
                                  <textarea
                                    ref={textareaRef}
                                    className="w-full p-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden resize-none"
                                    
                                    // onChange={adjustTextareaHeight}
                                    onInput={adjustTextareaHeight}
                                    // value={selectedTemplate.content}
                                    value={renderTemplate()}
                                    readOnly
                                  />
                                  {Object.keys(variablesHeader).map((key) => (
                                    <div key={key}>
                                      <label htmlFor={key}>
                                        {key.charAt(0).toUpperCase() +
                                          key.slice(1)}
                                      </label>
                                      <div className="">
                                        <input
                                          type="text"
                                          className="form-input w-full mb-3 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                                          name={key}
                                          id={key}
                                          value={variablesHeader[key]}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* <input
                                      className=""
                                      type="text"
                                      id={key}
                                      name={key}
                                      value={variables[key]}
                                      onChange={handleInputChange}
                                    /> */}
                                    </div>
                                  ))}
                                  {Object.keys(variables).map((key) => (
                                    <div key={key}>
                                      <label htmlFor={key}>
                                        {key.charAt(0).toUpperCase() +
                                          key.slice(1)}
                                      </label>
                                      <div className="">
                                        <input
                                          type="text"
                                          className="form-input w-full mb-3 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                                          name={key}
                                          id={key}
                                          value={variables[key]}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* <input
                                      className=""
                                      type="text"
                                      id={key}
                                      name={key}
                                      value={variables[key]}
                                      onChange={handleInputChange}
                                    /> */}
                                    </div>
                                  ))}
                                  <button
                                    type="submit"
                                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  text-white rounded-md bg-indigo-600  hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700"
                                  >
                                    Send Message
                                  </button>
                                </form>
                              </div>
                            </SimpleBar>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )):null}
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default Templates;
