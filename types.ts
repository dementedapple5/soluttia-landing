import { ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export interface Review {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}