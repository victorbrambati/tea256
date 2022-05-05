import {
  Textarea,
  Text,
  Box,
  Flex,
  Button,
  keyframes,
  useClipboard,
  useToast,
  Heading,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import CopyIcon from "../components/copyIcon";
import LogoGithub from "../components/logoGithub";
import LogoTea256 from "../components/logoTea256";
import SettingIcon from "../components/settingIcon";
import decrypt from "../functions/decrypt";
import React from "react";
export default function Home() {
  let [value, setValue] = useState("git[?]ub.com/us[?]r");
  let [valueOfSha256, setValueOfSha256] = useState(
    "e1ab30062fb2fa26b509e9546bdb04ece4b37305ef462a3e49fb7f8122408508"
  );

  let [isOnClick, setIsOnClick] = useState(false);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  let handleInputChangeOfSha256 = (e) => {
    let inputValue = e.target.value;
    setValueOfSha256(inputValue);
  };

  let [valueOfDecrypt, setValueOfDecrypt] = useState("");

  const { hasCopied, onCopy } = useClipboard(valueOfDecrypt);

  const [isInvalidTextArea, setIsInvalidTextArea] = useState();

  const questionsMarkInInput = value.match(/\[\?\]/g) || [];

  const toast = useToast();
  const toastIdRef = React.useRef();

  function addToast() {
    if (!toastIdRef.current || toastIdRef.current === 0) {
      toastIdRef.current = toast({
        id: 1,
        title: "Crash Bug",
        description:
          "The app will crash if you have more than 4 questions mark.",
        status: "error",
        duration: 12000,
        isClosable: true,
      });
    }
  }

  function closeToast() {
    toast.close(toastIdRef.current);
    toastIdRef.current = 0;
  }

  if (questionsMarkInInput.length > 4 && !isInvalidTextArea) {
    setIsInvalidTextArea(true);
    addToast();
  } else if (questionsMarkInInput.length <= 4 && isInvalidTextArea) {
    setIsInvalidTextArea(false);
    closeToast();
  }

  if (isOnClick) {
    setTimeout(() => {
      let result = decrypt(value, valueOfSha256);
      setValueOfDecrypt(result);
      setIsOnClick(false);
    }, 1000);
  }

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }
  50% { transform: scale(1) rotate(970deg);}
  100% { transform: scale(1) rotate(3000deg);}
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  return (
    <Box letterSpacing="normal" color="#274225">
      <Box
        bg="white"
        w="100%"
        h="60px"
        p="4px"
        color="white"
        boxShadow="0px 4px 12px rgba(110, 178, 87, 0.12);"
      >
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Flex
            minW="250px"
            maxW="1280px"
            w="1280px"
            marginTop="4px"
            justifyContent="space-between"
            alignItems="center"
          >
            <LogoTea256 />
            <Link href="https://github.com/victorbrambati/tea256" isExternal>
              <LogoGithub />
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Flex h="145px" w="100%" alignItems="flex-end" justifyContent="center">
        <Text>Decrypt SHA256 with bruteforce and variables</Text>
      </Flex>
      <Flex w="100%" justifyContent="center" marginTop="30px">
        <Button
          isDisabled={isInvalidTextArea}
          isLoading={isOnClick}
          onClick={() => {
            setIsOnClick(true);
            setValueOfDecrypt("");
          }}
          colorScheme="blue"
          w="111px"
          h="53px"
          fontWeight="bold"
          color="white"
          borderRadius="5px"
          fontSize="16px"
          bg="#1363FF"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="0px"
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
      <Flex w="100%" justifyContent="center" marginTop="15px">
        <Textarea
          isDisabled={isOnClick}
          isInvalid={isInvalidTextArea}
          value={value}
          onChange={handleInputChange}
          placeholder="github.com/us[?]r"
          minW="120px"
          maxW="609px"
          width="609px"
          height="190px"
          borderColor="#6EB257"
          focusBorderColor="#6EB257"
          color="#6EB257"
          _hover={{ borderColor: "#6EB257" }}
        />

        <Textarea
          isDisabled={isOnClick}
          value={valueOfSha256}
          onChange={handleInputChangeOfSha256}
          placeholder="e1ab30062fb2fa26b509e9546bdb04ece4b37305ef462a3e49fb7f8122408508"
          minW="120px"
          maxW="609px"
          width="609px"
          height="190px"
          borderColor="#6EB257"
          focusBorderColor="#6EB257"
          color="#6EB257"
          marginLeft="26px"
          _hover={{ borderColor: "#6EB257" }}
        />
      </Flex>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        marginTop="33px"
      >
        <Box
          as={motion.div}
          animation={isOnClick === true ? animation : {}}
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
          borderRadius="4px"
          alignItems="center"
          marginLeft="7px"
        >
          <Flex
            minW="200px"
            maxW="376px"
            w="360px"
            marginLeft="7px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              margin-left="6px"
              fontSize="10.2px"
              minInlineSize="200px"
              maxInlineSize="334px"
              lineHeight="12.1px"
            >
              {valueOfDecrypt !== ""
                ? `${valueOfDecrypt} is the correct answer`
                : ""}
            </Text>

            <Box onClick={onCopy} type="button" as="button">
              <CopyIcon />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" marginTop="47px">
        <Box minW="200px" maxW="1280px" w="1250px">
          <Box>
            <Heading fontSize="20px" fontWeight="semibold">
              How to use Online Decrypt TEA256?
            </Heading>
            <Text marginTop="25px" maxInlineSize="574px" fontSize="16px">
              Write or paste your words and SHA256 characters, max 4 variables
              for the words because the web not support very loops for use the
              bruteforce.
            </Text>
          </Box>
          <Box marginTop="47px">
            <Heading fontSize="20px" fontWeight="semibold">
              How to use variables?
            </Heading>
            <Text marginTop="25px" maxInlineSize="599px" fontSize="16px">
              Write a question mark [?] with a square brackets [ ] where you
              don’t know the answer. Example: go[?]gle.co[?], he[?]lo, wh[?]t
              yo[?]r na[?]e, github.com/us[?]r
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
