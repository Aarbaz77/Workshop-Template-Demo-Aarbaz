# Images

Place your image assets here (PNG, JPG, SVG, etc.)

## Recommended Optimization

Before adding images to your project:
- Compress images to reduce file size
- Use SVG for icons and logos
- Provide multiple image formats for different browsers
- Use responsive images with `<picture>` element or `srcset` attribute

## Example Usage

```html
<!-- Simple image -->
<img src="assets/images/logo.png" alt="Company Logo">

<!-- Responsive image -->
<img src="assets/images/hero-small.jpg" 
     srcset="assets/images/hero-medium.jpg 768w, assets/images/hero-large.jpg 1200w"
     alt="Hero Image">

<!-- SVG image -->
<img src="assets/images/icon.svg" alt="Icon">
```
