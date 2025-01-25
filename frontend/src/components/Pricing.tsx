import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    priceMonthly: "Free",
    description:
      "The perfect plan for individuals just starting their interview preparation journey.",
    features: [
      "Access to basic interview questions and answers",
      "1 mock interview per month",
      "Basic coding challenges and problem sets",
      "Limited access to study resources",
      "Community-based support",
      "Email support (response within 48 hours)",
    ],
    featured: false,
  },
  {
    name: "Standard",
    id: "tier-standard",
    href: "#",
    priceMonthly: "$19",
    description:
      "For individuals who want more resources, practice questions, and personalized feedback.",
    features: [
      "3 mock interviews per month",
      "Unlimited coding challenges and problem sets",
      "Access to video tutorials and study materials",
      "Feedback on coding solutions",
      "Priority email support (response within 24 hours)",
      "Access to live webinars and group study sessions",
    ],
    featured: false,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "#",
    priceMonthly: "$49",
    description:
      "Comprehensive plan with premium features, personalized coaching, and unlimited access to all resources.",
    features: [
      "Expert feedback on coding challenges",
      "Personalized coaching and mentorship",
      "Unlimited access to all video tutorials, courses, and study materials",
      "1-on-1 support with career experts",
      "Priority access to job postings and internship opportunities",
      "24/7 priority email and chat support",
    ],
    featured: true,
  },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 mb-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className=" text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>

        <h1 className="text-5xl text-balance tracking-tight font-semibold  mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Choose the right plan for you
          </h1>

      </div>
      <p className="mx-auto mt-4          max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className=" w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                "relative shadow-2xl",
                "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none",
                "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  "text-indigo-400",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    "text-white",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span className={classNames("text-gray-500", "text-base")}>
                  /month
                </span>
              </p>
              <p className={classNames("text-gray-300", "mt-6 text-base/7")}>
                {tier.description}
              </p>
              <div className="flex flex-col flex-1 justify-between  ">
                <ul
                  role="list"
                  className={classNames(
                    "text-gray-300",
                    "mt-8 space-y-3 text-sm/6 sm:mt-10 flex-1"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        aria-hidden="true"
                        className={classNames(
                          "text-indigo-400 ",
                          " w-5 flex-none"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    "bg-mainColor text-white shadow-sm hover:bg-mainColor/20 focus-visible:outline-mainColor",
                    "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  )}
                >
                  Get started today
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
