import { AppProduct } from "./components/MiPrimerComponent/ComponentCounter/AppProduct/AppProduct";
import { ComponentCounter } from "./components/MiPrimerComponent/ComponentCounter/ComponentCounter";
import { ComponentUseEffect } from "./components/MiPrimerComponent/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/MiPrimerComponent/FormComponent/FormComponent";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      <MiPrimerComponent
        text={"Texto desde propiedades"}
        color='red'
        fontSize={5}
      />
      <ComponentCounter />
      <ComponentUseEffect />
      <FormComponent/>
      <AppProduct/>
    </div>
  );
};
