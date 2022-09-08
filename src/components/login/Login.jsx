import UserForm from '../userForm/UserForm';
import './Login.css';

const Login = () => {
    return (
        <section className="sectionContainerLogin">
            <h1>Iniciar sesión</h1>
            <UserForm buttonText="Registarse" />
        </section>
    );
};

export default Login;
