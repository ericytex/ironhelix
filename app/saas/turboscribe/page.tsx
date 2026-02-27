import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function TurboScribePage() {
  const product = saasProducts.find(p => p.id === 'turboscribe-alt')!
  return <ProductPage product={product} />
}

