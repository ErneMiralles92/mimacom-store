import { ref } from 'vue'
import HttpService from '../../services/http'
import { Product } from '../../types'

export function useProduct() {
  const isLoading = ref(false)
  const products = ref<Array<Product>>([])

  const updatingProduct = ref(false)

  const getMoreProducts = async ({
    page,
    perPage,
    favorite,
  }: {
    page: number
    perPage: number
    favorite?: string | number
  }) => {
    let error: Error | null = null
    let data: Array<Product> = []
    isLoading.value = true
    try {
      const response = await HttpService.get('/grocery', {
        params: {
          _page: page,
          _limit: perPage,
          favorite,
        },
      })
      if (response.status === 200) {
        data = response.data
        products.value.push(...data)
      }
    } catch (err) {
      error = err as Error
      console.error(err)
    }
    isLoading.value = false
    return { data, error }
  }

  const updateProduct = async (id: string, fields: { favorite: number }) => {
    let error: Error | null = null
    let data: Product | null = null
    updatingProduct.value = true
    try {
      const response = await HttpService.patch(`/grocery/${id}`, {
        favorite: fields.favorite,
      })
      if (response.status === 200) {
        data = response.data
        const index = products.value.findIndex((product) => product.id === id)
        if (index !== -1) {
          products.value[index].favorite = fields.favorite
        }
      }
    } catch (err) {
      error = err as Error
      console.error(err)
    }
    updatingProduct.value = false
    return { data, error }
  }
  return {
    isLoading,
    products,
    getMoreProducts,
    updatingProduct,
    updateProduct,
  }
}
