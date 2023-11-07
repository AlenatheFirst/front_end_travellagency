import { SelectedPage, DestinationType } from "@/shared/types";
import image1 from "@/assets/polynesia-2.jpeg";
import image2 from "@/assets/cp-2.jpeg";
import image3 from "@/assets/phuket1.jpg";
import image4 from "@/assets/Provence.jpg";
import image5 from "@/assets/ac-2.jpeg";
import image6 from "@/assets/ac-1.jpeg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Destination from "./Destination";

const classes: Array<DestinationType> = [
  {
    name: "Polynesia: A Paradise of Endless Beauty",
    description:
      "Polynesia, a dreamlike paradise scattered across the vast expanse of the Pacific Ocean, beckons travelers with its unrivaled natural beauty and enchanting culture. ",
    image: image1,
    
  },
  {
    name: "Cappadocia: A Surreal Wonderland",
    description:
      "Cappadocia's iconic fairy chimneys, towering rock formations, and intricate cave dwellings tell a story of nature's artistry and human ingenuity.  ",
    image: image2,
  },
  {
    name: "Phuket: Paradise Found",
    description:
      "Phuket's vibrant culture and nightlife are equally captivating. The bustling streets of Patong Beach come alive after dark, offering a kaleidoscope of entertainment, from lively street markets to electrifying nightclubs.",
    image: image3,
  },
  {
    name: "Provence: A Tapestry of Elegance and Charm",
    description:
      "The sight of endless lavender fields in full bloom, their fragrance carried by the warm Mediterranean breeze, is one of Provence's iconic images. It's a sensory journey that defines the essence of this region, where you can stroll through the purple-hued landscapes and soak in the tranquil beauty.",
    image: image4,
  },
  {
    name: "Capri: The Jewel of the Mediterranean",
    description: "At the heart of Capri is the legendary Blue Grotto, a sea cave that bathes its visitors in an ethereal blue light, creating a magical and unforgettable experience.",
    image: image5,
  },
  {
    name: "Sicily: Where History and Beauty Collide",
    description:
      "Sicily, the largest island in the Mediterranean, is a land of stunning diversity and rich heritage. With a history spanning millennia, this captivating destination combines ancient ruins, natural wonders, and a vibrant culture that is uniquely Sicilian.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurDestinations = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourdestinations" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurDestinations)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Suggested Destinations</HText>
            <p className="py-5">
            Our suggested destinations are just a glimpse of the incredible places waiting for you to explore.<br/> Whether you're seeking relaxation, adventure, culture, or romance, our travel experts are here to customize your journey to these captivating locales..
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: DestinationType, index) => (
              <Destination
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
            
              />
            
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurDestinations;
