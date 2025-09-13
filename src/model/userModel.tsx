export interface userInterface {
    name: string;
    accountType: string;
    password: string;
    emailId: string;
    confirmPassword: string;
}

export interface registerAPIInterface{
    name: string;
    accountType: string;
    password: string;
    emailId: string;
}

export interface loginAPIInterface{
    password: string;
    emailId: string;
}


export const defaultUser: userInterface = {
    name: "",
    accountType: "APPLICANT",
    password: "",
    emailId: "",
    confirmPassword: ""
};

export const tranformValueforRegisterApi = (user: userInterface): registerAPIInterface => {
    return {
        name: user.name,
        emailId: user.emailId,
        accountType: user.accountType,
        password: user.password
    }
}

export const tranformValueforLoginApi = (user: userInterface): loginAPIInterface => {
    return {
        emailId: user.emailId,
        password: user.password
    }
}