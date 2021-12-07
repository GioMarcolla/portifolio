import { Global } from "@emotion/react"
import { NextPage } from "next"

interface Props { }

const Fonts: NextPage<Props> = () => (
  <Global
    styles={`
      @import url('https://fonts.cdnfonts.com/css/aquire');
      `}
  />
)

export default Fonts