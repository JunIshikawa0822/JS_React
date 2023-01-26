import tanaka from '../styles/Home.module.css'
import Image from 'next/Image'

export default function MyHeader(){
    return(
        <header className = {tanaka.header}>
            <div className = {tanaka.fixed}>
                <div>
                    <Image src = '/images/logo-KU_keio.png' width ={80} height = {60} />
                </div>              
                           
                <h1 className={tanaka.title}>
                    <a href = "https://www.keiomenslacrosse.com/">KEIO LACROSSE</a>
                </h1>
            </div>
            
            <nav>
                <ul>
                    <li className = {tanaka.kids}><a href = "#">For Manager</a></li>
                    <li className = {tanaka.kids}><a href = "#">For Trainer</a></li>
                    <li className = {tanaka.kids}><a href = "#">For Analyzing Stuff</a></li>
                </ul>
            </nav>              
        </header>
    )
}