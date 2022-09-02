import { Link } from 'react-router-dom';

const LinkAside = ({ text }) => {
    return (
        <div className="linkContainer">
            <Link to={`/${text}`} className="link">
                {text}
            </Link>
        </div>
    );
};

export default LinkAside;
