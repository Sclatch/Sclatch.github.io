import * as React from "react"
import Layout from "../components/layout"
import Resume from "../documents/RESUME_Base.pdf"
import MobileProfilePic from "../images/squarepfp.jpg"

export const Head = () => (
  <>
    <title>Kevin Chandra</title>
    <meta name="description" content="Kevin's personal website" />
    <meta name="author" content="Kevin Chandra"/>
  </>
)

const IndexPage = () => {
  return (
    <Layout>
      <body>
        {/* Home Intro */}
        <div id="home" class="flex justify-center items-center py-24">
          <div class="flex flex-col">
            <p class="text-gray-900 dark:text-white font-sans text-lg sm:text-2xl sm:-ml-4 z-10">Hello, I am</p>
            <p class="box-decoration bg-gradient-to-r from-blue-400 to-cyan-300 text-white 
            transition ease-in-out hover:scale-110 duration-700
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
        <div id="about" class="lg:flex lg:justify-between items-center px-4 lg:px-12 lg:pr-4 py-11 bg-white dark:bg-gray-900 shadow-lg">
          <div class="self-stretch w-full lg:order-last hidden lg:block -my-11
          bg-center bg-no-repeat bg-cover bg-[url('../images/pfp.jpg')]">
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
            <p class="text-gray-900 dark:text-white text-lg lg:text-xl leading-relaxed lg:leading-loose">
              <p class="indent-6 lg:indent-12">
              I recently graduated from Ontario Tech University with a Bachelor's degree 
              in Computer Science specializing in Data Science. I'm a passionate programmer 
              and a digital artist that is eager to learn new things to challenge myself. 
              I have made multiple software projects under my belt, which can be seen in 
              details on my Github page. Here are some points about myself:
              </p>

              <ul class="list-disc list-outside ml-8 lg:ml-16 py-4">
                <li>I have experience on multiple programming languages such as: C++, C#, Java, Python, etc.</li>
                <li>I enjoy designing UIs. I excelled at front-end and eager to learn UX design.</li>
                <li>I am a multilingual; I speak Indonesian (native), English, German and learning Japanese.</li>
                <li>I have been a digital artist for more than a decade and have been a freelance artist taking commissions online.</li>
              </ul>

              <p class="indent-6 lg:indent-12">
              I'm seeking for a opportunity that puts me in professional settings, 
              discover new experience, and apply the knowledge I have learned. 
              I know multiple frameworks, tools, environments, etc., 
              more information below. This website contains most of my projects/works and contacts.
              </p>

            </p>
            {/* LinkedIn Button */}
            <a class="flex items-center justify-center lg:w-max mt-4 gap-2 rounded-xl bg-blue-500 p-3 lg:px-12 hover:bg-blue-400"
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

        {/* Technical Skills */}
        <div class="flex flex-wrap justify-evenly py-8 px-4 lg:px-36 gap-y-4 gap-x-12">
          <div class="flex flex-col justify-center items-center p-6
          rounded-xl bg-white dark:bg-gray-900 drop-shadow-lg">
            <p class="text-gray-900 dark:text-white
            font-semibold text-2xl sm:text-4xl pb-8 text-center lg:text-start">
              Programming Languages
            </p>
            <div class="flex flex-wrap gap-8 justify-center">
              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/cpp.svg').default} class="h-14" loading="lazy" alt="C++"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">C++</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/csharp.svg').default} class="h-14" loading="lazy" alt="C#"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">C#</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/java.svg').default} class="h-14" loading="lazy" alt="Java"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Java</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/python.svg').default} class="h-14" loading="lazy" alt="Python"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Python</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/js.svg').default} class="h-14" loading="lazy" alt="JavaScript"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">JavaScript</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/html.svg').default} class="h-14" loading="lazy" alt="HTML"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">HTML</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/css.svg').default} class="h-14" loading="lazy" alt="CSS"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">CSS</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/dart.svg').default} class="h-14" loading="lazy" alt="Dart"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Dart</p>
              </div>
              
            </div>
          </div>

          <div class="flex flex-col justify-center items-center p-6
          rounded-xl bg-white dark:bg-gray-900 drop-shadow-lg">
            <p class="text-gray-900 dark:text-white
            font-semibold text-2xl sm:text-4xl pb-8 text-center lg:text-start whitespace-nowrap">
              Tools / Environments
            </p>
            <div class="flex flex-wrap gap-8 justify-center">
              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/numpy.svg').default} class="h-14" loading="lazy" alt="NumPy"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">NumPy</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/pandas.svg').default} class="h-14" loading="lazy" alt="Pandas"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Pandas</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/tensorflow.svg').default} class="h-14" loading="lazy" alt="TensorFlow"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">TensorFlow</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/flutter.svg').default} class="h-14" loading="lazy" alt="Flutter"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Flutter</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center items-center p-6
          rounded-xl bg-white dark:bg-gray-900 drop-shadow-lg">
            <p class="text-gray-900 dark:text-white
            font-semibold text-2xl sm:text-4xl pb-8 text-center lg:text-start whitespace-nowrap">
              Frameworks
            </p>
            <div class="flex flex-wrap gap-8 justify-center">
              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/nodejs.svg').default} class="h-14" loading="lazy" alt="Node.JS"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Node.js</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/react.svg').default} class="h-14" loading="lazy" alt="React"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">React</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/gatsby.svg').default} class="h-14" loading="lazy" alt="Gatsby"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Gatsby</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/material-ui.svg').default} class="h-14" loading="lazy" alt="Material UI"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Material UI</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/tailwind.svg').default} class="h-14" loading="lazy" alt="Tailwind"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Tailwind</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/jquery.svg').default} class="h-14" loading="lazy" alt="jQuery"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">jQuery</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center items-center p-6
          rounded-xl bg-white dark:bg-gray-900 drop-shadow-lg">
            <p class="text-gray-900 dark:text-white
            font-semibold text-2xl sm:text-4xl pb-8 text-center lg:text-start whitespace-nowrap">
              Databases
            </p>
            <div class="flex flex-wrap gap-8 justify-center">
              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/mongodb.svg').default} class="h-14" loading="lazy" alt="MongoDB"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">MongoDB</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/firebase.svg').default} class="h-14" loading="lazy" alt="Firebase"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Firebase</p>
              </div>

              <div class="grid gap-2 place-items-center">
                <img src={require('../icons/postgresql.svg').default} class="h-14" loading="lazy" alt="PostgreSQL"/>
                <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">PostgreSQL</p>
              </div>
            </div>
          </div>

        </div>

        {/* Software Projects */}
        <div id="projects" class="flex flex-col items-center px-4 lg:px-12 py-11 bg-white dark:bg-gray-900 drop-shadow-2xl">
          <p class="text-gray-900 dark:text-white
          font-semibold text-5xl sm:text-7xl py-2 text-center">
            Software Projects
          </p>
          <div class="flex w-full py-20 justify-center items-center ">
            <hr class="grow border-gray-400 -mr-14"/>
            <div class="grid justify-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" class="w-20 stroke-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
              <p class="text-gray-500 text-lg sm:text-2xl text-center">
                This section is still in progress
              </p>
            </div>
            <hr class="grow border-gray-400 -ml-14"/>
          </div>

          {/* Github Button */}
          <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center pb-2">...and more!</p>
          <a class="flex items-center justify-center gap-2 rounded-xl bg-blue-500 p-3 px-12 hover:bg-blue-400"
          href="https://github.com/Sclatch" target="_blank" rel="noopener noreferrer">
            <svg className="h-7 fill-white" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
            <p class="text-gray-900 text-white whitespace-nowrap font-sans text-xl">
              Github Page
            </p>
          </a>
        </div>

        {/* Artist Section */}
        <div id="artist" class="flex justify-between
        bg-center bg-no-repeat bg-cover bg-fixed bg-[url('../images/portfoliobg.png')]">
          <div class="lg:basis-1/12 bg-gradient-to-r from-gray-200 dark:from-gray-800"/>
          <div class="flex flex-col px-4 lg:px-12 py-11
          items-center backdrop-blur-xl">
            <p class="text-gray-900 text-center
            font-semibold text-5xl sm:text-7xl py-2">
              Digital Artist
            </p>
            <div class="flex py-20 justify-center items-center px-6">
              <div class="grid justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" class="w-20 stroke-gray-900">
                  <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
                <p class="text-gray-900 text-lg sm:text-2xl text-center">
                  This section is still in progress
                </p>
              </div>
            </div>
            <p class="text-gray-900 whitespace-nowrap font-sans text-xl text-center pb-2">My works</p>
            <a class="flex items-center justify-center gap-2 rounded-xl bg-blue-500 p-3 px-12 hover:bg-blue-400 shadow-xl"
            href="https://www.pixiv.net/en/users/41139695" target="_blank" rel="noopener noreferrer">
              <svg className="h-7 fill-white" viewBox="0 0 24 24">
                <path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"/>
              </svg>
              <p class="text-gray-900 text-white whitespace-nowrap font-sans text-xl">
                Pixiv Page
              </p>
            </a>
          </div>
          <div class="lg:basis-1/12 bg-gradient-to-l from-gray-200 dark:from-gray-800"/>
        </div>

        {/* Softwares */}
        <div class="flex flex-col justify-center items-center p-6 pb-10 sm:mx-4 rounded-b-xl
        bg-white dark:bg-gray-900 drop-shadow-md">
          <p class="text-gray-900 dark:text-white
          font-semibold text-2xl sm:text-4xl pb-8 text-center lg:text-start">
            Software Proficiencies
          </p>
          <div class="flex flex-wrap gap-8 justify-center">
            <div class="grid gap-2 place-items-center">
              <img src={require('../icons/photoshop.svg').default} class="h-14" loading="lazy" alt="Photoshop"/>
              <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Photoshop</p>
            </div>

            <div class="grid gap-2 place-items-center">
              <img src={require('../icons/csp.svg').default} class="h-14" loading="lazy" alt="Clip Studio Paint"/>
              <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Clip Studio Paint</p>
            </div>

            <div class="grid gap-2 place-items-center">
              <img src={require('../icons/illustrator.svg').default} class="h-14" loading="lazy" alt="Illustrator"/>
              <p class="text-gray-900 dark:text-white whitespace-nowrap font-sans text-xl text-center">Illustrator</p>
            </div>
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
