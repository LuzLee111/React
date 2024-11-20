import { ChangeEvent, useState } from "react";

// Asegúrate de que la función useForm esté definida correctamente

const useForm = <T extends { [key: string]: string | number }>(
  initialValues: T
) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name === "edad") {
      setValues({ ...values, [name]: parseInt(value) }); // Convertir 'edad' a número
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};

export const FormComponent = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    nombre: "",
    edad: 0,
  });

  const { email, nombre, edad } = values;

  const handleSubmitForm = () => {
    console.log(values);
  };

  const handleResetForm = () => {
    resetForm();
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="example@example.com"
        />

        <input
          value={nombre}
          name="nombre"
          onChange={handleChange}
          type="text"
          placeholder="Nombre"
        />

        <input
          value={edad}
          name="edad"
          onChange={handleChange}
          type="number"
          placeholder="Edad"
        />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  );
};