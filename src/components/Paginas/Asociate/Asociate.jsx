import "./Asociate.css";

const Asociate = () => {
  return (
    <>
      <main className="mainAsoc container">
        <div className="divIntro">
          <h1 className="titlePage">¿Queres ser socio de la Biblioteca?</h1>
          <p className="pPage">
            Al asociarte a nuestra biblioteca, estarás contribuyendo a su
            sostenibilidad y crecimiento, permitiendo que más personas accedan a
            los tesoros literarios que albergamos. Tu apoyo es fundamental para
            que podamos seguir ofreciendo servicios de calidad y promoviendo la
            lectura como una puerta hacia el conocimiento y el entretenimiento.
          </p>
        </div>

        <div className="divDetails">
          <div className="divImg">
            <img
              src="../../../../public/imagenes/asociate.jpeg"
              alt="asociateimg"
              className="asociateImg"
            />
          </div>
          <div className="detailsCont">
            <details className="">
              <summary>Beneficios</summary>
              <ul className="flex flex-column gap-0">
                <li>
                  Retirar libros en préstamo a domicilio por el plazo de un mes,
                  renovable si no hay otros socios esperando el mismo material.
                </li>
                <li>
                  Acceso a mas de 11.000 volúmenes para todas las edades, gustos
                  y necesidades; incluyendo una biblioteca especial para niños.
                </li>
                <li>Descuentos en el arancel de los talleres.</li>
                <li>
                  Solo pueden ser parte del Taller Maternal quienes sean sociois
                  de la Biblioteca previamente
                </li>
                <li>Envió de novedades por WhatsApp</li>
                <li>
                  Podrán ser miembros de la comisión directiva cada vez que se
                  renueve
                </li>
              </ul>
            </details>
            <details>
              <summary>Requisitos</summary>
              <ul className="flex flex-column gap-0">
                <li>
                  Completar y firmar la solicitud de admisión en la Biblioteca.
                </li>
                <li>
                  Abonar la cuota societaria Anual y Familiar. (Consultar valor
                  al momento del pago)
                </li>
              </ul>
            </details>
            <details>
              <summary>Formas de Pago</summary>
              <ul className="flex flex-column gap-0">
                <li>
                  En efectivo en la Biblioteca en el horario de atención al
                  público.
                </li>
                <li className="flex flex-column gap-0">
                  Por transferencia Bancaria. A la cuenta de Banco Nación:
                  <ul className="flex flex-column gap-0">
                    <li className="noList">Cuenta N 1341118546</li>
                    <li className="noList">CBU: 0110134440013411185462</li>
                    <li className="noList">CUIT: 30-68667801-2 IVA EXTENTO</li>
                    <li className="noList">
                      Enviar comprobante al Bibliotecario
                    </li>
                  </ul>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="divLine">
          <div className="Line"></div>
        </div>
      </main>
    </>
  );
};

export default Asociate;
