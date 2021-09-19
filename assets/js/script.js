class Propietario {
    constructor(tutor, direccion, telefono) {
      this.tutor = tutor;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  
    datosPropietario() {
      return `● El nombre del dueño es: ${this.tutor}, el domicilio es: ${this.direccion} y el número telefónico de contacto: ${this.telefono} <br>
      ● El tipo de animal es un: ${this.tipoMascota}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
    }
  }
  
  class Animal extends Propietario {
    constructor(tutor, direccion, telefono, tipoMascota) {
      super(tutor, direccion, telefono);
      this.tipoMascota = tipoMascota;
    }
  
    get tipo() {
      return this.tipo;
    }
  }
  
  class Mascota extends Animal {
    constructor(tutor, direccion, telefono, tipoMascota, nombreMascota, enfermedad) {
      super(tutor, direccion, telefono, tipoMascota);
      this._nombreMascota = nombreMascota;
      this._enfermedad = enfermedad;
    }
  
    get nombreMascota() {
      return this._nombreMascota;
    }
  
    set nombreMascota(nuevo_nombreMascota) {
      this._nombreMascota = nuevo_nombreMascota;
    }
  
    get enfermedad() {
      return this._enfermedad;
    }
  
    set enfermedad(nueva_enfermedad) {
      this._enfermedad = nueva_enfermedad;
    }
  }
  
  let submit = document.getElementById("button");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const tutor = document.getElementById("propietario").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipoMascota = document.getElementById("tipo").value;
    const enfermedad = document.getElementById("enfermedad").value;
    const resultado = document.getElementById("resultado");
  
    const informacionTotal = new Mascota(tutor, direccion, telefono, tipoMascota, nombreMascota, enfermedad);
  
    resultado.innerHTML = `<ul>
    <li>${informacionTotal.datosPropietario()}</li>
    <ul>`;
  });
  