import { ref } from 'vue'
import {
  Accordion,
  toggleAccordion,
  changeAccordionName,
  changeAccordionIcon,
} from '.'

const ACCORDION: Accordion = {
  isOpen: ref(true),
  name: ref('foo'),
  icon: ref('🐉'),
}

describe('toggleAccordion', () => {
  test('アコーディオンが「開いている」場合は関数の実行によって閉じられること', () => {
    const testTarget = toggleAccordion(ACCORDION)
    testTarget()
    expect(ACCORDION.isOpen.value).toBe(false)
  })
  test('アコーディオンが「閉じている」場合は関数の実行によって開かれること', () => {
    ACCORDION.isOpen.value = false
    const testTarget = toggleAccordion(ACCORDION)
    testTarget()
    expect(ACCORDION.isOpen.value).toBe(true)
  })
})

describe('changeAccordionName', () => {
  test('アコーディオンの名前が関数実行時の引数の値に変更されること', () => {
    const testTarget = changeAccordionName(ACCORDION)
    testTarget('bar')
    expect(ACCORDION.name.value).toMatch('bar')
  })
})

describe('changeAccordionIcon', () => {
  test('アコーディオンのアイコンが関数実行時の引数の値に変更されること', () => {
    const testTarget = changeAccordionIcon(ACCORDION)
    testTarget('🐈')
    expect(ACCORDION.icon.value).toMatch('🐈')
  })
})
