import { useState } from "react";

const Help = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission logic, for example, send a request to a server.

    // For demonstration purposes, we'll just log the entered data.
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Order Number:", orderNumber);
    console.log("Issue Description:", issueDescription);

    // Reset the form fields
    setName("");
    setPhoneNumber("");
    setOrderNumber("");
    setIssueDescription("");
  };

  return (
    <div className="bg-gray-100 h-full ">
      <div className="container mx-auto p-4 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center my-10 mb-10">Help Center</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            ></label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="FullName"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-gray-600"
            ></label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full p-2 border rounded-md"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="orderNumber"
              className="block text-sm font-semibold text-gray-600"
            >
            </label>
            <input
              type="text"
              id="orderNumber"
              className="w-full p-2 border rounded-md"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Order Number (if applicable)"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="issueDescription"
              className="block text-sm font-semibold text-gray-600"
            >
              Describe your issue
            </label>
            <textarea
              id="issueDescription"
              rows="3"
              className="w-full p-2 border rounded-md"
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white mb-8 rounded-md hover:bg-red-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
