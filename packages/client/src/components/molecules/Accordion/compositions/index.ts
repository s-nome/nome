import { ref, Ref } from 'vue'

// [必要な状態]
// - アコーディオンの開閉状態
// - アコーディオンの名前
// - アコーディオンのアイコン
type Accordion = {
  isOpen: Ref<boolean>
  name: Ref<string>
  icon: Ref<string>
  children?: Accordion[]
}

const accordion: Accordion = {
  isOpen: ref(false),
  name: ref('name'),
  icon: ref('🐉'),
}

const accordion2: Accordion = {
  isOpen: ref(false),
  name: ref('name2'),
  icon: ref('🐈'),
}

const accordion3: Accordion = {
  isOpen: ref(false),
  name: ref('name3'),
  icon: ref('🐕'),
  children: [accordion, accordion2],
}

// - アコーディオンの子アイテムの情報（オブジェクトでアコーディオンの子情報をもつ）

// [必要な関数]
// - アコーディオンの開閉を行う関数
type ToggleAccordion = (accordion: Accordion) => () => void

// - アコーディオンの名前を変更する関数
type ChangeAccordionName = (accordion: Accordion) => (name: string) => void

// - アコーディオンのアイコンを変更する関数
type ChangeAccordionIcon = (accordion: Accordion) => (icon: string) => void

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
