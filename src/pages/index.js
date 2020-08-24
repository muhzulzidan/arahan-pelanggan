import React, { Component } from 'react'
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
        notes: [
            'Membuat Infografik untuk mengajar anak-anak alfabet',
            'Membuat Ilustrasi mesin vending',
            'Membuat Ilustrasi tentang Produk kesukaanmu ',
            'Membuat Ilustrasi tentang Produk yang ingin kamu Beli ',
            'Membuat Poster untuk bisinis yang ada di sekitar mu, lalu menunjukkannya kepada mereka ',
            'Mendesain ulang poster yang kamu suka',
        ],
        selectedNote: 'Membuat Ilustrasi mesin vending',
        clicked:false
    }
  }

  
  componentDidMount() {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
      }
    });
    document.addEventListener('keydown', this.handleClickOutside,)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClickOutside );
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClick = (e) => {
    //  e.preventDefault();
      this.setState({
          selectedNote: this.state.notes[Math.floor(Math.random() *
              this.state.notes.length)],
          clicked:true
      })
      // console.log(this.state.clicked)
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.handleClick()
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>
       <Header siteTitle={this.props.data.site.siteMetadata.title} />
        <Layout>
        <SEO title="Arahan pelanggan" />
            <h1 className="index-h1">
                <span className="index-span">
                  {this.state.selectedNote}
                </span>
            
              
              </h1>
              <button onClick={this.handleClick.bind(this)} className="button  button-desktop" >Tekan Space Bar ! </button>
              <button onClick={this.handleClick.bind(this)} className="button button-mobile" >Tekan Saya ! </button>
        </Layout>
        <br/>
        <br/>
        <br/>
        <Footer/>
       
      </div>;
  }
}


export const query = graphql `
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`