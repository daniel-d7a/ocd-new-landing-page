import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ScrollButton } from "../ui/buttons/scroll button/ScrollButton";

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:grid md:grid-cols-2 px-4 md:px-16 pb-10 mt-10 bg-neutral-900 pt-10">
      <p className="md:hidden block text-neutral-300 mt-10">
        © 2024. All rights reserved
      </p>
      <div className="flex-col flex justify-between py-4 h-[520px] md:h-auto md:mt-0 mt-10">
        <p className="text-xl">Contact</p>
        <div className="text-xl">
          <p className="text-4xl">We </p>
          <div className="text-6xl relative font-semibold">
            <div className="h-full w-11 z-0 absolute bg-gradient-to-b from-ocd-yellow to-ocd-blue"></div>
            <div className="relative z-10 mix">
              <p>
                <span className="text-neutral-900 mr-1">O</span>nly
              </p>
              <p>
                <span className="text-neutral-900 mr-1.5">C</span>reate
              </p>
              <p>
                <span className="text-neutral-900 mr-1">D</span>ifference.
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <p>+2 0105 193 7083</p>
          <p>fady_hany@ocd.com</p>
        </div>
        <div className="flex gap-4">
          <FaFacebookF size={30} />
          <FaInstagram size={30} />
        </div>
      </div>

      <div className="border-ocd-yellow border-4 rounded-2xl w-full p-4 pb-10">
        <p className="text-xl">Hire Us</p>
        <p className="text-3xl font-semibold mt-6">
          Lets Create a project together ?
        </p>
        <div className="space-y-6">
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              className="bg-neutral-900 rounded-xl placeholder:text-neutral-300"
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
              className="bg-neutral-900 rounded-xl placeholder:text-neutral-300"
              placeholder="Type your message here."
              id="message"
            />
          </div>
          <ScrollButton className="font-semibold rounded-full w-full bg-ocd-blue text-xl py-4 border-4 border-ocd-blue">
            Let&apos;s Collaborate!
          </ScrollButton>
        </div>
      </div>
      <p className="hidden md:block col-span-2 text-neutral-300">
        © 2024. All rights reserved
      </p>
    </footer>
  );
};
