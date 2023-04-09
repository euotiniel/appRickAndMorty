import { Oval } from 'react-loader-spinner'

import { LoaderDiv } from './styles'

export default function index() {
  return (
    <LoaderDiv>
      <Oval
        height={100}
        width={100}
        color="#5FC038"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#5FC038"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderDiv>
  )
}