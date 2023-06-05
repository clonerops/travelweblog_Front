
const Input = (props) => {
  const { title } = props;
  return (
    <div className="input">
        <label className="input__label">{title}</label>
        <input type="text" className="input__body" />
    </div>
  )
}

export default Input