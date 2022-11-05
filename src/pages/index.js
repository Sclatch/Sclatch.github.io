import * as React from "react"
import Layout from "../components/layout"
import Resume from "../documents/RESUME_Base.pdf"
import ProfilePic from "../images/pfp.jpg"
import MobileProfilePic from "../images/squarepfp.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <body>
        <div id="home" class="flex justify-center items-center py-24">
          <div class="flex flex-col">
            <p class="text-gray-900 dark:text-white font-sans text-lg sm:text-2xl sm:-ml-4 ">Hello, I am</p>
            <p class="box-decoration bg-gradient-to-r from-blue-400 to-cyan-300 text-white 
            dark:bg-gradient-to-r dark:from-blue-900 dark:to-cyan-900
            font-semibold text-4xl sm:text-7xl py-2 px-4 rounded-xl text-center whitespace-nowrap">
              Kevin 
              Chandra
            </p>
            <hr class="my-2 border-gray-900 dark:border-gray-500"/>
            <p class="text-gray-900 dark:text-white font-sans text-sm sm:text-xl text-center -mt-2">Recent Computer Science Graduate</p>

            {/* Index Buttons */}
            <div class="grid grid-cols-2 gap-2 mt-10 sm:mt-20">
              {/* Github Button */}
              <a class="flex group items-center justify-center gap-2 rounded-xl p-2 sm:p-3 border-2 border-blue-500 hover:border-blue-300 hover:dark:border-blue-500"
              href="https://github.com/Sclatch" target="_blank" rel="noopener noreferrer">
                <svg class="h-4 sm:h-7 fill-blue-500 dark:fill-white group-hover:dark:fill-blue-500 group-hover:fill-blue-300" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-blue-500 text-white group-hover:dark:text-blue-500 group-hover:text-blue-300 whitespace-nowrap font-sans dark:text-white text-sm sm:text-xl">
                  Github Page
                </p>
              </a>
              {/* Resume Button */}
              <a class="flex items-center justify-center gap-2 rounded-xl bg-blue-500 p-2 sm:p-3 hover:bg-blue-400"
              href={Resume} target="_blank" rel="noopener noreferrer">
                <svg className="h-4 sm:h-7 fill-white" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <p class="text-gray-900 text-white whitespace-nowrap font-sans text-sm sm:text-xl">
                  View Resume
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div id="about" class="lg:flex lg:justify-between items-center px-4 lg:px-12 py-11 bg-white dark:bg-gray-900">
          <div class="shrink-0 lg:order-last hidden lg:block">
            <img src={ProfilePic} class="w-96 rounded-xl" alt="Profile"/>
          </div>
          <div class ="grid grid-cols-1 lg:pr-12">
            <p class="text-gray-900 dark:text-white
            font-semibold text-5xl sm:text-7xl py-2 rounded-xl text-center lg:text-start whitespace-nowrap">
              About me
            </p>
            <hr class="my-2 border-gray-900 dark:border-gray-500"/>
            <div class="py-4 lg:order-last lg:hidden place-self-center">
              <img src={MobileProfilePic} class="rounded-full w-64" alt="Profile"/>
            </div>
            <p class="indent-12 text-gray-900 dark:text-white text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Velit ut tortor pretium viverra. Leo urna molestie at elementum eu. 
            Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Ut venenatis tellus in metus 
            vulputate eu scelerisque felis imperdiet. Orci porta non pulvinar neque. Quam quisque id diam vel 
            quam elementum pulvinar etiam. Velit aliquet sagittis id consectetur. Fringilla est ullamcorper eget 
            nulla facilisi etiam dignissim. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Habitasse 
            platea dictumst quisque sagittis purus sit amet volutpat. Vestibulum lorem sed risus ultricies tristique 
            nulla aliquet enim.

            Urna cursus eget nunc scelerisque viverra mauris in. Eu mi bibendum neque egestas congue quisque egestas 
            diam. Id cursus metus aliquam eleifend mi. Enim ut tellus elementum sagittis vitae et leo duis ut. 
            Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ipsum faucibus vitae aliquet 
            nec ullamcorper. Quis commodo odio aenean sed adipiscing diam. Nisi vitae suscipit tellus mauris a diam 
            maecenas sed enim. Urna duis convallis convallis tellus id interdum velit. Posuere urna nec tincidunt 
            praesent semper. Pellentesque id nibh tortor id aliquet lectus proin nibh. Eget nunc lobortis mattis aliquam. 
            Volutpat lacus laoreet non curabitur gravida.

            </p>
            {/* LinkedIn Button */}
            <a class="flex items-center justify-center lg:w-max mt-8 gap-2 rounded-xl bg-blue-500 p-3 lg:px-12 hover:bg-blue-400"
            href="https://www.linkedin.com/in/kevin-chandra98/" target="_blank" rel="noopener noreferrer">
              <svg className="h-7 fill-white" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <p class="text-gray-900 text-white whitespace-nowrap font-sans text-xl">
                LinkedIn Page
              </p>
            </a>
          </div>
        </div>

        {/* Work in Progress */}
        <div class="flex py-20 justify-center items-center px-6">
          <hr class="grow border-gray-400 -mr-14"/>
          <div class="grid justify-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" class="w-20 stroke-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
          <p class="text-gray-500 text-lg sm:text-2xl text-center">
            This website is still in progress
          </p>

          </div>
          <hr class="grow border-gray-400 -ml-14"/>
        </div>
      </body>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
