import { Box, Stack, SimpleGrid, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      zIndex={"99999"}
      w={"100%"}
      mt={"100px"}
      bg={"#1A1F30"}
      color={"white"}
    >
      <Flex w={"100%"} className="footer-inner">
        <SimpleGrid
          w={"100%"}
          spacing={10}
          justify="space-between"
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Stack spacing={8} textAlign={"center"} align={"center"}>
            <Flex flexDir={"column"} gap={"10px"}>
              <Link
                target="_blank"
                href="https://apps.apple.com/us/app/playzap-games-rewards/id1629658754"
              >
                <Image
                  className="mobile-app-cta"
                  src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d771f225c16aa756e5dabf_dw-apple.png"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.pzp.playzap"
                target="_blank"
              >
                <Image
                  className="mobile-app-cta"
                  src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d77106cdfd66814828c708_dw-google.png"
                />
              </Link>
            </Flex>
            <Text color={"#797B82"} className="footer-trademark">
              @ 2023. PLAYZAP GAMES PTE LTD <br />
              Various trademarks held by their respective owners.
            </Text>
          </Stack>

          <Flex flexDir={"column"} mb={6} textAlign={"center"} align={"center"}>
            <Image
              className="logo-footer"
              src="https://files.playzap.games/wp-content/uploads/2023/06/LogoOption_02_8_1.png"
            />
            <Text color={"#797B82"} fontSize={"12px"}>
              Powered by PlayZap.
            </Text>
            <Text color={"#797B82"} fontSize={"16px"}>
              Free to Play. Skill to Earn.
            </Text>
          </Flex>

          <Flex>
            <Flex
              className="social-icons"
              w={"100%"}
              gap={"20px"}
              flexDir={"column"}
            >
              <Flex flexWrap={"wrap"}>
                <Link target="_blank" href="https://discord.gg/3RfxDNkQpN">
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    padding={"10px"}
                    borderRadius={"10px"}
                    bgColor={"#353E61"}
                  >
                    <Image src="/assets/discord.png" />
                  </Flex>
                </Link>
                <Link target="_blank" href="https://twitter.com/playzapgames">
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    padding={"10px"}
                    borderRadius={"10px"}
                    bgColor={"#353E61"}
                  >
                    <Image src="/assets/twitter.png" />
                  </Flex>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/playzap-games/mycompany/"
                >
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    padding={"10px"}
                    borderRadius={"10px"}
                    bgColor={"#353E61"}
                  >
                    <Image src="/assets/linkedin.png" />
                  </Flex>
                </Link>
                <Link target="_blank" href="https://t.me/PlayZapOfficial">
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    padding={"10px"}
                    borderRadius={"10px"}
                    bgColor={"#353E61"}
                  >
                    <Image src="/assets/telegram.png" />
                  </Flex>
                </Link>
                <Link target="_blank" href="https://playzap.medium.com/">
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    padding={"10px"}
                    borderRadius={"10px"}
                    bgColor={"#353E61"}
                  >
                    <Image src="/assets/medium.png" />
                  </Flex>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@playzapgames5705"
                >
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    padding={"10px"}
                    borderRadius={"10px"}
                    bgColor={"#353E61"}
                  >
                    <Image src="/assets/youtube.png" />
                  </Flex>
                </Link>
              </Flex>

              <Flex
                textAlign={"left"}
                className="footer-links"
                maxW={"350px"}
                justify={"space-between"}
                gap="20px"
              >
                <Stack textAlign={"left"} align={"flex-start"}>
                  <Link href={"https://www.playzap.games/"}>
                    <p className="footer-p">Go to PlayZap</p>
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.playzap.games/token"}
                  >
                    <p className="footer-p">$PZP Token</p>
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://files.playzap.games/pitch-deck/"}
                  >
                    <p className="footer-p">Pitchdeck</p>
                  </Link>
                  <Link
                    target="_blank"
                    href={
                      "https://whitepaper.playzap.games/wp/introduction/welcome"
                    }
                  >
                    <p className="footer-p">Whitepaper</p>
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.playzap.games/company#team-section"}
                  >
                    <p className="footer-p">Team</p>
                  </Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <Link href={"mailto:support@playzap.games"}>
                    <p className="footer-p">Contact Us</p>
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.youtube.com/watch?v=aZ388bOB0O0"}
                  >
                    <p className="footer-p">Watch Trailer</p>
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.playzap.games/privacy-policy"}
                  >
                    <p className="footer-p">Privacy Policy</p>
                  </Link>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
