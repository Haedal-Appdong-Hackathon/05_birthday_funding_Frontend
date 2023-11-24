import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = (props) => {
    const {msg, isMain} = props
    console.log(msg, isMain)
    return (
        <>
            <ul className="Header-container">
                <li>
                    {isMain && <FontAwesomeIcon className="Nav-button-item" icon={faBars} />}
                    {isMain || <FontAwesomeIcon className="Nav-button-item" icon={faArrowLeft} />}
                </li>
                <li>{msg}</li>
                <li>&nbsp;&nbsp;&nbsp;</li>
            </ul>

            <div></div>
        </>
    );
};
export default Header;
