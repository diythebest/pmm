import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProfileHeroSection = (): JSX.Element => {
  const skills = ["HubSpot", "GA4", "GTM", "SEO", "Cursor", "n8n", "Replit"];

  const additionalSkills = ["Supabase (basic)"];

  return (
    <section className="w-full py-20 px-4 bg-[linear-gradient(90deg,rgba(15,118,110,0.06)_0%,rgba(0,0,0,0)_0%),linear-gradient(180deg,rgba(15,118,110,0.06)_0%,rgba(0,0,0,0)_0%)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <Badge className="w-fit px-4 py-2 bg-[#2f7ae51a] text-[#1d63dc] border-[0.56px] border-transparent rounded-full hover:bg-[#2f7ae51a] h-auto">
              <span className="font-normal text-lg tracking-[-0.44px] leading-7 [font-family:'Inter',Helvetica]">
                Product Marketing &amp; Growth · B2B SaaS, PropTech, ClimateTech
              </span>
            </Badge>

            <h1 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#0e162b] text-[56px] tracking-[-1.12px] leading-[64.4px]">
              Ariuna Munkueva
            </h1>

            <h2 className="[font-family:'Space_Grotesk',Helvetica] text-[#314157] text-2xl leading-[30px] font-bold tracking-[0]">
              Product Marketing &amp; Growth · B2B SaaS, PropTech, ClimateTech
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-lg tracking-[0] leading-[28.8px]">
              I help teams turn technical products into clear, compelling value
              for customers.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Button className="bg-[#1d63dc] hover:bg-[#1d63dc]/90 rounded-2xl h-auto px-6 py-4 gap-2">
                <img
                  className="w-4 h-4"
                  alt="LinkedIn icon"
                  src="/figmaAssets/icon-6.svg"
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                  Connect on LinkedIn
                </span>
              </Button>

              <Button
                variant="outline"
                className="bg-white border-[1.67px] border-[#1d63dc] hover:bg-[#1d63dc]/5 rounded-2xl h-auto px-6 py-4 gap-2"
              >
                <img
                  className="w-4 h-4"
                  alt="Email icon"
                  src="/figmaAssets/icon-15.svg"
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#1d63dc] text-base tracking-[0] leading-6">
                  Email Me
                </span>
              </Button>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t-[0.56px] border-[#0f766e1a]">
              <div className="flex flex-wrap items-center gap-2">
                {skills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-sm tracking-[0] leading-5">
                      {skill}
                    </span>
                    {index < skills.length - 1 && (
                      <span className="text-[#45556c] text-sm tracking-[0] leading-5 [font-family:'Inter',Helvetica] font-normal">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {additionalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-sm tracking-[0] leading-5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full aspect-square max-w-[379px] lg:ml-auto">
            <img
              src="/figmaAssets/imagewithfallback.png"
              alt="Ariuna Munkueva profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
