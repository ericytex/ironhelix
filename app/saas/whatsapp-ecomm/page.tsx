import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function WhatsAppEcommPage() {
  const product = saasProducts.find(p => p.id === 'whatsapp-ecomm')!
  return <ProductPage product={product} />
}

