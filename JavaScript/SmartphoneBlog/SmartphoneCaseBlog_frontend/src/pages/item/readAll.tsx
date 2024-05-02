// readAll.jsx

import Data from "../../jsonFiles/blogData.json";

import * as React from "react";
import List from "../../components/List";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import { Box, Container, Pagination } from "@mui/material";

import { BlogData } from "../../types/BlogData";

const ReadAll: React.FC = React.memo(() => {
  // Random Image Url
  const [randomImageUrl, setRandomImageUrl] = React.useState("");

  React.useEffect(() => {
    const rndNum = Math.floor(Math.random() * imageUrls.length);
    const selectedImageUrl = imageUrls[rndNum].url;
    setRandomImageUrl(selectedImageUrl);
  }, []);

  const imageUrls = [
    { url: "./images/image1.png" },
    { url: "./images/image2.png" },
    { url: "./images/image3.png" },
  ];

  const StyledHero = styled(Box)({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0,0,0.5)),url(${randomImageUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  });

  const StyledContainer = styled(Container)({
    paddingTop: "30px",
  });

  const StyledPagination = styled(Box)({
    display: "flex",
    justifyContent: "center",
  });

  const [allItems, setAllItems] = React.useState<BlogData[]>([]);

  // Read All data from blogData.json
  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const dummyData = Data;
      setAllItems(dummyData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <StyledHero
        sx={{
          height: { xs: 300, sm: "600px" },
          fontSize: { xs: "3em", sm: "4rem" },
        }}
      >
        <Box>Smartphone Case</Box>
      </StyledHero>

      <StyledContainer maxWidth="lg">
        <List list={allItems} />

        {/* Pagination */}
        <StyledPagination my={4}>
          <Pagination count={10} size="small" />
        </StyledPagination>
      </StyledContainer>

      <Footer />
    </>
  );
});

export default ReadAll;
