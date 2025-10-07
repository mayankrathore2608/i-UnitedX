import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone, User } from "lucide-react";

export const BookCall = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form:", formData);

    try {

      const response = await fetch("https://n8n-0bk9.onrender.com/webhook/0e73126f-da3a-41dd-bb31-ccaa78e3c9a7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to schedule call");
      }

      const result = await response.json();
      console.log("API Response:", result);

      toast({
        title: "Call Scheduled!",
        description: "We'll contact you shortly to confirm your appointment.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="book-call" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl drift-animation" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-3xl float-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to <span className="gradient-text">Automate</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation to discuss your automation needs
            </p>
          </div>

          <Card className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Book Your Strategy Call
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input
                      placeholder="Your Company Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">What are you looking to automate?</label>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-effect hover:scale-105 transition-transform"
                >
                  Schedule My Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
