import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { Link } from "react-router"
import { defaultUser, tranformValueforRegisterApi, type registerAPIInterface } from "../../model/userModel"
import { registerUser } from "../../services/AuthenticationService"

const SignUp = () => {
    
    const [user, setUser] = useState(defaultUser);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement > | string) => {
        if (typeof (event) == 'string') {
            setUser({ ...user, accountType: event });
        } else {
            setUser({ ...user, [event?.target?.name]: event?.target?.value });
        }
    }

    const handleSignUp = () => {
        const registerApiValue: registerAPIInterface = tranformValueforRegisterApi(user);
        registerUser(registerApiValue).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput label="Full Name" placeholder="Your Name" name="name" withAsterisk value={user.name} onChange={handleChange} />
        <TextInput label="Your Email" placeholder="Your Email"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} withAsterisk value={user.emailId}
            onChange={handleChange} name="emailId" />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Password" placeholder="Password" value={user.password} onChange={handleChange} name="password"/>
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Confirm Password" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange}
            name="confirmPassword"
        />
        <Radio.Group
            label="You are?"
            withAsterisk
            value={user.accountType}
            onChange={handleChange}
            name="accountType"
        >
            <Group mt="xs">
                <Radio className="py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-450/5
                 hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-450"
                    autoContrast value="APPLICANT" label="Applicant" />
                <Radio className="py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-450/5
                 hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-450"
                    autoContrast value="EMPLOYER" label="Employer" />
            </Group>
        </Radio.Group>
        <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
        <Button autoContrast variant="filled" onClick={handleSignUp}>Sign Up</Button>
        <div className="mx-auto">Have an account? <Link to="/login"
            className="text-bright-sun-450 hover:underline">
            Login</Link></div>
    </div>
}

export default SignUp