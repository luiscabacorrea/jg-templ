import Banner from './container/Banner'
import Brands from './container/Brands'
import Callus from './container/Callus'
import CoverPage from './container/CoverPage'
import Experience from './container/Experience'
import Faq from './container/Faq'
import Gallery from './container/Gallery'
// import Products from './container/Products'
import Services from './container/Services'
import Sponsors from './container/Sponsors'
import Testimonials from './container/Testimonials'

export default function Main () {
  return (
    <div role="main" className="main">
      <CoverPage/>
      <Banner/>
      <Experience/>
      <Brands/>
      <Services/>
      <Testimonials/>
      <Callus/>
      <Gallery/>
      <Faq/>
      {/* <Products/> */}
      <Sponsors/>
    </div>
  )
};
