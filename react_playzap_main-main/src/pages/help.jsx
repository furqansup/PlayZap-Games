import React from "react";
import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Help = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="help-container">
        <div className="knowledge">
          <h1>Knowledge Base</h1>
          <button>Contact Us</button>
        </div>
        <div className="k-tabs">
          <Tabs align="left" className="main-tab">
            <TabList flexWrap={"wrap"} gap={"20px"} className="k-tablist">
              <Tab
                className="k-tab"
                onClick={() => handleTabClick(0)}
                style={{
                  backgroundColor: activeTab === 0 ? "cyan" : "#7520c0",
                  color: activeTab === 0 ? "black" : "white",
                }}
              >
                General
              </Tab>
              <Tab
                className="k-tab"
                onClick={() => handleTabClick(1)}
                style={{
                  backgroundColor: activeTab === 1 ? "cyan" : "#7520c0",
                  color: activeTab === 1 ? "black" : "white",
                }}
              >
                Games
              </Tab>
              <Tab
                className="k-tab"
                onClick={() => handleTabClick(2)}
                style={{
                  backgroundColor: activeTab === 2 ? "cyan" : "#7520c0",
                  color: activeTab === 2 ? "black" : "white",
                }}
              >
                Rules & Scoring
              </Tab>
              <Tab
                className="k-tab"
                onClick={() => handleTabClick(3)}
                style={{
                  backgroundColor: activeTab === 3 ? "cyan" : "#7520c0",
                  color: activeTab === 3 ? "black" : "white",
                }}
              >
                Tournaments
              </Tab>
              <Tab
                className="k-tab"
                onClick={() => handleTabClick(4)}
                style={{
                  backgroundColor: activeTab === 4 ? "cyan" : "#7520c0",
                  color: activeTab === 4 ? "black" : "white",
                }}
              >
                Game Currency & Wallet
              </Tab>
              <Tab
                className="k-tab"
                onClick={() => handleTabClick(5)}
                style={{
                  backgroundColor: activeTab === 5 ? "cyan" : "#7520c0",
                  color: activeTab === 5 ? "black" : "white",
                }}
              >
                $PZP - A Digital Token
              </Tab>
            </TabList>
            <TabPanels>
              {/* first panel */}
              <TabPanel className="k-tabPanel">
                <Accordion className="k-accordion" allowToggle>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Can I deactivate/delete my account?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Yes, you can find the option on home page of PlayZap app
                      under menu tab help & support
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Can I have multiple accounts?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Yes, you can but one email can only have one account
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What is PlayZap games?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      PlayZap games is competitive skill-based gaming app built
                      on blockchain technology where you can play your favorite
                      game, compete against other players and win rewards.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Where can I find the PlayZap Gaming app?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can download the official PlayZap Gaming app on Google
                      Play or Apple AppStore. Alternatively, you can also play
                      on your desktop (coming soon). If you would like to play
                      on multiple platforms, make sure you use the same account
                      to login to take your progress.
                      <br /> Our app is currently in beta stage.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How does the PlayZap Gaming app work?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can see the walkthrough video to learn more about the
                      app and how can you play?
                      <iframe
                        className="frame"
                        src="https://www.youtube.com/embed/-NJS1eY6uSI"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How can I join the PlayZap Community?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can join the community on Discord and Telegram as well
                      as you can follow us on Twitter to keep up with the latest
                      news and announcements.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How do I reach out to the PlayZap team?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can join our community and reach out to us by sending
                      messages to relevant channels and tag our moderator.
                      Alternately, you can also send us direct email at{" "}
                      <a
                        href="mailto:support@playzap.games"
                        style={{
                          textDecoration: "underline",
                          color: "rgb(64, 113, 236)",
                          cursor: "pointer",
                        }}
                      >
                        support@playzap.games
                      </a>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          My account is locked. How to unlock it?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      If your account has faced suspicious activity then you
                      might not be able to recover your account, otherwise, you
                      can raise a ticket in our discord server
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Is my personal information secure?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      We don’t store your personal information other than your
                      Unique ID (UID) which is generated from your email address
                      and is securely stored on our servers.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How to log in for the first time?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You are given the option to log in with your apple or
                      google account.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              {/* second panel */}
              <TabPanel className="k-tabPanel">
                <Accordion className="k-accordion" allowMultiple>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the games available on PlayZap App?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      PlayZap Gaming app offers 7 popular games IP built-on
                      blockchain technology and powered by official PlayZap
                      digital tokens. The app includes Block Puzzle, 8 Ball
                      Blitz, Bubble Shooter, Rocket Blitz, Dice Merge, Stack
                      Ball, Solitaire Pro. All of our games can be played within
                      one single app. The PlayZap team continues to bring new
                      games to the app and improve the experience of existing
                      games.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              {/* third panel */}
              <TabPanel className="k-tabPanel">
                <Accordion className="k-accordion" allowMultiple>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Game details, rules, and tutorials
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Click the game below to see detailed info about the game,
                      rules and walkthrough video.
                      <ol>Block Puzzle </ol>
                      <ol>8 Ball Blitz</ol>
                      <ol>Bubble Shooter</ol>
                      <ol>Rocket Blitz </ol>
                      <ol>Dice Merge</ol>
                      <ol>Stack Ball </ol>
                      <ol>Solitaire Pro</ol>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              {/* fourth panel */}
              <TabPanel className="k-tabPanel">
                <Accordion className="k-accordion" allowMultiple>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          When does my entry fee get deducted?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      The Entry Fee is deducted upon joining any Live Match,
                      Group Match or Challenges.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the tournaments and game modes available to
                          play?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      There are 3 unique game modes available in each game. Live
                      Matches, Group Matches and Challenges.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the Live Matches & how do I join?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      League matches are time based tournaments where you can
                      play against a large number of players. You can play
                      multiple times to score as high as possible to stay on the
                      top of the leaderboard. When time is over, the result will
                      be announced. The top ranked players will be rewarded.
                      <iframe
                        className="frame"
                        src="https://www.youtube.com/embed/-NJS1eY6uSI?start=28"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the Group Matches & how do I join?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Group matches are played within a small group of similar
                      skilled players. When all players play their turn, the
                      round will be over and the result will be announced. Top
                      ranked players will be rewarded with the prizes. These
                      group matches are usually organized between 4 players
                      up-to 16 players.
                      <iframe
                        className="frame"
                        src="https://www.youtube.com/embed/-NJS1eY6uSI?start=117"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the Challenge Matches & how do I join?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      This is an exclusive game mode to play against other
                      players. You can create a new challenge by selecting the
                      entry fee. You will be taken to play the round and when
                      your round is over, your challenge will be posted and
                      visible to other similar skilled players. When someone
                      accepts your challenge and plays their turn, the round
                      will be over and the result will be announced. Player with
                      the higher score will win the match and take the prize.
                      <iframe
                        className="frame"
                        src="https://www.youtube.com/embed/-NJS1eY6uSI?start=150"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Where do I see the match progress results?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Your match progress and result will be available in the
                      activity panel on the home screen. You will be able to
                      view ongoing matches and the result of completed matches.{" "}
                      <br /> You will also receive a notification when the match
                      is over and the result is announced. Do ensure the app
                      notification is turned on so you do not miss any important
                      messages.
                      <iframe
                        className="frame"
                        src="https://www.youtube.com/embed/-NJS1eY6uSI?start=150"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What is the minimum fee to play the games?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can play Free Matches or Tutorial Matches for Free.
                      Token Based matches/Tournaments will have a minimum fee
                      based on the match.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              {/* fifth panel */}
              <TabPanel className="k-tabPanel">
                <Accordion className="k-accordion" allowMultiple>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How can I add tokens to my wallet?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can win tokens by playing tournaments or you can
                      transfer it from your Ethereum wallet to your PlayZap
                      wallet address
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How can I check my wallet balance?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You can check it by going to the in-game shop and tap on
                      the ‘Wallet’ button in the All section, then all the
                      tokens will be visible in another window which is your own
                      custom PlayZap wallet. ‍
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How can I withdraw my tokens?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      You will have to transfer your tokens from your PlayZap
                      wallet to your Binance or any other web3 wallet from where
                      you can convert them into cash ‍
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          When do I get winnings in my wallet?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      After the tournament gets closed, you shall see it in your
                      wallet within 30-50 seconds
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What is the currency in PlayZap?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      $PZP token is live on multiple exchanges including kucoin,
                      mexc, gate.io, pancakeswap etc.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What is the PlayZap Wallet & how does it work?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      PlayZap in-game wallet stores the game currency and allows
                      players to make seamless transactions within the app
                      itself. It stores $PZP tokens, Z tickets and Gems.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the Gems & how do I earn?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Gems are secondary currency in the game that will allow
                      players to join free matches in the game. There are quite
                      a few matches available for you to practice before joining
                      other high roller tournaments. <br /> You can win Gems by
                      winning tutorial or free matches, collect from spin
                      reward. As well as you can buy them through the Z-tickets.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the Z tickets & how do I earn?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Z-tickets are premium currency that will allow players to
                      participate in high roller matches to either win tickets
                      or $PZP. You can either win by winnings competitions or
                      purchase them on the store.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What are the $PZP & how do I earn?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      $PZP is a Playzap digital utility token that will be
                      available on the crypto exchange platform to trade. More
                      info will be provided when $PZP is live on the platform.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What is the minimum amount to withdraw
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      PlayZap wallet has no minimum or maximum limit to withdraw
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          How many times can I withdraw in a day
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      There’s no limit to withdrawing your tokens available in
                      the on-chain PlayZap Wallet
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          I made a deposit, but it’s not showing in my wallet.
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      The deposit amount may take up to 30 seconds to get
                      confirmed and visible to your wallet, If it does not
                      reflect please reach out to us on discord.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What is the minimum deposit amount?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      PlayZap wallet has no minimum or maximum limit to deposit
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Do I have to pay a gas fee at the time of withdrawal
                          and deposit?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Yes, there will be minimum gas fee to withdraw but there
                      will be no gas fee to deposit through In-App Purchase to
                      save players from all gas war we pay gas and charge $RLY
                      equivalent to the gas fee we paid (for your withdrawal)
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          Can I transfer my tokens to another wallet?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      Yes, you can transfer your tokens to any other web3 wallet
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          What security measures PlayZap takes to secure my
                          wallet?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      PlayZap wallet is a non-custodial web3 wallet, therefore
                      the player is the sole owner of the private keys and no
                      one else has access to any private keys which makes it
                      more secure than any other web3 game out there.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              {/* sixth panel */}
              <TabPanel className="k-tabPanel">
                <Accordion className="k-accordion" allowMultiple>
                  <AccordionItem className="k-accItem">
                    <h2>
                      <AccordionButton className="k-button">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          $PZP
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="k-accPanel" pb={4}>
                      $PZP token is live on multiple exchanges including kucoin,
                      mexc, gate.io, pancakeswap etc.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Help;
