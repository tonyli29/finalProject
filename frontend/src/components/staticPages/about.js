import React from "react";

const About = props => {
  return (
    <div className="about">
      <a href="https://dserv.nitroplatform.com/api/storage/My1hMzcxeHA1MU0zY3FjcS9oclhBck9zU3ZNWm0wK3BCS1p1bnJhSEV6K3E2cDNTc3hNZUg3R1FlZTRvb2RVamhiSG82YjNld3JYSjhIcFNLVmxzcXRsSXR1ZDE4WlBmb01Ua0M4TVA0V0V2SDlSZmhwYW03MFUwc1JTM1JtRkxhT2JLQkpreTBHQzZsMmJ5SDFFMTdrQXFrWjJsZlhwNjA9?filename=Resume.pdf&attachment=true">
        View my Resume
      </a>
      <h1>About app</h1>
      <p>
        This is a full stack web app built using a ReactJS frontend, and django
        rest api for the back end.
      </p>
      <h3>Authentication</h3>
      <p>
        Authentication was implemented with token authentication. Maintained
        with redux.
      </p>
      <p>
        Error handling is also implemented so that when you login/register and
        make an error the error pop up will specifi what error has been made
      </p>
    </div>
  );
};

export default About;
