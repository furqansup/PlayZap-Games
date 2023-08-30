import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div>
          <Link href='/'>
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63931b9a1b8f220650af4732_playzap_logo_188.png"
            alt=""
            />
            </Link>
        </div>
        <div className="left-nav-img">
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
        </div>
      </div>
      <div className="right-nav">
        <div>
          <Menu>
            <div className="navbar-button">
              <MenuButton
                _hover={{ bg: "transparent" }}
                color={"white"}
                bgColor={"#1a1f30"}
                as={Button}
              >
                RESOURCES ⮟
              </MenuButton>
            </div>
            <MenuList bgColor={"#1a1f30"} border={"0px"}>
              <Link
                href={
                  "https://whitepaper.playzap.games/wp/introduction/welcome"
                }
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  WHITEPAPER
                </MenuItem>
              </Link>
              <Link
                href={"https://coinmarketcap.com/currencies/playzap/"}
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  COINMARKETCAP
                </MenuItem>
              </Link>
              <Link
                href={"https://www.coingecko.com/en/coins/playzap"}
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  COINGECKO
                </MenuItem>
              </Link>
              <Link href={"https://www.playzap.games/download"} target="_blank">
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  DOWNLOAD THE APP
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Menu>
            <div className="navbar-button">
              <MenuButton
                _hover={{ bg: "transparent" }}
                color={"white"}
                bgColor={"#1a1f30"}
                as={Button}
              >
                COMMUNITY ⮟
              </MenuButton>
            </div>
            <MenuList bgColor={"#1a1f30"} border={"0px"}>
              <Link
                href={"https://discord.com/invite/YYPAyJpyqm"}
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  DISCORD
                </MenuItem>
              </Link>
              <Link href={"https://twitter.com/playzapgames"} target="_blank">
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  TWITTER
                </MenuItem>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/playzap-games/"}
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  LINKEDIN
                </MenuItem>
              </Link>
              <Link href={"https://t.me/PlayZapOfficial"} target="_blank">
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  TELEGRAM
                </MenuItem>
              </Link>
              <Link href={"https://playzap.medium.com/"} target="_blank">
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  MEDIUM
                </MenuItem>
              </Link>
              <Link
                href={"https://www.youtube.com/@playzapgames5705"}
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  YOUTUBE
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Menu>
            <div className="navbar-button">
              <MenuButton
                _hover={{ bg: "transparent" }}
                color={"white"}
                bgColor={"#1a1f30"}
                as={Button}
              >
                $PZP TOKEN ⮟
              </MenuButton>
            </div>
            <MenuList bgColor={"#1a1f30"} border={"0px"}>
              <Link href={""}>
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  BUY $PZP
                </MenuItem>
              </Link>
              <Link href={"https://stake.playzap.games/"} target="_blank">
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  STAKE $PZP
                </MenuItem>
              </Link>
              <Link href={"https://wallet.playzap.games/"} target="_blank">
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  MANAGE $PZP
                </MenuItem>
              </Link>
              <Link
                href={
                  "https://whitepaper.playzap.games/wp/economy/the-usdpzp-token"
                }
                target="_blank"
              >
                <MenuItem
                  bgColor={"#1a1f30"}
                  color={"white"}
                  _hover={{ bgColor: "#2a4666" }}
                >
                  LEARN MORE
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
