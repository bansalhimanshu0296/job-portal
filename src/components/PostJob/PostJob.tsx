import { Button, TagsInput } from "@mantine/core";
import { fields } from "../../data/PostJob"
import SelectInput from "./SelectInput"
import TextEditor from "./TextEditor";

const PostJob = () => {
    const select = fields;
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">
            Post a Job
        </div>
        <div className="flex flex-col gap-5">
            {
                select.map((_, i) =>
                    i % 2 === 0 ? (
                        <div key={i} className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput {...select[i]} />
                            {select[i + 1] && <SelectInput {...select[i + 1]} />}
                        </div>
                    ) : null
                )
            }
            <TagsInput label="Skills" placeholder="Enter Skill" splitChars={[",", " ", "|"]} clearable acceptValueOnBlur />
            <div className="[&_button[data-active='true']]:!text-bright-sun-450 [&_button[data-active='true']]:!bg-bright-sun-450/20">
                <div className="text-sm font-semibold">Job Description</div>
                <TextEditor />
            </div>
            <div className="flex gap-4">
                <Button color="brightSun.4" variant="light">Publish Job</Button>
                <Button color="brightSun.4" variant="outline">Save as Draft</Button>
            </div>
        </div>
    </div>
}

export default PostJob