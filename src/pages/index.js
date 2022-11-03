import * as React from "react"
import Layout from "../components/layout"
import Resume from "../documents/RESUME_Base.pdf"

const IndexPage = () => {
  return (
    <Layout>
      <body id="home" class="pt-4 sm:pt-12">
        <div class="flex justify-center items-center py-20">
          <div class="flex flex-col">
            <span class="text-gray-900 dark:text-white font-sans text-lg sm:text-2xl sm:-ml-4 ">Hello, I am</span>
            <span class="box-decoration bg-gradient-to-r from-blue-400 to-cyan-300 text-white 
            dark:bg-gradient-to-r dark:from-blue-900 dark:to-cyan-900
            font-semibold text-4xl sm:text-7xl py-2 px-4 rounded-xl text-center whitespace-nowrap">
              Kevin 
              Chandra
            </span>
            <hr class="my-2 border-gray-900 dark:border-gray-500"/>
            <span class="text-gray-900 dark:text-white font-sans text-sm sm:text-xl text-center -mt-2">Recent Computer Science Graduate</span>

            {/* Index Buttons */}
            <div class="grid grid-cols-2 gap-2 mt-10 sm:mt-20">
              {/* Github Button */}
              <a class="flex items-center justify-center gap-2 rounded-xl p-2 sm:p-3 border-2 border-blue-500"
              href="https://github.com/Sclatch" target="_blank" rel="noopener noreferrer">
                <svg class="h-4 sm:h-7 fill-blue-500 dark:fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-blue-500 text-white whitespace-nowrap font-sans dark:text-white text-sm sm:text-xl">
                  Github Page
                </span>
              </a>
              {/* Resume Button */}
              <a class="flex items-center justify-center gap-2 rounded-xl bg-blue-500 p-2 sm:p-3"
              href={Resume} target="_blank" rel="noopener noreferrer">
                <svg className="h-4 sm:h-7 fill-white" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <span class="text-gray-900 text-white whitespace-nowrap font-sans text-sm sm:text-xl">
                  View Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
