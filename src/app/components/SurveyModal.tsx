import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/globals.css";

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    importantFeatures: "",
    currentBookingMethod: "",
    switchEncouragement: "",
    satisfactionLevel: "",
    additionalFeatures: "",
    lastRideDate: new Date(),
    carpoolImportance: "",
    tricycleBookingImportance: "",
    parkingImportance: "",
    frequencyOfUse: "",
    costSavings: "",
    freeServicesFeedback: "",
    improvementSuggestions: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevState) => ({
      ...prevState,
      lastRideDate: date,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ride-Hailing App Survey"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Cost Sharing App Survey</h2>
        <p className="mb-4">
          Complete this survey and get a 2% discount on your next ride!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              What features are most important to you when choosing a
              ride-hailing app?
            </label>
            <input
              type="text"
              name="importantFeatures"
              value={formData.importantFeatures}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How do you currently find and book rides?
            </label>
            <input
              type="text"
              name="currentBookingMethod"
              value={formData.currentBookingMethod}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              What would encourage you to switch to a new ride-hailing app?
            </label>
            <input
              type="text"
              name="switchEncouragement"
              value={formData.switchEncouragement}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How satisfied are you with your current ride-hailing app?
            </label>
            <select
              name="satisfactionLevel"
              value={formData.satisfactionLevel}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select satisfaction level</option>
              <option value="very_dissatisfied">Very Dissatisfied</option>
              <option value="dissatisfied">Dissatisfied</option>
              <option value="neutral">Neutral</option>
              <option value="satisfied">Satisfied</option>
              <option value="very_satisfied">Very Satisfied</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              When was your last ride?
            </label>
            <DatePicker
              selected={formData.lastRideDate}
              onChange={handleDateChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How important is the carpooling feature to you?
            </label>
            <select
              name="carpoolImportance"
              value={formData.carpoolImportance}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select importance level</option>
              <option value="very_important">Very Important</option>
              <option value="important">Important</option>
              <option value="neutral">Neutral</option>
              <option value="not_important">Not Important</option>
              <option value="not_important_at_all">Not Important at All</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How important is the tricycle booking feature to you?
            </label>
            <select
              name="tricycleBookingImportance"
              value={formData.tricycleBookingImportance}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select importance level</option>
              <option value="very_important">Very Important</option>
              <option value="important">Important</option>
              <option value="neutral">Neutral</option>
              <option value="not_important">Not Important</option>
              <option value="not_important_at_all">Not Important at All</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How important is the parking space finding feature to you?
            </label>
            <select
              name="parkingImportance"
              value={formData.parkingImportance}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select importance level</option>
              <option value="very_important">Very Important</option>
              <option value="important">Important</option>
              <option value="neutral">Neutral</option>
              <option value="not_important">Not Important</option>
              <option value="not_important_at_all">Not Important at All</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How often do you use PasaHERO's features?
            </label>
            <select
              name="frequencyOfUse"
              value={formData.frequencyOfUse}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="rarely">Rarely</option>
              <option value="never">Never</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Have you noticed cost savings by using PasaHERO?
            </label>
            <select
              name="costSavings"
              value={formData.costSavings}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Maybe</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How do you feel about the free nature of PasaHERO's services?
            </label>
            <textarea
              name="freeServicesFeedback"
              value={formData.freeServicesFeedback}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              What additional features or services would you like to see in a
              ride-hailing app?
            </label>
            <textarea
              name="additionalFeatures"
              value={formData.additionalFeatures}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Do you have any suggestions for improving PasaHERO?
            </label>
            <textarea
              name="improvementSuggestions"
              value={formData.improvementSuggestions}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:text-gray-800 close-button"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SurveyModal;
