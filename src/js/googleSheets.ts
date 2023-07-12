import { google } from "googleapis";

export default async (sheet: string) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: import.meta.env.private_key,
        client_email: import.meta.env.client_email,
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1bjpOYpzhdxrayasCMIpFw6hvTsX4s6LWNDuQWzUxg54";

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: sheet,
    });
    return getRows.data.values;
  } catch (error) {
    console.error(error);
    return false;
  }
};
