import arcadeIcon from '../assets/icon-arcade.png';
import advancedIcon from '../assets/icon-advanced.png';
import proIcon from '../assets/icon-pro.png';
import { NavLink } from 'react-router-dom';
const Plan = () => {
    return (
        <section>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className='cards'>
                <div className='flex aling-center card gap'>
                    <div>
                        <img src={arcadeIcon} alt="" />
                    </div>
                    <div className='plan-text'>
                        <h2>Arcade</h2>
                        <h4>$9/mo</h4>
                    </div>
                </div>
                <div className='flex aling-center card gap'>
                    <div>
                        <img src={advancedIcon} alt="" />
                    </div>
                    <div className='plan-text'>
                        <h2>Advanced</h2>
                        <h4>$12/mo</h4>
                    </div>
                </div>
                <div className='flex aling-center card gap'>
                    <div>
                        <img src={proIcon} alt="" />
                    </div>
                    <div className='plan-text'>
                        <h2>Pro</h2>
                        <h4>$15/mo</h4>
                    </div>
                </div>
            </div>
            <div className="toggle">
                <h6>Monthly</h6>
                <label className="switch">
                    <input className="toggle-input" type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <h6>yearly</h6>
            </div>
            <div className='btns flex btns2'>
                <div className='back-btn'>
                    <NavLink to="/">
                        <button className="back-bg">Go Back</button>
                    </NavLink>
                </div>
                <div className='next-btn2'>
                    <NavLink to="/addon">
                        <button>Next Step</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Plan
