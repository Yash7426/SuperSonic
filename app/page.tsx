"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Powered from "@/components/ui-home/powered";
import About from "@/components/ui-home/about";
import Features from "@/components/ui-home/features";
import Team from "@/components/ui-home/team";
import Footer from "@/components/ui-home/footer";
import Landing from "@/components/ui-home/landing";
import Big from "@/components/ui-home/big";
import Cta from "@/components/ui-home/cta";

type SectionComponent = React.FC<{ scrollYProgress: any }>;

const sections: SectionComponent[] = [
  Landing,
  Powered,
  Big,
  About,
  Features,
  Team,
  Cta,
  Footer,
];

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const currentSection = useRef(0);
  const isScrolling = useRef(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const sectionElement = container.current?.children[
      sectionIndex
    ] as HTMLElement;
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      requestAnimationFrame(() => {
        const sectionHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        if (e.deltaY > 0) {
          // Scroll Down
          if (
            scrollPosition + sectionHeight >=
            currentSection.current * sectionHeight
          ) {
            const nextSection = Math.min(
              currentSection.current + 1,
              sections.length - 1
            );
            currentSection.current = nextSection;
            scrollToSection(nextSection);
          }
        } else {
          // Scroll Up
          if (scrollPosition <= currentSection.current * sectionHeight) {
            const prevSection = Math.max(currentSection.current - 1, 0);
            currentSection.current = prevSection;
            scrollToSection(prevSection);
          }
        }

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Prevent rapid scrolling
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <main ref={container} className="w-full relative bg-white">
      {sections.map((Section, index) => (
        <ParallaxSection key={index} scrollYProgress={scrollYProgress}>
          <Section scrollYProgress={scrollYProgress} />
        </ParallaxSection>
      ))}
    </main>
  );
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  scrollYProgress: any;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  scrollYProgress,
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div className="sticky top-[-70px] w-full bg-white">
      {children}
    </motion.div>
  );
};
