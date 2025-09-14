import { Button, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router"
import { defaultUser, tranformValueforLoginApi, type loginAPIInterface, type loginValidationSchema, type userInterface } from "../../model/userModel";
import { loginUser } from "../../services/AuthenticationService";
import loginValidation from "../../utils/loginValidation";
import { notifications } from "@mantine/notifications";

const Login = () => {
    const [user, setUser] = useState<userInterface>(defaultUser);

    const [formError, setFormError] = useState<loginValidationSchema>(defaultUser);

    const navigate = useNavigate();

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
                notifications.show({
                    title: 'Login Successful',
                    message: 'Redirecting to home page...',
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: 'teal',
                    withBorder: true,
                    className: '!border-green-500'
                });
                setTimeout(()=>{
                    navigate("/")
                }, 4000);
            }).catch((err) => {
                notifications.show({
                    title: 'Login Failed',
                    message: err?.response?.data?.errorMessage ?? 'Some error occurred...' ,
                    icon: <IconX style={{ width: "90%", height: "90%" }} />,
                    color: 'red',
                    withBorder: true,
                    className: '!border-red-500'
                });
            })
        }
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Login</div>
        <TextInput label="Your Email" placeholder="Your Email" value={user.emailId} name="emailId"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} withAsterisk
            onChange={handleChange} error={formError?.emailId}
        />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Password" placeholder="Password" value={user.password} name="password" onChange={handleChange}
            error={formError?.password}
        />
        <Button autoContrast variant="filled" onClick={handleLogin}>Login</Button>
        <div className="mx-auto">Don't Have an account? <span onClick={() => {
            navigate("/signup")
            setUser(defaultUser);
            setFormError(defaultUser);
         }}
            className="text-bright-sun-450 hover:underline">
            SignUp</span></div>
    </div>
}

export default Login