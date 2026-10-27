import { FaStar } from "react-icons/fa";

const CardTestimonie = ({ stars = 5 }) => {
  return (
    <div>
      <div className="flex items-center gap-1 py-4 px-4">
        {[...Array(stars)].map((_, index) => {
          return (
            <li key={index}>
              <FaStar size={12} className="text-star" />
            </li>
          );
        })}
      </div>

      <div className="flex items-center gap-3 px-4">
        <div className="border rounded-full w-14">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Happy KaziFiti user"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-light text-xs semi-bold tracking-wide">
            “My next chapter started with KaziFiti.”
          </p>
          <p className="text-xs text-muted tracking-wide">
            A fresh start. A career that feels right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonie;
