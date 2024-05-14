import React, { useState } from "react";
import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { styleSelect } from "./styleSelect";

function SelectorForm({ id, value, onChange, options, placeholder }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuIsOpen(true);
  };

  const handleMenuClose = () => {
    setMenuIsOpen(false);
  };

  return (
    <Select
      styles={styleSelect}
      options={options}
      value={value ? { label: value, value: value } : null}
      onChange={onChange}
      name={id}
      id={id}
      placeholder={placeholder}
      isSearchable={false}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      components={{
        DropdownIndicator: () => {
          return menuIsOpen ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          );
        },
      }}
    />
  );
}

export default SelectorForm;
