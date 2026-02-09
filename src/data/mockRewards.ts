import { Reward } from "@/lib/types";

export const mockRewards: Reward[] = [
  { id: "r001", name: "Plant a Tree", description: "We'll plant a tree in a national reforestation project on your behalf.", pointsCost: 500, category: "Carbon Offset", active: true },
  { id: "r002", name: "10% Off Patagonia", description: "Get 10% off your next Patagonia purchase.", pointsCost: 1500, category: "Partner Discount", active: true },
  { id: "r003", name: "Carbon Offset — 1 Ton", description: "Offset 1 metric ton of CO2 through verified carbon credits.", pointsCost: 3000, category: "Carbon Offset", active: true },
  { id: "r004", name: "Eco Badge — Bronze", description: "Unlock the Bronze Eco badge on your profile.", pointsCost: 250, category: "Badge", active: true },
  { id: "r005", name: "Eco Badge — Silver", description: "Unlock the Silver Eco badge on your profile.", pointsCost: 1000, category: "Badge", active: true },
  { id: "r006", name: "Eco Badge — Gold", description: "Unlock the Gold Eco badge on your profile.", pointsCost: 5000, category: "Badge", active: true },
  { id: "r007", name: "$5 Starbucks Card", description: "Redeem a $5 Starbucks gift card.", pointsCost: 2000, category: "Gift Card", active: true },
  { id: "r008", name: "Donate to Ocean Conservancy", description: "Donate $10 to Ocean Conservancy.", pointsCost: 2500, category: "Donation", active: true },
  { id: "r009", name: "15% Off Allbirds", description: "Get 15% off your next Allbirds order.", pointsCost: 1800, category: "Partner Discount", active: true },
  { id: "r010", name: "Eco Badge — Platinum", description: "Unlock the Platinum Eco badge — top tier!", pointsCost: 10000, category: "Badge", active: true },
];
