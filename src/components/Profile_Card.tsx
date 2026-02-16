import { Box } from '@mui/material';
import LightRays from './Light_Rays';

export default function Profile_Card() {
  return (
    <Box
      sx={{
        height: { xs: '360px', md: '55vh' },
        width: { xs: '280px', md: '31vh' },
        borderRadius: 8,
        overflow: 'clip',
        position: 'relative',
        backgroundImage: 'url(/me-transparent.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <LightRays
        raysOrigin='top-center'
        raysColor='#ffffff'
        raysSpeed={0.5}
        lightSpread={0.5}
        rayLength={3}
        followMouse={false}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
    </Box>
  );
}
