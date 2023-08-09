import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Avatar from './Avatar.vue'

describe('Avatar', () => {
  it('should render avatar image correctly', () => {
    const props = {
      source: 'https://github.com/clodoaldodantas.png',
      name: 'Clodoaldo Dantas',
    }

    const wrapper = mount(Avatar, { props })
    const imageElement = wrapper.find('img')

    expect(imageElement.exists()).toBe(true)
    expect(imageElement.attributes('src')).toEqual(props.source)
    expect(imageElement.attributes('alt')).toEqual(props.name)
  })

  it('should render first letter of name property if source property is not passed', () => {
    const wrapper = mount(Avatar, {
      props: {
        name: 'Clodoaldo Dantas',
      },
    })

    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.text()).toEqual('C')
  })
})
