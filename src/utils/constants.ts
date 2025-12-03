import { InfoPointData } from "./types";

export const ADD_INFOPOINT_PASSWORD = "1111";
export const APP_PASSWORD = "12345678";

export const DEFAULT_INFOPOINTS: InfoPointData[] = [
  {
    id: "AED on Site & Eye Wash Station",
    position: [-62, 3, 40],
    label: "Construction Office",
    icon: "💓",
    content: "• AED: 🏥⚡\n• Eye wash: 👁️🚿\n",
    cameraPosition: [-15, 65, 80],
  },
  {
    id: "H&S Board (Health & Safety)2",
    position: [-7, 3, -35],
    label: "H&S Board (Health & Safety)",
    icon: "⛑️",
    content: "🧯⛑️ (fire extinguisher + first aid kit)",
    cameraPosition: [50, 50, -50],
  },
  {
    id: "Pedestrian Communication Route",
    position: [-38, 3, 20],
    label: "Pedestrian Communication Route",
    icon: "🚸",
    content: "Pedestrian Communication Route",
    cameraPosition: [0, 100, 35],
  },
  {
    id: "No Entry – Seagull Nesting Area",
    position: [-30, 3, 55],
    label: "No Entry – Seagull Nesting Area",
    icon: "🐦",
    content: "⛔🐦 No Entry – Seagull Nesting Area",
    cameraPosition: [-15, 65, 80],
  },
  {
    id: "Emergency Board – Nearest Hospital Phone Number",
    position: [-57, 3, 22],
    label: "NEmergency Board – Nearest Hospital Phone Number",
    icon: "📞",
    content: "📞🏥 Emergency Board – Nearest Hospital Phone Number",
  },
  {
    id: "No Entry – Fuel Storage Area",
    position: [-50, 3, 0],
    label: "No Entry – Fuel Storage Area",
    icon: "⛽",
    content: "⛔⛽ No Entry – Fuel Storage Area",
    cameraPosition: [0, 100, 35],
  },
  {
    id: "H&S Board (Health & Safety)",
    position: [45, 3, -15],
    label: "H&S Board (Health & Safety)",
    icon: "⛑️",
    content:
      "• Lifebuoy with rope: 🛟\n       • First aid kit + assigned personnel list: 💊📜",
    cameraPosition: [60, 150, 80],
  },
  {
    id: "Safety Board",
    position: [-50, 3, 65],
    label: "Safety Board",
    icon: "📢",
    content:
      "• Evacuation assembly point 🚨\n• First aid kit 💊🩹\n• Fire extinguisher 🔥🧯\n• Fire blanket 🧯🛡️\n",
    cameraPosition: [-50, 80, 150],
  },
  {
    id: "Construction Safety Mirror",
    position: [-62, 10, 22],
    label: "Construction Safety Mirror",
    icon: "🔍",
    content: "Construction Safety Mirror🔍👷‍♂️\n",
    cameraPosition: [0, 120, 35],
  },
  {
    id: "34f5fcad-3186-4c5f-881a-023b79a0d78b",
    label: "Smoking place",
    icon: "🚬",
    content: "Designated area for smoking",
    position: [-31.3459545714309, 0, 43.5630976186153],
    cameraPosition: [3.1689753366544693, 86.02580093384782, 32.98289069805684],
  },
];
export const PUBLIC_GLB = { label: "Building", url: "/models/building.glb" };
