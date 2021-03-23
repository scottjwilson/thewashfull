import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="bg-white p-16 rounded shadow-sm sm:w-2/3 mx-auto my-4">
      {children}
    </div>
  );
};

export default FormContainer;
