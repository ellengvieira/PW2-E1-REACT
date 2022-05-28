import { useState } from 'react';

const Home = () => {
    const [listaEquipamentos, setListaEquipamentos] = useState(
        localStorage.getItem('ETAPA1/listaequipamentos')
            ? JSON.parse(localStorage.getItem('ETAPA1/listaequipamentos')) : []
    );

    const [listaManutencoes, setListaManutencoes] = useState(
        localStorage.getItem('ETAPA1/listamanutencoes')
            ? JSON.parse(localStorage.getItem('ETAPA1/listamanutencoes')) : []
    );

    const [manutencoesDoEquipamento, setManutencoesDoEquipamento] = useState([]);

    // aqui foi ctrl c + ctrl v mesmo :(
    const manutencaoDoEquipamento = id => {
        setManutencoesDoEquipamento([]);
        const listaManutencaoDoEquipamento = listaManutencoes.filter(s => Number(s.equipamento) === Number(id));
        setManutencoesDoEquipamento(listaManutencaoDoEquipamento);
    }
    return (
        <div style={{ padding: '20px' }}>
            <h1>Gerenciamento de manutenções</h1>
            <h2>Equipamentos</h2>
            <div className="modal fade" id="modalManutencoes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Manutenções</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div className="modal-body">
                        {manutencoesDoEquipamento.length === 0 && <h5>Nenhum registro encontrado</h5>}
                        {manutencoesDoEquipamento.length > 0 && (
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Data</th>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Responsável</th>
                                            <th scope="col">Observações</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {manutencoesDoEquipamento.map(objeto => (
                                            <tr key={objeto.id}>
                                                <td>{objeto.data}</td>
                                                <td>{objeto.tipo}</td>
                                                <td>{objeto.responsavel}</td>
                                                <td>{objeto.observacoes}</td>
                                                <td>{objeto.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {listaEquipamentos.map(objeto => (
                        <div key={objeto.id} className={`card col-6`} >
                            <h5 className="card-header">{objeto.nome}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{objeto.nserie}</h5>
                                <h5 className="card-title">{objeto.modelo}</h5>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalManutencoes"
                                    onClick={() => manutencaoDoEquipamento(objeto.id)}>
                                    Manutenções
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Home;