import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component that alerts if you click outside of it
 */
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
        selectedNote: null,
        clicked: false
    }
  }

  
  componentDidMount() {
    document.addEventListener('keyup', this.handleClickOutside);

    // document.onkeyup (32) 
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClick = () => {
      this.setState({
          clicked: true,
          selectedNote: this.state.notes[Math.floor(Math.random() *
              this.state.notes.length)]
      })
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({
            clicked: true,
            selectedNote: this.state.notes[Math.floor(Math.random() *
                this.state.notes.length)]
        })
        console.log('You clicked outside of me!');
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};
