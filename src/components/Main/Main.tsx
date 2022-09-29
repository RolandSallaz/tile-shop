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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          obcaecati laborum nemo hic facilis, recusandae earum voluptatem
          dolorem illo omnis saepe ullam, vero totam perspiciatis quaerat vel
          temporibus asperiores ipsum здесь продается многа пицццы!
        </p>
      </section>
    </main>
  )
}
