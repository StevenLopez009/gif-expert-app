import { useState } from "react";
import Proptypes from "prop-types";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //setCategories([...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input type="text" placeholder="Buscar Gifs" onChange={onInputChange} />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  onNewCategory: Proptypes.func.isRequired,
};
