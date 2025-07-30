export const API_URL = 'https://api.example.com/listings';

export const DEFAULT_IMAGE = '/assets/placeholder.jpg';

import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/Image 1.png",
    images: [
      "/assets/Image 1.png",
      "/assets/image 3.png",
      "/assets/image 4.png",
      "/assets/image 6.png",
      "/assets/image 7.png"
    ],
    description: "Experience luxury living in this stunning oceanfront villa with breathtaking views of the Indian Ocean. This beautifully designed property features modern amenities, private pool, and direct beach access. Perfect for families or groups looking for an unforgettable tropical getaway.",
    amenities: [
      "Ocean View",
      "Private Pool", 
      "Beach Access",
      "Free Wi-Fi",
      "Air Conditioning",
      "Full Kitchen",
      "Parking",
      "Hot Tub",
      "Garden",
      "Security"
    ],
    reviews: [
      {
        id: "1",
        author: "Sarah Mitchell",
        rating: 5,
        comment: "Absolutely stunning property! The ocean views were incredible and the villa had everything we needed. The staff was very helpful and responsive.",
        date: "2024-07-15"
      },
      {
        id: "2", 
        author: "James Wilson",
        rating: 5,
        comment: "Perfect location with amazing sunset views. The pool area was fantastic and the villa was spotlessly clean. Highly recommend!",
        date: "2024-07-10"
      }
    ],
    discount: "Book 7+ nights and save 15%"
  },
  {
    name: "Mountain Retreat",
    address: { state: "Colorado", city: "Aspen", country: "USA" },
    rating: 4.75,
    category: ["Chalet", "Ski-in/Ski-out", "Hot Tub"],
    price: 4500,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "/assets/image 3.png",
    images: [
      "/assets/image 3.png",
      "/assets/image 4.png", 
      "/assets/image 6.png",
      "/assets/image 7.png",
      "/assets/Image 1.png"
    ],
    description: "Escape to this luxurious mountain chalet nestled in the heart of Aspen. With ski-in/ski-out access and panoramic mountain views, this retreat offers the perfect blend of adventure and relaxation. Features include a cozy fireplace, modern kitchen, and private hot tub.",
    amenities: [
      "Ski-in/Ski-out",
      "Mountain Views",
      "Hot Tub",
      "Fireplace", 
      "Full Kitchen",
      "Free Wi-Fi",
      "Parking",
      "Heating",
      "Balcony",
      "Game Room"
    ],
    reviews: [
      {
        id: "3",
        author: "Michael Chen",
        rating: 5,
        comment: "Amazing ski chalet! The location couldn't be better and the views are spectacular. The hot tub after a day on the slopes was perfect.",
        date: "2024-07-08"
      },
      {
        id: "4",
        author: "Lisa Rodriguez", 
        rating: 4,
        comment: "Beautiful property with great amenities. Only minor issue was the WiFi could be stronger, but overall excellent stay.",
        date: "2024-07-05"
      }
    ],
    discount: "15% off for 7+ nights"
  },
  {
    name: "City Center Apartment",
    address: { state: "New York", city: "Manhattan", country: "USA" },
    rating: 4.50,
    category: ["Apartment", "Downtown", "Free Wi-Fi"],
    price: 2500,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    image: "/assets/image 4.png",
    images: [
      "/assets/image 4.png",
      "/assets/image 6.png",
      "/assets/image 7.png",
      "/assets/Image 1.png",
      "/assets/image 3.png"
    ],
    description: "Modern apartment in the heart of Manhattan with easy access to Times Square, Central Park, and major attractions. This stylish unit features contemporary furnishings, full kitchen, and stunning city views. Perfect for business travelers or tourists.",
    amenities: [
      "City Views",
      "Free Wi-Fi",
      "Air Conditioning",
      "Full Kitchen",
      "Elevator Access",
      "24/7 Security",
      "Gym Access",
      "Laundry",
      "Near Subway",
      "Rooftop Terrace"
    ],
    reviews: [
      {
        id: "5",
        author: "David Thompson",
        rating: 4,
        comment: "Great location in the heart of the city. Easy access to everything you need. The apartment was clean and well-equipped.",
        date: "2024-07-12"
      },
      {
        id: "6",
        author: "Emily Parker",
        rating: 5,
        comment: "Perfect for our NYC trip! Walking distance to so many attractions. The host was very responsive and helpful.",
        date: "2024-07-03"
      }
    ],
    discount: ""
  }
];

// Add more constants as needed
