import React from "react";
import { useState, useEffect } from "react";
import "./FormPopup.css";

const FormPopup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+977",
    topic: "",
    orderNumber: "",
    salonName: "",
    message: "",
  });

  const [countries, setCountries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flag,idd"
        );
        const data = await response.json();

        const countryList = data
          .filter((country) => country.idd && country.idd.root)
          .map((country) => ({
            name: country.name.common,
            flag: country.flag,
            code:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] || "" : ""),
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryList);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblkveyn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          countryCode: "+977",
          topic: "",
          message: "",
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    }

    setIsSubmitting(false);
  };

  const topics = [
    "Project",
    "Order Issue",
    "Product Question",
    "Technical Support",
    "Billing Question",
    "Returns & Exchanges",
    "Partnership Inquiry",
    "General Question",
  ];

  return (
    <div className="right-panel">
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" required>
            Phone Number
          </label>
          <div className="phone-wrapper">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="form-select country-select"
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input phone-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Select your topic</label>
          <select
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Choose a topic...</option>
            {topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-textarea"
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? (
            <>
              <div className="loading-spinner"></div>
              SUBMITTING...
            </>
          ) : (
            <>
              SUBMIT
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </>
          )}
          <div className="shimmer"></div>
        </button>
      </form>
    </div>
  );
};

export default FormPopup;
