import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const LinkLogIn = ({ navigateTo, name, handleStyle, className }) => {
    const style = {
        fontSize: '22px',
    };

    return (
        <>
            {navigateTo ? (
                <li className={className}>
                    <NavLink
                        to="/dashboard"
                        className="link"
                        style={handleStyle}
                    >
                        <article>
                            <AiOutlineUser style={style} />
                            <span>{name.toUpperCase()}</span>
                        </article>
                    </NavLink>
                </li>
            ) : (
                <li className={className}>
                    <NavLink to="/login" className="link" style={handleStyle}>
                        <article>
                            <AiOutlineLogin style={style} />
                            <span>Log in</span>
                        </article>
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default LinkLogIn;
