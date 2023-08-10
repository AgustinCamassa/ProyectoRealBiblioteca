import { useRef, useState } from "react";
import { InfoForm } from "./InfoForm/InfoForm";
import "./Contacto.css";
import emailjs from "@emailjs/browser";
import ninos from "../../../../public/imagenes/ninos.jpg";

const Contacto = () => {
  const initialEmail = {
    name: "",
    email: "",
    about: "",
    message: "",
  };
  const [email, setEmail] = useState(initialEmail);

  const infoInputs = [
    { htmlFor: "name", content: "Nombre", type: "text", name: "user_name" },
    { htmlFor: "email", content: "Email", type: "email", name: "user_email" },
    {
      htmlFor: "about",
      content: "Asunto",
      type: "text",
      name: "contact_number",
    },
    {
      htmlFor: "message",
      content: "Mensaje",
      type: "textarea",
      name: "message",
    },
  ];

  const inputValue = (evt) => {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...email };

    newState[inputName] = value;
    setEmail(newState);
  };

  const form = useRef();

  const validateForm = () => {
    return (
      email.user_name === "" ||
      email.contact_number === "" ||
      email.user_email === "" ||
      email.message === ""
    );
  };

  const resetForm = () => {
    setEmail(initialEmail);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_evt7wt9",
        "template_y8h355s",
        form.current,
        "X2KYYDaiskyQPgdWn"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="main container">
      <div className="divMain">
        <section className="sectionDoubts">
          <h2 className="titleForm">Formulario de Consultas</h2>
          <p className="pForm">
            Estamos encantados de resolver cualquier duda o consulta que tengas
            de la biblioteca y brindarte toda la información que necesites. Por
            favor, completa el siguiente formulario con tus datos personales y
            una descripción detallada de tu consulta.
          </p>
          <div className="divForm">
            <form ref={form} onSubmit={sendEmail}>
              <div className="divInputs">
                {infoInputs.map((i) => (
                  <InfoForm
                    key={i.htmlFor}
                    htmlFor={i.htmlFor}
                    content={i.content}
                    type={i.type}
                    name={i.name}
                    onChange={inputValue}
                  />
                ))}
              </div>
              <div className="divButton">
                <button disabled={validateForm()} className="btnForm">
                  Enviar
                </button>
              </div>
            </form>
            <div className="divImg">
              <img src={ninos} alt="dummyImage" className="imgForm" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contacto;
