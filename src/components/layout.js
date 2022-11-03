import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout ({children}){
    return (
        <div class="bg-gray-200 dark:bg-gray-800">
            <Header/>
        <div id="home" class= "px-8 pt-4 sm:pt-12" style={{height: "1000px"}}>
            
            {/* Main Page Content*/}
            {children}

        </div>
            <Footer/>
        </div>
    )
} 