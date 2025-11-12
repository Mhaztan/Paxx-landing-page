import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, InputField } from '../components/common';
import { contactFormSchema } from '../utils';
import { FORMSPREE_ENDPOINTS } from '../constants';
import { submitForm } from '../services';

/**
 * Contact page with a form for user inquiries.
 * Uses Formik for form state management and Yup for validation.
 */
export const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState({ submitted: false, error: false, message: '' });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitStatus({ submitted: false, error: false, message: '' });
        try {
            await submitForm(FORMSPREE_ENDPOINTS.contact, values);
            setSubmitStatus({ submitted: true, error: false, message: 'Thank you! Your message has been sent successfully.' });
            resetForm();
        } catch {
            setSubmitStatus({ submitted: true, error: true, message: 'Something went wrong. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-900 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
                    <p className="mt-3 text-lg text-gray-400">
                        Have a question or feedback? We'd love to hear from you.
                    </p>
                </div>
                <div className="mt-12 bg-accent p-8 rounded-lg shadow-xl">
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={contactFormSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-6">
                                <Field
                                    name="name"
                                    label="Full Name"
                                    placeholder="John Doe"
                                    component={InputField}
                                />
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    component={InputField}
                                />
                                <Field
                                    name="message"
                                    label="Message"
                                    placeholder="Your message here..."
                                    as="textarea"
                                    className="w-full px-3 py-2 bg-accent border rounded-md text-bkg focus:outline-none focus:ring-2 focus:ring-primary border-gray-600 h-32"
                                />
                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
            </div>
        </div>
    );
};