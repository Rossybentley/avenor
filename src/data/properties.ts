export type Property = {
  id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  bedrooms: number;
  status: string;
};

export const properties: Property[] = [
  {
    id: "courtyard-house",
    name: "The Courtyard House",
    location: "Ikoyi, Lagos",
    category: "Private residence",
    description:
      "A quieter kind of city living, shaped around natural light, open space and a sheltered courtyard.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    imageAlt:
      "Contemporary residence with warm materials and an open architectural layout",
    bedrooms: 4,
    status: "Concept property",
  },
  {
    id: "garden-residence",
    name: "Garden Residence",
    location: "Lekki Phase 1, Lagos",
    category: "Residential development",
    description:
      "A contemporary home with room to slow down, entertain and enjoy a little more greenery.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern residential architecture with a landscaped outdoor area",
    bedrooms: 3,
    status: "Concept property",
  },
  {
    id: "terrace-no-04",
    name: "Terrace No. 04",
    location: "Oniru, Lagos",
    category: "Townhouse",
    description:
      "An efficient urban home where considered proportions do more than unnecessary ornament.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Modern townhouse architecture with clean lines and natural finishes",
    bedrooms: 3,
    status: "Concept property",
  },
];
