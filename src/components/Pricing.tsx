import React from "react";
import { Code, Cpu, Shield, CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    subtitle: "Perfect for individuals and small startups to test the platform",
    features: [
      { icon: <Code className="w-6 h-6 text-blue-500" />, text: "Real-Time Collaboration" },
      { icon: <Cpu className="w-6 h-6 text-blue-500" />, text: "AI-Powered Feedback" },
    ],
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500",
     buttonText:"Sign up for free"
  },
  {
    title: "Basic",
    price: "$19/month",
    subtitle: "Best suited for small teams conducting regular interviews",
    features: [
      { icon: <Code className="w-6 h-6 text-purple-500" />, text: "Real-Time Collaboration" },
      { icon: <Cpu className="w-6 h-6 text-purple-500" />, text: "AI-Powered Feedback" },
    ],
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500",
     buttonText:"Start a free trail"
  },
  {
    title: "Pro",
    price: "$49/month",
    subtitle: "Ideal for large organizations with advanced hiring needs",
    features: [
      { icon: <Code className="w-6 h-6 text-green-500" />, text: "All Basic Features" },
      { icon: <Shield className="w-6 h-6 text-green-500" />, text: "Cheat-Proof Environment" },
      { icon: <CheckCircle className="w-6 h-6 text-green-500" />, text: "Built-In Test Cases" },
    ],
    borderColor: "border-green-500",
    bgColor: "bg-green-500",
    buttonText:"Start a free trail"
  },
];

const PricingSection = () => {
  return (
    <section className="py-10 mt-10" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Pricing Plans</h2>
        <div className="flex gap-12 flex-wrap justify-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 justify-center items-center p-6 rounded-md shadow-lg border-t-2 ${plan.borderColor} w-[300px]`}
            >
              <div className="text-center">
                <h1 className="text-2xl font-bold">{plan.title}</h1>
                <p className="text-lg text-gray-500">{plan.price}</p>
              </div>
              <p className="text-gray-600 text-sm">{plan.subtitle}</p>
              <button
                className={`text-white font-medium py-2 px-6 rounded-md rounded-tr-3xl ${plan.bgColor}`}
              >
                {plan.buttonText}
              </button>
              <div className="flex flex-col gap-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    {feature.icon}
                    <p className="text-gray-500">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
