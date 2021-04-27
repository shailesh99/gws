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
