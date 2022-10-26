import * as yup from "yup";

export const schema = yup.object().shape({
    fullName: yup.string().required('Full name is required').min(3),
    username: yup.string().required('Username is required').min(3),
    email: yup.string().required('E-mail is required').email('Invalid email format'),
    password: yup.string().required('Password is required').min(8),
    confirmPassword: yup.string().label('confirm password').required('You must confirm the password').oneOf([yup.ref('password'), null], 'Passwords must match'),
    phoneNumber: yup.string().required('Phone number is required'),
});