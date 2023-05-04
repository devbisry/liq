import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CourseCard from "./Card";

function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#223C50",
          color: "#fff",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#23C50",
            color: "#fff",
            minHeight: "70vh",
            width: { xs: "100%", md: "80%" },
            margin: "auto",
            paddingBottom: "5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              padding: "1rem",
              width: { xs: "100%", md: "60%" },
            }}
          >
            <Typography variant="h2" fontWeight="bold" fontSize="3rem">
              ስለ ቤተከርስቲያኔ <br /> እማራልሁ።
            </Typography>

            <Divider sx={{ width: "100%", margin: "1rem 0" }} />
            <Typography variant="h4" fontSize="2rem">
              የቤተክርስቲያን ተምህርቶችን፣ መፅሃፍትን፣ መዝሙራትና ሌሎች ኦርቶዶክሳዊ ተምህርቶችን በቅላሉ በእጅ ሰልኮ
              ያግኙ።
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "40%" },
              overflow: "hidden",
            }}
          >
            <Image
              src="https://addisababa.eotc.org.et/en/wp-content/uploads/eotc-logo-original-2.png"
              alt=""
              width="600"
              height="400"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "start",
          gap: "2rem",
          padding: "1rem 3rem",
          color: "#223C50",
          backgroundColor: "#fff",
          minWidth: { xs: "50%", md: "50%" },
          maxWidth: { xs: "90%", md: "100%" },
          alignSelf: "center",
          boxShadow: " 0px 16px 24px rgba(34, 60, 80, 0.15)",
          borderRadius: "4px",
          position: "relative",
          bottom: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AcUnitIcon sx={{ fontSize: "3rem" }} />
          <Typography variant="h4" fontWeight="bold">
            ቤተ - ሊቅ
            <Typography variant="h5" component="p" fontWeight="bold">
              ቤተ - ሊቅ
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AcUnitIcon sx={{ fontSize: "3rem" }} />
          <Typography variant="h4" fontWeight="bold">
            ቤተ - ሊቅ
            <Typography variant="h5" component="p" fontWeight="bold">
              ቤተ - ሊቅ
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AcUnitIcon sx={{ fontSize: "3rem" }} />
          <Typography variant="h4" fontWeight="bold">
            ቤተ - ሊቅ
            <Typography variant="h5" component="p" fontWeight="bold">
              ቤተ - ሊቅ
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* ---------- */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          alignSelf: "center",
          width: "80%",
          gap: "1rem",
          paddingBottom: "3rem",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          ትምህርት መርጠዉ አሁኑኑ <br /> መማር ይጅምሩ።
        </Typography>
        <Typography variant="h5">
          እያንዳንዱ ትምህርት በክፍል ይትክፋፈለ ስልሆነ እርሶ <br /> በሚያመቾት ሰዓትና ቦታ ላይ ሆነዉ ስለ
          ቤተክርስትያን ይማሩ
        </Typography>
      </Box>

      {/* ========== */}

      <Grid container spacing={2} sx={{ width: "80%", alignSelf: "center"}}>
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ p:3}}>
            <CourseCard />
          </Grid>
        ))}
      </Grid>

      {/* ========== */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: "80%",
          paddingTop: "6rem",
          textAlign: "center",
          gap: "2rem",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          ማሰተማር ይፈልጋሉ?
        </Typography>
        <Typography variant="h4" fontSize="2rem" width={"70%"}>
          ለቤተክርስቲያን አባቶች፣ መምህራነ ወንጌል፣ ሊቃዉንት፣ ዘማርያን፣ የሰንበት ት/ቤት ተጠሪዎች የትመቻቸ
          ማስተማሪያ ምንገድ
        </Typography>
        <Typography variant="h5">
          ካሉበት ሆነዉ በመላዉ ዓለም ክሚገኙ ምዕመናን ጋር በቀላሉ ሚማማሩብት ቀላልና አመቺ አዉድ።
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "2rem",
          }}
        >
          <Card
            sx={{
              borderRadius: "10px",
              maxWidth: { xs: "100%", md: "50%" },
              background: "#96DDE7",
              textAlign: "start",
              padding: "1rem",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                በሁሉም፤ ለሁሉም።
              </Typography>
              <Typography variant="body2">
                እንደሚያምችት ትምህርቶችን በፅሁፍ፣ በድምጽ ወይም በምስል አስደግፍዉ ለሁሉም ምዕምናን በቋንቋቸዉ
                ማድርስ የሚችሉበት
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">ማስተማር ይጀምሩ</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
              background: "#223C50",
              color: "#fff",
              textAlign: "start",
              padding: "1rem",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ከጫፍ እስከ ጫፍ።
              </Typography>
              <Typography variant="body2">
                ከመዕምናን ጋር በቀላሉ በመገናኘት፤ ልዩ እርዳታና ትምህርት ባስፈለጋቸዉ ጊዜ ሁሉ፤ ጊዜና ቦታ
                ሳይገድቦ መርዳትና ማስትማር የሚችሉብት
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" disableElevation>
                ማስተማር ይጀምሩ
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Header;
