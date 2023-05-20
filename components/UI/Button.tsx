import theme from '@/styles/theme';
import { styled } from 'styled-components';

type ColorStyle = 'red' | 'blue' | 'standard';

interface Props {
  color: ColorStyle;
}

const handleStyleType = (type: ColorStyle) => {
  switch (type) {
    case 'red':
      return `
      background: ${theme.colors.olympic_red};
      color: ${theme.colors.background};
  `;
    case 'blue':
      return `
      background: ${theme.colors.olympic_blue};
      color: ${theme.colors.background};
  `;
    default:
      return `
      background: ${theme.colors.background};
      color: ${theme.colors.primary};
  `;
  }
};

export const Button = styled.button<Props>`
  border-radius: ${theme.borderRadius.button};
  border: none;
  cursor: pointer;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  font-weight: ${theme.fontWeight.regular};
  ${({ color }) => handleStyleType(color)};
`;
