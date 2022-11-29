import Link from "next/link";

const Navbar=()=>{
    return(
        <nav>
            <Link href="/pages/getstarted"><a> Get started</a></Link>
            <Link href="/"><a>Learn More</a></Link>
        </nav>
    )
}
         
    
        
    


export default Navbar;