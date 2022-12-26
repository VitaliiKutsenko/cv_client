import { colors } from './themeCollections/colors';
import { screensWidth } from './themeCollections/screensWitdh';
import { offsets } from './themeCollections/offsets';
import { auth } from './themeCollections/auth';

export const buttons = {
  radius: '5px',
  fontSize: '18px',
  padding: '5px',
  svg: { width: '18px' },
};

export const modalTheme = {
  background: 'rgba(109, 109, 109, 0.5)',
  backdropFilter: 'blur(3px)',
};
export const accentColor = { color: 'coral' };

export const theme = {
  border: '10px',
  colors,
  screensWidth,
  offsets,
  buttons,
  modalTheme,
  auth,
  accentColor,
};
