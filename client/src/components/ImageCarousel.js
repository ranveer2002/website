import React from "react";
import { motion, useAnimation } from "framer-motion";

const cards = [
  {
    image : "https://media.istockphoto.com/id/1428417112/photo/physiotherapy-doctor-senior-patient-and-leg-surgery-physical-therapy-and-orthopedic-healing.jpg?s=612x612&w=0&k=20&c=NK5v7uZ6xzcZiyPeEh9gfFrcOY7KWh4jMcsAsYSl8kc="
  },
  {
    image : "https://img.freepik.com/free-photo/close-up-physiotherapist-working-with-patient-clinic_1150-15062.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais"
  },
  {
    image : "https://media.istockphoto.com/id/1428417112/photo/physiotherapy-doctor-senior-patient-and-leg-surgery-physical-therapy-and-orthopedic-healing.jpg?s=612x612&w=0&k=20&c=NK5v7uZ6xzcZiyPeEh9gfFrcOY7KWh4jMcsAsYSl8kc="
  },
  {
    image : "https://5.imimg.com/data5/WJ/MT/MY-52047845/sports-phsports-physiotherapy-for-playsiotherapy-for-players.jpg"
  },
  {
    image : "https://5.imimg.com/data5/WJ/MT/MY-52047845/sports-phsports-physiotherapy-for-playsiotherapy-for-players.jpg"
  },
  {
    image : "https://5.imimg.com/data5/WJ/MT/MY-52047845/sports-phsports-physiotherapy-for-playsiotherapy-for-players.jpg"
  },
  {
    image : "https://5.imimg.com/data5/WJ/MT/MY-52047845/sports-phsports-physiotherapy-for-playsiotherapy-for-players.jpg"
  },
  {
    image : "https://5.imimg.com/data5/WJ/MT/MY-52047845/sports-phsports-physiotherapy-for-playsiotherapy-for-players.jpg"
  },
];

const ImageCarousel = () => {
  const containerControls = useAnimation();

  const cardWidth = 300;

  const handleDrag = (event, info) => {
    const dragOffset = info.offset.x;
    containerControls.start({ x: dragOffset });
  };

  return (
    <div
      className="relative overflow-hidden w-full justify-evenly mx-auto cursor-grab"
      style={{ width: "1220px" }}
    >
      <motion.div
        className="flex"
        style={{
          width: cards.length * cardWidth + "px",
        }}
        drag="x"
        dragConstraints={{
          left: -(cards.length * cardWidth - 1220),
          right: 0,
        }}
        dragElastic={0.5}
        onDrag={handleDrag}
        animate={containerControls}
        transition={{ type: "inertia", velocity: 100 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="item p-4 "
            style={{ width: cardWidth + "px" }}
            // style={{ width: "100%" }}
          >
            <div
              className={`flex flex-col pl-4 rounded-2xl justify-evenly`}
            >
              <div className="border bg-slate-100 rounded-lg h-48" style={{backgroundImage : `url(${card.image})`,backgroundSize:"cover"}}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
