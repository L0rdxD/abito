import { useParams } from "react-router-dom";
import cardArray from "../constants";


export const Product = () => {
    const {id} = useParams();
    const findProduct =  cardArray.find((p) => p.id === +id);
    return (
     
    <section className="content">    
     <div className="container">
        {findProduct ? 
                <div className="content-box">     
        <div className="content-product">
         <div className="content-product_left">
            <h2 className="content-product_title">{findProduct.title}</h2>
             <img className="content-product_img" src={findProduct.img} alt="product" />
             <p className="content-product_text">
               {findProduct.description}
             </p>
         </div>
         <div className="content-product_right">
            <h2 className="content-product_price">{findProduct.price}</h2>
            <button className="btn btn-primary btn-large">Показать телефон</button>
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
                    <p className="content-side_footer--item">
                    © ООО "АБИТО" 2011-2026
                    </p>
                    <a href="#!" className="content-side_footer--item">
                    Польитика конфиденциальности
                    </a>
                    <a href="#!" className="content-side_footer--item">
                        Обработка персональных данных
                    </a>
             </div>
        </div>
        </div>
         </div> 
        : 
        <h2>Такого товара не существует</h2>
        }

     </div>   
    </section>
    )
}
export default Product;