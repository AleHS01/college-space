import React from "react";

const NextBackButtons = ({ step, setStep, validate, handleSubmit }) => {
  const handleBack = () => {
    setStep(Math.max(step - 1, 1));
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };
  const handleSubmitBtn = () => {
    if (validate()) {
      handleSubmit();
    }
  };
  return (
    <div className="next-back-container">
      <div className="btn-wrapper">
        {step >= 2 && (
          <button className="back-btn" type="button" onClick={handleBack}>
            Back
          </button>
        )}
        {step === 3 ? (
          <button
            className="submit-btn"
            type="button"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        ) : (
          <button className="next-btn" type="button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
      <div className="dots-container">
        <div className={`step-dot ${step === 1 ? "active" : ""}`}></div>
        <div className={`step-dot ${step === 2 ? "active" : ""}`}></div>
        <div className={`step-dot ${step === 3 ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default NextBackButtons;
