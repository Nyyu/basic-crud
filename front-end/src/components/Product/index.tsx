import Image from "next/image"
import { priceFormatter } from "../../utils/priceFormatter"
import { Heading } from "../Heading"
import { Paragraph } from "../Paragraph"

// styles
import {
  ProductStyled,
  ProductText,
} from "./styles/ProductStyled"

// types
import {
  ProductBodyProps,
  ProductImageProps,
  ProductRootProps,
} from "./types/ProductTypes"

const Root = ({
  children,
  className = "",
}: ProductRootProps) => {
  return (
    <ProductStyled className={className}>
      {children}
    </ProductStyled>
  )
}

const ProductImage = ({
  src = "#",
  className = "w-[174px] h-[174px] rounded-2xl product-dropshadow",
  alt = "",
  placeholder = "blur",
  height = 174,
  width = 174,
}: ProductImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder={placeholder}
      className={className}
      blurDataURL={"UUE{kNt7IUt7~qt7M{t7-;ofRjofxuofWBj["} // Random blurhash
      width={width}
      height={height}
    />
  )
}

const Body = ({
  title = "Lorem ipsum.",
  price = "0",
}: ProductBodyProps) => {
  const priceConverted = +price / 100
  const priceFormatted =
    priceFormatter.format(priceConverted)

  return (
    <ProductText>
      <Paragraph size="md">{title}</Paragraph>
      <Heading size="sm">{priceFormatted}</Heading>
    </ProductText>
  )
}

export const Product = {
  Root,
  Image: ProductImage,
  Body,
}
