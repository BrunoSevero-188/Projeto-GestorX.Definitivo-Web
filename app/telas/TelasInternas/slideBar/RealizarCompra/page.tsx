"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, CheckCircle2 } from "lucide-react";

import styleSlideBar from "@/ConjuntosCss/TelasCss/SlideBar.module.css";

export default function RealizarCompra() {
  const router = useRouter();
  const [confirmado, setConfirmado] = useState(false);

  function confirmarCompra() {
    setConfirmado(true);
  }

  return (
    <main className={styleSlideBar.paginaPrincipalCentralizada}>
      <div className={styleSlideBar.paginaCartaoFormulario}>
        <div className={`${styleSlideBar.confirmacaoIcone} ${styleSlideBar.confirmacaoIconeNeutro}`}>
          {confirmado ? <CheckCircle2 size={26} /> : <ShoppingBag size={26} />}
        </div>

        <h1 className={styleSlideBar.paginaTituloEscuro}>Realizar Compra</h1>

        <p className={styleSlideBar.confirmacaoTexto}>
          {confirmado
            ? "Compra registrada com sucesso! O estoque será atualizado assim que o pedido chegar."
            : "Confirme para registrar uma nova compra de produtos para o estabelecimento."}
        </p>

        <div className={styleSlideBar.confirmacaoBotoes}>
          <button
            type="button"
            className={styleSlideBar.botaoCancelar}
            onClick={() => router.push("/telas/TelasInternas/TelaPrincipal")}
          >
            {confirmado ? "Voltar" : "Cancelar"}
          </button>

          {!confirmado && (
            <button type="button" className={styleSlideBar.botaoConfirmar} onClick={confirmarCompra}>
              Confirmar Compra
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
