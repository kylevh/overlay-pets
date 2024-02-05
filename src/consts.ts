export const kGamesFeatures = new Map<number, string[]>([
  [ // Valorant -----------------------------------------------------------
    21640,
    [
      'me',
      'game_info',
      'match_info',
      'kill',
      'death'
    ]
  ],
]);

export const kGameClassIds = Array.from(kGamesFeatures.keys());

export const kWindowNames = {
  inGame: 'in_game',
  desktop: 'desktop',
  dayCare: 'daycare',
};

export const kHotkeys = {
  toggle: 'overlay_pets_showhide'
};
