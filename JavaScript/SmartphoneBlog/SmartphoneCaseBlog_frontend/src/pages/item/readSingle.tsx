// readSingle.jsx

import * as React from "react";

import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

const ReadSingleItem: React.FC = React.memo(() => {
  const params = useParams();
  const parts = params.id !== undefined ? params.id.split("&") : "";
  const blogId = parts[0];
  const blogImageId = parts[1];
  const [modifiedHtmlData, setModifiedHtmlData] = React.useState("");
  const [imageUrls, setImageUrls] = React.useState([]);
  const [CCImageSrc, setCCImageSec] = React.useState([]);
  const [htmldata, setHtmldata] = React.useState("");
  const [amazonItemLink, setAmazonItemLink] = React.useState("");

  React.useEffect(() => {
    const getSingleItem = async () => {
      // Get Item Data
      // https://ohisamabackend.onrender.com/
      // http://localhost:9000/
      const response = await fetch(
        `https://ohisamabackend.onrender.com/item/${blogId}`
      );
      const jsonResponse = await response.json();
      const blogDataHtml = jsonResponse.singleItem.description;
      setHtmldata(blogDataHtml);
      // Get Image Urls and Item link
      const imageResponse = await fetch(
        `https://ohisamabackend.onrender.com/image/${blogImageId}`
      );
      const imageJsonResponse = await imageResponse.json();
      const imagesArray =
        await imageJsonResponse.singleItem.amazonImageUrls.split(",");
      const commentImageArray =
        await imageJsonResponse.singleItem.commentCharacterImageSrc.split(",");
      setImageUrls(imagesArray);
      setAmazonItemLink(imageJsonResponse.singleItem.amazonItemLink);
      setCCImageSec(commentImageArray);
    };
    getSingleItem();
  }, [blogId, blogImageId]);

  React.useEffect(() => {
    const modifiedData = async () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmldata, "text/html");

      const imgElements = doc.querySelectorAll(
        ".smartphoneImage"
      ) as NodeListOf<HTMLImageElement>;

      const amazonLinkElements = doc.querySelectorAll(
        ".amazonItemLink"
      ) as NodeListOf<HTMLAnchorElement>;

      const commentCharacterElements = doc.querySelectorAll(
        ".commentCharacterImage"
      ) as NodeListOf<HTMLImageElement>;

      imgElements.forEach((imgElement, index) => {
        imgElement.src = imageUrls[index];
      });

      amazonLinkElements.forEach((amazonLinkElement) => {
        amazonLinkElement.href = amazonItemLink;
      });

      commentCharacterElements.forEach((commentCharacterElement, index) => {
        commentCharacterElement.src = CCImageSrc[index];
      });

      const modifiedHtml = doc.documentElement.outerHTML;

      setModifiedHtmlData(modifiedHtml);
    };
    modifiedData();
  }, [htmldata, imageUrls, amazonItemLink, CCImageSrc]);

  const StyledContainer = styled(Container)({
    paddingTop: "30px",
  });

  const StyledBox = styled(Box)({
    backgroundcolor: "#fffdfa",
    padding: "20px",
    border: "solid 2px black",
  });

  return (
    <>
      <Header />

      <StyledContainer maxWidth="md">
        <Box mt={10}>
          <Box>
            <a href="/" className="goBack">
              ↩Back to Main
            </a>
          </Box>

          <Box>
            <StyledBox
              dangerouslySetInnerHTML={{ __html: modifiedHtmlData }}
            ></StyledBox>
          </Box>

          <Box mb={12}>
            <a href="/" className="goBack">
              ↩Back to Main
            </a>
          </Box>
        </Box>
      </StyledContainer>
      <Footer />
    </>
  );
});

export default ReadSingleItem;
