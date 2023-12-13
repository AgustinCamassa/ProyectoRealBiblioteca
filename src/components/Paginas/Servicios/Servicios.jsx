import "./Servicios.css";

const SERVICES = [
  "../../../../public/imagenes/servicios-1.jpeg",
  "../../../../public/imagenes/servicios-2.jpeg",
  "../../../../public/imagenes/servicios-3.jpeg",
];

const Servicios = () => {
  return (
    <div className="container">
      <h1 className="h1Servicios">Servicios</h1>
      <section className="sectionServicios">
        <article className="articlesServicios">
          <p className="pSubtituloServicios">Servicio de Biblioteca a Socios</p>
          <div className="divContenedorItemsS">
            <p>
              Retirar libros en préstamo a domicilio por el plazo de un mes,
              renovable si no hay otros socios esperando el mismo material.
            </p>
            <p>
              - Acceso a más de 11.000 volúmenes para todas las edades, gustos y
              necesidades; incluyendo una biblioteca especial para niños.
            </p>
            <p>- Descuentos en el arancel de los talleres.</p>
            <p>
              - Solo pueden ser parte del Taller Maternal quienes sean socios de
              la Biblioteca previamente.
            </p>
            <p>- Envió de novedades por WhatsApp.</p>
            <p>
              - Podrán ser miembros de la comisión directiva cada vez que se
              renueve.
            </p>
          </div>
        </article>

        <article className="articlesServicios">
          <p className="pSubtituloServicios">Servicio de Biblioteca Pública</p>
          <div className="divContenedorItemsS">
            <p>
              - Prestamos el servicio de biblioteca pública en forma gratuita,
              por lo cuál no es necesario asociarse y en cualquier momento puede
              leer el material de su interés en nuestra sala de lectura.
            </p>
          </div>
        </article>
      </section>

      <section className="sectionImagesServices">
        {SERVICES.map((image, index) => (
          <img key={index} src={image} className="service-img" />
        ))}
      </section>
    </div>
  );
};

export default Servicios;
