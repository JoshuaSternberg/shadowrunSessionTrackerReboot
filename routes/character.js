var Character = require('../models/character');
var express = require('express');
var Weapon = require('../models/weapon');
var router = express.Router();

//Post new npc to the database
router.post('/', function (req, res) {
    console.log('character.js - log the whole body object: ', req.body);

    // // Get the correct values in the stun and physical arrays
    var healthArray = [];
    for (var i = 0; i < req.body.physical_track; i++) {
      healthArray.push(({ value: false }));
    }

    var stunArray = [];
    for (var j = 0; j < req.body.stun_track; j++) {
      stunArray.push(({ value: false }));
    }

    var skillsArray = [];
    for (var k = 0; k < req.body.skills.length; j++) {
      skillsArray.push(req.body.skills[k]);
    }

    console.log('character.js health ', healthArray);
    console.log('character.js stun ', stunArray);
    console.log('character.js name', req.body.name);
    console.log('character.js weapons', req.body.weapon);
    console.log('character.js weapons array length', req.body.weapon.length);
    console.log('character.js skills array', req.body.skills);
    console.log('character.js skills array variable', skillsArray);

    // var weaponArray = [];
    // for (var i = 0; i < req.body.physical_track; i++) {
    //   healthArray.push(({ value: false }));
    // }

    var addNpc = new Character({
        name: req.body.name,
        source: req.body.source,
        metatype: req.body.metatype,
        body: req.body.body,
        reaction: req.body.reaction,
        strength: req.body.strength,
        willpower: req.body.willpower,
        logic: req.body.logic,
        intuition: req.body.intuition,
        charisma: req.body.charisma,
        edge: req.body.edge,
        magic_resonance: req.body.magic_resonance,
        essence: req.body.essence,
        initiative: req.body.initiative,
        matrix_initiative: req.body.matrix_initiative,
        astral_initiative: req.body.astral_initiative,
        composure: req.body.composure,
        judge_intent: req.body.judge_intent,
        memory: req.body.memory,
        lift_carry: req.body.lift_carry,
        movement: req.body.movement,
        physical_limit: req.body.physical_limit,
        mental_limit: req.body.mental_limit,
        social_limit: req.body.social_limit,
        physical_track: req.body.physical_track,
        current_stun: stunArray,
        stun_track: req.body.stun_track,
        current_health: healthArray,
        armor: req.body.armor,
        character_notes: req.body.agility,
        weapon: req.body.weapon,
        skills: skillsArray,

      });

    //post new blog post
    addNpc.save(function (err, data) {
        if (err) {
          console.log('ERROR:', err);
        }

        Character.find({}, function (err, data) {
            if (err) {
              console.log('ERROR:', err);
            }

            res.send(data);

          });
      });
  });

//get all the pre-made npcs in the collection
router.get('/', function (req, res) {
    Character.find({}, function (err, data) {
        if (err) {
          console.log('ERROR:', err);
        }

        res.send(data);

      });
  });

module.exports = router;
