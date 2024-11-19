import { useState } from "react"

const Form=()=>{
    const[username,setUsername]=useState("");
    const[password,setpassword]=useState("");

    const hanleSubmit=(e)=>{
        e.preventDefault();
        console.log("formsubmitted");
        console.log(username,password);
        
        
        
        
    }
    return(
        <div style={{backgroundColor:"gray", textAlign:"center"}}>
            <h1>Log in Form</h1>
            <form onSubmit={hanleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)

                }}
                 value={username}
                 name="username"
                 id="username"
                 placeholder="Enter Your Username"

                />
                <br />
                <label htmlFor="username">Password</label>
                <input type="password" 
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Enter your password"
                
                />
                <br />
                <button>Log in</button>
                
            </form>
        </div>
    )
}
export default Form