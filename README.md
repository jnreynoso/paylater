## PayLater

Se optó por Firebase, como enfoque cloud (`Function as a service`) para el despliegue de este proyecto, principalmente por el
caracter gratuito de la herramienta y la presteza para desplegar aplicaciones.

Las tareas solicitadas fueron las siguientes: 

- [x] Crear un usuario.
- [x] Listar usuarios.
- [x] Registrar el método de pago para usuario.
- [x] Listar método de pago dado un usuario.
- [x] Emitir un pago.

#### Observaciones

Es importante resaltar que la versión de node recomendada por google function es la `8.*.*`, por lo que algunos features modernos de javascript
no se pudieron usar, entre ellos:

- Spread Operator
- Rest Operator
- Import

No implemente BabelJS para el soporte de estos features y otros, por que la herramienta `firebase-tools` configura un setup
inicial, él cual, por motivos de tiempo no pude extender para agregar BabelJS.

Con respecto al sdk de *Hyperwallet*, el flavor usado por esta libreria paras las operaciones asíncronas es *Callback*. También por
motivos de tiempo, no utilizé libreria alguna para promisificar estas operaciones, por lo que, el flavor usado en el proyecto tambien
será *Callback*.

#### Patrones y Estructura

El patrón usado fue *Generic Repository*, empero, no se definió una clase abstracta para las operaciones comunes (CRUD). La estructura de
las carpetas, es la siguiente:

```
├── firebase.json
├── functions
│   ├── errors.js
│   ├── etc
│   ├── index.js
│   ├── models
│   │   ├── BankAccount.js
│   │   ├── index.js
│   │   ├── Payment.js
│   │   └── User.js
│   ├── package.json
│   ├── package-lock.json
│   ├── repositories
│   │   ├── BankAccount.js
│   │   ├── index.js
│   │   ├── Payment.js
│   │   └── User.js
│   ├── routes
│   │   ├── bank-accounts.js
│   │   ├── index.js
│   │   ├── payments.js
│   │   └── users.js
│   ├── services.js
│   └── utils.js
├── LICENSE
└── README.md
```

Las variables de entorno, deberán cargarse con el *cli* de firebase, de la siguiente manera:

```bash
> functions:config:set something.key='EXAMPLE'
```

```json
{
  "hypwerwallet": {
    "username":"THE USERNAME HYPERWALLET",
    "password":"PASSWORD",
    "program":"PROGRAM ID",
    
  }
}
```
Endpoint: [API](https://us-central1-pagadespues-79146.cloudfunctions.net/api/v1/users)

```
GET /api/v1/users
POST /api/v1/users

GET /api/v1/users/:tokenUser/bank-accounts
POST /api/v1/users/:tokenUser/bank-accounts

POST /api/v1/payments
```




