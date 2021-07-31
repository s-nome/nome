import { Ref } from 'vue'

/**
 * アイコン（絵文字）
 */
type Icon = Ref<string>

/**
 * アイコン選択画面が表示されている状態
 */
type IsShownIconSelectionModal = Ref<boolean>

/**
 * アイコン選択画面を表示/非表示する関数
 *
 * @param isShownIconSelectionModal アイコン選択画面が表示されている状態
 * @returns アイコン選択画面を表示/非表示するカリー化関数
 */
type ToggleDisplayOfIconSelectionModal = (
  isShownIconSelectionModal: IsShownIconSelectionModal
) => () => void

/**
 * アイコンを設定する関数
 *
 * @param icon アイコン
 * @returns アイコンを設定するカリー化関数
 */
type ChangeIcon = (icon: Icon) => (newIcon: string) => void

type UseIcon = (
  isShownIconSelectionModal: IsShownIconSelectionModal,
  icon: Icon
) => {
  toggleDisplayOfIconSelectionModal: ReturnType<ToggleDisplayOfIconSelectionModal>
  changeIcon: ReturnType<ChangeIcon>
}
