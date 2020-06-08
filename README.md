# gutenberg-image-selector

![Build](https://github.com/ljo-hamburg/gutenberg-image-selector/workflows/Build/badge.svg)
![Lint](https://github.com/ljo-hamburg/gutenberg-image-selector/workflows/Lint/badge.svg)
![npm](https://img.shields.io/npm/v/@ljo-hamburg/gutenberg-image-selector)

A simple image selection control to be used in the `InspectorControls` of a Gutenberg block.

## Installation

Install the package via npm

```shell
npm install --save @ljo-hamburg/gutenberg-image-selector
```

## Usage

After importing the package you can use the image selector in your block:

```jsx
import ImageSelector from "@ljo-hamburg/gutenberg-image-selector"
...
<InspectorControls>
  <ImageSelector
    imageID={imageID}
    authMessage="You are not permitted to upload images."
    label="Select Background Image"
    removeLabel="Remove Background Image"
    onChange={(imageID) => setAttributes({ imageID })}
  />
</InspectorControls>
```

The component supports the following props:

- `imageID`: The ID of the image that should be displayed, or `null` if no image is currently selected.
- `authMessage`: This message is displayed to users that are not permitted to upload images.
- `label`: This label is displayed on the butten when no image is selected.
- `removeLabel` (optional): This label is displayed on the button allowing the user to remove the selected image. If this is unspecified no removal button is displayed.
- `title`: The title of the image selection dialog.
- `onChange`: A function that is called when the user selects an image. When the image is removed this function is called with a `null` argument.