import React, { useState } from "react";
import styles from "./fixedform.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { FormFilled, resetForm } from '../store/studentSlice';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export default function FixedForm() {
  const formData = useSelector(state => state.student);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(FormFilled({ field: name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_4zv8d5l',
        'template_7lt1pb6',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
        },
        'j6fsWCbZRRU2n1J4A'
      );

      dispatch(resetForm());
      navigate('/thank-you');
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    dispatch(resetForm({
     name: "",
     email: "",
     phone: "",
     course: ""

    }));
  };

  return (
    <>
      {/* Left Vertical Button */}
      <div className={styles.leftButtonContainer} onClick={() => setOpen(true)}>
        <span className={styles.leftButtonText}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.leftButtonIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8m-8 6h8m-8 6h8"
            />
          </svg>
          Get a Call Back
        </span>
      </div>

      {/* Popup Form */}
      {open && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupFormBox}>
            <h3>Talk To Our Expert Today</h3>
            <button
              className={styles.popupCloseBtn}
              onClick={() => setOpen(false)}
              aria-label="Close form"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className={styles.popupForm}>
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course*</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Web Designing">Web Designing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Mobile App Development">Mobile App Development</option>
              </select>

             <div>
               <button type="submit" disabled={loading} className={styles.popupSubmitBtn}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button type="button" onClick={handleReset} className={styles.popupResetBtn}>
                Reset
              </button>
             </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
