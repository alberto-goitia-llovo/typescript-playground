import { DateTime } from "luxon";
const now = DateTime.now();
console.log(now);
console.log(now.toISO(), "toISO");
console.log(now.toISODate(), "toISODate");
console.log(now.toISOTime(), "toISOTime");
console.log(now.toJSDate(), "toJSDate");
console.log(now.toJSON(), "toJSON");
console.log(now.toLocal(), "toLocal");
