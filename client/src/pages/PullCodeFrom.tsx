import React from "react";
import { Button } from "@/components/ui/button";
import { MainContentSection } from "./sections/MainContentSection";
import { ProfileHeroSection } from "./sections/ProfileHeroSection";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export const PullCodeFrom = (): JSX.Element => {
  return (
    <div className="bg-white overflow-x-hidden w-full min-w-[1275px] relative">
      <div className="w-full bg-[linear-gradient(135deg,rgba(244,246,251,1)_0%,rgba(231,236,246,1)_100%)]">
        <header className="flex flex-col w-full h-16 items-start px-[17.78px] py-0 fixed top-0 left-0 bg-[#fffffff2] shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] z-50">
          <nav className="flex h-[63.99px] items-center justify-between px-[47.99px] py-0 relative w-full">
            <div className="relative w-[126.02px] h-6">
              <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#0e162b] text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                Ariuna Munkueva
              </div>
            </div>

            <div className="flex w-[538.12px] h-9 items-center gap-8 relative">
              <div className="flex items-center gap-4 h-5">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#697282] text-sm tracking-[0] leading-5 whitespace-nowrap hover:text-[#0e162b] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <Button className="w-[184.15px] h-9 p-0 bg-[#1d63dc] hover:bg-[#1d63dc]/90 flex items-center justify-center gap-[7.99px] rounded-2xl">
                <img
                  className="relative w-4 h-4"
                  alt="Icon"
                  src="/figmaAssets/icon-19.svg"
                />
                <span className="relative w-[136.16px] h-5 text-sm leading-5 [font-family:'Inter',Helvetica] font-normal text-white tracking-[0] whitespace-nowrap">
                  Connect on LinkedIn
                </span>
              </Button>
            </div>
          </nav>
        </header>

        <div className="pt-16">
          <ProfileHeroSection />
          <MainContentSection />
        </div>
      </div>
    </div>
  );
};
