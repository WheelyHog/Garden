import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAllProductList, fetchProductListByCategory } from "../../asyncActions/requests"
import ProductsList from "../../components/ProductsList/ProductsList"
import { getProductListBySaleAction } from "../../store/reducers/productsReducer"
import s from './ProductListPage.module.css'
import Filter from '../../components/Filter/Filter'

export const ProductListPage = ({ type }) => {

  const { id } = useParams()
  const titlePage = useSelector(store => store.productList.titlePage)
  const productList = useSelector(store => store.productList.productList).filter((product) => product.showBySale && product.showByRange)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(type)
    if (type === 'category') {
      dispatch(fetchProductListByCategory(id))
    } else {
      dispatch(fetchAllProductList(type))
      if (type === 'sale') {
        dispatch(getProductListBySaleAction())
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