import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function ScepterPage() {
  const product = saasProducts.find(p => p.id === 'scepter')!
  return <ProductPage product={product} />
}

