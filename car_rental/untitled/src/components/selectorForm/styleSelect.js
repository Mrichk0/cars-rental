export const styleSelect = {
  option: (provided) => {
    return {
      ...provided,
      background: "transparent",

      border: "none",
      outline: "none",
      fontSize: "16px",
      fontWeight: "400",
      color: "rgba(18, 20, 23, 0.20)",
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        color: "black",
        fontWeight: "400",
      },
      textAlign: "left",
    };
  },
  control: (styles) => ({
    ...styles,

    color: "black",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: " normal",
    border: "none",
    borderRadius: "14px",
    boxShadow: "none",
    backgroundColor: "#F7F7FB",
    cursor: "pointer",
    padding: "10px 8px",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: "black",
      padding: "0 30px",
    };
  },

  menu: (provided, state) => {
    return {
      ...provided,
      background: "#FFF",
      borderRadius: "14px",
      blur: "5px",
      padding: "10px",
    };
  },
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      background: "transparent",
      scrollbarGutter: "10px",
      overflowX: "auto",
      width: "8px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "14px",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "black",
    marginRight: "40px",
  }),

  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: "pointer",
    };
  },

  input: (provided) => {
    return {
      ...provided,
      margin: "0px",
      color: "var(--text-color)",
      padding: "12px 20px",
      minWidth: "100%",
    };
  },
};
