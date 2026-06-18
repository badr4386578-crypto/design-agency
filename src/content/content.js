// src/content/content.js

import Img from "../assets/image.png"
import placeholder from "../assets/placeholder.png"

export const siteConfig = {
  companyName: "Nova Studio",
  tagline: "Creative Design Agency",
  description:
    "We craft premium digital experiences, brand identities, and high-converting websites for modern businesses.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  badge: "Award-Winning Design Team",
  title: "We Design Brands That Look Modern, Feel Premium, and Convert Better.",
  highlightedText: "convert better",
  description:
    "From brand identity to web experiences, we build clean, memorable, and strategy-driven design that helps businesses stand out.",
  primaryButton: "Start Your Project",
  secondaryButton: "View Our Work",
};

export const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "45+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export const services = [
  {
    title: "Brand Identity",
    description:
      "Logo systems, visual direction, typography, colors, and brand guidelines built to feel consistent and premium.",
    icon: "pen-tool",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly interfaces designed to guide attention and improve conversion.",
    icon: "layout-grid",
  },
  {
    title: "Web Design",
    description:
      "Modern landing pages and websites built to look sharp across all devices.",
    icon: "monitor-smartphone",
  },
  {
    title: "Motion Design",
    description:
      "Smooth animations and micro-interactions that make the experience feel alive.",
    icon: "sparkles",
  },
  {
    title: "Social Media Design",
    description:
      "Engaging post templates, ad creatives, and campaign visuals that match your brand.",
    icon: "share-2",
  },
  {
    title: "Design Systems",
    description:
      "Reusable components and visual rules that keep your product scalable and consistent.",
    icon: "layers-3",
  },
];

export const whyUs = {
  title: "Why Clients Choose Us",
  description:
    "We combine strategy, aesthetics, and performance to deliver designs that are not just beautiful, but useful.",
  features: [
    {
      title: "Fast Delivery",
      description:
        "We move quickly without sacrificing quality.",
    },
    {
      title: "Premium Quality",
      description:
        "Every detail is crafted with care.",
    },
    {
      title: "Creative Thinking",
      description:
        "We build unique concepts that feel fresh.",
    },
    {
      title: "Clear Communication",
      description:
        "Simple process, honest updates, no confusion.",
    },
  ],
};

export const portfolioProjects = [
  {
    title: "Aster Finance",
    category: "Fintech Website",
    description:
      "A clean, high-trust landing page for a modern finance brand.",
    image: placeholder,
    link: "#",
  },
  {
    title: "Luma Skincare",
    category: "Beauty Brand",
    description:
      "Elegant brand visuals with a soft premium aesthetic.",
    image: placeholder,
    link: "#",
  },
  {
    title: "Pulse Health",
    category: "Healthcare Platform",
    description:
      "A calm and accessible design system for a health product.",
    image: placeholder,
    link: "#",
  },
  {
    title: "Studio Nine",
    category: "Agency Website",
    description:
      "Bold layouts and motion-driven interactions for a creative studio.",
    image: placeholder,
    link: "#",
  },
  {
    title: "NorthPeak",
    category: "SaaS Dashboard",
    description:
      "Modern UI with strong hierarchy and intuitive workflows.",
    image: placeholder,
    link: "#",
  },
  {
    title: "Urban Thread",
    category: "Fashion Brand",
    description:
      "Minimal and stylish visual direction for a fashion launch.",
    image: placeholder,
    link: "#",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    description:
      "Perfect for startups and personal brands.",
    features: [
      "Landing Page Design",
      "Responsive Layout",
      "Basic Animations",
      "2 Revisions",
      "1 Week Delivery",
    ],
    popular: false,
  },

  {
    name: "Professional",
    price: "$999",
    description:
      "Ideal for growing businesses.",
    features: [
      "Multi-Page Website",
      "Premium UI/UX",
      "Advanced Animations",
      "Unlimited Revisions",
      "Priority Support",
      "Design System",
    ],
    popular: true,
  },

  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For large companies and custom requirements.",
    features: [
      "Custom Design Solution",
      "Brand Strategy",
      "Dedicated Team",
      "Full Design System",
      "Ongoing Support",
      "Custom Integrations",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Maya Hassan",
    role: "Founder, Luma Skincare",
    message:
      "They turned our brand into something that finally feels premium and trustworthy.",
    avatar: "/placeholder.png",
  },
  {
    name: "Omar Adel",
    role: "CEO, NorthPeak",
    message:
      "The landing page improved our product story and made the whole experience feel clearer.",
    avatar: "/placeholder.png",
  },
  {
    name: "Sara Nabil",
    role: "Marketing Lead, Aster Finance",
    message:
      "Fast, creative, and very organized. The final design exceeded our expectations.",
    avatar: "/placeholder.png",
  },
];

export const team = [
  {
    name: "Ahmed Khaled",
    role: "Creative Director",
    image: placeholder,
  },
  {
    name: "Nour Samir",
    role: "UI/UX Designer",
    image: placeholder,
  },
  {
    name: "Youssef Emad",
    role: "Motion Designer",
    image: placeholder,
  },
  {
    name: "Dina Fathy",
    role: "Brand Strategist",
    image: placeholder,
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer brand identity, UI/UX design, web design, motion design, and design systems for digital products and businesses.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the scope, but most landing page projects take between 1 and 3 weeks from concept to delivery.",
  },
  {
    question: "Do you also handle development?",
    answer:
      "This version is focused on design, but we can provide dev-ready layouts and handoff files for easy implementation.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. We include revision rounds so the final result matches your goals and brand style.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We work with startups, agencies, and growing businesses that want a stronger digital presence.",
  },
];

export const ctaContent = {
  title: "Ready To Build Something Great?",
  description:
    "Let’s create a landing page and brand experience that feels modern, clean, and memorable.",
  primaryButton: "Book a Call",
  secondaryButton: "See Pricing",
};

export const contactContent = {
  title: "Get In Touch",
  description:
    "Tell us about your project and we’ll get back to you with the next steps.",
  fields: {
    name: "Your Name",
    email: "Email Address",
    company: "Company Name",
    message: "Tell us about your project",
  },
  submitButton: "Send Message",
};

export const footerContent = {
  text: "Designing modern digital brands and websites for ambitious businesses.",
  copyright: "© 2026 Nova Studio. All rights reserved.",
  socialLinks: [
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const buttonLabels = {
  primary: "Start Your Project",
  secondary: "View Our Work",
  menuOpen: "Open Menu",
  menuClose: "Close Menu",
};

export const sliderSettings = {
  autoplayDelay: 5000,
};

export const themeLabels = {
  light: "Light Mode",
  dark: "Dark Mode",
};