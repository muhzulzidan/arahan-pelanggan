import React from 'react';
import {Link} from "gatsby";
import ContactUs from "../components/contactUs";
import SEO from '../components/seo'
import Layout from "../components/layout"
import Footer from "../components/footer"
import Header from "../components/header"
const HubungiKami = ({location}) =>  {
    return (
        <>
            <SEO  title="Hubungi Kami"/>
            <Header/>
            <Layout>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <div className="contactUs-content">
                    <div className="contactUs-headdiv">
                        {/* <Link className="contactUs-kembali" to={`/`} >Halaman Utama</Link> */}
                        <div className="contactUs-divicon">
                            <h1 className="contactUs-hubungi">Hubungi kami</h1>
                        </div>
                    </div>            
                    <ContactUs location={location}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </Layout>
            <Footer />
        </>
    )
}
export default HubungiKami