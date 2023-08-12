import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UnorderedList from './UnorderedList.vue'

describe('<UnorderedList />', () => {
  it('should render items correctly', () => {
    const wrapper = mount(UnorderedList, {
      props: {
        items: ['Item One', 'Item Two', 'Item Three'],
      },
    })

    expect(wrapper.findAll('li')).toHaveLength(3)
  })

  it('should be able to pass container class name as props', () => {
    const wrapper = mount(UnorderedList, {
      props: {
        items: ['Item One', 'Item Two', 'Item Three'],
        containerClass: 'list',
      },
    })

    expect(wrapper.classes()).toContain('list')
  })

  it('should be able to pass item class name as props', () => {
    const wrapper = mount(UnorderedList, {
      props: {
        items: ['Item One', 'Item Two', 'Item Three'],
        itemClass: 'list-item',
      },
    })

    const listItem = wrapper.find('li')

    expect(listItem.classes()).toContain('list-item')
  })
})
