import { Loader } from "@mantine/core"

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Loader color='violet' size={50}/>
    </div>
  )
}

export default Loading
