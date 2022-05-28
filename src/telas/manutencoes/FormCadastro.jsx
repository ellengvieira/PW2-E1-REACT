import { useContext } from "react";
import Alerta from "../Alerta";
import ManutencaoContext from "./ManutencaoContext";

function FormCadastro() {
    const { manutencao, handleChange, acaoCadastrar, alerta, listaEquipamentos } = useContext(ManutencaoContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edição de Manutenções</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta}/>
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">ID </label>
                                <input type="text"readOnly className="form-control" id="txtID" name="id" value={manutencao.id} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectEquipamento" className="form-label">Equipamentos</label>
                                <select className="form-select" id="selectEquipamento" value={manutencao.equipamento} name="equipamento" onChange={handleChange}>
                                    <option disabled="true" value="">Selecione o equipamento</option>
                                    {
                                        listaEquipamentos.map((equipamento) => (
                                            <option key={equipamento.id} value={equipamento.id}>
                                                {equipamento.nome}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtData" className="form-label">Data </label>
                                <input type="date" className="form-control" id="txtData" name="data" value={manutencao.data} onChange={handleChange} />
                            </div>  
                            <div className="form-group">
                                <label htmlFor="txtResponsavel" className="form-label">Responsavel </label>
                                <input type="text" className="form-control" id="txtResponsavel" name="responsavel"  value={manutencao.responsavel} onChange={handleChange} />
                            </div>    
                            <div className="form-group">
                                <label htmlFor="selectTipo" className="form-label">Tipo</label>
                                <select className="form-select" aria-label="Selecione" value={manutencao.tipo} onChange={handleChange} id="selectTipo" name="tipo">
                                    <option value="preventiva">Preventiva</option>
                                    <option value="corretiva">Corretiva</option>
                                </select>
                            </div>                                                                                  
                            <div className="form-group">
                                <label htmlFor="txtObservacoes" className="form-label">Observações </label>
                                <textarea className="form-control" id="txtObservacoes" name="observacoes" value={manutencao.observacoes} onChange={handleChange}/>
                            </div>                                                                                  
                            <div className="form-group">
                                <label htmlFor="selectStatus" className="form-label">Status </label>
                                <select className="form-select" aria-label="Selecione" id="txtStatus" name="status" value={manutencao.status} onChange={handleChange}>
                                    <option value="marcada">Marcada</option>
                                    <option value="realizada">Realizada</option>
                                    <option value="cancelada">Cancelada</option>
                                </select>
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