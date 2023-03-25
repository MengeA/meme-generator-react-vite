import { useEffect } from "react"
import React from "react"


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "top text",
        bottomText: "bottom text",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

   useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMeme() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState=>({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <section className="meme-section">
            <div className="form">

                <input className="form-input"
                     placeholder={meme.topText} 
                     type="text" 
                     name="topText"
                     onChange={handleChange}
                 />
                     
                <input className="form-input" 
                    placeholder={meme.bottomText} 
                    type="text"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button onClick={getMeme} className="form-btn" >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            

        </section>
    )
}