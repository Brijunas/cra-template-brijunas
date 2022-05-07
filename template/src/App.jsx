import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import CssBaseline from "@mui/material/CssBaseline"
import * as locales from "@mui/material/locale"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Example from "./components/Example"
import { getLangByi18n } from "./configs/languages"
import ColorModeContext from "./contexts/ColorModeContext"

// import dayjs locale here...
import dayjs from "dayjs"
import "dayjs/locale/sv"

const App = () => {
  const { i18n } = useTranslation()
  const preferableColorMode = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
  const [mode, setMode] = useState(preferableColorMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = useMemo(() => {
    const lang = getLangByi18n(i18n.language)
    dayjs.locale(lang.dayjs)

    return createTheme(
      {
        palette: {
          mode: mode,
        },
      },
      locales[lang.mui]
    )
  }, [i18n.language, mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Example />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
