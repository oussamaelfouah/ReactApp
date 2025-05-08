import Button from "../components/Button.js";
import { GoBriefcase, GoGlobe } from "react-icons/go";

function buttonPage() {
  const handleClick = () => {
    console.log("it clicked !!");
  };

  return (
    <div>
      <div>
        <Button className="mb-5 " onClick={handleClick} outline primary>
          <GoBriefcase />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
          <GoGlobe />
        </Button>
      </div>
      <div>
        <Button warning outline>
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default buttonPage;
