myApp.controller('Tracker', ['$scope', '$location', 'UserFactory', function
  ($scope, $location, UserFactory) {

    console.log('Tracker controller!');

    $scope.userFactory = UserFactory;

    //Stores all character information from the database
    $scope.characterArray = [];

    //Stores all pre made character information that the left display will use
    $scope.preMadeNpcArray = [];

    //Stores all custom npc information that the right side to use
    $scope.customNpcArray = [];

    //Stores all information for the current session
    $scope.sessionArray = [];

    //Get all the npc data
    $scope.userFactory.factoryRetrieveAllNpcs().then(function () {
        $scope.characterArray = $scope.userFactory.factoryCharacterList();
        console.log(' Character Array', $scope.characterArray);
      });

    //Get all the session data for the current user
    $scope.refreshSessionData = function () {
        $scope.userFactory.factoryRetrieveSessions().then(function () {
            $scope.sessionArray = $scope.userFactory.factoryRetrieveSessionsList();

            $scope.populateDropdownBoxes();

            console.log('Session Array ', $scope.sessionArray);
            console.log('Pre-made NPC Array:', $scope.preMadeNpcArray);
            console.log('Custom NPC Arrary ', $scope.customNpcArray);
          });
      };

    $scope.populateDropdownBoxes = function () {

      //Set a default in the dropdown boxes after the data populates
      $scope.selectedSession = $scope.sessionArray[0];

      for (var j = 0; j < $scope.characterArray.length; j++) {
        if ($scope.characterArray[j].source == 'pre-made') {
          $scope.preMadeNpcSelect = $scope.characterArray[j];
          break;
        }
      }

      for (var i = 0; i < $scope.characterArray.length; i++) {
        if ($scope.characterArray[i].source == 'custom') {
          $scope.customNpcSelect = $scope.characterArray[i];
          break;
        }
      }
    };

    $scope.refreshSessionData();

    //Move to the log-in page
    $scope.loginView = function () {
        location.href = '/index.html';
      };

    //Move to the create character (input) page
    $scope.inputView = function () {
        $location.path('input');
      };

    //Add the selected pre-made npc to the preMadeNpcArray when the addPreMadeNpc button is clicked
    $scope.addPreMadeNpc = function (npc) {
        $scope.preMadeNpcArray.push(angular.copy(npc));
      };

    //Add the selected custom npc to the preMadeNpcArray when the addCustomNpc button is clicked
    $scope.addCustomNpc = function (npc) {
        $scope.customNpcArray.push(angular.copy(npc));
      };

    //delete selected pre-made character by index when the delete button it clicked
    $scope.deletePreMadeChar = function (index) {
        console.log(index);
        $scope.preMadeNpcArray.splice(index, 1);
      };

    //delete selected custom character by index when the delete button it clicked
    $scope.deleteCustomChar = function (index) {
        console.log(index);
        $scope.customNpcArray.splice(index, 1);
      };

    //Call the factory functions to save the current data
    $scope.saveSession = function () {
        $scope.userFactory.factorySaveSession($scope.preMadeNpcArray, $scope.customNpcArray);
        $scope.refreshSessionData();
        console.log('Save session button clicked!');
      };

    //for (var i = 0; 0 < $scope.sessionArray.length; i++){}

    $scope.loadSession = function (selectedSession) {
        console.log(selectedSession);
        $scope.preMadeNpcArray = [];
        $scope.customNpcArray = [];
        for (var i = 0; i < $scope.sessionArray.length; i++) {
          console.log(selectedSession._id);
          console.log($scope.sessionArray[i]._id);

          if ($scope.sessionArray[i]._id === selectedSession._id) {
            for (var o = 0; o < $scope.sessionArray[i].snapshot.length; o++) {
              if ($scope.sessionArray[i].snapshot[o].source === 'pre-made') {
                $scope.preMadeNpcArray.push($scope.sessionArray[i].snapshot[o]);
              } else if ($scope.sessionArray[i].snapshot[o].source === 'custom') {
                $scope.customNpcArray.push($scope.sessionArray[i].snapshot[o]);
              }
            }
          }
        }

        console.log('preMadeNpcArray: ' + $scope.preMadeNpcArray);
        console.log('customNpcArray: ' + $scope.customNpcArray);

      };
  }]); // jscs:ignore
