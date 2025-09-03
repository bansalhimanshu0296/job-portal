import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router"

const SignUp = () => {
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput label="Full Name" placeholder="Your Name" withAsterisk />
        <TextInput label="Your Email" placeholder="Your Email"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} withAsterisk />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Password" placeholder="Password" />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Confirm Password" placeholder="Confirm Password" />
        <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
        <Button autoContrast variant="filled">Sign Up</Button>
        <div className="mx-auto">Have an account? <Link to="/login"
            className="text-bright-sun-450 hover:underline">
            Login</Link></div>
    </div>
}

export default SignUp