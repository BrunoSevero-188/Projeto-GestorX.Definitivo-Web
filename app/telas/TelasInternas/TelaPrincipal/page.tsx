"use client";

import { useState } from "react";
import { ArrowLeft, User, Box, ShoppingCart, Phone, Menu, X } from "lucide-react";
import Link from "next/link";

import SlideBarPerfil from "@/app/telas/TelasInternas/slideBar/slideBarPrincipais/Perfi.page";
import SlideBarEstoque from "@/app/telas/TelasInternas/slideBar/slideBarPrincipais/Estoque.page";
import SlideBarEstante from "@/app/telas/TelasInternas/slideBar/slideBarPrincipais/Estante.page";
import SlideBarContatos from "@/app/telas/TelasInternas/slideBar/slideBarPrincipais/Contatos.page";

import { dadosUsuario } from "@/components/dadosUsuario";
import ItemIconButtonTelaPrincipal from "@/components/iconButton/ItemIconButtonTelaPrincipal";
import AbaPesquisar from "@/components/abaPesquisar";

import styleEstrutura from "@/ConjuntosCss/TelasCss/EstruturaTelasInternas.module.css";

export default function TelaPrincipal() {
  const [activeSidebar, setActiveSidebar] = useState<null | string>(null);
  const [query, setQuery] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  // TODO: trocar pelo nome do usuário logado de verdade (sessão/API de login),
  // hoje usa o mesmo dado mock que a tela de Perfil já usa (dadosUsuario[0]).
  const nomeConta = dadosUsuario[0].nomeCompleto;

  const openSidebar = (name: string) => setActiveSidebar(name);
  const closeSidebar = () => setActiveSidebar(null);

  const toggleMenu = () => setMenuAberto((aberto) => !aberto);
  const closeMenu = () => setMenuAberto(false);

  // Fecha o menu mobile automaticamente ao escolher uma opção
  const abrirEFechar = (name: string) => {
    openSidebar(name);
    closeMenu();
  };

  return (
    <main className={styleEstrutura.containerPrincipal}>
      <section className={styleEstrutura.containerTelaPrincipal}>

        <header className={styleEstrutura.cabecalhoTelaPrincipal}>

          <Link href="/" className={styleEstrutura.containerLinkTelaPrincipal}>
            <ArrowLeft className={styleEstrutura.containerFlechaRetorno} />
            <span className={styleEstrutura.textoSairConta}>
              Sair da conta ({nomeConta})
            </span>
          </Link>

          <AbaPesquisar query={query} setQuery={setQuery} />

          {/* Botão de abrir/fechar o menu — visível só em tablet/celular */}
          <button
            type="button"
            className={styleEstrutura.botaoMenuMobile}
            onClick={toggleMenu}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
          >
            {menuAberto ? (
              <X className={styleEstrutura.containerFlechaRetorno} />
            ) : (
              <Menu className={styleEstrutura.containerFlechaRetorno} />
            )}
          </button>
        </header>

        {/* No desktop este bloco é a sidebar fixa (sempre visível).
            No mobile/tablet é um overlay que só aparece quando menuAberto=true.
            Clicar no fundo escurecido (fora do painel) fecha o menu. */}
        <div
          className={`${styleEstrutura.container} ${menuAberto ? styleEstrutura.containerAberto : ""}`}
          onClick={closeMenu}
        >
          <nav
            className={styleEstrutura.containerNavIconButton}
            onClick={(e) => e.stopPropagation()}
          >
            <ItemIconButtonTelaPrincipal icon={User} label="Perfil" onClick={() => abrirEFechar("perfil")}>
              <SlideBarPerfil isOpen={activeSidebar === "perfil"} onClose={closeSidebar} />
            </ItemIconButtonTelaPrincipal>

            <ItemIconButtonTelaPrincipal icon={Box} label="Estoque" onClick={() => abrirEFechar("estoque")}>
              <SlideBarEstoque isOpen={activeSidebar === "estoque"} onClose={closeSidebar} />
            </ItemIconButtonTelaPrincipal>

            <ItemIconButtonTelaPrincipal icon={ShoppingCart} label="Estante" onClick={() => abrirEFechar("estante")}>
              <SlideBarEstante isOpen={activeSidebar === "estante"} onClose={closeSidebar} />
            </ItemIconButtonTelaPrincipal>

            <ItemIconButtonTelaPrincipal icon={Phone} label="Contatos" onClick={() => abrirEFechar("contatos")}>
              <SlideBarContatos isOpen={activeSidebar === "contatos"} onClose={closeSidebar} />
            </ItemIconButtonTelaPrincipal>
          </nav>
        </div>
      </section>

    </main>
  );
}
