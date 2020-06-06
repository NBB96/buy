import ajax from './ajax'
//http://demo.itlike.com/web/xlmc/api/homeApi
//http://demo.itlike.com/web/xlmc/api/homeApi/categories
//http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001
const BAES_URL='http://demo.itlike.com/web/xlmc'
export const getHomeData=()=>ajax(BAES_URL+'/api/homeApi')
export const getCategories=()=>ajax(BAES_URL+'/api/homeApi/categories')
export const getCategoriesDetail=(preParams)=>ajax(BAES_URL+'/api/homeApi/categoriesdetail'+preParams)