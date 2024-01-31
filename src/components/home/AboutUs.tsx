import chart from "@/assets/bar chart.png";
import graph from "@/assets/graph.png";
import profit from "@/assets/profit.png";
import { PiWarningCircle } from "react-icons/pi";
import { MdOutlineBarChart } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { Section2 } from "./atoms/Section2";
import { Section1 } from "./atoms/Section1";

export const AboutUs = () => {
  return (
    <section className="py-6 mx-16">
      <p className="text-5xl font-semibold text-center mb-10">What is OCD?</p>
      <Section1 />
      <Section2 />
    </section>
  );
};
