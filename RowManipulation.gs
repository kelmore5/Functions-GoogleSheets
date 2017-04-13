function hideRowTest() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var range = sheet.getRange("A1:A5");
  sheet.hideRow(range);
}

function unHideRowTest() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var range = sheet.getRange("A1:A5");
  sheet.unhideRow(range);
}

function copyRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var originRange = sheet.getRange("A1:B1");
  var target = sheet.getRange("A2:B8");
  originRange.copyTo(target);
}
