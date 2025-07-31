import { Modal, Button } from "react-bootstrap";
import "./modals.css";
function SobreMi({ isOpen, closeModal }) {
  if (!isOpen) return null;
  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      animation={true}
      className="modal"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Sobre Mi</strong>{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="../../../public/assets/img/sobre-mi.jpg" alt="" />
        <p>
          Ingeniero en Sistemas con sólida experiencia en desarrollo web,
          implementación de ERP y análisis de procesos empresariales. Proactivo,
          autodidacta y enfocado en resultados, con una fuerte orientación a la
          satisfacción del cliente. Experto en Intelisis ERP, desarrollo Full
          Stack y generación de reportes analíticos con Power BI
        </p>
        <h3>Habilidades</h3>
        <div className="habilidades">
          <img
            src="https://willdom.com/wp-content/uploads/2023/07/logo-react-js.png"
            alt=""
          />
          <img
            src="https://www.adaweb.es/wp-content/uploads/2022/05/logotipo_css-min-scalia-blog-default.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <img src="https://i.imgur.com/DRUiMyM.png" alt="" />

          <img
            src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2018/06/877f2-git-logo.png?ssl=1"
            alt=""
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
            alt=""
          />
          <img
            src="https://intelisis.com/assets/images/logo_intelisis_.png"
            alt=""
          />
          <img
            src="https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png"
            alt=""
          />
          <img
            src="https://download.logo.wine/logo/Office_365/Office_365-Logo.wine.png"
            alt=""
          />
          <img
            src="https://www.datasoft-consulting.fr/wp-content/uploads/mongodb-logo-white.png"
            alt=""
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SobreMi;
