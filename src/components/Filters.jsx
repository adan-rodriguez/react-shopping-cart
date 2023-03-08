import { useId } from "react";
import useCategories from "../hooks/useCategories";
import { useFilters } from "../hooks/useFilters";

export default function Filters() {
  const { categories } = useCategories();
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo</label>
        <input
          type="range"
          name="price"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {`${category[0].toUpperCase()}${category.slice(1)}`}
            </option>
          ))}
          {/* <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option> */}
        </select>
      </div>
    </div>
  );
}
