import Banner from "../../components/Banner/Banner"
import Nav from "../../components/NavBar/Nav"
import faqImage from "../../images/faqs.jpg"
import FAQ from "../../components/Faq/FaqCom"
import Footer from "../../components/Footer/Footer"

function Faqs (){
     return(
          <div>
               <Nav />
               <Banner image={faqImage}/>
               <FAQ />
               <Footer />
          </div>
     )
}


export default Faqs