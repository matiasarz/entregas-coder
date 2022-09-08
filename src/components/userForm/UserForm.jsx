import { useState, useContext } from 'react';
import { cartContextProvider } from '../../context/CartContextProvider';
import './UserForm.css';
import { Navigate } from 'react-router-dom';

const Form = ({ buttonText }) => {
    const { productAdd, navigateTo, setNavigateTo, setDataForm } =
        useContext(cartContextProvider);

    const [userData, setuserData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, surname, email, phone } = userData;

        if (!name.trim() || !surname.trim() || !email.trim() || !phone.trim()) {
            return console.log('esta vacio');
        }
        setNavigateTo(true);
        setDataForm(userData);
    };

    const handleInput = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    if (navigateTo) {
        if (productAdd.length === 0) return <Navigate to="/" replace={true} />;
        return <Navigate to="/cart" replace={true} />;
    }

    return (
        <form onSubmit={handleSubmit} className="formContainer">
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="surname"
                    placeholder="Apellido"
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={handleInput}
                />
            </div>
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default Form;
