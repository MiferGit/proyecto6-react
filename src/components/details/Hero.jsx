import { TfiWorld } from "react-icons/tfi";

function Hero({ hotel }) {
  const images = hotel?.images && hotel.images[0].url;
  return (
    <div
      className="bg-blue-100 h-[35dvh] bg-cover bg-center"
      style={{
        backgroundImage: `url('${images}')`,
      }}
    >
      <div className="grid place-content-center h-full bg-white/30 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-semibold text-center mb-2">
            {hotel?.name}</h1>
          <p className="flex items-center gap-1 justify-center">
            <TfiWorld />
            <span className="text-sm">
              {hotel?.city?.name}, {hotel?.city?.country}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
