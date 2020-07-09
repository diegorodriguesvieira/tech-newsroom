import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Select.scss";

function Select({
  className,
  disabled,
  label,
  labelKey,
  onChange,
  options,
  testId,
  valueKey,
}) {
  let computedOptions = Array.isArray(options) ? options : [];

  if (label) {
    computedOptions = [
      {
        [labelKey]: label.toUpperCase(),
        [valueKey]: "",
      },
      ...computedOptions,
    ];
  }

  return (
    <select
      className={clsx(styles.select, className)}
      data-testid={testId}
      disabled={disabled}
      onChange={onChange}
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
  className: "",
  disabled: false,
  label: "",
  labelKey: "label",
  onChange: null,
  options: [],
  testId: "select",
  valueKey: "value",
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelKey: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  testId: PropTypes.string,
  valueKey: PropTypes.string,
};

export default Select;
