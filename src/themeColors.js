// Converted from Swift ThemeColors to JavaScript object

export const ThemeColors = {
    background: '#000000',
    backgroundHeadFoot: '#000000',
    cardBackground: '#000000',
    
    textColor: '#FFFFFF',
    accentRed: '#FF0000',
    accentBlue: '#0000FF',
    accentPurple: '#800080',
    accentGold: '#A57E22'
  };
  
  export const gradient = {
    background: `linear-gradient(135deg, ${ThemeColors.accentRed}, ${ThemeColors.accentBlue})`
  };
  
  // CSS utility for red-blue shadow effect
  export const redBlueShadow = {
    boxShadow: `-1px -1px 0 rgba(255, 0, 0, 0.7), 1px 1px 0 rgba(0, 0, 255, 0.7)`
  };