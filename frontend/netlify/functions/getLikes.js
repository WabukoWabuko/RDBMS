const { google } = require('googleapis');

exports.handler = async (event, context) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID;
    const range = `${process.env.REACT_APP_SHEET_NAME}!${process.env.REACT_APP_LIKES_RANGE}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values || [];
    const likesCount = values.length;

    return {
      statusCode: 200,
      body: JSON.stringify({ likesCount }),
    };
  } catch (error) {
    console.error('Error fetching likes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch likes' }),
    };
  }
};
