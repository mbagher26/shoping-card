const Toast = () => {
    return (
        <div className="toast align-items-center text-bg-primary border-0 m-2 position-fixed bottom-0 end-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    محصول با موفقیت به سبد خرید اضافه شد.                    
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Toast;