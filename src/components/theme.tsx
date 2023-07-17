import { Sun } from "react-bootstrap-icons";
import { Button } from "react-bootstrap"
import { useState } from 'react'
import { SunFill } from "react-bootstrap-icons"

type themeProps = {
    bg: any
    bd: any
}


const Themeicon = (theme: any) => {
    if (theme.theme == "dark"){
        return(<Sun />)
    }
    else if (theme.theme == "light"){
        return(<SunFill color="black"/>)
        
    }

}


export const Theme = (props: themeProps) => {
    const [theme, setTheme] = useState("dark")
    const Change = () => {
        if (theme == "dark"){
            props.bd.setAttribute("class", "text-info")
            setTheme("light");
           
        }else{
            setTheme("dark");
            props.bd.setAttribute("class", "text-light")
        }
    }   



    props.bg.setAttribute("data-bs-theme", theme)
    
    return (
        <>  
            <Button className="text-center bg-transparent rounded-circle border-0" onClick={Change}>
               <Themeicon theme={theme}/>
            </Button>
        </>
    );
}

