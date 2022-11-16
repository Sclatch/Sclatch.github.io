import React, { useState } from "react"
import ExemLogo from "../images/exem/logo_full.png"
import Sample1 from "../images/exem/sample1.png"
import Sample2 from "../images/exem/sample2.png"
import Sample3 from "../images/exem/sample3.png"
import Sample4 from "../images/exem/sample4.png"
import Sample5 from "../images/exem/sample5.png"

export default function ExemProject () {
    const [visibility, changeVisibility] = useState("hidden");
    const handleButton = () => {
        if (visibility === "hidden"){
            changeVisibility("block")
        }
        else {
            changeVisibility("hidden")
        }
    };

    return(
        <div class="flex flex-col items-center py-10">
            <img src={ExemLogo} alt="Expendable Employee Logo" class="invert dark:invert-0 px-4 h-full"/>
            <p class="text-gray-900 dark:text-white uppercase font-sans text-md sm:text-2xl text-center mb-4">A website for managing employees</p>
            <p class="text-gray-500 text-lg uppercase">Made with:</p>
            <div class="flex flex-wrap gap-4 justify-center p-4 mx-4
            bg-gray-200 dark:bg-gray-800 rounded-xl">
                <img src={require('../icons/html.svg').default} class="h-8" loading="lazy" alt="HTML" title="HTML"/>
                <img src={require('../icons/css.svg').default} class="h-8" loading="lazy" alt="CSS" title="CSS"/>
                <img src={require('../icons/js.svg').default} class="h-8" loading="lazy" alt="JavaScript" title="JavaScript"/>
                <img src={require('../icons/nodejs.svg').default} class="h-8" loading="lazy" alt="Node.js" title="Node.js"/>
                <img src={require('../icons/react.svg').default} class="h-8" loading="lazy" alt="React" title="React"/>
                <img src={require('../icons/material-ui.svg').default} class="h-8" loading="lazy" alt="Material UI" title="Material UI"/>
                <img src={require('../icons/mongodb.svg').default} class="h-8" loading="lazy" alt="MongoDB" title="MongoDB"/>
            </div>

            <div class="md:mx-8 my-4
            bg-gray-200 dark:bg-gray-800 md:rounded-xl">
                <div class="flex snap-x overflow-x-auto space-x-8 p-4">
                    <div class="shrink-0 snap-center">
                        <img src={Sample1} alt="Screenshot1" class="h-40 md:h-96 drop-shadow-xl"/>
                    </div>
                    <div class="shrink-0 snap-center">
                        <img src={Sample2} alt="Screenshot2" class="h-40 md:h-96 drop-shadow-xl"/>
                    </div>
                    <div class="shrink-0 snap-center">
                        <img src={Sample3} alt="Screenshot3" class="h-40 md:h-96 drop-shadow-xl"/>
                    </div>
                    <div class="shrink-0 snap-center">
                        <img src={Sample4} alt="Screenshot4" class="h-40 md:h-96 drop-shadow-xl"/>
                    </div>
                    <div class="shrink-0 snap-center">
                        <img src={Sample5} alt="Screenshot5" class="h-40 md:h-96 drop-shadow-xl"/>
                    </div>
                </div>
                
            </div>

            <div class={`grow bg-gray-200 dark:bg-gray-800 rounded-xl p-4 py-6 mx-4 mb-4 sm:mx-8 md:mx-14 lg:mx-24 ` + visibility}>
                <p class="text-center text-gray-900 dark:text-white text-md lg:text-lg leading-relaxed lg:leading-loose">
                    A managerial tool web application for managing your employees. To access the application, 
                    a user must register a company and create an account. From there, the creator will be 
                    made an admin and they may add or manage employees, change their schedules, fire a random 
                    non-admin employee, etc. Users within the company may send messages, make events, and 
                    manage work schedules. User account information are stored in a MongoDB database.
                    <br/><br/>
                    User authentication for validation, login credentials, and priviledges are handle 
                    using JSON Web Tokens. Before certain data are stored in the MongoDB database, 
                    the data is salted and hashed using bycrpt. Schema Validation is also used to ensure 
                    that the data being processed and stored remain consistent.
                </p>
            </div>

            <button class="flex items-center py-2 px-4 gap-x-2
            bg-gray-200 dark:bg-gray-800 rounded-full
            border border-gray-500
            hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={handleButton}>
                <div class={`transition ease-in-out duration-700 ${visibility === "hidden" ? "":"rotate-180"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-6 h-6 stroke-gray-900 dark:stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <p class="text-gray-900 dark:text-white text-sm uppercase">
                    {visibility === "hidden" ? "show description":"hide description"}
                </p>
            </button>
            
            <a class="flex group items-center justify-center gap-2 p-3 py-2 m-4
            rounded-xl border-2 border-blue-500 hover:border-blue-300 hover:dark:border-blue-500"
            href="https://github.com/Sclatch/Expendable-Employees/tree/main/expendable-employees" target="_blank" rel="noopener noreferrer">
                <svg className="h-7 fill-blue-500 dark:fill-white group-hover:dark:fill-blue-500 group-hover:fill-blue-300" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-blue-500 text-white group-hover:dark:text-blue-500 group-hover:text-blue-300 whitespace-nowrap font-sans dark:text-white">
                Code
                </p>
            </a>
        </div>
    )
}