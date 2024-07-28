# PDF Downloader Chrome Extension

This Chrome extension allows users to easily download all PDF links from the current webpage with a single click.

## Features

- Download all PDF links from the current page
- Simple one-click operation
- Visual feedback with badge showing number of downloads

## Installation

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to a webpage containing PDF links.
2. Click the PDF Downloader extension icon in the Chrome toolbar.
3. The extension will automatically start downloading all PDF files linked on the current page.
4. A badge on the extension icon will show the number of PDFs being downloaded.

## Files

- `manifest.json`: Extension configuration
- `background.js`: Background script for handling extension logic
- `icon.svg`: Extension icon

## Development

To modify the extension:

1. Edit the relevant files (`manifest.json`, `background.js`, `icon.svg`).
2. If you change the icon, make sure to update it in both the `action` and `icons` sections of `manifest.json`.
3. Reload the extension in `chrome://extensions` by clicking the refresh icon on the extension card.

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.