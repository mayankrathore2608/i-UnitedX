import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">AutomateAI</h3>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through intelligent automation and AI solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solutions" className="hover:text-primary transition-colors">AI Chatbots</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Workflow Automation</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Machine Learning</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Data Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@automateai.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 AI Street</li>
              <li>San Francisco, CA 94102</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AutomateAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
