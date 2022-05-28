import { useContext } from 'react'
import EquipamentoContext from "./EquipamentoContext";
import Alerta from '../Alerta';

const Tabela = () => {

    const { listaEquipamentos, setEquipamento, setEditar, alerta, setAlerta, acaoRemover } = useContext(EquipamentoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Equipamentos</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setEquipamento({ id: 0, nome: "", fabricante: "", modelo: "", nserie: "" });
                    setEditar(false);
                    setAlerta({ status: "", message: "" });
                }}>
                Novo
            </button>
            {listaEquipamentos.length === 0 && <h2> Nenhum registro encontrado </h2>}
            {listaEquipamentos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col" width="17%">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Fabricante</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">nº de série</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaEquipamentos.map(equipamento => (
                                <tr key={equipamento.id}>
                                    <td align="center">
                                        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => {
                                                setEquipamento(equipamento);
                                                setEditar(true);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { acaoRemover(equipamento); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <td>{equipamento.id}</td>
                                    <td>{equipamento.nome}</td>
                                    <td>{equipamento.fabricante}</td>
                                    <td>{equipamento.modelo}</td>
                                    <td>{equipamento.nserie}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

}

export default Tabela;