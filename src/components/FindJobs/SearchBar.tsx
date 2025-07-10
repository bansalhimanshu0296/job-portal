import { Divider, RangeSlider } from "@mantine/core"
import { dropdownData } from "../../data/JobsData"
import MultiInput from "./MultiInput"
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([80, 120]);
    return <div className="flex px-5 py-8">
        {
            dropdownData.map((item, index) =><>
                    <div key={ index } className="w-1/5">
                        <MultiInput {...item} />
                    </div>
                    <Divider mr='xs' size='xs' orientation="vertical"/>
                </>
            )
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
            <div className="flex justify-between text-sm">
                <div>Salary(PA)</div>
                <div>${value[0]} K - ${value[1]} K</div>
            </div>
            <RangeSlider color="brightSun.4" size='xs' value={value} onChange={setValue}
                min={50}
                max={150}
                labelTransitionProps={
                    {
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                }
            }/>
        </div>
    </div>
}

export default SearchBar