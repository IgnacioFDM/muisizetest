import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HeaderLink = styled('a')({
  color: "#fff",
  textDecoration: "none",
});

const LanguageButton = styled(Button)({
  padding: "0px",
  marginLeft: "auto",
  color: "#fff",
});

const ContentDiv = styled('div')({
    display: "flex",
});

export const AppBar = (): JSX.Element => {
  const router = useRouter();

  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenLang = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleCloseLang = () => {
    setLangAnchorEl(null);
  };

  return (
    <MuiAppBar position="static" elevation={0}>
      <Toolbar>
        <Container maxWidth="md">
          <ContentDiv>
            <Typography variant="h6">
              <Link href="/" passHref>
                <HeaderLink>Lorem Ipsum</HeaderLink>
              </Link>
            </Typography>
            <LanguageButton name="language-picker" onClick={handleOpenLang}>
              {router.locale?.toUpperCase()}
              <ExpandMoreIcon />
            </LanguageButton>
            <Menu
              anchorEl={langAnchorEl}
              keepMounted
              open={Boolean(langAnchorEl)}
              onClose={handleCloseLang}
            >
              <div>
                {router.locales?.map((value, index) => (
                  <Link
                    key={value}
                    prefetch={false}
                    href=""
                    locale={value}
                    passHref
                  >
                    <MenuItem
                      onClick={() => {
                        document.cookie = `NEXT_LOCALE=${value};samesite=strict`;
                        handleCloseLang();
                      }}
                      key={index}
                    >
                      {value.toUpperCase()}
                    </MenuItem>
                  </Link>
                ))}
              </div>
            </Menu>
          </ContentDiv>
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
