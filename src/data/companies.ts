import { Company } from "@/lib/types";

export const companies: Company[] = [
  // Technology
  { id: "c001", name: "Apple", ticker: "AAPL", sector: "Technology", esgOverall: 72, eScore: 78, sScore: 65, gScore: 73, source: "CDP / Sustainability Report 2024", lastUpdated: "2024-12" },
  { id: "c002", name: "Microsoft", ticker: "MSFT", sector: "Technology", esgOverall: 81, eScore: 85, sScore: 76, gScore: 82, source: "MSCI / CSR Report", lastUpdated: "2024-12" },
  { id: "c003", name: "Alphabet", ticker: "GOOGL", sector: "Technology", esgOverall: 74, eScore: 80, sScore: 68, gScore: 74, source: "CDP / ESG Report", lastUpdated: "2024-12" },
  { id: "c004", name: "Meta Platforms", ticker: "META", sector: "Technology", esgOverall: 52, eScore: 60, sScore: 38, gScore: 58, source: "Sustainability Report", lastUpdated: "2024-09" },
  { id: "c005", name: "Amazon", ticker: "AMZN", sector: "Technology", esgOverall: 55, eScore: 62, sScore: 42, gScore: 61, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c006", name: "NVIDIA", ticker: "NVDA", sector: "Technology", esgOverall: 68, eScore: 72, sScore: 63, gScore: 69, source: "CSR Report", lastUpdated: "2024-06" },
  { id: "c007", name: "Salesforce", ticker: "CRM", sector: "Technology", esgOverall: 77, eScore: 82, sScore: 74, gScore: 75, source: "Stakeholder Impact Report", lastUpdated: "2024-10" },
  { id: "c008", name: "Adobe", ticker: "ADBE", sector: "Technology", esgOverall: 73, eScore: 76, sScore: 70, gScore: 73, source: "CSR Report", lastUpdated: "2024-06" },
  { id: "c009", name: "Intel", ticker: "INTC", sector: "Technology", esgOverall: 71, eScore: 75, sScore: 66, gScore: 72, source: "Corporate Responsibility Report", lastUpdated: "2024-08" },
  { id: "c010", name: "IBM", ticker: "IBM", sector: "Technology", esgOverall: 74, eScore: 78, sScore: 70, gScore: 74, source: "ESG Report", lastUpdated: "2024-07" },

  // Consumer / Retail
  { id: "c011", name: "Patagonia", ticker: "PRIVATE", sector: "Consumer", esgOverall: 92, eScore: 95, sScore: 90, gScore: 91, source: "B Corp / Annual Report", lastUpdated: "2024-12" },
  { id: "c012", name: "Nike", ticker: "NKE", sector: "Consumer", esgOverall: 63, eScore: 68, sScore: 55, gScore: 66, source: "Impact Report", lastUpdated: "2024-09" },
  { id: "c013", name: "Starbucks", ticker: "SBUX", sector: "Consumer", esgOverall: 67, eScore: 72, sScore: 60, gScore: 69, source: "Global Social Impact Report", lastUpdated: "2024-10" },
  { id: "c014", name: "Costco", ticker: "COST", sector: "Consumer", esgOverall: 65, eScore: 62, sScore: 68, gScore: 65, source: "Sustainability Report", lastUpdated: "2024-06" },
  { id: "c015", name: "Target", ticker: "TGT", sector: "Consumer", esgOverall: 61, eScore: 64, sScore: 58, gScore: 61, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c016", name: "Walmart", ticker: "WMT", sector: "Consumer", esgOverall: 56, eScore: 60, sScore: 48, gScore: 60, source: "ESG Report", lastUpdated: "2024-12" },
  { id: "c017", name: "Home Depot", ticker: "HD", sector: "Consumer", esgOverall: 62, eScore: 65, sScore: 58, gScore: 63, source: "Responsibility Report", lastUpdated: "2024-06" },
  { id: "c018", name: "IKEA", ticker: "PRIVATE", sector: "Consumer", esgOverall: 79, eScore: 84, sScore: 75, gScore: 78, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c019", name: "Lowe's", ticker: "LOW", sector: "Consumer", esgOverall: 59, eScore: 61, sScore: 56, gScore: 60, source: "Corporate Responsibility Report", lastUpdated: "2024-06" },
  { id: "c020", name: "Best Buy", ticker: "BBY", sector: "Consumer", esgOverall: 64, eScore: 68, sScore: 60, gScore: 64, source: "ESG Report", lastUpdated: "2024-06" },

  // Finance
  { id: "c021", name: "JPMorgan Chase", ticker: "JPM", sector: "Finance", esgOverall: 58, eScore: 55, sScore: 52, gScore: 67, source: "ESG Report", lastUpdated: "2024-12" },
  { id: "c022", name: "Bank of America", ticker: "BAC", sector: "Finance", esgOverall: 62, eScore: 65, sScore: 55, gScore: 66, source: "ESG Report", lastUpdated: "2024-12" },
  { id: "c023", name: "Goldman Sachs", ticker: "GS", sector: "Finance", esgOverall: 56, eScore: 52, sScore: 50, gScore: 66, source: "Sustainability Report", lastUpdated: "2024-10" },
  { id: "c024", name: "Visa", ticker: "V", sector: "Finance", esgOverall: 69, eScore: 72, sScore: 64, gScore: 71, source: "ESG Report", lastUpdated: "2024-09" },
  { id: "c025", name: "Mastercard", ticker: "MA", sector: "Finance", esgOverall: 71, eScore: 74, sScore: 66, gScore: 73, source: "ESG Report", lastUpdated: "2024-09" },
  { id: "c026", name: "PayPal", ticker: "PYPL", sector: "Finance", esgOverall: 66, eScore: 70, sScore: 60, gScore: 68, source: "Global Impact Report", lastUpdated: "2024-06" },
  { id: "c027", name: "American Express", ticker: "AXP", sector: "Finance", esgOverall: 63, eScore: 65, sScore: 58, gScore: 66, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c028", name: "Charles Schwab", ticker: "SCHW", sector: "Finance", esgOverall: 60, eScore: 58, sScore: 56, gScore: 66, source: "Corporate Responsibility Report", lastUpdated: "2024-06" },
  { id: "c029", name: "BlackRock", ticker: "BLK", sector: "Finance", esgOverall: 64, eScore: 68, sScore: 55, gScore: 69, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c030", name: "Stripe", ticker: "PRIVATE", sector: "Finance", esgOverall: 70, eScore: 75, sScore: 65, gScore: 70, source: "Climate Report", lastUpdated: "2024-06" },

  // Energy
  { id: "c031", name: "NextEra Energy", ticker: "NEE", sector: "Energy", esgOverall: 78, eScore: 85, sScore: 70, gScore: 79, source: "ESG Report", lastUpdated: "2024-12" },
  { id: "c032", name: "Enphase Energy", ticker: "ENPH", sector: "Energy", esgOverall: 76, eScore: 82, sScore: 68, gScore: 78, source: "Sustainability Report", lastUpdated: "2024-06" },
  { id: "c033", name: "First Solar", ticker: "FSLR", sector: "Energy", esgOverall: 74, eScore: 80, sScore: 66, gScore: 76, source: "Sustainability Report", lastUpdated: "2024-08" },
  { id: "c034", name: "ExxonMobil", ticker: "XOM", sector: "Energy", esgOverall: 32, eScore: 25, sScore: 35, gScore: 36, source: "Advancing Climate Solutions Report", lastUpdated: "2024-12" },
  { id: "c035", name: "Chevron", ticker: "CVX", sector: "Energy", esgOverall: 34, eScore: 28, sScore: 36, gScore: 38, source: "Corporate Sustainability Report", lastUpdated: "2024-10" },
  { id: "c036", name: "Shell", ticker: "SHEL", sector: "Energy", esgOverall: 38, eScore: 35, sScore: 38, gScore: 41, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c037", name: "BP", ticker: "BP", sector: "Energy", esgOverall: 36, eScore: 32, sScore: 37, gScore: 39, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c038", name: "Duke Energy", ticker: "DUK", sector: "Energy", esgOverall: 55, eScore: 52, sScore: 55, gScore: 58, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c039", name: "Vestas Wind", ticker: "VWS", sector: "Energy", esgOverall: 82, eScore: 88, sScore: 75, gScore: 83, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c040", name: "SolarEdge", ticker: "SEDG", sector: "Energy", esgOverall: 72, eScore: 78, sScore: 65, gScore: 73, source: "ESG Report", lastUpdated: "2024-06" },

  // Healthcare / Pharma
  { id: "c041", name: "Johnson & Johnson", ticker: "JNJ", sector: "Healthcare", esgOverall: 66, eScore: 68, sScore: 62, gScore: 68, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c042", name: "Pfizer", ticker: "PFE", sector: "Healthcare", esgOverall: 64, eScore: 66, sScore: 60, gScore: 66, source: "ESG Report", lastUpdated: "2024-10" },
  { id: "c043", name: "UnitedHealth", ticker: "UNH", sector: "Healthcare", esgOverall: 58, eScore: 55, sScore: 56, gScore: 63, source: "Sustainability Report", lastUpdated: "2024-06" },
  { id: "c044", name: "Abbott Labs", ticker: "ABT", sector: "Healthcare", esgOverall: 70, eScore: 72, sScore: 66, gScore: 72, source: "Global Sustainability Report", lastUpdated: "2024-08" },
  { id: "c045", name: "Moderna", ticker: "MRNA", sector: "Healthcare", esgOverall: 62, eScore: 64, sScore: 58, gScore: 64, source: "ESG Report", lastUpdated: "2024-06" },
  { id: "c046", name: "CVS Health", ticker: "CVS", sector: "Healthcare", esgOverall: 60, eScore: 58, sScore: 60, gScore: 62, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c047", name: "Walgreens", ticker: "WBA", sector: "Healthcare", esgOverall: 54, eScore: 52, sScore: 54, gScore: 56, source: "ESG Report", lastUpdated: "2024-06" },
  { id: "c048", name: "Novo Nordisk", ticker: "NVO", sector: "Healthcare", esgOverall: 76, eScore: 78, sScore: 74, gScore: 76, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c049", name: "Roche", ticker: "RHHBY", sector: "Healthcare", esgOverall: 73, eScore: 75, sScore: 70, gScore: 74, source: "Sustainability Report", lastUpdated: "2024-10" },
  { id: "c050", name: "Medtronic", ticker: "MDT", sector: "Healthcare", esgOverall: 69, eScore: 70, sScore: 66, gScore: 71, source: "Integrated Performance Report", lastUpdated: "2024-06" },

  // Automotive
  { id: "c051", name: "Tesla", ticker: "TSLA", sector: "Automotive", esgOverall: 58, eScore: 72, sScore: 38, gScore: 64, source: "Impact Report", lastUpdated: "2024-12" },
  { id: "c052", name: "Toyota", ticker: "TM", sector: "Automotive", esgOverall: 65, eScore: 68, sScore: 62, gScore: 65, source: "Sustainability Report", lastUpdated: "2024-10" },
  { id: "c053", name: "BMW", ticker: "BMWYY", sector: "Automotive", esgOverall: 72, eScore: 76, sScore: 68, gScore: 72, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c054", name: "Ford", ticker: "F", sector: "Automotive", esgOverall: 60, eScore: 62, sScore: 56, gScore: 62, source: "Sustainability Report", lastUpdated: "2024-08" },
  { id: "c055", name: "General Motors", ticker: "GM", sector: "Automotive", esgOverall: 62, eScore: 65, sScore: 58, gScore: 63, source: "Sustainability Report", lastUpdated: "2024-10" },
  { id: "c056", name: "Volkswagen", ticker: "VWAGY", sector: "Automotive", esgOverall: 56, eScore: 60, sScore: 48, gScore: 60, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c057", name: "Rivian", ticker: "RIVN", sector: "Automotive", esgOverall: 68, eScore: 75, sScore: 60, gScore: 69, source: "Sustainability Report", lastUpdated: "2024-06" },
  { id: "c058", name: "Hyundai", ticker: "HYMTF", sector: "Automotive", esgOverall: 63, eScore: 66, sScore: 58, gScore: 65, source: "Sustainability Report", lastUpdated: "2024-10" },

  // Food & Beverage
  { id: "c059", name: "Unilever", ticker: "UL", sector: "Food & Beverage", esgOverall: 80, eScore: 84, sScore: 76, gScore: 80, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c060", name: "Nestlé", ticker: "NSRGY", sector: "Food & Beverage", esgOverall: 68, eScore: 72, sScore: 62, gScore: 70, source: "Creating Shared Value Report", lastUpdated: "2024-12" },
  { id: "c061", name: "PepsiCo", ticker: "PEP", sector: "Food & Beverage", esgOverall: 66, eScore: 70, sScore: 60, gScore: 68, source: "ESG Report", lastUpdated: "2024-10" },
  { id: "c062", name: "Coca-Cola", ticker: "KO", sector: "Food & Beverage", esgOverall: 62, eScore: 65, sScore: 58, gScore: 63, source: "Business & Sustainability Report", lastUpdated: "2024-12" },
  { id: "c063", name: "Danone", ticker: "DANOY", sector: "Food & Beverage", esgOverall: 78, eScore: 82, sScore: 74, gScore: 78, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c064", name: "Beyond Meat", ticker: "BYND", sector: "Food & Beverage", esgOverall: 71, eScore: 78, sScore: 62, gScore: 73, source: "Impact Report", lastUpdated: "2024-06" },
  { id: "c065", name: "Chipotle", ticker: "CMG", sector: "Food & Beverage", esgOverall: 64, eScore: 68, sScore: 58, gScore: 66, source: "Sustainability Report", lastUpdated: "2024-08" },
  { id: "c066", name: "McDonald's", ticker: "MCD", sector: "Food & Beverage", esgOverall: 55, eScore: 58, sScore: 50, gScore: 57, source: "ESG Report", lastUpdated: "2024-10" },
  { id: "c067", name: "Whole Foods (Amazon)", ticker: "AMZN", sector: "Food & Beverage", esgOverall: 70, eScore: 74, sScore: 65, gScore: 71, source: "Sourcing Standards Report", lastUpdated: "2024-06" },
  { id: "c068", name: "Trader Joe's", ticker: "PRIVATE", sector: "Food & Beverage", esgOverall: 66, eScore: 68, sScore: 64, gScore: 66, source: "Industry Estimates", lastUpdated: "2024-06" },

  // Apparel / Fashion
  { id: "c069", name: "Levi Strauss", ticker: "LEVI", sector: "Apparel", esgOverall: 72, eScore: 76, sScore: 68, gScore: 72, source: "Sustainability Report", lastUpdated: "2024-08" },
  { id: "c070", name: "Adidas", ticker: "ADDYY", sector: "Apparel", esgOverall: 70, eScore: 74, sScore: 65, gScore: 71, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c071", name: "H&M", ticker: "HNNMY", sector: "Apparel", esgOverall: 65, eScore: 70, sScore: 58, gScore: 67, source: "Sustainability Disclosure", lastUpdated: "2024-12" },
  { id: "c072", name: "Zara (Inditex)", ticker: "IDEXY", sector: "Apparel", esgOverall: 60, eScore: 64, sScore: 52, gScore: 64, source: "Annual Report", lastUpdated: "2024-12" },
  { id: "c073", name: "Allbirds", ticker: "BIRD", sector: "Apparel", esgOverall: 82, eScore: 88, sScore: 76, gScore: 82, source: "Sustainability Report", lastUpdated: "2024-06" },
  { id: "c074", name: "SHEIN", ticker: "PRIVATE", sector: "Apparel", esgOverall: 22, eScore: 18, sScore: 20, gScore: 28, source: "Industry Analysis", lastUpdated: "2024-06" },
  { id: "c075", name: "Gap Inc", ticker: "GAP", sector: "Apparel", esgOverall: 58, eScore: 62, sScore: 52, gScore: 60, source: "ESG Report", lastUpdated: "2024-08" },

  // Airlines / Travel
  { id: "c076", name: "Delta Airlines", ticker: "DAL", sector: "Airlines", esgOverall: 48, eScore: 42, sScore: 52, gScore: 50, source: "ESG Report", lastUpdated: "2024-10" },
  { id: "c077", name: "United Airlines", ticker: "UAL", sector: "Airlines", esgOverall: 50, eScore: 45, sScore: 52, gScore: 53, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c078", name: "Southwest Airlines", ticker: "LUV", sector: "Airlines", esgOverall: 52, eScore: 46, sScore: 56, gScore: 54, source: "One Report", lastUpdated: "2024-06" },
  { id: "c079", name: "Airbnb", ticker: "ABNB", sector: "Travel", esgOverall: 64, eScore: 66, sScore: 60, gScore: 66, source: "Stakeholder Report", lastUpdated: "2024-06" },
  { id: "c080", name: "Booking Holdings", ticker: "BKNG", sector: "Travel", esgOverall: 60, eScore: 62, sScore: 56, gScore: 62, source: "Sustainability Report", lastUpdated: "2024-08" },

  // Telecom
  { id: "c081", name: "AT&T", ticker: "T", sector: "Telecom", esgOverall: 56, eScore: 58, sScore: 52, gScore: 58, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c082", name: "Verizon", ticker: "VZ", sector: "Telecom", esgOverall: 60, eScore: 63, sScore: 55, gScore: 62, source: "ESG Report", lastUpdated: "2024-10" },
  { id: "c083", name: "T-Mobile", ticker: "TMUS", sector: "Telecom", esgOverall: 62, eScore: 65, sScore: 58, gScore: 63, source: "Corporate Responsibility Report", lastUpdated: "2024-08" },
  { id: "c084", name: "Comcast", ticker: "CMCSA", sector: "Telecom", esgOverall: 54, eScore: 56, sScore: 50, gScore: 56, source: "Impact Report", lastUpdated: "2024-06" },

  // Entertainment / Media
  { id: "c085", name: "Disney", ticker: "DIS", sector: "Entertainment", esgOverall: 64, eScore: 68, sScore: 58, gScore: 66, source: "CSR Report", lastUpdated: "2024-12" },
  { id: "c086", name: "Netflix", ticker: "NFLX", sector: "Entertainment", esgOverall: 60, eScore: 65, sScore: 54, gScore: 61, source: "ESG Report", lastUpdated: "2024-06" },
  { id: "c087", name: "Spotify", ticker: "SPOT", sector: "Entertainment", esgOverall: 63, eScore: 66, sScore: 58, gScore: 65, source: "Equity & Impact Report", lastUpdated: "2024-08" },
  { id: "c088", name: "Sony", ticker: "SONY", sector: "Entertainment", esgOverall: 70, eScore: 74, sScore: 65, gScore: 71, source: "Sustainability Report", lastUpdated: "2024-10" },

  // Real Estate / Construction
  { id: "c089", name: "Prologis", ticker: "PLD", sector: "Real Estate", esgOverall: 75, eScore: 80, sScore: 68, gScore: 77, source: "ESG Report", lastUpdated: "2024-12" },
  { id: "c090", name: "Simon Property", ticker: "SPG", sector: "Real Estate", esgOverall: 58, eScore: 60, sScore: 54, gScore: 60, source: "Sustainability Report", lastUpdated: "2024-06" },

  // Industrial / Manufacturing
  { id: "c091", name: "Siemens", ticker: "SIEGY", sector: "Industrial", esgOverall: 76, eScore: 80, sScore: 72, gScore: 76, source: "Sustainability Report", lastUpdated: "2024-12" },
  { id: "c092", name: "3M", ticker: "MMM", sector: "Industrial", esgOverall: 48, eScore: 42, sScore: 48, gScore: 54, source: "Sustainability Report", lastUpdated: "2024-08" },
  { id: "c093", name: "Caterpillar", ticker: "CAT", sector: "Industrial", esgOverall: 55, eScore: 52, sScore: 55, gScore: 58, source: "Sustainability Report", lastUpdated: "2024-06" },
  { id: "c094", name: "Honeywell", ticker: "HON", sector: "Industrial", esgOverall: 68, eScore: 72, sScore: 62, gScore: 70, source: "ESG Report", lastUpdated: "2024-08" },

  // Misc / Other
  { id: "c095", name: "Uber", ticker: "UBER", sector: "Transport", esgOverall: 50, eScore: 52, sScore: 44, gScore: 54, source: "ESG Report", lastUpdated: "2024-08" },
  { id: "c096", name: "Lyft", ticker: "LYFT", sector: "Transport", esgOverall: 56, eScore: 60, sScore: 50, gScore: 58, source: "ESG Report", lastUpdated: "2024-06" },
  { id: "c097", name: "DoorDash", ticker: "DASH", sector: "Transport", esgOverall: 46, eScore: 48, sScore: 40, gScore: 50, source: "Impact Report", lastUpdated: "2024-06" },
  { id: "c098", name: "Procter & Gamble", ticker: "PG", sector: "Consumer", esgOverall: 72, eScore: 76, sScore: 66, gScore: 74, source: "Citizenship Report", lastUpdated: "2024-12" },
  { id: "c099", name: "The Body Shop", ticker: "PRIVATE", sector: "Consumer", esgOverall: 78, eScore: 82, sScore: 76, gScore: 76, source: "B Corp / Sustainability Report", lastUpdated: "2024-06" },
  { id: "c100", name: "Seventh Generation", ticker: "PRIVATE", sector: "Consumer", esgOverall: 85, eScore: 90, sScore: 80, gScore: 85, source: "B Corp Report", lastUpdated: "2024-06" },
];

export const sectorBenchmarks: Record<string, number> = {
  Technology: 68,
  Consumer: 65,
  Finance: 62,
  Energy: 55,
  Healthcare: 64,
  Automotive: 62,
  "Food & Beverage": 65,
  Apparel: 60,
  Airlines: 48,
  Travel: 60,
  Telecom: 58,
  Entertainment: 62,
  "Real Estate": 60,
  Industrial: 60,
  Transport: 50,
};
