import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={"100%"}
    height={284}
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="8" ry="8" width="100%" height="284" />
  </ContentLoader>
)

export default InfoLoader