import React from "react"
import Header from "./header"

export default function Layout ({children}){
    return (
        <div>
            <Header/>
        <div style={{height: "3000px"}}>
            
            {/* Main Page Content*/}
            {children}

        </div>
        </div>
    )
} 