"use client";
import { Code, Cpu, Shield, CheckCircle, Edit, List } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinity-moving-card";
import { Cover } from "./ui/cover";
const features = [
  {
    title: "Real-Time Collaboration",
    description:
      "Collaborate with candidates on a shared code editor during interviews.",
    icon: <Code className="w-10 h-10 text-blue-500 mx-auto" />,
    borderColor: "border-blue-500",
  },
  {
    title: "AI-Powered Feedback",
    description: "Get instant feedback on code quality and performance.",
    icon: <Cpu className="w-10 h-10 text-green-500 mx-auto" />,
    borderColor: "border-green-500",
  },
  {
    title: "Cheat-Proof Environment",
    description: "Advanced monitoring tools to ensure fair assessments.",
    icon: <Shield className="w-10 h-10 text-red-500 mx-auto" />,
    borderColor: "border-red-500",
  },
  {
    title: "Built-In Test Cases",
    description:
      "Automatically evaluate submissions with pre-defined test cases.",
    icon: <CheckCircle className="w-10 h-10 text-yellow-500 mx-auto" />,
    borderColor: "border-yellow-500",
  },
  {
    title: "Customizable Questions",
    description: "Create coding challenges tailored to your hiring needs.",
    icon: <Edit className="w-10 h-10 text-purple-500 mx-auto" />,
    borderColor: "border-purple-500",
  },
  {
    title: "Activity Logs",
    description:
      "Track candidate activity, including typing patterns and tab switches.",
    icon: <List className="w-10 h-10 text-indigo-500 mx-auto" />,
    borderColor: "border-indigo-500",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-10 mt-30" id="features">
      <div className="text-center mb-12">

        <h1 className="text-3xl font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Explore the powerful features that make CodeHire the ideal <br />  platform for conducting  <Cover className="text-mainColor"><span className="text-mainColor">coding interviews</span> </Cover>.
          </h1>
      </div>

      <InfiniteMovingCards
          items={features}
          direction="right"
          speed="fast"                                            
        />

    </section>
  );
};

export default FeatureSection;


