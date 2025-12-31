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

        // Set initial states for a clean start
        tl.set(divRef.current, { display: 'flex' })
        tl.set('.stair', { width: 0, x: '0%' })
        tl.set(childRef.current, { opacity: 0, scale: 1.2 })

        // Animation sequence
        tl.from('.stair', {
            width: 0,
            stagger: 0.15
        })

        tl.from(childRef.current, {
            opacity: 1,
            scale: 1.2,
        })

        tl.to('.stair', {
            x: '100%',
            stagger: 0.1
        })
        
        tl.to(divRef.current, {
            display: 'none'
        })
        
        tl.set('.stair', {
            x: '0%',
        })

    }, [location.pathname])
    return (
        <div>
            <div ref={divRef} className="h-screen w-full fixed flex-col z-10 block">
                <div className="stair h-1/6 bg-black "></div>
                <div className="stair h-1/6 bg-black "></div>
                <div className="stair h-1/6 bg-black "></div>
                <div className="stair h-1/6 bg-black "></div>
                <div className="stair h-1/6 bg-black "></div>
                <div className="stair h-1/6 bg-black "></div>
            </div>
            <div ref={childRef}>
                {children}
            </div>
        </div>
    )
}

export default Transition