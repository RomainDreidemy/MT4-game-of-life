export interface IControlsProps {
  isLive: boolean
  currentInterval: number
  onChangeLiveStatus: () => void
  onChangeInterval: (interval: number) => void
  onNext: () => void
}
