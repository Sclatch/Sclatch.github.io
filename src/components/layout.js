import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout ({children}){
    return (
        <div class="bg-gray-200 dark:bg-gray-800">
            <Header/>
        <div class= "px-8" style={{height: "1000px"}}>
            
            {/* Main Page Content*/}
            {children}

        </div>
            <Footer/>
        </div>
    )
} 