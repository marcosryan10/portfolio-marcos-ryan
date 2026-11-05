const cases = {
 burger: { title: 'Chico Burguer', intro: 'Um projeto web para aproximar o cardápio da hamburgueria do cliente, preservando a identidade do negócio.', sections: [
 ['01 / Entendi o negócio antes da interface','Comecei pela identidade da Chico Burguer: logo, cardápios, produtos e referências visuais. Organizei essas informações para que o visitante pudesse reconhecer a marca, explorar as opções e chegar ao pedido com clareza.'],
 ['02 / Construí a apresentação e o cardápio','Trabalhei com React e TypeScript na aplicação web e com HTML, CSS e JavaScript na experiência do navegador. Estruturei a apresentação dos produtos e o fluxo de escolha, mantendo atenção à leitura, aos preços e à adaptação da interface para telas menores.'],
 ['03 / Conectei interface, pedidos e dados','O projeto evoluiu além da landing page. Desenvolvi o fluxo de pedidos e a área da equipe, com tratamento para entrega e atendimento no salão. Na demonstração hospedada na Cloudflare, utilizei Workers no servidor e D1, com SQL para persistir os dados. Separei os pedidos da demonstração dos dados do site original.'],
 ['04 / Conferi o fluxo e preparei a entrega','Conferi o cardápio, os totais de entrega e salão e o acesso da equipe. Também organizei uma entrega com código e guias para facilitar a continuidade do projeto. Meu foco foi ligar a identidade visual a uma experiência de pedido compreensível.']], status:'Demonstração publicada. O link apresenta um ambiente de demonstração com pedidos separados do site original; não representa uma comprovação de operação comercial ou resultados de vendas.' },
 barber: {title:'Barba & Hora',intro:'Um aplicativo de agendamento pensado para reduzir a dependência de conversas no WhatsApp e organizar a rotina da barbearia.',sections:[
 ['01 / Separei as duas jornadas','Comecei por dois perfis: o cliente, que precisa escolher serviço, dia e horário; e o dono, que precisa consultar a agenda e identificar quem marcou cada atendimento. Organizei o fluxo em escolha, revisão e confirmação, com preço e duração visíveis.'],
 ['02 / Desenvolvi o aplicativo mobile','Usei React Native com Expo e TypeScript para construir o aplicativo nativo. Preparei cadastro e login, histórico de reservas, cancelamento e as telas administrativas de agenda, serviços, expediente e bloqueios. Para a sessão, usei armazenamento seguro do sistema.'],
 ['03 / Modelei as regras no banco','Estruturei o backend em Supabase e PostgreSQL, usando SQL para as tabelas, funções e políticas de acesso por usuário. A reserva é validada no servidor e a restrição de sobreposição impede horários conflitantes. O cadastro comum não permite que o usuário se promova a administrador.'],
 ['04 / Preparei avisos e uma versão web','Na confirmação, o backend foi preparado para registrar a reserva e um aviso na mesma transação. Implementei a estrutura para Realtime e envio de push com uma função TypeScript. Também construí uma versão web em HTML, CSS e JavaScript, com demonstração local identificada e integração preparada para o mesmo Supabase.'],
 ['05 / Testei as regras e documentei a configuração','Executei testes do banco com PostgreSQL embarcado via PGlite e gerei um APK Android de teste. Preparei documentação para configuração, alterações e estudo do código. Os testes do banco verificam regras e políticas; a validação de push e de aparelhos físicos é uma etapa separada.']],status:'Protótipo e código preparados; APK Android de teste gerado. O Supabase remoto e as credenciais de push ainda precisam ser configurados. A demo web usa dados locais e não cria reservas reais. Não houve publicação nas lojas nem teste em aparelhos físicos.'},
 atletica:{title:'Atlética Maccoloco',intro:'Uma landing page para dar presença digital à identidade da atlética do IFNMG, campus Almenara.',sections:[
 ['01 / Parti da identidade da atlética','Comecei pela proposta da Maccoloco e pelo mascote original. Organizei uma narrativa para apresentar a atlética à comunidade acadêmica, mantendo a identidade como fio condutor da página.'],
 ['02 / Estruturei uma página direta','Usei HTML para organizar o conteúdo, CSS para o visual e a responsividade e JavaScript para as interações. Distribuí a apresentação em seções navegáveis para facilitar a leitura e a descoberta do conteúdo.'],
 ['03 / Desenvolvi as interações','Implementei navegação entre seções, menu mobile e diálogos para participação e modalidades. Mantive as modalidades identificadas como propostas, respeitando o estágio da iniciativa. Os diálogos informam o visitante sem simular envio de cadastro.'],
 ['04 / Revisei e publiquei a primeira versão','Conferi a navegação, o menu em largura de celular e os diálogos. Preparei também um HTML independente e publiquei a primeira versão com acesso privado. Meu objetivo foi criar uma base digital clara para a apresentação e a evolução da atlética.']],status:'Primeira versão publicada com acesso privado. O link pode exigir acesso autorizado. As modalidades são propostas; não existe envio de cadastro nesta versão. A conferência em celular físico ainda está pendente.'}
};
const dialog = document.querySelector('#case-dialog');
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
 const item=cases[button.dataset.case];
 const content=document.querySelector('#case-content'); content.replaceChildren();
 const title=document.createElement('h2'); title.id='case-title'; title.textContent=item.title;content.append(title);
 const intro=document.createElement('p');intro.textContent=item.intro;content.append(intro);
 item.sections.forEach(([heading,text])=>{const h=document.createElement('h3');h.textContent=heading;const p=document.createElement('p');p.textContent=text;content.append(h,p)});
 const status=document.createElement('p');status.className='status';status.textContent=item.status;content.append(status);
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
const galleries = {
 burger: { title:'Chico Burguer', description:'Capturas reais do projeto e de seus fluxos de demonstração.',images:[
 ['assets/chico.png','Apresentação da hamburgueria','Identidade visual, destaque para o produto e entrada para o cardápio.'],
 ['assets/chico-cardapio.png','Cardápio e atendimento no salão','Tela do projeto com opções para organizar a escolha e o atendimento.'],
 ['assets/chico-painel.png','Painel da equipe','Visão de pedidos por mesa, status e valores, com dados de teste.'] ]},
 barber: {title:'Barba & Hora',description:'Capturas reais da demonstração web que apresenta os fluxos do projeto. Os exemplos usam dados locais; nenhuma reserva real foi enviada.',images:[
 ['assets/barba-servicos.png','01 / Escolher serviço, dia e horário','O cliente consulta duração e preço e escolhe quando deseja ser atendido.'],
 ['assets/barba-confirmacao.png','02 / Confirmar a simulação','Resumo visual do atendimento escolhido e confirmação de demonstração.'],
 ['assets/barba-agenda.png','03 / Acompanhar na agenda do dono','A reserva de exemplo aparece na agenda, com cliente, horário, serviço e valor.'] ]},
 atletica: {title:'Atlética Maccoloco',description:'Capturas reais da landing page e suas interações. As modalidades apresentadas são propostas do protótipo.',images:[
 ['assets/atletica-inicio.png','01 / Apresentação e identidade','A tela inicial reúne a mensagem da atlética e seu mascote original.'],
 ['assets/atletica-modalidades.png','02 / Explorar modalidades','Seção que apresenta possibilidades esportivas e convida à descoberta.'],
 ['assets/atletica-dialogo.png','03 / Entender a proposta','O diálogo apresenta os detalhes e o estágio da modalidade selecionada.'] ]}
};
const galleryDialog=document.querySelector('#gallery-dialog');
let activeGallery, imageIndex=0;
function renderGallery(){
 const [src,caption,detail]=activeGallery.images[imageIndex];
 const img=document.querySelector('#gallery-image');img.src=src;img.alt=caption+' — '+detail;
 document.querySelector('#gallery-caption').textContent=caption;
 document.querySelector('#gallery-detail').textContent=detail;
 document.querySelector('#gallery-counter').textContent=String(imageIndex+1).padStart(2,'0')+' / '+String(activeGallery.images.length).padStart(2,'0');
 document.querySelectorAll('#gallery-dots button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===imageIndex)));
 document.querySelector('.gallery-image-wrap').scrollTop=0;
}
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
 activeGallery=galleries[button.dataset.gallery];imageIndex=0;
 document.querySelector('#gallery-title').textContent=activeGallery.title;
 document.querySelector('#gallery-description').textContent=activeGallery.description;
 const dots=document.querySelector('#gallery-dots');dots.replaceChildren();
 activeGallery.images.forEach((item,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Ver imagem '+(i+1)+': '+item[1]);b.addEventListener('click',()=>{imageIndex=i;renderGallery()});dots.append(b)});
 renderGallery();galleryDialog.showModal();galleryDialog.scrollTop=0;document.body.classList.add('modal-open');
}));
function changeImage(delta){imageIndex=(imageIndex+delta+activeGallery.images.length)%activeGallery.images.length;renderGallery()}
document.querySelector('#gallery-prev').addEventListener('click',()=>changeImage(-1));
document.querySelector('#gallery-next').addEventListener('click',()=>changeImage(1));
document.querySelector('#close-gallery').addEventListener('click',()=>galleryDialog.close());
galleryDialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
galleryDialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();changeImage(event.key==='ArrowRight'?1:-1)}});
galleryDialog.addEventListener('click',event=>{if(event.target===galleryDialog){const r=galleryDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)galleryDialog.close()}});
