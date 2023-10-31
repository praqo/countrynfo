import image from "./compass.png";

function Loader() {
  return (
    <div className="loader-container">
      <div className="container">
        <div className="loader-inner">
          <img src={image} alt="compass" className="loader-image" />
          <h4 className="loader-title">Loading...</h4>
        </div>
      </div>
    </div>
  );
}

export default Loader;
