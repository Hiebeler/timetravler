import { TimePeriodDifficulty, timePeriods1900ToToday, timePeriodsHistoricalEasy, timePeriodsHistoricalHard, timePeriodsHistoricalMedium, timePeriodsHistoricalMilestones } from "@/data/timePeriods";
import { TimePeriod } from "@/interfaces/timePeriod.interface";

export const getTimePeriods = (mode: TimePeriodDifficulty): TimePeriod[] => {
    switch (mode) {
        case TimePeriodDifficulty.Easy:
            return timePeriodsHistoricalEasy
        case TimePeriodDifficulty.Medium:
            return timePeriodsHistoricalMedium;
        case TimePeriodDifficulty.Hard:
            return timePeriodsHistoricalHard;
        case TimePeriodDifficulty.Milestones:
            return timePeriodsHistoricalMilestones;
        case TimePeriodDifficulty.NineteenHundreds:
            return timePeriods1900ToToday;
        default:
            return timePeriodsHistoricalEasy
    }
}