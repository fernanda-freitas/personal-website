import React from "react"

// ------- import project images -------
import Transparencia01 from "../assets/images/transparencia/01.jpg"
import Transparencia02 from "../assets/images/transparencia/02.jpg"
import Transparencia03 from "../assets/images/transparencia/03.jpg"
import Transparencia04 from "../assets/images/transparencia/04.jpg"
import Transparencia05 from "../assets/images/transparencia/05.jpg"
import Transparencia06 from "../assets/images/transparencia/06.jpg"
import Transparencia07 from "../assets/images/transparencia/07.jpg"
import Transparencia08 from "../assets/images/transparencia/08.jpg"
import Transparencia09 from "../assets/images/transparencia/09.jpg"
import Transparencia10 from "../assets/images/transparencia/10.jpg"

export default function transparenciaPage() {
    return (
    <>
        <div className="w-10/12 mx-auto mb-28 mt-32">
            <h2 className="text-5xl font-rubik font-bold text-gray-700">SigaMerenda</h2>
            <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">Experience Design Specialization at <a className="font-bold" href="https://somostera.com/">@Tera</a></h2>
            <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">Client: Transparência Brasil</h2>
            <div className="mt-6">
              <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Research</div>
              <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Ux/Ui design</div>
            </div>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia01} alt="Alterar alt" />
        {/* Modelo */}
        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h3 className="text-xl md:text-2xl font-rubik font-light leading-normal text-gray-700">O SigaMerenda foi uma proposta elaborada durante a especialização em UX design para a Transparência Brasil, afim de monitorar o repasse financeiro da merenda escolar, reduzir desvios por corrupção e melhorar a gestão desses recursos.</h3>
            <h3 className="text-xl md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12">A ideia é que qualquer pessoa possa inspecionar escolas onde haja repasse de merenda e registrar, por meio de dados georreferenciados, um alerta para aquele caso. Esses dados são então encaminhados para as subprefeituras e para a Prefeitura afim de cobrar respostas.</h3>
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 my-12">Desk Research</h1>
            <h3 className="text-xl md:text-2xl font-rubik font-light leading-normal text-gray-700">Ao iniciarmos esse projeto com a Transparência Brasil para propor uma solução de fiscalização do
                repasse de verba pública para a merenda escolar, nos confrontamos com o fato de o Brasil ocupar a 105º colocação (num total de 180 países) no Índice De Percepção da Corrupção (IPC), ficando atrás de países como Burkina Faso, Timor Leste, Índia e África do Sul.
            </h3>
        </div>
        <div className="md:max-w-3xl mx-6 md:mx-auto my-28 gap-8">
            <div className="flex flex-col">
                <h3 className="w-100 text-xl md:text-2xl font-rubik font-light text-center leading-normal text-gray-700">“A corrupção corrói a democracia e produz um ciclo vicioso,
                em que compromete as instituições democráticas e, por sua vez,
                estas perdem capacidade de controlar a corrupção”. </h3>
                <span className="text-sm italic mx-auto mt-4 font-rubik font-light text-center leading-normal text-gray-700">Patricia Moreira, Diretora executiva da Transparência Internacional</span>
            </div>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia02} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto my-28 gap-8">
            <h2 className="text-xl md:text-2xl font-rubik font-light leading-normal text-gray-700">Ao mesmo tempo, outro dado levantado pela Transparência Internacional levanta um aspecto mais otimista: o Brasil integra o ranking de países que mais acreditam que pessoas comuns podem fazer a diferença no combate à corrupção:</h2>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia03} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto my-28 gap-8">
            <h2 className="text-xl md:text-2xl font-rubik font-light leading-normal text-gray-700">A pesquisa inicial sinalizou a possibilidade de o Brasil vir a ser um laboratório social: um lugar propício para desenvolver e testar novos projetos no campo da administração pública.</h2>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia04} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia05} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto my-28 gap-8">
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 mt-16">User Flow</h1>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia06} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto my-28 gap-8">
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 mt-16">Solução e interface digital</h1>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto mt-16" src={Transparencia07} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto mt-16" src={Transparencia08} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto mt-16" src={Transparencia09} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Transparencia10} alt="Alterar alt" />
    </ >
    )
};
