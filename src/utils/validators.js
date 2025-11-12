import * as yup from 'yup';

// Validation schema for the "Contact Us" form.
export const contactFormSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters long.')
        .required('Full name is required.'),
    email: yup
        .string()
        .email('Please enter a valid email address.')
        .required('Email address is required.'),
    message: yup
        .string()
        .trim()
        .min(10, 'Message must be at least 10 characters long.')
        .required('A message is required.'),
});

// Validation schema for the "Join Waitlist" form.
export const waitlistFormSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email address.')
        .required('Email address is required.'),
});