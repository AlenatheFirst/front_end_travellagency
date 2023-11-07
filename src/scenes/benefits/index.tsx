import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HandThumbUpIcon,
  PhoneArrowDownLeftIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/Group 143.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HandThumbUpIcon className="h-6 w-6" />,
    title: "More than 1000 positive reviews",
    description:
      "Our clients have embarked on breathtaking journeys to stunning destinations, tasted exquisite cuisines, explored vibrant cultures, and forged memories that will last a lifetime. They've described their experiences as life-changing, filled with wonder, and an absolute dream come true.",
  },
  {
    icon: <PhoneArrowDownLeftIcon className="h-6 w-6" />,
    title: "24/7 Support in any situation",
    description:
      "Our dedicated team of travel experts is always just a phone call or message away, no matter the time zone. Whether you have a question about your itinerary, need assistance during your travels, or encounter unexpected changes, we're here to provide immediate assistance and solutions.",
  },
  {
    icon: <GlobeEuropeAfricaIcon className="h-6 w-6" />,
    title: "Beautiful destinations all over the world",
    description:
      "Imagine walking through the charming streets of Paris, savoring the flavors of Italy's cuisine, or gazing in wonder at the wildlife of the African savannah. Each of our destinations is a masterpiece in its own right, ready to be your canvas for new experiences and unforgettable memories.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A TRAVEL AGENCY.</HText>
          <p className="my-5 text-sm">
            We provide world class service: hotels and destinations to
            create a memorable moments with ease. <br/>We provide true
            care into each and every client.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">EXCITED</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Whether you seek relaxation, adventure, culture, or romance, our travel experts are dedicated to crafting personalized journeys to these beautiful destinations. Our itineraries are designed to immerse you in the heart and soul of each place, allowing you to create your own unique story.

              </p>
              <p className="mb-5">
              The world's beauty is boundless, and we're here to guide you on your journey to discover it. Let us take you to the most beautiful destinations, where each day is a masterpiece waiting to be painted.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Let's get in contact!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
