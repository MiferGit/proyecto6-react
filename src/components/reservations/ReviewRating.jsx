import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { cn } from "../../utils";

function ReviewRating({ setReview }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (index) => {
    setRating(index);
    setReview((prevState) => ({
      ...prevState,
      rating: index,
    }));
    setRating(0)
    setHover(0)
  };

  const handleHover = (index) => {
    setHover(index);
  };

  //**************************************************** */
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handleOnClick(index + 1)}
          onMouseEnter={() => handleHover(index + 1)}
          className="text-gray-400"
        >
          <FaStar
            className={cn(
              "text-3xl",
              (hover > index || rating > index) && "text-yellow-500"
            )}
          />
        </button>
      ))}
    </div>
  );
}

export default ReviewRating;
