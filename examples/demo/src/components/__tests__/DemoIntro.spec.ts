import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import DemoIntro from '../DemoIntro.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(DemoIntro, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
