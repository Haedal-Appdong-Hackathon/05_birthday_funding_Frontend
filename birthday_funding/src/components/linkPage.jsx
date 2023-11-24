import './linkPage.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Linkpage = (props) => {
    const { msg, url }= props
    return (
        <>
            <li className="link-container">
                <a href={url}>
                    <span className="link-name">{msg}</span>
                    <FontAwesomeIcon className="link-icon" icon={faChevronRight} />
                </a>
            </li>
        </>
    );
};

export default Linkpage;
