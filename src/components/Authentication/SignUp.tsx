import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router"
import { defaultUser, tranformValueforRegisterApi, type registerAPIInterface, type registerValidationSchema, type userInterface } from "../../model/userModel"
import { registerUser } from "../../services/AuthenticationService"
import signupValidation from "../../utils/signUpValidation"
import notificationComponent from "../Common/Notification"

const SignUp = () => {
    
    const [user, setUser] = useState<userInterface>(defaultUser);

    const [formError, setFormError] = useState<registerValidationSchema>(defaultUser);

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement > | string) => {
        if (typeof (event) == 'string') {
            setUser({ ...user, accountType: event });
            return;
        }   
        let name = event?.target?.name;
        let value = event?.target?.value;
        setUser({ ...user, [name]: value });
        setFormError({
            ...formError, [name]: signupValidation(name, value)
        })
        if (name === 'password' && user.confirmPassword.length !== 0) {
            if(user.confirmPassword !== value)
                setFormError({
                    ...formError,'confirmPassword': 'Passwords do not match.'
                })
            else
                setFormError({
                    ...formError,'confirmPassword': ''
                })
        }
        if (name === 'confirmPassword'){
            if( user.password !== value) 
                setFormError({
                    ...formError, [name]: 'Passwords do not match.'
                })
            else
                setFormError({
                    ...formError, [name]: ''
                })
        }
        
    }

    const handleSignUp = () => {
        let valid: boolean = true, newFormError: {[key: string]: string} = {};
        for (const key of Object.keys(user) as Array<keyof userInterface>) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signupValidation(key, user[key]);
            else if (user[key] !== user["password"]) newFormError[key] = 'Passwords do not match.';
            if (newFormError[key]) valid = false;
        }
        setFormError(prev => ({ ...prev, ...newFormError }))
        
        if (valid) {
            const registerApiValue: registerAPIInterface = tranformValueforRegisterApi(user);
            registerUser(registerApiValue).then(() => {
                setUser(defaultUser);
                notificationComponent('Registered Successfully', 'Redirecting to login page...', false);
                setTimeout(() => {
                    navigate("/login")
                }, 4000);
            }).catch((err) => {
                notificationComponent('Registration Failed', err?.response?.data?.errorMessage ?? 'Some error occurred...', true);
            });
        }
        
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput label="Full Name" placeholder="Your Name" name="name" withAsterisk value={user.name}
            onChange={handleChange} error={formError.name} />
        <TextInput label="Email" placeholder="Your Email"
            leftSection={<IconAt size={16} />} withAsterisk value={user.emailId}
            onChange={handleChange} name="emailId" error={formError.emailId} />
        <PasswordInput withAsterisk leftSection={<IconLock size={18} />}
            label="Password" placeholder="Password" value={user.password} onChange={handleChange} name="password"
            error={formError.password}
        />
        <PasswordInput withAsterisk leftSection={<IconLock size={18} />}
            label="Confirm Password" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange}
            name="confirmPassword" error={formError.confirmPassword}
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
        <div className="mx-auto">Have an account? <span onClick={() => {
            navigate("/login");
            setUser(defaultUser);
            setFormError(defaultUser);
        }}
            className="text-bright-sun-450 hover:underline">
            Login</span></div>
    </div>
}

export default SignUp