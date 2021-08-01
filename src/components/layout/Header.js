import React from "react";
import { SimpleGrid, Box, Text, Flex, Button } from "@chakra-ui/react";
import { GrMapLocation, AiFillPhone, FaUserAlt } from "react-icons/all";

const Header = () => {
  return (
    <SimpleGrid columns={[1, 2, 2]}>
      <Box height="80px">
        <Flex
          color="blue"
          py={3}
          px={5}
          justify={["center", "flex-start", "flex-start"]}
        >
          <Text color="black" fontWeight="extrabold" as="i" fontSize="3xl">
            BookNEvent
          </Text>
        </Flex>
      </Box>
      <Box
        height="80px"
        py={5}
        display="flex"
        justifyContent={["center", "flex-end", "flex-end"]}
        px={[0, 5, 5]}
      >
        <Button
          leftIcon={<GrMapLocation />}
          size={("md", "lg", "lg")}
          colorScheme="black"
          variant="ghost"
        >
          Location
        </Button>
        <Button
          leftIcon={<AiFillPhone />}
          size={("md", "lg", "lg")}
          colorScheme="black"
          variant="ghost"
        >
          0939349344
        </Button>

        <Button
          leftIcon={<FaUserAlt />}
          size={("md", "lg", "lg")}
          colorScheme="black"
          variant="outline"
        >
          LOGIN
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default Header;
