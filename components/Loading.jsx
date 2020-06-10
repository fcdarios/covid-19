import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='container-fluid loading'>
            <Loader
                type="ThreeDots"
                color="#c4c4c4"
                height={500}
                width={200}
                //3 secs
                />
        </div>
    )
}

export default Loading
