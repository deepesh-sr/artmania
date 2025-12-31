
import { useEffect } from 'react'
import Nav from '../components/Nav'

const Home = () => {
    useEffect(() => {
        const img = new Image();
        img.src = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1492,fit=crop,trim=0;607.208480565371;0;301.90812720848055/YD0ErwlzZohpknwM/immmmgggg-A3QlB94OMxsE5DL8.jpg"
    }, []);
    return (
        <div className='h-screen w-full'>
            <Nav />
            <div className='h-full w-full  pt-8'>
                <div className='h-full w-full p-4'>
                    <img
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1492,fit=crop,trim=0;607.208480565371;0;301.90812720848055/YD0ErwlzZohpknwM/immmmgggg-A3QlB94OMxsE5DL8.jpg"
                        alt=""
                        className="max-w-full h-auto"
                        loading="eager"

                    />
                </div>
            </div>
        </div>
    )
}

export default Home