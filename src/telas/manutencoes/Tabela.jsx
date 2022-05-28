import { useContext } from 'react'
import ManutencaoContext from "./ManutencaoContext";
import Alerta from '../Alerta';

const Tabela = () => {

    const { listaManutencoes, setManutencao, setEditar, alerta, setAlerta, acaoRemover, listaEquipamentos } = useContext(ManutencaoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Manutenções</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setManutencao({ id: 0, equipamento: "", data: "", responsavel: "", tipo: "", observacoes: "", status: ""});
                    setEditar(false);
                    setAlerta({ status: "", message: "" });
                }}>
                Novo
            </button>
            {listaManutencoes.length === 0 && <h2> Nenhum registro encontrado </h2>}
            {listaManutencoes.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col" width="17%">ID</th>
                                <th scope="col">Equipamento</th>
                                <th scope="col">Data</th>
                                <th scope="col">Responsável</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Observações</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaManutencoes.map(manutencao => (
                                <tr key={manutencao.id}>
                                    <td align="center">
                                        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => {
                                                setManutencao(manutencao);
                                                setEditar(true);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { acaoRemover(manutencao); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <td>{manutencao.id}</td>
                                    <td>{manutencao.equipamento}</td>
                                    <td>{manutencao.data}</td>
                                    <td>{manutencao.responsavel}</td>
                                    <td>{manutencao.tipo}</td>
                                    <td>{manutencao.observacoes}</td>
                                    <td>{manutencao.status}</td>
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