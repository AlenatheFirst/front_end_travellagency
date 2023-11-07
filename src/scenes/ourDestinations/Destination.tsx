import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Destination = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
        <NavLink
        className="text-sm font-bold text-primary-100 underline hover:text-secondary-500"to={'/destination/id'}
      >
        <p>Learn More</p>
      </NavLink>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Destination;
