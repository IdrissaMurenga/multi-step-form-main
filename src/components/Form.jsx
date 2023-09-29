import { NavLink } from "react-router-dom";
import { useState } from "react"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section>
            <h1>Personal info</h1>
            <p>Please provide your name,email address, and phone number.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={name}
                            name="name"
                            placeholder="e.g. Stephen King"
                            className="formInput"
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Emai Address</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={email}
                            name="email"
                            placeholder="e.g. Stephenking@lorem.com"
                            className="formInput"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Phone Number</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={number}
                            name="name"
                            placeholder="e.g. +1 234 567 890"
                            className="formInput"
                            onChange={(e)=>setNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="btns next-btn">
                    <NavLink to="/plan">
                        <button>Next Step</button>
                    </NavLink>
                </div>
            </form>
        </section>
    )
}

export default Form
