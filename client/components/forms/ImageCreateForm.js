import React, { useState } from 'react';
const ImageCreateForm = ({
  values,
  handleChange,
  setValues,
  handleSubmit,
  handleImage,
  preview, 
  uploadButtonText,
  // handleImageRemove,
  editPage = false,
}) => {
  const [buttonValue, setButtonValue] = useState('Save & Continue');

  return (
    <>
    {values && (
      <form onSubmit={handleSubmit}>
       <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Candidate Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email" // Updated name attribute
              className="form-control"
              placeholder="Candidate Email"
              value={values.email} // Updated state value
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="description" // Updated name attribute
              cols="7"
              rows="7"
              placeholder="Skills"
              value={values.description}
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              name="salary" // Updated name attribute
              className="form-control"
              placeholder="Expected Salary"
              value={values.salary} // Updated state value
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
  <label htmlFor="nodeJsExperience">Node.js Experience</label>
  <select
    id="nodeJsExperience"
    name="nodeJsExperience"
    className="form-control"
    value={values.nodeJsExperience}
    onChange={handleChange}
  >
    <option value="Less than 1 year">Less than 1 year</option>
    <option value="1-2 years">1-2 years</option>
    <option value="Over 2 years">Over 2 years</option>
  </select>
</div>

<div className="form-group mb-3">
  <label htmlFor="ReactJsexperience">React Experience</label>
  <select
    id="ReactJsexperience"
    name="ReactJsexperience"
    className="form-control"
    value={values.nodeJsExperience}
    onChange={handleChange}
  >
    <option value="Less than 1 year">Less than 1 year</option>
    <option value="1-2 years">1-2 years</option>
    <option value="Over 2 years">Over 2 years</option>
  </select>
</div>

      <div className="form-row mb-3">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left">
              {uploadButtonText}
              <input
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>
        {preview && (
          <div className="col">
            <img
              src={preview}
              alt="Preview"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
        )}
        {editPage && values.image && (
          <div className="col">
            <img
              src={values.image.Location}
              alt="image not available"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
        )}
      </div>
      {!editPage && 
      <div className="row">
      <div className="col">
        <button
          onClick={handleSubmit}
          disabled={values.loading || values.uploading}
          className="btn btn-primary"
          type="submit"
        >
          {values.loading ? 'Saving...' : buttonValue}
        </button>
      </div>
    </div>}
    </form>
    )}
    </>
  );
};

export default ImageCreateForm;
