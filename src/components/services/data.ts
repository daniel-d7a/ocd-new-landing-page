export const content_creation = [
  {
    name: "Content Creation",
    slogan: "Igniting Brands in the Social Sphere.",
    text: "Creating powerful marketing content that keeps pace with market trends. By carefully studying the characteristics of the target audience, identifying the appropriate language for it, and adopting it in wording and creating content to reach the heart of the audience and influence its mind and choices. With the talent of storytelling, creative writing, and the skill of targeting and achieving goals, the best results come out.",
  },
  {
    name: "Copywriting / Scriptwriting",
    slogan: "Igniting Brands in the Social Sphere.",
    text: "The idea needs someone to develop and market it in a creative and professional way in a written and drawn script and artistic sequence to meet the objectives of the advertisement or film. We provide skilled minds have real talent and great skill in writing scripts and Copywriting advertisements that suit the client’s goals and market conditions.",
  },
  {
    name: "Film Making",
    slogan: "Navigate the Digital Landscape.",
    text: "With an innovative directorial mind, a targeted plan, a detailed script, and a professional production team, we provide the highest quality filmmaking service.",
  },
];

export const media_production = [
  {
    name: "Photography",
    slogan: "Crafting Seamless Experiences, Inspiring Connections",
    text: "We offer you an unlimited Photographing service. Capturing every moment of any actual event on the ground. Taking professional photos of your product. Documenting every moment of your work vibes in your company with strong, professional photos that connect the audience with you and the team.",
  },
  {
    name: "Videography",
    slogan: "Crafting Words, Inspiring Action.",
    text: "We believe in the impact that reels have had on digital marketing recently. So, we make every moment of your story a video for your audience. The videography service does not stop here only, but extends to what is the industry of advertisements, ideas, interviews, consumer reviews, live videography, and others. You and your requirements and we are at your service.",
  },
  {
    name: "Editing",
    slogan: "Crafting Seamless Experiences, Inspiring Connections",
    text: "Professional editing of films and advertisements by the most skilled editors, using the most professional programs and with an artistic eye.",
  },
  {
    name: "Media Coverage",
  },
];

export const branding = [
  {
    name: "Event Organizing",
    slogan: "Crafting Seamless Experiences, Inspiring Connections",
    text: "From the beginning of advertising your brand or organizing an introductory event for your business, we are with you. We do not only come to cover the event in the media, but we provide an administrative and design organizational service for the decoration and place in a beautiful and innovative artistic manner. Didn't you expect that? We too but proudly tell you that this is already happening.",
  },
  {
    name: "Graphic Design",
    slogan: "Navigate the Digital Landscape.",
    text: "With love for images, the skill of using the appropriate word, and creativity of expression, we help you design the best designs for your pages. By professional graphic designers who use professional tools. We produce graphic designs of the highest quality that accurately support our strategic plan in marketing the brand.",
  },
  {
    name: "Logo Design",
  },
  {
    name: "Branding",
    slogan: "Crafting Words, Inspiring Action.",
    text: "Branding is our game. We are here to help you to identity the story of your company that makes it stand out from competitors. Our goal of branding is to earn space in the minds of the target audience and become their preferred option for doing business. So, we are very passionate about sharing the journey of your brand with you from the beginning, by translating your ideas and dreams about it into reality, into an inspiring story, a creative image, colors, features, and a unique spirit that no other brand have. Even if you did it before coming to us, we will help you rebrand it.",
  },
];

export const degital_marketing = [
  {
    name: "Moderation",
    slogan: "Crafting Words, Inspiring Action.",
    text: "Reviewing and following up on everything on the account, including content, ratings, comments, and messages. We also provide the service of responding to them in a professional way of communicating with the page’s audience to achieve the best results.",
  },
  {
    name: "Account Managing",
    slogan: "Crafting Seamless Experiences, Inspiring Connections",
    text: "Adopting the entire operation of the account with all its contents and insights and developing appropriate plans for it. And complete communication about it, whether with its owner or with the rest of the team, to achieve the best results. By people with long experience in account management.",
  },
  {
    name: "Social Media Analytics",
    slogan: "Igniting Brands in the Social Sphere.",
    text: "Providing full analyzes of the results we obtained on social media after each stage of the plans and strategies we undertake. By using all the advanced tools. To be able to use these analyzes and results for development processes. So, the social media analyzes that we provide are an essential factor in Product development, Customer experience, Competitive Analysis and Operational efficiency. ",
  },
];

export const media_buying = [
  {
    name: "Media Buying",
    slogan: "Crafting Seamless Experiences, Inspiring Connections",
    text: "With specific plans, inevitable goals, and numbers that are planned to be reached, we aim to achieve numbers greater than you can imagine or want, and we strive to reach them and with smart plans and strategies we succeed in doing so. With the best marketers.",
  },
  {
    name: "Social Media Analytics",
    slogan: "Igniting Brands in the Social Sphere.",
    text: "Providing full analyzes of the results we obtained on social media after each stage of the plans and strategies we undertake. By using all the advanced tools. To be able to use these analyzes and results for development processes. So, the social media analyzes that we provide are an essential factor in Product development, Customer experience, Competitive Analysis and Operational efficiency. ",
  },
  {
    name: "google ads",
  },
  {
    name: "social media ads",
  },
];

export const software = [{ name: "websites" }, { name: "mobile apps" }];

/*


media coverage
logo design

google ads
social media ads

websites
mobile apps


*/

{
  /* 
      <p className="text-4xl md:text-5xl font-semibold text-center">
        What do we offer?
      </p>
      <div className="mt-6">
        <div
          ref={socialMediaSectionRef}
          className="flex flex-col md:grid md:grid-cols-8 justify-center gap-4"
        >
          <div
            className={cn(
              "fixed top-1/2 z-10  bg-ocd-blue rounded-b-2xl text-white -rotate-90 p-2 transition-all",
              socialMediaInView ? "-left-20" : "-left-52"
            )}
          >
            Social media managment
          </div>

          {Social_Media_Management.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              classNames={[
                yellowIndecies.includes(i)
                  ? "md:bg-ocd-yellow md:text-black"
                  : "md:bg-ocd-blue md:text-white",
                i % 2 === 0
                  ? "bg-ocd-blue text-white"
                  : "bg-ocd-yellow text-black",
                montserrat.className,
                styles[i],
              ]}
            />
          ))}
        </div>

        <div ref={mediaProductionSectionRef} className="mt-10">
          <div
            className={cn(
              "fixed top-1/2 z-10  bg-ocd-blue rounded-b-2xl text-white -rotate-90 p-2 transition-all",
              mediaProductionInView ? "-left-14" : "-left-52"
            )}
          >
            Media Production
          </div>
          <div
            className={cn(
              "hover:grayscale-0 bg-ocd-blue text-white row-span-1 md:w-full box-border drop-shadow-lg shadow-lg w-full rounded-xl p-6 md:min-h-80 min-h-64  cursor-pointer transition-all",
              montserrat.className
            )}
          >
            <div className="col-span-6 md:col-span-4">
              <p className={cn("text-3xl font-bold mb-4", recoleta.className)}>
                {Media_Production[0].name}
              </p>
              <p className="font-medium">{Media_Production[0].text}</p>
            </div>
            <p
              className={cn("font-semibold text-lg mt-4", montserrat.className)}
            >
              Covering:
            </p>
            <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-4">
              <div className="flex gap-4">
                <div
                  className={cn(
                    "hover:grayscale-0 grayscale bg-ocd-yellow text-black row-span-1 md:w-full box-border drop-shadow-lg shadow-lg w-full rounded-xl p-6 md:min-h-80 min-h-64  cursor-pointer transition-all",
                    montserrat.className
                  )}
                >
                  <div className="col-span-6 md:col-span-4">
                    <p
                      className={cn(
                        "text-3xl font-bold mb-4",
                        recoleta.className
                      )}
                    >
                      {Media_Production[1].name}
                    </p>
                    <p className="font-medium">{Media_Production[1].text}</p>
                  </div>
                </div>
                <div
                  className={cn(
                    "hover:grayscale-0 grayscale bg-ocd-yellow text-black row-span-1 md:w-full box-border drop-shadow-lg shadow-lg w-full rounded-xl p-6 md:min-h-80 min-h-64  cursor-pointer transition-all",
                    montserrat.className
                  )}
                >
                  <div className="col-span-6 md:col-span-4">
                    <p
                      className={cn(
                        "text-3xl font-bold mb-4",
                        recoleta.className
                      )}
                    >
                      {Media_Production[2].name}
                    </p>
                    <p className="font-medium">{Media_Production[2].text}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <ServiceCard
                  {...Media_Production[3]}
                  classNames={["bg-ocd-yellow text-black"]}
                />
                <div className="flex flex-col gap-4">
                  <ServiceCard
                    {...Media_Production[4]}
                    classNames={["bg-ocd-yellow text-black"]}
                  />
                  <ServiceCard
                    {...Media_Production[5]}
                    classNames={["bg-ocd-yellow text-black"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}