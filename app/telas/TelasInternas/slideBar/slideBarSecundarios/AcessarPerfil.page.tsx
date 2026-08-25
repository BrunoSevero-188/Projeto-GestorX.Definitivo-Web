"use client";

import Image from "next/image";
import { InputandLabel } from "@/components/inputandLabel";
import { Button } from "@/components/button";
import PerfilIcon from "@/public/Perfil-Icon.png";
import Logo from "@/public/Logo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { dadosUsuario } from "@/components/dadosUsuario";

import styleSlideBar from "@/ConjuntosCss/TelasCss/SlideBar.module.css";
import styleInput from "@/ConjuntosCss/ComponentesCss/Input.module.css";

export default function AcessarPerfil() {
  const router = useRouter();
  const [usuario, setUsuario] = useState(dadosUsuario[0]);

  useEffect(() => {
    const aleatorio = Math.floor(Math.random() * dadosUsuario.length);
    setUsuario(dadosUsuario[aleatorio]);
  }, []);

  return (
    <main className={styleSlideBar.paginaPrincipalCentralizada}>
      <div className={`${styleSlideBar.paginaCartaoFormulario} ${styleSlideBar.cartaoComHoverAzul}`}>
        <div className={styleSlideBar.paginaCabecalhoFormulario}>
          <Link href="/" className={styleSlideBar.paginaLinkLogo}>
            <Image
              className={styleSlideBar.paginaLogo}
              src={Logo}
              alt="Logo"
              width={120}
              height={220}
            />
          </Link>

          <h1 className={styleSlideBar.paginaTituloEscuro}>Acessar Perfil</h1>

          <Image
            className={styleSlideBar.perfilImagem}
            src={PerfilIcon}
            alt="Icone de Perfil"
            width={115}
            height={115}
          />
        </div>

        {/* Mesma configuração de input do Criar Usuario: className/containerClassName
            explícitos, pra usar as mesmas classes de foco e label flutuante. */}
        <div className={styleInput.containerOrdenaçãoInputs}>
          <div className={styleInput.containerInputs}>
            <InputandLabel
              label="Nome Completo"
              value={usuario.nomeCompleto}
              readOnly
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="Nome do Perfil"
              value={usuario.nomePerfil}
              readOnly
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="CPF"
              value={usuario.cpf}
              readOnly
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="E-mail"
              value={usuario.email}
              readOnly
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="Cargo"
              value={usuario.cargo}
              readOnly
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
            <InputandLabel
              label="Estabelecimento"
              value={usuario.estabelecimento}
              readOnly
              className={styleInput.containerElementoInput}
              containerClassName={styleInput.containerElementoContainer}
            />
          </div>
        </div>

        <div className={styleSlideBar.perfilAcoes}>
          <Button onClick={() => router.push("/telas/TelasCadastro/CriarUsuario")}>
            Adicionar Nova Conta
          </Button>

          <Button onClick={() => router.push("/telas/TelasInternas/slideBar/Perfil/EditarPerfil")}>
            Editar Conta
          </Button>
        </div>
      </div>
    </main>
  );
}
