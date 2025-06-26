export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type PricingPlan = {
  title: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Step = {
  number: number;
  title: string;
  description: string;
};