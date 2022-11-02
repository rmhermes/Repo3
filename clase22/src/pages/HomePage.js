import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'

const HomePage = (props) =>{
    const setting={
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay:true
    }

   
   
    return(
        <div className ="galeria">
           <Slider {...setting}>
            <img src="images/img01.jpg"></img>
            <img src="images/img02.jpg"></img>
            <img src="images/img03.jpg"></img>
            <img src="images/img04.jpg"></img>
            <img src="images/img05.jpg"></img>
            </Slider>
        </div>
    )
}

export default HomePage;
