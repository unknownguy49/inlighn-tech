"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import CustomCursor from "../components/custom-cursor";
import ScrollReveal from "../components/scroll-reveal";
import { TeamMemberSkeleton } from "../components/skeleton-loader";
import StarfieldBackground from "../components/starfield-background";
import { KineticText } from "../components/kinetic-typography";
import SectionDivider from "../components/section-divider";

export default function AboutPage() {
  const [teamLoading, setTeamLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setTeamLoading(false), 2500);
  }, []);

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      expertise: "Artificial Intelligence & Machine Learning",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      expertise: "Cybersecurity & Cloud Architecture",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Programs",
      expertise: "Data Science & Analytics",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      role: "Lead Full Stack Instructor",
      expertise: "Full Stack Development & DevOps",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Continuous Starfield Background */}
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>

      <div className="relative z-10">
        <CustomCursor />
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="text-center px-4 md:px-6 max-w-6xl mx-auto py-20">
            <ScrollReveal delay={0.2}>
              <Badge
                variant="none"
                className="mb-6 md:mb-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold backdrop-blur-sm"
              >
                🌟 About InlighnTech
              </Badge>
            </ScrollReveal>

            <div className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 text-foreground leading-tight">
              <KineticText text="Shaping " className="inline" type="words" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Tomorrow's
              </span>
              <br />
              <KineticText
                text="Tech "
                className="inline"
                type="words"
                delay={600}
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                Leaders
              </span>
            </div>

            <ScrollReveal delay={0.6}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We're on a mission to bridge the gap between academic learning
                and industry requirements through immersive, hands-on technology
                education that transforms careers and lives.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider id="mission" />

        {/* Mission Section */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <ScrollReveal>
                <KineticText
                  text="Our Mission"
                  className="text-3xl md:text-5xl font-black text-foreground mb-6 md:mb-8"
                  type="words"
                />
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
                  At InlighnTech, we believe that the future belongs to those
                  who can adapt, innovate, and lead in the digital age. Our
                  mission is to empower students and young professionals with
                  the practical skills, industry knowledge, and confidence
                  needed to excel in today's competitive tech landscape.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider id="team" />

        {/* Team Section */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16 lg:mb-20">
                <KineticText
                  text="Meet Our Leadership"
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 md:mb-8"
                  type="words"
                />
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Industry veterans and passionate educators dedicated to your
                  success
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamLoading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <TeamMemberSkeleton key={index} />
                  ))
                : team.map((member, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <Card className="bg-background border-gray-700 hover:shadow-xl hover:border-purple-400 hover:shadow-purple-500/20 transition-all duration-300 group h-full">
                        <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-blue-400 mb-2 md:mb-3 font-medium text-sm md:text-base">
                            {member.role}
                          </p>
                          <p className="text-muted-foreground text-xs md:text-sm flex-1">
                            {member.expertise}
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
