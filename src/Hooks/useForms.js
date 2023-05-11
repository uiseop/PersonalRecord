import { useEffect, useState } from "react";

const useForms = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors(validate(values));
  };

  const handleSubmit = (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    // do something
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setIsSubmitting(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useForms;
