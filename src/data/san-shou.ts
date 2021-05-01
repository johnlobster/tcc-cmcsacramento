// San Shou list of postures


// types

export enum CompassDirectionEnum {
  N = 0,
  NE,
  E,
  SE,
  S,
  SW,
  W,
  NW
}

// translate enumerated direction to a string
export const compassName: (direction: CompassDirectionEnum) => string = (direction) => {
  const names = [
    "North",
    "North East",
    "East",
    "South East",
    "South",
    "South West",
    "West",
    "North West"
  ]
  // return (names[1])
  // return (names[CompassDirectionEnum[direction]])
  return (names[direction])

}

export enum SanShouSideEnum { // This is a two person form, with half moves performed by side A, half by side B
  A,
  B
}
export interface SSListItem {
  index: number;
  bobName: string;
  name?: string;
  description: string;
  direction: CompassDirectionEnum;
  side: SanShouSideEnum;
  
}
export type SSList = SSListItem[]
  
export const sanShouData: SSList = [
  {
    index: 1,
    bobName: "JIN BU CHUEI",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: "*peng* punch to the chin"
  },
  {
    index: 2,
    bobName: "RAISE HANDS",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.B,
    description: "intercepting the *peng* punch with peng block"
  },
  {
    index: 3,
    bobName: "WARD-OFF AND PUNCH",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: "punch to heart or solar plexus"
  },
  {
    index: 4,
    bobName: "BAN CHUEI",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.B,
    description: "*an* punch to lower abdomen"
  },
  {
    index: 5,
    bobName: "SINGLE WHIP",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: "shoulder strike to rib cage"
  },
  {
    index: 6,
    bobName: "HIT TIGER",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "*yang* punch downward to left shoulder blade"
  },
//   ELBOW; West – yang elbow strike to chin

//   8. PUSH; East – slapping down the elbow strike

// 9. UPPERCUT; West – yin punch to chin

// 10. SINGLE WHIP; East – shoulder strike to rib cage
  {
    index: 7,
    bobName: "ELBOW",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "*yang* elbow strike to chin"
  },
  {
    index: 8,
    bobName: "PUSH",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "slapping down the elbow strike"
  },
  {
    index: 9,
    bobName: "UPPERCUT",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "*yin* punch to the chin"
  },
  {
    index: 10,
    bobName: "SINGLE WHIP",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "shoulder strike to rib cage"
  },
//   11. HIT TIGER; South – punch to rib cage

// 12. BACK FIST; North – diagonal back fist to chin

// 13. RAISE HANDS; South – striking the right temple with back of open palm

// 14. PUSH; NorthEast – pushing away arm of open palm

// 15. BACK FIST; SouthWest – completely vertical strike to face(bridge of nose)
  {
    index: 11,
    bobName: "HIT TIGER",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.A,
    description: "punch to rib cage"
  },
  {
    index: 12,
    bobName: "BACK FIST",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.B,
    description: "diagonal back fist to chin"
  },
  {
    index: 13,
    bobName: "RAISE HANDS",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.A,
    description: "striking the right temple with back of open palm"
  },
  {
    index: 14,
    bobName: "PUSH",
    direction: CompassDirectionEnum.NE,
    side: SanShouSideEnum.B,
    description: "pushing away arm of open palm"
  },
  {
    index: 15,
    bobName: "BACK FIST",
    direction: CompassDirectionEnum.SW,
    side: SanShouSideEnum.A,
    description: "completely vertical strike to face(bridge of nose)"
  },
//   16. PARRY AND BAN CHUEI, Northeast – PARRY AND BAN CHUEI

// 17. HORIZONTAL SPLIT, Southeast – forearm to the neck and head

// 18. WILD HORSE PARTS ITS MANE, Northwest – forearm to the armpit and shoulder

// 19. HIT TIGER, Southeast – horizontal punch to the ribs

// 20. BIG ROLL - BACK, West – attacking elbow with ward - off
  {
    index: 16,
    bobName: "PARRY AND BAN CHUEI",
    direction: CompassDirectionEnum.NE,
    side: SanShouSideEnum.B,
    description: "punch to lower abdomen"
  },
  {
    index: 17,
    bobName: "HORIZONTAL SPLIT",
    direction: CompassDirectionEnum.SE,
    side: SanShouSideEnum.A,
    description: "forearm to the neck and head"
  },
  {
    index: 18,
    bobName: "WILD HORSE PARTS ITS MANE",
    direction: CompassDirectionEnum.NW,
    side: SanShouSideEnum.B,
    description: "forearm to the armpit and shoulder"
  },
  {
    index: 19,
    bobName: "HIT TIGER",
    direction: CompassDirectionEnum.SE,
    side: SanShouSideEnum.A,
    description: "horizontal punch to the ribs"
  },
  {
    index: 20,
    bobName: "BIG ROLL-BACK",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.B,
    description: "attacking elbow with ward-off"
  },
//   21. SHOULDER, East – attacking centerline of B’s torso

// 22. PUSH, North – attacking A’s body, intercepted by A’s ward - off

// 23. WHITE CRANE SPREADS ITS WINGS, South – kick to the midsection

// 24. JIN BU CHUEI, North – attacking the solar plexus or lower

// 25. HORIZONTAL SPLIT, South – aimed at the neck and head
  {
    index: 21,
    bobName: "SHOULDER",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: "attacking centerline of B’s torso"
  },
  {
    index: 22,
    bobName: "PUSH",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.B,
    description: "attacking A’s body, intercepted by A’s ward-off"
  },
  {
    index: 23,
    bobName: "WHITE CRANE SPREADS ITS WINGS",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.A,
    description: "kick to the midsection"
  },
  {
    index: 24,
    bobName: "JIN BU CHUEI",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.B,
    description: "attacking the solar plexus or lower"
  },
  {
    index: 25,
    bobName: "HORIZONTAL SPLIT",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.A,
    description: "aimed at the neck and head"
  },
  
//   26. FAIR LADY WORKS THE SHUTTLES; North – palm to the chest.

// 27. WARDOFF AND BACKFIST; South – strike to the head.

// 28. WHITE CRANE SPREADS ITS WINGS; North – kick to the midsection.

// 29. SHOULDER; East – intercepted by opponent’s shoulder.

// 30. ROLL BACK; South – flipping opponent forward.
  {
    index: 26,
    bobName: "FAIR LADY WORKS THE SHUTTLES",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.B,
    description: "palm to the chest"
  },
  {
    index: 27,
    bobName: "WARDOFF AND BACKFIST",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.A,
    description: "strike to the head"
  },
  {
    index: 28,
    bobName: "WHITE CRANE SPREADS ITS WINGS",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.B,
    description: "kick to the midsection"
  },
  {
    index: 29,
    bobName: "SHOULDER",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: "intercepted by opponent’s shoulder"
  },
  {
    index: 30,
    bobName: "ROLL BACK",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.B,
    description: "flipping opponent forward"
  },
//   31. ROLLBACK AND PUSH; North – palming the elbow.

// 32. BOX THE EARS; South – aims for the temples.

// 33. PUSH(double); North – closes opponent’s arms with palms on the elbows.

// 34. PARRY AND PUNCH(Lan Chuei); South – striking the body’s center.

// 35. PUSH; South – striking the body’s center.
  {
    index: 31,
    bobName: "ROLLBACK AND PUSH",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.A,
    description: "palming the elbow"
  },
  {
    index: 32,
    bobName: "BOX THE EARS",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.B,
    description: "aims for the temples"
  },
  {
    index: 33,
    bobName: "PUSH(double)",
    direction: CompassDirectionEnum.N,
    side: SanShouSideEnum.A,
    description: "closes opponent’s arms with palms on the elbows"
  },
  {
    index: 34,
    bobName: "PARRY AND PUNCH(Lan Chuei)",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.B,
    description: "striking the body’s center"
  },
  {
    index: 35,
    bobName: "PUSH",
    direction: CompassDirectionEnum.S,
    side: SanShouSideEnum.A,
    description: "striking the body’s center"
  },
//   36. RUB BETWEEN THE ARMS(Wild Horse Parts its Mane); Southeast – strikes the armpit(back of the shoulder)

// 37. PUSH(the shoulder); East

// 38. NEUTRALIZE AND STRIKE WITH PALM; Southwest – palms the head

// 39. NEUTRALIZE AND PUSH; East – pushes opponent’s ward - off

// 40. ELBOW; Southwest – strikes the solar plexus


  {
    index: 36,
    bobName: "RUB BETWEEN THE ARMS(Wild Horse Parts its Mane)",
    direction: CompassDirectionEnum.SE,
    side: SanShouSideEnum.B,
    description: "strikes the armpit(back of the shoulder)"
  },
  {
    index: 37,
    bobName: "PUSH(the shoulder)",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: ""
  },
  {
    index: 38,
    bobName: "NEUTRALIZE AND STRIKE WITH PALM",
    direction: CompassDirectionEnum.SW,
    side: SanShouSideEnum.B,
    description: "palms the head"
  },
  {
    index: 39,
    bobName: "NEUTRALIZE AND PUSH",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.A,
    description: "pushes opponent’s ward-off"
  },
  {
    index: 40,
    bobName: "ELBOW",
    direction: CompassDirectionEnum.SW,
    side: SanShouSideEnum.B,
    description: "strikes the solar plexus"
  },
//   41. SPLIT; Northeast – targeting the head and neck
// 42. ROLL BACK; West – breaking the elbow
// 43. HIT TIGER; West – strikes the shoulder blade
// 44. TURN, STEP, AND ROLL BACK; East – breaking the elbow
// 45. PURSUE AND SHOULDER(left); West – striking the chest
  {
    index: 41,
    bobName: "SPLIT",
    direction: CompassDirectionEnum.NE,
    side: SanShouSideEnum.A,
    description: "targeting the head and neck"
  },
  {
    index: 42,
    bobName: "ROLL BACK",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.B,
    description: "breaking the elbow"
  },
  {
    index: 43,
    bobName: "HIT TIGER",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "strikes the shoulder blade"
  },
  {
    index: 44,
    bobName: "TURN, STEP, AND ROLL BACK",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "breaking the elbow"
  },
  {
    index: 45,
    bobName: "PURSUE AND SHOULDER(left)",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "striking the chest"
  },
//   46. PRESS; East – pressing the shoulder
// 47. SHOULDER(right); West – striking the chest
// 48. NEUTRALIZE AND SHOULDER; East – strikes the opponent’s shoulder
// 49. ELBOW; West – striking the rib cage
// 50. GOLDEN PHEASANT STANDS UP; East – kicking the chest with the knee
  {
    index: 46,
    bobName: "PRESS",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "pressing the shoulder"
  },
  {
    index: 47,
    bobName: "SHOULDER(right)",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "striking the chest"
  },
  {
    index: 48,
    bobName: "NEUTRALIZE AND SHOULDER",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "strikes the opponent’s shoulder"
  },
  {
    index: 49,
    bobName: "ELBOW",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "striking the rib cage"
  },
  {
    index: 50,
    bobName: "GOLDEN PHEASANT STANDS UP",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "kicking the chest with the knee"
  },
//   51. RETREAT AND NEUTRALIZE; West – slaps down B’s hand
// 52. WHITE CRANE SPREADS ITS WINGS; East – heel kick to the chest
// 53. SHOULDER; West – shoulder to the chest
// 54. EMBRACE TIGER; East – attacks the shoulder
// 55. SEPARATE FOOT(right); West – threatens the neck
  {
    index: 51,
    bobName: "RETREAT AND NEUTRALIZE",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "slaps down B’s hand"
  },
  {
    index: 52,
    bobName: "WHITE CRANE SPREADS ITS WINGS",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "heel kick to the chest"
  },
  {
    index: 53,
    bobName: "SHOULDER",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "shoulder to the chest"
  },
  {
    index: 54,
    bobName: "EMBRACE TIGER",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "attacks the shoulder"
  },
  {
    index: 55,
    bobName: "SEPARATE FOOT(right)",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "threatens the neck"
  },
  {
    index: 56,
    bobName: "BRUSH KNEE (defensive)",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "*taiji* formed by foot and hand"
  },
  {
    index: 57,
    bobName: "SEPARATE FOOT (left) ",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "threatens strike to neck"
  }, 
  {
    index: 58,
    bobName: "BRUSH KNEE (defensive)",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "*taiji* formed by foot and hand"
  },
  {
    index: 59,
    bobName: "SHOULDER (right) ",
    direction: CompassDirectionEnum.W,
    side: SanShouSideEnum.A,
    description: "targets back of shoulder joint"
  },
  {
    index: 60,
    bobName: "SHOULDER (right)",
    direction: CompassDirectionEnum.E,
    side: SanShouSideEnum.B,
    description: "targets back of shoulder joint"
  },
]