

function Main(props) {

  let {image, name} = props.data;


  return (
    <div className="w-full h-screen bg-red-100 flex justify-center items-center">
      <div className="w-4/12 bg-white p-4 rounded-sm shadow-sm">
        <img className="w-full" src={image} alt="" />
        <h2 className="text-2xl py-3">{name}</h2>

        <div className="flex justify-between">
          <button onClick={() => props.onClick()} className="btn text-white bg-primary">next</button>
          <button onClick={() => props.onPreviousClick()} className="btn text-white bg-primary">previous</button>
        </div>
      </div>
    </div>
  )
}

export default Main