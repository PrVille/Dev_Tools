import { Routes, Route, Link } from "react-router-dom"

import Home from "../pages/Home"
import NoMatch from "../pages/NoMatch"
import AreaConverter from "../pages/tools/converters/AreaConverter"
import BitsAndBytesConverter from "../pages/tools/converters/BitsAndBytesConverter"

import LengthConverter from "../pages/tools/converters/LengthConverter"
import NumberBaseConverter from "../pages/tools/converters/NumberBaseConverter"
import RgbHexConverter from "../pages/tools/converters/RgbHexConverter"
import TemperatureConverter from "../pages/tools/converters/TemperatureConverter"
import TimeConverter from "../pages/tools/converters/TimeConverter"
import VolumeConverter from "../pages/tools/converters/VolumeConverter"
import WeightConverter from "../pages/tools/converters/WeightConverter"
import LoremIpsumGenerator from "../pages/tools/generators/LoremIpsumGenerator"
import PasswordGenerator from "../pages/tools/generators/PasswordGenerator"
import Dictionary from "../pages/tools/Resources/Dictionary"
import Snippets from "../pages/tools/Resources/Snippets"
import UsefulWebsites from "../pages/tools/Resources/UsefulWebsites"

import Stopwatch from "../pages/tools/Stopwatch"
import Timer from "../pages/tools/Timer"

const Content = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="stopwatch" element={<Stopwatch />} />
      <Route path="timer" element={<Timer />} />

      <Route path="rgbhexconverter" element={<RgbHexConverter />} />
      <Route path="numberbaseconverter" element={<NumberBaseConverter />} />
      <Route path="lengthconverter" element={<LengthConverter />} />
      <Route path="weightconverter" element={<WeightConverter />} />
      <Route path="temperatureconverter" element={<TemperatureConverter />} />
      <Route path="areaconverter" element={<AreaConverter />} />
      <Route path="bitsandbytesconverter" element={<BitsAndBytesConverter />} />
      <Route path="timeconverter" element={<TimeConverter />} />
      <Route path="volumeconverter" element={<VolumeConverter />} />

      <Route path="loremipsumgenerator" element={<LoremIpsumGenerator />} />
      <Route path="passwordgenerator" element={<PasswordGenerator />} />

      <Route path="dictionary" element={<Dictionary />} />
      <Route path="snippets" element={<Snippets />} />
      <Route path="websites" element={<UsefulWebsites />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default Content
