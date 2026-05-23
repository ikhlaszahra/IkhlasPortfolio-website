import { Box, Flex, Heading, Text, VStack, HStack, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const skills = [
  { label: 'Languages & Frameworks', items: ['Python Programming', 'Flutter UI Development', 'SQL & Databases'] },
  { label: 'Emerging Tech', items: ['Artificial Intelligence Basics', 'Cybersecurity Fundamentals'] },
  { label: 'Soft Skills', items: ['Problem Solving', 'Teamwork & Communication', 'Continuous Learning'] },
];

const interests = ['Coding', 'Sketching', 'Reading', 'Self-improvement', 'Open Source', 'Tech Communities'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        minH="92vh"
        maxW="1100px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative bg letters */}
        <Box
          position="absolute"
          right={{ base: '-20px', md: '2%' }}
          top="50%"
          transform="translateY(-50%)"
          fontFamily="'Playfair Display', serif"
          fontSize={{ base: '180px', md: '300px' }}
          fontWeight="900"
          color="transparent"
          style={{ WebkitTextStroke: '1px #161616' }}
          userSelect="none"
          lineHeight="1"
          zIndex={0}
          pointerEvents="none"
        >
          CS
        </Box>

        <VStack align="start" spacing={6} zIndex={1} maxW="680px">
          <MotionText
            {...fadeUp(0.1)}
            fontSize="xs"
            fontWeight="600"
            color="#f97316"
            letterSpacing="0.25em"
            textTransform="uppercase"
          >
            CS Student · NFC IET Multan
          </MotionText>

          <MotionBox {...fadeUp(0.2)}>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: '50px', md: '78px' }}
              fontWeight="900"
              color="#f5f0eb"
              lineHeight="1.05"
              letterSpacing="-0.03em"
            >
              Passionate
              <br />
              about{' '}
              <Box as="span" color="#f97316" fontStyle="italic">
                building
              </Box>
              <br />
              things.
            </Heading>
          </MotionBox>

          <MotionText
            {...fadeUp(0.35)}
            fontSize={{ base: 'md', md: 'lg' }}
            color="#808080"
            lineHeight="1.9"
            maxW="500px"
            fontWeight="300"
          >
            I'm a Computer Science student at{' '}
            <Box as="span" color="#d0ccc7">NFC Institute of Engineering & Technology</Box>{' '}
            exploring Software Development, AI, and Cybersecurity — one project at a time.
          </MotionText>

          <MotionBox {...fadeUp(0.5)}>
            <Flex gap={4} wrap="wrap" pt={2}>
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
                _hover={{ bg: '#fb923c', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                cursor="pointer"
              >
                Get in touch
              </Box>
              <Box
                as="a"
                href="/experience"
                display="inline-block"
                border="1px solid #2a2a2a"
                color="#808080"
                px={7}
                py={3}
                borderRadius="full"
                fontWeight="500"
                fontSize="sm"
                letterSpacing="0.04em"
                _hover={{ borderColor: '#f97316', color: '#f97316', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                cursor="pointer"
              >
                My journey →
              </Box>
            </Flex>
          </MotionBox>
        </VStack>
      </Box>

      {/* ── About strip ── */}
      <Box bg="#0d0d0d" borderTop="1px solid #1a1a1a" borderBottom="1px solid #1a1a1a">
        <Box maxW="1100px" mx="auto" px={{ base: 6, md: 10 }} py={16}>
          <Flex direction={{ base: 'column', md: 'row' }} gap={12} align="start">
            <Box flex={1}>
              <Text
                fontSize="xs"
                fontWeight="600"
                color="#f97316"
                letterSpacing="0.2em"
                textTransform="uppercase"
                mb={4}
              >
                About me
              </Text>
              <Text fontSize="md" color="#909090" lineHeight="1.9" fontWeight="300">
                I'm passionate about software development, Artificial Intelligence, and cybersecurity.
                I enjoy learning new technologies and building practical projects that sharpen my
                problem-solving and technical skills.
              </Text>
              <Text fontSize="md" color="#909090" lineHeight="1.9" fontWeight="300" mt={4}>
                Currently exploring Python, Flutter, database systems, AI technologies, and
                cybersecurity fundamentals — always open to learning opportunities, internships,
                and collaborations.
              </Text>
            </Box>

            <Box flex={1}>
              <Text
                fontSize="xs"
                fontWeight="600"
                color="#f97316"
                letterSpacing="0.2em"
                textTransform="uppercase"
                mb={4}
              >
                Interests & hobbies
              </Text>
              <Wrap spacing={2}>
                {interests.map(item => (
                  <WrapItem key={item}>
                    <Box
                      px={4}
                      py={2}
                      border="1px solid #1e1e1e"
                      borderRadius="full"
                      fontSize="sm"
                      color="#707070"
                      fontWeight="400"
                      _hover={{ borderColor: '#f97316', color: '#f97316' }}
                      transition="all 0.2s"
                    >
                      {item}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* ── Skills ── */}
      <Box maxW="1100px" mx="auto" px={{ base: 6, md: 10 }} py={20}>
        <Text
          fontSize="xs"
          fontWeight="600"
          color="#f97316"
          letterSpacing="0.2em"
          textTransform="uppercase"
          mb={10}
        >
          Skills & technologies
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {skills.map((group, i) => (
            <MotionBox
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              border="1px solid #1a1a1a"
              borderRadius="2xl"
              p={7}
              bg="#0e0e0e"
              _hover={{ borderColor: '#f97316', transform: 'translateY(-5px)' }}
              style={{ transition: 'all 0.3s ease' }}
            >
              <Text
                fontSize="10px"
                fontWeight="600"
                color="#f97316"
                letterSpacing="0.18em"
                textTransform="uppercase"
                mb={6}
              >
                {group.label}
              </Text>
              <VStack align="start" spacing={3}>
                {group.items.map(item => (
                  <HStack key={item} spacing={3}>
                    <Box w="4px" h="4px" borderRadius="full" bg="#f97316" flexShrink={0} mt="1px" />
                    <Text fontSize="sm" color="#b0aca8" fontWeight="300" lineHeight="1.5">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
