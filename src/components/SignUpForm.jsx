import React, { useState } from "react";
import "../css/SignUpForm.css";
import NextBackButtons from "./NextBackButtons";

const SignUpForm = () => {
  const initialState = {
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    highschool: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    year: new Date().getFullYear(),
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);

  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(\(\d{3}\)\s?|\d{3}[-\s])\d{3}[-\s]\d{4}$/;

    if (step === 1) {
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Invalid email address.";
      }
    }
    if (step === 2) {
      if (!phonePattern.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Phone number must be 10 digits.";
      }
    }
    if (step === 3) {
      if (formData.password !== formData.passwordConfirmation) {
        newErrors.passwordConfirmation = "Passwords do not match.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    // Handle Logic here using formData to access the data
    // Ex: formData.email

    // Resetting form
    setFormData(initialState);
    setStep(1);
  };

  return (
    <div className="signup-section" id="signup-form">
      <div className="heading">
        <h1>Ready to start your journey to your dream college?</h1>
        <p>Let us join your team. Register Below:</p>
      </div>
      <form>
        {step === 1 && (
          <div>
            <label htmlFor="role">Are you a student or guardian?</label>
            <div className="radio-group">
              <div
                className={`radio-option ${
                  formData.role === "student" ? "selected" : ""
                }`}
                onClick={() => handleRoleChange("student")}
              >
                Student
              </div>
              <div
                className={`radio-option ${
                  formData.role === "guardian" ? "selected" : ""
                }`}
                onClick={() => handleRoleChange("guardian")}
              >
                Guardian
              </div>
            </div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Phone Number"
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
            <label htmlFor="highschool">High School</label>
            <input
              type="text"
              name="highschool"
              id="highschool"
              value={formData.highschool}
              placeholder="High School"
              onChange={handleChange}
            />
            <label htmlFor="year">Intended Start Year</label>
            <input
              type="number"
              name="year"
              id="year"
              value={formData.year}
              placeholder={currentYear}
              min={currentYear}
              max={currentYear + 10}
              onChange={handleChange}
            />
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? "Hide" : "Show"}
              </button>
            </div>
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={isVisible ? "text" : "password"}
                name="passwordConfirmation"
                id="passwordConfirmation"
                value={formData.passwordConfirmation}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.passwordConfirmation && (
              <p className="error">{errors.passwordConfirmation}</p>
            )}
          </div>
        )}
        <NextBackButtons
          step={step}
          setStep={setStep}
          validate={validate}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
