var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeaponSchema =
    new Schema({
            model: String,
            type: String,
            damage: String,
            armor_piercing: String,
            firing_modes: String,
            ammo_type: String,
            recoil_compensation: String,
          },
        {
            collection: 'Weapons',
          }
    );

module.exports = mongoose.model('Weapon', WeaponSchema);
