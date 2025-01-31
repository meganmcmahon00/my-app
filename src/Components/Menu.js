function Menu() {
    return (
        <div className="menu">
            <div className="menu-desc">
                <p className="title menu-title">This Week's Specials!</p>
                <button className="btn">Online Menu</button>
            </div>

            <div>
                <div className="cards">
                    <div className="card">
                        <img className="menu-img" src=".\images\greek salad.jpg" alt="greek salad" />
                        <p className="item-name">Greek Salad</p>
                        <p className="item-price">$ 12.99</p>
                        <p className="item-desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p className="delivery">Order A Delivery</p>
                        <img className="delivery-img" src=".\images\Delivery.png" alt="delivery" />
                    </div>

                    <div className="card">
                        <img className="menu-img" src=".\images\bruschetta.jpeg" alt="bruschetta" />
                        <p className="item-name">Bruschetta</p>
                        <p className="item-price">$ 5.99</p>
                        <p className="item-desc">Our bruschetta is made from grilled bread that has been
                            smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <p className="delivery">Order A Delivery</p>
                        <img className="delivery-img" src=".\images\Delivery.png" alt="delivery" />
                    </div>

                    <div className="card">
                        <img className="menu-img" src=".\images\lemon dessert.jpg" alt="lemon dessert" />
                        <p className="item-name">Lemon Dessert</p>
                        <p className="item-price">$ 5.00</p>
                        <p className="item-desc">This comes directly from Grandma's recipe book; every last
                            ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <p className="delivery">Order A Delivery</p>
                        <img className="delivery-img" src=".\images\Delivery.png" alt="delivery" />
                    </div>
            
                </div>
            </div>
        </div>

    )
};

export default Menu;