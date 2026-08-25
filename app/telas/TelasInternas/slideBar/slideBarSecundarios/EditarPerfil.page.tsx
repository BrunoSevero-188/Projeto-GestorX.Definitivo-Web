"use client";

import { useState, useEffect } from "react";
import { InputandLabel } from "@/components/inputandLabel";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { dadosUsuario } from "@/components/dadosUsuario";
import styleSlideBar from "@/ConjuntosCss/TelasCss/SlideBar.module.css";
import styleInput from "@/ConjuntosCss/ComponentesCss/Input.module.css";

export default function EditarPerfil() {
  const router = useRouter();

  const [usuario, setUsuario] = useState(dadosUsuario[0]);

  useEffect(() => {
    const aleatorio = Math.floor(Math.random() * dadosUsuario.length);
    setUsuario(dadosUsuario[aleatorio]);
  }, []);

  function atualizar(campo: string, valor: string) {
    setUsuario({ ...usuario, [campo]: valor });
  }

  function salvar() {
    alert("Dados atualizados com sucesso!");
    router.push("/telas/TelasInternas/slideBar/Perfil/AcessarPerfil");
  }

  return (
    <main className={styleSlideBar.paginaPrincipalCentralizada}>
      <div className={styleSlideBar.paginaCartaoFormulario}>
        <h1 className={styleSlideBar.paginaTituloEscuro}>Editar Perfil</h1>

        {/* Mesma configuração de input do Criar Usuario/Acessar Perfil:
            className/containerClassName explícitos, pra usar as classes de
            foco e label flutuante corretas (sem isso o label não encolhe
            e fica em cima do valor). */}
        <div className={styleInput.containerOrdenaçãoInputs}>
          <div className={styleInput.containerInputs}>
            <InputandLabel
              label="Nome Completo"
              value={usuario.nomeCompleto}
              onChange={(e) => atualizar("nomeCompleto", e.target.value)}
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="Nome do Perfil"
              value={usuario.nomePerfil}
              onChange={(e) => atualizar("nomePerfil", e.target.value)}
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="CPF"
              value={usuario.cpf}
              onChange={(e) => atualizar("cpf", e.target.value)}
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="E-mail"
              value={usuario.email}
              onChange={(e) => atualizar("email", e.target.value)}
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="Cargo"
              value={usuario.cargo}
              onChange={(e) => atualizar("cargo", e.target.value)}
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="Estabelecimento"
              value={usuario.estabelecimento}
              onChange={(e) => atualizar("estabelecimento", e.target.value)}
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
          </div>
        </div>

        <Button onClick={salvar}>Salvar Alteracoes</Button>
      </div>
    </main>
  );
}
