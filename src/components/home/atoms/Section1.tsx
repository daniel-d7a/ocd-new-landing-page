import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/Card3d";
import marketing1 from "@/assets/marketingArrow.png";
import marketing2 from "@/assets/marketing phone.png";
import marketing3 from "@/assets/marketingMic.png";

export function Section1() {
  return (
    <div className="grid grid-cols-2 md:gap-16 items-center">
      <div className="col-span-2 md:col-span-1 md:mr-10 justify-self-end md:w-3/4">
        <h2 className="text-3xl text-center md:text-start mb-10 font-semibold">
          Crafting Success Stories in the World of Marketing
        </h2>
        <p className="text-lg ">
          Welcome to OCD, where creativity meets strategy, and innovation
          converges with results. As a leading marketing agency, we thrive on
          crafting compelling stories, building vibrant brands, and navigating
          the dynamic landscape of digital marketing. Our passion is your
          success, and together, we&apos;ll redefine your journey in the
          ever-evolving world of marketing.
        </p>
      </div>
      <CardContainer className="inter-var col-span-2">
        <CardBody className="relative -mr-[45%] w-full group/card md:mr-16 flex items-center my-10">
          <CardItem translateZ="60" className=" w-44 md:w-60">
            <Image
              src={marketing2}
              width="400"
              className="w-full object-cover -scale-x-100"
              alt="thumbnail"
            />
          </CardItem>
          <div>
            <CardItem translateZ="100" className="w-44 md:w-60">
              <Image
                src={marketing1}
                width="400"
                className="w-full object-cover -scale-x-100"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem translateZ="30" className="w-44 md:w-60">
              <Image
                src={marketing3}
                width="400"
                className="w-full object-cover -scale-x-100"
                alt="thumbnail"
              />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
