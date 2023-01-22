import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';

function App() {
  return (
    <Box bgColor="lightColor">
      <Navbar />
      <HeroSection />
      <HeroSection2 />
    </Box>
  );
}

export default App;
