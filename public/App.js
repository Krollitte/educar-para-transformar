import "./App.css";

import { IoMdShareAlt } from "react-icons/io";
import { MdMail } from "react-icons/md";
import {
  FaSearch,
  FaLaptop,
  FaBookmark,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";

function App() {
  return (
    <div className="App col-md-12 d-flex flex-column">
      <div className="home col-md-12 col-sm-12 flex-md-row flex-sm-column">
        <div className="d-flex flex-md-column left-container col-md-4 col-sm-12">
          <div className="pink-square">
            <div className="blue-sticker">
              <br />
            </div>
            <div className="text-container">Racismo religioso</div>
          </div>
          <div className="green-square">
            <div className="blue-sticker">
              <br />
            </div>
            <div className="text-container">Estudantes autistas</div>
          </div>

          <div className="yellow-square">
            <div className="blue-sticker">
              <br />
            </div>
            <div className="text-container">
              Estudantes <br /> com quaisquer deficiência
            </div>
          </div>
        </div>
        <div className="center-container col-md-4 col-sm-12">
          <div className="center-box">
            <h1 style={{ color: "#FFFFFF" }}>PLATAFORMA</h1>
            <h3 style={{ color: "#FFFFFF" }}>Educar para transformar</h3>
          </div>
        </div>
        <div className="d-flex flex-md-column align-items-center flex-sm-row right-container col-md-4 col-sm-12">
          <div className="yellow-square-right">
            <div className="blue-sticker">
              <br />
            </div>
            <div className="text-container">
              Estudantes <br /> com quaisquer deficiência
            </div>
          </div>
          <div className="pink-square-right">
            <div className="blue-sticker">
              <br />
            </div>
            <div className="text-container">Racismo religioso</div>
          </div>
          <div className="green-square-right">
            <div className="blue-sticker">
              <br />
            </div>
            <div className="text-container">Estudantes autistas</div>
          </div>
        </div>
      </div>
      <div className="second-page">
        <header className="header">
          <div className="white-box col-md-2">
            Educar para <br /> transformar
          </div>
          <div className="buttons-area">
            <div className="button col-md-2">
              <FaBookmark color="#ffffff" size={20} />
              <div style={{ color: "#fff" }}>PLANOS</div>
            </div>
            <div className="button col-md-2">
              <FaLaptop color="#ffffff" size={20} />
              <div style={{ color: "#fff" }}>CURSOS</div>
            </div>
            <div className="button ">
              <IoMdShareAlt color="#ffffff" size={20} />
              <div style={{ color: "#fff" }}>CADASTRO</div>
            </div>
            <div className="button col-md-2">
              <FaArrowRight color="#ffffff" size={20} />
              <div style={{ color: "#fff" }}>LOGIN</div>
            </div>
          </div>
        </header>
        <div className="content-container">
          <div className="right-content-container col-md-6">
            NOVA PLATAFORMA DE <br /> ENSINO À DISTÂNCIA!
            <h5>POR UMA EDUCAÇÃO LIBERTADORA E ACESSÍVEL</h5>
          </div>

          <div className="left-content-container col-md-6">
            <h5>Educar para transformar</h5>
            <div>
              Uma plataforma direcionada aos educadores de escola pública do
              país, com o objetivo de auxiliá-los a lidar com temas relacionados
              a intolerância dentro e fora da sala de aula.
            </div>
          </div>
        </div>
        <div className="plans-container">
          <div
            className="title-container-plans"
            style={{ backgroundColor: "#f2f2f2" }}
          >
            <FaBookmark size={50} />
            Planos
          </div>
          <div className="plans">
            <div className="plan">
              <div className="name-plan">
                Plano Anual
                <br />
                <br />
              </div>
              <div className="price-plan">R$ 49.90 À VISTA OU PARCELADO</div>
              <div className="more-info-plan">
                + 50 CURSOS INCLUSOS
                <button>SAIBA MAIS</button>
              </div>
            </div>

            <div className="plan">
              <div className="name-plan">
                Plano Gratuito
                <br />
                <br />
              </div>
              <div className="price-plan">R$ 00,00</div>
              <div className="more-info-plan">
                20 CURSOS INCLUSOS
                <br /> COM ANÚNCIO
                <button>SAIBA MAIS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-page">
        <header className="header-courses">
          <div className="title-container">
            <FaLaptop size={30} />
            Cursos
          </div>
          <div className="searchbar-container">
            <div
              className="searchbar"
              placeholder="Qual curso está procurando ?"
            >
              <input
                className="input"
                placeholder="Qual curso está procurando ?"
              />
              <div className="button-search">
                <FaSearch color="#ffffff" size={10} />
              </div>
            </div>
          </div>
        </header>

        <div className="courses-container">
          <div className="course">
            <div
              className="course-header"
              style={{ backgroundColor: "#ffdc5d" }}
            >
              ESTUDANTES <br /> COM DEFICIÊNCIA
            </div>
            <div className="course-middle">
              <p>
                ESTUDANTES <br /> COM DEFICIÊNCIA
              </p>

              <p>02 HORAS</p>

              <p>ASSINATURA</p>

              <p>ACESSO IMEDIATO</p>
            </div>
            <div className="course-bottom">SAIBA MAIS</div>
          </div>

          <div className="course">
            <div
              className="course-header"
              style={{ backgroundColor: "#ffc5cd" }}
            >
              POVOS INDIGENAS
            </div>
            <div className="course-middle">
              <p>POVOS INDÍGENAS</p>

              <p>06 HORAS</p>

              <p>ASSINATURA</p>

              <p>ACESSO IMEDIATO</p>
            </div>
            <div className="course-bottom">SAIBA MAIS</div>
          </div>

          <div className="course">
            <div
              className="course-header"
              style={{ backgroundColor: "#97edaa" }}
            >
              FOBIA LGBTQAP+
            </div>
            <div className="course-middle">
              <p>FOBIA LGBTQAP+</p>

              <p>03 HORAS</p>

              <p>ASSINATURA</p>

              <p>ACESSO IMEDIATO</p>
            </div>
            <div className="course-bottom">SAIBA MAIS</div>
          </div>
        </div>
      </div>
      <div className="final-page">
        <div className="blue-box">
          <p className="blue-box-text-title">
            Quer receber mais informações do(s) curso(s)?
          </p>
          <p className="blue-box-text-subtitle">
            Digite seu email e acompanhe todas as novidades.
          </p>
          <div className="blue-box-input-box">
            <input className="input-blue-box" placeholder="Digite seu email" />
            <div className="button-submit">
              <p className="button-text">CADASTRAR</p>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="contacts">
            <div className="contacts-title">
              <p className="title">Contatos</p>
              <p className="schedule">Segunda à sexta - das 09h00 às 18h00</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="contact-item" style={{ marginBottom: 10 }}>
                <MdMail color="#696969" size={30} style={{ marginRight: 10 }} />
                <p className="contact-item-text">Fale Conosco</p>
              </div>

              <div className="contact-item" style={{ marginBottom: 10 }}>
                <CgFileDocument
                  color="#696969"
                  size={30}
                  style={{ marginRight: 10 }}
                />
                <p className="contact-item-text">Política de Privacidade</p>
              </div>

              <div className="contact-item" style={{ marginBottom: 10 }}>
                <FaGraduationCap
                  color="#696969"
                  size={30}
                  style={{ marginRight: 10 }}
                />
                <p className="contact-item-text">Consultar Certificado</p>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="contacts-title">
              <p className="title">Siga-nos</p>
            </div>

            <TiSocialYoutubeCircular color="#696969" size={40} />
            <BsInstagram color="#696969" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
