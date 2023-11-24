import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => {
    return (
        <>
            <ul className="Header-container">
                <li>
                    <FontAwesomeIcon className="Nav-button-item" icon={faBars} />
                </li>
                <li>BF</li>
                <li>&nbsp;&nbsp;&nbsp;</li>
            </ul>

            <div></div>
        </>
    );
};
export default Header;
