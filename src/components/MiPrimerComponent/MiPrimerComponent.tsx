import { FC } from "react";

interface IPropsMiPrimerComponent {
  text: string;
  color: string;
  fontSize?: number;  // Corregido de fontSite a fontSize
}

export const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({ text, color, fontSize }) => {
  return (
    <div style={{ color: color, fontSize: fontSize ? `${fontSize}rem` : '2rem' }}> {/* Usamos fontSize si está disponible */}
      <p>{text}</p>
    </div>
  );
};
