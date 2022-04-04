import { keyframes, styled } from '../../../stitches.config';

const ripple = keyframes({
  '0%': {
    top: '36px',
    left: '36px',
    width: 0,
    height: 0,
    opacity: 1,
  },
  '100%': {
    top: '0px',
    left: '0px',
    width: '72px',
    height: '72px',
    opacity: 0,
  },
});
const SpinnerRipple = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',

  '& div': {
    position: 'absolute',
    border: '4px solid #fff',
    opacity: 1,
    borderRadius: '50%',
    animation: `${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
  },

  '& div:nth-child(2)': {
    animationDelay: '-0.5s',
  },
});

const Spinner = () => {
  return (
    <SpinnerRipple>
      <div></div>
      <div></div>
    </SpinnerRipple>
  );
};

export default Spinner;
