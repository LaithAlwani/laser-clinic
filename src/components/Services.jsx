import Card from "./Card";


export default function Services() {
  return (
    <>
      <h2>Services</h2>
      <Card>
        <div className="img-container">
          <img src="/images/botox.jpg" alt="botox" />
        </div>
        <div  className="card-content">
          <h3>BOTOX & DERMAL FILLERS</h3>
          <p>
            Administered by a medical doctor and can help remove unwanted
            wrinkles, and add volume to lips and other facial areas.
          </p>
        </div>
      </Card>
      <Card>
        <div className="img-container">
          <img src="/images/lhr.png" alt="laser treatments" />
        </div>
        <div className="card-content">
          <h3>LASER SKIN TREATMENTS</h3>
          <p>
            Treat pigmentation, skin irregularities, acne scars and the signs of
            aging, with no downtime!
          </p>
        </div>
      </Card>
      <Card>
        <div className="img-container">
          <img src="/images/lhr2.jpeg" alt="laser hair removal" />
        </div>
        <div  className="card-content">
          <h3>LASER HAIR REMOVAL</h3>
          <p>
            No matter what your skin type, we can help you achieve a more
            permanent solution to removing unwanted hair.
          </p>
        </div>
      </Card>
    </>
  );
}
