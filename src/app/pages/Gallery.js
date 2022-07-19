import GSAP from 'gsap';

import Page from '@/classes/Page';

export default class GalleryPage extends Page {
  constructor() {
    super({
      element: '.gallery',
      elements: {
        media: '.gallery__media__image',
      },
    });
  }

  beforeShow() {
    super.beforeShow();
  }

  show() {
    this.timelineIn = GSAP.timeline();
    this.timelineIn.fromTo(
      this.element,
      {
        autoAlpha: 0,
        x: '1900',
      },
      {
        autoAlpha: 1,
        x: '0',
        duration: 1,
        ease: 'power2.out',
      }
    );

    return super.show(this.timelineIn);
  }

  hide() {
    this.timelineOut = GSAP.timeline();
    this.timelineOut.to(this.element, {
      autoAlpha: 0,
      duration: 0.4,
    });

    return super.hide(this.timelineOut);
  }
}
