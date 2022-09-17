import './Footer.css';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="socialMediaContainer">
                <a
                    href="https://www.instagram.com/arzamendiamatiasm/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillInstagram className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/matias-arzamendia-17b4ba170/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillLinkedin className="icon" />
                </a>
                <a
                    href="https://github.com/matiasarz"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub className="icon" />
                </a>
            </div>
            <h5>Desarrollado por Matias Arzamendia</h5>
        </footer>
    );
};

export default Footer;
