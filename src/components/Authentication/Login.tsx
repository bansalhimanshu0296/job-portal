import { Button, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react";
import { Link } from "react-router"
import { defaultUser, tranformValueforLoginApi, type loginAPIInterface } from "../../model/userModel";
import { loginUser } from "../../services/AuthenticationService";

const Login = () => {
    const [user, setUser] = useState(defaultUser);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement >) => {
        setUser({ ...user, [event?.target?.name]: event?.target?.value });
    } 

    const handleLogin = () => {
        const registerApiValue: loginAPIInterface = tranformValueforLoginApi(user);
        loginUser(registerApiValue).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Login</div>
        <TextInput label="Your Email" placeholder="Your Email" value={user.emailId} name="emailId"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} withAsterisk
            onChange={handleChange}
        />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Password" placeholder="Password" value={user.password} name="password" onChange={handleChange} />
        <Button autoContrast variant="filled" onClick={handleLogin}>Login</Button>
        <div className="mx-auto">Don't Have an account? <Link to="/signup"
            className="text-bright-sun-450 hover:underline">
            SignUp</Link></div>
    </div>
}

export default Login