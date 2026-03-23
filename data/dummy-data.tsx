import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Discovery & Planning",
    desc: "We understand your goals, audience and challenges to craft a clear, actionable strategy.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Design & Development",
    desc: "High-quality design and scalable development focused on performance and usability.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Launch & Growth",
    desc: "We launch, optimize and continuously improve to drive measurable business growth.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    desc: "Best for early-stage startups.",
    credits: "One-time",
    features: [
      "Project discovery & planning",
      "UI/UX design",
      "Basic website development",
      "1 revision round",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Growth",
    price: "$1,499",
    desc: "Growing teams and businesses.",
    credits: "Monthly",
    features: [
      "Everything in Starter",
      "Advanced UI/UX design",
      "Custom development",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Scale",
    price: "$3,999",
    desc: "For brands ready to scale fast.",
    credits: "Custom",
    features: [
      "Everything in Growth",
      "Dedicated project manager",
      "Ongoing optimization",
      "Marketing & growth support",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "Who loves more? ❤️",
    answer: "Me 😌 (but you’ll never accept it)",
  },
  {
    question: "Favorite memory together? 🌸",
    answer: "Every single moment with you… but Dhanolti trip was special 🏔️❤️",
  },
  {
    question: "Who gets angry more? 😄",
    answer: "You… but honestly, even that is cute 💖",
  },
  {
    question: "What makes you so special? ✨",
    answer: "Everything… your smile, your care, your presence — all of it ❤️",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "My Pihu", url: "#" },
      { name: "Our Story", url: "#" },
      { name: "Memories", url: "#" },
      { name: "Us", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
