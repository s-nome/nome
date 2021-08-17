import { ref, Ref } from 'vue'

/**
 * アコーディオン
 *
 * @property {} isOpen アコーディオンの開閉状態
 * @property {} name アコーディオンの名前
 * @property {} icon アコーディオンのアイコン
 * @property {} children 子アコーディオン
 */
export type Accordion = {
  isOpen: Ref<boolean>
  name: Ref<string>
  icon: Ref<string>
  children?: Accordion[]
}

/**
 * アコーディオンの開閉を行う関数
 *
 * @param accordion アコーディオン
 * @returns アコーディオンの開閉を行うカリー化関数
 */
type ToggleAccordion = (accordion: Accordion) => () => void

export const toggleAccordion: ToggleAccordion = (accordion: Accordion) => () =>
  (accordion.isOpen.value = !accordion.isOpen.value)

/**
 * アコーディオンの名前を変更する関数
 *
 * @param accordion アコーディオン
 * @returns アコーディオンの名前を変更するカリー化関数
 */
type ChangeAccordionName = (accordion: Accordion) => (name: string) => void

export const changeAccordionName: ChangeAccordionName = (accordion) => (
  name: string
) => (accordion.name.value = name)

// - アコーディオンのアイコンを変更する関数
type ChangeAccordionIcon = (accordion: Accordion) => (icon: string) => void

export const changeAccordionIcon: ChangeAccordionIcon = (
  accordion: Accordion
) => (icon: string) => (accordion.icon.value = icon)

// - アコーディオンの子を追加する関数
type addAccordionChild = (
  accordion: Accordion
) => (accordionChild: Accordion) => void

// - アコーディオンの削除をemitする関数
// - アコーディオンの複製をemitする関数

type UseAccordion = (
  accordion: Accordion
) => {
  toggleAccordion: ReturnType<ToggleAccordion>
  changeAccordionName: ReturnType<ChangeAccordionName>
  changeAccordionIcon: ReturnType<ChangeAccordionIcon>
}
