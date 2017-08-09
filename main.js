'use strict';


var saveData = function(db, props) {
    // Get a reference to the database service
    var database = firebase.database();
    var ref = database.ref(db);
    ref.push(props);
}

var getData = function(db, id) {
    var database = firebase.database();
    var ref = database.ref(db);
    return ref.getById(id)
}

// Initializes FriendlyChat.
function FlavourTheserous() {
  //this.checkSetup();

  // Shortcuts to DOM Elements.
  this.ingredientList = document.getElementById('messages');
  //this.messageForm = document.getElementById('message-form');
  //this.messageInput = document.getElementById('message');
  //this.submitButton = document.getElementById('submit');
  //this.submitImageButton = document.getElementById('submitImage');
  //this.imageForm = document.getElementById('image-form');
  //this.mediaCapture = document.getElementById('mediaCapture');
  //this.userPic = document.getElementById('user-pic');
  //this.userName = document.getElementById('user-name');
  this.signInButton = document.getElementById('sign-in');
  this.signOutButton = document.getElementById('sign-out');
  //this.signInSnackbar = document.getElementById('must-signin-snackbar');

  // Saves message on form submit.
  //this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
  //this.signOutButton.addEventListener('click', this.signOut.bind(this));
  //this.signInButton.addEventListener('click', this.signIn.bind(this));

  // Toggle for the button.
  //var buttonTogglingHandler = this.toggleButton.bind(this);
  //this.messageInput.addEventListener('keyup', buttonTogglingHandler);
  //this.messageInput.addEventListener('change', buttonTogglingHandler);

  this.initFirebase();
}

FlavourTheserous.prototype.initFirebase = function() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCbFSJYaQsgSspGlKkn4NJ_1ko3CtkoSqo",
      authDomain: "the-silk-route.firebaseapp.com",
      databaseURL: "https://the-silk-route.firebaseio.com",
      projectId: "the-silk-route",
      storageBucket: "the-silk-route.appspot.com",
      messagingSenderId: "563395346543"
    };
      
    firebase.initializeApp(config);


    var tags = ["Meaty", "Roasted", "Floral Fruit", "Berry and Bush", "Citrusy", "Creamy Fruity", "Fresh Fruity", "Woodland", "Spicy", "Green and Grassy", "Brine and Salt", "Marine", "Sulfurous", "Musterdy", "Earthy", "Cheesy"];
    
    for (var x in tags) {
        console.log(x);
        saveData("tags", x);
    }
}

// Loads ingredient list
FlavourTheserous.prototype.ingredientList = function() {
    this.ingredients = this.database.ref('ingredients');
};

// Checks that the Firebase SDK has been correctly setup and configured.
FlavourTheserous.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ');
  }
};

window.onload = function() {
  window.flavourTheserous = new FlavourTheserous();
};
