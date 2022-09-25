<template>
  <i
    v-bind="$attrs"
    aria-hidden="true"
    class="app-icon mdi"
    :class="{
      [mdiIconClass]: true,
    }"
    :style="customStyle"
  ></i>
</template>

<script setup lang="ts">
import { computed, useSlots, StyleValue } from 'vue'
import { convertToUnit } from '../../utils/helpers'

const SIZE_MAP: { [property: string]: string } = {
  small: '16px',
  default: '24px',
  medium: '24px',
  large: '36px',
}

const slots = useSlots()

interface Props {
  color?: string
  iconClass?: string
  backgroundColor?: string
  size?: string | number
  small?: boolean
  medium?: boolean
  large?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: '',
  iconClass: '',
  backgroundColor: 'transparent',
  size: '24px',
  small: false,
  medium: false,
  large: false,
})

const resultingSize = computed(() => {
  const sizes: { [property: string]: boolean } = {
    small: props.small,
    medium: props.medium,
    large: props.large,
  }
  const explicitSize = Object.keys(sizes).find((key: string) => sizes[key])
  return (explicitSize && SIZE_MAP[explicitSize]) || convertToUnit(props.size)
})
const customStyle = computed(() => {
  let styles: StyleValue = {}
  if (props.color) {
    styles.color = props.color
  }
  styles.backgroundColor = props.backgroundColor

  const size = resultingSize.value
  if (size) {
    styles = {
      ...styles,
      fontSize: size,
      height: size,
      width: size,
    }
  }
  return styles
})
const mdiIconClass = computed(() => {
  if (props.iconClass) return props.iconClass
  let iconName = ''
  if (slots.default) {
    const defaultSlot = slots.default()
    iconName = (defaultSlot[0].children as string)?.trim() || ''
  }
  return iconName
})
</script>

<style scoped lang="scss">
.app-icon {
  color: #111517;
}
</style>
