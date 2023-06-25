export const InfoForm = ({ htmlFor, content, type, name, onChange }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="labelForm">
        {content}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id="message"
          cols="30"
          rows="10"
          onChange={onChange}
        ></textarea>
      ) : (
        <input type={type} id={htmlFor} name={name} onChange={onChange} />
      )}
    </>
  );
};
