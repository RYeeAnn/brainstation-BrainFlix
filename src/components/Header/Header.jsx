import './Header.scss'
import Image from '../../assets/Images/Mohan-muruge.jpg'
import Logo from '../../assets/Logo/BrainFlix-logo.svg'

function Header () {
    return (
        <div className="header-container">
            <div className="header">
                <img src={Logo} alt="" className="header__title" />
            </div>
                <div className="search">
                    <input type="Search" placeholder="Search" className="search__input"/>
                    <img className='search__image' src={Image} alt="image" />
                </div>
                    <div className="button">
                        <button className="button__upload">
                            UPLOAD
                        </button>
                    </div>
        </div>
    )
}

export default Header