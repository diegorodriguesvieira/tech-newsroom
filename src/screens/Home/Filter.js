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
        className={clsx("mr-2", styles.select)}
        label="Filtrar por autor"
        labelKey="name"
        onChange={onChangeFilter}
        options={data}
        valueKey="id"
      />
      <Select
        className={styles.select}
        onChange={onChangeOrder}
        label="Ordenar por"
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
