function About() {
    return (
        <>
        <div className="restaurant-desc-parent">
            <div className="restaurant-desc">
                <p className="title desc-title">Little Lemon</p>
                <p className="subtitle desc-subtitle">Chicago</p>
                <p className="desc-quote">Simple with a modern twist.</p>
                <p className="desc-text desc">We are a family owned mediterranean restaurant,
                    focused on traditional recipes served with a modern twist. Owners Mario and Adrian began a 
                    partnership in downtown Chicago with the first Little Lemon restaurant in 2005. In 2025, another
                    Little Lemon location opened up in the Southhaven district of Chicago.
                </p>
            </div>
            <img className="desc-img" src=".\images\Mario and Adrian b.jpg" alt="hero"/>
            <img className="desc-img" src=".\images\Mario and Adrian A.jpg" alt="hero" />
        </div>
        </>
    )
}

export default About;
