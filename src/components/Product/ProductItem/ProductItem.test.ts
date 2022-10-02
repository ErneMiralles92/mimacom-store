import { mount } from '@vue/test-utils'
import ProductItem from './ProductItem.vue'
import { createTestingPinia } from '@pinia/testing'
const product = {
  id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
  image_url:
    'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
  stock: 8,
  productName: 'Unbranded Metal Chair',
  price: 43,
  productDescription:
    'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
  favorite: 0,
}

describe('ProductItem', () => {
  describe('Render product information', () => {
    const wrapper = mount(ProductItem, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        product,
      },
    })
    it('should render product name correctly', () => {
      expect(wrapper.find('.product-item-title').text()).toBe(
        product.productName,
      )
    })
    it('should render product price correctly', () => {
      expect(wrapper.find('.product-item-price').text()).toBe(
        `${product.price}`,
      )
    })
    it('should render product description correctly', () => {
      expect(wrapper.find('.product-item-description').text()).toBe(
        `${product.productDescription}`,
      )
    })

    it('should render product stock availability correctly', () => {
      expect(wrapper.find('.product-item-availability').text()).toBe(
        `${product.stock} left`,
      )
    })

    it('should render the button to add products', () => {
      expect(wrapper.find('.product-item-button')).toBeDefined()
    })
  })

  describe('Add product button', () => {
    const wrapper = mount(ProductItem, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
      props: {
        product,
      },
    })
    const addButton = wrapper.find('button.product-item-button')

    it('should be disabled if no items available on stock', async () => {
      wrapper.setProps({
        product: {
          ...product,
          stock: 0,
        },
      })
      await wrapper.vm.$nextTick()
      expect(addButton.attributes().disabled).toBeDefined()
    })

    it(`should be disabled if the product's frequency in the cart is greater than or equal to the stock availability`, async () => {
      wrapper.setProps({
        product: {
          ...product,
          stock: 2,
        },
      })
      await wrapper.vm.$nextTick()
      await addButton.trigger('click')
      await addButton.trigger('click')

      await wrapper.vm.$nextTick()
      expect(addButton.attributes().disabled).toBeDefined()
    })
  })

  describe('Favorite button', () => {
    const wrapper = mount(ProductItem, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        product: { ...product, favorite: 0 },
      },
    })
    const favoriteIcon = wrapper.find('.product-item-favorite button i')

    it('should have an outlined star if the product is not marked as favorite', async () => {
      expect(favoriteIcon.classes()).toEqual(
        expect.arrayContaining(['mdi-star-outline']),
      )
    })

    it('should have a filled star if the product is marked as favorite', async () => {
      wrapper.setProps({
        product: { ...product, favorite: 1 },
      })
      await wrapper.vm.$nextTick()
      expect(favoriteIcon.classes()).toEqual(
        expect.arrayContaining(['mdi-star']),
      )
    })
  })
})
