import { CoordinateSelector } from '../../ui/coordinateSelector/CoordinateSelector';
import { UploadImageOffer } from './components/UploadImageOffer';

export const CreateOfferWithImage = () => {
   
    return (
       <>
            <UploadImageOffer />
            <CoordinateSelector />
       </>
    );
}