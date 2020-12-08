const TEXT_COLORS = {
  HEADING_COLOR: '#0f2137',
  TEXT_COLOR: '#5d646d',
  DARK_KNIGHT: '#343d48',
};

const BUTTON_COLORS = {
  PRIMARY: '#3f5efb',
  PRIMARY_HOVER: '#3f5efb',
  SECONDARY: '#ff5b60',
  SECONDARY_HOVER: '#FF282F',
};

const ELEMENT_COLORS = {
  LABEL_COLOR: '#767676',
  INACTIVE_FIELD: '#f2f2f2',
  INACTIVE_BUTTON: '#b7dbdd',
  INACTIVE_ICON: '#EBEBEB',
  LIGHT_BG: '#f7f8fd',
  PRIMARY_BOX_SHADOW:
    ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) ',
};

const PRIMARIES = {
  TRANSPARENT: 'transparent',
  BLACK: '#000000',
  WHITE: '#ffffff',
  YELLOW: '#fdb32a',
  YELLOW_HOVER: '#F29E02',
  RED: '#eb4d4b',
};

export const COLORS = {
  ...PRIMARIES,
  ...BUTTON_COLORS,
  ...ELEMENT_COLORS,
  ...TEXT_COLORS,
};
