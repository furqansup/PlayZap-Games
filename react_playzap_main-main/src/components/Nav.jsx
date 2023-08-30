import React from "react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <nav>
        <div className="small-left-nav">
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63931b9a1b8f220650af4732_playzap_logo_188.png"
            alt=""
          />
        </div>
        <div className="small-right-nav">
          <Button ref={btnRef} colorScheme="#191f2f" onClick={onOpen}>
            ≡
          </Button>
        </div>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#191f2f">
            <DrawerCloseButton color={"white"} />
            <DrawerHeader>Create your account</DrawerHeader>
            <DrawerBody>
              <div className="sidebar-right-divs">
                <div>
                  <Menu>
                    <div className="navbar-button">
                      <MenuButton
                        color={"white"}
                        bgColor={"#1a1f30"}
                        as={Button}
                        _hover={{ bgColor: "transparent" }}
                      >
                        RESOURCES ⮟
                      </MenuButton>
                    </div>
                    <MenuList bgColor={"#1a1f30"} border={"0px"}>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        WHITEPAPER
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        COINMARKETCAP
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        COINGECKO
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        DOWNLOAD THE APP
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <div>
                  <Menu>
                    <div className="navbar-button">
                      <MenuButton
                        color={"white"}
                        bgColor={"#1a1f30"}
                        as={Button}
                      >
                        COMMUNITY ⮟
                      </MenuButton>
                    </div>
                    <MenuList bgColor={"#1a1f30"} border={"0px"}>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        DISCORD
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        TWITTER
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        LINKEDIN
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        TELEGRAM
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        MEDIUM
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        YOUTUBE
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <div>
                  <Menu>
                    <div className="navbar-button">
                      <MenuButton
                        color={"white"}
                        bgColor={"#1a1f30"}
                        as={Button}
                      >
                        $PZP TOKEN ⮟
                      </MenuButton>
                    </div>
                    <MenuList bgColor={"#1a1f30"} border={"0px"}>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        BUY $PZP
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        STAKE $PZP
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        MANAGE $PZP
                      </MenuItem>
                      <MenuItem
                        bgColor={"#1a1f30"}
                        color={"white"}
                        _hover={{ bgColor: "#2a4666" }}
                      >
                        LEARN MORE
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <div className="right-sidebar-icons">
                  {/* <Link href='/' className="sidebar-links"> */}
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a5894f581f4d83c3287d67_Frame%20630042.png"
                        alt=""
                      />
                      <p>Home</p>
                    </div>
                  {/* </Link> */}
                  <div>
                    <img
                      src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a5899630882681ac121794_Frame%20630043.png"
                      alt=""
                    />
                    <p>Company</p>
                  </div>
                  <div>
                    <img
                      src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/642a8168e48f6a2e832ecb92_Leaderboard_1.png"
                      alt=""
                    />
                    <p>Ranks</p>
                  </div>
                  <div>
                    <img
                      src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6492ac78d771e6ed62386723_Wallet-btn-64.png"
                      alt=""
                    />
                    <p>Wallet</p>
                  </div>
                  <div>
                    <img
                      src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a589a876dc2e7622ab5ea2_Frame%20630044.png"
                      alt=""
                    />
                    <p>$Pzp</p>
                  </div>
                  <div>
                    <img
                      src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a58b4fd6529848453d46e7_Frame%20630045.png"
                      alt=""
                    />
                    <p>Help</p>
                  </div>
                </div>
                <div className="sidebar-social-box">
                  <div>
                    <img src="/assets/discord.png" alt="" />
                  </div>
                  <div>
                    <img src="/assets/twitter.png" alt="" />
                  </div>
                  <div>
                    <img src="/assets/linkedin.png" alt="" />
                  </div>
                  <div>
                    <img src="/assets/telegram.png" alt="" />
                  </div>
                  <div>
                    <img src="/assets/medium.png" alt="" />
                  </div>
                  <div>
                    <img src="/assets/youtube.png" alt="" />
                  </div>
                </div>
              </div>
            </DrawerBody>

            {/* <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </nav>
    </>
  );
};

export default Nav;
