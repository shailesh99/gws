/*
To delete all users who have never logged into GWS; in the GWS admin console, users section, download all users to a Google spreadsheet.
Include all columns.
Then sort the data in the spreadsheet and delete all the user rows who have logged on at least once, and keep only the users who have never logged in.
Rename the worksheet to "NeverLoggedIn".

You'll get the id of spreadsheet from it's URL
For example if the url of the spreadsheet is 
https://docs.google.com/spreadsheets/d/1yAibs4ck4eI3OUu50i33_fRly_za1YFwvtLtYOCuCBc/edit#gid=18683454
the id is 1yAibs4ck4eI3OUu50i33_fRly_za1YFwvtLtYOCuCBc


ref:https://alicekeeler.com/2019/10/10/bulk-removing-users-from-g-suite-admin/
*/

function deleteUsers() {
  var ss = SpreadsheetApp.openById('1yAibs4ck4eI3OUu50i33_fRly_za1YFwvtLtYOCuCBc');
  var sheet = ss.getSheetByName('NeverLoggedIn');
  var data = sheet.getDataRange().getValues();
  
  var len = data.length;
  
  for (var i=1; i<len; i++){
   var user = data[i][2];
    Logger.log(user);
  
    try{
      AdminDirectory.Users.remove(user) 
    }
    catch(err){}
  }
}
