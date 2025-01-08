import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => (
  <label className={s.searchBox}>
    Find contacts by name
    <input
      type="text"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      className={s.input}
    />
  </label>
);

export default SearchBox;
