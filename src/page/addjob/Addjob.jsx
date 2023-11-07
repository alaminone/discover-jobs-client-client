// AddJob.js

import  { useState } from 'react';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    description: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your API (you'll need to create an API endpoint for this)
    // Example: fetch('/api/add-job', { method: 'POST', body: JSON.stringify(formData) })
    // Clear the form after submission
    setFormData({
      title: '',
      deadline: '',
      description: '',
      category: '',
      minPrice: '',
      maxPrice: '',
    });
  };

  return (
    <div>
      <h2>Add Job Listing</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Form fields for job details */}
        <input type="text" placeholder="Job Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        {/* Add other form fields */}
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
