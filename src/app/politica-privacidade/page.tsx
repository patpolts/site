import { Suspense } from 'react'
import Loading from '../loading'


export default function PrivacyPolice() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <h3>📄 Política de Privacidade</h3>
        <article>
            <h4>1. Introdução</h4>
            <p>Esta Política de Privacidade descreve como nosso site coleta, usa, armazena e compartilha suas informações pessoais quando você acessa e utiliza nosso site, sub-domínios <strong>poltts.com.br</strong> e nossos serviços.</p>
            <p>Ao utilizar nossos serviços você concorda com os termos descritos nesta Política de Privacidade e Termos de uso.</p>
            <h4>2. Informações que Coletamos</h4>
            <p>Coletamos informações que você nos fornece diretamente e informações que coletamos automaticamente quando você usa nosso site.</p>
            <h5>2.1 Informações fornecidas via Google Login:</h5>
            <ul>
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Foto de perfil</li>
                <li>ID do Google</li>
            </ul>
            <p>Não coletamos sua senha ou outras informações confidenciais associadas à sua conta Google.</p>
            <h5>2.2 Informações gerais que podem ser coletadas automaticamente:</h5>
            <ul>
                <li>Endereço IP</li>
                <li>Tipo e versão do navegador</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo gasto</li>
                <li>Cookies e tecnologias similares (ver seção específica)</li>
            </ul>
            <h4>3.  Finalidade da Coleta de Dados</h4>
            <p>Utilizamos suas informações pessoais para:</p>
            <ul>
                <li>Fornecer e manter nossos serviços.</li>
                <li>Personalizar sua experiência no site.</li>
                <li>Responder a dúvidas e solicitações.</li>
                <li>Enviar comunicações promocionais (caso você se cadastrado em algum serviço/produto e tenha consentido).</li>
                <li>Melhorar nosso site, produtos e serviços.</li>
                <li>Cumprir com obrigações legais e regulatórias.</li>
            </ul>
            <h4>4. Compartilhamento de Informações</h4>
            <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
            <ul>
                <li>Quando exigido por lei ou por autoridades competentes.</li>
                <li>Para proteger nossos direitos legais.</li>
                <li>Em caso de fusão, aquisição ou venda de ativos, mediante prévia comunicação ao usuário.</li>
            </ul>
            <h4>5. Segurança das Informações</h4>
            <p>Adotamos medidas técnicas e administrativas adequadas para proteger suas informações contra acesso não autorizado, divulgação, alteração ou destruição.</p>
            <p>Entretanto, lembramos que nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta das informações transmitidas pela internet.</p>
            <h4>6. Retenção de Dados</h4>
            <p>Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo obrigações legais e regulatórias.</p>
            <p>Se desejar excluir sua conta e seus dados, entre em contato conosco através dos canais indicados no final desta página.</p>
            <h4>7. Direitos do Usuário</h4>
            <p>Você possui os seguintes direitos:</p>
            <ul>
                <li>Acessar suas informações pessoais.</li>
                <li>Corrigir ou atualizar seus dados.</li>
                <li>Solicitar a exclusão de suas informações.</li>
                <li>Opor-se ao tratamento de seus dados.</li>
                <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p>Para exercer esses direitos, entre em contato através do email: me@poltts.com.br e solicite informações sobre seus dados armazenado ou a exclusão dos mesmo se for o caso.</p>
            <h4>8. Cookies e Tecnologias Semelhantes</h4>
            <p>Utilizamos cookies e tecnologias semelhantes para melhorar a funcionalidade do site, analisar o tráfego e personalizar a experiência do usuário. Para mais informações, consulte nossa <strong>Política de Cookies</strong> abaixo.</p>
            <h4>9. Transferência Internacional de Dados</h4>
            <p>Seus dados podem ser transferidos e processados fora de seu país de residência, garantindo sempre um nível adequado de proteção conforme as leis aplicáveis.</p>
            <h4>10. Alterações nesta Política</h4>
            <p>Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Recomendamos que você revise esta página periodicamente.</p>
        </article>
        <h3>📄 Termos de uso</h3>
        <article>
            <h4>1. Aceitação dos Termos</h4>
            <p>Ao acessar e utilizar o site e seus sub-domínios de poltts.com.br, você concorda com estes Termos de Uso. Caso não concorde, pedimos que não utilize o site.</p>
            <h4>2. Uso Permitido</h4>
            <p>Você concorda em utilizar o site apenas para fins lícitos e em conformidade com as leis aplicáveis, abstendo-se de:</p>
            <ul>
                <li>Violação de direitos de terceiros.</li>
                <li>Transmissão de conteúdo ilegal, ofensivo ou prejudicial.</li>
                <li>Prática de engenharia reversa ou tentativa de acesso não autorizado.</li>
            </ul>
            <h4>3. Propriedade Intelectual</h4>
            <p>Todo o conteúdo do site e seus sub-domínios , incluindo textos, imagens, logotipos, marcas, códigos e demais elementos, é protegido por direitos autorais e de propriedade intelectual, pertencentes ou licenciados à <strong>Pati Poltts</strong>.</p>
            <p>É proibida a reprodução, distribuição ou modificação sem autorização prévia e por escrito.</p>
            <h4>4. Isenção de Responsabilidade</h4>
            <p>Não garantimos que o site e seus sub-domínios estará sempre disponível ou livre de erros. O uso do site é por sua conta e risco. Não nos responsabilizamos por eventuais danos, diretos ou indiretos, decorrentes do uso do site.
</p>
            <h4>5. Links para Terceiros</h4>
            <p>Nosso site e seus sub-domínios podem conter links para sites de terceiros, pelos quais não somos responsáveis. Recomendamos que você leia os termos e políticas de privacidade desses sites.</p>
            <h4>6. Modificações nos Termos</h4>
            <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. A versão atualizada será publicada nesta página com a respectiva data de vigência.</p>
            <h4>7. Lei Aplicável e Foro</h4>
            <p>Estes Termos são regidos pelas leis do Brasil, e quaisquer disputas serão dirimidas no foro da comarca de Santos, São Paulo, com renúncia expressa a qualquer outro, por mais privilegiado que seja.

</p>
        </article>
        <h3>📄 Política de Cookies</h3>
        <article>
            <h4>1. O que são Cookies?</h4>
            <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem, melhorar sua eficiência e fornecer informações aos proprietários.</p>
            <h4>2. Como Utilizamos Cookies</h4>
            <p>Utilizamos cookies para:</p>
            <ul>
                <li>Garantir o funcionamento adequado do site.</li>
                <li>Lembrar suas preferências.</li>
                <li>Analisar o tráfego e comportamento de navegação.</li>
                <li>Fornecer funcionalidades de redes sociais.</li>
                <li>Personalizar conteúdo e anúncios (caso aplicável).</li>
            </ul>
            <h4>3. Gerenciamento de Cookies</h4>
            <p>Você pode gerenciar ou desativar cookies diretamente nas configurações do seu navegador. No entanto, a desativação de certos cookies pode afetar a funcionalidade do site.</p>
            <p>Links úteis:</p>
            <ul>
                <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                        Configurações de cookies no Chrome
                    </a>
                </li>
                <li>
                    <a href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-cookies-e-dados-de-sites" target="_blank" rel="noopener noreferrer">
                        Configurações de cookies no Firefox
                    </a>
                </li>
                <li>
                    <a href="https://support.microsoft.com/pt-br/windows/gerencie-cookies-no-microsoft-edge-exibir-permitir-bloquear-excluir-e-usar-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">
                        Configurações de cookies no Edge
                    </a>
                </li>
            </ul>
            <h4>4. Consentimento</h4>
            <p>Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta Política.</p>
            <h4>5. Alterações na Política de Cookies</h4>
            <p>Podemos atualizar esta Política periodicamente. As alterações serão publicadas nesta página.</p>
        </article>
        <h3>🗨️ Contato</h3>
        <article>
            <p>Em caso de dúvidas ou solicitações relacionadas a esta página ou outras informações, entre em contato:</p>
            <small className='w-max'>
                Pati Poltts - Fullstack Developer <br/>
                <a href="mailto:me@poltts.com.br">me@poltts.com.br</a>
            </small> 
        </article>
      </Suspense>
    </main>
  )
}
