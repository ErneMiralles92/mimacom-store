import { ref } from 'vue'
import HttpService from '../../services/http'
import { Product } from '../../types'

export function useProduct() {
  const isLoading = ref(true)
  const products = ref<Array<Product>>([])

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
  return {
    isLoading,
    products,
    getMoreProducts,
  }
}
