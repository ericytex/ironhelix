import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function ContentRepurposerPage() {
  const product = saasProducts.find(p => p.id === 'content-repurposer')!
  return <ProductPage product={product} />
}

