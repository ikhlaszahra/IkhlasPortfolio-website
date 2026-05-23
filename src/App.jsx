import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const NavItem = ({ to, label }) => (
  <NavLink to={to} style={({ isActive }) => ({
    color: isActive ? '#f97316' : '#a0a0a0',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.2s',
  })}>
    {label}
  </NavLink>
);

export default function App() {
  return (
    <Router>
      <Box bg="#0a0a0a" minH="100vh">

        {/* Navbar */}
        <Box
          as="nav"
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={100}
          borderBottom="1px solid #1e1e1e"
          backdropFilter="blur(12px)"
          bg="rgba(10,10,10,0.85)"
        >
          <Flex
            maxW="1100px"
            mx="auto"
            px={{ base: 6, md: 10 }}
            py={5}
            justify="space-between"
            align="center"
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize="xl"
              fontWeight="700"
              color="#f5f0eb"
              letterSpacing="-0.02em"
            >
              Ikhlas<Box as="span" color="#f97316">.</Box>
            </Text>
            <HStack spacing={8}>
              <NavItem to="/" label="Home" />
              <NavItem to="/education" label="Education" />
              <NavItem to="/experience" label="Experience" />
              <NavItem to="/contact" label="Contact" />
            </HStack>
          </Flex>
        </Box>

        {/* Page Content */}
        <Box pt="72px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>

      </Box>
    </Router>
  );
}
