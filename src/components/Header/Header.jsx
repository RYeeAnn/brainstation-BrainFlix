import './Header.scss'
import Image from '../../assets/Images/Mohan-muruge.jpg';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import { Link } from "react-router-dom";






function Header () {
    return (
        <div className="header-container">
            <div className="header">
                <Link to="/"><img src={Logo} alt="" className="header__title" /></Link>
            </div>
                <div className="search">
                    <input type="Search" placeholder="Search" className="search__input"/>
                    <img className='search__image' src={Image} alt="Mohan-muruge" />
                </div>
                    <div className="search__button">
                        <Link to="/upload"><button className="search__button--upload">
                            UPLOAD
                        </button></Link>
                    </div>
        </div>
    )
}

export default Header