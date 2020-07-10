import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import Select from "../../components/Select";
import { filters } from "../../constants";
import styles from "./Filter.scss";

const orderBy = [
  { label: "Mais recentes", value: filters.desc },
  { label: "Mais antigos", value: filters.asc },
];

function Filter({ data, onChangeFilter, onChangeOrder }) {
  return (
    <div className={styles.filter}>
      <Select
        className={clsx("mr-2", "mb-1", styles.select)}
        label="Filtrar por autor"
        labelKey="name"
        name="author"
        onChange={onChangeFilter}
        options={data}
        valueKey="id"
      />
      <Select
        className={clsx("mb-2", styles.select)}
        label="Ordenar por"
        name="order"
        onChange={onChangeOrder}
        options={orderBy}
      />
    </div>
  );
}

Filter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onChangeOrder: PropTypes.func.isRequired,
};

export default Filter;
