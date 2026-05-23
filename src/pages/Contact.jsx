import { Box, Flex, Heading, Text, VStack, Input, Textarea, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const inputStyles = {
  bg: 'transparent',
  border: '1px solid',
  borderColor: '#1e1e1e',
  borderRadius: 'xl',
  height: '50px',
  px: 4,
  fontSize: 'sm',
  color: '#f5f0eb',
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: '300',
  _placeholder: { color: '#383838' },
  _hover: { borderColor: '#2e2e2e' },
  _focus: {
    borderColor: '#f97316',
    boxShadow: '0 0 0 1px #f97316',
    outline: 'none',
    bg: 'rgba(249,115,22,0.03)',
  },
  transition: 'all 0.2s',
};

const labelStyles = {
  fontSize: '10px',
  fontWeight: '600',
  color: '#484848',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  mb: 2,
};

const contactLinks = [
  { label: 'Email', value: 'ikhlas.zahraa@gmail.com', href: 'mailto:ikhlas.zahraa@gmail.com' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/syeda-ikhlas-zahra-120b13360e', href: 'https://www.linkedin.com/in/syeda-ikhlas-zahra-120b13360' },
  { label: 'GitHub', value: 'https://github.com/ikhlaszahra', href: 'https://github.com/ikhlaszahra' },
  { label: 'Location', value: 'Multan, Pakistan', href: null },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

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
          Let's talk
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
          Get in{' '}
          <Box as="span" color="#f97316" fontStyle="italic">
            touch
          </Box>
        </Heading>
        <Text fontSize="md" color="#606060" fontWeight="300" maxW="480px" lineHeight="1.8" mb={16}>
          Open to internships, collaborations, and connections in the tech world.
          Don't hesitate — drop a message!
        </Text>
      </motion.div>

      <Flex direction={{ base: 'column', md: 'row' }} gap={12}>

        {/* Left — contact info */}
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          flex="0 0 280px"
        >
          <Text
            fontSize="xs"
            fontWeight="600"
            color="#f97316"
            letterSpacing="0.2em"
            textTransform="uppercase"
            mb={6}
          >
            Contact info
          </Text>

          <VStack align="start" spacing={5}>
            {contactLinks.map(link => (
              <Box key={link.label} borderBottom="1px solid #141414" pb={5} w="100%">
                <Text fontSize="10px" fontWeight="600" color="#383838" letterSpacing="0.15em" textTransform="uppercase" mb={1}>
                  {link.label}
                </Text>
                {link.href ? (
                  <Box
                    as="a"
                    href={link.href}
                    fontSize="sm"
                    color="#909090"
                    fontWeight="300"
                    _hover={{ color: '#f97316' }}
                    transition="color 0.2s"
                  >
                    {link.value}
                  </Box>
                ) : (
                  <Text fontSize="sm" color="#909090" fontWeight="300">{link.value}</Text>
                )}
              </Box>
            ))}
          </VStack>

          {/* Availability badge */}
          <Box
            mt={8}
            display="inline-flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            border="1px solid rgba(249,115,22,0.25)"
            borderRadius="full"
            bg="rgba(249,115,22,0.06)"
          >
            <Box w="6px" h="6px" borderRadius="full" bg="#f97316" flexShrink={0} />
            <Text fontSize="xs" color="#f97316" fontWeight="500" letterSpacing="0.06em">
              Available for internships
            </Text>
          </Box>
        </MotionBox>

        {/* Right — form */}
        <MotionBox
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          flex={1}
          bg="#0e0e0e"
          border="1px solid #1a1a1a"
          borderRadius="2xl"
          p={{ base: 7, md: 10 }}
        >
          {sent ? (
            <Flex direction="column" align="center" justify="center" minH="360px" gap={4}>
              <Box fontSize="48px">✓</Box>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="24px"
                fontWeight="700"
                color="#f5f0eb"
              >
                Message sent!
              </Text>
              <Text fontSize="sm" color="#606060" fontWeight="300">
                I'll get back to you soon.
              </Text>
            </Flex>
          ) : (
            <VStack as="form" spacing={5} align="stretch" onSubmit={handleSubmit}>
              <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
                <FormControl flex={1}>
                  <FormLabel {...labelStyles}>Name</FormLabel>
                  <Input placeholder="Your name" {...inputStyles} required />
                </FormControl>
                <FormControl flex={1}>
                  <FormLabel {...labelStyles}>Email</FormLabel>
                  <Input placeholder="your.email@gmail.com" type="email" {...inputStyles} required />
                </FormControl>
              </Flex>

              <FormControl>
                <FormLabel {...labelStyles}>Subject</FormLabel>
                <Input placeholder="Internship / Collaboration / Hello" {...inputStyles} />
              </FormControl>

              <FormControl>
                <FormLabel {...labelStyles}>Message</FormLabel>
                <Textarea
                  placeholder="Tell me what's on your mind..."
                  rows={6}
                  resize="none"
                  bg="transparent"
                  border="1px solid"
                  borderColor="#1e1e1e"
                  borderRadius="xl"
                  px={4}
                  py={3}
                  fontSize="sm"
                  color="#f5f0eb"
                  fontFamily="'DM Sans', sans-serif"
                  fontWeight="300"
                  _placeholder={{ color: '#383838' }}
                  _hover={{ borderColor: '#2e2e2e' }}
                  _focus={{
                    borderColor: '#f97316',
                    boxShadow: '0 0 0 1px #f97316',
                    outline: 'none',
                    bg: 'rgba(249,115,22,0.03)',
                  }}
                  transition="all 0.2s"
                  required
                />
              </FormControl>

              <Box
                as="button"
                type="submit"
                mt={2}
                h="52px"
                bg="#f97316"
                color="#0a0a0a"
                borderRadius="xl"
                fontSize="sm"
                fontFamily="'DM Sans', sans-serif"
                fontWeight="600"
                letterSpacing="0.05em"
                border="none"
                cursor="pointer"
                _hover={{ bg: '#fb923c', transform: 'translateY(-2px)' }}
                _active={{ transform: 'translateY(0)', bg: '#ea6b0e' }}
                transition="all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                w="100%"
              >
                Send message →
              </Box>
            </VStack>
          )}
        </MotionBox>
      </Flex>
    </Box>
  );
}
