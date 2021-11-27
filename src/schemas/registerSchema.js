import * as yup from 'yup';

const registerSchema = yup.object().shape({
    name: yup.string().required().min(3).max(100),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(50),
});

export default registerSchema;