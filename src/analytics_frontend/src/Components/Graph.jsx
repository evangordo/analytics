import React, { useEffect } from "react";
import { Octokit } from "octokit";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "./colors";

import { Box, SimpleGrid, Heading } from "@chakra-ui/react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Graph() {
  const Githubfetch = async () => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    const url = "https://api.github.com/repos/rakeoff-labs/rakeoff/commits";

    const options = {
      headers: {
        Authorization: `token ${token}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((commits) => {
        // Process and send data to frontend
        console.log(commits);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    Githubfetch();
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]}>
        <Box
          bg={boxBackgroundColor}
          border={boxBorderColor}
          borderRadius="2xl"
          py={18}
          transition="transform 0.3s"
          _hover={{ transform: "translateY(-5px)" }}
          cursor="pointer"
          align="center"
          m={2}
          width={600}
          height={450}
        >
          <Heading size="md">Average Staking Amount</Heading>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </Box>
        <Box
          bg={boxBackgroundColor}
          border={boxBorderColor}
          borderRadius="2xl"
          py={18}
          transition="transform 0.3s"
          _hover={{ transform: "translateY(-5px)" }}
          cursor="pointer"
          align="center"
          m={2}
          width={600}
          height={250}
        >
          <Heading size="md">Github commits</Heading>
        </Box>
      </SimpleGrid>
    </>
  );
}
