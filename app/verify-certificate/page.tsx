"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Search,
  Award,
  CheckCircle,
  XCircle,
  Calendar,
  BookOpen,
  Shield,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import CustomCursor from "../components/custom-cursor";
import ScrollReveal from "../components/scroll-reveal";
import { Button } from "@/components/ui/button";
import StarfieldBackground from "../components/starfield-background";
import { KineticText } from "../components/kinetic-typography";
import SectionDivider from "../components/section-divider";

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [copiedId, setCopiedId] = useState("");

  const exampleCertificates = [
    "INLT-2024-001",
    "INLT-2024-002",
    "INLT-2024-003",
    "INLT-2024-004",
  ];

  const mockCertificates = {
    "INLT-2024-001": {
      valid: true,
      studentName: "John Doe",
      program: "Full Stack Development",
      issueDate: "2024-01-15",
      completionDate: "2024-01-10",
      grade: "A+",
      finalScore: "96/100",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
      mentor: "Sarah Chen",
      certificateHash: "0x1a2b3c4d5e6f7g8h9i0j",
      blockchainVerified: true,
      studentImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    "INLT-2024-002": {
      valid: true,
      studentName: "Jane Smith",
      program: "Cybersecurity",
      issueDate: "2024-02-20",
      completionDate: "2024-02-15",
      grade: "A",
      finalScore: "92/100",
      skills: [
        "Ethical Hacking",
        "Network Security",
        "Penetration Testing",
        "Incident Response",
      ],
      mentor: "Marcus Rodriguez",
      certificateHash: "0x2b3c4d5e6f7g8h9i0j1k",
      blockchainVerified: true,
      studentImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    "INLT-2024-003": {
      valid: true,
      studentName: "Alex Johnson",
      program: "Data Science",
      issueDate: "2024-03-10",
      completionDate: "2024-03-05",
      grade: "A+",
      finalScore: "98/100",
      skills: [
        "Machine Learning",
        "Python",
        "Data Visualization",
        "Statistical Analysis",
      ],
      mentor: "Dr. Emily Watson",
      certificateHash: "0x3c4d5e6f7g8h9i0j1k2l",
      blockchainVerified: true,
      studentImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    "INLT-2024-004": {
      valid: true,
      studentName: "Maria Garcia",
      program: "Data Analysis",
      issueDate: "2024-04-05",
      completionDate: "2024-04-01",
      grade: "A",
      finalScore: "94/100",
      skills: ["SQL", "Excel", "Tableau", "Business Intelligence"],
      mentor: "David Kim",
      certificateHash: "0x4d5e6f7g8h9i0j1k2l3m",
      blockchainVerified: true,
      studentImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  };

  const handleSearch = async () => {
    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result =
      mockCertificates[certificateId as keyof typeof mockCertificates];
    setSearchResult(result || { valid: false });
    setIsSearching(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(""), 2000);
  };

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
                className="mb-6 md:mb-8 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/15 hover:border-yellow-500/30 hover:text-yellow-700 dark:hover:text-yellow-300 transition-all duration-300 px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold backdrop-blur-sm"
              >
                🏆 Certificate Verification
              </Badge>
            </ScrollReveal>

            <div className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 text-foreground leading-tight">
              <KineticText
                text="Verify Your "
                className="inline"
                type="words"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600">
                Achievement
              </span>
            </div>

            <ScrollReveal delay={0.6}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Authenticate InlighnTech certificates with blockchain security
                and showcase your verified skills to employers worldwide
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider id="examples" />

        {/* Example Certificates Section */}
        <section className="py-8 md:py-12 relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                Try These Example Certificate IDs:
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {exampleCertificates.map((id) => (
                  <button
                    key={id}
                    onClick={() => copyToClipboard(id)}
                    className="flex items-center gap-2 bg-muted border border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 hover:bg-gray-700 transition-all duration-200 group"
                  >
                    <code className="text-blue-400 font-mono text-sm md:text-base">
                      {id}
                    </code>
                    {copiedId === id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground group-hover:text-muted-foreground" />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Click any ID above to copy it, then paste it in the verification
                form below
              </p>
            </div>
          </div>
        </section>

        <SectionDivider id="verification" />

        {/* Verification Section */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <Card className="bg-background border-gray-700 shadow-2xl hover:shadow-3xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300">
                <CardHeader className="text-center pb-6 md:pb-8">
                  <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4 md:mb-6">
                    Certificate Verification Portal
                  </CardTitle>
                  <p className="text-muted-foreground text-lg md:text-xl">
                    Enter your certificate ID to verify its authenticity and
                    view comprehensive details
                  </p>
                </CardHeader>
                <CardContent className="p-6 md:p-8 lg:p-12">
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <Label
                        htmlFor="certificate-id"
                        className="text-foreground text-lg md:text-xl mb-3 md:mb-4 block font-semibold"
                      >
                        Certificate ID
                      </Label>
                      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <Input
                          id="certificate-id"
                          placeholder="e.g., INLT-2024-001"
                          value={certificateId}
                          onChange={(e) => setCertificateId(e.target.value)}
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground text-lg md:text-xl py-3 md:py-4 px-4 md:px-6 rounded-xl flex-1"
                        />
                        <Button
                          onClick={handleSearch}
                          disabled={!certificateId || isSearching}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl w-full sm:w-auto"
                        >
                          {isSearching ? (
                            <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white"></div>
                          ) : (
                            <>
                              <Search className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                              Verify
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Search Results */}
                    {searchResult && (
                      <ScrollReveal delay={0.3}>
                        <div className="mt-8 md:mt-12">
                          {searchResult.valid ? (
                            <Card className="bg-green-900/20 border-green-800 hover:shadow-xl hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300">
                              <CardContent className="p-6 md:p-8 lg:p-10">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                                  <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-green-400 flex-shrink-0" />
                                  <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-foreground">
                                      Certificate Verified ✓
                                    </h3>
                                    <p className="text-green-300 text-base md:text-lg">
                                      This certificate is authentic and
                                      blockchain-verified
                                    </p>
                                  </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                  <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3 md:gap-4">
                                      <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                                        <Image
                                          src={
                                            searchResult.studentImage ||
                                            "/placeholder.svg"
                                          }
                                          alt={searchResult.studentName}
                                          fill
                                          className="rounded-full object-cover"
                                        />
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground text-xs md:text-sm font-medium">
                                          Student Name
                                        </p>
                                        <p className="text-foreground font-bold text-lg md:text-xl">
                                          {searchResult.studentName}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:gap-4">
                                      <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-purple-400 flex-shrink-0" />
                                      <div>
                                        <p className="text-muted-foreground text-xs md:text-sm font-medium">
                                          Program
                                        </p>
                                        <p className="text-foreground font-bold text-lg md:text-xl">
                                          {searchResult.program}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:gap-4">
                                      <Award className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 flex-shrink-0" />
                                      <div>
                                        <p className="text-muted-foreground text-xs md:text-sm font-medium">
                                          Final Grade
                                        </p>
                                        <p className="text-foreground font-bold text-lg md:text-xl">
                                          {searchResult.grade} (
                                          {searchResult.finalScore})
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3 md:gap-4">
                                      <Calendar className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                                      <div>
                                        <p className="text-muted-foreground text-xs md:text-sm font-medium">
                                          Completion Date
                                        </p>
                                        <p className="text-foreground font-bold text-lg md:text-xl">
                                          {searchResult.completionDate}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:gap-4">
                                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-400 flex-shrink-0" />
                                      <div>
                                        <p className="text-muted-foreground text-xs md:text-sm font-medium">
                                          Blockchain Status
                                        </p>
                                        <Badge className="bg-green-900/30 text-green-300 border-green-700 text-xs md:text-sm">
                                          ✓ Verified on Blockchain
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-6 md:mt-8">
                                  <p className="text-muted-foreground text-xs md:text-sm font-medium mb-3 md:mb-4">
                                    Skills Mastered
                                  </p>
                                  <div className="flex flex-wrap gap-2 md:gap-3">
                                    {searchResult.skills.map(
                                      (skill: string, index: number) => (
                                        <Badge
                                          key={index}
                                          variant="secondary"
                                          className="bg-blue-900/30 text-blue-300 border-blue-700 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm"
                                        >
                                          {skill}
                                        </Badge>
                                      )
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ) : (
                            <Card className="bg-red-900/20 border-red-800 hover:shadow-xl hover:border-red-400 hover:shadow-red-500/20 transition-all duration-300">
                              <CardContent className="p-6 md:p-8 lg:p-10">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-center sm:text-left">
                                  <XCircle className="h-10 w-10 md:h-12 md:w-12 text-red-400 flex-shrink-0 mx-auto sm:mx-0" />
                                  <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-foreground">
                                      Certificate Not Found
                                    </h3>
                                    <p className="text-red-300 text-base md:text-lg">
                                      The certificate ID you entered is not
                                      valid or does not exist in our system
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </ScrollReveal>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
