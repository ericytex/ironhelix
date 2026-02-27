import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function AIStoryShortsPage() {
  const product = saasProducts.find(p => p.id === 'ai-story-shorts')!
  return <ProductPage product={product} />
}

