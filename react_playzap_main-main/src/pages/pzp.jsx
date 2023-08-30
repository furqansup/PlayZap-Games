import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const PZP = () => {
  return (
    <div className="pzp-container">
      <div className="pzp-page-first-box">
        <div>
          <h1>The $PZP Token</h1>
          <p>
            The $PZP is a utility token used to power every functionality of our
            ecosystem.
            <br />
            <br />
            Earn, trade, and use $PZP to participate in tournaments, play PvP,
            collect limited edition NFTs, participate in high-jackpot matches,
            and much more. Grow your token pool and get back a percentage of the
            profits from our tournaments, our marketplace, and all wallet
            transactions.
            <br />
            <br />
            The native $PZP token establishes true in-game utility and helps
            build a rewarding and meaningful economy for our players. We build a
            hybrid player experience for both (web2 / web3) players in order to
            enjoy the free-to-play model without any barrier and take advantage
            of ´Skill to Earn´ format. ‍
            <br />
            <br />
            We keep a healthy <span>reward pool of 30M tokens</span>
            (around 20% of the total supply) for our players. Learn more about
            the distribution, and vesting schedule{" "}
            <a href="https://whitepaper.playzap.games/wp/economy/the-usdpzp-token/tokenomics">
              here
            </a>
          </p>
        </div>
        <div >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d75dde43128cb809b53dbf_Screenshot%202023-01-30%20at%2011.33.45%20AM.png"
            alt=""
          />
        </div>
      </div>
      <div className="pzp-page-first-box-buttons">
        <div className="btn-box-pzp">
          <button>Learn more about $PZP</button>
          <i class="gg-arrows-expand-up-right"></i>
        </div>
        <a href="https://stake.playzap.games/" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/639b04c800c2a98104fcc250_playzap-z-icon.png"
            alt=""
          />
          Stake $PZP
        </a>
        <Popover>
          <PopoverTrigger>
            <Button
              style={{ fontWeight: "400" }}
              _hover={{
                bg: "rgb(147, 201, 238);",
                bg: "linear-gradient(180deg, rgba(147, 201, 238, 1) 0%, rgba(15, 118, 255, 1) 100%, rgba(15, 240, 255, 1) 100%)",
              }}
            >
              Buy $PZP
            </Button>
          </PopoverTrigger>
          <Portal >
            <PopoverContent bg={"#383b4e"} border={'0'}>
              <PopoverArrow />
              <PopoverBody bg={"#383b4e"} borderRadius={'10px'}>
                <div className="token-btn-grid">
                  <div>
                    <a href="">
                      <img src="/assets/token-images/Kucoin-W_1.png" alt="" />
                      <img src="/assets/token-images/k.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/Gate-W.png" alt="" />
                      <img src="/assets/token-images/c.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/mexc-W.png" alt="" />
                      <img src="/assets/token-images/h.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/BTSE-W.png" alt="" />
                      <img src="/assets/token-images/bb.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/toobit-W.png" alt="" />
                      <img src="/assets/token-images/bee.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/bitkan-W.png" alt="" />
                      <img src="/assets/token-images/b.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/pancake-W.png" alt="" />
                      <img src="/assets/token-images/rabbit.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="/assets/token-images/Moji-W.png" alt="" />
                      <img src="/assets/token-images/m.png" alt="" />
                    </a>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </div>
      <div className="tokenomics">
        <h1>Tokenomics</h1>
        <div className="tokenomics-img">
          <img src="/assets/Tokenomics.png" alt="" />
          <div className="seed first">
            <h6 className="seed-title">Seed Round</h6>
            <p className="seed-percentage">6.50% (9,791,667 token)</p>
            <p className="custom-p">
              8% TGE, cliff 1 month, later linear vesting over 12 months
            </p>
          </div>
          <div className="seed second">
            <h6 className="seed-title">Team & Advisors</h6>
            <p className="seed-percentage">19.00% (28,500,000 token)</p>
            <p className="custom-p">
              0% TGE, cliff 8 months, later linear vesting over 24 months
            </p>
          </div>
          <div className="seed third">
            <h6 className="seed-title">Public Sale</h6>
            <p className="seed-percentage">3.60% (9,978,333 token)</p>
            <p className="custom-p">
              20% TGE, cliff 1 month, later linear vesting over 6 months
            </p>
          </div>
          <div className="seed fourth">
            <h6 className="seed-title">Game Incentives</h6>
            <p className="seed-percentage">20.00% (30,000,000 token)</p>
            <p className="custom-p">
              0% TGE, cliff 1 week, later strategic release as per game plan for
              players
            </p>
          </div>
          <div className="seed fifth">
            <h6 className="seed-title">Private Sale</h6>
            <p className="seed-percentage">20.00% (30,000,000 token)</p>
            <p className="custom-p">
              10% TGE, cliff 1 month, later linear vesting over 10 months
            </p>
          </div>
          <div className="seed fifth">
            <h6 className="seed-title">Private Sale</h6>
            <p className="seed-percentage">20.00% (30,000,000 token)</p>
            <p className="custom-p">
              10% TGE, cliff 1 month, later linear vesting over 10 months
            </p>
          </div>
          <div className="seed sixth">
            <h6 className="seed-title">Publisher Program</h6>
            <p className="seed-percentage">1.60%</p>
            <p className="custom-p">
              0% TGE, cliff 2 months, later strategic release over 12 months
            </p>
          </div>
          <div className="seed seventh">
            <h6 className="seed-title">Marketing</h6>
            <p className="seed-percentage">10.00% (15,000,000 token)</p>
            <p className="custom-p">
              0% TGE, cliff 2 months, later linear vesting over 15 months
            </p>
          </div>
          <div className="seed eight">
            <h6 className="seed-title">Liquidity, Exchanges</h6>
            <p className="seed-percentage">19.30% (29,000,000 token)</p>
            <p className="custom-p">
              15% TGE, cliff 2 months, later strategic release as per CEX / DEX
              listing
            </p>
          </div>
          <div className="seed ninth">
            <h6 className="seed-title">Reserves</h6>
            <p className="seed-percentage">10.70% (15,000,000 token)</p>
            <p className="custom-p">
              10% unlock on TGE with 12 months liner vesting
            </p>
          </div>
        </div>
        <div className="tokenomics-bottom-container">
          <div className="tokenomics-bottom">
            <div>
              <h6>Token Name</h6>
              <p>playzap</p>
            </div>
            <div>
              <h6>Token Symbol</h6>
              <p>$PZP</p>
            </div>
            <div>
              <h6>Token SUPPLY</h6>
              <p>150,000,000 playzap</p>
            </div>
            <div>
              <h6>Blockchain Network</h6>
              <p>BNB SMART CHAIN</p>
            </div>
          </div>
          <div className="btn-box2 pzp-learnMore">
            <a
              href="https://whitepaper.playzap.games/wp/economy/the-usdpzp-token/tokenomics"
              target="_blank"
              className="uni-btn2"
            >
              Learn More
            </a>
            <i class="gg-arrows-expand-up-right"></i>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default PZP;
