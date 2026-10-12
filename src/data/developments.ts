export type DevelopmentProject = {
  id: string;
  name: string;
  location: string;
  type: string;
  stage: string;
  year: string;
  description: string;
  designFocus: string;
  image: string;
  imageAlt: string;
};

export const developments: DevelopmentProject[] = [
  {
    id: "the-courtyard-collection",
    name: "The Courtyard Collection",
    location: "Lagos, Nigeria",
    type: "Residential",
    stage: "Design concept",
    year: "Concept study",
    description:
      "A residential concept organised around natural light, shared outdoor space, and a quieter relationship between indoors and out.",
    designFocus:
      "Climate-conscious planning, privacy, natural ventilation, and the use of outdoor space as part of everyday living.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    imageAlt:
      "Contemporary home with clean architectural lines and warm natural materials",
  },
  {
    id: "urban-form",
    name: "Urban Form",
    location: "Lagos, Nigeria",
    type: "Mixed-use",
    stage: "Feasibility concept",
    year: "Concept study",
    description:
      "An urban development study exploring how residential and commercial spaces might work together within a compact city setting.",
    designFocus:
      "Efficient circulation, street-level activity, practical layouts, and the relationship between buildings and their neighbourhood.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    imageAlt:
      "Contemporary urban architecture with repeating lines and a modern building facade",
  },
  {
    id: "the-garden-residences",
    name: "The Garden Residences",
    location: "Lagos, Nigeria",
    type: "Residential",
    stage: "Early-stage concept",
    year: "Concept study",
    description:
      "A housing concept that gives landscape and greenery a more deliberate role in the residential experience.",
    designFocus:
      "Landscape integration, shade, natural light, and a balanced relationship between private and shared spaces.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    imageAlt:
      "Modern residence surrounded by greenery with carefully considered outdoor space",
  },
];
