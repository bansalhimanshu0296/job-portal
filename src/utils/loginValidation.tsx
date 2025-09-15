
const loginValidation = (name: string, value: string) => {
    switch (name) {
        case "emailId":
            if (value.length === 0) return "Email is required.";
            return "";
        case "password":
            if (value.length === 0) return "Password is required.";
            return "";
        default:
            return "";
    }
};

export default loginValidation;