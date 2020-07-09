import PropTypes from "prop-types";
import React from "react";
import styles from "./Select.scss";

function Select({
  disabled,
  label,
  labelKey,
  onChange,
  options,
  testId,
  valueKey,
}) {
  const computedOptions = Array.isArray(options) ? options : [];

  if (label) {
    computedOptions.unshift({
      [labelKey]: label.toUpperCase(),
      [valueKey]: -1,
    });
  }

  return (
    <select
      disabled={disabled}
      data-testid={testId}
      onChange={onChange}
      className={styles.select}
    >
      {computedOptions.map((option) => (
        <option
          data-testid="select-option"
          key={option[valueKey]}
          value={option[valueKey]}
        >
          {option[labelKey]}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  disabled: false,
  label: "",
  labelKey: "label",
  onChange: null,
  options: [],
  testId: "select",
  valueKey: "value",
};

Select.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelKey: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  testId: PropTypes.string,
  valueKey: PropTypes.string,
};

export default Select;
