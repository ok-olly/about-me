import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider({ image }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "10px",
          zIndex: "10",
        }}
        onClick={onClick}
      />
    );
  }

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
