import MuiAppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    logoLink: {
      color: "#fff",
      textDecoration: "none",
    },
    languageButton: {
      padding: "0px",
      marginLeft: "auto",
      color: "#fff",
    },
    contentDiv: {
        display: "flex",
    }
  })
);

export const AppBar = (): JSX.Element => {
  const classes = useStyles();
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
          <div className={classes.contentDiv}>
            <Typography variant="h6">
              <Link href="/" passHref>
                <a className={classes.logoLink}>Lorem Ipsum</a>
              </Link>
            </Typography>
            <Button
              name="language-picker"
              onClick={handleOpenLang}
              className={classes.languageButton}
            >
              {router.locale?.toUpperCase()}
              <ExpandMoreIcon />
            </Button>
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
          </div>
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
