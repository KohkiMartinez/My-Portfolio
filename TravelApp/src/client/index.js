// import js files in client/js folder
import { tabSwitch } from "./js/app"
import { handleSubmit } from "./js/app"
import { postGeoNameData } from "./js/app"
import { postCurrentWeatherData } from "./js/app"
import { postForecastWeatherData } from "./js/app"
import { postPixabayData } from "./js/app"
import { updateUI } from "./js/app"
import { checkForDate } from "./js/checkForDate"
import { addImages } from "./js/addImages"
import { addWeatherData } from "./js/addWeatherDarta"

// import all styles in scss in style folder
import "./styles/loading.scss"
import "./styles/tabChange.scss"
import "./styles/styles.scss"


// export functions from js folder that we imported into this file
export {
    tabSwitch, handleSubmit, postGeoNameData, postCurrentWeatherData, postForecastWeatherData, postPixabayData, updateUI, checkForDate, addImages, addWeatherData
}