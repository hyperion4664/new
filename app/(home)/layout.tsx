import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { ClientWrapper } from './client-wrapper'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex flex-col'>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </main>
      <Footer />
    </div>
  )
}