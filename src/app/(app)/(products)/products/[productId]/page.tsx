import { ProductView } from "@/modules/products/ui/views/product-view";


interface Props {
  params: Promise<{ productId: string; slug: string; }>
}

const Page = async ({ params }: Props) => {

  const { productId } = await params;

  return (
    <ProductView productId={productId} />
  )
}
export default Page