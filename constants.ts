import { NavLink, UseCase, UseCaseCategory, Testimonial, FaqItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Accuracy', href: '#accuracy' },
  { label: 'Pricing', href: '#pricing' },
];

export const USE_CASES: UseCase[] = [
  {
    category: UseCaseCategory.PR_COMMS,
    title: "Craft Narratives",
    description: "Test different communication strategies to deliver the right reaction",
    color: "bg-purple-500"
  },
  {
    category: UseCaseCategory.PRODUCT,
    title: "Decide Features",
    description: "Test how your target customers react to product ideas and new features",
    color: "bg-teal-500"
  },
  {
    category: UseCaseCategory.BRANDING,
    title: "Stand Out",
    description: "Test how different brand and voice ideas resonate with your ideal buyer.",
    color: "bg-pink-500"
  },
  {
    category: UseCaseCategory.MARKETING,
    title: "Generate Leads",
    description: "Test marketing content in a simulation of your target customers",
    color: "bg-orange-500"
  },
  {
    category: UseCaseCategory.SOCIAL_MEDIA,
    title: "Make Content",
    description: "Test social content in simulations of your network and audience",
    color: "bg-blue-500"
  },
  {
    category: UseCaseCategory.JOURNALISM,
    title: "Capture Attention",
    description: "Test headlines, thumbnails, and article content to maximise reader attention",
    color: "bg-yellow-500"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Artificial Societies is now a part of our AI based thought leadership program for B2B founders.",
    author: "Ariel Cabiri",
    role: "CEO",
    company: "Perkzz"
  },
  {
    quote: "I use Artificial Societies every day! It helps me validate hypotheses before we spend budget.",
    author: "Liam Hanlon",
    role: "Head of Insights",
    company: "Jump"
  },
  {
    quote: "Is this a kind of magic? The accuracy on predicting engagement is startling.",
    author: "Guido Frigieri",
    role: "Innovator",
    company: "Tinexta"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is an Artificial Society?",
    answer: "An Artificial Society is a simulated collective of AI personas that mirror the behaviors, preferences, and interactions of a specific real-world audience."
  },
  {
    question: "How do credits work?",
    answer: "Credits are used to run simulations. One credit equals one simulated post or interaction set against your target society."
  },
  {
    question: "What kinds of experiments can I run?",
    answer: "You can test social media posts, product announcements, headlines, email subject lines, and general brand messaging."
  },
  {
    question: "What's the difference between target and personal societies?",
    answer: "A personal society mirrors your specific social network connections, while a target society represents a broader demographic you wish to reach."
  },
  {
    question: "How many personas are in a society?",
    answer: "A standard simulation typically involves between 50 to 500 distinct personas depending on the plan and complexity required."
  }
];
