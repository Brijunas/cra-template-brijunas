import { useState } from "react"
import { useTranslation } from "react-i18next"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import PropTypes from "prop-types"

const DatePicker = ({ label }) => {
  const [value, setValue] = useState(undefined)
  const { i18n } = useTranslation()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale={i18n.language}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
        disableMaskedInput
      />
    </LocalizationProvider>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string,
}

export default DatePicker
