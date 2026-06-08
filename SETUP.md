# Contact Form Setup (5 minutes)

## Step 1 — Gmail App Password

1. Go to **myaccount.google.com → Security**
2. Turn on **2-Step Verification** (if not already on)
3. Search for **"App passwords"** at the top → click it
4. Click **Create** → name it anything (e.g. "DALIMSS Website") → copy the 16-character password
5. Add to `.env.local`:
   ```
   GMAIL_USER=yourname@gmail.com
   GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
   ```

---

## Step 2 — Google Sheet (for lead logging)

### Create the Sheet
1. Go to **sheets.google.com** → create a blank spreadsheet
2. Name it **"DALIMSS Leads"**
3. In Row 1, add these headers:
   `Timestamp | Name | Email | Phone | School Type | State | City | Message`

### Add the script
4. Click **Extensions → Apps Script**
5. Delete everything in the editor and paste this:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.school_type || '',
      data.state || '',
      data.city || '',
      data.message || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

6. Click **Save** (Ctrl+S)
7. Click **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy** → click **Authorize access** → allow it
8. Copy the **Web App URL** and add to `.env.local`:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xxxx/exec
   ```

---

## Step 3 — Local testing

```bash
cp .env.local.example .env.local
# fill in the 3 values above
npm run dev
```

---

## Step 4 — Vercel deployment

In your Vercel project → **Settings → Environment Variables** → add:
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `GOOGLE_SCRIPT_URL`
