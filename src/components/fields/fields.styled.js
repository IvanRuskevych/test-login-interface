import styled from 'styled-components';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
export const StyledField = styled.input.attrs({
  autoComplete: 'true',
})`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1.2px solid var(--color-border-prime);
  font-family: BasisGrotesquePro-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  color: var(--color-input-text);

  &.field-email {
    margin-bottom: 25px;
  }
  &.field-psw-hide {
    margin-bottom: 30px;
  }

  &::placeholder {
    color: var(--color-input-placholder);
  }
`;

// Styles for password field wrapper
export const StyledFieldPasswordWrapper = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &.password-set {
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

// Styles for icon wrapper
export const StyledButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 16px;
  background-color: transparent;
`;

export const StyledIconOn = styled(VisibilityOutlinedIcon)`
  color: var(--color-icon-password);
  width: 20px;
  height: 20px;
`;

export const StyledIconOff = styled(VisibilityOffOutlinedIcon)`
  color: var(--color-icon-password);
  width: 20px;
  height: 20px;
`;
