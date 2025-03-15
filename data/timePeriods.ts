import { TimePeriod } from "@/interfaces/timePeriod.interface";

export enum TimePeriodDifficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
  Milestones = "milestones",
  NineteenHundreds = "1900s",
}

export const timePeriodsHistoricalEasy: TimePeriod[] = [
  { name: "Prehistoric Era", startYear: -100000, endYear: -3000 },
  { name: "Ancient Civilizations", startYear: -3000, endYear: -500 },
  { name: "Classical Antiquity", startYear: -500, endYear: 500 },
  { name: "Early Middle Ages", startYear: 500, endYear: 1000 },
  { name: "High & Late Middle Ages", startYear: 1000, endYear: 1500 },
  { name: "Renaissance & Exploration", startYear: 1500, endYear: 1700 },
  { name: "Age of Enlightenment", startYear: 1700, endYear: 1800 },
  { name: "Industrial Revolution", startYear: 1800, endYear: 1900 },
  { name: "World Wars & Interwar", startYear: 1900, endYear: 1950 },
  { name: "Cold War Era", startYear: 1950, endYear: 1990 },
  { name: "Modern Age", startYear: 1990, endYear: 2025 },
];

export const timePeriodsHistoricalMedium: TimePeriod[] = [
  { name: "Prehistoric Era", startYear: -100000, endYear: -5000 },
  { name: "Ancient Egypt", startYear: -3000, endYear: -332 },
  { name: "Classical Greece", startYear: -800, endYear: 146 },
  { name: "Roman Empire", startYear: -27, endYear: 476 },
  { name: "Early Middle Ages", startYear: 476, endYear: 800 },
  { name: "Viking Age", startYear: 800, endYear: 1066 },
  { name: "High Middle Ages", startYear: 1066, endYear: 1300 },
  { name: "Late Middle Ages", startYear: 1300, endYear: 1500 },
  { name: "Renaissance", startYear: 1400, endYear: 1600 },
  { name: "Age of Exploration", startYear: 1500, endYear: 1700 },
  { name: "Industrial Revolution", startYear: 1760, endYear: 1840 },
  { name: "Victorian Era", startYear: 1837, endYear: 1901 },
  { name: "World War I", startYear: 1914, endYear: 1918 },
  { name: "Interwar Period", startYear: 1919, endYear: 1939 },
  { name: "World War II", startYear: 1939, endYear: 1945 },
  { name: "Post-War & Cold War", startYear: 1945, endYear: 1990 },
  { name: "Modern Age", startYear: 1990, endYear: 2025 },
];

export const timePeriodsHistoricalHard: TimePeriod[] = [
  { name: "Early Prehistoric Era", startYear: -100000, endYear: -50000 },
  { name: "Middle Prehistoric Era", startYear: -50000, endYear: -25000 },
  { name: "Late Prehistoric Era", startYear: -25000, endYear: -3000 },
  { name: "Ancient Egypt - Old Kingdom", startYear: -3000, endYear: -2181 },
  { name: "Ancient Egypt - Middle Kingdom", startYear: -2055, endYear: -1650 },
  { name: "Ancient Greece - Archaic Period", startYear: -800, endYear: -500 },
  { name: "Ancient Greece - Classical Period", startYear: -500, endYear: -323 },
  { name: "Roman Republic", startYear: -509, endYear: -27 },
  { name: "Roman Empire - Early Empire", startYear: -27, endYear: 180 },
  { name: "Roman Empire - Crisis of the Third Century", startYear: 235, endYear: 284 },
  { name: "Fall of the Western Roman Empire", startYear: 476, endYear: 480 },
  { name: "Charlemagne's Empire", startYear: 800, endYear: 888 },
  { name: "Hundred Years' War", startYear: 1337, endYear: 1453 },
  { name: "Early Renaissance", startYear: 1300, endYear: 1450 },
  { name: "High Renaissance", startYear: 1490, endYear: 1527 },
  { name: "English Civil War", startYear: 1642, endYear: 1651 },
  { name: "Napoleonic Wars", startYear: 1803, endYear: 1815 },
  { name: "American Civil War", startYear: 1861, endYear: 1865 },
  { name: "World War I - Western Front", startYear: 1914, endYear: 1918 },
  { name: "World War II - European Theatre", startYear: 1939, endYear: 1945 },
  { name: "Post-War & Cold War", startYear: 1945, endYear: 1990 },
  { name: "Post-9/11 Era", startYear: 2001, endYear: 2025 },
];

export const timePeriodsHistoricalMilestones: TimePeriod[] = [
  { name: "The Birth of Agriculture", startYear: -10000, endYear: -8000 },
  { name: "The Construction of the Pyramids of Giza", startYear: -2580, endYear: -2560 },
  { name: "The Founding of Rome", startYear: -753, endYear: -753 },
  { name: "The Battle of Marathon", startYear: -490, endYear: -490 },
  { name: "The Death of Alexander the Great", startYear: -323, endYear: -323 },
  { name: "The Fall of the Western Roman Empire", startYear: 476, endYear: 480 },
  { name: "The Signing of the Magna Carta", startYear: 1215, endYear: 1215 },
  { name: "Columbus Reaches the Americas", startYear: 1492, endYear: 1492 },
  { name: "The Start of the Industrial Revolution", startYear: 1760, endYear: 1780 },
  { name: "The Declaration of Independence (USA)", startYear: 1776, endYear: 1776 },
  { name: "The French Revolution Begins", startYear: 1789, endYear: 1799 },
  { name: "The First Flight by the Wright Brothers", startYear: 1903, endYear: 1903 },
  { name: "World War I Ends", startYear: 1918, endYear: 1918 },
  { name: "The Moon Landing (Apollo 11)", startYear: 1969, endYear: 1969 },
  { name: "The Fall of the Berlin Wall", startYear: 1989, endYear: 1989 },
  { name: "The September 11 Attacks", startYear: 2001, endYear: 2001 },
  { name: "The First Successful Human Cloning (Dolly the Sheep)", startYear: 1996, endYear: 1996 },
  { name: "The Global COVID-19 Pandemic", startYear: 2019, endYear: 2022 },
  { name: "Launch of the iPhone", startYear: 2007, endYear: 2007 },
  { name: "First Human to Mars (speculative)", startYear: 2030, endYear: 2035 },
];

export const timePeriods1900ToToday: TimePeriod[] = [
  { name: "1900-1910", startYear: 1900, endYear: 1910 },
  { name: "1910-1920", startYear: 1910, endYear: 1920 },
  { name: "1920-1930", startYear: 1920, endYear: 1930 },
  { name: "1930-1940", startYear: 1930, endYear: 1940 },
  { name: "1940-1950", startYear: 1940, endYear: 1950 },
  { name: "1950-1960", startYear: 1950, endYear: 1960 },
  { name: "1960-1970", startYear: 1960, endYear: 1970 },
  { name: "1970-1980", startYear: 1970, endYear: 1980 },
  { name: "1980-1990", startYear: 1980, endYear: 1990 },
  { name: "1990-2000", startYear: 1990, endYear: 2000 },
  { name: "2000-2010", startYear: 2000, endYear: 2010 },
  { name: "2010-2020", startYear: 2010, endYear: 2020 },
  { name: "2020-2030", startYear: 2020, endYear: 2030 },
];


