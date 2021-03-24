import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={284}
    height={348}
    viewBox="0 0 284 348"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="8" ry="8" width="284" height="284" /> 
    <rect x="0" y="300" rx="8" ry="8" width="155" height="48" />
  </ContentLoader>
)

export default ImageLoader