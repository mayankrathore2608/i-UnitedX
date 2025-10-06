import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small businesses getting started with automation",
    features: [
      "Up to 5 automation workflows",
      "Basic AI chatbot integration",
      "Email support",
      "Monthly strategy call",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/month",
    description: "For growing businesses ready to scale their operations",
    features: [
      "Up to 20 automation workflows",
      "Advanced AI chatbot with ML",
      "Priority support",
      "Weekly strategy calls",
      "Advanced analytics & insights",
      "Custom integrations",
      "Data pipeline automation",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Unlimited automation workflows",
      "Custom AI model development",
      "24/7 dedicated support",
      "Daily strategy sessions",
      "Enterprise analytics suite",
      "White-label solutions",
      "Full API access",
      "Dedicated account manager",
    ],
  },
];

export const Pricing = () => {
  const handlePayment = (planName: string) => {
    // This will be connected to a payment gateway
    console.log(`Initiating payment for ${planName} plan`);
    alert(`Payment gateway will be integrated here for ${planName} plan`);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-reverse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your automation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:-translate-y-3 transition-all duration-500 overflow-hidden ${
                plan.popular 
                  ? 'border-primary shadow-[0_0_40px_rgba(139,92,246,0.4)] scale-105' 
                  : 'border-border/50 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]'
              } bg-card/50 backdrop-blur-sm`}
            >
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium glow-effect pulse-glow-animation">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 relative z-10">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full group-hover:scale-105 transition-transform" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handlePayment(plan.name)}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
