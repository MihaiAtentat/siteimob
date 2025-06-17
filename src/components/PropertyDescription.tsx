import { useState } from "react";
import { Button } from "./ui/button";

const PropertyDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = `Avem o super afacere!!! Se vând 10 garsoniere în Bin Grand Residence aflate sub contract Airbnb. Finalizare și modernizare de 5 luni sunt dorate la cele mai bune standarde 2024 totul nou echipare și finisaj pentru o gama variată de clienți. Durata contractului cu societatea care le administrează în regim hotelier este pe 2 ani și a început în martie iar dumneavoastra în calitate de proprietar încasați 4200 euro/luna fara sa va ocupați de nimic. În cazul în care doriți să locuiți în oricare din acestea, puteți face schimb prin notificare de o luna in avans. Acestea au suprafața de 42mp și preț de vânzare de 61.000 euro. Locația este excepțională fiind la 2 minute de metrou Piața Universității și la 5 minute de Centrul Vechi. Pentru mai multe detalii mă puteți contacta.`;

  const previewText = fullDescription.split(" ").slice(0, 50).join(" ");
  const shouldShowButton = fullDescription.split(" ").length > 50;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 mb-8">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        Descrierea proprietății
      </h2>

      <div className="text-slate-600 leading-relaxed">
        <p className={`${!isExpanded ? "line-clamp-4" : ""}`}>
          {isExpanded ? fullDescription : previewText}
          {!isExpanded && shouldShowButton && "..."}
        </p>

        {shouldShowButton && (
          <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-red-600 hover:text-red-700 px-0 mt-2"
          >
            {isExpanded ? "Citește mai puțin" : "Citește mai mult"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PropertyDescription;
