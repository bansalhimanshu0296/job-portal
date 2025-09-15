import { Button, Modal,  PasswordInput,  PinInput,  TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePassword, sendOtp, verifyOtp } from "../../services/AuthenticationService";
import signupValidation from "../../utils/signUpValidation";
import notificationComponent from "../Common/Notification";
import { useInterval } from "@mantine/hooks";

interface ResetPasswordProps{
    opened: boolean;
    close: () => void
}

const ResetPassword = (props: ResetPasswordProps) => {
    
    const [emailId, setEmailId] = useState("");

    const [password, setPassword] = useState("");

    const [passErr, setPassErr] = useState("");

    const [otpSent, setOtpSent] = useState(false);

    const [otpSending, setOtpSending] = useState(false);

    const [verified, setVerified] = useState(false);

    const [resendLoader, setResendLoader] = useState(false);

    const [seconds, setSeconds] = useState(60);

    const interval = useInterval(() => {
        if (seconds === 0) {
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        } else {
            setSeconds((s) => s - 1);
        }
    }, 1000);

    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(emailId)
            .then(() => {
                notificationComponent('OTP Sent Successfully', 'Enter OTP to reset password.', false);
                setOtpSent(true);
                setOtpSending(false);
                setResendLoader(true);
                interval.start();
            })
            .catch((err) => {
                setOtpSending(false);
                notificationComponent('OTP Sending Failed', err?.response?.data?.errorMessage ?? 'Some error occurred...', true);
            });
    };

    const handleVerifyOtp = (otp: string) => {
        verifyOtp(emailId, otp)
            .then(() => {
                notificationComponent('OTP Verified','Enter new paasword.', false);
                setVerified(true);
            }).catch((err) => {
                notificationComponent('OTP Verification Failed', err?.response?.data?.errorMessage ?? 'Some error occurred...', true);
            });
    }

    const changeEmail = () => {
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    } 

    const handleResendOtp = () => {
        if (resendLoader) return;
        handleSendOtp();
    }

    const handleResetPassword = () => {
        changePassword(emailId, password)
            .then(() => {
                notificationComponent('Password Changed Successfully', 'Login with new Password.', true);
                props.close();
            }).catch((err) => {
                notificationComponent('Password Reset Failed', err?.response?.data?.errorMessage ?? 'Some error occurred...', true);
            })
    }

    return <Modal opened={props?.opened} onClose={props?.close} title="Reset Password">
        <div className="flex flex-col gap-6">
            <TextInput label="Email" placeholder="Your Email" value={emailId} name="emailId"
                leftSection={<IconAt size={16} />} withAsterisk
                onChange={(e) => setEmailId(e.target.value)} rightSectionWidth="xl"
                rightSection={<Button size="xs" loading={otpSending && !otpSent} className="mr-1" autoContrast variant="filled"
                disabled={emailId === "" || otpSent} onClick={handleSendOtp}>Send OTP</Button>}
            />
            {otpSent &&
                <PinInput type="number" length={6} className="mx-auto" size="md" gap="lg" onComplete={handleVerifyOtp} />}
            {
                otpSent && 
                <div className="flex gap-2">
                    <Button autoContrast variant="light" color="brightSun.4" fullWidth loading={otpSending}
                            onClick={handleResendOtp}>{resendLoader ? seconds : "Resend OTP"}</Button>
                    <Button autoContrast variant="filled" fullWidth onClick={changeEmail}>Change Email</Button>
                </div>
            }
            {
                verified && <PasswordInput withAsterisk leftSection={<IconLock size={18} />}
                    label="Password" placeholder="Password" value={password} name="password" onChange={(e) => {
                        setPassword(e.target.value);
                        setPassErr(signupValidation("password", e.target.value));
                    }}
                    error={passErr}
                />
            }
            {
                verified && <Button onClick={handleResetPassword} autoContrast variant="filled" >
                    Change Password
                </Button>
            }
        </div>
    </Modal>
}

export default ResetPassword