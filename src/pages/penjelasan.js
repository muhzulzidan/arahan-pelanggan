import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Header from "../components/header"
const  Penjelasan = () => {
    return (
        <div>
            <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Layout>
                    <h1>Penjelasan </h1>
                    < p > Sebuah proyek yang di buat oleh saya < a href="https://muhzulzidan.com" > muhammad zulzidan </a>  yang bertujuan untuk membantu desainer menentukan proyek selanjutnya untuk di lakukan.</p >
                    < p > Terkadang seorang desainer butuh untuk membuat proyek yang bertujuan untuk mendapatkan perhatian orang lain agar bisa di sewa, atau di rekrut.</p >
                    <h1>Mau Membantu ?   </h1>
                    < p > Anda bisa membantu proyek ini dengan menginput saran ide untuk membantu desainer-desainer pemula lainnya.</p >
                   <Link to="/hubungi/" style={{color:"inherit", textDecoration:"none"}}>  < button className = "button button-bantu" > bantu</button></Link> 
                </Layout>
                <br/>
                <br/>
                <br/>
                <br/>
            <Footer />
        </div>
    )
}

export default Penjelasan
