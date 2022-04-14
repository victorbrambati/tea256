import {
  Textarea,
  Text,
  Box,
  Flex,
  Button,
  keyframes,
  useClipboard,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import CopyIcon from "../components/copyIcon";
import LogoGithub from "../components/logoGithub";
import LogoTea256 from "../components/logoTea256";
import SettingIcon from "../components/settingIcon";

export default function Home() {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }
  50% { transform: scale(1) rotate(970deg);}
  100% { transform: scale(1) rotate(3000deg);}
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  return (
    <>
      <Box
        bg="white"
        w="100%"
        h="60px"
        p="4px"
        color="white"
        boxShadow="0px 4px 12px rgba(110, 178, 87, 0.12);"
      >
        <Flex width={"100%"} justifyContent="center" alignItems="center">
          <Flex
            minW="250px"
            maxW={1280}
            w={1280}
            marginTop="4px"
            justifyContent="space-between"
            alignItems="center"
          >
            <LogoTea256 />
            <LogoGithub />
          </Flex>
        </Flex>
      </Box>
      <Flex h={145} w="100%" alignItems="flex-end" justifyContent="center">
        <Text color="#274225" letterSpacing="-0.045em">
          Decrypt SHA256 with bruteforce and variables
        </Text>
      </Flex>
      <Flex w="100%" justifyContent="center" marginTop={30}>
        <Button
          colorScheme="blue"
          w={111}
          h={53}
          fontWeight="bold"
          color="white"
          borderRadius={5}
          fontSize="16px"
          bg="#1363FF"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border={0}
          _hover={{ bg: "#0057FF" }}
          _active={{
            transform: "scale(0.98)",
            bg: "#0057FF",
          }}
          _focus={{
            boxShadow: "0px 4px 12px rgba(68, 68, 68, 0.24)",
          }}
          boxShadow="0px 4px 12px rgba(68, 68, 68, 0.32);"
        >
          Decrypt!
        </Button>
      </Flex>
      <Flex w="100%" justifyContent="center" marginTop={15}>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="github.com/us[?]r"
          minW={120}
          maxW={609}
          width={609}
          height={190}
          borderColor="#6EB257"
          focusBorderColor="#6EB257"
          color="#6EB257"
          _hover={{ borderColor: "#6EB257" }}
        />

        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="e1ab30062fb2fa26b509e9546bdb04ece4b37305ef462a3e49fb7f8122408508"
          minW={120}
          maxW={609}
          width={609}
          height={190}
          borderColor="#6EB257"
          focusBorderColor="#6EB257"
          color="#6EB257"
          marginLeft="26px"
          _hover={{ borderColor: "#6EB257" }}
        />
      </Flex>
      <Flex w="100%" justifyContent="center" alignItems="center" marginTop={33}>
        <Box
          as={motion.div}
          animation={animation}
          w="24px"
          h="24px"
          marginLeft="-7px"
        >
          <SettingIcon />
        </Box>
        <Flex
          minW="200px"
          maxW="376px"
          w="376px"
          h="28px"
          border="1px solid #6EB257;"
          borderRadius={4}
          alignItems="center"
          marginLeft="7px"
        >
          <Flex
            minW="200px"
            maxW="376px"
            marginLeft="7px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              margin-left="6px"
              color="#274225"
              fontSize="9.33px"
              minInlineSize="200px"
              maxInlineSize={338}
              fontWeight="medium"
              marginRight="6px"
            >
              a3eb91d1f788361fdef197c399fa4acf640ed3207e01abd13077ff696f116b2b
            </Text>
            <CopyIcon />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
