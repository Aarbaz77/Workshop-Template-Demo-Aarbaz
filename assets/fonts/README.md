# Custom Fonts

Place your custom font files here (WOFF, WOFF2, TTF, OTF, etc.)

## Font File Formats

- **WOFF2** - Modern, smallest file size (recommended)
- **WOFF** - Wide browser support
- **TTF/OTF** - Traditional formats

## How to Use

Add font declarations to your `styles.css`:

```css
@font-face {
    font-family: 'CustomFont';
    src: url('../assets/fonts/custom-font.woff2') format('woff2'),
         url('../assets/fonts/custom-font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'CustomFont', sans-serif;
}
```

## Google Fonts Alternative

Instead of hosting fonts locally, you can use Google Fonts in your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

Then in CSS:

```css
body {
    font-family: 'Roboto', sans-serif;
}
```
