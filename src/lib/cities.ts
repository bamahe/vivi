// ============================================
// City-level data for /areas/[slug] pages
// Each city gets unique PM-focused content
// targeting "property management in [City] FL"
// ============================================

export interface CityData {
  slug: string;
  name: string;
  county: string;
  state: string;
  zip: string; // primary zip for schema
  lat: number;
  lng: number;
  population: string;
  medianRent: string;
  medianHome: string;
  headline: string;
  intro: string; // 2-3 sentences — what makes this city unique for PM
  whyManage: string; // why hire a PM here specifically
  rentalMarket: string; // rental market conditions
  neighborhoods: string[]; // key neighborhoods/subdivisions
  nearbyAttractions: string; // lifestyle/amenities paragraph
  faqs: { q: string; a: string }[];
}

export const CITIES: CityData[] = [
  // ============================================
  // HILLSBOROUGH COUNTY
  // ============================================
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    state: "FL",
    zip: "33602",
    lat: 27.9506,
    lng: -82.4572,
    population: "400,000+",
    medianRent: "$2,100",
    medianHome: "$420,000",
    headline: "Property Management in Tampa, FL",
    intro:
      "Tampa is the economic engine of the Tampa Bay metro — a city with strong job growth, major employers, and consistent rental demand across every price point. From downtown high-rises to suburban single-family homes, Tampa offers property owners a diverse market with year-round tenant demand.",
    whyManage:
      "Tampa's rental market moves fast. Properties in South Tampa, Seminole Heights, and Westshore command premium rents but come with higher tenant expectations. A professional property manager ensures your Tampa rental is priced right, marketed aggressively, and maintained to the standard tenants expect. With ViVi's in-house maintenance team, repairs are handled faster and cheaper than outsourcing to Tampa's competitive contractor market.",
    rentalMarket:
      "Tampa rental demand stays strong year-round thanks to major employers like USF, Tampa General Hospital, MacDill Air Force Base, and the growing tech corridor along the Westshore district. Single-family rentals in neighborhoods like New Tampa, Carrollwood, and Town 'N' Country lease quickly, often within two weeks of listing.",
    neighborhoods: [
      "South Tampa", "Seminole Heights", "New Tampa", "Westshore",
      "Carrollwood", "Town 'N' Country", "Channelside", "Ybor City",
      "Palma Ceia", "Hyde Park", "Davis Islands", "Westchase",
    ],
    nearbyAttractions:
      "Downtown Tampa offers Riverwalk, Amalie Arena, Raymond James Stadium, and the Tampa Convention Center. Busch Gardens, the Florida Aquarium, and the Tampa Museum of Art draw visitors year-round. MacDill Air Force Base is a major economic driver on the southern tip of the peninsula.",
    faqs: [
      {
        q: "How much does property management cost in Tampa?",
        a: "ViVi charges 8-12% of monthly rent collected for full-service management in Tampa. No hidden fees, no vacancy charges, no maintenance markups. The rate depends on property type and location within Tampa.",
      },
      {
        q: "What neighborhoods in Tampa have the best rental returns?",
        a: "New Tampa, Carrollwood, and Town 'N' Country offer strong cash flow with moderate price points. South Tampa and Hyde Park command premium rents but at higher acquisition costs. Seminole Heights is a growing market with increasing demand from young professionals.",
      },
      {
        q: "How quickly do Tampa rentals lease?",
        a: "Most ViVi-managed Tampa properties lease within 14 days. We use professional photography, 3D tours, MLS syndication to 15,000+ agents, and distribution across Zillow, Trulia, and 200+ rental sites.",
      },
    ],
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    state: "FL",
    zip: "33511",
    lat: 27.9378,
    lng: -82.2859,
    population: "115,000+",
    medianRent: "$1,950",
    medianHome: "$370,000",
    headline: "Property Management in Brandon, FL",
    intro:
      "Brandon is one of the most popular rental markets in east Hillsborough County. With easy access to I-75, the Selmon Expressway, and major retail at Westfield Brandon Mall, tenants love the convenience. Property owners love the steady demand and strong rental rates.",
    whyManage:
      "Brandon's rental market is competitive — properties that sit vacant lose money fast. ViVi PM gets your Brandon rental listed on MLS and 200+ sites within 48 hours of being market-ready. Our in-house maintenance through Best Bay Services means faster response times for your Brandon tenants and lower repair costs for you.",
    rentalMarket:
      "Brandon attracts a diverse tenant pool: families drawn to Hillsborough County schools, professionals commuting to downtown Tampa, and military families from nearby MacDill AFB. Single-family homes with 3+ bedrooms are the highest-demand rental type in Brandon.",
    neighborhoods: [
      "Bloomingdale", "Heather Lakes", "Provence", "Lake Heather",
      "Regency Park", "Brandon Groves", "Oakfield", "Country Village",
    ],
    nearbyAttractions:
      "Westfield Brandon Mall, TopGolf, and dozens of restaurants line the SR-60 corridor. Brandon is minutes from downtown Tampa via the Selmon Expressway and close to major medical centers at Brandon Regional Hospital.",
    faqs: [
      {
        q: "How much does property management cost in Brandon, FL?",
        a: "ViVi charges 8-12% of monthly rent collected for Brandon properties. Everything is included — tenant screening, maintenance, rent collection, inspections, and financial reporting. No vacancy fees.",
      },
      {
        q: "What should my Brandon rental rent for?",
        a: "Brandon single-family homes typically rent for $1,700-$2,400/month depending on size, condition, and neighborhood. We run a free competitive market analysis to price your property right.",
      },
      {
        q: "Do you manage properties in Bloomingdale?",
        a: "Yes. Bloomingdale is one of our core neighborhoods. The community's strong HOA, golf course, and top-rated schools make it one of the most desirable rental areas in Brandon.",
      },
    ],
  },
  {
    slug: "valrico",
    name: "Valrico",
    county: "Hillsborough County",
    state: "FL",
    zip: "33594",
    lat: 27.9381,
    lng: -82.2362,
    population: "40,000+",
    medianRent: "$2,100",
    medianHome: "$400,000",
    headline: "Property Management in Valrico, FL",
    intro:
      "Valrico is a sought-after suburb east of Tampa known for top-rated schools, established neighborhoods, and a family-friendly atmosphere. Rental properties in Valrico attract long-term tenants — families who want space, good schools, and a safe community without downtown Tampa prices.",
    whyManage:
      "Valrico homeowners often become accidental landlords when they relocate. Managing a Valrico rental from out of state means handling tenant calls, coordinating repairs, and navigating Florida landlord-tenant law remotely. ViVi PM handles all of it — and we live right here in Valrico. We know these neighborhoods because we walk them every day.",
    rentalMarket:
      "Valrico rentals command strong rents thanks to the area's reputation for excellent schools — particularly Bloomingdale High, Newsome High, and Randall Middle. Families relocating to Tampa Bay specifically target Valrico for school zoning, which means consistent demand and lower turnover.",
    neighborhoods: [
      "River Hills", "Bloomingdale", "Buckhorn", "Diamond Hill",
      "Lake St. Charles", "Bell Shoals", "Country Meadows",
    ],
    nearbyAttractions:
      "Alafia River State Park, Lithia Springs, and Medard Park offer outdoor recreation. Valrico is centrally located with easy access to Brandon shopping, downtown Tampa, and I-75 for Lakeland commuters.",
    faqs: [
      {
        q: "How much does property management cost in Valrico?",
        a: "ViVi charges 8-12% of monthly rent collected for Valrico properties. Our team lives locally — we manage homes in the same neighborhoods we live in.",
      },
      {
        q: "What are the best Valrico neighborhoods for rental properties?",
        a: "Bloomingdale, River Hills, and Buckhorn are top choices. Bloomingdale offers golf and community amenities. River Hills is a gated golf community. Buckhorn attracts families with newer construction and Newsome High School zoning.",
      },
      {
        q: "Do Valrico rentals attract long-term tenants?",
        a: "Yes. Valrico tenants are predominantly families who stay 2-3+ years because of the schools. Lower turnover means fewer vacancy periods and less wear on your property.",
      },
    ],
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    state: "FL",
    zip: "33578",
    lat: 27.8764,
    lng: -82.3265,
    population: "95,000+",
    medianRent: "$2,000",
    medianHome: "$380,000",
    headline: "Property Management in Riverview, FL",
    intro:
      "Riverview is one of the fastest-growing communities in Hillsborough County. New construction, master-planned communities, and proximity to I-75 make it a magnet for renters relocating to Tampa Bay. Property owners benefit from strong demand and newer housing stock that requires less maintenance.",
    whyManage:
      "Riverview's rapid growth means the rental market is competitive. Properties need to be priced right and marketed fast to capture the best tenants. ViVi PM's aggressive marketing strategy — professional photography, 3D tours, and MLS syndication — ensures your Riverview rental doesn't sit vacant while the house next door fills up.",
    rentalMarket:
      "Riverview's tenant pool skews younger and more mobile — professionals and families who are renting while they explore the Tampa Bay market. This means higher turnover than Valrico, but also strong demand and the ability to reset rents at market rate more frequently.",
    neighborhoods: [
      "FishHawk Ranch", "Panther Trace", "Rivercrest", "Summerfield",
      "Alafia", "Pavilion", "Boyette Springs", "Krewe of Riverview",
    ],
    nearbyAttractions:
      "FishHawk Ranch is a standout master-planned community with its own commercial village, pools, and trails. Alafia River State Park offers mountain biking and kayaking. Riverview has direct I-75 access for commuters heading to Tampa, Brandon, or Lakeland.",
    faqs: [
      {
        q: "How much does property management cost in Riverview?",
        a: "ViVi charges 8-12% of monthly rent collected. Riverview's newer homes typically need less maintenance, which keeps your total cost of ownership low.",
      },
      {
        q: "Is Riverview a good area for rental property investment?",
        a: "Yes. Riverview's combination of new construction, population growth, and strong rental demand makes it one of the best areas in Hillsborough County for rental property investors.",
      },
      {
        q: "Do you manage properties in FishHawk Ranch?",
        a: "Yes. FishHawk Ranch is one of our most active areas. We handle HOA lease approval coordination, which is required in FishHawk, as part of our standard management service.",
      },
    ],
  },
  {
    slug: "plant-city",
    name: "Plant City",
    county: "Hillsborough County",
    state: "FL",
    zip: "33563",
    lat: 28.0186,
    lng: -82.1193,
    population: "40,000+",
    medianRent: "$1,750",
    medianHome: "$320,000",
    headline: "Property Management in Plant City, FL",
    intro:
      "Plant City offers some of the most affordable entry points for rental property investors in Hillsborough County. Known for the Florida Strawberry Festival and its agricultural roots, Plant City is evolving with new development while maintaining lower acquisition costs and solid rental yields.",
    whyManage:
      "Plant City's location between Tampa and Lakeland attracts tenants who commute in both directions along I-4. The market requires a manager who understands rural-suburban dynamics — larger lots, well water systems, septic tanks, and properties that need a different maintenance approach than suburban Tampa.",
    rentalMarket:
      "Plant City rentals are in demand from blue-collar workers, agricultural industry employees, and families priced out of Brandon and Valrico. The lower price point means better cash-on-cash returns for investors, though properties may need more hands-on maintenance management.",
    neighborhoods: [
      "Walden Lake", "Parkwood Estates", "Turkey Creek",
      "Strawberry Fields", "Country Meadows",
    ],
    nearbyAttractions:
      "The Florida Strawberry Festival draws 500,000+ visitors annually. Plant City's historic downtown has seen revitalization with new restaurants and shops. Easy access to both I-4 and SR-60 makes it a commuter-friendly location.",
    faqs: [
      {
        q: "Is Plant City good for rental property investment?",
        a: "Plant City offers some of the best cash-on-cash returns in Hillsborough County due to lower purchase prices and solid rental demand. It's a strong market for investors focused on cash flow over appreciation.",
      },
      {
        q: "How much do Plant City rentals rent for?",
        a: "Single-family homes in Plant City typically rent for $1,500-$2,000/month. Newer construction near Walden Lake commands higher rents, while older homes closer to downtown offer better cash flow ratios.",
      },
    ],
  },
  {
    slug: "apollo-beach",
    name: "Apollo Beach",
    county: "Hillsborough County",
    state: "FL",
    zip: "33572",
    lat: 27.7732,
    lng: -82.4074,
    population: "25,000+",
    medianRent: "$2,300",
    medianHome: "$450,000",
    headline: "Property Management in Apollo Beach, FL",
    intro:
      "Apollo Beach is a waterfront community in south Hillsborough County known for canal-front homes, the Manatee Viewing Center, and premium rental rates. Waterfront and water-access properties command top dollar from tenants looking for a coastal lifestyle without Pinellas County prices.",
    whyManage:
      "Waterfront properties in Apollo Beach require specialized knowledge — seawall maintenance, dock inspections, flood insurance coordination, and understanding tidal impacts on the property. ViVi PM's in-house maintenance team handles the unique challenges of waterfront rental management.",
    rentalMarket:
      "Apollo Beach attracts higher-income tenants — professionals, retirees, and snowbirds who want waterfront living. Lease terms can vary from standard 12-month to seasonal rentals. Properties with boat access or docks command the highest premiums.",
    neighborhoods: [
      "MiraBay", "Waterset", "Andalucia", "Harbor Isles",
      "Flamingo Cay", "Surfside",
    ],
    nearbyAttractions:
      "The TECO Manatee Viewing Center is a local landmark. Apollo Beach has easy access to I-75 and US-41 for commuters. Tampa Bay's waterways offer boating, fishing, and paddleboarding minutes from home.",
    faqs: [
      {
        q: "Do you manage waterfront rentals in Apollo Beach?",
        a: "Yes. We manage canal-front, waterfront, and water-access properties throughout Apollo Beach. Our team understands the unique maintenance requirements of waterfront homes.",
      },
      {
        q: "What do Apollo Beach homes rent for?",
        a: "Apollo Beach rentals typically range from $2,000-$3,500/month depending on waterfront access, size, and community. MiraBay and Waterset command the highest rents in the area.",
      },
    ],
  },
  {
    slug: "lithia",
    name: "Lithia",
    county: "Hillsborough County",
    state: "FL",
    zip: "33547",
    lat: 27.8667,
    lng: -82.2057,
    population: "15,000+",
    medianRent: "$2,400",
    medianHome: "$480,000",
    headline: "Property Management in Lithia, FL",
    intro:
      "Lithia offers a rural-suburban lifestyle with larger lots, newer construction, and some of the best schools in Hillsborough County. Properties here attract families willing to pay premium rents for space, privacy, and top school zoning — particularly FishHawk and Newsome High School.",
    whyManage:
      "Lithia properties tend to be newer and on larger lots, which means different maintenance needs — irrigation systems, larger yards, and sometimes well/septic systems. ViVi PM's in-house team handles all of it, and our local presence means faster response times for your Lithia tenants.",
    rentalMarket:
      "Lithia attracts high-quality, long-term tenants. Families move here specifically for schools and stay 3+ years. That means lower turnover, less vacancy, and more stable income for property owners. The tradeoff is a smaller tenant pool, so pricing must be precise.",
    neighborhoods: [
      "FishHawk Ranch", "Lithia Springs", "Keystone Park",
      "Triple Creek", "Alafia",
    ],
    nearbyAttractions:
      "Lithia Springs Park is one of the county's best-kept secrets. Alafia River State Park offers trails and kayaking. Despite the rural feel, Lithia is just 20 minutes from Brandon and 35 minutes from downtown Tampa.",
    faqs: [
      {
        q: "What do Lithia homes rent for?",
        a: "Lithia rentals typically command $2,200-$3,000/month. Larger homes in FishHawk Ranch and newer communities near Triple Creek sit at the higher end due to school zoning and community amenities.",
      },
    ],
  },
  {
    slug: "seffner",
    name: "Seffner",
    county: "Hillsborough County",
    state: "FL",
    zip: "33584",
    lat: 27.9839,
    lng: -82.2756,
    population: "10,000+",
    medianRent: "$1,800",
    medianHome: "$330,000",
    headline: "Property Management in Seffner, FL",
    intro:
      "Seffner is a smaller community between Brandon and Temple Terrace that offers affordable rental properties with convenient I-4 access. Investors appreciate Seffner's lower entry prices and steady tenant demand from commuters working in both Tampa and Lakeland.",
    whyManage:
      "Seffner's older housing stock means properties may need more frequent maintenance attention. Having ViVi's in-house maintenance team means repairs are handled quickly and without the markup you'd pay outsourcing to contractors. We keep your Seffner property maintained and your tenants happy.",
    rentalMarket:
      "Seffner's rental market is driven by affordability. Tenants who can't afford Brandon or Valrico rents find Seffner attractive for its central location and lower costs. Demand is consistent, though properties need to be well-maintained to attract quality tenants.",
    neighborhoods: [
      "Mango", "Pine Crest", "Seffner Estates",
    ],
    nearbyAttractions:
      "Seffner is centrally located with easy access to I-4, I-75 via SR-579, and the Lee Roy Selmon Expressway for downtown Tampa commuters. USF and Temple Terrace are just north.",
    faqs: [
      {
        q: "Is Seffner a good area for rental investment?",
        a: "Seffner offers some of the best cash flow in the Brandon-Valrico corridor due to lower acquisition costs. Properties rent quickly and consistently due to the central location.",
      },
    ],
  },
  {
    slug: "temple-terrace",
    name: "Temple Terrace",
    county: "Hillsborough County",
    state: "FL",
    zip: "33617",
    lat: 28.0353,
    lng: -82.3893,
    population: "28,000+",
    medianRent: "$1,900",
    medianHome: "$350,000",
    headline: "Property Management in Temple Terrace, FL",
    intro:
      "Temple Terrace is a small city adjacent to USF with a unique mix of mid-century homes, newer developments, and strong rental demand from university students, faculty, and medical professionals at nearby hospitals.",
    whyManage:
      "Temple Terrace's proximity to USF creates a unique rental dynamic — higher turnover from student renters but also consistent demand. ViVi PM understands how to screen tenants carefully in university-adjacent markets and how to time lease cycles to avoid costly vacancies between academic terms.",
    rentalMarket:
      "Temple Terrace benefits from USF's 50,000+ student body and the growing medical corridor along Bruce B. Downs Boulevard. Rental demand comes from students, hospital staff, and families attracted to Temple Terrace's tree-lined streets and golf course community.",
    neighborhoods: [
      "Temple Terrace Golf & Country Club", "Terrace Park",
      "Temple Crest", "Riverhills",
    ],
    nearbyAttractions:
      "Temple Terrace is home to Riverhills Park and Hillsborough River trails. USF, Moffitt Cancer Center, and James A. Haley Veterans Hospital are major employers within minutes.",
    faqs: [
      {
        q: "Do you manage rentals near USF?",
        a: "Yes. We manage single-family and townhouse rentals in Temple Terrace and surrounding USF-area neighborhoods. We handle the unique screening and lease-cycle timing that university-adjacent rentals require.",
      },
    ],
  },
  // ============================================
  // PINELLAS COUNTY
  // ============================================
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    county: "Pinellas County",
    state: "FL",
    zip: "33701",
    lat: 27.7676,
    lng: -82.6403,
    population: "265,000+",
    medianRent: "$2,200",
    medianHome: "$400,000",
    headline: "Property Management in St. Petersburg, FL",
    intro:
      "St. Petersburg is the crown jewel of Pinellas County — a vibrant city with a booming arts scene, waterfront living, and some of the strongest rental demand in the Tampa Bay metro. Downtown St. Pete commands premium rents, while neighborhoods like Kenneth City and Lealman offer better cash flow.",
    whyManage:
      "St. Pete's market is hot and competitive. A vacant property costs you $70+/day in lost rent. ViVi PM's aggressive marketing gets your St. Pete rental on MLS and 200+ sites within 48 hours. Our tenant screening is thorough — we don't just fill units fast, we fill them with tenants who pay on time and take care of your property.",
    rentalMarket:
      "St. Pete's transformation over the past decade has driven rents up significantly. Downtown and the waterfront districts attract young professionals and remote workers. Neighborhoods south of Central Avenue offer solid returns. The Pinellas Trail corridor is increasingly popular with bike commuters.",
    neighborhoods: [
      "Downtown St. Pete", "Old Northeast", "Kenwood", "Crescent Heights",
      "Shore Acres", "Jungle Terrace", "Pasadena", "Gulfport",
    ],
    nearbyAttractions:
      "The Dalí Museum, St. Pete Pier, Tropicana Field, and the Sundial shopping district anchor downtown. The Pinellas Trail runs through the city, and Gulf beaches are 20 minutes west.",
    faqs: [
      {
        q: "How much does property management cost in St. Petersburg?",
        a: "ViVi charges 8-12% of monthly rent collected for St. Pete properties. Given St. Pete's higher rents, professional management typically costs less than one month of vacancy.",
      },
      {
        q: "What are the best St. Pete neighborhoods for rental investment?",
        a: "Old Northeast and Downtown St. Pete command premium rents. Kenwood and Crescent Heights offer better cash flow. Shore Acres is a growing market with waterfront access and improving rents.",
      },
    ],
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    county: "Pinellas County",
    state: "FL",
    zip: "33755",
    lat: 27.9659,
    lng: -82.8001,
    population: "120,000+",
    medianRent: "$2,000",
    medianHome: "$370,000",
    headline: "Property Management in Clearwater, FL",
    intro:
      "Clearwater sits on the Gulf Coast with world-famous Clearwater Beach just minutes away. The rental market benefits from both long-term residents and the seasonal influx of snowbirds and tourists. Property owners in Clearwater enjoy strong demand across all property types.",
    whyManage:
      "Clearwater's mix of long-term and seasonal rentals creates complexity that self-managing owners struggle with. ViVi PM handles lease structuring, seasonal pricing adjustments, and the maintenance demands that Gulf Coast humidity and salt air create. Our in-house team responds faster than any contractor you'd find on your own.",
    rentalMarket:
      "Clearwater's rental market is split between inland long-term rentals and beach-area properties with seasonal demand. Long-term rentals in Clearwater proper offer stable income, while beach-adjacent properties can command higher rents but may experience seasonal turnover.",
    neighborhoods: [
      "Clearwater Beach", "Island Estates", "Countryside", "Feather Sound",
      "Belleair", "Safety Harbor", "Clearwater East",
    ],
    nearbyAttractions:
      "Clearwater Beach is consistently ranked among the best beaches in the U.S. Clearwater Marine Aquarium (home of Winter the dolphin) draws visitors year-round. The Jolley Trolley connects beach areas to downtown Clearwater.",
    faqs: [
      {
        q: "Do you manage seasonal rentals in Clearwater?",
        a: "ViVi primarily focuses on long-term rentals (12+ month leases). For Clearwater property owners considering long-term leasing over short-term vacation rentals, we can help you evaluate which strategy maximizes your returns.",
      },
    ],
  },
  {
    slug: "largo",
    name: "Largo",
    county: "Pinellas County",
    state: "FL",
    zip: "33770",
    lat: 27.9095,
    lng: -82.7873,
    population: "84,000+",
    medianRent: "$1,850",
    medianHome: "$340,000",
    headline: "Property Management in Largo, FL",
    intro:
      "Largo is Pinellas County's third-largest city, centrally located between Tampa Bay and the Gulf beaches. It offers property investors a strong combination of affordable acquisition costs and reliable rental demand from a stable workforce population.",
    whyManage:
      "Largo's aging housing stock means maintenance is a constant consideration. ViVi PM's in-house maintenance team — Best Bay Services — handles repairs directly without third-party markups. For Largo properties, where a $500 plumbing repair can turn into a $1,500 bill with a marked-up contractor, that savings adds up fast.",
    rentalMarket:
      "Largo attracts working professionals, small families, and retirees. The Largo Central Park area and neighborhoods near Indian Rocks Beach offer different tenant profiles. Consistent demand keeps vacancies short across most Largo zip codes.",
    neighborhoods: [
      "Largo Central Park", "Ridgecrest", "Belleair Bluffs",
      "Indian Rocks", "Oakhurst",
    ],
    nearbyAttractions:
      "Largo Central Park hosts concerts, festivals, and a new recreation complex. Indian Rocks Beach is a quieter alternative to Clearwater Beach. The Pinellas Trail runs through Largo, connecting to St. Pete and Tarpon Springs.",
    faqs: [
      {
        q: "What do Largo rentals typically rent for?",
        a: "Single-family homes in Largo typically rent for $1,600-$2,200/month. Homes near Indian Rocks Beach command higher rents. We run a free competitive market analysis to find the right price for your property.",
      },
    ],
  },
  {
    slug: "dunedin",
    name: "Dunedin",
    county: "Pinellas County",
    state: "FL",
    zip: "34698",
    lat: 28.0197,
    lng: -82.7718,
    population: "38,000+",
    medianRent: "$2,100",
    medianHome: "$420,000",
    headline: "Property Management in Dunedin, FL",
    intro:
      "Dunedin is a charming coastal town with a walkable downtown, craft breweries, and access to Honeymoon Island and Caladesi Island. The town's unique character attracts tenants willing to pay premium rents for the lifestyle.",
    whyManage:
      "Dunedin's desirability means your property will attract interest — but also means tenants have high expectations. Professional photography, 3D tours, and competitive pricing are essential to capturing the best tenants. ViVi PM markets your Dunedin property like a premium listing because that's what Dunedin tenants expect.",
    rentalMarket:
      "Dunedin attracts a mix of young professionals, remote workers, and active retirees. The downtown walkability factor drives demand for properties within biking distance of Main Street. Waterfront and Honeymoon Island-adjacent rentals command top dollar.",
    neighborhoods: [
      "Downtown Dunedin", "Dunedin Causeway", "Stirling Chase",
      "Highland Lakes", "Skycrest",
    ],
    nearbyAttractions:
      "Dunedin's downtown is packed with restaurants, breweries (Dunedin Brewery is Florida's oldest craft brewery), and live music venues. Honeymoon Island State Park and the Dunedin Causeway are minutes away. The Pinellas Trail passes right through town.",
    faqs: [
      {
        q: "What do Dunedin homes rent for?",
        a: "Dunedin single-family rentals typically range from $1,900-$2,800/month. Downtown-adjacent and waterfront properties sit at the higher end. The lifestyle premium is real in Dunedin.",
      },
    ],
  },
  {
    slug: "seminole",
    name: "Seminole",
    county: "Pinellas County",
    state: "FL",
    zip: "33772",
    lat: 27.8403,
    lng: -82.7907,
    population: "19,000+",
    medianRent: "$2,000",
    medianHome: "$380,000",
    headline: "Property Management in Seminole, FL",
    intro:
      "Seminole is a quiet, family-friendly community in mid-Pinellas County with excellent schools and a suburban feel. Properties here attract long-term tenants — families who value stability, good schools, and proximity to both Tampa Bay and the Gulf beaches.",
    whyManage:
      "Seminole's stable market means your tenants tend to stay longer, but it also means every vacancy hurts more. ViVi PM's marketing ensures your property doesn't sit empty, and our thorough screening process finds tenants who treat your home like their own.",
    rentalMarket:
      "Seminole's rental market is family-driven. Tenants move here for Seminole High School and the quiet suburban environment. Turnover is lower than beach communities, which means more consistent income and less rehab between tenants.",
    neighborhoods: [
      "Seminole Lake Country Club", "Bay Pines", "Long Bayou",
      "Seminole Gardens",
    ],
    nearbyAttractions:
      "Seminole City Center offers shopping and dining. The community sits between St. Pete and the beaches, giving tenants easy access to both. War Veterans Memorial Park and Lake Seminole Park provide green space.",
    faqs: [
      {
        q: "Do you manage properties in Seminole?",
        a: "Yes. Seminole is part of our Pinellas County service area. We manage single-family homes, townhouses, and condos throughout Seminole and surrounding communities.",
      },
    ],
  },
  // ============================================
  // PASCO COUNTY
  // ============================================
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    county: "Pasco County",
    state: "FL",
    zip: "33543",
    lat: 28.2397,
    lng: -82.3518,
    population: "65,000+",
    medianRent: "$2,200",
    medianHome: "$420,000",
    headline: "Property Management in Wesley Chapel, FL",
    intro:
      "Wesley Chapel is one of the fastest-growing communities in Florida. New construction, master-planned communities, and the Tampa Premium Outlets have transformed this area into a premier suburban destination. Rental demand is driven by families and professionals relocating to Tampa Bay.",
    whyManage:
      "Wesley Chapel's HOA-heavy communities require a property manager who understands lease approval processes, architectural guidelines, and community rules. ViVi PM handles HOA coordination as part of our standard service. We also navigate the new-construction warranty process for investor-owned homes.",
    rentalMarket:
      "Wesley Chapel attracts tenants relocating from out of state who want newer homes with modern amenities. The Wiregrass and Meadow Pointe areas are especially popular. Demand outpaces supply in most Wesley Chapel communities, which keeps vacancy rates low.",
    neighborhoods: [
      "Wiregrass", "Meadow Pointe", "Epperson", "Bexley",
      "Connerton", "Seven Oaks", "Chapel Pines",
    ],
    nearbyAttractions:
      "Tampa Premium Outlets, The Grove at Wesley Chapel, and Wiregrass Mall anchor the retail corridor. AdventHealth Wesley Chapel and several new medical facilities serve the growing population. I-75 provides direct access to downtown Tampa in 30 minutes.",
    faqs: [
      {
        q: "How much do Wesley Chapel homes rent for?",
        a: "Wesley Chapel single-family homes typically rent for $2,000-$2,800/month. Newer construction in communities like Bexley and Epperson can command $2,500+ depending on size and amenities.",
      },
      {
        q: "Do you handle HOA lease approvals in Wesley Chapel?",
        a: "Yes. Most Wesley Chapel communities require HOA lease approval. We handle the application, documentation, and follow-up as part of our standard management service at no extra charge.",
      },
    ],
  },
  {
    slug: "land-o-lakes",
    name: "Land O' Lakes",
    county: "Pasco County",
    state: "FL",
    zip: "34638",
    lat: 28.2189,
    lng: -82.4573,
    population: "40,000+",
    medianRent: "$2,100",
    medianHome: "$400,000",
    headline: "Property Management in Land O' Lakes, FL",
    intro:
      "Land O' Lakes is a growing suburb in southeast Pasco County with newer construction, strong schools, and a family-oriented atmosphere. The area attracts tenants who want newer homes at slightly lower rents than nearby Wesley Chapel or Lutz.",
    whyManage:
      "Land O' Lakes properties are predominantly in HOA communities with specific lease restrictions. ViVi PM ensures your rental complies with all community rules while maximizing your returns. Our in-house maintenance keeps newer homes in showroom condition to justify premium rents.",
    rentalMarket:
      "Land O' Lakes benefits from families relocating from Hillsborough County who want more home for their money. Pasco County schools in this area are well-regarded, which drives family-oriented tenant demand and longer lease terms.",
    neighborhoods: [
      "Wilderness Lake Preserve", "Dupree Lakes", "Oakstead",
      "Lakeshore Ranch", "Concord Station",
    ],
    nearbyAttractions:
      "Conner Preserve and Crews Lake Wilderness Park offer outdoor recreation. Land O' Lakes is positioned between Wesley Chapel's retail and Tampa's employment, making it ideal for commuters.",
    faqs: [
      {
        q: "What's the rental market like in Land O' Lakes?",
        a: "Strong and growing. Family tenants looking for newer homes with 3-4 bedrooms dominate demand. Properties in master-planned communities with pools and playgrounds lease fastest.",
      },
    ],
  },
  {
    slug: "new-port-richey",
    name: "New Port Richey",
    county: "Pasco County",
    state: "FL",
    zip: "34652",
    lat: 28.2444,
    lng: -82.7193,
    population: "17,000+",
    medianRent: "$1,700",
    medianHome: "$280,000",
    headline: "Property Management in New Port Richey, FL",
    intro:
      "New Port Richey offers some of the most affordable rental investment opportunities in the Tampa Bay metro. Located on Pasco County's Gulf Coast, the city has a revitalizing downtown and strong cash flow potential for investors focused on returns over appreciation.",
    whyManage:
      "Affordable markets like New Port Richey require careful tenant screening and consistent maintenance to protect your investment. ViVi PM's thorough screening process — credit, criminal, employment, and rental history — ensures you get reliable tenants even at lower price points.",
    rentalMarket:
      "New Port Richey attracts cost-conscious tenants including retirees, service workers, and small families. The waterfront revitalization of the Cotee River district is gradually improving the rental market. Cash flow is strong here due to low acquisition costs.",
    neighborhoods: [
      "River Ridge", "Beacon Square", "Jasmine Estates",
      "Heritage Springs",
    ],
    nearbyAttractions:
      "The Cotee River waterfront, Sims Park, and Main Street have seen recent revitalization. Werner-Boyce Salt Springs State Park offers Gulf Coast nature trails. The area is 45 minutes from downtown Tampa via the Suncoast Parkway.",
    faqs: [
      {
        q: "Is New Port Richey good for cash flow rental investing?",
        a: "Yes. Lower purchase prices and consistent rental demand make New Port Richey one of the better cash flow markets in the Tampa Bay area. Properties can yield strong cap rates relative to Hillsborough County.",
      },
    ],
  },
  {
    slug: "zephyrhills",
    name: "Zephyrhills",
    county: "Pasco County",
    state: "FL",
    zip: "33542",
    lat: 28.2336,
    lng: -82.1812,
    population: "18,000+",
    medianRent: "$1,600",
    medianHome: "$270,000",
    headline: "Property Management in Zephyrhills, FL",
    intro:
      "Zephyrhills is known for its natural springs and small-town charm. Located in east Pasco County, it offers affordable rental properties with steady demand from local workers, retirees, and families. The town is growing as Tampa Bay's sprawl pushes northward.",
    whyManage:
      "Zephyrhills properties often have well water, septic systems, and larger lots that require a different maintenance approach. ViVi PM's in-house team has experience with rural-suburban property types and can handle the unique needs of Zephyrhills rentals.",
    rentalMarket:
      "Zephyrhills attracts a mix of long-term residents, snowbirds, and skydiving enthusiasts (Skydive City is a major draw). The market is price-sensitive, so accurate pricing is critical to avoiding vacancy.",
    neighborhoods: [
      "Crystal Springs", "Settlers Rest", "Timber Creek",
      "Zephyr Shores",
    ],
    nearbyAttractions:
      "Zephyrhills is famous for its spring water (the bottled water brand) and Skydive City, one of the world's premier skydiving facilities. Natural springs and the Hillsborough River provide outdoor recreation.",
    faqs: [
      {
        q: "Do you manage properties in Zephyrhills?",
        a: "Yes. Zephyrhills is part of our Pasco County coverage area. We manage single-family homes and duplexes throughout Zephyrhills and surrounding areas.",
      },
    ],
  },
  // ============================================
  // POLK COUNTY
  // ============================================
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    state: "FL",
    zip: "33801",
    lat: 28.0395,
    lng: -81.9498,
    population: "115,000+",
    medianRent: "$1,800",
    medianHome: "$310,000",
    headline: "Property Management in Lakeland, FL",
    intro:
      "Lakeland is the largest city in Polk County and sits at the midpoint between Tampa and Orlando along I-4. Strong job growth from Amazon, Publix headquarters, and Lakeland Regional Health drives consistent rental demand. The city's revitalized downtown and lakefront living add lifestyle appeal.",
    whyManage:
      "Lakeland's growing market means more rental competition. Professional marketing and accurate pricing are the difference between leasing in 10 days and sitting vacant for 60. ViVi PM's marketing strategy — professional photos, 3D tours, and MLS syndication — gives your Lakeland property maximum exposure.",
    rentalMarket:
      "Lakeland is attracting Tampa Bay spillover — tenants priced out of Hillsborough County who commute westbound on I-4. Amazon's massive distribution center and Publix's headquarters provide stable employment. South Lakeland and Grasslands are the hottest rental corridors.",
    neighborhoods: [
      "Grasslands", "South Lakeland", "Highland City",
      "Lakeside Village", "Dixieland", "Lake Hollingsworth",
    ],
    nearbyAttractions:
      "Lakeland's downtown features Frank Lloyd Wright architecture at Florida Southern College, Lake Mirror Park, and a growing restaurant scene. Publix Super Markets is headquartered here, and Amazon's fulfillment center is a major employer.",
    faqs: [
      {
        q: "How much does property management cost in Lakeland?",
        a: "ViVi charges 8-12% of monthly rent collected. Lakeland's lower rents compared to Tampa mean lower absolute management costs while maintaining full service.",
      },
      {
        q: "Is Lakeland a good rental market?",
        a: "Yes. Lakeland offers strong cash flow due to lower purchase prices and growing rental demand. The Tampa-to-Orlando I-4 corridor continues to see population growth that benefits Lakeland property owners.",
      },
    ],
  },
  {
    slug: "winter-haven",
    name: "Winter Haven",
    county: "Polk County",
    state: "FL",
    zip: "33880",
    lat: 28.0222,
    lng: -81.7329,
    population: "48,000+",
    medianRent: "$1,650",
    medianHome: "$280,000",
    headline: "Property Management in Winter Haven, FL",
    intro:
      "Winter Haven is the Chain of Lakes City — over 50 lakes within city limits and a downtown that's seen significant revitalization. LEGOLAND Florida drives tourism, but the rental market is built on affordable living and proximity to both Lakeland and Orlando.",
    whyManage:
      "Winter Haven's affordability attracts price-sensitive tenants, which makes thorough screening even more critical. ViVi PM's comprehensive screening — credit, criminal, employment, rental history, and income verification — protects your investment in this value-oriented market.",
    rentalMarket:
      "Winter Haven draws tenants from the LEGOLAND workforce, Polk State College, and the growing logistics industry along the I-4 corridor. The downtown revitalization is gradually pushing rents upward, especially near Lake Howard and Lake Silver.",
    neighborhoods: [
      "Lake Shipp", "Eloise", "Lake Howard", "Florence Villa",
      "Cypress Gardens",
    ],
    nearbyAttractions:
      "LEGOLAND Florida is Winter Haven's biggest draw. The Chain of Lakes offers boating, fishing, and waterfront living. Downtown Winter Haven's revitalization includes new restaurants, breweries, and a growing arts scene.",
    faqs: [
      {
        q: "What do Winter Haven rentals rent for?",
        a: "Single-family homes in Winter Haven typically rent for $1,400-$2,000/month. Lakefront properties and homes near the revitalized downtown command the highest rents.",
      },
    ],
  },
  {
    slug: "davenport",
    name: "Davenport",
    county: "Polk County",
    state: "FL",
    zip: "33837",
    lat: 28.1614,
    lng: -81.6017,
    population: "10,000+",
    medianRent: "$2,000",
    medianHome: "$350,000",
    headline: "Property Management in Davenport, FL",
    intro:
      "Davenport sits at the crossroads of I-4 and US-27 near the Polk/Osceola County line. Its proximity to Walt Disney World makes it a popular area for vacation rental investors, but long-term rentals also thrive here thanks to the area's rapid residential growth.",
    whyManage:
      "Davenport's location near Disney attracts both long-term and vacation rental investors. ViVi PM focuses on long-term residential management, helping owners who prefer stable monthly income over the volatility of nightly vacation rental rates.",
    rentalMarket:
      "Davenport's newer communities attract families and professionals commuting to both Orlando and Tampa via I-4. The area's resort-style communities with pools and clubhouses command premium rents from long-term tenants.",
    neighborhoods: [
      "Champions Gate", "Ridgewood Lakes", "Providence",
      "Tuscan Ridge", "Bella Trae",
    ],
    nearbyAttractions:
      "Walt Disney World is 15 minutes away. Champions Gate hosts the Omni Orlando Resort and TPC golf courses. I-4 provides direct access to Tampa (45 min) and Orlando (30 min).",
    faqs: [
      {
        q: "Do you manage long-term rentals near Disney?",
        a: "Yes. We manage long-term residential rentals in Davenport and surrounding communities. For owners who prefer stable monthly income over vacation rental volatility, we provide full-service management.",
      },
    ],
  },
  // ============================================
  // MANATEE COUNTY
  // ============================================
  {
    slug: "bradenton",
    name: "Bradenton",
    county: "Manatee County",
    state: "FL",
    zip: "34205",
    lat: 27.4989,
    lng: -82.5748,
    population: "60,000+",
    medianRent: "$2,100",
    medianHome: "$390,000",
    headline: "Property Management in Bradenton, FL",
    intro:
      "Bradenton is the county seat of Manatee County and the gateway to Anna Maria Island. The city offers a mix of historic neighborhoods, waterfront living, and newer suburban development. Rental demand is strong from both year-round residents and seasonal tenants.",
    whyManage:
      "Bradenton's diverse property types — from downtown bungalows to waterfront condos to suburban single-family homes — each require different marketing and management approaches. ViVi PM tailors our strategy to your specific property type and target tenant profile.",
    rentalMarket:
      "Bradenton attracts a broad tenant base: young professionals moving to the area, retirees on fixed incomes, and seasonal residents from the Northeast and Midwest. The Village of the Arts and downtown revitalization have increased demand for walkable rental properties.",
    neighborhoods: [
      "Village of the Arts", "Palma Sola", "Braden River",
      "West Bradenton", "Trailer Estates", "Oneco",
    ],
    nearbyAttractions:
      "Anna Maria Island is minutes away. LECOM Park (Pittsburgh Pirates spring training) and De Soto National Memorial are local landmarks. The Riverwalk connects downtown to the waterfront.",
    faqs: [
      {
        q: "How much do Bradenton homes rent for?",
        a: "Bradenton single-family rentals typically range from $1,800-$2,600/month. Waterfront properties and homes near Anna Maria Island command the highest rents. We run a free market analysis to price your property right.",
      },
    ],
  },
  {
    slug: "lakewood-ranch",
    name: "Lakewood Ranch",
    county: "Manatee County",
    state: "FL",
    zip: "34202",
    lat: 27.4017,
    lng: -82.3967,
    population: "50,000+",
    medianRent: "$2,500",
    medianHome: "$500,000",
    headline: "Property Management in Lakewood Ranch, FL",
    intro:
      "Lakewood Ranch is one of the nation's top-selling master-planned communities and one of the most desirable rental markets in Manatee County. Premium amenities, top-rated schools, and a strong sense of community attract high-quality tenants willing to pay premium rents.",
    whyManage:
      "Lakewood Ranch's multiple HOAs and CDDs (Community Development Districts) create a complex management environment. ViVi PM navigates HOA lease approvals, CDD assessments, and architectural guidelines so you don't have to. Our team markets Lakewood Ranch properties to match the premium tenant expectations.",
    rentalMarket:
      "Lakewood Ranch attracts corporate relocators, medical professionals, and families who want premium suburban living. Tenant quality is high, lease terms trend longer, and properties command rents well above the Manatee County average.",
    neighborhoods: [
      "Country Club East", "Del Webb", "Waterside",
      "Lorraine Lakes", "Savannah", "Esplanade",
    ],
    nearbyAttractions:
      "Lakewood Ranch Main Street is a walkable dining and shopping district. UTC Mall and Nathan Benderson Park (international rowing venue) are nearby. Sarasota's arts and cultural district is 15 minutes south.",
    faqs: [
      {
        q: "What do Lakewood Ranch homes rent for?",
        a: "Lakewood Ranch rentals range from $2,200-$3,500/month depending on community, size, and amenities. Premium communities like Waterside and Country Club East sit at the top of the range.",
      },
      {
        q: "Do you handle HOA and CDD requirements in Lakewood Ranch?",
        a: "Yes. Lakewood Ranch has multiple HOAs and CDDs. We handle all lease approval paperwork, ensure tenant compliance with community rules, and coordinate with HOA management companies on your behalf.",
      },
    ],
  },
  {
    slug: "parrish",
    name: "Parrish",
    county: "Manatee County",
    state: "FL",
    zip: "34219",
    lat: 27.5907,
    lng: -82.3579,
    population: "15,000+",
    medianRent: "$2,200",
    medianHome: "$400,000",
    headline: "Property Management in Parrish, FL",
    intro:
      "Parrish is one of the fastest-growing areas in Manatee County. New construction communities are popping up rapidly as the area transforms from rural to suburban. For rental investors, Parrish offers newer homes, strong demand from families, and premium rents.",
    whyManage:
      "Parrish's new-construction homes often come with builder warranties and HOA requirements that need careful management. ViVi PM coordinates warranty claims, handles HOA lease approvals, and ensures your new investment property stays in top condition from day one.",
    rentalMarket:
      "Parrish attracts families priced out of Lakewood Ranch and South Hillsborough County. The North River Ranch development is one of the area's largest master-planned communities. Tenant demand is strong and growing as new amenities and schools are built.",
    neighborhoods: [
      "North River Ranch", "Gamble Creek", "Harrison Ranch",
      "Copperstone", "River Wilderness",
    ],
    nearbyAttractions:
      "Parrish is centrally located between Tampa (40 min via I-75) and Sarasota (35 min). Emerson Point Preserve offers Gulf Coast trails and kayaking. The area is growing rapidly with new retail and dining options.",
    faqs: [
      {
        q: "Is Parrish a good area for rental investment?",
        a: "Yes. Parrish's rapid growth, new construction, and strong family demand make it one of the best emerging rental markets in Manatee County. Newer homes mean lower maintenance costs in the early years.",
      },
    ],
  },
  {
    slug: "palmetto",
    name: "Palmetto",
    county: "Manatee County",
    state: "FL",
    zip: "34221",
    lat: 27.5214,
    lng: -82.5723,
    population: "14,000+",
    medianRent: "$1,800",
    medianHome: "$320,000",
    headline: "Property Management in Palmetto, FL",
    intro:
      "Palmetto sits on the north bank of the Manatee River, offering affordable waterfront living in Manatee County. The city is undergoing revitalization, with new development along the riverfront attracting investment and improving the rental market.",
    whyManage:
      "Palmetto's evolving market requires a property manager who understands both the current tenant base and the changing dynamics as revitalization takes hold. ViVi PM prices your property competitively for today's market while positioning you to capture increasing rents as the area improves.",
    rentalMarket:
      "Palmetto offers strong cash flow potential with lower entry prices than Bradenton or Lakewood Ranch. The riverfront redevelopment and new Palmetto Promenade are gradually shifting the market upward.",
    neighborhoods: [
      "Palmetto Promenade", "Riverside", "Terra Ceia",
      "Heritage Harbour",
    ],
    nearbyAttractions:
      "The Manatee River waterfront, Emerson Point Preserve, and Terra Ceia Aquatic Preserve provide natural beauty. Palmetto is just across the river from Bradenton and 10 minutes from Anna Maria Island.",
    faqs: [
      {
        q: "What do Palmetto rentals rent for?",
        a: "Palmetto single-family homes typically rent for $1,600-$2,200/month. Properties near Heritage Harbour and the river command higher rents. The market is improving as waterfront development continues.",
      },
    ],
  },
];

// Helper: get a city by slug
export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// Helper: get all slugs for static generation
export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug);
}
