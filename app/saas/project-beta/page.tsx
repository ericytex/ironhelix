import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function ProjectBetaPage() {
  const product = saasProducts.find(p => p.id === 'project-beta')!
  return <ProductPage product={product} />
}

