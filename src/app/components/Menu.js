import GSAP from 'gsap'

import Component from '@/classes/Component'

import * as COLORS from '../utils/colors'

export default class extends Component {
  constructor () {
    super({
      element: '.menu__list',
      elements: {
        // button: '.menu__button',
        // dropdownItem: '.menu__links__dropdown__item, .menu__languages__dropdown__item',
        // contactMenu: '.menu__contact'
      }
    })

    this.content = document.querySelector('.app')
    this.template = this.content.getAttribute('data-template')

    this.onNavigateEnd()
  }

  onNavigateEnd () {
    if (this.template === 'home') {
      GSAP.to(this.element, {
        bottom: '14rem',
        left: '4.2rem',
        flexDirection: 'row',
        alignItems: 'center',
      })
    }

    if (this.template === 'gallery') {
      GSAP.to(this.element, {
        top: '2rem',
        left: '78rem',
        flexDirection: 'column',
        alignItems: 'end',
      })
    } 
  }
}