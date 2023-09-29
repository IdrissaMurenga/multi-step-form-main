import { NavLink } from "react-router-dom";
import bgImg1 from "../assets/bg-sidebar-mobile.png";
import bgImg2 from "../assets/bg-sidebar-desktop.png";
const Header = () => {
    return (
        <nav>
            <picture>
                <source className="desktop-img" srcSet={bgImg2} media="(min-width:760px)" />
                <img className="mobile-img" src={bgImg1} alt="" />
            </picture>
            <ul className="flex gap">
                <NavLink to="/">
                    <li>
                        <span className="navNum">1</span>
                        <span className="show navText">
                            <h3>STEP 1</h3>
                            <h3>YOUR INFO</h3>
                        </span>
                    </li>
                </NavLink>
                <NavLink to="/plan">
                    <li>
                        <span className="navNum">2</span>
                        <span className="show navText">
                            <h3>STEP 2</h3>
                            <h3>SELECT PLAN</h3>
                        </span>
                    </li>
                </NavLink>
                <NavLink to="/addon">
                    <li>
                        <span className="navNum">3</span>
                        <span className="show navText">
                            <h3>STEP 3</h3>
                            <h3>ADD-ONS</h3>
                        </span>
                    </li>
                </NavLink>
                <NavLink to="/finish">                   
                    <li>
                        <span className="navNum">4</span>
                        <span className="show navText">
                            <h3>STEP 4</h3>
                            <h3>SUMMARY</h3>
                        </span>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Header
