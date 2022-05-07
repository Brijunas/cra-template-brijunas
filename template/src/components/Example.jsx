import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/material/styles"
import TablePagination from "@mui/material/TablePagination"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import i18next from "i18next"
import { supportedLngs } from "../configs/languages"
import ColorModeContext from "../contexts/ColorModeContext"
import DatePicker from "../shared/DatePicker"

const ChangeColorMode = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const [alignment, setAlignment] = useState(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const handleChange = (_, newAlignment) => {
    if (newAlignment) {
      colorMode.toggleColorMode()
      setAlignment(newAlignment)
    }
  }

  return (
    <ToggleButtonGroup sx={{ marginBottom: 2 }} value={alignment} exclusive onChange={handleChange}>
      <ToggleButton key={"light"} value={"light"}>
        {t("light")}
      </ToggleButton>
      <ToggleButton key={"dark"} value={"dark"}>
        {t("dark")}
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation()
  const [alignment, setAlignment] = useState(i18n.language)

  const handleChange = (_, newAlignment) => {
    if (newAlignment) {
      i18next.changeLanguage(newAlignment, () => {
        setAlignment(newAlignment)
      })
    }
  }

  return (
    <ToggleButtonGroup sx={{ marginBottom: 2 }} value={alignment} exclusive onChange={handleChange}>
      {supportedLngs.map((l) => (
        <ToggleButton key={l} value={l}>
          {t("lang", { lng: l })}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

const Example = () => {
  const { t } = useTranslation()

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" sx={{ minHeight: "100vh" }}>
      <ChangeColorMode />
      <ChangeLanguage />
      <DatePicker label={t("select-date")} />
      <TablePagination count={100} rowsPerPage={10} page={1} component="div" onPageChange={() => {}} />
    </Grid>
  )
}

export default Example
