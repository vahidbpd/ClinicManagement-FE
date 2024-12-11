import { fromDate } from "@internationalized/date";

export const getTodayDate = () => {
     return fromDate(
        new Date(new Date().toISOString().split("T")[0]),
        "Asia/Tehran"
      );
}