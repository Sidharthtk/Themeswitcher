import { useState } from "react";

function Register() {
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        console.log(Fname,Lname, Address, email, number);


    }
    return (
        <div style={{textAlign:"center",padding:"10px"}}>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">First Name</label>
                <input type="text" onChange={(e) => {
                    setFname(e.target.value)
                }}
                    value={Fname}
                    name="Fname"
                    id="Fname"
                    placeholder="First Name" />
                    <br />

                <label htmlFor="Name">Last Name</label>
                <input type="text" onChange={(e) => {
                    setLname(e.target.value)
                }}
                    value={Lname}
                    name="Lname"
                    id="Lname"
                    placeholder="Last Name" />
                    <br />

                <label htmlFor="Name">Address</label>
                <input type="text" onChange={(e) => {
                    setAddress(e.target.value)
                }}
                    value={Address}
                    name="Address"
                    id="Address"
                    placeholder="Enter Your Address" />
                    <br />

                <label htmlFor="Name">Email</label>
                <input type="text" onChange={(e) => {
                    setEmail(e.target.value)
                }}
                    value={email}
                    name="email"
                    id="email"
                    placeholder="Enter Your Email" />
                    <br />

                <label htmlFor="Name">Mobile No</label>
                <input type="text" onChange={(e) => {
                    setNumber(e.target.value)
                }}
                    value={number}
                    name="number"
                    id="number"
                    placeholder="Enter Your Mobile Number" />
                    <br />
                    <button>Register</button>

            </form>
        </div>
    )


}
export default Register