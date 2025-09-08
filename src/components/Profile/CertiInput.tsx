import { useState, type Dispatch, type SetStateAction } from "react";
import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../../data/Profile";
import { MonthPickerInput } from "@mantine/dates";

export interface certiInputData {
    setEdit: Dispatch<SetStateAction<boolean>>;
}

const CertiInput = (props: certiInputData) => {
    const [issueDate, setIssueDate] = useState<string|null>(null)
    const select = fields;
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput label="Title" withAsterisk placeholder="Enter title" />
            <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={new Date()} label="Issue Date"
                placeholder="Pick Issue Date" value={issueDate} onChange={setIssueDate} />
            <TextInput label="Certification ID" withAsterisk placeholder="Enter ID" />
        </div>
        <div className="flex gap-5">
            <Button color="brightSun.4" onClick={() => props?.setEdit(false)} variant="outline">Add</Button>
            <Button color="red.8" onClick={()=>props?.setEdit(false)} variant="light">Cancel</Button>
        </div>
    </div>
}

export default CertiInput