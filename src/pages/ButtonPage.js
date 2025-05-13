<<<<<<< HEAD
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Clicked!');
=======
import Button from "../components/Button.js";
import { GoBriefcase, GoGlobe } from "react-icons/go";

function buttonPage() {
  const handleClick = () => {
    console.log("it clicked !!");
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
  };

  return (
    <div>
      <div>
<<<<<<< HEAD
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
=======
        <Button className="mb-5 " onClick={handleClick} outline primary>
          <GoBriefcase />
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
          Click me!!
        </Button>
      </div>
      <div>
<<<<<<< HEAD
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
=======
        <Button danger outline>
          Buy Now!
          <GoGlobe />
        </Button>
      </div>
      <div>
        <Button warning outline>
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
<<<<<<< HEAD
        <Button primary rounded>
=======
        <Button secondary rounded outline>
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
          Something!
        </Button>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ButtonPage;
=======
export default buttonPage;
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
