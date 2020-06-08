import React from "react";
import PropTypes from "prop-types";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, ResponsiveWrapper, Spinner } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

/**
 * A React component that lets the user select an image.
 *
 * @component
 * @example
 * let imageID = 123;
 * return <ImageSelector action={"Select an image"}
 *                       removeAction={"Remove Image"}
 *                       authMessage={"Login to upload images"}
 *                       imageID={imageID}
 *                       onChange={media => {...}} />
 */
export default function ImageSelector({
  label,
  removeLabel,
  title,
  authMessage,
  imageID,
  onChange,
}) {
  const image = useSelect(
    (select) => {
      return select("core").getMedia(imageID);
    },
    [imageID]
  );
  return (
    <>
      <MediaUploadCheck fallback={authMessage}>
        <MediaUpload
          title={title}
          onSelect={(media) => onChange(media.id)}
          allowedTypes={["image"]}
          value={imageID}
          render={({ open }) => (
            <>
              {image && (
                <Button
                  className={"editor-post-featured-image__preview"}
                  onClick={open}
                >
                  <ResponsiveWrapper
                    naturalWidth={image.media_details.width}
                    naturalHeight={image.media_details.height}
                  >
                    <img
                      src={image.source_url}
                      alt={image.alt_text || image.title.raw}
                    />
                  </ResponsiveWrapper>
                </Button>
              )}
              {!image && imageID && (
                <Button className={"editor-post-featured-image__preview"}>
                  <Spinner />
                </Button>
              )}
              {!image && !imageID && (
                <Button
                  className={"editor-post-featured-image__toggle"}
                  onClick={open}
                >
                  {label}
                </Button>
              )}
            </>
          )}
        />
      </MediaUploadCheck>
      {removeLabel && !!imageID && (
        <MediaUploadCheck>
          <Button onClick={() => onChange(null)} isLink isDestructive>
            {removeLabel}
          </Button>
        </MediaUploadCheck>
      )}
    </>
  );
}

ImageSelector.propTypes = {
  /**
   * The prompt displayed in the image selection dialog. The title is optional.
   */
  title: PropTypes.string,
  /**
   * The string on the button prompting the user to choose an image.
   */
  label: PropTypes.string,
  /**
   * An action text prompting the user to remove the selected image. If no
   * `removeAction` is specified the remove button will not be shown.
   */
  removeLabel: PropTypes.string,
  /**
   * A message telling the user to authorize before uploading images.
   */
  authMessage: PropTypes.node,
  /**
   * The ID of the currently selected image.
   */
  imageID: PropTypes.number,
  /**
   * A callback function that is called when the user selects an image.
   *
   * @param {object} media The image selected by the user or `null` if the image was
   *                       removed.
   */
  onChange: PropTypes.func,
};

ImageSelector.defaultProps = {
  title: undefined,
  onChange: () => {},
};
