# Projeto K6 API Express com Grafana Cloud

Este projeto demonstra como criar uma API usando Express e realizar testes de desempenho com K6, integrando os resultados ao Grafana Cloud.

## Pré-requisitos

- Node.js instalado
- Grafana Cloud Token (obtido do Grafana Cloud)
- K6 instalado (https://k6.io/docs/getting-started/installation/)

## Configuração do Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/DevWide/K6_GrafanaCloud_APIExpress.git
   cd k6_integracao_grafanaCloud

## Instale as dependências do projeto:
````
npm install
````

## Defina as variáveis de ambiente:
````
export K6_CLOUD_TOKEN=seu_token
export K6_CLOUD_PROJECT=seu_projeto
````
**OBS:**Substitua "seu_token" e "seu_projeto" pelos valores reais do seu Grafana Cloud Token e Projeto.

## Inicie a API Express:
````
node api/app.js
````
## Em um terminal diferente, execute o test K6 local:
````
k6 run testes/test.js
````
**OBS:** **Certifique-se de que a API local está em execução antes de executar o teste.**

## Após o sucesso dos testes locals, suba os testes para o Grafana Cloud
````
k6 cloud testes/test.js
````





