import { motion, animate } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Stairs = () => {
  return <div>Stairs</div>;
};

export default Stairs;
