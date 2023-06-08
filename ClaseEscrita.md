## Introducción a Redux.js

- Como pensamos en la programación?
- Flujos de datos
- Algoritmia (algoritmos)
- Circuitos

### ¿Qué es Redux.js?

- Qué es una librería?

- Problemas?

- El problema de React

Redux.js es una librería de JavaScript que se utiliza comúnmente para administrar el estado de una aplicación de una manera predecible. Proporciona un flujo de datos unidireccional y un patrón de arquitectura conocido como "Flujo de Datos de Redux". Redux se puede usar con cualquier biblioteca o framework de JavaScript, pero es más conocido por su integración con React.

### Conceptos básicos de Redux.js

Antes de profundizar en los conceptos de Redux, es importante comprender tres ideas fundamentales:

1. **Store**: Es el objeto central de Redux que almacena el estado de toda la aplicación. Solo debe haber una única store en una aplicación Redux.

2. **Actions**: Son objetos que describen un cambio en el estado de la aplicación. Las acciones deben tener un tipo (una cadena que identifica el tipo de acción) y pueden tener datos adicionales.

3. **Reducers**: Son funciones puras que especifican cómo cambia el estado de la aplicación en respuesta a una acción. Reciben el estado actual y una acción como parámetros y devuelven un nuevo estado. Los reducers son responsables de actualizar partes específicas del estado de la aplicación.

### Configurando una Store en Redux

Para configurar una store en Redux, necesitamos importar la función `createStore` de la librería de Redux.

ejemplo básico:

```javascript
import { createStore } from "redux";

// Reducer inicial que devuelve un estado vacío
function rootReducer(state = {}, action) {
  return state;
}

// Crear la store
const store = createStore(rootReducer);
```

En este ejemplo, hemos creado una store utilizando la función `createStore` y hemos proporcionado un reducer inicial llamado `rootReducer`. El reducer simplemente devuelve el estado actual sin realizar ningún cambio. Más adelante, vamos a ir creando y añadiendo reducers más complejos para gestionar el estado de nuestra aplicación.

### Implementando Reducers en Redux

Los reducers en Redux son responsables de actualizar partes específicas del estado de la aplicación en respuesta a acciones.
Un ejemplo de cómo implementar un reducer:

-Qué significa reducer?

```javascript
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
```

En este caso, hemos creado un reducer llamado `counterReducer` que maneja el estado de un contador. El reducer verifica el tipo de acción recibida y actualiza el estado en consecuencia. En este ejemplo, si la acción tiene un tipo 'INCREMENT', el contador se incrementa en uno. Si la acción tiene un tipo 'DECREMENT', el contador se decrementa en uno. Si la acción no coincide con ninguno de estos tipos, el estado se devuelve sin cambios.

### Combinando Reducers en Redux

En aplicaciones más grandes, es común tener múltiples reducers para manejar diferentes partes del estado. Redux proporciona una función llamada `combineReducers` que nos permite combinar varios reducers en un solo reducer raíz. Aquí tienes un ejemplo:

```javascript
import { combineReducers, createStore } from "redux";

function counterReducer(state = 0, action) {
  // Implementación del reducer del contador
}

function todosReducer(state = [], action) {
  // Implementación del reducer de tareas (todos)
}

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer);
```

En este ejemplo, tenemos dos reducers diferentes: `counterReducer` y `todosReducer`. Utilizamos la función `combineReducers` para combinarlos en un único reducer raíz llamado `rootReducer`. Cada reducer maneja una parte específica del estado (`counter` y `todos` en este caso). La store se crea utilizando el `rootReducer` combinado.

### Trabajando con Thunks en Redux

Los thunks son funciones especiales que nos permiten realizar lógica asíncrona en nuestras acciones de Redux. Redux Thunk es una biblioteca que nos ayuda a implementar thunks en Redux. Aquí tienes un ejemplo básico:

```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Implementación del reducer y los actions...

const store = createStore(rootReducer, applyMiddleware(thunk));
```

En este ejemplo, hemos importado la función `applyMiddleware` de Redux y la biblioteca `redux-thunk`. Luego, utilizamos `applyMiddleware` para aplicar el middleware de thunk a la store. Esto nos permite despachar acciones asíncronas que contienen funciones en lugar de objetos de acción normales.

### Creando Acciones en Redux

Las acciones en Redux son objetos simples que describen un cambio en el estado de la aplicación. Aquí tienes un ejemplo de cómo crear acciones:

```javascript
// Acción para incrementar el contador
const increment = () => ({
  type: "INCREMENT",
});

// Acción asíncrona usando un thunk
const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    // Lógica asíncrona (por ejemplo, una solicitud HTTP)
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error });
      });
  };
};
```

En el primer ejemplo, creamos una acción `increment` que simplemente tiene un tipo 'INCREMENT'. Esta acción se puede despachar para incrementar el contador en nuestra aplicación.

En el segundo ejemplo, creamos una acción asíncrona `fetchData` utilizando un thunk. El thunk nos permite realizar lógica asíncrona, como realizar una solicitud HTTP, antes de despachar otras acciones. En este caso, despachamos una acción 'FETCH_START' al inicio, luego realizamos una solicitud HTTP y despachamos 'FETCH_SUCCESS' o 'FETCH_ERROR' dependiendo del resultado.

Claro, puedo agregar algunos conceptos adicionales que podrían ser útiles para comprender mejor Redux.js. Aquí tienes un anexo a la lección con algunos ejemplos adicionales:

## Anexo: Conceptos Adicionales de Redux.js

### Selectores (Selectors)

Los selectores son funciones que nos permiten obtener datos específicos del estado de la aplicación. Son útiles para encapsular la lógica de acceso al estado y mantenerla separada de los componentes. Aquí tienes un ejemplo:

```javascript
// Selector para obtener el contador del estado
const getCounter = (state) => state.counter;

// Uso del selector
const counter = getCounter(store.getState());
console.log(counter); // Imprime el valor actual del contador
```

En este ejemplo, hemos creado un selector llamado `getCounter` que recibe el estado como argumento y devuelve el valor del contador. Usando `store.getState()`, obtenemos el estado actual de la store y luego llamamos al selector para obtener el valor del contador.

### Acciones Asincrónicas con Redux Thunk

En el ejemplo anterior, mencionamos cómo usar thunks para acciones asíncronas. Aquí tienes otro ejemplo que muestra cómo llamar a una acción asíncrona y encadenar acciones en respuesta a una solicitud HTTP:

```javascript
// Acción asíncrona para obtener datos de un API
const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_TODOS_REQUEST" });

    try {
      const response = await fetch("https://api.example.com/todos");
      const data = await response.json();
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_TODOS_ERROR", payload: error });
    }
  };
};

// Uso de la acción asíncrona
store.dispatch(fetchTodos());
```

En este ejemplo, creamos una acción asíncrona `fetchTodos` utilizando async/await para simplificar la lógica asíncrona. Despachamos una acción 'FETCH_TODOS_REQUEST' al inicio, realizamos una solicitud HTTP utilizando `fetch`, y luego despachamos 'FETCH_TODOS_SUCCESS' o 'FETCH_TODOS_ERROR' dependiendo del resultado.

### Middleware Personalizado

Redux permite el uso de middleware personalizado para interceptar y modificar acciones antes de que lleguen a los reducers. Aquí tienes un ejemplo básico de un middleware personalizado:

```javascript
const logger = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action);
  console.log("New state:", store.getState());
  return result;
};

// Uso del middleware personalizado
const store = createStore(rootReducer, applyMiddleware(logger));
```

En este ejemplo, creamos un middleware personalizado llamado `logger`. El middleware recibe la store como primer parámetro, luego la función `next` que representa la siguiente función en la cadena de middleware, y finalmente la acción que se está despachando. En este caso, simplemente imprimimos la acción antes de pasarla a través de `next`, y luego imprimimos el nuevo estado después de que se haya procesado la acción.

<!-- ### Acciones Asincrónicas con Redux Saga

Redux Saga es una biblioteca alternativa a Redux Thunk que ofrece una forma más avanzada de manejar acciones asíncronas. Utiliza generadores de JavaScript para escribir código asincrónico de manera más legible y mantenible. Aquí tienes un ejemplo básico:

```javascript
import { put, takeEvery, all } from 'redux-saga/effects';

// Saga para realizar una solicitud HTTP
function* fetchDataSaga() {
  try {
    const response = yield fetch('https://api.example.com/data');
    const data = yield response.json();
    yield put({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', payload: error });
  }
}

// Saga watcher para escuchar las acciones y ejecutar el saga correspondiente
function* watchFetchData() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);
}

// Combinar todos los sagas
function* rootSaga() {
  yield all([watchFetchData()]);
}

// Configurar Redux Saga en la store
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
```

En este ejemplo, utilizamos Redux Saga para manejar acciones asíncronas. Definimos un saga llamado `fetchDataSaga` que realiza una solicitud HTTP y despacha las acciones 'FETCH_SUCCESS' o 'FETCH_ERROR' según el resultado. Luego, definimos un saga watcher `watchFetchData` que escucha la acción 'FETCH_DATA' y ejecuta el saga correspondiente. Finalmente, combinamos todos los sagas en `rootSaga` y configuramos Redux Saga en la store utilizando `applyMiddleware` y `sagaMiddleware.run(rootSaga)`. -->

### DevTools de Redux

Redux DevTools es una herramienta increíble para depurar y visualizar el estado de la aplicación en Redux. Permite rastrear las acciones despachadas, ver el estado en cada punto de tiempo y realizar viajes en el tiempo para reproducir acciones anteriores. Aquí tienes un ejemplo básico de cómo habilitar Redux DevTools:

```javascript
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
```

En este ejemplo, hemos importado la función `composeWithDevTools` de 'redux-devtools-extension' y la hemos utilizado en la configuración de la store. `composeWithDevTools` combina el middleware de Redux con Redux DevTools, lo que nos permite utilizar la extensión de navegador para inspeccionar y depurar el estado de Redux.

### Uso de React-Redux

React-Redux es una biblioteca que proporciona una integración más estrecha entre Redux y React. Facilita la conexión de componentes de React a la store de Redux y simplifica el flujo de datos entre ellos.

ejemplo básico de cómo utilizar React-Redux:

```javascript
import { Provider, useSelector, useDispatch } from "react-redux";

// Componente de React que muestra el contador
function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <p>Contador: {counter}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

// Envolver la aplicación en el componente Provider
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
```

En este ejemplo, utilizamos el hook `useSelector` para seleccionar el valor del contador desde el estado de Redux y el hook `useDispatch` para obtener la función `dispatch`. Luego, utilizamos `dispatch` para despachar la acción 'INCREMENT' cuando se hace clic en el botón. El componente `Counter` está envuelto en el componente `Provider` de React-Redux, que proporciona la store a todos los componentes de la aplicación.
