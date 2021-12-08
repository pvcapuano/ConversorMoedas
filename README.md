## Resumo: 

Conversor de moedas. Aplicação web desenvolvida em ReactJs. Foi utilizada a API do <a href="https://fixer.io/">Fixer</a> para obter as informações das moedas. 

## Rodando o projeto:

* git clone https://github.com/pvcapuano/ConversorMoedas.git
* npm i (instala todas as dependências)
* npm start (inicia o projeto)
* npm test (inicia os testes)

## Projeto

![Captura de tela 2021-12-07 162414](https://user-images.githubusercontent.com/10540844/145211123-c60ede25-e4a9-4c7c-af72-5924c59771cc.jpg)
<sub>Visão geral do projeto</sub>

![Captura de tela 2021-12-07 162344](https://user-images.githubusercontent.com/10540844/145211159-a711ac6c-edfb-4e1e-9717-113a729b8b68.jpg)
<sub>Testes</sub>

## Projeto em produção:

<p>
 <a href="https://conversor-moedas-omega.vercel.app/" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:

* ReactJs
* React Hooks
* Axios
* Bootstrap 5
* Jest

## Objetivo:

Estudar mais sobre o consumo de APIs através do Axios, estudar mais sobre testes. 

## Atividades realizadas:

* O projeto foi separado em 2 componentes: Formulario e ListarMoedas. 
* A API foi consumida através do Axios. Foi usado um map() para listar todas as moedas e depois o método sort para coloca-las em ordem.   
* Foi adicionado um Modal e um Spinner que são alterados através do useState. 
* Depois de feita a cotação e o modal é aberto, temos duas opções: fechar ou fazer nova cotação. Em ambas ele reinicia os valores para uma nova cotação.
