import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout ({children}){
    return (
        <div class="bg-gray-200 dark:bg-gray-800">
            <Header/>
        <div class= "">
            
            {/* Main Page Content*/}
            {children}

        </div>
            <Footer/>
        </div>
    )
} 