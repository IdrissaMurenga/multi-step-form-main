import { NavLink } from "react-router-dom"

const Finish = () => {
    return (
        <section>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>
            <div className="finish-card">
                <div className="flex justify-between">
                    <h4>Arcade (Monthly)</h4>
                    <h2>$9/mo</h2>
                </div>
                <div className="flex justify-between">
                    <h4>Online service</h4>
                    <h2>+$1/mo</h2>
                </div>
                <div className="flex justify-between">
                    <h4>Larger storage</h4>
                    <h2>+$2/mo</h2>
                </div>
            </div>
            <div className="flex justify-between total">
                <h4>Total (per month)</h4>
                <h2 className="total-header">+$12/mo</h2>
            </div>
            <div className='btns flex btns2'>
                <div className='back-btn'>
                    <NavLink to="/addon">
                        <button className="back-bg">Go Back</button>
                    </NavLink>
                </div>
                <div className='next-btn2'>
                    <NavLink to="/thanks">
                        <button className="finish-btn">finish</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Finish
