import './Main.css';

export function Main() {
    return(
        <main className="main">
            <h1 className="main__heading">Продукция</h1>
            <ul className='product-list'>
                <li className='product-list_item'>
                     <div className='product'></div>
                </li>
                <li className='product-list_item'>
                     <div className='product'></div>
                </li>
                <li className='product-list_item'>
                     <div className='product'></div>
                </li>
                <li className='product-list_item'>
                     <div className='product'></div>
                </li>
            </ul>
        </main>
    )
}