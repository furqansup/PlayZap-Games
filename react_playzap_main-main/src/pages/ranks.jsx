import React, { useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import axios from "axios";
import { Stack, Text } from "@chakra-ui/react";

const leaderboardData = [
  {
    user_name: "Art Yost",
    value: 0.0,
    user_id: "qjkmp",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/Dj8zxvaUl.png",
    is_mine: false,
  },
  {
    user_name: "Houston Konopelski CPA",
    value: 0.0,
    user_id: "z4o77",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/Mzl45cRKe.png",
    is_mine: false,
  },
  {
    user_name: "Sen. Junior Ratke",
    value: 0.0,
    user_id: "lze3e",
    level: 1,
    image_id: 0,
    r_image: "https://renderapi.s3.amazonaws.com/iO0wWWEII.png",
    is_mine: false,
  },
  {
    user_name: "PrincessX5310",
    value: 0.0,
    user_id: "n4wro",
    level: 1,
    image_id: 5,
    r_image: "https://renderapi.s3.amazonaws.com/wyqBuankG.png",
    is_mine: false,
  },
  {
    user_name: "Vance Kuhn I",
    value: 0.0,
    user_id: "3jzgq",
    level: 1,
    image_id: null,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63298248a5b9216204c1534a_Avatar_2.png",
    is_mine: false,
  },
  {
    user_name: "Karrie Steuber",
    value: 0.0,
    user_id: "31kkn",
    level: 1,
    image_id: null,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/632982479758cd7c1563fa5d_Avatar_0.png",
    is_mine: false,
  },
  {
    user_name: "Marlena Rau",
    value: 0.0,
    user_id: "y12lz",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/7oiqOca1N.png",
    is_mine: false,
  },
  {
    user_name: "FlagshipX4317",
    value: 0.0,
    user_id: "pg0z4",
    level: 4,
    image_id: 0,
    r_image: "https://renderapi.s3.amazonaws.com/3pIOqdkoY.png",
    is_mine: false,
  },
  {
    user_name: "Steve Bauch",
    value: 0.0,
    user_id: "7l4rm",
    level: 2,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/3pIOqdkoY.png",
    is_mine: false,
  },
  {
    user_name: "Shara Block",
    value: 0.0,
    user_id: "eyzr5",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/a7zhzYG8Q.png",
    is_mine: false,
  },
  {
    user_name: "Rene Franecki",
    value: 0.0,
    user_id: "eee15",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/3pIOqdkoY.png",
    is_mine: false,
  },
  {
    user_name: "Renetta Smith",
    value: 0.0,
    user_id: "x73yo",
    level: 1,
    image_id: null,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6329824712e3aa703a66e88f_Avatar_1.png",
    is_mine: false,
  },
  {
    user_name: "PumpkinX2787",
    value: 0.0,
    user_id: "lqzmv",
    level: 1,
    image_id: 6,
    r_image: "https://renderapi.s3.amazonaws.com/DnWCwyhHI.png",
    is_mine: false,
  },
  {
    user_name: "Jefferey Wolf",
    value: 0.0,
    user_id: "y1m4o",
    level: 1,
    image_id: null,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/632982479758cd7c1563fa5d_Avatar_0.png",
    is_mine: false,
  },
  {
    user_name: "Rea Ferry",
    value: 0.0,
    user_id: "lzwxx",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/DnWCwyhHI.png",
    is_mine: false,
  },
  {
    user_name: "Clement Schulist",
    value: 0.0,
    user_id: "zvyql",
    level: 2,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/aejxtXBzq.png",
    is_mine: false,
  },
  {
    user_name: "Deeann Schamberger III",
    value: 0.0,
    user_id: "kovdz",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/1ixFOZvU5.png",
    is_mine: false,
  },
  {
    user_name: "TitaniumX8471",
    value: 0.0,
    user_id: "v2334",
    level: 2,
    image_id: 5,
    r_image: "https://renderapi.s3.amazonaws.com/wyqBuankG.png",
    is_mine: false,
  },
  {
    user_name: "DexterX9663",
    value: 0.0,
    user_id: "3pvjn",
    level: 1,
    image_id: 8,
    r_image: "https://renderapi.s3.amazonaws.com/JRdGIRCuW.png",
    is_mine: false,
  },
  {
    user_name: "Ngan Stroman",
    value: 0.0,
    user_id: "kp07r",
    level: 2,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/g5twKNJJu.png",
    is_mine: false,
  },
  {
    user_name: "Walter Bartell",
    value: 0.0,
    user_id: "m3o1x",
    level: 5,
    image_id: 0,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/626a374610b4120803d24f2e_Group%204502.png",
    is_mine: false,
  },
  {
    user_name: "Jonathan Fadel",
    value: 0.0,
    user_id: "lm5dz",
    level: 1,
    image_id: null,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63298248a5b9216204c1534a_Avatar_2.png",
    is_mine: false,
  },
  {
    user_name: "Madalyn Pfannerstill",
    value: 0.0,
    user_id: "075nz",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/wyqBuankG.png",
    is_mine: false,
  },
  {
    user_name: "VultureX4720",
    value: 0.0,
    user_id: "x2ejd",
    level: 1,
    image_id: 1,
    r_image: "https://renderapi.s3.amazonaws.com/3pIOqdkoY.png",
    is_mine: false,
  },
  {
    user_name: "Cleta Mraz",
    value: 0.0,
    user_id: "xqmym",
    level: 3,
    image_id: null,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/632982479758cd7c1563fa5d_Avatar_0.png",
    is_mine: false,
  },
  {
    user_name: "GeronimoX8243",
    value: 0.0,
    user_id: "vk54p",
    level: 1,
    image_id: 0,
    r_image:
      "https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/632982479758cd7c1563fa5d_Avatar_0.png",
    is_mine: false,
  },
  {
    user_name: "Bad BunnyX6459",
    value: 0.0,
    user_id: "3mp4o",
    level: 3,
    image_id: 5,
    r_image: "https://renderapi.s3.amazonaws.com/wyqBuankG.png",
    is_mine: false,
  },
  {
    user_name: "Ellis Lowe Jr.",
    value: 0.0,
    user_id: "27pnj",
    level: 3,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/r2L4NmyHk.png",
    is_mine: false,
  },
  {
    user_name: "InvestorX9969",
    value: 0.0,
    user_id: "224qw",
    level: 1,
    image_id: 0,
    r_image: "https://renderapi.s3.amazonaws.com/Rcp09ZZS2.png",
    is_mine: false,
  },
  {
    user_name: "Darin Greenfelder",
    value: 0.0,
    user_id: "pop23",
    level: 1,
    image_id: null,
    r_image: "https://renderapi.s3.amazonaws.com/3pIOqdkoY.png",
    is_mine: false,
  },
];

const Ranks = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://prod.playzap.games/api/boards/",
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoieGtuUUxwOTlqUW1kIiwidCI6MTY3ODI4MjU2OSwicHRfaWQiOm51bGx9.NXur2JQtH-xWHn8UuOqJ4Kjy3klN6E02t_3OxDYV-vc",
              web: 1,
            },
          }
        );
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="ranks-container">
      <img
        className="rank-top-img"
        src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/644bc113881cba1a6f1409ae_season_1-p-500.png"
        alt=""
      />
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <div className="leaderboard-box">
          {leaderboardData.map((leader, index) => (
            <div className="rank-div" key={index}>
              <div>
                <p>{index + 1}.</p>
                <img src={leader.r_image} alt="err" />
                <h3>{leader.user_name}</h3>
              </div>
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63283ba6263f4cfc261d125c_24-token.png"
                  alt=""
                />
                <p>{leader.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
  );
};

export default Ranks;
