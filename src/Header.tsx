"use client";
import { tss } from "tss-react/mui";

export function Header() {
  const { classes, cx } = useStyles();

  return (
    <div>
      <a href="/" className={classes.menuItem}>Home</a>
      <a href="/foo" className={classes.menuItem}>Foo</a>
      <a href="/about" className={cx(classes.menuItem, classes.menuItemActive)}>About</a>
      <a href="/bar" className={classes.menuItem}>Bar</a>
    </div>
  );
}

const useStyles = tss
  .withName("Header")
  .withNestedSelectors<"menuItemActive">()
  .create(({ theme, classes }) => ({
    menuItem: {
      height: 41,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      textDecoration: "none",
      boxSizing: "border-box",
      padding: "0 22px",

      "@media (hover: hover) and (pointer: fine)": {
        [`:hover:not(.${classes.menuItemActive})`]: {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },

    menuItemActive: {
      backgroundColor: theme.palette.primary.main
    },
  }));