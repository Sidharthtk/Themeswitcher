import { useContext } from "react"
import { ThemeContext } from "./Theme"


const Content=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
    return(
        <div style={{
            backgroundColor:theme==="light"?"#fff":"#333",
            color:theme==="light"?"#333":"#fff",
           
        }}>
            <h1>{theme==="light"?"Light Theme":"Dark Theme"}</h1>
            <button onClick={toggleTheme} >Toggle Theme</button>
        </div>
    )
}
export default Content;