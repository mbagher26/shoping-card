import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const Toast = () => {
    const ContextData = useContext(DataContext)
    
    return (
        <div className={` ${ContextData.showToast ? 'show' : ''} toast align-items-center text-bg-primary border-0 m-2 position-fixed bottom-0 end-0`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    محصول با موفقیت به سبد خرید اضافه شد.                    
                </div>
                <button onClick={() => {
                    ContextData.setShowToast(false)
                }} 
                type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Toast;