import React, { useState } from "react";
import "./HomeContent.css";
import { SobreMi } from "../modals";
import "../../../public/assets/css/main.css";
import { Col, Container, Image, Row, Button } from "react-bootstrap";

function HomeContent() {
  const [sobreMi, setSobreMi] = useState(false);
  return (
    <div className="headerr">
      <div>
        <div className="">
          <header id="header">
            <div className="foto">
              <Image
                src="https://scontent.fmex10-2.fna.fbcdn.net/v/t39.30808-6/480519534_9392905714150847_8499012358417627994_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHXVCjD3fA0aSJrpIGRBLtnJb1ouquoMJQlvWi6q6gwlOCBzXVH0vd8LzQukrOz_0C_X1T_zNPovfuWrG-rPz_b&_nc_ohc=LtduS0i-QTMQ7kNvwFc-vUR&_nc_oc=AdleOmZQFQ2F2-5wwmI7ghHZt29F4aODEmRAc4WFczQqBkBytJhx3z2M2v7JPbjQ5ClDlw7iyV5RGLxOzAAeqLBi&_nc_zt=23&_nc_ht=scontent.fmex10-2.fna&_nc_gid=9iSxQJqbPnw-w425k8Sd5g&oh=00_AfRHYJZbf9m5y7fOn4mzGlSy3musaceGLm1zUsxQe3VvMg&oe=6890A6F6"
                alt=""
              />
            </div>
            <div className="content ">
              <div className="inner">
                <h1>Eduardo Márquez</h1>

                <p>
                  Es un gusto presentarte este espacio donde podrás conocer una
                  muestra de mi trabajo, mi enfoque profesional y los proyectos
                  en los que he tenido el privilegio de participar.
                </p>
              </div>
            </div>
            <div className="botonera">
              <nav>
                <ul>
                  <li>
                    <a className="btn" onClick={() => setSobreMi(true)}>
                      Sobre Mi
                    </a>
                  </li>
                  <li>
                    <a>Trabajo</a>
                  </li>
                  <li>
                    <a>Educación</a>
                  </li>
                  <li>
                    <a>Proyectos</a>
                  </li>
                  <li>
                    <a>Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
      <SobreMi isOpen={sobreMi} closeModal={() => setSobreMi(false)} />
    </div>
  );
}

export default HomeContent;
