import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'NFC Institute of Engineering & Technology, Multan',
    period: '2023 — Present',
    detail: 'Studying core CS fundamentals: software engineering, data structures, algorithms, database systems, AI, and cybersecurity.',
    index: '01',
    status: 'Ongoing',
  },
  {
    degree: 'Intermediate — Pre-Engineering',
    institution: 'Govt. College / Board, Multan',
    period: '2021 — 2023',
    detail: 'Foundation in Mathematics, Physics, and Computer Science.',
    index: '02',
    status: 'Completed',
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'KIPS High School, Multan',
    period: '2019 — 2021',
    detail: 'Strong academic base in science and mathematics.',
    index: '03',
    status: 'Completed',
  },
];

export default function Education() {
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
          Academic background
        </Text>
        <Heading
          fontFamily="'Playfair Display', serif"
          fontSize={{ base: '40px', md: '64px' }}
          fontWeight="900"
          color="#f5f0eb"
          letterSpacing="-0.03em"
          mb={4}
          lineHeight="1.1"
        >
          Education
        </Heading>
        <Text fontSize="md" color="#606060" fontWeight="300" maxW="480px" lineHeight="1.8" mb={16}>
          My academic journey shaping a foundation in computer science, engineering, and technology.
        </Text>
      </motion.div>

      {/* Timeline list */}
      <VStack spacing={0} align="stretch">
        {educationData.map((edu, i) => (
          <MotionBox
            key={edu.index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            borderTop="1px solid #1a1a1a"
            py={10}
            _last={{ borderBottom: '1px solid #1a1a1a' }}
            role="group"
            px={3}
            borderRadius="lg"
            _hover={{ bg: 'rgba(249,115,22,0.03)' }}
            style={{ transition: 'background 0.3s' }}
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align="start"
              gap={6}
            >
              {/* Index */}
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="12px"
                color="#2a2a2a"
                fontWeight="400"
                minW="36px"
                pt={1}
              >
                {edu.index}
              </Text>

              {/* Main content */}
              <Box flex={1}>
                <Heading
                  fontFamily="'Playfair Display', serif"
                  fontSize={{ base: '20px', md: '26px' }}
                  fontWeight="700"
                  color="#f5f0eb"
                  letterSpacing="-0.02em"
                  mb={2}
                  lineHeight="1.3"
                  _groupHover={{ color: '#f97316' }}
                  style={{ transition: 'color 0.3s' }}
                >
                  {edu.degree}
                </Heading>
                <Text fontSize="sm" color="#f97316" fontWeight="500" mb={3}>
                  {edu.institution}
                </Text>
                <Text fontSize="sm" color="#606060" fontWeight="300" lineHeight="1.8" maxW="500px">
                  {edu.detail}
                </Text>
              </Box>

              {/* Period + status */}
              <VStack align={{ base: 'start', md: 'end' }} spacing={2} minW="130px" pt={1}>
                <Text fontSize="sm" color="#484848" fontWeight="400" letterSpacing="0.04em">
                  {edu.period}
                </Text>
                <Box
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="10px"
                  fontWeight="600"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  bg={edu.status === 'Ongoing' ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.05)'}
                  color={edu.status === 'Ongoing' ? '#f97316' : '#484848'}
                  border="1px solid"
                  borderColor={edu.status === 'Ongoing' ? 'rgba(249,115,22,0.3)' : '#1e1e1e'}
                >
                  {edu.status}
                </Box>
              </VStack>
            </Flex>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}
