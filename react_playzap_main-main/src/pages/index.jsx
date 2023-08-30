import Corousel from "../components/Corousel";
import {
  Button,
  Stack,
  Text,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  transition,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Link from "next/link";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
    console.log("changed");
  };

  return (
    <>
      {/* First Section */}

      <Corousel />
      <section className="container-section">
        <section className="first-section">
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Download Now</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src="/assets/qr-code-android.png" alt="" />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <div className="first-box">
            <div className="head-box">
              <Stack spacing={3}>
                <Text className="heading">Free to Play. Skill to Earn.</Text>
                <Text className="sub-heading">
                  Delightful playing experience that you love
                </Text>
                <Text className="para">
                  Join us in the fun-first gaming! No complicated barrier, no
                  expensive NFTs to enter. Play for Free & start winning!
                </Text>
              </Stack>
            </div>
            <div style={{ width: "300px" }}>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/639084115fb6d17e9a5c1363_free-to-play-image.png"
                alt="trophy"
              />
            </div>
          </div>
          {/* <div className="app-download">
            <img
              onClick={onOpen}
              src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d771f225c16aa756e5dabf_dw-apple.png"
              alt=""
            />
            <img
              onClick={onOpen}
              src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d77106cdfd66814828c708_dw-google.png"
              alt=""
            />
          </div> */}
          <div className="first-section-list">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63901cfc5b854cef1a568a6f_module_1.png"
                alt=""
              />
              <p className="first-section-list-p">Play Tournaments & PvP</p>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63901d20cedc3f76ba27e472_module_2.png"
                alt=""
              />
              <p className="first-section-list-p">Multi-Gaming App</p>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63901d30b64bc7fa302f7236_module_3.png"
                alt=""
              />
              <p className="first-section-list-p">Game of Skill</p>
            </div>
          </div>
        </section>

        {/* Second Section */}

        <section className="second-section">
          <div className="second-sec-box">
            <div class=" stripper-container">
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>
              </div>

              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>
              </div>

              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <div className="ecosystem">
              <Stack spacing={3}>
                <Text className="heading">Ecosystem</Text>
                <Text className="sub-heading" marginBottom={"25px"}>
                  Rewarding, Playful & Decenterlized
                </Text>
              </Stack>
              <div className="ecosystem-subBox">
                <div className="comp-gaming">
                  <div>
                    <Text className="sub-heading">Competitive Gaming</Text>
                    <Text className="para" marginBottom={"25px"}>
                      Enter a competitive arena to play & compete. Our multi-IP
                      casual gaming app let you to discover a champion in you.
                    </Text>
                  </div>
                  <div>
                    <Text className="sub-heading">True Ownership</Text>
                    <Text className="para" marginBottom={"25px"}>
                      Each of the digital assets you win, be it a limited
                      edition Z-passes, $PZP tokens or an exclusive digital
                      item, is yours.
                    </Text>
                  </div>
                  <div>
                    <Text className="sub-heading">Sustainable Economy</Text>
                    <Text className="para" marginBottom={"25px"}>
                      Long term sustainable game economy is what makes us unique
                      and trustworthy.
                    </Text>
                  </div>
                </div>
                <div>
                  <img
                    src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/638f46f363d64f5167ef315d_ecosystem_image.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a
              href="https://whitepaper.playzap.games/wp/introduction/welcome"
              target="_blank"
              className="uni-btn"
            >
              READ WHITEPAPER
            </a>
            {/* <HiOutlineArrowTopRightOnSquare /> */}
          </div>
        </section>

        {/* Third Section */}

        <section className="third-section">
          <div className="ourGames-box">
            <h1 className="our-games-title">Our Games</h1>
            <p className="our-games-p">
              Competitive casual games that are designed to test your skill. All
              under one gaming app.
            </p>
          </div>
          <div className="games-grid">
            <div className="zoom-container">
              <p>Match Master</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6390754f069fb08d203ca159_Match%20Master.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639075525fb6d142535b47c2_Frame%20630009.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Solitare Pro</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074a39090332005402757_Solitaire%20Pro.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074a87d217554204c9d30_Frame%20630000.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Stack Ball</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6390748c10a19814f670e16f_Stack%20ball.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6390748623b5308ca08ef0fa_Frame%20629999.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Block Puzzle</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074f18a8b4143de78e74d_Block%20Puzzle.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074f2cedc3f1f2c2d46a2_Frame%20630005.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Dice Merge</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074dec43742b19d9889ee_Dice%20Merge.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074e2ba3f551af3da016b_Frame%20630004.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Bubble Shooter</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074c98a8b416ace78e681_Bubble%20shooter.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074cd931182690cac6874_Frame%20630003.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Bingo Game</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/647ef37c3d501d2c45149808_63907522069fb05e9b3c9d0c_Bingo.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/647ef02c644fa6bdbab255bf_icon_Bingo.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Pool Blitz</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074b8c9e535c93d0f9328_8%20Ball%20Pool.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639074bc726dee2e30fbf1d9_Frame%20630002.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Rocker Blitz</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63907503ed104d39456c3d7b_Rocket%20Blitz.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6390750781a51ea35672449b_Frame%20630006.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>21 Black Jack</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639075381279b390670bbe0e_21.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a53b92c97e6a94032a30c2_21_jack.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Slice Runner</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639ff40b38e93f064905d9ce_slicerunner.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a57a01724e3f484d3af5c8_slicerunner.png"
                alt=""
              />
            </div>
            <div className="zoom-container">
              <p>Tank PvP</p>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6390755f1279b3b1d10bbf11_Tank.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63907562cc27e93d18016d34_Frame%20630010.png"
                alt=""
              />
            </div>
          </div>
          <div className="btn-box2">
            <a
              href="https://whitepaper.playzap.games/wp/playzap-gaming/our-games"
              target="_blank"
              className="uni-btn2"
            >
              Learn More
            </a>
            <i class="gg-arrows-expand-up-right"></i>
          </div>
        </section>

        {/* Fourth Section */}

        <section className="fourth-section">
          <div className="pzp-token-box">
            <div className="token-title-box">
              <Stack spacing={3}>
                <Text className="heading">Introducing $PZP Token</Text>
                <Text className="para" marginBottom={"25px"}>
                  The PZP token is in-game utility token, empowering the PlayZap
                  ecosystem to unlock the true potential of the game economy
                  where our players are the true owner.
                </Text>
              </Stack>
              <Link href="/pzp">
                <button className="token-btn">
                  Read Tokenomics & Use Case
                </button>
              </Link>
            </div>
            <div className="token-gif">
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a030f7517ed82aec94b1c0_z-coin-gif.gif"
                alt=""
              />
            </div>
          </div>
          <div className="token-bottom-box">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/643fbcd4a2420576cdfc0886_Frame%20629971.png"
                alt=""
              />
              <p>True Utility Value</p>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63b26e6785d8d8158b47b8b5_Digital_Assets_Ownership.png"
                alt=""
              />
              <p>Digital Asset Ownership</p>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63b26e88dd9044c119f49dbf_Stake_to_Earn.png"
                alt=""
              />
              <p>Stake to Earn</p>
            </div>
          </div>
        </section>

        {/* Fifth Section */}

        <section className="fifth-section">
          <Stack spacing={3}>
            <Text className="our-games-title" marginBottom={"10px"}>
              Roadmap
            </Text>
          </Stack>
          <div className="div-tab">
            <Tabs className="tab" border={"0"}>
              <TabList
                className="tab-list"
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Tab
                  _selected={{ border: "3px solid #7927fd91" }}
                  border={"3px solid gray"}
                  className="tab-menu"
                  isLazy
                  onClick={() => handleTabChange(0)}
                >
                  <p>2021</p>
                  <hr
                    style={{
                      display: activeIndex === 0 ? "block" : "none",
                    }}
                  />
                </Tab>
                <Tab
                  _selected={{ border: "3px solid #7927fd91" }}
                  border={"3px solid gray"}
                  className="tab-menu"
                  isLazy
                  onClick={() => handleTabChange(1)}
                >
                  <p>2022</p>
                  <hr
                    style={{
                      display: activeIndex === 1 ? "block" : "none",
                    }}
                  />
                </Tab>
                <Tab
                  _selected={{ border: "3px solid #7927fd91" }}
                  border={"3px solid gray"}
                  className="tab-menu"
                  isLazy
                  onClick={() => handleTabChange(2)}
                >
                  <p>Q1' 2023</p>
                  <hr
                    style={{
                      display: activeIndex === 2 ? "block" : "none",
                    }}
                  />
                </Tab>
                <Tab
                  _selected={{ border: "3px solid #7927fd91" }}
                  border={"3px solid gray"}
                  className="tab-menu"
                  isLazy
                  onClick={() => handleTabChange(3)}
                >
                  <p>Q2' 2023</p>
                  <hr
                    style={{
                      display: activeIndex === 3 ? "block" : "none",
                    }}
                  />
                </Tab>
                <Tab
                  _selected={{ border: "3px solid green" }}
                  border={"3px solid gray"}
                  className="tab-menu tab-menu-last"
                  isLazy
                  onClick={() => handleTabChange(4)}
                >
                  <p>Q2' 2023</p>
                  <hr
                    style={{
                      display: activeIndex === 4 ? "block" : "none",
                    }}
                  />
                </Tab>
              </TabList>
              <TabPanels transition={"0.3s ease-in-out"}>
                {/* first panel */}
                <TabPanel>
                  <div className="roadmap-grid">
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cac166762f45183131f_Frame%20630026.png"
                        alt=""
                      />
                      <button>Project Kick Off</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cabd9d4a14241f68b92_Frame%20630025.png"
                        alt=""
                      />
                      <button>Rocket Blitz</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cacc9353e1974a6c38a_Frame%20630028.png"
                        alt=""
                      />
                      <button>Stack Ball</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caca034aef710ada63f_Frame%20630027.png"
                        alt=""
                      />
                      <button>Competative Gaming MVP</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cac8447c80ccbde13c9_Frame%20630029.png"
                        alt=""
                      />
                      <button>Tech Infra-structure Ready</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cacece0607d15fdda16_Frame%20630030.png"
                        alt=""
                      />
                      <button>Pre-Alpha Release</button>
                    </div>
                  </div>
                </TabPanel>
                {/* second panel */}
                <TabPanel>
                  <div className="roadmap-grid">
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa4337e52c96dd205a_Frame%20630032.png"
                        alt=""
                      />
                      <button>PlayZap Launched</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa718e959b730e207f_Frame%20630036.png"
                        alt=""
                      />
                      <button>Solitaire</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9ece0604ecdfdda0e_Frame%20630031.png"
                        alt=""
                      />
                      <button>White-Paper Tokenamics Released</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caaca5172e0eb1645bd_Frame%20630033.png"
                        alt=""
                      />
                      <button>Bubble Shooter</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa1320eb31ba249696_Frame%20630037.png"
                        alt=""
                      />
                      <button>Cross Platform Mobile App</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cab64d52c95f4d3effd_Frame%20630034.png"
                        alt=""
                      />
                      <button>Pool Blitz</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cabece06040ddfdda15_Frame%20630038.png"
                        alt=""
                      />
                      <button>Block Puzzle</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa9e600df3e60ab85f_Frame%20630035.png"
                        alt=""
                      />
                      <button>Seed round led by KuCoin & 3 others</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa5b5e98167a4e9b49_Frame%20630039.png"
                        alt=""
                      />
                      <button>Telegram, Twitter & Discord</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984cab9e600d76ef0ab861_Frame%20630023.png"
                        alt=""
                      />
                      <button>Dice Merge</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa92a9bd6548f18ddc_Frame%20630024.png"
                        alt=""
                      />
                      <button>Fair-Play Anti-Cheat Tech</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa718e9590df0e207e_Frame%20630022.png"
                        alt=""
                      />
                      <button>App Soft Release</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9c9353ebc75a6c36e_Frame%20630020.png"
                        alt=""
                      />
                      <button>25+ VCs / Angel investors joined</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa718e9590df0e207e_Frame%20630022.png"
                        alt=""
                      />
                      <button>App Global Release</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca93e8200297c16980f_Frame%20630021.png"
                        alt=""
                      />
                      <button>Blockchain / Wallet Ready</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca8f858cffe6631aa85_Frame%20630011.png"
                        alt=""
                      />
                      <button>Full release of Mobile App</button>
                    </div>
                  </div>
                </TabPanel>
                {/* third panel */}
                <TabPanel>
                  <div className="roadmap-grid">
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca824911afd7f5d30e0_Frame%20630012.png"
                        alt=""
                      />
                      <button>Non Custodial Wallet Integration</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca89e600ddfb80ab846_Frame%20630013.png"
                        alt=""
                      />
                      <button>On Chain Deployment</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9874d1af9d36e0d70_Frame%20630014.png"
                        alt=""
                      />
                      <button>Complete Private Sale</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9ecdaeb5ac5b5410c_Frame%20630015.png"
                        alt=""
                      />
                      <button>Finalizing the IDO partners</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9d9d4a13248f68b68_Frame%20630018.png"
                        alt=""
                      />
                      <button>Release Match Master</button>
                    </div>
                  </div>
                </TabPanel>
                {/* fourth panel */}
                <TabPanel>
                  <div className="roadmap-grid">
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9e742b89c8e15d214_Frame%20630019.png"
                        alt=""
                      />
                      <button>Playzap wallet web version</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9e742b8dfdb15d211_Frame%20630016.png"
                        alt=""
                      />
                      <button>TGE</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca95541052f28b7a12e_Frame%20630017.png"
                        alt=""
                      />
                      <button>List $PZP on exchanges</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9ecdaeb5ac5b5410c_Frame%20630015.png"
                        alt=""
                      />
                      <button>Public Sale (IDO) completion</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984ca9c9353ebc75a6c36e_Frame%20630020.png"
                        alt=""
                      />
                      <button>400k+ Players 100k/Month active users</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63984caa4337e52c96dd205a_Frame%20630032.png"
                        alt=""
                      />
                      <button>Z Club weekly competition</button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/647894293dcf473ed499b751_icon_Bingo.png"
                        alt=""
                      />
                      <button>Bingo Blitz</button>
                    </div>
                  </div>
                </TabPanel>
                {/* fifth panel */}
                <TabPanel>
                  <div className="roadmap-grid roadmap-grid-last">
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a42ee7f60775e39cc6e0_Frame%20630055.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        Multichain framework
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a443a4de3a4a9e3e8aac_Frame%20630052.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        The desktop version of the gaming platform
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a4a697e122de7caa0f58_Frame%20630050.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        2 New single player games{" "}
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a47812038fdc22f18886_Frame%20630051.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        In-game digital store
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a48ca4de3a4a9e3ed391_Frame%20630054.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        On-ramp feature to purchase $PZP directly through the
                        wallet
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a496809bc8d540a25934_Frame%20630053.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        Real-world prizes to redeem against $PZP and in-game
                        currency
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/64a2a67b01372689ed294e13_Frame%20630056.png"
                        alt=""
                      />
                      <button style={{ backgroundColor: "green" }}>
                        New game mode: Free to play / Earn tokens
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <div className="btn-box3">
              <a
                href="https://whitepaper.playzap.games/wp/introduction/completed-milestones"
                target="_blank"
                className="uni-btn3"
              >
                View Full Roadmap & Milestones
              </a>
              <i class="gg-arrows-expand-up-right"></i>
            </div>
          </div>
        </section>

        {/* Sixth Section */}

        <section className="sixth-section">
          <Stack spacing={3}>
            <Text className="our-games-title" marginBottom={"10px"}>
              Top News
            </Text>
          </Stack>
          <div className="news-container">
            <div>
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/643e3904cca0cfe9305f80f6_kuxoin%20listing%20image%20for%20website-p-500.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h5>PlayZap (PZP) Gets Listed on KuCoin! World Premier</h5>
              </div>
              <div>
                <h6 className="news-subtitle">
                  PlayZap (PZP) will be available on KuCoin. The supported
                  trading pair is PZP/USDT.
                </h6>
              </div>
              <div>
                <p className="news-para">April 17, 2023 - 2 min read</p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/641d59d73c3d89029020d8dd_Mega%20Event%20(4)-p-500.png"
                  alt=""
                />
              </div>
              <div>
                <h5>PlayZap Tournament with a 20,000 USD Prize Pool</h5>
              </div>
              <div>
                <h6 className="news-subtitle">
                  The tournament will run from, March 20th, 2023, to April 26th,
                  2023.
                </h6>
              </div>
              <div>
                <p className="news-para">March 20, 2023 - 3 min read</p>
              </div>
            </div>
          </div>
          <Accordion allowToggle>
            <AccordionItem border={"0px"}>
              <AccordionPanel pb={4}>
                <div
                  className="news-container"
                  id="news-more"
                  // style={{ width: "63%", marginTop: "10px" }}
                >
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63b51579464a5228d04518f2_PRODUCT%20POSTS%20(5)-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>The year 2022 & Beyond</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        It’s been an eventful year for PlayZap Games. As we look
                        back on the past 12 months
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">January 4, 2023 - 4 min read</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a54f69c3a74f33df01f861_Screenshot%202022-12-23%20at%2012.19.04%20PM-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>PlayZap Games has successfully closed seed round</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        Led by Kucoin Labs, backed by Oddiyana Venture, Arcanum
                        Capital, and PrimeBlock Ventures.
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">
                        December 23, 2022 - 3 min read
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/64928cacf1463ace2297a390_anti%20cheat-p-500.webp"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>What is Fake Game Scoring?</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        PlayZap has Integrated an anti-cheat system, cheating
                        can ruin the experience for everyone involved.
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">April 3, 2023 - 2 min read</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63be4ccca6326f5c1bbf1ea9_PRODUCT%20POSTS%20(8)-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>Guide: How to play with BUSD in PlayZap Games</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        This time we are introducing BUSD contests
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">January 10, 2023 - 3 min read</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a454660f968b3044ee855b_Screenshot%202022-12-22%20at%206.28.02%20PM-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>
                        KuCoin Labs Incubates and Invests in PlayZap Games
                      </h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        The team has solid experience in Web-2.0 gaming
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">August 4, 2022 - 5 min read</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a5599d05d45917922cb33a_1024X512%20Twitter%20Banners%20(5)-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>PlayZap featured on NewsBTC</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        PlayZap – The future of P2E Gaming is here!
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">
                        December 23, 2022 - 4 min read
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a54364cc7c35c1ccd36818_Screenshot%202022-12-23%20at%2011.27.50%20AM-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>Scuti and PlayZap Games partner on brand rewards</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        Scuti and PlayZap Games partner on commerce and brand
                        rewards for play-to-earn games
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">
                        February 21, 2023 - 4 min read
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63a557bbdcc680cb70e64c81_Screenshot%202022-12-23%20at%2012.54.22%20PM-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>
                        PlayZap Awarded top 3 projects on Smoothie Rewards
                      </h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        PlayZap is a play-to-earn community-driven gaming
                        platform where players can compete
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">
                        December 23, 2022 - 2 min read
                      </p>
                    </div>
                  </div>
                  <div className="news-hide">
                    <div>
                      <img
                        src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63b81c40e5d9f83108c96bb2_PRODUCT%20POSTS%20(7)-p-500.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5>PlayZap Closed Private Round Led by KuCoin Labs</h5>
                    </div>
                    <div>
                      <h6 className="news-subtitle">
                        The private round of funding for PlayZap Games is now
                        closed with Kucoin Labs leading the investment
                      </h6>
                    </div>
                    <div>
                      <p className="news-para">January 5, 2023 - 2 min read</p>
                    </div>
                  </div>
                </div>
              </AccordionPanel>
              <AccordionButton
                className="view-more"
                width={"140px"}
                onClick={toggleExpand}
              >
                <Box as="span" textAlign="center">
                  {isExpanded ? "View Less" : "View More"}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Seventh Section */}

        <section className="seventh-section">
          <Stack spacing={3}>
            <Text className="our-games-title" marginBottom={"10px"}>
              Join Our Community
            </Text>
          </Stack>
          <div className="socials-box">
            <Link
              href={"https://discord.com/invite/3RfxDNkQpN"}
              target="_blank"
            >
              <div>
                <img src="/assets/discord.png" alt="" />
              </div>
            </Link>
            <Link href={"https://twitter.com/playzapgames"} target="_blank">
              <div>
                <img src="/assets/twitter.png" alt="" />
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/playzap-games"}
              target="_blank"
            >
              <div>
                <img src="/assets/linkedin.png" alt="" />
              </div>
            </Link>
            <Link href={"https://t.me/PlayZapOfficial"} target="_blank">
              <div>
                <img src="/assets/telegram.png" alt="" />
              </div>
            </Link>
            <Link href={"https://playzap.medium.com/"} target="_blank">
              <div>
                <img src="/assets/medium.png" alt="" />
              </div>
            </Link>
            <Link
              href={"https://www.youtube.com/@playzapgames5705"}
              target="_blank"
            >
              <div>
                <img src="/assets/youtube.png" alt="" />
              </div>
            </Link>
          </div>
          <h2
            className="community-text"
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            150k+ strong & growing!
          </h2>
        </section>
        <ScrollToTopButton />
      </section>
    </>
  );
}
