import React from "react";
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
            <p className="basis-1/4">mail: <a href="mailto:bon@bonnybonnybonaktan.xyz">bon@bonnybonnybonaktan.xyz</a></p>
            <p className="basis-1/4">github: <a href="https://github.com/bonaktan/">bonaktan</a></p>
            <p className="basis-1/4 flex flex-col"><p>discord: bonnybonnybon</p> <p>(userid: 860785995484758037)</p></p>
            <p className="basis-1/4">roblox: <a href="https://www.roblox.com/users/5722052356/profile">@bonnybonnybonaktan</a></p>
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
                <div className="p-2">
                    <p>current works:</p>
                    <Works name="Hydroelectric Simulator - Lead Tester" description="it's all a trauma response" />
                    <Works name="Hydroelectric Simulator - Systems Department" description="handcoded clankers? HELLYEAAAA" />
                    <Works name="ITskolarSystem - Backend Developer, System Admin" description='a custom bot that we like to describe as "shit"' />
                </div>
                <div className="p-2">
                    <p>past works:</p>
                    <Works name="Realistic Boiling Water Reactor Simulation Community - Quality Assurance (Nov 2025 - Apr 2026)" description="hey developer, we reached -65535 aprm" />
                    <Works name="Realistic Boiling Water Reactor Simulation Community - Technical Department (Apr 2026)" description="vibecoded clankers? hellyeaaaaaaaaaa" />  { /* i am not sure if this should be included ngl */ }
                    {/* <Works name="Deep Space Tycoon:Reborn - Quality Assurance (Jan 2026 - Feb 2026)" description="press button yes press button yes, ooo munni!" /> */}
                    <Works name="ENGRISH - Head Developer" description="fix your engrish with engrish so that it turns to english (Sep 2024 - Mar 2025)" />
                </div>
                <p className="p-2">
                    <p>Projects and Commissions</p>
                    <Works name="Pearl Horizon Airlines" description="part 1 of 2 on my airplane series" />
                    <Works name="Skybridge Airways" description="part 2 of 2 on my airplane series, now on c++" />
                    <Works name="Correct Responser" description="i am both too lazy and too workaholic to response 17 papers at ONCE." />
                </p>
            </div>
            <div className="flex mt-2">
                <p>message of the push: </p>
            </div>
        </div>
    );
}
