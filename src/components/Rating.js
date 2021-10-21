import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import { useBookCtx } from  "../context/Context";

const Rating = ({ rating, id }) => {

  const { ListChange } = useBookCtx();

  return (
    <div className="rating">
      {rating >= 1 ? (
        <IoIosStar
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 1 } })
          }
        />
      ) : (
        <IoIosStarOutline
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 1 } })
          }
        />
      )}
      {rating >= 2 ? (
        <IoIosStar
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 2 } })
          }
        />
      ) : (
        <IoIosStarOutline
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 2 } })
          }
        />
      )}
      {rating >= 3 ? (
        <IoIosStar
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 3 } })
          }
        />
      ) : (
        <IoIosStarOutline
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 3 } })
          }
        />
      )}
      {rating >= 4 ? (
        <IoIosStar
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 4 } })
          }
        />
      ) : (
        <IoIosStarOutline
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 4 } })
          }
        />
      )}
      {rating >= 5 ? (
        <IoIosStar
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 5 } })
          }
        />
      ) : (
        <IoIosStarOutline
          onClick={() =>
            ListChange({ type: "rateit", payload: { id, num: 5 } })
          }
        />
      )}
    </div>
  );
};

export default Rating;
