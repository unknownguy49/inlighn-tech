import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-background border-t border-border dark:border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <Link href="/" className="text-xl md:text-2xl font-bold text-foreground mb-4 block">
              <span className="text-blue-500">Inlighn</span>Tech
            </Link>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              Empowering the next generation of tech professionals through immersive learning experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm md:text-base">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm md:text-base">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/verify-certificate" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Verify Certificate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm md:text-base">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-sm">info@inlighntech.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-sm">Tech Hub, Innovation District</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-muted-foreground">
          <p className="text-sm">&copy; 2024 InlighnTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
