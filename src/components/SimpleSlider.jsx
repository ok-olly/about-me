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
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    centerMode: true,
    draggable: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // overflow-hidden

  return (
    <div>
      <Slider {...settings}>
        {image.map((img, i) => (
          <div key={i}>
            <img src={img} className="rounded-xl" />
          </div>
        ))}
        {/* <div className="h-48 w-48 bg-slate-50">
          <h3>1</h3>
        </div>
        <div className="h-48 w-48">
          <h3>2</h3>
        </div>
        <div className="h-48 w-48">
          <h3>3</h3>
        </div>
        <div className="h-48 w-48">
          <h3>4</h3>
        </div>
        <div className="h-48 w-48">
          <h3>5</h3>
        </div>
        <div className="h-48 w-48">
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
}
export default SimpleSlider;
