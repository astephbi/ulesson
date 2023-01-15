import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Box bgColor="lightColor">
      <Navbar />
      <HeroSection />
    </Box>
  );
}

export default App;
