import http from 'k6/http';
import { sleep, check } from 'k6';

const projectName = 'k6_api_express';
const testName = `Test (${new Date().toLocaleString()})`;

export default function () {
  const response = http.get('http://localhost:3000/api/produtos');

  // Logar o corpo da resposta para entender o que está acontecendo
  console.log('Status da resposta:', response.status);
  console.log('Cabeçalhos da resposta:', response.headers);
  console.log('Corpo da resposta:', response.body);

  // Validar o código de resposta
  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  // Tentar analisar o corpo da resposta apenas se o status for 200
  if (response.status === 200) {
    try {
      // Validar a mensagem de sucesso
      check(response, {
        'mensagem de sucesso': (r) => JSON.parse(r.body).mensagem === 'Produtos enviados com sucesso',
      });

      // Validar a quantidade de produtos (assumindo que há 10 produtos)
      check(response, {
        'quantidade de produtos é 10': (r) => JSON.parse(r.body).produtos.length === 10,
      });
    } catch (e) {
      console.error('Erro ao analisar o corpo da resposta:', e.message);
    }
  }

  sleep(1);
}

// Configurações para extensão do Grafana Cloud
export const options = {
  ext: {
    loadimpact: {
      // Project: k6_api_express
      projectID: 3672726, // Substitua pelo ID do seu projeto no Grafana Cloud
      // Test runs with the same name groups test runs together.
      name: 'Teste De API Express com o K6 no Grafana Cloud',
    },
  },
};
