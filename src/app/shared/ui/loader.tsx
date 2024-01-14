import { styled } from '@mui/system';

const Spinner = styled('span')({
  width: '48px',
  height: '48px',
  display: 'inline-block',
  position: 'relative',
  '&::before': {
    content: '""',
    boxSizing: 'border-box',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid #1C212D',
    position: 'absolute',
    left: 0,
    top: 0,
    animation: 'animloader 2s linear infinite',
  },
  '&::after': {
    content: '""',
    boxSizing: 'border-box',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid #1C212D',
    position: 'absolute',
    left: 0,
    top: 0,
    animation: 'animloader 2s linear infinite',
    animationDelay: '1s',
  },
  '@keyframes animloader': {
    '0%': {
      transform: 'scale(0)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0,
    },
  },
});

const SpinnerV2 = styled('span')({
  width: '48px',
  height: '48px',
  display: 'inline-block',
  position: 'relative',
  '&::before': {
    content: '""',
    boxSizing: 'border-box',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#1C212D',
    position: 'absolute',
    left: 0,
    top: 0,
    animation: 'animloader 2s linear infinite',
  },
  '&::after': {
    content: '""',
    boxSizing: 'border-box',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#1C212D',
    position: 'absolute',
    left: 0,
    top: 0,
    animation: 'animloader 2s linear infinite',
    animationDelay: '1s',
  },
  '@keyframes animloader': {
    '0%': {
      transform: 'scale(0)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0,
    },
  },
});

const Wrapper = styled('span')({
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100vw - 240px)',
  height: 'calc(100vh - 80px)',
});

export const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};
