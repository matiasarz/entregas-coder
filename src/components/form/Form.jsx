import { useState, useContext } from 'react';
import { cartContextProvider } from '../../context/CartContextProvider';

const Form = () => {
    const { productAdd, total } = useContext(cartContextProvider);
    const [userData, setuserData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
    });

    const order = {
        buyer: { ...userData },
        items: [...productAdd],
        total: total,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        console.log(order);
    };

    const handleInput = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombres"
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="surname"
                    placeholder="Apellidos"
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
                    placeholder="number"
                    onChange={handleInput}
                />
            </div>
            <button type="submit">Ingresar</button>
        </form>
    );
};

export default Form;
