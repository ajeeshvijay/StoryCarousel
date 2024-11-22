<p align="left">
  <img src="StoryCarousel.js-icon.png" alt="StoryCarousel Icon" width="180">
</p>

# StoryCarousel 📖🎠

**StoryCarousel** is a lightweight and flexible interface element designed to display multiple stories or content pieces in a rotating or swipeable format. It enables users to navigate through various items sequentially, offering a smooth and engaging browsing experience.

## 🌟 Features

- **Lightweight**: Minimal script size, ensuring faster load times.
- **No Dependencies**: Built with native JavaScript—no external libraries required.
- **Customizable**: Easily adapt styles and behavior to fit your project.
- **Responsive**: Works seamlessly across devices.
- **Touch-Friendly**: Optimized for swipe gestures on mobile and tablet.

## 🚀 Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/ajeeshvijay/StoryCarousel.git
   ```

2. Include the script and styles in your project:
   ```html
   <link rel="stylesheet" href="StoryCarousel.css">
   <script src="StoryCarousel.js"></script>
   ```

3. Add the HTML structure:
   ```html
   <div id="storyCarousel" class="story-carousel">
		<div class="story-carousel-items">
			<div class="story-carousel-item">
				<img class="story-carousel-item-image" src="./images/leafy-greens.jpg" />
				<div class="story-carousel-item-desc">
				<h2 class="story-carousel-item-title">Leafy Greens</h2>
				<p class="story-carousel-item-text">Leafy greens are a popular and healthy way to start your morning.
				</div>
			</div>

			....
		</div>
	</div>
	```

## 🛠️ Usage
Initialize the carousel using:
   ```javascript
   const storyCarousel = new StoryCarousel(document.getElementById('storyCarousel'), {
      autoplay: true,
      duration: 3000,
      loop: true
    });
  ```

## 🎨 Customization
Modify the styles in StoryCarousel.css to match your design needs.

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## 📜 License
This project is licensed under the [Apache-2.0 license](LICENSE).
