import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Flex,
  Button,
  color,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <Box>
      <hr
        style={{
          backgroundColor: "#DBDBDB",
          height: 1,
          width: "86%",
          margin: "auto",
          marginTop: "0px",
        }}
      />
      <Box width="92%" margin="auto">
        <Box padding="2.5%">
          <Box padding="6">
            <Text
              color="#FF763F"
              fontSize="22.56px"
              lineHeight="33.84px"
              fontWeight="600"
              letterSpacing="2px"
            >
              PROPER HEALTH
            </Text>
            <Heading color="#4F4E53" fontSize="43.84" lineHeight="56.992px">
              About the Company
            </Heading>
          </Box>

          <Box
            color="#404040"
            fontSize="18px"
            lineHeight="27px"
            textAlign="start"
          >
            <Box>
              Cronometer is the most accurate, comprehensive nutrition tracking
              app on earth. Unlike other apps on the market, our nutritional
              data is curated from verified, accurate sources. We aim to provide
              a complete solution – no matter what diet you choose to be on.
            </Box>
            <br></br>
            <Box>
              Our CEO, Aaron Davidson, built Cronometer as a side project in
              2005. He was following the CRON diet (Calorie Restriction with
              Optimal Nutrition) and being the nutrition nerd/software developer
              that he is, decided to build an app to track his diet. Thus,
              Cronometer was born. It was several years later before he came to
              the conclusion that maybe he was onto something and quit his
              six-figure corporate job to focus on improving Cronometer.
            </Box>
            <br></br>
            <Box>There are now over 5 million users who are happy he did.</Box>
            <br></br>
            <Box>
              Cronometer's success has hinged entirely on positive word-of-mouth
              from its users. The company is still – and plans to continue being
              – a bootstrap startup to this day.
            </Box>
          </Box>
        </Box>

        <Box m="auto" w="95%" mt="25px" marginBottom="25px">
          <Image
            borderRadius="12px"
            src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-3.jpg"
          />
        </Box>

        <Box mt="50px">
          <Box textAlign="center">
            <Text
              color="#FF763F"
              fontSize="22.56px"
              lineHeight="33.84px"
              fontWeight="600"
              letterSpacing="2px"
            >
              PROPER HEALTH
            </Text>

            <Heading color="#4F4E53" fontSize="43.84" lineHeight="56.992px">
              Who We Are
            </Heading>
          </Box>
          <Box
            color="#404040"
            fontSize="20px"
            lineHeight="27px"
            textAlign="center"
            mt="40px"
            fontWeight="400px"
          >
            <Box>
              While our staff spans the globe our headquarters is based in the
              small-town of Revelstoke, British Columbia, Canada. Revelstoke is
              a health-centric mountain town brimming with endless options for
              staying active and a growing tech community – the perfect
              combination to call home.
            </Box>
            <br></br>
            <Box>
              We are an eclectic mix of web developers, designers, nutrition
              scientists, business majors and personal trainers brought together
              by a love of nutrition. While our company has grown our mission
              and values have remained the same; we believe full spectrum
              nutrition is the best way to understand your diet’s effect on your
              health. We also believe in empowering everyone by ensuring they
              have access to accurate and comprehensive data to make informed
              decisions.
            </Box>
            <br></br>
            <Box>
              Our goal is to build the best software for people and
              professionals to manage their nutrition. And we have the passion
              to make that happen; amazing data paired with awesome customer
              support truly are the Cronometer difference.
            </Box>
            <br></br>
            <Box>
              If you have interest in your personal nutrition or working with
              your client’s nutrition check us out!
            </Box>
            <br></br>
            <Box>
              Have questions? We would love to hear from you. Email us at:{" "}
              <Text
                _hover={{ color: "#FF763F", cursor: "pointer" }}
                style={{ textDecoration: "underline" }}
                fontSize="20px"
              >
                support@cronometer.com
              </Text>
            </Box>
          </Box>
          <br />
          <hr
            style={{
              backgroundColor: "#DBDBDB",
              height: 1,
              width: "90%",
              margin: "auto",
              marginTop: "0px",
            }}
          />
          <Box color="#404040" fontSize="23px" lineHeight="33px" m="40px auto">
            Help us spread the good word about nutrition and become an
            affiliate.
          </Box>
          <Box m="auto" boxShadow="xl" w="20%" mt="20px" mb="80px">
            <Button
              width="100%"
              border="1.5px solid #FF763F"
              color="#FF763F"
              backgroundColor="white"
              fontSize="20px"
              fontWeight="600"
              pt="24px"
              pb="24px"
              _hover={{ backgroundColor: "#F3F3F3" }}
            >
              Become An Affiliate
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
