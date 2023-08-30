import React, { useState } from "react";
import {
  Stack,
  Text,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
} from "@chakra-ui/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Company = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="company-container">
        <div className="about-pz">
          <div>
            <h1>About PlayZap</h1>
            <p>
              We are group of experienced game & product builder served millions
              of players at companies like MiniClip, Knowledge Adventure,
              Gameloft & top casual games publisher in the past. Our team has
              built some of top grossing games on mobile platforms & served over
              100 millions of players worldwide. Our core expertise lies into
              building amazing gaming experiences that our players love!
              <br />
              <br />
              We are in the journey to build an entertaining gaming product with
              web3 technology infrastructure and serve vibrant community of
              players and investors. At Playzap, our mission is to serve next
              billion players and make them true owner of the ecosystem.
            </p>
            <button>Join Us</button>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63982630abd85e2380c3bc43_about-image.png"
              alt=""
            />
          </div>
        </div>
        <div className="backed-marq">
          <div>
            <h1>Backed By Marquee Investors</h1>
            <p>
              PlayZap is backed by marquee investors who are active in the
              blockchain and gamefi space over years. Over 25+ VCs & angel
              investors invested in PlayZap across seed and private rounds.
            </p>
          </div>
        </div>
        <div className="marq-grid">
          <a
            href="https://www.kucoin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
              alt=""
            />
          </a>
          <a
            href="https://www.kucoin.com/land/kucoinlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
              alt=""
            />
          </a>

          <a
            href="https://www.arcanum.capital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fed79311671e9149e880_3.png"
              alt=""
            />
          </a>

          <a
            href="https://kangaroocapital.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396feecb516f833c9f0d2fd_4.png"
              alt=""
            />
          </a>

          <a
            href="https://www.dwf-labs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
              alt=""
            />
          </a>

          <a
            href="https://oddiyana.ventures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff167adea611adbdffa2_6.png"
              alt=""
            />
          </a>

          <a href="https://weway.io/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff203a8b1167cc5c8f3a_7%2032210.png"
              alt=""
            />
          </a>

          <a
            href="http://www.primeblock.ventures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff2a4a43b65cd8abe4cd_8.png"
              alt=""
            />
          </a>

          <a
            href="https://apexdigital.vc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff38c76cec6383187b5f_9.png"
              alt=""
            />
          </a>

          <a
            href="https://synapse.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff41ac02806ab36ab403_10.png"
              alt=""
            />
          </a>

          <a
            href="https://www.coinblock.vc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff4cc76cec835a187c68_12.png"
              alt=""
            />
          </a>

          <a
            href="https://polkabridge.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ffa16d76aa27674e054d_content%20-%20WP%2074.png"
              alt=""
            />
          </a>
        </div>
        <div className="partner">
          <div>
            <h1>Partnered with Amazing Technology Builder</h1>
            <p>
              Our tech partners support & empower our technical ecosystem that
              makes PlayZap even more secure, fun & rewarding destination for
              players.
            </p>
          </div>
          <div className="partner-grid">
            <a
              href="https://www.bnbchain.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
                alt=""
              />
            </a>

            <a
              href="https://particle.network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff82d6a20c01df62e418_18.png"
                alt=""
              />
            </a>

            <a
              href="https://scuti.store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff732721b3ddaf929c1f_16.png"
                alt=""
              />
            </a>

            <a
              href="https://unity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff6acf4afb94723fac38_15.png"
                alt=""
              />
            </a>

            <a
              href="https://scuti.store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
                alt=""
              />
            </a>

            <a
              href="https://readyplayer.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="team">
          <div>
            <h1>Core team behind all the action</h1>
            <p>
              Our leadership team includes gaming entrepreneur and blockchain
              technology veteran who has experience in building and running
              large game titles with millions of players & revenue
            </p>
          </div>
          <div className="team-grid">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a1dd408371318a19b986_Ellipse%20110.png"
                alt=""
              />
              <h6>Abhishek Buchvani</h6>
              <p>Co-Founder, CEO</p>
              <a href="https://www.linkedin.com/in/abhishekb/" target="_blank">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a3a4408371f7b71ad7a5_Ellipse%20110%20(1).png"
                alt=""
              />
              <h6>Taha Shahda</h6>
              <p>Co-Founder, CCO</p>
              <a href="https://www.linkedin.com/in/taha-shahda-03a54362/" target="_blank">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a402c720d8ba0212bc18_Ellipse%20110%20(2).png"
                alt=""
              />
              <h6>Ceyhun Bayel</h6>
              <p>Business Advisor, UA Head</p>
              <a href="https://www.linkedin.com/in/ceyhunbayel/" target="_blank">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a44bd09f3f47beef7a49_Ellipse%20110%20(3).png"
                alt=""
              />
              <h6>Althaf Saleem</h6>
              <p>3D Game Artist</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a49d61144959cc89fa0d_Ellipse%20110%20(4).png"
                alt=""
              />
              <h6>Amal Shaji</h6>
              <p>3D Game Artist</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/646b6314e64bbafaa34e8f95_Praveen_0011.png"
                alt=""
              />
              <h6>Praveen Sadda</h6>
              <p>UI/UX Artist</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a72700bdd761dcfe25fd_Ellipse%20110%20(7).png"
                alt=""
              />
              <h6>Vishal Lakhani</h6>
              <p>Game Developer</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a78a5edbd6dca88bf4f3_Ellipse%20110%20(8).png"
                alt=""
              />
              <h6>Sunny Navani</h6>
              <p>Games & Blockchain Developer</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a7d026f6d309fb26bf6d_Ellipse%20110%20(9).png"
                alt=""
              />
              <h6>Abhinav Bhasin</h6>
              <p>Game Developer</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a7f6e059243902256479_Ellipse%20110%20(10).png"
                alt=""
              />
              <h6>Berkan Albayrak</h6>
              <p>Game Developer</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a8356029024d4f68d139_Ellipse%20110%20(11).png"
                alt=""
              />
              <h6>Harsh Buchvani</h6>
              <p>Partnership Manager</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6399a9066114491a4c8c669a_Ellipse%20110%20(14).png"
                alt=""
              />
              <h6>Shubham Nikose</h6>
              <p>Quality Assurance</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/646b549b790adfd2618a55bf_Zeeshan-pic1.png"
                alt=""
              />
              <h6>Zeeshan Salim</h6>
              <p>Frontend Developer</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/646b629fe1f05556c9891a1d_Sparshhhh.png"
                alt=""
              />
              <h6>Sparsh Garg</h6>
              <p>Backend Developer</p>
              <a href="">
                <img src="/assets/linkedin.png" alt="" />
              </a>
            </div>
            <div className="join-team">
              <img
                src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/639b0d71ab43ca58fe2ad907_join-us-image.png"
                alt=""
              />
              <button>Join Us</button>
            </div>
          </div>
        </div>
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
        <section className="seventh-section" style={{ marginTop: "150px" }}>
          <Stack spacing={3}>
            <Text className="our-games-title" marginBottom={"10px"}>
              Contact Us
            </Text>
          </Stack>
          <div className="socials-box">
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
          <h2
            className="community-text"
            style={{
              color: "gray",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            For help with a game: <a href="">support@playzap.games</a>
          </h2>
          <h2
            className="community-text"
            style={{
              color: "gray",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            For partnership inquiries: <a href="">contact@playzap.games</a>
          </h2>
        </section>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Company;
