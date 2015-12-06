(function() {
var app = angular.module('properties', ['ngAnimate']);

  app.controller('propertiesController', function($scope, $http) {

    $scope.rooms = {
      "deluxe": {
          "friends": [
              "Bob Smith",
              "Jane Doe",
              "Bubba Hyde",
              "Betsy Toheavens"
          ],
          "title": "Deluxe",
          "subhead": "Bigger  and better room",
          "facilities": [
            "TV",
            "WIFI",
            "Table and chairs",
            "Microwave",
            "Laundry",
            "CCTV"
          ],
          "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
      },
      "shared": {
          "friends": [
              "Bob Smith"
          ],
          "title": "Shared",
          "subhead": "Room sharing",
          "facilities": [
            "TV",
            "Microwave",
            "WIFI",
            "Laundry"
          ],
          "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
      },
      "animalfriendly": {
          "friends": [
              "Bob Smith",
              "Jane Doe",
              "Bubba Hyde"
          ],
          "title": "Animal Friendly",
          "subhead": "Accomidation for animal lovers",
          "facilities": [
            "WIFI",
            "Microwave"
          ],
          "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
      },
      "superdeluxe": {
          "friends": [
              "Bob Smith",
              "Jane Doe"
          ],
          'title': "Super Deluxe",
          "subhead": "Even better than deluxe",
          "facilities": [
            "Laundry",
            "WIFI",
            "CCTV"
          ],
          "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
      },
      "another": {
          "friends": [],
          "title": "Another Room",
          "subhead": "Another room type",
          "facilities": [
            "Microwave"
          ],
          "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
      }
    }

    $scope.tab = $scope.rooms.deluxe;

    $scope.selectTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.isActive = function(checkTab) {
      return $scope.tab === checkTab;
    };

    $scope.showFriends = function(friends) {
      var friendsList = friends.sort();
      var friendsListLength = friendsList.length;
      var firstPerson = friendsList[0];
      var secondPerson = friendsList[1] || '';
      var otherPeople = '';
      var ending = ' have stayed here';

      if(friendsListLength === 0) {
        return;
      } else if(friendsListLength === 1) {
        ending = ' has stayed here';
      } else if (friendsListLength === 2) {
        secondPerson = ' and ' + friendsList[1];
      } else if (friendsListLength === 3){
        secondPerson = ', ' + friendsList[1];
        otherPeople = ' and ' + (friendsListLength - 2) + ' other friend';
      } else {
        secondPerson = ', ' + friendsList[1];
        otherPeople = ' and ' + (friendsListLength - 2) + ' other friends';
      }
      return firstPerson + secondPerson + otherPeople + ending;
    };

  });
})();
