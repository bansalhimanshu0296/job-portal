import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../data/Profile"
import SelectInput from "./SelectInput"
import { useState, type Dispatch, type SetStateAction } from "react";
import type { experienceData } from "./ExpCard";
import { MonthPickerInput } from "@mantine/dates";

export type expInputData =experienceData & {
    setEdit: Dispatch<SetStateAction<boolean>>;
    add?: boolean;
}

const ExpInput = (props: expInputData) => {
    const select = fields;
    const [startDate, setStartDate] = useState<string | null>(props?.startDate);
    const [endDate, setEndDate] = useState<string | null>(props?.endDate !== "Present" ? props?.endDate : null);
    const [desc, setDesc] = useState(props?.description)
    const [checked, setChecked] = useState<boolean>(props?.endDate === "Present" )
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props?.add ? "Add" : "Edit"} Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea label="Summary" value={desc} onChange={(e) => setDesc(e.target.value)}
            autosize minRows={3} placeholder="Enter Summary..." />
        <div className="flex gap-10 [&>*]:w-1/2 justify-between">
            <MonthPickerInput withAsterisk maxDate={endDate || undefined} label="Start Date" placeholder="Pick Start Date" value={startDate}
                onChange={setStartDate} />
            <MonthPickerInput minDate={startDate || undefined} maxDate={new Date()} label="End Date" placeholder="Pick End Date" value={endDate}
                onChange={setEndDate} disabled={checked} />
        </div>
        <Checkbox autoContrast label="Currently working here " checked={checked} onChange={
                (e) => setChecked(e.target.checked)
            } />
        <div className="flex gap-5">
            <Button color="brightSun.4" onClick={() => props?.setEdit(false)} variant="outline">{ props?.add ? "Add" : "Save"}</Button>
            <Button color="red.8" onClick={()=>props?.setEdit(false)} variant="light">Cancel</Button>
        </div>
    </div>
}

export default ExpInput