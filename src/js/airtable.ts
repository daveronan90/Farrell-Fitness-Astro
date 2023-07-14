import airtable from "airtable";

export function stringToTimestamp(timeString: string) {
  const [hour, minute] = timeString.split(":");
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const timestamp = new Date(
    year,
    month,
    day,
    parseInt(hour),
    parseInt(minute)
  ).getTime();

  return timestamp;
}

export const fetchData = async (tableName: string) => {
  const API_KEY = import.meta.env.PUBLIC_API_KEY;
  const BASE = import.meta.env.PUBLIC_BASE;

  const base = new airtable({ apiKey: API_KEY }).base(BASE);
  const res = await base(tableName).select().all();

  let data = res.map(({ _rawJson }) => {
    return _rawJson.fields;
  });

  return data;
};
