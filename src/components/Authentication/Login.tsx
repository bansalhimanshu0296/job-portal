import { Button, PasswordInput, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router"
import { defaultUser, tranformValueforLoginApi, type loginAPIInterface, type loginValidationSchema, type userInterface } from "../../model/userModel";
import { loginUser } from "../../services/AuthenticationService";
import loginValidation from "../../utils/loginValidation";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import notificationComponent from "../Common/Notification";

const Login = () => {
    const [user, setUser] = useState<userInterface>(defaultUser);

    const [formError, setFormError] = useState<loginValidationSchema>(defaultUser);

    const navigate = useNavigate();

    const [opened, { open, close }] = useDisclosure(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement >) => {
        setUser({ ...user, [event?.target?.name]: event?.target?.value });
        setFormError({ ...formError, [event?.target?.name]: "" });
    } 

    const handleLogin = () => {

        let valid: boolean = true, newFormError: {[key: string]: string} = {};
        for (const key of Object.keys(user) as Array<keyof userInterface>) {
            newFormError[key] = loginValidation(key, user[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(prev => ({ ...prev, ...newFormError }))

        if (valid) {
            const loginApiValue: loginAPIInterface = tranformValueforLoginApi(user);
            loginUser(loginApiValue).then(() => {
                setUser(defaultUser);
                notificationComponent('Login Successful', 'Redirecting to home page...', true);
                setTimeout(() => {
                    navigate("/")
                }, 4000);
            }).catch((err) => {
                notificationComponent('Login Failed', err?.response?.data?.errorMessage ?? 'Some error occurred...', false);
            });
        }
    }

    return <>
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login</div>
            <TextInput label="Email" placeholder="Your Email" value={user.emailId} name="emailId"
                leftSection={<IconAt size={16} />} withAsterisk
                onChange={handleChange} error={formError?.emailId}
            />
            <PasswordInput withAsterisk leftSection={<IconLock size={18} />}
                label="Password" placeholder="Password" value={user.password} name="password" onChange={handleChange}
                error={formError?.password}
            />
            <Button autoContrast variant="filled" onClick={handleLogin}>Login</Button>
            <div className="mx-auto">Don't Have an account? <span onClick={() => {
                navigate("/signup")
                setUser(defaultUser);
                setFormError(defaultUser);
            }}
                className="text-bright-sun-450 hover:underline cursor-pointer">
                SignUp</span></div>
            <div onClick={open} className="text-bright-sun-450 hover:underline cursor-pointer text-center">
                Forget Password?</div>
        </div>
        <ResetPassword opened={opened} close={close} />
    </>
}

export default Login