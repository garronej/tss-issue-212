
"use client";
import { tss } from "tss-react/mui";

export function MultiSelect() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <label className={classes.label}>Select all</label>
      <input type="checkbox" />
    </div>
  );
}


export const useStyles = tss
  .withName("MultiSelect")
  .withNestedSelectors<"label">()
  .create(({ theme, classes }) => ({
    container: {
      paddingTop: 12,
      paddingBottom: 12,
      display: "flex",
      alignItems: "center",
      columnGap: 6,

      "@media (hover: hover) and (pointer: fine)": {
        cursor: "pointer",

        ":hover": {
          [`.${classes.label}`]: {
            color: theme.palette.primary.main,
          },
        },
      },
    },

    label: {},
  }));