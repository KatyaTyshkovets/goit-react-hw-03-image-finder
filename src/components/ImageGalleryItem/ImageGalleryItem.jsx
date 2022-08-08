import PropTypes from 'prop-types';
import { Images, GalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ id, src, tag, onClick, largeImageUrl}) => {
    return (
        <GalleryItem id={id} key={id}>
            <Images src={src} alt={tag} onClick={onClick} data-set={ largeImageUrl } />
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string,
    tag: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}


export default ImageGalleryItem;