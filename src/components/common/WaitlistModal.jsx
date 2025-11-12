import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { Button, InputField } from './';
import { waitlistFormSchema } from '../../utils';
import { submitForm } from '../../services';
import { FORMSPREE_ENDPOINTS } from '../../constants';

export const WaitlistModal = ({ isOpen, onClose }) => {
  const [submitStatus, setSubmitStatus] = useState({ submitted: false, error: false, message: '' });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitStatus({ submitted: false, error: false, message: '' });
    try {
      await submitForm(FORMSPREE_ENDPOINTS.waitlist, values);
      setSubmitStatus({ submitted: true, error: false, message: 'Success! You are now on the waitlist.' });
      resetForm();
    } catch {
      setSubmitStatus({ submitted: true, error: true, message: 'An error occurred. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: -50, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-accent rounded-lg shadow-xl w-full max-w-md m-4 p-8 relative"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">Join the Paxx Waitlist</h2>
              <p className="mt-2 text-gray-400">Be the first to know when we launch and get exclusive early access.</p>
            </div>

            <div className="mt-6">
              <Formik
                initialValues={{ email: '' }}
                validationSchema={waitlistFormSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col gap-4">
                    <Field
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="you@example.com"
                      component={InputField}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? 'Submitting...' : 'Join Now'}
                    </Button>
                  </Form>
                )}
              </Formik>
              {submitStatus.submitted && (
                <p className={`mt-4 text-center text-sm ${submitStatus.error ? 'text-red-500' : 'text-green-500'}`}>
                  {submitStatus.message}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

WaitlistModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};