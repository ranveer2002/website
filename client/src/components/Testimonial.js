import React from "react";
import { motion, useAnimation } from "framer-motion";

const Testimonials = [
  {
    description:
      "Fit To Play has been a game-changer for me. The personalized approach and expert guidance transformed my performance. I'm achieving new heights!",
    name: "Aarav Singh",
    sports: "Professional Cricketer",
  },
  {
    description:
      "Fit To Play has been a game-changer for me. The personalized approach and expert guidance transformed my performance. I'm achieving new heights!",
    name: "Aarav Singh",
    sports: "Professional Cricketer",
  },
  {
    description:
      "Fit To Play has been a game-changer for me. The personalized approach and expert guidance transformed my performance. I'm achieving new heights!",
    name: "Aarav Singh",
    sports: "Professional Cricketer",
  },
  {
    description:
      "Fit To Play has been a game-changer for me. The personalized approach and expert guidance transformed my performance. I'm achieving new heights!",
    name: "Aarav Singh",
    sports: "Professional Cricketer",
  },
];

const TestimonialCarousel = () => {
  const containerControls = useAnimation();

  const cardWidth = 530;

  const handleDrag = (event, info) => {
    const dragOffset = info.offset.x;
    containerControls.start({ x: dragOffset });
  };

  return (
    <div
      className="relative overflow-hidden w-full justify-evenly mx-auto cursor-grab"
      style={{ width: "1280px" }}
    >
      <motion.div
        className="flex"
        style={{
          width: Testimonials.length * cardWidth + "px",
        }}
        drag="x"
        dragConstraints={{
          left: -(Testimonials.length * cardWidth - 1280), // Adjust the total width of all cards
          right: 0,
        }}
        dragElastic={0.5}
        onDrag={handleDrag}
        animate={containerControls}
        transition={{ type: "inertia", velocity: 100 }}
      >
        {Testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="item p-4 "
            style={{ width: cardWidth + "px" }}
            // style={{ width: "100%" }}
          >
            <div
              className={`flex flex-col pl-4 rounded-2xl justify-evenly w-[510px] h-[300px] bg-zinc-50`}
            >
              <div className="text-black text-xl font-normal mt-14 w-[444px] mx-auto items-justified">
                {testimonial.description}
              </div>

              <div className="text-black text-2xl font-bold mt-7 mx-auto self-start hover:cursor-pointer">
                {testimonial.name}
              </div>
              <div className="text-black text-xl font-normal mx-auto self-start mb-8 hover:cursor-pointer">
                {testimonial.sports}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
