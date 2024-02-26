import { ServiceCard } from "@/components/home/atoms/ServiceCard";
import { montserrat } from "@/lib/fonts";
import Image from "next/image";
import {
  branding,
  content_creation,
  degital_marketing,
  media_buying,
  media_production,
  software,
} from "@/components/services/data";
import { FlipText } from "@/components/ui/FlipText";
import cam1 from "@/assets/new images/cam1.png";
import cam2 from "@/assets/new images/camera.png";
import brandingImage from "@/assets/new images/Branding.png";
import contentCreatorImage from "@/assets/new images/Content-Creator.png";
import degitalMarketingImage from "@/assets/new images/Digital Marketing.png";
import mediaBuyingImage from "@/assets/new images/Media-buying.png";
import softwareImage from "@/assets/new images/software.png";

export default function ServicesPage() {
  return (
    <section className="mt-10 md:px-10 px-4">
      <p className="text-4xl md:text-5xl mb-20 font-semibold text-center">
        What do we offer?
      </p>
      <div className="space-y-20">
        {/* digital marketing */}
        <div
          id="degital_marketing"
          className="flex flex-col md:grid md:grid-cols-4 md:items-end gap-4 "
        >
          <div className="hidden md:flex flex-col justify-start items-center">
            <Image
              src={degitalMarketingImage}
              className="scale-[1.3] relative z-10 -translate-x-10"
              alt="marketing image"
            />
            <p className="text-6xl font-semibold">Digital Marketing</p>
          </div>
          <p className="block md:hidden text-center text-5xl font-semibold">
            Digital Marketing
          </p>
          {/* <div className="text-7xl font-semibold flex flex-col">
            <FlipText
              text="Degital"
              className=" w-[20vw] md:h-20 mr-auto"
              textStart
            />
            <FlipText
              text="Marketing"
              className="w-[22vw] md:h-20"
              delay={0.3}
              textStart
            />
          </div> */}

          {degital_marketing.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                montserrat.className,
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                "2xl:min-h-[50vh] md:min-h-[75vh]",
              ]}
            />
          ))}
        </div>
        {/* branding */}
        <div
          id="branding"
          className="flex flex-col md:grid md:grid-cols-5 md:items-end gap-4"
        >
          <p className="block md:hidden text-center text-5xl font-semibold">
            Branding
          </p>
          {branding.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                montserrat.className,
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                "2xl:min-h-[65vh] md:min-h-[100vh]",
              ]}
            />
          ))}
          <div className="hidden md:flex flex-col gap-10 justify-start items-center">
            <Image
              src={brandingImage}
              className="scale-[1.7] relative z-10 -translate-y-10"
              alt="Branding image"
            />
            <p className="text-6xl font-semibold">Branding</p>
          </div>
        </div>
        {/* media production */}
        <div
          id="media_production"
          className="flex flex-col md:grid md:grid-cols-5 md:items-end  gap-4"
        >
          <div className="relative hidden md:flex flex-col justify-start items-center gap-10">
            <div className="flex h-[50vh]">
              <Image
                className="absolute -top-10 -left-16 z-10 "
                src={cam2}
                alt="cam2"
              />
              <Image
                className="absolute top-[25%] -right-1/4 scale-[1.7] w-auto z-10"
                src={cam1}
                alt="cam1"
              />
            </div>
            <p className="md:text-5xl 2xl:text-6xl font-semibold">
              Media Production
            </p>
          </div>
          <p className="block md:hidden text-center text-5xl font-semibold">
            Media Production
          </p>
          {media_production.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                montserrat.className,
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                "2xl:min-h-[70vh] md:min-h-[85vh]",
              ]}
            />
          ))}
        </div>
        {/* contetn creation */}
        <div
          id="content_creation"
          className="flex flex-col md:grid md:grid-cols-4 md:items-end gap-4"
        >
          <p className="block md:hidden text-5xl text-center font-semibold">
            Content Creation
          </p>
          {content_creation.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                montserrat.className,
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                "2xl:min-h-[50vh] md:min-h-[70vh]",
              ]}
            />
          ))}
          {/* <p className="text-7xl font-semibold">Content Creation</p> */}
          <div className="hidden md:flex flex-col justify-start items-center">
            <Image
              src={contentCreatorImage}
              className="scale-[1.6] relative z-10"
              alt="contentCreatorImage"
            />
            <p className="text-6xl text-center font-semibold">
              Content Creation
            </p>
          </div>
        </div>
        {/* media buying */}
        <div
          id="media_buying"
          className="flex flex-col md:grid md:grid-cols-4 md:items-end gap-4"
        >
          <div className="hidden md:flex flex-col gap-20 justify-start items-center">
            <Image
              src={mediaBuyingImage}
              className="scale-[1.15] -translate-x-3 relative z-10"
              alt="mediaBuyingImage"
            />
            <p className="text-6xl text-center font-semibold">Media Buying</p>
          </div>
          <p className="block md:hidden text-5xl text-center font-semibold">
            Media Buying
          </p>
          {media_buying.slice(0, 3).map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                montserrat.className,
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                "2xl:min-h-[70vh] md:min-h-[75vh]",
              ]}
            />
          ))}
        </div>
        {/* software */}
        <div
          id="software"
          className="flex flex-col md:grid md:grid-cols-3 md:items-end gap-4"
        >
          <p className="block md:hidden text-5xl text-center font-semibold">
            Software
          </p>

          {software.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                montserrat.className,
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                "2xl:min-h-[50vh] md:min-h-[60vh]",
              ]}
            />
          ))}

          <div className="hidden md:flex flex-col gap-4 justify-start items-center">
            <Image
              src={softwareImage}
              className="scale-[1.25] relative z-10"
              alt="softwareImage"
            />
            <p className="text-6xl text-center font-semibold">Software</p>
          </div>

          {/* <div className="text-7xl font-semibold flex flex-col">
            <FlipText
              text="Software"
              className=" w-[20vw] md:h-20 mr-auto"
              textStart
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
