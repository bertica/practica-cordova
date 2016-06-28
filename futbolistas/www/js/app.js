// Utlizaremos una función anónima autoejecutable de modo que nuestras variables no sean globales. Más info: http://www.formandome.es/javascript/objetos-variables-funciones-javascript/

(function() {
  /* ---------------------------------- Variables locales ---------------------------------- */
  //var adapter = new WebSqlAdapter();
  //var adapter = new MemoryAdapter();
  //var adapter = new JSONPAdapter();
  var adapter = new LocalStorageAdapter();
  adapter.inicializar().done(function() {
    console.log("Inicializado: Adaptador de datos");
    $('body').html(new HomeView(adapter).render());
  });

  /* --------------------------------- Registro de eventos -------------------------------- */


  /* ---------------------------------- Funciones locales ---------------------------------- */

}());
