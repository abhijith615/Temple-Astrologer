/**
 * Astro Thangabharthi — Booking enquiry endpoint (Google Apps Script)
 * -------------------------------------------------------------------
 * Receives submissions from the "Book Now" form, appends each one as a
 * row in the bound Google Sheet, and emails a notification.
 *
 * SETUP
 *  1. Create a new Google Sheet (this will store the bookings).
 *  2. In that sheet: Extensions -> Apps Script.
 *  3. Delete any sample code, paste ALL of this file, and Save.
 *  4. Deploy -> New deployment -> type "Web app".
 *       - Description : Booking endpoint
 *       - Execute as  : Me (your Google account)
 *       - Who has access : Anyone
 *     Deploy, then Authorize access when prompted.
 *  5. Copy the Web app URL that ends in /exec.
 *  6. Put that URL in the website form (see BOOKING_ENDPOINT in
 *     src/app/book-consultation/BookingForm.tsx).
 *
 * NOTE: When you change this code, create a NEW deployment version (or
 * "Manage deployments" -> edit -> new version) for changes to go live.
 */

// The email address that should receive booking notifications.
var NOTIFY_EMAIL = 'astrothangabharathi@gmail.com';

// The tab (sheet) name used to store bookings.
var SHEET_NAME = 'Bookings';

// Columns written to the sheet, in order. The keys must match the form
// field "name" attributes sent by the website.
var FIELDS = [
  'Service',
  'Full Name',
  'Gender',
  'Date of Birth',
  'Time of Birth',
  'Place of Birth',
  'WhatsApp Number',
  'email',
  'Country',
  'Preferred Language',
  'Consultation Fee',
  'Preferred Payment',
  'Question or Concern'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000); // avoid two submissions writing at once

    var data = parseRequest_(e);

    // Honeypot: silently accept but do not record spam bots.
    if (data.botcheck) {
      return jsonOutput_({ success: true });
    }

    var sheet = getSheet_();

    // Write the header row the first time.
    if (sheet.getLastRow() === 0) {
      var header = ['Timestamp'].concat(FIELDS.map(prettyLabel_));
      sheet.appendRow(header);
      sheet.getRange(1, 1, 1, header.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var row = [new Date()].concat(FIELDS.map(function (key) {
      return data[key] != null ? data[key] : '';
    }));
    sheet.appendRow(row);

    sendNotification_(data);

    return jsonOutput_({ success: true, message: 'Booking received' });
  } catch (err) {
    return jsonOutput_({ success: false, message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// A quick health-check you can open in the browser.
function doGet() {
  return jsonOutput_({ status: 'ok', message: 'Booking endpoint is live' });
}

/* ---------- helpers ---------- */

function parseRequest_(e) {
  // Supports form-encoded (URLSearchParams / FormData) and JSON bodies.
  if (e && e.postData && e.postData.type === 'application/json') {
    try { return JSON.parse(e.postData.contents) || {}; } catch (x) { return {}; }
  }
  return (e && e.parameter) ? e.parameter : {};
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function prettyLabel_(key) {
  return key === 'email' ? 'Email' : key;
}

function sendNotification_(data) {
  var name = data['Full Name'] || 'Website visitor';
  var replyTo = data['email'] || NOTIFY_EMAIL;
  var lines = FIELDS.map(function (key) {
    return prettyLabel_(key) + ': ' + (data[key] || '—');
  });
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: replyTo,
    subject: 'New Consultation Booking — ' + name,
    body: 'A new booking enquiry was received from the website:\n\n' + lines.join('\n')
  });
}

function jsonOutput_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
