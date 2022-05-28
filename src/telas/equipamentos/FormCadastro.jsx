import { useContext } from "react";
import Alerta from "../Alerta";
import EquipamentoContext from "./EquipamentoContext";

function FormCadastro() {
    const { equipamento, handleChange, acaoCadastrar, alerta } = useContext(EquipamentoContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edição de Equipamentos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">ID </label>
                                <input type="text" readOnly className="form-control" id="txtID" name="id" value={equipamento.id} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">Nome </label>
                                <input type="text" className="form-control" id="txtNome" name="nome" value={equipamento.nome} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtFabricante" className="form-label">Fabricante </label>
                                <input type="text" className="form-control" id="txtFabricante" name="fabricante" value={equipamento.abricante} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtModelo" className="form-label">Modelo </label>
                                <input type="text" className="form-control" id="txtModelo" name="modelo" value={equipamento.modelo} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNSerie" className="form-label">Número de série </label>
                                <input type="text" className="form-control" id="txtNSerie" name="nserie" value={equipamento.nserie} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FormCadastro;