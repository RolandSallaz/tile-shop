import './Main.css'

export function Main() {
  return (
    <main className="main">
      <section className="products">
        <h1 className="products__heading">Продукция</h1>
        <ul className="product-list">
          <li className="product-list_item">
            <div className="product">
              <h2 className="product__description">Плитка 1</h2>
            </div>
          </li>
          <li className="product-list_item">
            <div className="product">
              <h2 className="product__description">Плитка 2</h2>
            </div>
          </li>
          <li className="product-list_item">
            <div className="product">
              <h2 className="product__description">Плитка 3</h2>
            </div>
          </li>
          <li className="product-list_item">
            <div className="product">
              <h2 className="product__description">Плитка 4</h2>
            </div>
          </li>
        </ul>
      </section>
      <section className="products-description">
        <h2 className="products-description__heading">АССОРТИМЕНТ МАГАЗИНА</h2>
        <p className="products-description__paragraph">
          Сегодняшний ассортимент Goga shop — керамическая плитка и
          керамический гранит, мозаика и декоративные элементы, сантехника,
          смесители, мебель для ванных комнат, обои: всего более 3000 товарных
          позиций. Это предложение уникально не только по своему объему, но и по
          разнообразию комплексных решений, представленных в самых разных стилях
          и ценовых сегментах. Благодаря своим впечатляющим характеристикам и
          великолепному дизайну от итальянских тренд-сеттеров Goga shop
          используется буквально повсюду - от домашних интерьеров до масштабных
          архитектурных проектов.
        </p>
      </section>
    </main>
  )
}
