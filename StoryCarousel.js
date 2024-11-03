class StoryCarousel {
  _index = 0;
  opt = {
    duration: 3000
  };

  constructor(element, opts) {
    this.element = element;
    this.opts = opts;
    this._items = element.querySelectorAll('.story-carousel-item');
    this.init()
  }

  init() {
    console.log('options', this.opts);
    this.element.classList.add('initialized');

    this._wrap = document.createElement('div');
    this._wrap.classList.add('story-carousel-wrap');
  
    this._wrap.appendChild(this.element.querySelector('.story-carousel-items'));
    this.element.appendChild(this._wrap);

    this.buildIndicators();
    this.animate();
  }

  buildIndicators() { 
    const indicators = document.createElement('div');
    indicators.classList.add('story-carousel-indicators');
    this._items.forEach((item, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('story-carousel-indicator');
      const loading = document.createElement('i');
      loading.classList.add('story-carousel-indicator-loading');
      // loading.style.transitionDuration = this.opts.duration + 'ms';
      loading.setAttribute('data-duration', this.opts.duration + 'ms');
      indicator.appendChild(loading);
      indicators.appendChild(indicator);
    });
    this._indicators = indicators.querySelectorAll('.story-carousel-indicator');
    this._wrap.appendChild(indicators);
  }

  animate() {
    this._items[this._index].classList.add('story-carousel-item-active');
    this._indicators[this._index].classList.add('story-carousel-indicator-active');
    this._index++;
    setInterval(() => {
      this._items.forEach((item, i) => {
        item.classList.remove('story-carousel-item-active')
        this._indicators[i].classList.remove('story-carousel-indicator-active')
      });
      this._items[this._index].classList.add('story-carousel-item-active');
      this._indicators[this._index].classList.add('story-carousel-indicator-active')
      this._index++;
      if (this._index >= this._items.length) {
        this._index = 0;
      }
    }, this.opts.duration);
  }
}