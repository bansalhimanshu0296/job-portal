import { emailRegex, nameRegex, passwordRegex } from "./regex";

const signupValidation = (name: string, value: string) => {
    switch (name) {
        case "name":
            if (value.length === 0) return "Full name is required.";
            if (!nameRegex.test(value)) return "Enter a valid full name (e.g., Alice Marie Johnson).";
            return "";
        case "emailId":
            if (value.length === 0) return "Email is required.";
            if (!emailRegex.test(value)) return "Enter a valid Email.";
            return "";
        case "password":
            if (value.length === 0) return "Password is required.";
            if (!passwordRegex.test(value)) return "Password must be 8-15 chars with at least 1 uppercase, 1 lowercase, 1 number, and 1 special char.";
            return "";
        default:
            return "";
    }
};

export default signupValidation;