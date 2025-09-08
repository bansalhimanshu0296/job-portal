import { Button, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router"

const Login = () => {
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput label="Your Email" placeholder="Your Email"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} withAsterisk />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Password" placeholder="Password" />
        <Button autoContrast variant="filled">Login</Button>
        <div className="mx-auto">Don't Have an account? <Link to="/signup"
            className="text-bright-sun-450 hover:underline">
            SignUp</Link></div>
    </div>
}

export default Login