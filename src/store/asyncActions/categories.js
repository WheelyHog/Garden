import { get_categories } from "../reducers/categoriesSlice";
import { base_url } from "./base_url";

const categories_url = base_url + "/categories/all";

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then(res => res.json())
      .then(data => dispatch(get_categories(data)))
  }
}