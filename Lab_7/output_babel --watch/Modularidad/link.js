export const styleSheet = direccion => {
  let estilo = document.createElement('link');
  estilo.setAttribute('rel', 'stylesheet');
  estilo.setAttribute('type', 'text/css');
  estilo.setAttribute('href', direccion);
  return estilo;
};