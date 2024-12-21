import { Code, Cpu, Shield, CheckCircle, Edit, List } from "lucide-react"
const features = [
    {
      title: "Real-Time Collaboration",
      description: "Collaborate with candidates on a shared code editor during interviews.",
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
      description: "Automatically evaluate submissions with pre-defined test cases.",
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
      description: "Track candidate activity, including typing patterns and tab switches.",
      icon: <List className="w-10 h-10 text-indigo-500 mx-auto" />,
      borderColor: "border-indigo-500",
    },
  ];
  
  

const FeatureSection = () => {
  return (
    <section className="py-10 mt-30" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Key Features</h2>
        <div className="flex gap-10 flex-wrap justify-center ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border-t-2 ${feature.borderColor} rounded-md rounded-t-md shadow-lg cursor-pointer w-[400px] shadow-lg`}
            >
              <div className="p-6 text-center">
                <div className="mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
