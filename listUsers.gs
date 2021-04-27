/**
 * Lists all the users in a domain sorted by first name.
 */
function listAllUsers() {
  var pageToken;
  var page;
  do {
    page = AdminDirectory.Users.list({
      domain: 'example.com',
      orderBy: 'givenName',
      maxResults: 100,
      pageToken: pageToken
    });
    var users = page.users;
    if (users) {
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        Logger.log('%s (%s)', user.name.fullName, user.primaryEmail);
      }
    } else {
      Logger.log('No users found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}
