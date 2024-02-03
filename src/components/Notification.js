import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notification({message,type}) {

        if (type === "error") {
            toast.error(message);
        } else {
            toast.success(message);
        }
        
}
