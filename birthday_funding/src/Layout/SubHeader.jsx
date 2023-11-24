import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const SubHeader = (props) => {
    const msg = props.msg
    return (
        <>
            <ul className="Header-container">
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                </li>
                <li>
                    {msg}
                </li>
                <li>&nbsp;&nbsp;&nbsp;</li>
            </ul>

            <div></div>
        </>
    );
};
export default Header;
