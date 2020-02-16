/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
  name: 'Vlad',
  friends: 50,
  messages: ['Hello', 'Hola', 'Blah'],
  postMessage: function(message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    return facebookProfile.friends++;
  },
  removeFriend: function() {
    return facebookProfile.friends--;
  }
};

console.log(facebookProfile.postMessage());
console.log(facebookProfile.deleteMessage());
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
