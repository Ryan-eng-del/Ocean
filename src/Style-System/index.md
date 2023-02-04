---
order: 1
group:
  title: ''
  order: 0
---

# Style Props

## Margin and padding

| Prop              | CSS Property                 | Style System |
| ----------------- | ---------------------------- | ------------ |
| m, margin         | margin                       | space        |
| mt, marginTop     | margin-top                   | space        |
| mr, marginRight   | margin-right                 | space        |
| mb, marginBottom  | margin-bottom                | space        |
| ml, marginLeft    | margin-left                  | space        |
| my, marginY       | margin-top + margin-bottom   | space        |
| p, padding        | padding                      | space        |
| pt, paddingTop    | padding-top                  | space        |
| pr, paddingRight  | padding-right                | space        |
| pb, paddingBottom | padding-bottom               | space        |
| pl, paddingLeft   | padding-left                 | space        |
| py, paddingY      | padding-top + padding-bottom | space        |

## Color

| Prop          | CSS Property     | Style System |
| ------------- | ---------------- | ------------ |
| color         | color            | colors       |
| bg background | background       | colors       |
| bgColor       | background-color | colors       |

## Width and height

| Prop            | CSS Property        | Style System |
| --------------- | ------------------- | ------------ |
| w, width        | width sizes         | sizes        |
| h, height       | height sizes        | sizes        |
| minW, minWidth  | min-width sizes     | sizes        |
| maxW, maxWidth  | max-width sizes     | sizes        |
| minH, minHeight | min-height sizes    | sizes        |
| maxH, maxHeight | max-height sizes    | sizes        |
| display         | display             | none         |
| boxSize         | width, height sizes | sizes        |
| verticalAlign   | vertical-align      | none         |
| overflow        | overflow            | none         |
| overflowX       | overflow-x          | none         |
| overflowY       | overflow-y          | none         |

## Border

| Prop              | CSS Property               | Style System |
| ----------------- | -------------------------- | ------------ |
| border            | border                     | borders      |
| borderWidth       | border-width               | borderWidths |
| borderStyle       | border-style               | none         |
| borderColor       | border-color               | colors       |
| borderTop         | border-top                 | borders      |
| borderTopWidth    | border-top-width           | borderWidths |
| borderTopStyle    | border-top-style           | none         |
| borderTopColor    | border-top-color           | colors       |
| borderRight       | border-right               | borders      |
| borderRightWidth  | border-right-width         | borderWidths |
| borderEndWidth    | border-inline-end-width    | borderWidths |
| borderRightStyle  | border-right-style         | none         |
| borderEndStyle    | border-inline-end-style    | none         |
| borderRightColor  | border-right-color         | colors       |
| borderEndColor    | border-inline-end-color    | colors       |
| borderBottom      | border-bottom              | borders      |
| borderBottomWidth | border-bottom-width        | borderWidths |
| borderBottomStyle | border-bottom-style        | none         |
| borderBottomColor | border-bottom-color        | colors       |
| borderLeft        | border-left                | borders      |
| borderStart       | border-inline-start        | borders      |
| borderLeftWidth   | border-left-width          | borderWidths |
| borderStartWidth  | border-inline-start-width  | borderWidths |
| borderLeftStyle   | border-left-style          | none         |
| borderStartStyle  | border-inline-start-style  | none         |
| borderLeftColor   | border-left-color          | colors       |
| borderStartColor  | border-inline-start-color  | colors       |
| borderX           | border-left , border-right | borders      |
| borderY           | border-top , border-bottom | borders      |

## BorderRadius

| Prop                    | CSS Property                                           | Style System |
| ----------------------- | ------------------------------------------------------ | ------------ |
| borderRadius            | border-radius                                          | radius       |
| borderTopLeftRadius     | border-top-left-radius                                 | radius       |
| borderTopRightRadius    | border-top-right-radius                                | radius       |
| borderBottomRightRadius | border-bottom-right-radius                             | radius       |
| borderBottomLeftRadius  | border-bottom-left-radius                              | radius       |
| borderTopRadius         | border-top-left-radius + border-top-right-radius       | radius       |
| borderRightRadius       | border-top-right-radius + border-bottom-right-radius   | radius       |
| borderEndRadius         | border-top-right-radius + border-bottom-right-radius   | radius       |
| borderBottomRadius      | border-bottom-left-radius + border-bottom-right-radius | radius       |
| borderLeftRadius        | border-top-left-radius + border-bottom-left-radius     | radius       |
| borderStartRadius       | border-top-left-radius + border-bottom-left-radius     | radius       |
| rounded                 | border-radius                                          | radius       |
| roundedTop              | border-top-radius                                      | radius       |
| roundedTopLeft          | border-top-left-radius                                 | radius       |
| roundedTopRight         | border-top-right-radius                                | radius       |
| roundedBottom           | border-bottom-radius                                   | radius       |
| roundedBottomLeft       | border-bottom-left-radius                              | radius       |
| roundedBottomRight      | border-bottom-right-radius                             | radius       |
| roundedLeft             | border-left-radius                                     | radius       |
| roundedRight            | border-right-radius                                    | radius       |

## Flex

| Prop           | CSS Property    | Style System |
| -------------- | --------------- | ------------ |
| gap            | gap             | space        |
| rowGap         | row-gap         | space        |
| columnGap      | column-gap      | space        |
| alignItems     | align-items     | none         |
| alignContent   | align-content   | none         |
| justifyItems   | justify-items   | none         |
| justifyContent | justify-content | none         |
| flexWrap       | flex-wrap       | none         |
| flexDirection  | flex-direction  | none         |
| flex           | flex            | none         |
| flexGrow       | flex-grow       | none         |
| flexShrink     | flex-shrink     | none         |
| flexBasis      | flex-basis      | none         |
| justifySelf    | justify-self    | none         |
| alignSelf      | align-self      | none         |
| order          | order           | none         |

## Grid

| Prop                | CSS Property          | Style System |
| ------------------- | --------------------- | ------------ |
| gridGap             | grid-gap              | space        |
| gridRowGap          | grid-row-gap          | space        |
| gridColumnGap       | grid-column-gap       | space        |
| gridColumn          | grid-column           | none         |
| gridRow             | grid-row              | none         |
| gridArea            | grid-area             | none         |
| gridAutoFlow        | grid-auto-flow        | none         |
| gridAutoRows        | grid-auto-rows        | none         |
| gridAutoColumns     | grid-auto-columns     | none         |
| gridTemplateRows    | grid-template-rows    | none         |
| gridTemplateColumns | grid-template-columns | none         |
| gridTemplateAreas   | grid-template-areas   | none         |

## Typography

| Prop           | CSS Property    | Style System   |
| -------------- | --------------- | -------------- |
| fontFamily     | font-family     | fonts          |
| fontSize       | font-size       | fontSizes      |
| fontWeight     | font-weight     | fontWeights    |
| lineHeight     | line-height     | lineHeights    |
| letterSpacing  | letter-spacing  | letterSpacings |
| textAlign      | text-align      | none           |
| fontStyle      | font-style      | none           |
| textTransform  | text-transform  | none           |
| textDecoration | text-decoration | none           |

## Background

| Prop                              | CSS Property          | Style System |
| --------------------------------- | --------------------- | ------------ |
| bgImage backgroundImage           | background-image      | none         |
| bgSize backgroundSize             | background-size       | none         |
| bgPosition backgroundPosition     | background-position   | none         |
| bgRepeat backgroundRepeat         | background-repeat     | none         |
| bgAttachment backgroundAttachment | background-attachment | none         |
