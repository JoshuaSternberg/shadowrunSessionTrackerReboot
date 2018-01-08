myApp.factory('UserFactory', ['$http', function ($http) {

    //Stores the character data retrieved from the database
    var characterList = [];

    //Stores the session data retreived from the database
    var sessionList = [];

    //Stores the currently displayed pre-made NPC information
    var currentPreMadeNpcList = [];

    //Stores the currently displayed custom NPC information
    var currentCustomNpcList = [];

    //
    var trackerStateSave = function () {
    };

    //The call to get the pre-made npcs from the similarly named collection from the database
    var retrieveAllNpcs = function () {
        var promise = $http.get('/preMadeNpcs').then(function (response) {
            characterList = response.data;
          });

        return promise;
      };

    // save the npc to the database
    var saveNpc = function (npc) {
        console.log('userFactory npc object: ', npc);
        $http.post('/preMadeNpcs', npc).then(function (response) {
        });
      };

    //Save the current session to the database
    var saveSession = function (custom, preMade) {
        var sessionArray = custom.concat(preMade);
        var sessionObject = { snapshot_name: 'test', snapshot: sessionArray };
        $http.post('/snapshot', sessionObject);
      };

    //var retrieveSessions = function (id)    :old code, id seemingly not required due-
    //to bypassing all the interior code
    //get the list of sessions based on the logged in user to populate the dropdown
    var retrieveSessions = function () {
        var promise = $http.get('/snapshot').then(function (response) {
            sessionList = response.data;
          });

        return promise;
      };

    //public exposed functions
    var publicFunctions = {
        //Get the entire database list of npcs
        factoryRetrieveAllNpcs: function () {
            return retrieveAllNpcs();
          },

        //expose the preMadeNpcList to the rest of the program
        factoryCharacterList: function () {
            return characterList;
          },

        //call the function to save a new npc to the database
        factorySaveNpc: function (npc) {
            return saveNpc(npc);
          },

        //Take in the custom NPC and pre-made NPC arrays and call the function to save
        //them to the database
        factorySaveSession: function (custom, preMade) {
            return saveSession(custom, preMade);
          },

        //Retrieve all saved sessions for the user
        factoryRetrieveSessions: function () {
            return retrieveSessions();
          },

        //expose the sessionList
        factoryRetrieveSessionsList: function () {
            return sessionList;
          },

        //Expose the currentCustomNpcList storage variable to the program
        factoryStoreCurrentTrackerSessionCustomNpcList: function () {
            return currentCustomNpcList;
          },

        //Expose the currentPreMadeNpcList storage variable to the program
        factoryStoreCurrentTrackerSessionPreMadeNpcList: function () {
            return currentPreMadeNpcList;
          },
      };

    return publicFunctions;

  }]); //jscs:ignore
