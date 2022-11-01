import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout ({children}){
    return (
        <div>
            <Header/>
        <div style={{height: "620px"}}>
            
            {/* Main Page Content*/}
            {children}

        </div>
            <Footer/>
        </div>
    )
} 