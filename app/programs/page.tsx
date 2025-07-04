"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Code,
  Database,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import CustomCursor from "../components/custom-cursor";
import ScrollReveal from "../components/scroll-reveal";
import { ProgramCardSkeleton } from "../components/skeleton-loader";
import StarfieldBackground from "../components/starfield-background";
import { KineticText } from "../components/kinetic-typography";
import ApplicationPopup from "../components/application-popup";
import SectionDivider from "../components/section-divider";

export default function ProgramsPage() {
  const [programsLoading, setProgramsLoading] = useState(true);
  const [showApplicationPopup, setShowApplicationPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => setProgramsLoading(false), 2000);
  }, []);

  const programs = [
    {
      icon: Shield,
      title: "Cybersecurity Internship",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$2,999",
      description:
        "Master the art of digital defense with hands-on experience in ethical hacking, penetration testing, and security protocols.",
      highlights: [
        "Ethical Hacking & Penetration Testing",
        "Network Security & Firewall Management",
        "Incident Response & Digital Forensics",
        "Security Compliance & Risk Assessment",
      ],
      tools: ["Kali Linux", "Wireshark", "Metasploit", "Nessus"],
      color: "from-red-500 to-red-600",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
      rating: 4.9,
      students: "1,200+",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      price: "$3,499",
      description:
        "Build complete web applications from frontend to backend using modern frameworks and cloud technologies.",
      highlights: [
        "React.js & Next.js Development",
        "Node.js & Express Backend",
        "Database Design & Management",
        "API Development & Integration",
      ],
      tools: ["React", "Next.js", "Node.js", "MongoDB"],
      color: "from-blue-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
      rating: 4.8,
      students: "2,100+",
    },
    {
      icon: Database,
      title: "Data Science Program",
      duration: "14 weeks",
      level: "Intermediate",
      price: "$3,299",
      description:
        "Dive deep into data analysis, machine learning, and predictive modeling to extract insights from complex datasets.",
      highlights: [
        "Machine Learning Algorithms",
        "Statistical Analysis & Modeling",
        "Data Visualization & Storytelling",
        "Big Data Processing",
      ],
      tools: ["Python", "R", "TensorFlow", "Pandas"],
      color: "from-green-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      rating: 4.9,
      students: "800+",
    },
    {
      icon: BarChart3,
      title: "Data Analysis Track",
      duration: "10 weeks",
      level: "Beginner",
      price: "$2,499",
      description:
        "Transform raw data into actionable business insights using industry-standard tools and methodologies.",
      highlights: [
        "Business Intelligence & Reporting",
        "SQL & Database Querying",
        "Excel Advanced Analytics",
        "Dashboard Creation & Automation",
      ],
      tools: ["SQL", "Excel", "Tableau", "Power BI"],
      color: "from-purple-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      rating: 4.7,
      students: "950+",
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
                🎓 Immersive Programs
              </Badge>
            </ScrollReveal>

            <div className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 text-foreground leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Master
              </span>
              <KineticText
                text=" Tomorrow's Technologies "
                className="inline"
                type="words"
                delay={400}
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                Today
              </span>
            </div>

            <ScrollReveal delay={0.6}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive internship programs designed to
                give you hands-on experience in the most in-demand tech fields
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider id="programs-grid" />

        {/* Programs Grid */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {programsLoading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <ProgramCardSkeleton key={index} />
                  ))
                : programs.map((program, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <Card className="bg-background border-gray-700 hover:shadow-2xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                        <div className="relative h-48 md:h-64 overflow-hidden">
                          <Image
                            src={program.image || "/placeholder.svg"}
                            alt={program.title}
                            fill
                            className="object-cover transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/90 text-gray-900 text-xs md:text-sm">
                              {program.level}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                            <span className="text-foreground font-medium text-sm">
                              {program.rating}
                            </span>
                            <span className="text-foreground/80 text-sm">
                              ({program.students})
                            </span>
                          </div>
                        </div>

                        <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-4 md:mb-6">
                            <div
                              className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center transition-all duration-300`}
                            >
                              <program.icon className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
                            </div>
                            <div className="text-right">
                              <div className="text-2xl md:text-3xl font-black text-foreground">
                                {program.price}
                              </div>
                              <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                                {program.duration}
                              </div>
                            </div>
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                            {program.title}
                          </h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6 flex-1">
                            {program.description}
                          </p>

                          <div className="space-y-6 md:space-y-8">
                            <div>
                              <h4 className="text-foreground font-bold text-lg md:text-xl mb-3 md:mb-4 flex items-center gap-2">
                                <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                                What You'll Master:
                              </h4>
                              <ul className="space-y-2 md:space-y-3">
                                {program.highlights.map((highlight, idx) => (
                                  <li
                                    key={idx}
                                    className="text-muted-foreground flex items-center gap-3 text-sm md:text-base"
                                  >
                                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-foreground font-bold text-lg md:text-xl mb-3 md:mb-4">
                                Tools & Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {program.tools.map((tool, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="border-border text-muted-foreground hover:bg-muted transition-colors text-xs md:text-sm"
                                  >
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button
                              onClick={() => setShowApplicationPopup(true)}
                              className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-foreground font-bold py-3 md:py-4 text-base md:text-lg rounded-full transition-all duration-300 mt-auto`}
                            >
                              Apply Now{" "}
                              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
            </div>
          </div>
        </section>

        <Footer />
        <ApplicationPopup
          open={showApplicationPopup}
          onOpenChange={setShowApplicationPopup}
        />
      </div>
    </div>
  );
}
