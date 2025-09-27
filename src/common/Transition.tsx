import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Transition = ({ children }: { children: React.ReactNode }) => {

    const divRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    useEffect(() => {
        let tl = gsap.timeline();

        tl.to(divRef.current, {
            display: 'block flex'
        })

        tl.from('.stair', {
            width: 0,
            stagger: 0.15
        })
        tl.to('.stair', {
            x: '100%',
            stagger: 0.1
        })
        tl.to(divRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            x: '0%',
        })

        // const timer = setTimeout(()=>{
        //   if (divRef.current) {
        //     divRef.current.style.display = 'none';
        //   }
        //   return clearInterval(timer)
        // },2000)
        gsap.from(childRef.current, {
            opacity: 0,
            delay: 1.72
        })


    }, [location.pathname])
    return (
        <div>
            <div ref={divRef} className=" h-screen w-full flex flex-col">
                <div className="stair h-1/6 bg-red-900 "></div>
                <div className="stair h-1/6 bg-blue-600 "></div>
                <div className="stair h-1/6 bg-red-900 "></div>
                <div className="stair h-1/6 bg-blue-600 "></div>
                <div className="stair h-1/6 bg-red-900 "></div>
                <div className="stair h-1/6 bg-blue-600 "></div>
            </div>
            <div ref={childRef}>
                {children}
            </div>
        </div>
    )
}

export default Transition