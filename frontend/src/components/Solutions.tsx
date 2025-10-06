import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Brain, Database, MessageSquare, Zap } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer inquiries 24/7 with natural language processing.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and connect your tools for seamless business process automation.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics, pattern recognition, and data-driven decision making.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Unify your data sources and create automated pipelines for real-time insights and reporting.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support AI",
    description: "Enhance support operations with AI-powered ticket routing, response suggestions, and sentiment analysis.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Identify bottlenecks and optimize workflows using AI-driven analytics and automation strategies.",
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pulse-glow-animation" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl float-slow" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge automation tools designed to revolutionize your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Card Floating Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <solution.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
