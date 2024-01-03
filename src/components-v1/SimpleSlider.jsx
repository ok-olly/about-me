import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider({ image }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    centerMode: true,
    draggable: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {image.map((img, i) => (
          <div key={i}>
            <img src={img} className="rounded-xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default SimpleSlider;
