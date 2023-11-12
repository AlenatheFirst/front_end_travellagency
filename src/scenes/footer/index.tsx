import Logo from "@/assets/LogoTrip.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            This wonderful project is created by three talented young ladies: 
            Marina Danilov, Natalia Tropina and Alena Mikhalkevich. 
          </p>
          <p>© AIT TR GmbH/ProjectGroup13 All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Would you like to have such a colorful and professional page?</p>
          <p>(+49) 15781724112 Alena</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
