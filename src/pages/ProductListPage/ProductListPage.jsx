import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductsList from "../../components/ProductsList/ProductsList"
import s from './ProductListPage.module.css'
import Filter from '../../components/Filter/Filter'
import { get_product_list_by_sale } from "../../store/reducers/productListSlice"
import { fetchAllProductList, fetchProductListByCategory } from "../../asyncActions/products"

export const ProductListPage = ({ type }) => {

  const { id } = useParams()
  const titlePage = useSelector(store => store.productList.titlePage)
  const productList = useSelector(store => store.productList.productList).filter((product) => product.showBySale && product.showByRange)

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'category') {
      dispatch(fetchProductListByCategory(id))
    } else {
      dispatch(fetchAllProductList(type))
      if (type === 'sale') {
        dispatch(get_product_list_by_sale())
      }
    }
  }, [id, type])



  return (
    <div className={s.page_wrapper}>
      <h2 className={s.page_title}>{titlePage.title}</h2>
      <Filter type={type} />
      <ProductsList products={productList} />
    </div>
  )
}