import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import MobileApp from "../Components/MobileApp";

export default function HomePage() {
  return (
    <Box>
      <MobileApp/>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <Box m="auto" w="75%" mt="30px">
        <Text fontSize="2xl" textAlign="center">
          As Seen On
        </Text>
        <Flex margin="auto" w="70%" justifyContent="space-between" mt="30px">
          <Box w="25%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"
              alt="Women"
            />
          </Box>
          <Box w="25%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"
              alt="life"
            />
          </Box>
          <Box w="25%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"
              alt="mens"
            />
          </Box>
        </Flex>
        <Text fontSize="2xl" mt="32px">
          Available on Web, iOS and Android
        </Text>
        <Flex w="40%" m="auto" justifyContent="center" mt="30px" gap="15px">
          <Image
            src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            alt="apple"
            w="37%"
          />
          <Image
            src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            alt="android"
            w="37%"
          />
        </Flex>
      </Box>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        fontFamily="Open Sans"
        border="1px solid #F8F8F8"
        backgroundColor="#F9F7F6"
        mt="80px"
      >
        <Box>
          <Heading fontSize="4xl" mt="60px" color="#4F4F52" textAlign="center">
            Discover your nutrition
          </Heading>
          <Text
            fontSize="2xl"
            lineHeight="33.84px"
            marginTop="20px"
            color="#4F4E53"
          >
            Cronometer encourages you to not just count your<br></br> calories
            but to focus on your nutrition as a whole.
          </Text>
        </Box>
        <Flex
          color="#4F4F52"
          m="auto"
          w="85%"
          justifyContent="space-evenly"
          gap="30px"
          mt="100px"
          mb="100px"
        >
          <Box w="25%">
            <Box w="27%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/community-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Over 5 million users
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Box>
          <Box w="25%">
            <Box w="23%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Accurate nutrition data
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </Box>
          <Box w="25%">
            <Box w="25%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/security-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              {" "}
              Data privacy & security
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box fontFamily="Open Sans" border="1px solid #F8F8F8" mt="80px">
        <Box>
          <Heading fontSize="4xl" mt="60px" color="#4F4F52" textAlign="center">
            Develop healthy habits
          </Heading>
          <Text
            fontSize="2xl"
            lineHeight="33.84px"
            marginTop="20px"
            color="#4F4E53"
          >
            Count your calories, ensure you're meeting<br></br> nutrient
            targets, and see your progress over time.
          </Text>
        </Box>
        <Flex
          color="#4F4F52"
          m="auto"
          w="85%"
          justifyContent="space-evenly"
          gap="30px"
          mt="100px"
          mb="100px"
        >
          <Box w="25%">
            <Box w="27%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Track up to 82 micronutrients
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box w="25%">
            <Box w="27%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Log meals, exercise and biometrics
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </Text>
          </Box>
          <Box w="25%">
            <Box w="27%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/reports-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Valuable reports <br></br> and charts
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Learn how nutrients and biometrics correlate over time.
            </Text>
          </Box>
        </Flex>
        <Flex
          color="#4F4F52"
          m="auto"
          w="85%"
          justifyContent="space-evenly"
          gap="30px"
          mt="100px"
          mb="100px"
        >
          <Box w="25%">
            <Box w="27.2%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Custom diet settings
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Set weight, macro & nutrient targets to meet your goals.
            </Text>
          </Box>
          <Box w="25%">
            <Box w="34%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Fasting timer
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Track your intermittent fasts and see their effect over time.
            </Text>
          </Box>
          <Box w="25%">
            <Box w="30%" margin="auto">
              <Image
                src="https://cdn1.cronometer.com/2021/landing/food-icon.svg"
                w="100%"
              ></Image>
            </Box>
            <Heading fontSize="2xl" mt="12px">
              Diet Support
            </Heading>
            <Text mt="15px" fontSize="xl" textAlign="center">
              Whether you’re Keto, Vegan, or on one recommended by your doctor.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box bgColor="#F9F8F9" color="#4F4F52">
        <Box margin="auto" width="40%" paddingTop="60px" pb="60px">
          <Text textAlign="center" fontSize="3xl" fontWeight="600">
            Find out if you're getting the vitamins and minerals you need with
            our food diary app.
          </Text>
          <Box
            margin="auto"
            marginTop="42px"
            width="50%"
            borderRadius="10px"
            color="white"
            backgroundColor="#FF763F"
            fontSize="lg"
            fontWeight="600"
            pt="15px"
            pb="15px"
            _hover={{ boxShadow: "2xl", cursor: "pointer" }}
          >
            Sign Up - It's Free!
          </Box>
        </Box>
      </Box>
      {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box color="#4F4F52" mt="100px">
        <Heading m="auto" fontSize="35.2px" pb="25px" fontWeight="600">
          Sync with Apps and Devices
        </Heading>
        <Text fontSize="22.56px" m="auto">
          Sync Cronometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </Text>
      </Box>
      <Box width="60%" margin="auto" marginTop="40px">
        <Image
          src="https://cdn1.cronometer.com/2021/landing/devices-p-1600.png"
          alt="companies"
        ></Image>
      </Box>
      <hr
        style={{
          backgroundColor: "#DBDBDB",
          height: 1,
          width: "70%",
          margin: "auto",
          marginTop: "50px",
        }}
      />
      <Box mt="50px">
        <Heading color="#4F4E53" fontSize="35.2px" fontWeight="700">
          Cronometer Reviews
        </Heading>
        <Text mt="16px" color="#4F4E53" fontSize="22.56" fontWeight="400">
          Check us out in your app store.
        </Text>
      </Box>

      <Box width="75%" m="auto" mt="35px" boxShadow="dark-lg">
        <Flex justifyContent="center" pb="30px" gap="50px">
          <Box w="38%">
            <Text
              fontSize="30px"
              color="#FF763F"
              marginTop="100px"
              fontFamily="Segoe UI"
              lineHeight="45px"
              textAlign="start"
            >
              I wasn't the only one concerned about the unreliability of the
              macros in both MyFitnessPal and Carb Manager.
            </Text>
            <Box w="34%" margin="auto" mt="35px">
              <Link to="">
                <Image
                  src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
                  alt="ios"
                />
              </Link>
            </Box>
          </Box>
          <Box w="46%" mt="40px">
            <Text
              fontSize="20px"
              color="#404040"
              fontWeight="400"
              lineHeight="30px"
              textAlign="start"
            >
              I started Keto in July. MyFitnessPal seemed pretty cool. Spent
              hours setting it up and entering recipes only to discover the
              macros were not reliable due to all the contributions by the
              community. I was so frustrated. Then I found a review of several
              apps (on the Keto Mojo website) and discovered I wasn't the only
              one concerned about unreliability of the macros on both MFP and
              CarbManager (tried that too). Behold Cronometer! I love this app.
              It draws from nutrition databases with minimal community
              contributions so much, much more reliability. There are many more
              free features. The user interface is easy to navigate. I'm very
              happy with Cronometer.
            </Text>
            <Text fontSize="16px" fontWeight="600" mt="30px">
              iOS Review
            </Text>
            <Text fontStyle="italic" fontSize="16px">
              September 23, 2019
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width="75%" m="auto" mt="75px" boxShadow="dark-lg">
        <Flex justifyContent="center" pb="30px" gap="50px">
          <Box w="46%" mt="40px">
            <Text
              fontSize="20px"
              color="#404040"
              fontWeight="400"
              lineHeight="30px"
              textAlign="start"
            >
              This app is my dream! I've been on the hunt for something that can
              track my daily nutritional needs and the majority of apps seem to
              think that only means macros. This tracks EVERYTHING! Getting my
              daily vitamins through food is so important to me and this has
              taken a HUGE load off of my plate. I bought gold within minutes.
              This is set up great, easy to use, links with my FitBit. I could
              go on and on.
            </Text>
            <Text fontSize="16px" fontWeight="600" mt="30px">
              Android Review November 23, 2020
            </Text>
            <Text fontStyle="italic" fontSize="16px">
              September 23, 2019
            </Text>
          </Box>
          <Box w="38%">
            <Text
              fontSize="30px"
              color="#FF763F"
              marginTop="100px"
              fontFamily="Segoe UI"
              lineHeight="45px"
              textAlign="start"
            >
              Cronometer tracks EVERYTHING! ... It's easy to use and links with
              my FitBit.
            </Text>
            <Box w="34%" margin="auto" mt="35px">
              <Link to="">
                <Image
                  src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
                  alt="android"
                />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="150px">
        <Heading color="#4F4E53" fontSize="35.2px" fontWeight="700">
          We are Canadian
        </Heading>
        <Text
          mt="16px"
          color="#4F4E53"
          fontSize="22.56"
          fontWeight="400"
          lineHeight="33.84px"
        >
          Independently owned and operated by people who<br></br> care about
          their users' nutrition.
        </Text>
      </Box>
      <Box w="60%" margin="auto" marginTop="60px">
        <Image
          src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg"
          alt="people"
        ></Image>
      </Box>
      <Text
        fontWeight="400px"
        lineHeight="27px"
        fontSize="18px"
        textAlign="center"
        mt="30px"
        color="#404040"
      >
        Our headquarters are based in the idyllic mountain town of Revelstoke,
        BC, Canada. We are a team of<br></br> over 25 professionals brought
        together by a love of nutrition, skiing, biking and the great outdoors.
      </Text>
      <Box m="auto" boxShadow="xl" w="16%" mt="60px">
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
          <Link to="/about">About Us</Link>
        </Button>
      </Box>
      <hr
        style={{
          backgroundColor: "#DBDBDB",
          height: 1,
          width: "70%",
          margin: "auto",
          marginTop: "50px",
        }}
      />
      <Text
        color="#4F4E53"
        fontSize="22.56"
        fontWeight="400"
        lineHeight="33.84px"
        mt="50px"
      >
        Help us spread the good word about nutrition and become an affiliate.
      </Text>
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
          <Link to="/">Become An Affiliate</Link>
        </Button>
      </Box>
      {/* END */}
      <Footer />
    </Box>
  );
}
