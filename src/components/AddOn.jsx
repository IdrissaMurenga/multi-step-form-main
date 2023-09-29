import { NavLink } from "react-router-dom";
const AddOn = () => {
    return (
        <section>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="addon-card">
                <div className="flex align-center justify-between card2">
                    <div className="flex gap">
                        <input className="check" type="checkbox" name="" id="" />
                        <div>
                            <h2>Online service</h2>
                            <h4>Access to multiplayer games</h4>
                        </div>
                    </div>
                    <h5>+$1/mo</h5>
                </div>
                <div className="flex align-center card2 justify-between">
                    <div className="flex gap">
                        <input className="check" type="checkbox" name="" id="" />
                        <div>
                            <h2>Larger storage</h2>
                            <h4>Extra 1TB of cloud save</h4>
                        </div>
                    </div>
                    <h5>+$1/mo</h5>
                </div>
                <div className="flex align-center card2 justify-between">
                    <div className="flex gap">
                        <input className="check" type="checkbox" name="" id="" />
                        <div>
                            <h2>Customizable profile</h2>
                            <h4>Custom thtmt on your profile</h4>
                        </div>
                    </div>
                    <h5>+$1/mo</h5>
                </div>
                <div className='btns flex btns2'>
                    <div className='back-btn'>
                        <NavLink to="/plan">
                            <button className="back-bg">Go Back</button>
                        </NavLink>
                    </div>
                    <div className='next-btn2 '>
                        <NavLink to="/finish">
                            <button>Next Step</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddOn
