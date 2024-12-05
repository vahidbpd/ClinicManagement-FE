type TimeValue = {
  hour: number;
  minute: number;
  second?: number; // Optional
  // Other properties that may be required
};

export function parseTimeString(timeString: string): TimeValue {
  const [hour, minute, second] = timeString.split(":").map(Number);

  return {
    hour,
    minute,
    second, // Optional
  };
}
