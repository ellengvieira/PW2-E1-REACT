import { useState, useEffect } from 'react';
import ManutencaoContext from "./ManutencaoContext";
import Tabela from './Tabela';
import FormCadastro from './FormCadastro';

function Manutencao() {
    const [manutencao, setManutencao] = useState({
        id: "",
        equipamento: "",
        data: "",
        responsavel: "",
        tipo: "",
        observacoes: "",
        status: ""
    });
    const [editar, setEditar] = useState(false);
    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const [listaManutencoes, setListaManutencoes] = useState(
        localStorage.getItem('ETAPA1/listamanutencoes') ? JSON.parse(localStorage.getItem('ETAPA1/listamanutencoes')) : []
    );

    const [listaEquipamentos, setListaEquipamentos] = useState(
        localStorage.getItem('ETAPA1/listaequipamentos') ? JSON.parse(localStorage.getItem('ETAPA1/listaequipamentos')) : []
    );

    useEffect(() => {
        localStorage.setItem('ETAPA1/listamanutencoes', JSON.stringify(listaManutencoes));
    }, [listaManutencoes]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setManutencao({ ...manutencao, [name]: value });
    }

    const acaoCadastrar = e => {
        e.preventDefault();
        if (editar) {

            const index = listaManutencoes.findIndex(p => p.id === manutencao.id);
            const listaManutencoesTemp = listaManutencoes.splice(0, index).concat(listaManutencoes.splice(index + 1));
            const newListaManutencoes = [...listaManutencoesTemp, manutencao].sort((a, b) => a.id - b.id);

            setListaManutencoes(newListaManutencoes);

            setAlerta({ status: "success", message: "Edição efetuada com sucesso!" });

        } else {

            if (manutencao.id === 0) {
                var idAtual = localStorage.getItem('ETAPA1/manutencao_id');
                if (idAtual === null) idAtual = 0;

                var novoId = Number(idAtual) + 1;

                manutencao.id = novoId;

                localStorage.setItem('ETAPA1/manutencao_id', novoId);

                setListaManutencoes([...listaManutencoes, manutencao]);

                setAlerta({ status: "success", message: "Cadastro efetuado com sucesso!" });
            }
        }
    };

    const acaoRemover = manutencao => {
        if (window.confirm("Deseja remover esta manutenção?")) {
            const listaManutencoesTemp = listaManutencoes.filter(p => p.id !== manutencao.id);
            setListaManutencoes(listaManutencoesTemp);
            setAlerta({ status: "success", message: "Remoção efetuada com sucesso!" });
        }
    }

    return (
        <ManutencaoContext.Provider value={
            {
                alerta, setAlerta,
                manutencao, setManutencao,
                listaManutencoes, setListaManutencoes,
                editar, setEditar,
                acaoRemover, acaoCadastrar, handleChange, listaEquipamentos
            }}>
            <Tabela />
            <FormCadastro />
        </ManutencaoContext.Provider>
    );
}

export default Manutencao;