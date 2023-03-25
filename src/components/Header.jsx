import trollFace from "../assets/troll-face.png" 
export default function Header(){
    return(
        <header className="header">
            <img className="troll-logo" src={trollFace}/>
            <h2 className="header-title">Meme generator</h2>
            <h3 className="header-project">my project</h3>
        </header>
    )
}