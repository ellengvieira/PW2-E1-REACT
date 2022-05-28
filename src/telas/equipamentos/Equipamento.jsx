import { useState, useEffect } from 'react';
import EquipamentoContext from "./EquipamentoContext";
import Tabela from './Tabela';
import FormCadastro from './FormCadastro';

function Equipamento() {
    const [equipamento, setEquipamento] = useState({
        id: "",
        nome: "",
        fabricante: "",
        modelo: "",
        nserie: ""
    });
    const [editar, setEditar] = useState(false);
    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const [listaEquipamentos, setListaEquipamentos] = useState(
        localStorage.getItem('ETAPA1/listaequipamentos') ? JSON.parse(localStorage.getItem('ETAPA1/listaequipamentos')) : []
    );

    useEffect(() => {
        localStorage.setItem('ETAPA1/listaequipamentos', JSON.stringify(listaEquipamentos));
    }, [listaEquipamentos]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEquipamento({ ...equipamento, [name]: value });
    }

    const acaoCadastrar = e => {
        e.preventDefault();
        if (editar) {

            const index = listaEquipamentos.findIndex(p => p.id === equipamento.id);
            const listaEquipamentosTemp = listaEquipamentos.splice(0, index).concat(listaEquipamentos.splice(index + 1));
            const newListaEquipamentos = [...listaEquipamentosTemp, equipamento].sort((a, b) => a.id - b.id);

            setListaEquipamentos(newListaEquipamentos);

            setAlerta({ status: "success", message: "Edição efetuada com sucesso!" });

        } else {

            if (equipamento.id === 0) {
                var idAtual = localStorage.getItem('ETAPA1/equipamento_id');
                if (idAtual === null) idAtual = 0;

                var novoId = Number(idAtual) + 1;

                equipamento.id = novoId;

                localStorage.setItem('ETAPA1/equipamento_id', novoId);

                setListaEquipamentos([...listaEquipamentos, equipamento]);

                setAlerta({ status: "success", message: "Cadastro efetuado com sucesso!" });
            }
        }
    };

    const acaoRemover = equipamento => {
        if (window.confirm("Deseja remover este equipamento?")) {
            const listaEquipamentosTemp = listaEquipamentos.filter(p => p.id !== equipamento.id);
            setListaEquipamentos(listaEquipamentosTemp);
            setAlerta({ status: "success", message: "Remoção efetuada com sucesso!" });
        }
    }

    return (
        <EquipamentoContext.Provider value={
            {
                alerta, setAlerta,
                equipamento, setEquipamento,
                listaEquipamentos, setListaEquipamentos,
                editar, setEditar,
                acaoRemover, acaoCadastrar, handleChange
            }}>
            <Tabela />
            <FormCadastro />
        </EquipamentoContext.Provider>
    );
}

export default Equipamento;