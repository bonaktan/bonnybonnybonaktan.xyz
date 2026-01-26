import React from "react";

function Title() {
    return (
        <div>
            <p>hi, im bonny</p>
            <p>i create unreadable literature</p>
            
        </div>
    );
}
function Contact() {
    return (
        <div>
            <p>contact:</p>
            <p>mail: bon@bonnybonnybonaktan.xyz</p>
            <p>github: bonaktan</p>
            <p>discord: bonnyyyy_tan</p>
            <p>roblox: @bonnybonnybonaktan</p>
        </div>
    )
}
function Works() {
    return (
        <div>
            <p>Title</p>
            <p>Description</p>
        </div>
    )
}
export function Main() {
    return (
        <div>
            <Title />
            <Contact/>
            <div>
                <p>works:</p>
                <Works />
            </div>
            <p>message of the push: 君が好きよ、 今もずっと好きよ。</p>
        </div>
    );
}
