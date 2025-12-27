import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <a href="./index.html" className="header-logo">
                        <img src="/img/logo.svg" alt="logo" />
                        <span>Abito</span>
                    </a>
                    <div className="header-controls">
                        <button className="btn btn-online">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>

                    <div className="header-burger">
                        <img src="/img/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}   
export default Header;