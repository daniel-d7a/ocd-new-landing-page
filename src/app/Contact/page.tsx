import { ScrollButton } from "@/components/ui/buttons/scroll button/ScrollButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";

export default function ContactUs() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            className="absolute inset-0 grayscale opacity-75"
            title="map"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="bg-neutral-800 text-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold  tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className={cn("mt-1", montserrat.className)}>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold  tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className={cn(
                  "text-indigo-500 leading-relaxed",
                  montserrat.className
                )}
              >
                fady_hany@ocd.com
              </a>
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className={cn("leading-relaxed", montserrat.className)}>
                +2 0105 193 7083
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-neutral-900 lg:w-2/5 md:w-1/2 flex flex-col md:ml-auto w-full px-4 border-4 border-ocd-yellow rounded-2xl py-8 mt-8 md:mt-0">
          <h2 className="text-3xl mb-1 font-medium title-font">Hire Us!</h2>
          <p className="leading-relaxed text-gray-300">
            Want to collaborate? we would love to. Send us a message and
            let&apos;s get started.
          </p>
          <div className="space-y-6">
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                className="bg-neutral-900 rounded-md border-neutral-500 placeholder:text-neutral-300"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-lg">
                Your message
              </Label>
              <Textarea
                className="bg-neutral-900 rounded-md border-neutral-500 placeholder:text-neutral-300"
                placeholder="Type your message here."
                id="message"
              />
            </div>
            <ScrollButton className="font-semibold rounded-full w-full bg-ocd-blue text-xl py-4 border-4 border-ocd-blue">
              Let&apos;s Collaborate!
            </ScrollButton>
          </div>
        </div>
      </div>
    </section>
  );
}
