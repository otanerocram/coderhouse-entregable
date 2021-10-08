# Proyecto con React JS para CoderHouse
![GitHub code size](https://img.shields.io/github/repo-size/otanerocram/coderhouse-entregable)
![GitHub repo stars](https://img.shields.io/github/stars/otanerocram/coderhouse-entregable)
![GitHub repo forks](https://img.shields.io/github/forks/otanerocram/coderhouse-entregable)

## Descripción: 
Este es un proyecto en desarrollo para el curso ReactJS en CoderHouse. Es un Store Front dedicado a obtener datos desde una API y mostrarlo al cliente quien podrá agregarlos a un carrito y hacer la compra

### Míralo en Acción:
[Code SandBox!](https://githubbox.com/otanerocram/coderhouse-entregable)

## Instalación:
Download Code, move to your project folder and run `npm install`, then run `npm start`

## Uso: 
Usa este código para tus propios proyectos

## Roadmap: 
> Entrega 06: 04 Oct 2021 => Promise, Map, Api
> 
> Entrega 07: 06 Oct 2021 => Routing y Navegación 
> 
> Lo que viene: - Eventos

## Changelog:
Entregables: 

02: 
Crea una carpeta dentro de src llamada components que contenga a NavBar.js  para crear una barra de menú simple, que tenga:
- Brand (título/nombre de la tienda)
- Un listado de categorías clickeables
- Incorpora alguna librería bootstrap/materialize u otro de tu preferencia (opcional).

03:
Crea un componente contenedor ItemListContainer.js con una prop greeting, muestra el mensaje dentro del contenedor con el styling integrado.

04: 
Crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems
- Se declara un array con un item para efectos de prueba

05: 
Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red.

06: 
Crea un ItemDetailContainer.js y un ItemDetail.js en el que se muestren los detalles del producto seleccionado y permita escoger la cantidad de productos a comprar.
- Se movió el Item.js como componente hijo del ItemDetail
- Cambios en las props heredadas desde ItemDetailContainer
- Implementación de modal bootstrap para mostrar el ItemDetail

07: Implementa el router-dom
- Encapsulado con BrowserRouter
- Modificaciones en Navbar.js para que tome parámetros del título y el link del menú
- Fixed: Se arregló la vista en responsive, agregando un Row antes del ItemList

## Información de Licencia: 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Soporte: 
Si necesitas consultar algo, puedes escribirme a ocram@beltren.dev. Incluye el asunto "Ayuda con el proyecto Store Front en React".

<img align='right' src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="230">

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/otanerocram)
