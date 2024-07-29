import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { useRef } from "react";
import { toast } from "react-hot-toast";

import css from "./BookingForm.module.css";

import Iconsvg from "../Icon/Icon";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    bookingDate: Yup.date()
      .required("Booking date is required")
      .min(new Date(), "Booking date must be in the future"),
    comment: Yup.string().max(500, "Comment can contain up to 500 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    toast.success(
      "Your data was successfully sent. Our manager will contact you within 24 hours."
    );
  };

  const datePickerRef = useRef(null);

  const handleCalendarClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <h2>Book your camper van now</h2>
          <p>Stay connected! We are always ready to help you.</p>
          <ul className={css.formList}>
            <li className={css.formGroup}>
              <label htmlFor="name"></label>
              <Field
                className={css.field}
                placeholder="Name"
                type="text"
                name="name"
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </li>
            <li className={css.formGroup}>
              <label htmlFor="email"></label>
              <Field
                className={css.field}
                placeholder="Email"
                type="text"
                name="email"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </li>
            <li className={`${css.formGroup} ${css.datePickerGroup}`}>
              <label htmlFor="bookingDate"></label>

              <DatePicker
                ref={datePickerRef}
                className={`${css.field} ${css.datePicker}`}
                name="bookingDate"
                type="date"
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                placeholderText="Booking date"
              />

              <button
                type="button"
                className={css.buttonCalendar}
                onClick={handleCalendarClick}
              >
                <Iconsvg className={css.iconCalendar} iconName="calendar" />
              </button>
              <ErrorMessage
                className={css.error}
                name="bookingDate"
                component="span"
              />
            </li>
            <li className={css.formGroup}>
              <label htmlFor="comment"></label>
              <Field
                as="textarea"
                type="text"
                name="comment"
                placeholder="Comment"
                className={`${css.field} ${css.fieldComment}`}
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </li>
          </ul>
          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
