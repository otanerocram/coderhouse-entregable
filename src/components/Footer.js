import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        <hr />
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">Nosotros</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
              <h5 className="text-uppercase">Contáctenos</h5>

              <address>
                <strong>InfoTec, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#222", color: "#fff" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
