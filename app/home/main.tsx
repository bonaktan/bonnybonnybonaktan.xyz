import React from "react";
import leejeans from "/leejeans.jpg"
interface WorksProps {
    name: string;
    description: string;
    // add other props here
}

const Title = () => {
    return (
        <div className="text-center">
            <span className="flex justify-center text-7xl"><p className="">hi, im&nbsp;</p><p className="text-primary-300">bonny</p></span>
            <p className="text-5xl">i do random things</p>
            <p>this is still a wip oki :)</p>
        </div>
    );
}
const Contact = () => {
    return (
        <div className="flex ml-70 mr-70 text-center">
            <p className="basis-1/4">mail: bon@bonnybonnybonaktan.xyz</p>
            <p className="basis-1/4">github: bonaktan</p>
            <p className="basis-1/4">discord: bonnyyyy_tan</p>
            <p className="basis-1/4">roblox: @bonnybonnybonaktan</p>
        </div>
    );
}
const Works:React.FC<WorksProps> = ({ name, description }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
}
export const Main = () => {
    return (
        <div>
            <div className="pt-25">
                <Title />
                <Contact />
            </div>
            <div className="mt-10">
                <p>--- i still hadn&apos;t gotten around to styling this part :3 ---</p>
                <p>works:</p>
                <Works name="Realistic Boiling Water Reactor Simulator - Quality Assurance" description="hey developer, we reached -65535 aprm" />
                <Works name="ENGRISH - Head Developer" description="fix your engrish with engrish so that it turns to english" />
                <Works name="ITskolarSystem - Backend Developer, System Admin" description='a custom bot that we like to describe as "shit"' />
            </div>
            <div className="flex mt-2">
                <p>message of the push:</p>
                <img src={leejeans} className="ml-1 w-32"/>
            </div>
        </div>
    );
}
