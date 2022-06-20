import Card from "./Card";
import image from "../images/lhr.png";
import lhr from "../images/lhr2.jpeg";
import botox from "../images/botox.jpg";

export default function Services() {
  return (
    <>
      <h2>Services:</h2>
      <Card>
        <div className="img-container">
          <img src={lhr} alt="" />
        </div>
        <div>
          <h3>BOTOX & DERMAL FILLERS</h3>
          <p>
            Administered by a medical doctor and can help remove unwanted
            wrinkles, and add volume to lips and other facial areas.
          </p>
        </div>
      </Card>
      <Card>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div>
          <h3>LASER SKIN TREATMENTS</h3>
          <p>
            Treat pigmentation, skin irregularities, acne scars and the signs of
            aging, with no downtime!
          </p>
        </div>
      </Card>
      <Card>
        <div className="img-container">
          <img src={botox} alt="" />
        </div>
        <div>
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
