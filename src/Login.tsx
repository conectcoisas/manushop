export default function Login(){
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">MANUSHOP</h3>
                <div className="form-group mt-3">
                    <label>Colaborador:</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Colaborador"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Senha</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Senha"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                    Entrar
                    </button>
                </div>              
                </div>
            </form>
            </div>
    )
}