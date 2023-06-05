const AuthLayout = (props) => {
    const {title, children} = props;
    return (
        <>
            <div className="authlayout">
                <div className="authlayout__content">
                    <div className="authlayout__background" />
                    <div className="authlayout__body container">
                        <h2 className="authlayout__body-title">{title}</h2>
                        <div className="authlayout__body-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout