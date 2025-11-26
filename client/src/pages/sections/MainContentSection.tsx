import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const aboutCards = [
  {
    icon: "/figmaAssets/aboutmesection-4.svg",
    title: "Organic Growth",
    description: "400% increase from product-led content",
  },
  {
    icon: "/figmaAssets/aboutmesection.svg",
    title: "Affiliate Revenue",
    description: "Program contributed meaningfully to B2C sales",
  },
  {
    icon: "/figmaAssets/aboutmesection-3.svg",
    title: "Product Messaging",
    description: "Shaped by customer and industry insight",
  },
  {
    icon: "/figmaAssets/aboutmesection-1.svg",
    title: "Inbound Engine",
    description:
      "Directed content and website strategy for main acquisition channel",
  },
  {
    icon: "/figmaAssets/aboutmesection-2.svg",
    title: "AI Tools",
    description: "Cursor, n8n, Replit exploration",
  },
];

const experiences = [
  {
    company: "ATMO",
    location: "San Francisco, CA (Remote)",
    locationIcon: "/figmaAssets/icon-9.svg",
    period: "Jan 2021 – July 2025",
    periodIcon: "/figmaAssets/icon-8.svg",
    description:
      "Air quality monitoring IoT solutions for environmental insights.",
    image: "/atmo-product.jpeg",
    imageClass: "w-full h-auto",
    role: "Marketing Specialist",
    responsibilities: [
      "Developed and executed the company's external communications and content strategy, creating targeted content plans, case studies, landing pages, and blog posts in collaboration with product team",
      "Managed paid media campaigns across YouTube, LinkedIn, Meta, and industry publications to support product awareness among B2C and professional audiences",
      "Optimized HubSpot CRM workflows, reducing sales administrative workload and improving lead handoff to sales",
      "Built end-to-end MQL→SQL reporting to clarify inbound lead sources and buyer personas, then forecasted pipeline by channel/segment to improve data clarity for go-to-market decisions",
      "Launched and managed affiliate program, coordinating with partners and tracking performance metrics",
      "Coordinated company's participation in industry trade shows, working with suppliers and internal stakeholders on logistics and promotions",
    ],
    achievements: [
      "Grew organic blog traffic 400% within one year through strategic content and SEO optimization",
      "Secured earned media placements in FastCompany, Dezeen, and DeSmog, enhancing brand visibility in science and design communities",
      "Generated ~10% of B2C revenue through affiliate program management",
      "Automated lead handoff workflows in HubSpot, improving sales efficiency and reducing manual administrative tasks",
    ],
  },
  {
    company: "notAnotherOne",
    location: "Saint Petersburg, Russia",
    locationIcon: "/figmaAssets/icon-7.svg",
    period: "May 2019 – Jan 2021",
    periodIcon: "/figmaAssets/icon-10.svg",
    description:
      "Embedded electronics and IoT devices for makers and developers.",
    image: "/notanotherone-product.jpg",
    imageClass: "w-full h-auto",
    role: "Marketing Communications Specialist",
    responsibilities: [
      "Wrote and coordinated publishing of content in popular business and technology media outlets, securing thirteen published articles",
      "Oversaw company's communications via all owned channels: social media, newsletters, and blog",
      "Secured and coordinated interviews and contributed content in various media outlets including Entrepreneur, ReadWrite, and The Next Web",
      "Coordinated applications for international product design awards (RedDot and iF Design Awards)",
      "Managed speaking appearances and conference participation, securing slots at technology conferences and industry events",
    ],
    achievements: [
      "Secured company representatives for speaking appearances at five technology conferences, including Internet of Things Applications by IDTechEx in Berlin",
      "Achieved 100% win rate for three product design award applications (RedDot and iF Design Awards)",
      "Secured featured interview in Inc.Russia magazine with company founders",
      "Published thirteen articles in business and technology media outlets, building brand authority in IoT and maker communities",
    ],
  },
  {
    company: "addlink",
    location: "Taipei, Taiwan",
    locationIcon: "/figmaAssets/icon-9.svg",
    period: "Sep 2015 – Aug 2018",
    periodIcon: "/figmaAssets/icon-8.svg",
    description:
      "Computer accessories and peripherals for B2C and B2B markets.",
    image: "/addlink-product.png",
    imageClass: "w-full h-auto",
    role: "Sales Representative",
    responsibilities: [
      "Responsible for business development in Eastern Europe and Central Asia for newly launched products",
      "Managed company's Amazon account and tax reporting for sixteen US states",
      "Coordinated product reviews with popular YouTube and Twitch tech bloggers",
      "Established and maintained business accounts with regular monthly orders",
    ],
    achievements: [
      "Established twelve business accounts with regular monthly orders in Eastern Europe and Central Asia",
      "Successfully managed multi-state tax reporting and compliance for Amazon operations across sixteen US states",
      "Coordinated influencer partnerships with tech bloggers, driving product awareness and reviews",
    ],
  },
];

const skillsCategories = [
  {
    title: "Marketing Operations",
    skills: [
      "HubSpot CRM",
      "Marketing Automation",
      "Workflows",
      "Lead Scoring",
      "Lifecycle Stages",
      "Campaign Management",
    ],
  },
  {
    title: "Analytics & Data",
    skills: [
      "GA4",
      "GTM",
      "UTM Strategy",
      "Data Analysis",
      "Performance Tracking",
      "A/B Testing",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "Cursor",
      "n8n",
      "Replit",
      "Supabase (basic)",
      "Prompt Design",
      "Workflow Automation",
    ],
  },
  {
    title: "Content & Messaging",
    skills: [
      "SEO Strategy",
      "Content Operations",
      "Copywriting",
      "Case Studies",
      "Blog Management",
    ],
  },
  {
    title: "Demand Gen & Paid",
    skills: [
      "Social Media Ads",
      "Google Ads",
      "Email Campaigns",
      "Affiliate Marketing",
      "Paid Social",
    ],
  },
  {
    title: "Strategy & PR",
    skills: [
      "Market Research",
      "Competitive Analysis",
      "Brand Positioning",
      "PR Strategy",
      "Event Marketing",
    ],
  },
];

const certifications = [
  {
    icon: "/figmaAssets/container-2.svg",
    title: "Reporting in HubSpot",
    year: "2025",
    description:
      "Advanced reporting, custom dashboards, and attribution modeling",
  },
  {
    icon: "/figmaAssets/container-1.svg",
    title: "Content Marketing",
    year: "2022",
    description: "Strategy, creation, and distribution for B2B audiences",
  },
  {
    icon: "/figmaAssets/container-2.svg",
    title: "Web Analytics",
    year: "2019",
    description: "Data analysis, tracking implementation, and insights",
  },
  {
    icon: "/figmaAssets/container.svg",
    title: "HTML & CSS",
    year: "2017",
    description: "Web fundamentals and responsive design principles",
  },
];

const aiTools = ["Cursor", "n8n", "Replit", "OpenAI API", "Prompt Engineering"];

const lookingForRoles = [
  "Product Marketing Specialist",
  "Growth Marketing Specialist",
  "Marketing Operations Specialist",
];

const lookingForCompanies = [
  "B2B SaaS",
  "Tech, climate tech, proptech, or health-related industries",
];

const strongFitReasons = [
  {
    title: "5+ years of hands-on GTM experience",
    description:
      ", from brand positioning and campaigns to measurement and reporting.",
  },
  {
    title: "Full-funnel perspective",
    description:
      " from working in a lean marketing team: lead gen, external communications, collateral, landing page optimization, CRM management, and customer advocacy.",
  },
  {
    title: "Metrics-driven team player",
    description:
      " who cares about ROI but is comfortable testing hypotheses in real-world scenarios and iterating based on data.",
  },
  {
    title:
      "Fast learner expanding my AI toolkit for productivity and marketing operations",
    description:
      " with tools like Cursor, n8n, Replit, Claude, Figma Make, and others.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col w-full bg-white">
        <div className="flex flex-col w-full px-12 pt-32 pb-0 bg-white">
          <Badge className="w-fit bg-[#2f7ae51a] text-[#1d63dc] border-transparent hover:bg-[#2f7ae51a] rounded-full px-4 py-2 text-lg font-normal">
            Product & Content Marketing
          </Badge>

          <h2 className="mt-12 font-bold text-[#0e162b] text-[34px] tracking-[-0.34px] leading-[39.1px] [font-family:'Space_Grotesk',Helvetica]">
            About
          </h2>

          <div className="mt-16 flex flex-col gap-16">
            <p className="text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica] max-w-[896px]">
              I'm a product marketing specialist focused on ClimateTech, IoT,
              and research-driven hardware. I uncover what truly matters to
              customers and translate those insights into clear positioning and
              messaging. With experience across environmental monitoring,
              sensors, and hardware development, I help teams communicate
              product and company value in a way that feels credible and aligned
              with how buyers actually think.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {aboutCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-[10px] border-[0.56px] border-[#e1e8f0] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]"
                >
                  <CardContent className="p-5 flex flex-col gap-3">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10"
                    />
                    <h3 className="font-medium text-[#0e162b] text-base tracking-[-0.16px] leading-6 [font-family:'Inter',Helvetica]">
                      {card.title}
                    </h3>
                    <p className="text-[#45556c] text-sm leading-[22.8px] [font-family:'Inter',Helvetica]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full px-12 pt-16 pb-0 bg-white">
          <h2 className="font-bold text-[#0e162b] text-[34px] tracking-[-0.34px] leading-[39.1px] [font-family:'Space_Grotesk',Helvetica]">
            Experience
          </h2>

          <div className="mt-16 relative pl-12">
            <div className="absolute left-0 top-0 w-px h-full bg-[linear-gradient(180deg,rgba(29,99,220,1)_0%,rgba(47,122,229,1)_50%,rgba(67,156,239,1)_100%)] opacity-20" />

            {experiences.map((exp, index) => (
              <div key={index}>
                <div
                  className="absolute left-[-3px] w-2 h-2 bg-[#1d63dc] rounded-full"
                  style={{
                    top: index === 0 ? 0 : index === 1 ? "679px" : "1359px",
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-[#0e162b] text-2xl leading-[30px] [font-family:'Space_Grotesk',Helvetica]">
                        {exp.company}
                      </h3>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={exp.locationIcon}
                            alt="Location"
                            className="w-4 h-4"
                          />
                          <span className="text-[#45556c] text-sm leading-5 [font-family:'Inter',Helvetica]">
                            {exp.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <img
                            src={exp.periodIcon}
                            alt="Period"
                            className="w-4 h-4"
                          />
                          <span className="text-[#45556c] text-sm leading-5 [font-family:'Inter',Helvetica]">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica]">
                        {exp.description}
                      </p>
                    </div>

                    <div className="w-full aspect-square max-w-[418px]">
                      <div className="relative w-full h-full p-[17px] rounded-xl">
                        <img
                          src={exp.image}
                          alt={`${exp.company} product`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 pt-8">
                    <Badge className="w-fit bg-[#2f7ae51a] text-[#1d63dc] border-transparent hover:bg-[#2f7ae51a] rounded-full px-4 py-[6.4px] text-sm font-normal">
                      {exp.role}
                    </Badge>

                    <div className="flex flex-col gap-4">
                      <h4 className="font-bold text-[#0e162b] text-xl leading-[26px] [font-family:'Space_Grotesk',Helvetica]">
                        Responsibilities
                      </h4>

                      <div className="flex flex-col gap-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="text-[#2f7ae5] text-base leading-6 [font-family:'Inter',Helvetica] mt-1">
                              ●
                            </span>
                            <p className="text-[#45556c] text-base leading-6 [font-family:'Inter',Helvetica] flex-1">
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h4 className="font-bold text-[#0e162b] text-xl leading-[26px] [font-family:'Space_Grotesk',Helvetica]">
                        Key Achievements
                      </h4>

                      <div className="flex flex-col gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="text-[#155cfb] text-base leading-6 [font-family:'Inter',Helvetica] mt-1">
                              ✓
                            </span>
                            <p className="text-[#45556c] text-base leading-6 [font-family:'Inter',Helvetica] flex-1">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <Separator className="my-8 border-[#e1e8f0]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full px-[65.77px] pt-20 pb-0 bg-white">
          <h2 className="font-bold text-[#0e162b] text-[34px] tracking-[-0.34px] leading-[39.1px] [font-family:'Space_Grotesk',Helvetica]">
            Skills & Expertise
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-white rounded-2xl shadow-[0px_2px_8px_#0f172a14] border-0"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="font-bold text-[#0e162b] text-xl leading-7 [font-family:'Space_Grotesk',Helvetica]">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="bg-[#2f7ae51a] text-[#1d63dc] border-[0.56px] border-[#1d63dc] hover:bg-[#2f7ae51a] rounded-2xl px-3 py-[7.2px] text-sm font-normal h-auto"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full px-[65.8px] pt-20 pb-0 bg-white">
          <h2 className="font-bold text-[#0e162b] text-[34px] tracking-[-0.34px] leading-[39.1px] [font-family:'Space_Grotesk',Helvetica]">
            Continuous Learning & Certifications
          </h2>

          <p className="mt-6 text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica]">
            I'm actively investing in marketing operations, analytics, and
            AI-driven workflows.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white rounded-2xl border-[0.56px] border-transparent"
              >
                <CardContent className="p-6 flex gap-4">
                  <img src={cert.icon} alt={cert.title} className="w-12 h-12" />

                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-[#0e162b] text-xl leading-7 [font-family:'Space_Grotesk',Helvetica]">
                        {cert.title}
                      </h3>
                      <span className="text-[#45556c] text-sm leading-5 [font-family:'Inter',Helvetica]">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica]">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 rounded-2xl border-[0.56px] border-[#1d63dc1a] bg-[linear-gradient(180deg,rgba(254,228,214,1)_0%,rgba(245,230,221,1)_50%,rgba(232,245,241,1)_100%)]">
            <CardContent className="p-8 flex gap-4">
              <img
                src="/figmaAssets/container-2.svg"
                alt="AI for Marketers"
                className="w-12 h-12"
              />

              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-bold text-[#0e162b] text-xl leading-7 [font-family:'Space_Grotesk',Helvetica]">
                  AI for Marketers (Self-directed)
                </h3>

                <p className="text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica]">
                  Experimenting with Cursor, n8n, Replit, and OpenAI API to
                  build internal tools and automations. Currently exploring how
                  AI can streamline marketing workflows, improve reporting, and
                  automate repetitive tasks.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {aiTools.map((tool, idx) => (
                    <Badge
                      key={idx}
                      className="bg-[#ffffffcc] text-[#1d63dc] border-[0.56px] border-[#1d63dc33] hover:bg-[#ffffffcc] rounded-2xl px-3 py-[5.1px] text-xs font-normal h-auto"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-6 px-[65.8px] pt-20 pb-0 bg-white">
          <Card className="flex-1 bg-white rounded-2xl shadow-[0px_2px_8px_#0f172a14] border-0">
            <CardContent className="p-8 flex flex-col gap-6">
              <h2 className="font-bold text-[#0e162b] text-2xl leading-8 [font-family:'Space_Grotesk',Helvetica]">
                What I'm Looking For
              </h2>

              <p className="text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica]">
                I'm currently exploring roles where I can bring together product
                marketing, marketing operations, and content to support B2B
                growth.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/figmaAssets/icon-11.svg"
                      alt="Roles"
                      className="w-5 h-5"
                    />
                    <h3 className="font-bold text-[#0e162b] text-xl leading-7 [font-family:'Space_Grotesk',Helvetica]">
                      Roles
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {lookingForRoles.map((role, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#2f7ae5] text-base tracking-[-0.31px] leading-6 [font-family:'Inter',Helvetica]">
                          •
                        </span>
                        <span className="font-bold text-[#0e162b] text-base leading-6 [font-family:'Inter',Helvetica]">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/figmaAssets/icon-4.svg"
                      alt="Companies"
                      className="w-5 h-5"
                    />
                    <h3 className="font-bold text-[#0e162b] text-xl leading-7 [font-family:'Space_Grotesk',Helvetica]">
                      Companies
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {lookingForCompanies.map((company, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#155cfb] text-base tracking-[-0.31px] leading-6 [font-family:'Inter',Helvetica]">
                          •
                        </span>
                        <span className="font-bold text-[#0e162b] text-base leading-6 [font-family:'Inter',Helvetica]">
                          {company}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/figmaAssets/icon-5.svg"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <h3 className="font-bold text-[#0e162b] text-xl leading-7 [font-family:'Space_Grotesk',Helvetica]">
                      Location
                    </h3>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#2f7ae5] text-base tracking-[-0.31px] leading-6 [font-family:'Inter',Helvetica]">
                      •
                    </span>
                    <p className="text-[#45556c] text-base leading-6 [font-family:'Inter',Helvetica] flex-1">
                      Hybrid in North County San Diego or remote roles based in
                      California
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 rounded-2xl shadow-[0px_2px_8px_#0f172a14] border-0 bg-[linear-gradient(180deg,rgba(208,242,236,1)_0%,rgba(219,234,254,1)_100%)]">
            <CardContent className="p-8 flex flex-col gap-6">
              <h2 className="font-bold text-[#0e162b] text-2xl leading-8 [font-family:'Space_Grotesk',Helvetica]">
                Why I'm a Strong Fit
              </h2>

              <div className="flex flex-col gap-4">
                {strongFitReasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 p-4 bg-[#ffffff99] rounded-2xl"
                  >
                    <img
                      src="/figmaAssets/icon.svg"
                      alt="Check"
                      className="w-4 h-4 mt-1"
                    />
                    <p className="text-[#0e162b] text-base leading-6 [font-family:'Inter',Helvetica]">
                      <span className="font-bold">{reason.title}</span>
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col w-full px-[65.8px] pt-20 pb-0 bg-white">
          <h2 className="text-center font-bold text-[#0e162b] text-[34px] tracking-[-0.34px] leading-[39.1px] [font-family:'Space_Grotesk',Helvetica]">
            Let's Connect
          </h2>

          <p className="mt-6 text-center text-[#45556c] text-lg leading-[28.8px] [font-family:'Inter',Helvetica] max-w-[647px] mx-auto">
            Interested in building more efficient, AI-augmented marketing
            operations for climate, proptech, or health-related products? I'd
            love to talk.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button className="bg-[#1d63dc] hover:bg-[#1d63dc]/90 text-white rounded-2xl shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] px-8 h-auto py-4">
              <img
                src="/figmaAssets/icon-2.svg"
                alt="Email"
                className="w-5 h-5 mr-2"
              />
              Email Me
            </Button>

            <Button
              variant="outline"
              className="bg-white hover:bg-white text-[#1d63dc] border-[1.67px] border-[#1d63dc] rounded-2xl px-8 h-auto py-4"
            >
              <img
                src="/figmaAssets/icon-1.svg"
                alt="LinkedIn"
                className="w-5 h-5 mr-2"
              />
              Connect on LinkedIn
            </Button>
          </div>

          <p
            className="mt-6 text-center text-[#45556c] text-lg leading-[28.8px] [font-family:'
Inter',Helvetica] max-w-[707px] mx-auto"
          >
            Open to hybrid roles in North County San Diego or remote roles based
            in California.
          </p>

          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/figmaAssets/icon-1.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              <span className="text-[#45556c] text-base text-center leading-6 [font-family:'Inter',Helvetica]">
                LinkedIn
              </span>
            </div>

            <div className="w-1 h-1 bg-[#45556c] rounded-full" />

            <div className="flex items-center gap-2">
              <img
                src="/figmaAssets/icon-5.svg"
                alt="Location"
                className="w-5 h-5"
              />
              <span className="text-[#45556c] text-base text-center leading-6 [font-family:'Inter',Helvetica]">
                Carlsbad, CA
              </span>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col w-full bg-[#0f172b] border-t-[0.56px] border-[#fffefe1a] pt-8 px-[65.77px]">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-lg leading-7 [font-family:'Inter',Helvetica]">
                  Ariuna Munkueva
                </h3>
                <p className="text-[#90a1b8] text-lg leading-7 [font-family:'Inter',Helvetica]">
                  Product & Content Marketing
                </p>
              </div>

              <img
                src="/figmaAssets/icon-1.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </div>

            <div className="flex flex-col pt-8 border-t-[0.56px] border-[#fffefe1a]">
              <p className="text-center text-[#90a1b8] text-lg leading-7 [font-family:'Inter',Helvetica]">
                © 2025 Ariuna Munkueva. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
