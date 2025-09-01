import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconPaperclip } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router";

const ApplyJob = () => {
    const [preview, setPreview] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const [second, setSecond] = useState<number>(5);
    const navigate = useNavigate();
    const handlePreivew = () => {
        setPreview(!preview);
        window.scroll({ top: 0, behavior: "smooth" });
    }
    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSecond(x);
            if(x === 0) navigate('/find-jobs')
        }, 1000)
    }
    return <>
        <div className="w-2/3 mx-auto">
            <LoadingOverlay className="!fixed"
            visible={submit}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'brightSun.4', type: 'bars' }}
            />
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-14" src={`/icons/Google.png`} alt="Google" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl">Software Engineer</div>
                        <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago &bull; 48 Applicants</div>
                    </div>
                </div>
            </div>
            <Divider my="xl" />
            <div className="font-semibold text-xl mb-5">Submit Your Application</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput label="Full Name" readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} placeholder="Enter Name" withAsterisk />
                    <TextInput label="Email" readOnly={preview} variant={preview ? "unstyled" : "default"} placeholder="Enter Email"
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} withAsterisk />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput label="Phone Number" readOnly={preview} variant={preview ? "unstyled" : "default"} withAsterisk
                        placeholder="Enter Phone Number" hideControls className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        min={0} max={9999999999} clampBehavior="strict" />
                    <TextInput label="Personal Website" readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} placeholder="Enter Url" withAsterisk />
                </div>
                <FileInput leftSection={<IconPaperclip stroke={1.5} />} readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Attach your CV"
                    placeholder="Your CV" leftSectionPointerEvents="none" withAsterisk />
                <Textarea placeholder="Tell something about yourself..." readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Cover Letter" autosize minRows={4}
                    withAsterisk />
                {!preview && <Button color="brightSun.4" variant="light" onClick={handlePreivew}>Preview</Button>}
                {preview &&
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <Button fullWidth color="brightSun.4" variant="outline" onClick={handlePreivew}>Edit</Button>
                        <Button fullWidth color="brightSun.4" variant="light" onClick={handleSubmit}>Submit</Button>
                    </div>
                }
            </div>
        </div>
        <Notification icon={<IconCheck size={20} />} color="teal" title="Application Submitted!" mt="md" withCloseButton={false}
            withBorder className={`!border-bright-sun-400 !fixed top-0 z-[1001] left-[35%] -translate-y-25 transition duration-300 ease-in-out
            ${submit ? "translate-y-0" : ""} `} >
            Redirecting to Find Jobs in {second} seconds...
        </Notification>
    </>
}

export default ApplyJob