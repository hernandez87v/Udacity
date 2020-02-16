// Object Literals

var sister = {
  name: 'Sarah',
  age: 23,
  parents: ['alice', 'andy'],
  siblings: ['julia'],
  favoriteColor: 'purple',
  pets: true,
  paintPicture: function() {
    return 'Sarah paints!';
  }
};
// two equivalent ways to use the key to return its value
sister['parents']; // returns [ "alice", "andy" ]
sister.parents; // also returns ["alice", "andy"]
sister.paintPicture(); // returns function
sister.name; // returns name property
