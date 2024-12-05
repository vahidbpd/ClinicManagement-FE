import { doctorWorkSchema } from "@/schema";
import { z } from "zod";

const toTotalMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const isStartEarlierThanEnd = (start: string, end: string): boolean => {
  const startTotalMinutes = toTotalMinutes(start);
  const endTotalMinutes = toTotalMinutes(end);

  return startTotalMinutes < endTotalMinutes;
};

export function isTimePeriodOverlapping(
  existingPeriods: z.infer<typeof doctorWorkSchema>[],
  newPeriod: z.infer<typeof doctorWorkSchema>
): boolean {
  const { day: newDay, startAt: newStart, endAt: newEnd } = newPeriod;

  const newStartTotal = toTotalMinutes(newStart);
  const newEndTotal = toTotalMinutes(newEnd);

  for (const period of existingPeriods) {
    const {
      day: existingDay,
      startAt: existingStart,
      endAt: existingEnd,
    } = period;

    // Check if the days are the same
    if (newDay === existingDay) {
      const existingStartTotal = toTotalMinutes(existingStart);
      const existingEndTotal = toTotalMinutes(existingEnd);

      // Check for overlap
      if (
        newStartTotal < existingEndTotal &&
        newEndTotal > existingStartTotal
      ) {
        return true; // Overlap found
      }
    }
  }

  return false; // No overlap
}
