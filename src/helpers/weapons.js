import { BLUDGE, PIERCE, SLASH } from "./damage_types";
import { D20, D20black, D6, D6black } from "./dice";

let weapons = [
  {
    name: "Battleaxe",
    attackQDice: "1",
    attackDice: D20,
    attackDiceFaces: 20,
    attackDiceBlack: D20black,
    attackSum: 5,
    damageQDice: "1",
    damageDice: D6,
    damageDiceFaces: 6,
    damageDiceBlack: D6black,
    damageSum: 3,
    damageType: SLASH,
  },
  {
    name: "Club",
    attackQDice: "1",
    attackDice: D20,
    attackDiceFaces: 20,
    attackDiceBlack: D20black,
    attackSum: 2,
    damageQDice: "1",
    damageDice: D6,
    damageDiceFaces: 6,
    damageDiceBlack: D6black,
    damageSum: 2,
    damageType: BLUDGE,
  },
  {
    name: "Crossbow (Hand)",
    attackQDice: "1",
    attackDice: D20,
    attackDiceFaces: 20,
    attackDiceBlack: D20black,
    attackSum: 5,
    damageQDice: "1",
    damageDice: D6,
    damageDiceFaces: 6,
    damageDiceBlack: D6black,
    damageSum: 3,
    damageType: PIERCE,
  },
  {
    name: "Crossbow (Heavy)",
    attackQDice: "1",
    attackDice: D20,
    attackDiceFaces: 20,
    attackDiceBlack: D20black,
    attackSum: 5,
    damageQDice: "1",
    damageDice: D6,
    damageDiceFaces: 6,
    damageDiceBlack: D6black,
    damageSum: 3,
    damageType: PIERCE,
  },
];

export default weapons;
