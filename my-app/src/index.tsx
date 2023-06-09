import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";


const client = new ApolloClient({
  uri: "https://countries.nausicaa.wilders.dev/",
  cache: new InMemoryCache({
    addTypename: false
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
