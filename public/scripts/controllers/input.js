myApp.controller('Input', ['$scope', '$location', 'UserFactory', function
  ($scope, $location, UserFactory) {

    console.log('Input controller!');

    $scope.userFactory = UserFactory;

    //The array for all the weapon objects for the character
    $scope.weaponsArray = [];

    //The object to store the character information for saving to the database
    $scope.character = {};

    //The object to store the currently input weapon information
    $scope.currentWeapon = {
      model: '',
      type: '',
      damage: '',
      armor_piercing: '',
      firing_modes: '',
      ammo_type: '',
      recoil_compensation: '',
      accuracy: '',
      weapon_notes: '',
    };

    //$scope.skills = [];

    //Add the input weapon to the weaponsArray when the addWeapon button is clicked
    $scope.addWeapon = function () {
        $scope.weaponsArray.push($scope.currentWeapon);

        $scope.currentWeapon = {
          model: '',
          type: '',
          damage: '',
          armor_piercing: '',
          firing_modes: '',
          ammo_type: '',
          recoil_compensation: '',
          accuracy: '',
          weapon_notes: '',
        };

        console.log('input.js Weapons Array ', $scope.weaponsArray);
      };

    $scope.deleteWeapon = function (index) {
        console.log(index);
        $scope.weaponsArray.splice(index, 1);
      };

    $scope.saveChar = function () {

        //Adding values to the stun and physical track arrays
        // $scope.databaseStunTrack = [];
        // $scope.databasePhysicalTrack = [];

        // for (var i = 0; i < $scope.charPhysicalTrack; i++) {
        //   $scope.databasePhysicalTrack.push({ value: false });
        // }

        // for (var j = 0; j < $scope.charStunTrack; j++) {
        //   $scope.databaseStunTrack.push({ value: false });
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
            stun_track: $scope.charStunTrack,
            armor: $scope.charArmor,
            character_notes: $scope.charNotes,
            weapon: $scope.weaponsArray,

            //skills: $scope.skills,

          };

        console.log(character);
        $scope.userFactory.factorySaveNpc(character);
        $scope.trackerView();
      };

    $scope.trackerView = function () {
        $location.path('tracker');
      };
  }]); //jscs:ignore requireTrailingComma
