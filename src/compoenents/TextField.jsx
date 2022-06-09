import '../App.css'

function textField({text, secret, onChange}) {
  return (
    <input 
    onChange={onChange ? onChange : null}
    type={secret ? 'password' : 'text'}
    className={`mt-4 w-[369px] h-[62px] bg-[#F0EFFF] rounded-lg outline-none px-7 placeholder-[#A7A3FF] text-xs`}
    placeholder={text}
    style={ {fontFamily: 'Poppins'} }
  />
  )
}

export default textField
