import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
    return (
        <List>
            {images.map(({ id, webformatUrl, tags, largeImageUrl }) => (
                <ImageGalleryItem
                    key={id}
                    id={id}
                    largeImageUrl={largeImageUrl}
                    src={webformatUrl}
                    tag={tags}
                    onClick={onClick}
                />
            ))}
        </List>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
}


export default ImageGallery

