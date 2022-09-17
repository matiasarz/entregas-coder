import { Link } from 'react-router-dom';

const LinkAside = ({ text }) => {
    const categoryName = text[0]
        .toUpperCase()
        .concat(text.slice(1, text.length));

    return (
        <div className="linkContainer">
            <Link to={`/${text}`} className="link">
                {categoryName}
            </Link>
        </div>
    );
};

export default LinkAside;
