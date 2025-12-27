import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import useSearch from "../hooks/useSearch";
import useClearControl from "../hooks/useClearControl";
import cardArray from "../constants";

export const Home = () => {
    const { query, setQuery, filtered, handleSearch, reset } = useSearch(cardArray);
    const { showClear, onClear } = useClearControl(query, reset, setQuery);

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

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main_title">Рекомендации для вас</h2>
                                <div className="content-main_list">
                                    {
                                        filtered.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side_title">Сервисы и услуги</h3>
                                <div className="content-side_box">
                                    <div className="content-side_list">
                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item--img" src="/img/side-info-1.svg" alt="side-info" />
                                            <h5 className="content-side_list-item--title">Доставка</h5>
                                            <p className="content-side_list-item--text">Проверка при получении и возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item--img" src="/img/side-info-2.svg" alt="side-info" />
                                            <h5 className="content-side_list-item--title">Автотека</h5>
                                            <p className="content-side_list-item--text">Отчет с историей авто: пробег, владелец, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item--img" src="/img/side-info-3.svg" alt="side-info" />
                                            <h5 className="content-side_list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="content-side_list-item--text">Посуточная аренда квартир и досов: большой выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>

                                    <div className="content-side-footer">
                                        <p className="content-side_footer--item">© ООО "АБИТО" 2011-2026</p>
                                        <a href="#!" className="content-side_footer--item">Политика конфиденциальности</a>
                                        <a href="#!" className="content-side_footer--item">Обработка персональных данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home;