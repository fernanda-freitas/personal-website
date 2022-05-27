import React from "react"

// ------- import project images -------
import Medica01 from "../assets/images/medica/01.gif"
import Medica02 from "../assets/images/medica/02.jpg"
import Medica03 from "../assets/images/medica/03.jpg"
import Medica04 from "../assets/images/medica/04.jpg"
import Medica05 from "../assets/images/medica/05.jpg"
import Medica06 from "../assets/images/medica/06.jpg"
import Medica07 from "../assets/images/medica/07.jpg"
import Medica08 from "../assets/images/medica/08.jpg"
import Medica09 from "../assets/images/medica/09.jpg"
import Medica10 from "../assets/images/medica/10.jpg"
import Medica11 from "../assets/images/medica/11.jpg"
import Medica12 from "../assets/images/medica/12.jpg"
import Medica13 from "../assets/images/medica/13.jpg"
import Medica14 from "../assets/images/medica/14.jpg"
import Medica15 from "../assets/images/medica/15.jpg"


export default function medicaPage() {
    return (
    <>
        <div className="w-10/12 mx-auto mb-28 mt-32">
            <h2 className="text-5xl font-rubik font-bold text-gray-700">Medica</h2>
            <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">A collaborative app to find doctors, set appointments and give/ receive indications</h2>
            <div className="mt-6">
              <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2 whitespace-nowrap">Personal</div>
              <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2 whitespace-nowrap">Research</div>
              <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2 whitespace-nowrap">Ux/Ui design</div>
            </div>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica01} alt="Alterar alt" />

        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700">This is part of the process of a mobile app I developed to practice Ux/Ui principles and tools in order to investigate people's behavior when faced with the challenge of finding a new health specialist. To accomplish this goal I carried a design thinking approach, not being constrained however to any specific set of tools or settle dogmas, being rather adaptive towards the project's current requirements.</h3>
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12">The purpose of the app is to be a collaborative space for users to find doctors, set appointments, keep track with their medical reports, and most importantly, to give and receive indications from the user's community. </h3>
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12">Thus to validate and develop this idea I started with the Double Diamond framework to visualize the different stages of the design process I was about to go through. I dived into the case study to understand and empathize with the problem, carried a quantitative research, developed an affinity map to group ideas into categories which later originated the pain points and opportunities for the solution. After that I used the Impact and Effort matrix to prioritize features, built the design system, wireframe and the high fidelity prototype.</h3>
        </div>

        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica02} alt="Alterar alt" />

        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 mt-16">Case study</h1>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica03} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700"><span className="font-semibold"> Macrostructure factors</span> - Over the past 10 years the number of people associated with a private health insurance plan <a className="text-blue-500" target="_blank" href="https://www.ans.gov.br/perfil-do-setor/dados-gerais">heightened 12,4%</a> according to the National Agency of Supplemental Health (ANS). At the same time an opposite movement made <a className="text-blue-500" target="_blank" href="https://www1.folha.uol.com.br/equilibrioesaude/2015/12/1723490-nos-consultorios-14-dos-medicos-do-pais-nao-aceita-planos-de-saude.shtml">doctors quit being associated</a> with these private health companies, as a response to the low payments handed by the insurers, and to the way private health system operates (by it's own rules and with barely no regulations). Consequently there was a decrease in the amount of qualified professionals in that sector.</h3>
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12"><span className="font-semibold"> Experience factors</span> - Doctors still have the most reliable and acknowledged profession in Brazil <a className="text-blue-500" target="_blank" href="http://portalfmb.org.br/2016/11/23/levantamento-mostra-o-medico-como-profissional-com-maior-credibilidade-e-confianca-junto-aos-brasileiros/"> (here)</a>, therefore indications from close friends and family are highly regarded as a good practice among patients.</h3>
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12">When combining these factors it becomes evident that the private health service is going through a precariousness process, and as a result of this cycle doctors are dealing with more patients so they're able to increase the income. Very often patients report that their appointments are excessively short and doctors are negligent towards them.</h3>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica04} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 mt-16">Research</h1>
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12">The objective here was to investigate demographic aspects, how users usually go through the process of setting an appointment with a doctor, their feelings and emotions towards it and their level of difficulty. The result of the research would then reinforce (or refute) the hypothesis that this service could be optimized to better attend private health system beneficiaries.</h3>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica05} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700">The research showed that 90% of people have a considerable level of difficulty throughout their journey to find a new doctor. Furthermore health insurance's database are commonly obsolete and lack essential informations about the associated professionals, for that reason users often find it difficult to find a reliable doctor using this traditional method, but once they start looking on their own, there is no specific method to follow and no guarantee they will be successful.
            Another highlight was the fact that 89% of the respondents showed being more comfortable meeting with a new doctor after a close person suggested someone they trust.</h3>
            <h1 className="text-lg md:text-4xl font-rubik font-semibold text-gray-700 mt-16">Affinity map</h1>
            <h3 className="text-lg md:text-2xl font-rubik font-light leading-normal text-gray-700 mt-12">After research, the most meaningful inputs were put aside each other so it could generate an affinity map to track the pain points and opportunities. At this point it became visible three different group patterns: the emotional aspects (related to security and trust), the efficiency of the service provided by the user's insurer, and the search procedure to find a doctor.
            To track these three behavioral patterns were very important so the most visible deficient aspects could become the main optimization pillars for the new solution.</h3>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica06} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto mt-12" src={Medica07} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 mt-16">Wireframe</h1>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica08} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto mt-12" src={Medica09} alt="Alterar alt" />
        <div className="md:max-w-6xl mx-6 md:mx-auto mb-40 mt-28 gap-8">
            <h1 className="text-4xl font-rubik font-semibold text-gray-700 mt-16">Design solution</h1>
        </div>
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica10} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica11} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica12} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica13} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica14} alt="Alterar alt" />
        <img className="w-full md:w-10/12 h-auto object-contain mx-auto" src={Medica15} alt="Alterar alt" />
    </ >
    )
};
