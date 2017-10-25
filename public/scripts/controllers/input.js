myApp.controller('Input', ['$scope', '$location', 'UserFactory', function
  ($scope, $location, UserFactory) {

    console.log('Input controller!');

    $scope.userFactory = UserFactory;
    $scope.character = {};
    $scope.weaponsArray = [];

    //$scope.skills = [];

    //Add the input weapon to the weaponsArray when the addWeapon button is clicked
    $scope.addWeapon = function (weapon) {
        $scope.weaponsArray.push(angular.copy(weapon));
      };

    $scope.saveChar = function () {

        //Adding values to the stun and physical track arrays
        // $scope.databaseStunTrack = [];
        // $scope.databasePhysicalTrack = [];

        // for (var i = 0; i < $scope.charPhysicalTrack; i++) {
        //   $scope.databasePhysicalTrack.push(false);
        // }

        // for (var j = 0; j < $scope.charStunTrack; j++) {
        //   $scope.databaseStunTrack.push(false);
        // }

        // console.log($scope.databaseStunTrack);
        // console.log($scope.databasePhysicalTrack);

        character = {
            source: 'custom',
            name: $scope.charName,
            metatype: $scope.charMetatype,
            body: $scope.charBody,
            agility: $scope.charAgility,
            reaction: $scope.charReaction,
            strength: $scope.charStrength,
            willpower: $scope.charWillpower,
            logic: $scope.charLogic,
            intuition: $scope.charIntuition,
            charisma: $scope.charCharisma,
            edge: $scope.charEdge,
            magic_resonance: $scope.charMagicOrResonance,
            essence: $scope.charEssence,
            initiative: $scope.charInitiative,
            matrix_initiative: $scope.charMatrixInitiative,
            astral_initiative: $scope.charAstralInitiative,
            composure: $scope.charComposure,
            judge_intent: $scope.charJudgeIntent,
            memory: $scope.charMemory,
            lift_carry: $scope.charLiftCarry,
            movement: $scope.charMovement,
            physical_limit: $scope.charPhysicalLimit,
            mental_limit: $scope.charMentalLimit,
            social_limit: $scope.charSocialLimit,
            physical_track: $scope.charPhysicalTrack,

            // current_health: $scope.databasePhysicalTrack,
            stun_track: $scope.charStunTrack,

            // current_stun: $scope.databaseStunTrack,
            armor: $scope.charArmor,
            character_notes: $scope.charNotes,

            //skills: $scope.skills,

          };
        $scope.userFactory.factorySaveNpc(character);
        $scope.trackerView();
      };

    $scope.trackerView = function () {
        $location.path('tracker');
      };
  }]); //jscs:ignore requireTrailingComma
