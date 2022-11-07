import React from "react"
import Resume from "../documents/RESUME_Base.pdf"

export default function Footer (){
    return (
        <footer id="contact" class="p-4 rounded-t-2xl bg-white dark:bg-gray-900">
            <div class="flex flex-col py-16 md:px-4 justify-center items-center">
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center -mb-1 sm:-mb-2">Think I fit for a role?</p>
                <p class="text-gray-900 dark:text-white text-center
                font-semibold text-5xl sm:text-7xl pb-8">
                Let's work together!
                </p>
                <p class="text-gray-500 whitespace-nowrap font-sans text-center text-sm uppercase px-4 -mb-1 sm:-mb-2">email</p>
                <div class="flex items-center -space-x-4 overflow-hidden">
                    <a class="rounded-full bg-blue-500 p-3 sm:p-4 hover:bg-blue-400 z-10"
                        href="mailto:ck.kevinchandra@gmail.com" target="_blank" rel="noopener noreferrer">
                        <svg className="h-5 sm:h-7 fill-white" viewBox="0 0 24 24">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                        </svg>
                    </a>
                    <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-base sm:text-xl
                    bg-gray-200 dark:bg-gray-800 rounded-xl py-2 pr-4 pl-7 sm:pr-8 sm:pl-10">
                        ck.kevinchandra@gmail.com
                    </p>
                </div>
                
            </div>

            <div class="flex justify-between items-center">
                <hr class="grow border-gray-500"/>
                <p class="text-gray-500 whitespace-nowrap font-sans text-center uppercase px-4">resources</p>
                <hr class="grow border-gray-500"/>
            </div>
            {/* All the link icons */}
            <div class="flex space-x-8 justify-center pt-3 pb-5">
                <a class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                href={Resume} target="_blank" rel="noopener noreferrer"
                title="Resume">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                    <span class="sr-only">Resume download</span>
                </a>
                <a class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                href="https://www.linkedin.com/in/kevin-chandra98/" target="_blank" rel="noopener noreferrer"
                title="LinkedIn">
                <svg fill="currentColor" class="w-7 h-7" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span class="sr-only">LinkedIn page</span>
                </a>
                <a class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                href="https://github.com/Sclatch" target="_blank" rel="noopener noreferrer"
                title="Github">
                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">GitHub account</span>
                </a>
                <a class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                href="https://www.pixiv.net/en/users/41139695" target="_blank" rel="noopener noreferrer"
                title="Pixiv">
                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"/>
                    </svg>
                    <span class="sr-only">Pixiv account</span>
                </a>
                <a href="mailto:ck.kevinchandra@gmail.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                title="Email">
                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                    </svg>
                    <span class="sr-only">Email</span>
                </a>
            </div>

            <div class="flex flex-wrap justify-between w-full p-4 rounded-xl 
            bg-gray-200 dark:bg-gray-800">
                <p class="text-gray-500 font-sans pr-0 sm:pr-8">
                    This website was made with Node.JS, React, Gatsby, and Tailwind CSS
                </p>
                <p class="text-gray-500 font-sans font-semibold">
                    Kevin Chandra, 2022
                </p>
            </div>

        </footer>

    )
}