import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import useSearch from "../hooks/useSearch";
import useClearControl from "../hooks/useClearControl";
import cardArray from "../constants";


export const Layout = () => {
    const { query, setQuery, filtered, handleSearch, reset } = useSearch(cardArray);
    const { showClear, onClear } = useClearControl(query, reset, setQuery);
    const location = useLocation();

    // Очищаем поле ввода при переходе на страницу продукта
    useEffect(() => {
        if (location.pathname.startsWith('/product/')) {
            reset();
        }
    }, [location.pathname, reset]);

    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Поиск по объявлениям"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                            />
                            {showClear && (
                                <button
                                    type="button"
                                    className="search-clear"
                                    onClick={onClear}
                                    aria-label="Очистить"
                                >
                                    ×
                                </button>
                            )}
                            <button type="button" className="btn btn-primary search-btn" onClick={handleSearch}>
                                <img className="search-btn_icon" src="/img/search.svg" alt="search" />
                                <span className="search-btn_text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{ filtered, query, setQuery, handleSearch, reset, showClear, onClear }} />
            </main>
        </>
    )
}
export default Layout;