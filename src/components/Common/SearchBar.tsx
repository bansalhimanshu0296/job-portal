import { Divider, Input, RangeSlider } from "@mantine/core"
import { dropdownData } from "../../data/JobsData"
import MultiInput from "./MultiInput"
import { useMemo, useState } from "react";
import { talentSearchFields } from "../../data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

interface Props{
    isJobSearch: boolean
}

const SearchBar = (props: Props) => {
    const [value, setValue] = useState<[number, number]>([80, 120]);

    const SearchData = useMemo(() => props.isJobSearch ? dropdownData : talentSearchFields, [props.isJobSearch])

    return <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
        {
            !props.isJobSearch && <div className="flex items-center">
                <div className="text-bright-sun-450 bg-mine-shaft-900 rounded-full p-1 mr-2">
                    <IconUserCircle/>
                </div>
                <Input className="[&_input]:!placeholder-mine-shaft-200" variant="unstyled" placeholder="Talent Name" />
            </div>
        }
        {
            SearchData.map((item, index) =><>
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