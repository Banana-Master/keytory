import { color } from '@styles/color.css';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  maxWidth: '540px',
  width: '100%',
  margin: 'auto',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 20px',
});

export const linkStyle = style({
  fontSize: '14px',
  color: color.primary[100],
  textDecoration: 'underline',
});
