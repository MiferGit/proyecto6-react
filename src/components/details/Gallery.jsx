function Gallery({ hotel }) {
  const images = hotel?.images || [];

  return (
    <div className="aspect-square rounded-lg grid  grid-rows-3 gap-3">
      <img
        src={images[0]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-12"
      />

      <img
        src={images[1]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-4 row-start-3 bg-black"
      />

      <img
        src={images[2]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-4 row-start-3"
      />

      <img
        src={images[3]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-4 row-start-2"
      />

      <img
        src={images[4]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-4 row-start-2"
      />

      <img
        src={images[5]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-4 row-start-3"
      />

<img
        src={images[6]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-4 row-start-2"
      />
    </div>
  );
}

export default Gallery;
