

const monthNames = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12"];
const dateObj = new Date(Date.now()+12096e5);
const month = monthNames[dateObj.getMonth()] ;
var day = Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy").split("/",1).toString();
var numberOfX = 0
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const idFile = "private"

function setAllenamento() {
  var cellToWrite = (alphabet[day].toString() + month.toString()).toUpperCase()
  var ss = SpreadsheetApp.openById(idFile);
  ss.getActiveSheet().getRange(cellToWrite).setValue("x");
}
function clearAllenamento() {
  var cellToWrite = (alphabet[day].toString() + month.toString()).toUpperCase()
  var ss = SpreadsheetApp.openById(idFile);
  ss.getActiveSheet().getRange(cellToWrite).clearContent();
}
function getAllenamenti() {
  var ss = SpreadsheetApp.openById(idFile);
  var sheets = ss.getActiveSheet();
  var sheet1A1 = sheets.getDataRange().getValues();
 
  for(var i = 0;i<sheet1A1.length;i++){
    for (var j = 0;j<sheet1A1[i].length;j++){
      if(sheet1A1[i][j]==="x"){
        numberOfX = numberOfX+1
      }
    }
  }
  
var sheet3 = SpreadsheetApp.getActiveSpreadsheet();
SpreadsheetApp.setActiveSheet(sheet3.getSheetByName('app'))
SpreadsheetApp.getActiveSheet().getRange("L6").setValue(numberOfX);
}




