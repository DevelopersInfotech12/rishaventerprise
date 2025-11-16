"use client"
import React, { useState } from 'react';
import { Sparkles, Droplet, Wind, ShieldCheck, Clock, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'blasting', name: 'Blasting' },
    { id: 'abrasive', name: 'Abrasive' },
    { id: 'measuring', name: 'Measuring' },
    { id: 'metalizing', name: 'Metalizing' },
     { id: 'material-handling', name: 'Material-handling' },
     { id: 'pipe-tools', name: 'Pipe-Tools' }
    
  ];

const products = [
  // Abrasive Section
  {
    id: 1,
    name: "Steel Grit",
    category: "abrasive",
    price: "$149",
    image: "/images/img16.jpg",
    description: "High-quality steel grit for surface preparation and cleaning",
    features: ["Durable material", "Consistent particle size", "Reusable", "Industrial grade"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    id: 2,
    name: "Garnet",
    category: "abrasive",
    price: "$149",
    image: "/images/img17.jpg",
    description: "Natural garnet abrasive for efficient surface preparation",
    features: ["Natural mineral", "Low dust", "Recyclable", "Sharp edges"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    id: 3,
    name: "Steel Shot",
    category: "abrasive",
    price: "$149",
    image: "/images/img18.jpg",
    description: "Spherical steel shot for peening and cleaning applications",
    features: ["Round particles", "High density", "Reusable", "Uniform size"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    id: 4,
    name: "Glass Bead",
    category: "abrasive",
    price: "$149",
    image: "/images/img19.jpg",
    description: "Glass bead media for delicate surface finishing",
    features: ["Smooth finish", "Non-toxic", "Recyclable", "Bright surface"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    id: 5,
    name: "Copper Slag",
    category: "abrasive",
    price: "$149",
    image: "/images/img20.jpg",
    description: "Economical copper slag abrasive for heavy-duty blasting",
    features: ["Cost effective", "High hardness", "Fast cutting", "Industrial strength"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },

  // Blasting Section
  {
    id: 6,
    name: "BL 24800 Automatic",
    category: "blasting",
    price: "$2,499",
    image: "/images/img21.jpg",
    description: "Automatic blast pot with advanced control system",
    features: ["Automatic operation", "Large capacity", "Remote control ready", "Wheeled mobility"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    id: 7,
    name: "BL 20300 Automatic",
    category: "blasting",
    price: "$2,299",
    image: "/images/img22.jpg",
    description: "Mid-size automatic blasting machine with precision controls",
    features: ["Automatic metering", "Medium capacity", "Digital controls", "Stable base"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    id: 8,
    name: "BL 24650 Manual",
    category: "blasting",
    price: "$1,899",
    image: "/images/img23.jpg",
    description: "Manual blast pot for controlled abrasive blasting",
    features: ["Manual control", "Compact design", "Reliable operation", "Easy maintenance"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 9,
    name: "Remote Control System",
    category: "blasting",
    price: "$349",
    image: "/images/img24.jpg",
    description: "Wireless remote control system for blast pots",
    features: ["Wireless operation", "Safe distance control", "Easy installation", "Reliable signal"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 10,
    name: "Flat Abrasive Valve",
    category: "blasting",
    price: "$249",
    image: "/images/img25.jpg",
    description: "Flat pattern abrasive metering valve",
    features: ["Precise metering", "Durable construction", "Adjustable flow", "Long lasting"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 11,
    name: "Pinch Valve",
    category: "blasting",
    price: "$179",
    image: "/images/img26.jpg",
    description: "Heavy-duty pinch valve for abrasive flow control",
    features: ["Heavy duty", "Replaceable sleeve", "Easy operation", "Long service life"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 12,
    name: "Blasting Helmet",
    category: "blasting",
    price: "$299",
    image: "/images/img27.jpg",
    description: "Professional sandblasting helmet with air supply",
    features: ["Full face protection", "Clear visibility", "Comfortable padding", "Air supply inlet"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    id: 13,
    name: "Air Line Filter & Cartage",
    category: "blasting",
    price: "$149",
    image: "/images/img28.jpg",
    description: "Air filtration system with moisture separator",
    features: ["Clean air supply", "Moisture removal", "Replaceable filter", "Pressure gauge"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 14,
    name: "Blasting Leather Suite",
    category: "blasting",
    price: "$199",
    image: "/images/img29.jpg",
    description: "Protective leather suit for blasting operations",
    features: ["Abrasion resistant", "Full body protection", "Durable leather", "Comfortable fit"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 15,
    name: "Blasting Hoses",
    category: "blasting",
    price: "$129",
    image: "/images/img30.jpg",
    description: "Heavy-duty abrasive blasting hoses",
    features: ["Abrasion resistant", "High pressure rated", "Flexible", "Various lengths"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 16,
    name: "Blasting Nozzle & Holder",
    category: "blasting",
    price: "$89",
    image: "/images/img31.jpg",
    description: "Tungsten carbide nozzles with holders",
    features: ["Tungsten carbide", "Long life", "Multiple sizes", "Ergonomic holder"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    id: 17,
    name: "Poppet Valve",
    category: "blasting",
    price: "$79",
    image: "/images/img32.jpg",
    description: "Remote control poppet valve assembly",
    features: ["Quick shut-off", "Remote operation", "Durable design", "Easy replacement"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 18,
    name: "Whip Check Cable",
    category: "blasting",
    price: "$49",
    image: "/images/img33.jpg",
    description: "Safety whip check cable for hose connections",
    features: ["Safety device", "Prevents whipping", "Steel cable", "Quick installation"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: 19,
    name: "Air Hose",
    category: "blasting",
    price: "$99",
    image: "/images/img34.jpg",
    description: "High-pressure air hoses for pneumatic tools",
    features: ["High pressure rated", "Flexible design", "Color coded", "Weather resistant"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    popular: false
  },

  // Painting Section
  {
    id: 20,
    name: "Pneumatic Painting Machine",
    category: "painting",
    price: "$1,499",
    image: "/images/img35.jpg",
    description: "Professional pneumatic airless paint sprayer",
    features: ["High pressure", "Adjustable spray", "Large capacity", "Professional grade"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: true
  },
  {
    id: 21,
    name: "Ultra Max II 490",
    category: "painting",
    price: "$1,799",
    image: "/images/img36.jpg",
    description: "Electric airless paint sprayer with stand",
    features: ["Electric powered", "Portable", "High output", "Complete system"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: true
  },
  {
    id: 22,
    name: "Mark IV",
    category: "painting",
    price: "$1,599",
    image: "/images/img37.jpg",
    description: "Compact electric airless sprayer",
    features: ["Compact design", "Easy transport", "Reliable motor", "Professional finish"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 23,
    name: "Ultra Max II 1095",
    category: "painting",
    price: "$2,299",
    image: "/images/img38.jpg",
    description: "Heavy-duty electric airless paint sprayer",
    features: ["Heavy duty motor", "High pressure", "Large projects", "Durable construction"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: true
  },
  {
    id: 24,
    name: "High Pressure Paint Hose",
    category: "painting",
    price: "$149",
    image: "/images/img39.jpg",
    description: "High-pressure rated paint hose",
    features: ["High pressure rated", "Flexible", "Paint resistant", "Various lengths"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 25,
    name: "R.A.C Tip",
    category: "painting",
    price: "$39",
    image: "/images/img40.jpg",
    description: "Reversible airless spray tips",
    features: ["Reversible design", "Multiple sizes", "Easy cleaning", "Precise spray"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: true
  },
  {
    id: 26,
    name: "One Seal Kit",
    category: "painting",
    price: "$29",
    image: "/images/img41.jpg",
    description: "Seal replacement kit for spray guns",
    features: ["Complete seal kit", "Quality seals", "Easy replacement", "Long lasting"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 27,
    name: "Tip Guard",
    category: "painting",
    price: "$19",
    image: "/images/img42.jpg",
    description: "Protective tip guard for spray tips",
    features: ["Tip protection", "Easy access", "Durable plastic", "Universal fit"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 28,
    name: "Pressure Feed Pot",
    category: "painting",
    price: "$399",
    image: "/images/img43.jpg",
    description: "Pressurized paint feed pot system",
    features: ["Pressure regulated", "Multiple outlets", "Large capacity", "Easy refill"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 29,
    name: "SG3 & S+ Spray Gun",
    category: "painting",
    price: "$249",
    image: "/images/img20.jpg",
    description: "Professional HVLP spray guns",
    features: ["HVLP technology", "Adjustable pattern", "Precision nozzle", "Ergonomic design"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: true
  },
  {
    id: 30,
    name: "Tip Filter",
    category: "painting",
    price: "$15",
    image: "/images/img45.jpg",
    description: "In-line spray tip filters",
    features: ["Mesh filter", "Prevents clogging", "Multiple sizes", "Easy cleaning"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 31,
    name: "Electric Paint Machine",
    category: "painting",
    price: "$199",
    image: "/images/img46.jpg",
    description: "Electric paint mixer and agitator",
    features: ["Electric motor", "Variable speed", "Durable paddle", "Ergonomic handle"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    id: 32,
    name: "Cordless Airless Gun",
    category: "painting",
    price: "$399",
    image: "/images/img47.jpg",
    description: "Battery-powered cordless spray gun",
    features: ["Cordless operation", "Rechargeable battery", "Portable", "Professional finish"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    popular: true
  },

  // Measuring Section
  {
    id: 33,
    name: "Digital Profile Gauge",
    category: "measuring",
    price: "$349",
    image: "/images/img48.jpg",
    description: "Digital coating thickness profile gauge",
    features: ["Digital display", "High accuracy", "Memory function", "Battery powered"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: 34,
    name: "Press 'O' Film",
    category: "measuring",
    price: "$49",
    image: "/images/img49.jpg",
    description: "Wet film thickness measurement strips",
    features: ["Single use", "Accurate reading", "Multiple ranges", "Easy to use"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 35,
    name: "Dust Tape Kit",
    category: "measuring",
    price: "$79",
    image: "/images/img50.jpg",
    description: "Surface cleanliness testing kit",
    features: ["Adhesive tape", "Magnifier included", "Standard grades", "Portable kit"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 36,
    name: "Swedish (ISO) Standard",
    category: "measuring",
    price: "$299",
    image: "/images/img51.jpg",
    description: "ISO 8501 surface preparation standards",
    features: ["ISO certified", "Visual standards", "Color reference", "Professional guide"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 37,
    name: "DFT Meter",
    category: "measuring",
    price: "$449",
    image: "/images/img52.jpg",
    description: "Digital dry film thickness meter",
    features: ["Digital display", "Magnetic probe", "High accuracy", "Data storage"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: 38,
    name: "Laser Thermometer",
    category: "measuring",
    price: "$129",
    image: "/images/img53.jpg",
    description: "Infrared laser temperature guns",
    features: ["Non-contact", "Laser targeting", "Wide range", "LCD display"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 39,
    name: "Positector 6000",
    category: "measuring",
    price: "$1,299",
    image: "/images/img54.jpg",
    description: "Advanced coating thickness gauge",
    features: ["Multi-mode", "Data logging", "Bluetooth", "High precision"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: 40,
    name: "Cross Hatch Cutter",
    category: "measuring",
    price: "$199",
    image: "/images/img55.jpg",
    description: "Adhesion testing cross hatch cutter kit",
    features: ["Precision blades", "Adjustable spacing", "Complete kit", "Carry case"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 41,
    name: "Whirling Hygro Meter",
    category: "measuring",
    price: "$159",
    image: "/images/img56.jpg",
    description: "Whirling hygrometer for humidity measurement",
    features: ["Accurate readings", "Manual operation", "Temperature scale", "Portable"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 42,
    name: "Adhesive Tape Elcometer",
    category: "measuring",
    price: "$89",
    image: "/images/img57.jpg",
    description: "Professional adhesive tape for coating testing",
    features: ["Standard adhesion", "Consistent quality", "Multiple widths", "Roll format"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 43,
    name: "Humidity Meter",
    category: "measuring",
    price: "$179",
    image: "/images/img58.jpg",
    description: "Digital humidity and temperature meter",
    features: ["Digital display", "Dual reading", "Memory function", "Backlight"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 44,
    name: "WFT Gauge",
    category: "measuring",
    price: "$39",
    image: "/images/img59.jpg",
    description: "Wet film thickness gauge comb",
    features: ["Multiple scales", "Stainless steel", "Accurate reading", "Compact size"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 45,
    name: "Welding Gauge",
    category: "measuring",
    price: "$49",
    image: "/images/img60.jpg",
    description: "Multi-function welding inspection gauge",
    features: ["Multiple measurements", "Angle checker", "Stainless steel", "Portable"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 46,
    name: "Needle Pressure Gauge",
    category: "measuring",
    price: "$99",
    image: "/images/img61.jpg",
    description: "Precision needle pressure gauge",
    features: ["Accurate pressure", "Needle probe", "Clear dial", "Protective case"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 47,
    name: "pH Tester",
    category: "measuring",
    price: "$149",
    image: "/images/img62.jpg",
    description: "Digital pH meter for surface testing",
    features: ["Digital display", "Auto calibration", "Replaceable electrode", "Waterproof"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 48,
    name: "Holiday Detector Machine",
    category: "measuring",
    price: "$899",
    image: "/images/img63.jpg",
    description: "Holiday detector for coating inspection",
    features: ["High voltage", "Adjustable sensitivity", "Audio alarm", "Complete kit"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: 49,
    name: "Pin Hole Detector",
    category: "measuring",
    price: "$499",
    image: "/images/img64.jpg",
    description: "Electronic pinhole detector for coatings",
    features: ["Low voltage", "Portable design", "Audio/visual alarm", "Carry case"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 50,
    name: "Pull Off Adhesion Tester",
    category: "measuring",
    price: "$799",
    image: "/images/img65.jpg",
    description: "Hydraulic pull-off adhesion tester",
    features: ["Hydraulic pressure", "Digital display", "Complete dollies", "Carrying case"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: 51,
    name: "Ultrasonic Thickness Gauge",
    category: "measuring",
    price: "$1,499",
    image: "/images/img66.jpg",
    description: "Digital ultrasonic thickness measurement device",
    features: ["Ultrasonic technology", "High precision", "Data storage", "Multiple modes"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: 52,
    name: "Rall Card",
    category: "measuring",
    price: "$149",
    image: "/images/img67.jpg",
    description: "Color reference cards for coating inspection",
    features: ["Color matching", "Durable cards", "Fade resistant", "Multiple shades"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 53,
    name: "Viscosity Flow Meter",
    category: "measuring",
    price: "$149",
    image: "/images/img68.jpg",
    description: "Flow cups for viscosity measurement",
    features: ["Accurate timing", "Stainless steel", "Multiple sizes", "Easy cleaning"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 54,
    name: "Surface Comparator",
    category: "measuring",
    price: "$149",
    image: "/images/img69.jpg",
    description: "Surface roughness comparison samples",
    features: ["Visual comparison", "Standard grades", "Portable", "Durable finish"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    id: 55,
    name: "Salt Contamination Kit",
    category: "measuring",
    price: "$149",
    image: "/images/img70.jpg",
    description: "Complete kit for salt contamination testing",
    features: ["Complete testing kit", "Accurate results", "Easy procedure", "Carry case"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    popular: false
  },

  // Metalizing Section
  {
    id: 56,
    name: "Metalizing Flame Spray Gun",
    category: "metalizing",
    price: "$1,999",
    image: "/images/img71.jpg",
    description: "Professional flame spray gun for thermal coating",
    features: ["High temperature", "Consistent spray", "Durable construction", "Easy maintenance"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: true
  },
  {
    id: 57,
    name: "Metalizing Arc Spray Gun",
    category: "metalizing",
    price: "$2,499",
    image: "/images/img72.jpg",
    description: "Electric arc spray system for metal coating",
    features: ["Arc technology", "High efficiency", "Quality coating", "Industrial grade"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: true
  },
  {
    id: 58,
    name: "F.R.L & Oxygen Regulator",
    category: "metalizing",
    price: "$299",
    image: "/images/img73.jpg",
    description: "Filter, regulator, lubricator unit with oxygen regulator",
    features: ["Complete FRL unit", "Precise control", "Dual gauges", "Safety features"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: false
  },
  {
    id: 59,
    name: "Aluminum Wire",
    category: "metalizing",
    price: "$149",
    image: "/images/img74.jpg",
    description: "High-purity aluminum wire for spray coating",
    features: ["Pure aluminum", "Consistent diameter", "Spooled wire", "Various sizes"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: false
  },
  {
    id: 60,
    name: "L.P.G. Regulator",
    category: "metalizing",
    price: "$129",
    image: "/images/img75.jpg",
    description: "LPG pressure regulator with gauge",
    features: ["Pressure control", "Safety valve", "Gauge display", "Durable brass"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: false
  },
  {
    id: 61,
    name: "Twin Hose",
    category: "metalizing",
    price: "$179",
    image: "/images/img76.jpg",
    description: "Twin welding hose for oxygen and fuel",
    features: ["Dual line", "Color coded", "Flexible", "High pressure"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: false
  },
  {
    id: 62,
    name: "Control Unit & Wire Stand",
    category: "metalizing",
    price: "$599",
    image: "/images/img77.jpg",
    description: "Control panel with wire feeding stand",
    features: ["Wire feed control", "Stable stand", "Easy adjustment", "Complete setup"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: false
  },
  {
    id: 63,
    name: "Gas Flow Meter",
    category: "metalizing",
    price: "$249",
    image: "/images/img78.jpg",
    description: "Precision gas flow meter for thermal spray",
    features: ["Accurate flow", "Clear display", "Adjustable", "Durable design"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    popular: false
  },

  // Material Handling Section
  {
    id: 64,
    name: "Bucket Elevator",
    category: "material-handling",
    price: "$3,499",
    image: "/images/img79.jpg",
    description: "Vertical bucket elevator for abrasive recovery",
    features: ["Vertical transport", "High capacity", "Continuous operation", "Low maintenance"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    popular: false
  },
  {
    id: 65,
    name: "Screw Conveyor",
    category: "material-handling",
    price: "$2,999",
    image: "/images/img80.jpg",
    description: "Horizontal screw conveyor for material transfer",
    features: ["Horizontal transport", "Enclosed design", "Variable speed", "Reliable operation"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    popular: false
  },

  // Internal Pipe Tools Section
  {
    id: 66,
    name: "Internal Pipe Blasting Tool",
    category: "pipe-tools",
    price: "$799",
    image: "/images/img81.jpg",
    description: "Specialized tool for internal pipe blasting",
    features: ["Internal cleaning", "Multiple sizes", "Rotating heads", "Complete set"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500",
    popular: false
  },
  {
    id: 67,
    name: "Internal Roto Blast Tool",
    category: "pipe-tools",
    price: "$899",
    image: "/images/img82.jpg",
    description: "Rotating blast tool for pipe interiors",
    features: ["360° cleaning", "Adjustable size", "Self-centering", "High efficiency"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500",
    popular: false
  },
  {
    id: 68,
    name: "Internal Pipe Coater",
    category: "pipe-tools",
    price: "$1,299",
    image: "/images/img83.jpg",
    description: "Internal pipe coating application tool",
    features: ["Uniform coating", "Various diameters", "Rotating spray", "Easy setup"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500",
    popular: false
  }
];


  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className='flex items-center justify-center mx-auto gap-2 mb-3'>
   <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-600 animate-expand"></div>
          <p className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent tracking-wider uppercase">
            Our Products
          </p>
          </div>
        <div className="text-center mb-10 space-y-4 ">
        
        
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cleaning Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our range of professional cleaning services tailored to your needs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Popular
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Floating Icon */}
                <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Price */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {/* {product.price} */}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {product.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact">
                <button className={`w-full my-4 group/btn bg-gradient-to-r ${product.color} text-white py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}>
                  Get Exclusive Pricing
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                </Link>
              </div>

              {/* Decorative Border Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-gray-900">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 text-lg">
                We offer custom cleaning solutions tailored to your specific needs
              </p>
            </div>
            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Custom Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;