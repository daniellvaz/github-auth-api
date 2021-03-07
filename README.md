<h1 align="center">Welcome to github-auth-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/daniellmvaz" target="_blank">
    <img alt="Twitter: daniellmvaz" src="https://img.shields.io/twitter/follow/daniellmvaz.svg?style=social" />
  </a>
</p>

> This project is a exemple of connection with github api to provider a authentication using github user data.

## Como configurar?

* Na tela de configurações, acessar o item configurações de desenvolvedor (developer settings).
* Na tela seginte irá aparecer três opções (Github apps, OAuth apps e personal access token).
* Selecionar a opção OAuth apps.
* Na próxima tela deverá aparecer a opção "New OAuth app".
* Essa opção é para registrar a aplicação que irá utilizar a api.
* Na proxima tela você deve colocar as informações da sua aplicação,
  como por exemplo: Nome, url e logo.
* Em desenvolvimento a url utilizada foi: "http://localhost:3000", caso queira fazer o deploy
  deverá informar a url gerada ao faze-lo ou seu dominio.
* Além da url de acesso a api, você precisa configurar uma url de redirecionamento, já que ao acessar a api
  o client será redirecionado para a tela de login do github.
* A baixo um exemplo de registro de aplicação. Ao acessar os end points do github vc deverá enviar um client id e um 
  client secret, que são gerados no momento do registro, e que nesse projeto coloquei em um arquivo .env para preservar
  os tokens.
* Após fazer essas configurações é só seguir a documentação do github e sair utilizando em suas aplicações... Segue o link 
  a baixo também.
  
## Client_id and Client_secret keys
  
<img alt="client_id" src="https://github.com/daniellvaz/github-auth-api/blob/master/clientid.png" />

## Documentation link

<a href="https://docs.github.com/en/developers/apps/authorizing-oauth-apps" target="_blank">OAuth documentation</a>


## Author

👤 **Daniel Murilo Vaz**

* Website: www.daniellvaz.com
* Twitter: [@daniellmvaz](https://twitter.com/daniellmvaz)
* Github: [@daniellvaz](https://github.com/daniellvaz)
* LinkedIn: [@daniellmvaz](https://linkedin.com/in/daniellmvaz)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
