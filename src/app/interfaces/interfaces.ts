export interface Categoria {
    icono?: string;
    idpadre?: number;
    id?: number;
    nombre?: string;
}

export interface SubCategoria {
    icono?: string;
    idpadre?: number;
    id?: number;
    nombre?: string;
}


export interface Usuario {
  nombres?: string;
  apellidos?: string;
  username?: string;
  direccion?: string;
  email?: string;
  fecha_nacimiento?: string;
  password1?: string;
  password2?: string;
  celular?: string;
  foto?: string;

}
export interface Producto {
  id?: number;
  nombre?: string;
  calificacion?: string;
  precio?: number;
  descripcion?: string;
  stock?: number;
  cantidad?: number;
  cantidad_max?: number;
}
