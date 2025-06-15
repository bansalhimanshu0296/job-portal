import { Carousel } from "@mantine/carousel"
import { jobCategories } from "../../data/Data"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

const JobCategories = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
            Browse <span className="text-bright-sun-400">Job</span> Category
        </div>
        <div className="text-center mx-auto mb-10 text-lg text-mine-shaft-300 w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
        
        <Carousel
            slideSize="22%"
            slideGap="md"
            emblaOptions={{ loop: true }}
            className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none hover:[&_button]:!opacity-75 [&_button]:!opacity-0 [&_button:hover]:!opacity-100"
            nextControlIcon={<IconArrowRight className="h-8 w-8" />}
            previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        >
            {
                jobCategories.map((category, index) => <Carousel.Slide key={index}>
                    <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">
                        <div className="p-2 bg-bright-sun-300 rounded-full">
                            <img className="w-8 h-8" src={`/category/${category.name}.png`} alt={category.name} />
                        </div>
                        <div className="text-mine-shaft-200 text-xl font-semibold">{category.name}</div>
                        <div className="text-sm text-center text-mine-shaft-300">{category.desc}</div>
                        <div className="text-bright-sun-300 text-lg">{category.jobs}+ new job posted</div>
                    </div>
                </Carousel.Slide>)
            }
        </Carousel>
    </div>
}

export default JobCategories