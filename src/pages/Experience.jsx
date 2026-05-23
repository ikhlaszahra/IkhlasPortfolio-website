import { Box, Flex, Heading, Text, VStack, HStack, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'Python CLI Projects',
    type: 'Personal Project',
    tags: ['Python', 'Problem Solving', 'Algorithms'],
    desc: 'Built multiple command-line tools and scripts in Python to practice logic, data structures, and automation. Focused on clean code and real-world problem solving.',
    index: '01',
  },
  {
    title: 'Flutter UI Interfaces',
    type: 'Personal Project',
    tags: ['Flutter', 'Dart', 'Mobile UI'],
    desc: 'Designed and developed mobile app UI screens using Flutter, focusing on responsive layouts, widget composition, and smooth user experiences.',
    index: '02',
  },
  {
    title: 'Database Design & SQL',
    type: 'Academic Project',
    tags: ['SQL', 'Database Design', 'ERD'],
    desc: 'Designed relational database schemas, wrote complex SQL queries, and implemented database solutions for academic assignments and personal practice projects.',
    index: '03',
  },
  {
    title: 'AI & Cybersecurity Exploration',
    type: 'Self-Learning',
    tags: ['AI Basics', 'Cybersecurity', 'Research'],
    desc: 'Actively studying machine learning fundamentals and cybersecurity concepts — exploring tools, reading papers, and completing online courses to build a strong theoretical base.',
    index: '04',
  },
];

const timeline = [
  {
    year: '2023',
    title: 'Started CS Degree',
    body: 'Enrolled at NFC IET Multan. Began foundational CS studies and immediately started exploring beyond the curriculum.',
  },
  {
    year: '2024',
    title: 'Expanded into Flutter & AI',
    body: 'Picked up Flutter for mobile development and began studying AI technologies alongside core university modules.',
  },
  {
    year: '2025',
    title: 'Cybersecurity & Deeper Python',
    body: 'Diving deeper into cybersecurity fundamentals and advanced Python — building projects, seeking internships, and growing the portfolio.',
  },
];

export default function Experience() {
  return (
    <Box maxW="1100px" mx="auto" px={{ base: 6, md: 10 }} py={20}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text
          fontSize="xs"
          fontWeight="600"
          color="#f97316"
          letterSpacing="0.25em"
          textTransform="uppercase"
          mb={3}
        >
          Projects & journey
        </Text>
        <Heading
          fontFamily="'Playfair Display', serif"
          fontSize={{ base: '40px', md: '64px' }}
          fontWeight="900"
          color="#f5f0eb"
          letterSpacing="-0.03em"
          lineHeight="1.1"
          mb={4}
        >
          Experience
        </Heading>
        <Text fontSize="md" color="#606060" fontWeight="300" maxW="500px" lineHeight="1.8" mb={16}>
          Hands-on projects and learning milestones that define my path as a developer.
        </Text>
      </motion.div>

      {/* Projects grid */}
      <Text
        fontSize="xs"
        fontWeight="600"
        color="#f97316"
        letterSpacing="0.2em"
        textTransform="uppercase"
        mb={6}
      >
        Projects
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={20}>
        {projects.map((proj, i) => (
          <MotionBox
            key={proj.index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            bg="#0e0e0e"
            border="1px solid #1a1a1a"
            borderRadius="2xl"
            p={7}
            role="group"
            _hover={{ borderColor: '#f97316', transform: 'translateY(-5px)' }}
            style={{ transition: 'all 0.3s ease' }}
          >
            <Flex justify="space-between" align="start" mb={5}>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="11px"
                color="#282828"
              >
                {proj.index}
              </Text>
              <Box
                px={3}
                py={1}
                borderRadius="full"
                fontSize="10px"
                fontWeight="600"
                letterSpacing="0.08em"
                textTransform="uppercase"
                border="1px solid #1e1e1e"
                color="#484848"
              >
                {proj.type}
              </Box>
            </Flex>

            <Heading
              fontFamily="'Playfair Display', serif"
              fontSize="20px"
              fontWeight="700"
              color="#f5f0eb"
              letterSpacing="-0.02em"
              mb={3}
              _groupHover={{ color: '#f97316' }}
              style={{ transition: 'color 0.3s' }}
            >
              {proj.title}
            </Heading>

            <Text fontSize="sm" color="#606060" fontWeight="300" lineHeight="1.8" mb={5}>
              {proj.desc}
            </Text>

            <Wrap spacing={2}>
              {proj.tags.map(tag => (
                <WrapItem key={tag}>
                  <Box
                    px={3}
                    py={1}
                    bg="rgba(249,115,22,0.08)"
                    border="1px solid rgba(249,115,22,0.2)"
                    borderRadius="full"
                    fontSize="11px"
                    color="#f97316"
                    fontWeight="500"
                  >
                    {tag}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Timeline */}
      <Text
        fontSize="xs"
        fontWeight="600"
        color="#f97316"
        letterSpacing="0.2em"
        textTransform="uppercase"
        mb={8}
      >
        My journey
      </Text>

      <VStack spacing={0} align="stretch">
        {timeline.map((item, i) => (
          <MotionBox
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
          >
            <Flex gap={8} py={8} borderTop="1px solid #1a1a1a" _last={{ borderBottom: '1px solid #1a1a1a' }}>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="sm"
                color="#f97316"
                fontWeight="700"
                minW="48px"
                pt={1}
              >
                {item.year}
              </Text>
              <Box>
                <Text fontSize="md" fontWeight="500" color="#d0ccc7" mb={2}>
                  {item.title}
                </Text>
                <Text fontSize="sm" color="#606060" fontWeight="300" lineHeight="1.8" maxW="520px">
                  {item.body}
                </Text>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </VStack>

      {/* Open to opportunities banner */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        mt={16}
        border="1px solid rgba(249,115,22,0.25)"
        borderRadius="2xl"
        p={8}
        bg="rgba(249,115,22,0.04)"
        textAlign="center"
      >
        <Text
          fontSize="xs"
          fontWeight="600"
          color="#f97316"
          letterSpacing="0.2em"
          textTransform="uppercase"
          mb={3}
        >
          Currently available
        </Text>
        <Text
          fontFamily="'Playfair Display', serif"
          fontSize={{ base: '22px', md: '28px' }}
          fontWeight="700"
          color="#f5f0eb"
          mb={3}
        >
          Open to internships & collaborations
        </Text>
        <Text fontSize="sm" color="#606060" fontWeight="300" maxW="400px" mx="auto" lineHeight="1.8" mb={6}>
          I'm actively seeking internship opportunities in software development, AI, or cybersecurity.
        </Text>
        <Box
          as="a"
          href="/contact"
          display="inline-block"
          bg="#f97316"
          color="#0a0a0a"
          px={7}
          py={3}
          borderRadius="full"
          fontWeight="600"
          fontSize="sm"
          letterSpacing="0.04em"
          _hover={{ bg: '#fb923c' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          Let's connect
        </Box>
      </MotionBox>
    </Box>
  );
}
