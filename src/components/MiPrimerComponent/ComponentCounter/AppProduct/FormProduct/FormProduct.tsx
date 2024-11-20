import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct{
    handleAddProduct: Function;
}

export const FormProduct : FC<IPropsFormProduct> = ({handleAddProduct}) => {
  const { handleChange, values, resetForm } = useForm({
    nombre:'',
    imagen:'',
    precio:0
  });

  const handleSubmitForm = () =>{
    handleAddProduct(values);
    resetForm();
  };

  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ingrese nombre producto"
          value={values.nombre} // Aquí necesitas asignar el valor correspondiente
          onChange={handleChange} // Aquí debes asignar la función `handleChange`
        />
      </Form.Group>

      <Form.Group controlId="formNombre">
        <Form.Label>imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="Ingrese imagen del producto"
          value={values.imagen} // Aquí necesitas asignar el valor correspondiente
          onChange={handleChange} // Aquí debes asignar la función `handleChange`
        />
      </Form.Group>

      <Form.Group controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="Ingrese precio del producto"
          value={values.precio} // Aquí necesitas asignar el valor correspondiente
          onChange={handleChange} // Aquí debes asignar la función `handleChange`
        />
      </Form.Group>

      <div className="d-flex justiffy-content-center mt-4">
        <Button onClick={handleSubmitForm} variant="primary"> 
            Enviar Producto
        </Button>
      </div>


    </Form>
  );
};

export default FormProduct;