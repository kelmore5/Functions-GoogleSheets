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

function generalTimeConversion(hours) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getActiveRange();
  
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  for (var i = 1; i <= numRows; i++) {
    for (var j = 1; j <= numCols; j++) {
      var newDate = new Date(Date.parse(range.getCell(i,j).getValue()));
      newDate = new Date(newDate.getTime() +  (hours * 60 * 60 * 1000));
      range.getCell(i, j).setValue(newDate);
    }
  }
}

function convert_PDT_to_UTC2() {
  generalTimeConversion(9);
}

function convert_UTC_to_UTC2() {
  generalTimeConversion(2);
}

function convert_AEST_to_UTC2() {
  generalTimeConversion(-8);
}
