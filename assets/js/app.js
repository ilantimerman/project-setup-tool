var authenticationSuccess = function() {
    console.log('Successful authentication');
  };
  
  var authenticationFailure = function() {
    console.log('Failed authentication');
  };

  window.Trello.authorize({
    type: 'popup',
    name: 'Getting Started Application',
    scope: {
      read: 'true',
      write: 'true' },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
  });

  var myList = '61f1d40a93852c1b9f88152a';

var creationSuccess = function (data) {
  console.log('Card created successfully.');
  console.log(JSON.stringify(data, null, 2));
};

var newCard = {
  name: 'Hello beautiful',
  desc: 'This is the description of our new card.',
  // Place this card at the top of our list
  idList: myList,
  pos: 'top'
};

window.Trello.post('/cards/', newCard, creationSuccess);

var id = window.Trello.card.getId();
alert(id);