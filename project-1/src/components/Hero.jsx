const Hero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>Step into Comfort, Style, and Confidence with Shoes!</h1>
          <p>
            Experience every step with comfort, confidence, and style with our
            exclusive collection of shoes. Crafted with precision and passion,
            our footwear blends impeccable design with unparalleled comfort,
            ensuring that each step you take is a moment of sheer luxury.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Available on</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon logo" />
              <img src="/images/flipkart.png" alt="flipkart logo" />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="/images/shoe_image.png" alt="Shoe Image" />
        </div>
      </main>
    </>
  );
};
export default Hero;
