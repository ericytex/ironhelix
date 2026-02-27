import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function AdsFlowPage() {
  const product = saasProducts.find(p => p.id === 'adsflow')!
  return <ProductPage product={product} />
}

