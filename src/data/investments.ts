export type InvestmentOpportunity = {
  id: string;
  name: string;
  location: string;
  category: string;
  stage: string;
  overview: string;
  investmentThesis: string;
  image: string;
  imageAlt: string;
  status: string;
};

export const investments: InvestmentOpportunity[] = [
  {
    id: "urban-residential",
    name: "Urban Residential",
    location: "Lagos, Nigeria",
    category: "Residential",
    stage: "Concept development",
    overview:
      "A proposed residential concept focused on practical urban living, thoughtful layouts, and access to established neighbourhood amenities.",
    investmentThesis:
      "Explore how location, target demand, development costs, and delivery risk would shape the viability of a residential project.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    imageAlt:
      "Contemporary residential architecture with a landscaped outdoor setting",
    status: "Illustrative concept",
  },
  {
    id: "mixed-use-neighbourhood",
    name: "Mixed-Use Neighbourhood",
    location: "Lagos, Nigeria",
    category: "Mixed-use",
    stage: "Feasibility concept",
    overview:
      "A proposed neighbourhood development combining residential space with carefully planned commercial uses.",
    investmentThesis:
      "Assess the relationship between tenant demand, the mix of uses, construction costs, and long-term operating requirements.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    imageAlt:
      "Modern urban buildings illustrating a mixed-use development concept",
    status: "Illustrative concept",
  },
  {
    id: "residential-redevelopment",
    name: "Residential Renewal",
    location: "Lagos, Nigeria",
    category: "Redevelopment",
    stage: "Early-stage concept",
    overview:
      "A proposed approach to improving an existing residential asset through considered design and more effective use of space.",
    investmentThesis:
      "Evaluate acquisition assumptions, renovation scope, planning requirements, and the risks that can affect redevelopment feasibility.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    imageAlt:
      "Contemporary home design illustrating a potential residential renewal concept",
    status: "Illustrative concept",
  },
];
