import { useTheme } from "../context/theme"

export function Logo() {
  const { theme } = useTheme()
  return (
    <text fg={theme.textMuted} bold={false}>
      Claude
    </text>
  )
}
